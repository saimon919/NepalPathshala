import type { Metadata } from "next";
import ResultChecker from "@/components/ResultChecker";
import AdBanner from "@/components/AdBanner";

export const metadata: Metadata = {
  title: "Loksewa Result 2081 — Public Service Commission Results",
  description: "Check Loksewa Aayog (PSC) written exam and interview results for Kharidar, Nayab Subba, and Section Officer.",
};

export default function LoksewaResultPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Loksewa Result 2081</h1>
          <p>Public Service Commission (PSC) Exam Results</p>
        </div>
      </section>

      <section className="section">
        <div className="container article-wrap">
          <AdBanner slot="loksewa-top-123" format="horizontal" />

          <ResultChecker 
            title="Loksewa Written Result"
            examCode="LOKSEWA"
            isPublished={true}
            fields={[
              { name: "roll", label: "Master ID / Roll Number", placeholder: "e.g. 105432" }
            ]}
            officialUrl="https://psc.gov.np/category/results.html"
            officialName="PSC Official Notice Board"
          />

          <AdBanner slot="loksewa-mid-123" format="horizontal" style={{ marginTop: "2rem" }} />

          <div className="article-body" style={{ marginTop: "2rem" }}>
            <h2>How to Check Loksewa Results</h2>
            <p>
              Loksewa Aayog (PSC) publishes results primarily via official PDF notices on their website and the Gorkhapatra daily. 
              The online checker provides quick access to the notice board where you can download the merit list for your specific category and post.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
