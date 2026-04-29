import type { Metadata } from "next";
import ResultChecker from "@/components/ResultChecker";
import AdBanner from "@/components/AdBanner";

export const metadata: Metadata = {
  title: "CEE Result 2081 — MEC Medical Entrance Result",
  description: "Check Common Entrance Examination (CEE) Result 2081 for MBBS, BDS, BSc Nursing, and other medical programs.",
};

export default function CEEResultPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>CEE Result 2081</h1>
          <p>Medical Education Commission (MEC) Entrance Results</p>
        </div>
      </section>

      <section className="section">
        <div className="container article-wrap">
          <AdBanner slot="cee-top-123" format="horizontal" />

          <ResultChecker 
            title="CEE Medical Entrance Result"
            examCode="CEE"
            isPublished={false}
            fields={[
              { name: "roll", label: "MEC Roll Number", placeholder: "e.g. 500123" }
            ]}
            officialUrl="https://mec.gov.np"
            officialName="MEC Official Portal"
          />

          <AdBanner slot="cee-mid-123" format="horizontal" style={{ marginTop: "2rem" }} />
          
          <div className="article-body" style={{ marginTop: "2rem" }}>
            <h2>About CEE (Common Entrance Examination)</h2>
            <p>
              The Medical Education Commission (MEC) conducts the centralized CEE for all medical and allied health science programs in Nepal, including MBBS, BDS, and BSc Nursing.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
