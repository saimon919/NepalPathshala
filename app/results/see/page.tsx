import type { Metadata } from "next";
import ResultChecker from "@/components/ResultChecker";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";
import { getLiveExamStatuses } from "@/lib/liveStatus";

export async function generateMetadata(): Promise<Metadata> {
  const liveStatus = await getLiveExamStatuses();
  return {
    title: `SEE Result ${liveStatus.see.year} — Check Online with Marksheet`,
    description: `Check your SEE Result ${liveStatus.see.year} online instantly. Get your marksheet and grades by entering your symbol number and date of birth.`,
  };
}

export default async function SEEResultPage() {
  const liveStatus = await getLiveExamStatuses();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>SEE Result {liveStatus.see.year}</h1>
          <p>Check your Secondary Education Examination (SEE) Result instantly</p>
        </div>
      </section>

      <section className="section">
        <div className="container article-wrap">
          <AdBanner slot="see-top-123" format="horizontal" />

          <ResultChecker 
            title={`SEE Result ${liveStatus.see.year}`}
            examCode="SEE"
            isPublished={liveStatus.see.isPublished}
            fields={[
              { name: "symbol", label: "Symbol Number", placeholder: "e.g. 1234567A" },
              { name: "dob", label: "Date of Birth (BS)", placeholder: "YYYY-MM-DD", type: "date" }
            ]}
            officialUrl="https://see.ntc.net.np"
            officialName="Nepal Telecom Portal"
            smsFormat="SEE <SymbolNumber>"
            smsNumber="1600"
          />

          <AdBanner slot="see-mid-123" format="horizontal" style={{ marginTop: "2rem" }} />

          <div className="article-body" style={{ marginTop: "2rem" }}>
            <h2>About SEE Result 2081</h2>
            <p>
              The Secondary Education Examination (SEE) result for the year 2081 is published by the National Examinations Board (NEB). 
              Students can check their results online or via SMS. 
            </p>
            <h3>Grading System</h3>
            <ul>
              <li><strong>A+</strong>: 90% and above (Outstanding)</li>
              <li><strong>A</strong>: 80% to 89% (Excellent)</li>
              <li><strong>B+</strong>: 70% to 79% (Very Good)</li>
              <li><strong>B</strong>: 60% to 69% (Good)</li>
            </ul>
            <div style={{ marginTop: "1rem" }}>
              <Link href="/articles/see-result-2081-how-to-check" className="btn btn-outline" style={{ color: "#1a56db", borderColor: "#1a56db" }}>
                Read the Complete SEE Result Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
