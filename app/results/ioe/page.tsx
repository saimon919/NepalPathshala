import type { Metadata } from "next";
import ResultChecker from "@/components/ResultChecker";
import AdBanner from "@/components/AdBanner";

export const metadata: Metadata = {
  title: "IOE Entrance Result 2081 — Check Engineering Merit List",
  description: "Check Tribhuvan University Institute of Engineering (IOE) Entrance Result 2081 and download merit list.",
};

export default function IOEResultPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>IOE Entrance Result 2081</h1>
          <p>Check TU Engineering Entrance Merit List and Scorecard</p>
        </div>
      </section>

      <section className="section">
        <div className="container article-wrap">
          <AdBanner slot="ioe-top-123" format="horizontal" />

          <ResultChecker 
            title="IOE Entrance Result"
            examCode="IOE"
            isPublished={false}
            fields={[
              { name: "roll", label: "Roll Number", placeholder: "e.g. 10234" },
              { name: "dob", label: "Date of Birth", placeholder: "YYYY-MM-DD", type: "date" }
            ]}
            officialUrl="https://entrance.ioe.edu.np"
            officialName="IOE Entrance Portal"
          />

          <AdBanner slot="ioe-mid-123" format="horizontal" style={{ marginTop: "2rem" }} />

          <div className="article-body" style={{ marginTop: "2rem" }}>
            <h2>IOE Entrance Cutoffs & Merit List</h2>
            <p>
              The Institute of Engineering (IOE) conducts competitive entrance exams for admission into BE/BArch programs across Pulchowk, Thapathali, WRC, ERC, and affiliated private colleges.
            </p>
            <p>
              To get a scholarship (regular seat), candidates typically need a rank within the top 400 depending on the specific program (Computer, Civil, Architecture, etc.).
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
