import type { Metadata } from "next";
import ResultChecker from "@/components/ResultChecker";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";
import { getLiveExamStatuses } from "@/lib/liveStatus";

export async function generateMetadata(): Promise<Metadata> {
  const liveStatus = await getLiveExamStatuses();
  return {
    title: `NEB Grade 12 Result ${liveStatus.neb.year} — Check Online`,
    description: `Check your NEB Class 12 Result ${liveStatus.neb.year} online. Fast and easy result checker for Science, Management, Humanities, and Education streams.`,
  };
}

export default async function NEBResultPage() {
  const liveStatus = await getLiveExamStatuses();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>NEB Grade 12 Result {liveStatus.neb.year}</h1>
          <p>Check your National Examinations Board (NEB) Result instantly</p>
        </div>
      </section>

      <section className="section">
        <div className="container article-wrap">
          <AdBanner slot="neb-top-123" format="horizontal" />

          <ResultChecker 
            title={`NEB Class 12 Result ${liveStatus.neb.year}`}
            examCode="NEB12"
            isPublished={liveStatus.neb.isPublished}
            fields={[
              { name: "symbol", label: "Symbol Number", placeholder: "e.g. 17200000" },
              { name: "dob", label: "Date of Birth", placeholder: "YYYY-MM-DD", type: "date" }
            ]}
            officialUrl="https://neb.ntc.net.np"
            officialName="NTC NEB Portal"
            smsFormat="NEB <SymbolNumber>"
            smsNumber="1600"
          />

          <AdBanner slot="neb-mid-123" format="horizontal" style={{ marginTop: "2rem" }} />

          <div className="article-body" style={{ marginTop: "2rem" }}>
            <h2>NEB Class 12 Result Details</h2>
            <p>
              The Class 12 exams are the final milestone of school education in Nepal. 
              The results are essential for applying to Bachelor's degree programs, medical (CEE), and engineering (IOE) entrance exams.
            </p>
            <div className="alert alert-info">
              <strong>Need help calculating your exact GPA?</strong> 
              <br/>Use our free tool to convert your grades to a final GPA out of 4.0.
            </div>
            <div style={{ marginTop: "1rem" }}>
              <Link href="/tools" className="btn btn-outline" style={{ color: "#1a56db", borderColor: "#1a56db" }}>
                Use Free GPA Calculator →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
