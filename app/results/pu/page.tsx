import type { Metadata } from "next";
import ResultChecker from "@/components/ResultChecker";
import AdBanner from "@/components/AdBanner";

export const metadata: Metadata = {
  title: "PU Result 2081 — Pokhara University Results",
  description: "Check Pokhara University (PU) semester exam results for BBA, BCA, Engineering, and Health programs.",
};

export default function PUResultPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Pokhara University Results</h1>
          <p>Check PU Bachelor and Master level semester exam results</p>
        </div>
      </section>

      <section className="section">
        <div className="container article-wrap">
          <AdBanner slot="pu-top-123" format="horizontal" />

          <ResultChecker 
            title="PU Semester Results"
            examCode="PU"
            isPublished={true}
            fields={[
              { name: "symbol", label: "Exam Roll Number", placeholder: "e.g. 190000" }
            ]}
            officialUrl="https://pu.edu.np/exam"
            officialName="PU Official Portal"
          />

          <AdBanner slot="pu-mid-123" format="horizontal" style={{ marginTop: "2rem" }} />

          <div className="article-body" style={{ marginTop: "2rem" }}>
            <h2>About PU Results</h2>
            <p>
              Pokhara University uses a strict CGPA grading system. The passing criteria for undergraduate programs is generally a CGPA of 2.0.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
