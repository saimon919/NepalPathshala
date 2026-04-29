import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "@/components/AdBanner";
import { getLiveExamStatuses } from "@/lib/liveStatus";

export const metadata: Metadata = {
  title: "Nepal Exam Results 2081 — SEE, NEB, TU, PU, IOE",
  description: "Check all Nepal exam results 2081 including SEE, NEB Grade 12, TU, PU, IOE entrance and more.",
};

export default async function ResultsPage() {
  const liveStatus = await getLiveExamStatuses();

  const resultCategories = [
    {
      title: "SEE Results",
      icon: "📋",
      items: [
        { 
          label: `SEE Result ${liveStatus.see.year} (Regular)`, 
          href: "/results/see", 
          badge: liveStatus.see.isPublished ? "badge-new" : "badge-soon", 
          badgeText: liveStatus.see.isPublished ? "Published" : "Soon" 
        },
        { label: "SEE Supplementary Result", href: "/results/see", badge: "badge-soon", badgeText: "Coming" },
      ],
    },
    {
      title: "NEB Results",
      icon: "📚",
      items: [
        { 
          label: `NEB Grade 12 Result ${liveStatus.neb.year}`, 
          href: "/results/neb", 
          badge: liveStatus.neb.isPublished ? "badge-new" : "badge-soon", 
          badgeText: liveStatus.neb.isPublished ? "Published" : "Soon" 
        },
        { label: "NEB Grade 11 Result", href: "/results/neb", badge: "badge-available", badgeText: "Available" },
      ],
    },
    {
      title: "University Results",
      icon: "🎓",
      items: [
        { label: "TU Semester Exam Result", href: "/results/tu", badge: "badge-available", badgeText: "Available" },
        { label: "KU Semester Result", href: "/results/ku", badge: "badge-available", badgeText: "Available" },
        { label: "PU Entrance Result", href: "/results/pu", badge: "badge-available", badgeText: "Available" },
        { label: "PU Semester Result", href: "/results/pu", badge: "badge-soon", badgeText: "Soon" },
      ],
    },
    {
      title: "Entrance Exam Results",
      icon: "🏫",
      items: [
        { label: "IOE Entrance Result", href: "/results/ioe", badge: "badge-soon", badgeText: "Soon" },
        { label: "CEE (MBBS) Entrance Result", href: "/results/cee", badge: "badge-soon", badgeText: "Soon" },
        { label: "Loksewa Written Result", href: "/results/loksewa", badge: "badge-available", badgeText: "Available" },
      ],
    },
  ];
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Nepal Exam Results 2081</h1>
          <p>Check SEE, NEB, TU, PU, IOE and all Nepal exam results from one place</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AdBanner slot="7788990011" format="horizontal" />
          <div style={{ height: "1.5rem" }} />

          <div className="alert alert-info">
            <strong>🔔 Notice:</strong> SEE Result 2081 and NEB Grade 12 Result 2081 have been published. Click below to check your result instantly.
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem", marginTop: "1.5rem" }}>
            {resultCategories.map((cat) => (
              <div key={cat.title} className="card">
                <div className="card-body">
                  <h3 style={{ marginBottom: "1rem" }}>{cat.icon} {cat.title}</h3>
                  <ul className="result-list">
                    {cat.items.map((item) => (
                      <li key={item.label}>
                        <Link href={item.href}>
                          {item.label}
                          <span className={`result-badge ${item.badge}`}>{item.badgeText}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <AdBanner slot="8899001122" format="horizontal" style={{ marginTop: "2rem" }} />

          <div className="card" style={{ marginTop: "2rem" }}>
            <div className="card-body">
              <h2 style={{ marginBottom: "1rem" }}>How to Check Results Fast</h2>
              <ol className="steps">
                <li>Select your exam type from the list above</li>
                <li>Visit the official result portal link</li>
                <li>Enter your symbol number and date of birth</li>
                <li>View and save your result</li>
              </ol>
              <div className="alert alert-info" style={{ marginTop: "1rem" }}>
                <strong>Tip:</strong> If the official website is slow, check results via SMS. Send <strong>SEE [Symbol No]</strong> to <strong>35001</strong>.
              </div>
            </div>
          </div>

          <div style={{ marginTop: "2rem" }}>
            <h2 style={{ marginBottom: "1rem" }}>Related Guides</h2>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/articles/see-result-2081-how-to-check" className="btn btn-accent">SEE Result Guide →</Link>
              <Link href="/articles/neb-grade-12-result-2081" className="btn btn-accent">NEB Result Guide →</Link>
              <Link href="/articles/how-to-calculate-gpa-nepal" className="btn btn-accent">GPA Calculator →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
