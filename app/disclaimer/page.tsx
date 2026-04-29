import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Legal disclaimer regarding the educational information and exam results provided on NepalPathshala.",
};

export default function DisclaimerPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Disclaimer</h1>
          <p>Please read this disclaimer before relying on our content.</p>
        </div>
      </section>

      <section className="section">
        <div className="container article-wrap article-body">
          <h2>1. Information Accuracy</h2>
          <p>
            The information provided by NepalPathshala ("we," "us," or "our") on https://nepalpathshala.com (the "Site") 
            is for general educational and informational purposes only. All information on the Site is provided in good faith, 
            however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, 
            validity, reliability, availability, or completeness of any information on the Site.
          </p>

          <h2>2. Exam Results Disclaimer</h2>
          <p>
            NepalPathshala is NOT an official government website, nor are we affiliated with the National Examinations Board (NEB), 
            Tribhuvan University (TU), Loksewa Aayog, or any other official educational body in Nepal. 
          </p>
          <p>
            The exam results and grades displayed on our website or accessed through our tools are for immediate informational purposes only 
            and cannot be treated as original mark sheets. While we strive to ensure the accuracy of the result data by sourcing it from 
            official channels, technical errors may occur. For official purposes, admissions, and legal documentation, students must rely 
            solely on the original printed mark sheets issued by the respective examination boards or universities.
          </p>

          <h2>3. External Links Disclaimer</h2>
          <p>
            The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating 
            from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, 
            availability, or completeness by us.
          </p>
          <p>
            We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by 
            third-party websites linked through the site.
          </p>

          <h2>4. Professional Advice Disclaimer</h2>
          <p>
            The Site cannot and does not contain professional educational or career advice. The educational and career information is provided 
            for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking 
            any actions based upon such information, we encourage you to consult with the appropriate professionals.
          </p>
        </div>
      </section>
    </>
  );
}
