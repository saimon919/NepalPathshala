import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using the NepalPathshala website.",
};

export default function TermsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Terms of Service</h1>
          <p>Please read these terms carefully before using our website.</p>
        </div>
      </section>

      <section className="section">
        <div className="container article-wrap article-body">
          <h2>1. Terms</h2>
          <p>
            By accessing the website at https://nepalpathshala.com, you are agreeing to be bound by these terms of service, 
            all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. 
            If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>

          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on NepalPathshala's 
            website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
          </p>
          <p>Under this license you may not:</p>
          <ul>
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>attempt to decompile or reverse engineer any software contained on the website;</li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>

          <h2>3. Disclaimer</h2>
          <p>
            The materials on NepalPathshala's website are provided on an 'as is' basis. NepalPathshala makes no warranties, expressed or implied, 
            and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, 
            fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2>4. Limitations</h2>
          <p>
            In no event shall NepalPathshala or its suppliers be liable for any damages (including, without limitation, damages for loss of data 
            or profit, or due to business interruption) arising out of the use or inability to use the materials on NepalPathshala's website, 
            even if NepalPathshala or a authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>

          <h2>5. Accuracy of materials</h2>
          <p>
            The materials appearing on NepalPathshala's website could include technical, typographical, or photographic errors. 
            NepalPathshala does not warrant that any of the materials on its website are accurate, complete or current. We may make changes 
            to the materials contained on its website at any time without notice.
          </p>
        </div>
      </section>
    </>
  );
}
