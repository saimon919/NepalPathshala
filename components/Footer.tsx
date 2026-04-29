import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">Nepal<span>Pathshala</span></div>
            <p className="footer-desc">
              Nepal's trusted source for exam results, education guides, scholarships, and tools for students.
            </p>
          </div>
          <div>
            <div className="footer-heading">Results</div>
            <ul className="footer-links">
              <li><Link href="/results/see">SEE Result</Link></li>
              <li><Link href="/results/neb">NEB Result</Link></li>
              <li><Link href="/results/tu">TU Result</Link></li>
              <li><Link href="/results/pu">PU Result</Link></li>
            </ul>
          </div>
          <div>
            <div className="footer-heading">Quick Links</div>
            <ul className="footer-links">
              <li><Link href="/tools">Tools</Link></li>
              <li><Link href="/scholarship">Scholarships</Link></li>
              <li><Link href="/loksewa">Loksewa</Link></li>
              <li><Link href="/articles">Articles</Link></li>
            </ul>
          </div>
          <div>
            <div className="footer-heading">Legal</div>
            <ul className="footer-links">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {year} NepalPathshala. All rights reserved. | Educational information for Nepali students.</p>
        </div>
      </div>
    </footer>
  );
}
