import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the NepalPathshala team for inquiries, feedback, or support regarding our educational content.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div>
              <h2>Get In Touch</h2>
              <p style={{ marginBottom: "2rem" }}>
                If you have any questions about our articles, need help finding a specific exam result, 
                or want to report an issue with the website, please fill out the form or reach out via email.
              </p>
              
              <div style={{ marginBottom: "1.5rem" }}>
                <h3 style={{ fontSize: "1.1rem", marginBottom: ".5rem" }}>Email Us</h3>
                <p>support@nepalpathshala.com</p>
              </div>
              
              <div>
                <h3 style={{ fontSize: "1.1rem", marginBottom: ".5rem" }}>Office Location</h3>
                <p>Kathmandu, Bagmati Province, Nepal</p>
              </div>
            </div>
            
            <div>
              <form className="contact-form" action="#" method="POST">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" required placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" required placeholder="john@example.com" />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea required placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: "100%", background: "#1a56db", color: "#fff" }}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
