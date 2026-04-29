import type { Metadata } from "next";
import ResultChecker from "@/components/ResultChecker";
import AdBanner from "@/components/AdBanner";

export const metadata: Metadata = {
  title: "KU Result 2081 — Kathmandu University Results",
  description: "Check Kathmandu University (KU) entrance and semester exam results online.",
};

export default function KUResultPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Kathmandu University Results</h1>
          <p>Check KU entrance and regular semester exam results</p>
        </div>
      </section>

      <section className="section">
        <div className="container article-wrap">
          <AdBanner slot="ku-top-123" format="horizontal" />

          <ResultChecker 
            title="KU Results"
            examCode="KU"
            isPublished={true}
            fields={[
              { name: "registration", label: "Registration Number", placeholder: "e.g. 025555-18" }
            ]}
            officialUrl="https://ku.edu.np"
            officialName="KU Main Website"
          />

          <AdBanner slot="ku-mid-123" format="horizontal" style={{ marginTop: "2rem" }} />
        </div>
      </section>
    </>
  );
}
