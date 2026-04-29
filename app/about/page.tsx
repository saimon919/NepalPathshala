import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about NepalPathshala, our mission to provide accurate education information, and the team behind the platform.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>About NepalPathshala</h1>
          <p>Your trusted source for education updates in Nepal</p>
        </div>
      </section>

      <section className="section">
        <div className="container article-wrap">
          <h2>Our Mission</h2>
          <p>
            NepalPathshala was founded with a single mission: to provide fast, accurate, and accessible educational 
            information to students across Nepal. Whether it's the latest SEE results, Loksewa preparation guides, 
            or scholarship opportunities, we strive to be the most reliable digital resource for Nepali learners.
          </p>
          
          <h2 style={{ marginTop: "2rem" }}>Why Choose Us?</h2>
          <ul>
            <li><strong>Accuracy:</strong> We cross-verify all our information with official sources (NEB, TU, PSC) before publishing.</li>
            <li><strong>Speed:</strong> Our platform is optimized to load quickly even on slow internet connections during peak result times.</li>
            <li><strong>Free Tools:</strong> We provide free utilities like GPA calculators and date converters to help students.</li>
            <li><strong>Comprehensive Guides:</strong> Our articles go beyond surface-level news to provide actionable, step-by-step guidance.</li>
          </ul>

          <h2 style={{ marginTop: "2rem" }}>Our Team</h2>
          <p>
            We are a dedicated group of educators, developers, and writers passionate about improving digital 
            access to education in Nepal. Our content team consists of individuals who have navigated the Nepali 
            education system and understand the challenges students face.
          </p>
        </div>
      </section>
    </>
  );
}
