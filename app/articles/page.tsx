import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "@/components/AdBanner";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Education Articles & Guides for Nepal Students",
  description: "Browse all education articles, exam guides, scholarship information, and student resources for Nepal.",
};

export default function ArticlesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Education Articles & Guides</h1>
          <p>In-depth guides on exams, scholarships, career paths and more for Nepali students</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AdBanner slot="2233445566" format="horizontal" />
          <div style={{ height: "1.5rem" }} />
          <div className="grid-3">
            {articles.map((a) => (
              <Link key={a.slug} href={`/articles/${a.slug}`} style={{ textDecoration: "none" }}>
                <div className="card" style={{ height: "100%" }}>
                  <div className="card-body">
                    <span className="card-tag">{a.category}</span>
                    <div className="card-title">{a.title}</div>
                    <p className="card-excerpt">{a.excerpt}</p>
                    <div className="card-meta">
                      <span>📅 {a.date}</span>
                      <span>⏱ {a.readTime}</span>
                    </div>
                  </div>
                  <div className="card-footer">
                    <span className="read-more">Read Article →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <AdBanner slot="3344556677" format="horizontal" style={{ marginTop: "2rem" }} />
        </div>
      </section>
    </>
  );
}
