import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import AdBanner from "@/components/AdBanner";
import { getArticleBySlug, articles } from "@/lib/articles";

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: { title: article.title, description: article.excerpt, type: "article" },
  };
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== slug && a.category === article.category).slice(0, 3);

  return (
    <section className="section">
      <div className="container">
        <div className="grid-2">
          <div className="article-wrap">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span>›</span>
              <Link href="/articles">Articles</Link>
              <span>›</span>
              <span>{article.category}</span>
            </div>
            <div className="article-header">
              <span className="article-tag">{article.category}</span>
              <h1 className="article-title">{article.title}</h1>
              <div className="article-meta">
                <span>📅 {article.date}</span>
                <span>⏱ {article.readTime}</span>
                <span>✍️ NepalPathshala Team</span>
              </div>
            </div>

            {/* Top Ad */}
            <AdBanner slot="4455667788" format="horizontal" />

            <div className="article-body" dangerouslySetInnerHTML={{ __html: article.content }} />

            {/* Bottom Ad */}
            <AdBanner slot="5566778899" format="horizontal" style={{ marginTop: "2rem" }} />

            {/* Related */}
            {related.length > 0 && (
              <div style={{ marginTop: "2rem" }}>
                <h3 style={{ marginBottom: "1rem" }}>Related Articles</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: ".75rem" }}>
                  {related.map((r) => (
                    <Link key={r.slug} href={`/articles/${r.slug}`} className="card" style={{ textDecoration: "none", display: "block" }}>
                      <div className="card-body">
                        <span className="card-tag">{r.category}</span>
                        <div className="card-title">{r.title}</div>
                        <div className="card-meta"><span>{r.readTime}</span></div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="sidebar">
            <AdBanner slot="6677889900" format="rectangle" />
            <div className="sidebar-widget" style={{ marginTop: "1.2rem" }}>
              <div className="widget-title">Quick Links</div>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {[
                  { label: "Check SEE Result", href: "/results/see" },
                  { label: "Check NEB Result", href: "/results/neb" },
                  { label: "GPA Calculator", href: "/tools" },
                  { label: "Scholarships", href: "/scholarship" },
                  { label: "Loksewa Guide", href: "/loksewa" },
                ].map((l) => (
                  <li key={l.label} style={{ borderBottom: "1px solid #e2e8f0", padding: ".6rem 0" }}>
                    <Link href={l.href} style={{ fontSize: ".875rem", fontWeight: 600 }}>→ {l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
