import type { Metadata } from "next";
import ResultChecker from "@/components/ResultChecker";
import AdBanner from "@/components/AdBanner";

export const metadata: Metadata = {
  title: "TU Result 2081 — Check Tribhuvan University Results",
  description: "Check TU Bachelor and Master degree semester results online. BBS, BSc, BA, BBA, MBS, and Engineering results.",
};

export default function TUResultPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Tribhuvan University Results</h1>
          <p>Check TU Bachelor and Master level semester/yearly exam results</p>
        </div>
      </section>

      <section className="section">
        <div className="container article-wrap">
          <AdBanner slot="tu-top-123" format="horizontal" />

          <ResultChecker 
            title="TU Exam Results"
            examCode="TU"
            isPublished={true}
            fields={[
              { name: "program", label: "Program/Faculty", placeholder: "e.g. BBS 1st Year" },
              { name: "symbol", label: "Exam Roll Number", placeholder: "e.g. 700000" }
            ]}
            officialUrl="https://tuexam.edu.np"
            officialName="TU Exam Controller Office"
            smsFormat="<ProgramCode> <RollNumber>"
            smsNumber="33624"
          />

          <AdBanner slot="tu-mid-123" format="horizontal" style={{ marginTop: "2rem" }} />

          <div className="article-body" style={{ marginTop: "2rem" }}>
            <h2>About TU Results</h2>
            <p>
              Tribhuvan University (TU) is the largest university in Nepal. The Office of the Controller of Examinations (OCE) 
              Balkhu publishes results for yearly programs, while respective Dean's offices publish semester results.
            </p>
            <ul>
              <li><strong>BBS/BA/BSc:</strong> Published by OCE Balkhu</li>
              <li><strong>BCA/BIM/BBA:</strong> Published by FOM Dean's Office</li>
              <li><strong>Engineering (BE):</strong> Published by IOE Pulchowk</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
