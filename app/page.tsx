import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "@/components/AdBanner";
import { getRecentArticles } from "@/lib/articles";
import { getLiveExamStatuses } from "@/lib/liveStatus";
<meta name="google-site-verification" content="ISmgKwWZhQ4t5AJc6mtzNtFrDjREQfrMdp3to3bc8Sc" />

export const metadata: Metadata = {
  title: "NepalPathshala — Nepal's #1 Education & Results Hub",
  description: "Check SEE result, NEB result, scholarship guides, Loksewa preparation, GPA calculator and more for Nepali students.",
};

const categories = [
  { icon: "📋", label: "SEE Result", href: "/results/see" },
  { icon: "📚", label: "NEB Result", href: "/results/neb" },
  { icon: "🎓", label: "Scholarship", href: "/scholarship" },
  { icon: "🏛️", label: "Loksewa", href: "/loksewa" },
  { icon: "🧮", label: "GPA Calc", href: "/tools" },
  { icon: "📅", label: "Date Convert", href: "/tools" },
  { icon: "🏫", label: "Colleges", href: "/articles" },
  { icon: "📰", label: "All Articles", href: "/articles" },
];

export default async function HomePage() {
  const articles = getRecentArticles(6);
  const liveStatus = await getLiveExamStatuses();

  const latestResults = [
    { 
      title: `SEE Result ${liveStatus.see.year}`, 
      href: "/results/see", 
      badge: liveStatus.see.isPublished ? "badge-new" : "badge-soon", 
      badgeText: liveStatus.see.isPublished ? "Published" : "Coming Soon" 
    },
    { 
      title: `NEB Grade 12 Result ${liveStatus.neb.year}`, 
      href: "/results/neb", 
      badge: liveStatus.neb.isPublished ? "badge-new" : "badge-soon", 
      badgeText: liveStatus.neb.isPublished ? "Published" : "Coming Soon" 
    },
    { title: "TU Semester Exam Result", href: "/results/tu", badge: "badge-available", badgeText: "Available" },
    { title: "PU Entrance Result", href: "/results/pu", badge: "badge-available", badgeText: "Available" },
    { title: "IOE Entrance Result", href: "/results/ioe", badge: "badge-soon", badgeText: "Soon" },
    { title: "CEE Entrance Result", href: "/results/cee", badge: "badge-soon", badgeText: "Soon" },
  ];
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>Nepal's #1 Education & Results Portal</h1>
          <p>Check SEE results, NEB results, scholarship guides, Loksewa prep, GPA calculator and more — all in one place.</p>
          <div className="hero-badges">
            <span className="badge">✓ SEE Result 2081</span>
            <span className="badge">✓ NEB Result 2081</span>
            <span className="badge">✓ Free GPA Calculator</span>
            <span className="badge">✓ Scholarship Guide</span>
          </div>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/results" className="btn btn-white">Check Results →</Link>
            <Link href="/tools" className="btn btn-outline">GPA Calculator</Link>
          </div>
        </div>
      </section>

      {/* AdSense — Top Banner */}
      <div className="container">
        <AdBanner slot="1234567890" format="horizontal" style={{ marginTop: "1.5rem" }} />
      </div>

      {/* Categories */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Quick Access</h2>
              <p className="section-subtitle">Find what you need instantly</p>
            </div>
          </div>
          <div className="cat-grid">
            {categories.map((c) => (
              <Link key={c.label} href={c.href} className="cat-card">
                <div className="cat-icon">{c.icon}</div>
                <div className="cat-label">{c.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Results + Sidebar */}
      <section className="section" style={{ background: "#fff", borderTop: "1px solid #e2e8f0" }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="section-header">
                <div>
                  <h2 className="section-title">Latest Results 2081</h2>
                  <p className="section-subtitle">Check your exam results here</p>
                </div>
                <Link href="/results" className="view-all">View All →</Link>
              </div>
              <div className="card">
                <div className="card-body">
                  <ul className="result-list">
                    {latestResults.map((r) => (
                      <li key={r.title}>
                        <Link href={r.href}>
                          {r.title}
                          <span className={`result-badge ${r.badge}`}>{r.badgeText}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="sidebar">
              <div className="sidebar-widget">
                <div className="widget-title">🔥 Trending Now</div>
                {articles.slice(0, 4).map((a, i) => (
                  <div key={a.slug} className="trending-item">
                    <div className="trending-num">0{i + 1}</div>
                    <div>
                      <div className="trending-title"><Link href={`/articles/${a.slug}`}>{a.title}</Link></div>
                      <div className="trending-cat">{a.category} · {a.readTime}</div>
                    </div>
                  </div>
                ))}
              </div>
              <AdBanner slot="0987654321" format="rectangle" />
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Education Guides</h2>
              <p className="section-subtitle">In-depth guides for Nepali students</p>
            </div>
            <Link href="/articles" className="view-all">View All →</Link>
          </div>
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
        </div>
      </section>

      {/* Bottom AdSense */}
      <div className="container">
        <AdBanner slot="1122334455" format="horizontal" style={{ marginBottom: "2rem" }} />
      </div>

      {/* Why NepalPathshala */}
      <section className="section" style={{ background: "#1a56db", color: "#fff" }}>
        <div className="container text-center">
          <h2 style={{ color: "#fff", marginBottom: "1rem" }}>Why 50,000+ Students Trust NepalPathshala</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", marginTop: "1.5rem" }}>
            {[
              { icon: "⚡", title: "Instant Results", desc: "Results published within minutes of official release" },
              { icon: "📖", title: "Expert Guides", desc: "Detailed, accurate guides written by education experts" },
              { icon: "🛠️", title: "Free Tools", desc: "GPA calculator, date converter and more — completely free" },
              { icon: "📱", title: "Mobile-Friendly", desc: "Optimized for low-bandwidth mobile users across Nepal" },
            ].map((f) => (
              <div key={f.title} style={{ background: "rgba(255,255,255,0.1)", borderRadius: "10px", padding: "1.5rem" }}>
                <div style={{ fontSize: "2rem", marginBottom: ".5rem" }}>{f.icon}</div>
                <h3 style={{ color: "#fff", marginBottom: ".4rem", fontSize: "1rem" }}>{f.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: ".875rem", margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
