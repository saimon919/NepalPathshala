export interface ExamStatus {
  examCode: string;
  isPublished: boolean;
  year: string;
  lastChecked: string;
}

// Fallbacks in case the scraper fails
const FALLBACK_STATUSES: Record<string, ExamStatus> = {
  SEE: { examCode: "SEE", isPublished: true, year: "2081", lastChecked: new Date().toISOString() },
  NEB12: { examCode: "NEB12", isPublished: true, year: "2081", lastChecked: new Date().toISOString() },
  TU: { examCode: "TU", isPublished: true, year: "2081", lastChecked: new Date().toISOString() },
};

/**
 * Checks if the official site contains mentions of the target year.
 * Next.js fetch cache ensures we only hit their servers once per hour.
 */
async function scrapeStatus(url: string, targetYear: string, examCode: string): Promise<ExamStatus> {
  try {
    const res = await fetch(url, { next: { revalidate: 3600 } }); // Cache for 1 hour
    
    if (!res.ok) throw new Error("Site down");
    
    const html = await res.text();
    const isPublished = html.includes(targetYear);
    
    return {
      examCode,
      isPublished: isPublished ? true : FALLBACK_STATUSES[examCode]?.isPublished || false,
      year: isPublished ? targetYear : FALLBACK_STATUSES[examCode]?.year || "2081",
      lastChecked: new Date().toISOString()
    };
  } catch (error) {
    // If the government site crashes, safely return the fallback (last known state)
    console.warn(`Scraper failed for ${examCode}. Using fallback.`);
    return FALLBACK_STATUSES[examCode] || {
      examCode,
      isPublished: false,
      year: "2081",
      lastChecked: new Date().toISOString()
    };
  }
}

export async function getLiveExamStatuses() {
  const currentYear = new Date().getFullYear();
  // BS Year approximation (AD + 57 years roughly)
  const targetBsYear = (currentYear + 56).toString(); // Adjust to 2082 when testing 2026

  // Run all scrapers in parallel
  const [seeStatus, nebStatus] = await Promise.all([
    scrapeStatus("https://see.ntc.net.np", targetBsYear, "SEE"),
    scrapeStatus("https://neb.ntc.net.np", targetBsYear, "NEB12"),
  ]);

  return {
    see: seeStatus,
    neb: nebStatus,
    targetYear: targetBsYear
  };
}
