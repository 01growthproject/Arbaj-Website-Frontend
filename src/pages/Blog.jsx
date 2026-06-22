import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/blog.css";
import SEOptimization from "../components/SEOptimization";
import { POSTS } from "../components/Post/Post";

/* ═══════════════════════════════════════════════
   NEWSLETTER (currently disabled — keeping shell)
═══════════════════════════════════════════════ */
function Newsletter() {
  return (
    <SEOptimization
      title="Digital Marketing Blog | SEO, Ads & Growth Tips"
      description="Learn SEO, Google Ads, and social media strategies with our expert blog. Get practical tips to increase traffic, leads, and online business growth."
      url="https://arbajtechnologypvtltd.com/blog"
      image="https://arbajtechnologypvtltd.com/og-blog.jpg"
    />
  );
}

/* ═══════════════════════════════════════════════
   BLOG PAGE
═══════════════════════════════════════════════ */
export default function Blog() {
  const [search, setSearch] = useState("");
  const heroRef = useRef(null);

  /* mouse parallax on hero orbs */
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const move = (e) => {
      const { left, top, width, height } = hero.getBoundingClientRect();
      const x = ((e.clientX - left) / width - 0.5) * 28;
      const y = ((e.clientY - top) / height - 0.5) * 18;
      hero.querySelectorAll(".bl-hero__orb").forEach((orb, i) => {
        const d = i === 0 ? 1 : -0.6;
        orb.style.transform = `translate(${x * d}px, ${y * d}px)`;
      });
    };
    hero.addEventListener("mousemove", move);
    return () => hero.removeEventListener("mousemove", move);
  }, []);

  const filtered = POSTS.filter((p) => {
    const q = search.toLowerCase();
    return !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q);
  });

  const featured = !search ? filtered.find((p) => p.featured) : null;
  const grid = featured ? filtered.filter((p) => !p.featured) : filtered;

  // const TICKER_ITEMS = [
  //   "SEO Tips", "Google Ads", "Social Media", "Web Development",
  //   "Content Marketing", "Brand Strategy", "Growth Hacks", "Digital Trends",
  // ];

  return (
    <>
      <Newsletter />

      {/* ── HERO ── */}
      <section className="bl-hero" ref={heroRef}>
        <div className="bl-hero__dotgrid" aria-hidden />
        <div className="bl-hero__orb bl-hero__orb--a" aria-hidden />
        <div className="bl-hero__orb bl-hero__orb--b" aria-hidden />
        <div className="bl-hero__orb bl-hero__orb--c" aria-hidden />

        <div className="bl-hero__inner">

          {/* LEFT — copy + search */}
          <div className="bl-hero__copy">
            <div className="bl-hero__badge">
              <span className="bl-hero__badge-icon"></span>
              Digital Marketing Blog
              <span className="bl-hero__badge-dot" />
            </div>

            <h1 className="bl-hero__heading">
              <span className="bl-hero__heading-row">
                <span>Tips, Trends &</span>
              </span>
              <span className="bl-hero__heading-row">
                <span>
                  <span className="bl-hero__grad">Marketing Strategies</span>
                </span>
              </span>
            </h1>

            <p className="bl-hero__para">
              Practical insights on SEO, Google Ads, social media, and web growth —
              written by our team to help your business win online.
            </p>

            {/* search */}
            <div className={`bl-hero__search${search ? " bl-hero__search--val" : ""}`}>
              <svg viewBox="0 0 20 20" fill="none" width="16" className="bl-hero__search-ico">
                <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.6" />
                <path d="M14 14l3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bl-hero__search-input"
              />
              {search && (
                <button
                  className="bl-hero__search-clear"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  <svg viewBox="0 0 12 12" fill="none" width="10">
                    <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* RIGHT — decorative stats card */}
          <div className="bl-hero__card">
            <div className="bl-hero__card-title">Blog at a Glance</div>
            <div className="bl-hero__card-stats">
              <div className="bl-hero__card-stat">
                <strong>{POSTS.length}<em>+</em></strong>
                <span>Articles</span>
              </div>
              <div className="bl-hero__card-stat">
                <strong>5<em>+</em></strong>
                <span>Categories</span>
              </div>
              <div className="bl-hero__card-stat">
                <strong>50<em>k</em></strong>
                <span>Readers</span>
              </div>
              <div className="bl-hero__card-stat">
                <strong>98<em>%</em></strong>
                <span>Useful</span>
              </div>
            </div>
            <div className="bl-hero__card-tags">
              {["SEO", "Google Ads", "Social Media", "Web Dev", "Branding"].map((t) => (
                <span className="bl-hero__card-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Ticker */}
      {/* <div className="bl-ticker">
        <div className="bl-ticker__belt">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="bl-ticker__word">
              {item} <span className="bl-ticker__div">✦</span>
            </span>
          ))}
        </div>
      </div> */}

      {/* ── MAIN ── */}
      <main className="bl-main">

        {/* Featured */}
        {featured && (
          <article className="bl-featured">
            <div className="bl-featured__img-wrap">
              <img src={featured.img} alt={featured.title} className="bl-featured__img" />
              <span className="bl-featured__badge">Featured</span>
            </div>
            <div className="bl-featured__body">
              <div className="bl-featured__meta">
                <span>{featured.date}</span>
                <span className="bl-featured__sep" />
                <span>{featured.readTime}</span>
              </div>
              <h2 className="bl-featured__title">{featured.title}</h2>
              <p className="bl-featured__excerpt">{featured.excerpt}</p>
              <div className="bl-featured__footer">
                <div />
                <Link
                  to={`/blog/${featured.title
                    .toLowerCase()
                    .replace(/[^a-z0-9 ]/g, "")
                    .replace(/\s+/g, "-")}`}
                  className="bl-featured__cta"
                >
                  <span>Read Article</span>
                  <svg viewBox="0 0 12 12" fill="none" width="12">
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </article>
        )}

        {/* Search result count */}
        {search && (
          <p className="bl-results">
            {filtered.length} result{filtered.length !== 1 ? "s" : ""} for &quot;{search}&quot;
          </p>
        )}

        {/* Grid */}
        {grid.length > 0 ? (
          <div className="bl-grid">
            {grid.map((post, i) => (
              <article key={post.id} className="bl-card" style={{ "--i": i }}>
                <span className="bl-card__glow-line" aria-hidden />
                <div className="bl-card__img-wrap">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="bl-card__img"
                    loading="lazy"
                  />
                </div>
                <div className="bl-card__body">
                  <div className="bl-card__meta">
                    <span>{post.date}</span>
                    <span className="bl-card__dot" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="bl-card__title">{post.title}</h3>
                  <p className="bl-card__excerpt">{post.excerpt}</p>
                  <div className="bl-card__footer">
                    <Link
                      to={`/blog/${post.title
                        .toLowerCase()
                        .replace(/[^a-z0-9 ]/g, "")
                        .replace(/\s+/g, "-")}`}
                      className="bl-card__link"
                    >
                      Read Article
                      <svg viewBox="0 0 12 12" fill="none" width="10">
                        <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bl-empty">
            <svg viewBox="0 0 48 48" fill="none" width="48">
              <circle cx="22" cy="22" r="14" stroke="#6E6B7B" strokeWidth="2" />
              <path d="M32 32l8 8" stroke="#6E6B7B" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <p>No articles found for &quot;{search}&quot;</p>
            <button className="bl-empty__reset" onClick={() => setSearch("")}>
              Clear search
            </button>
          </div>
        )}

        {/* Newsletter placeholder */}
        <div className="bl-nl">
          <div className="bl-nl__bg" aria-hidden />
          <div className="bl-nl__content">
            <span className="bl-nl__eyebrow">Stay Ahead</span>
            <h2 className="bl-nl__heading">
              Digital Marketing tips,<br />
              <em>straight to your inbox</em>
            </h2>
            <p className="bl-nl__sub">
              Weekly insights on SEO, social, ads and growth. No spam. Unsubscribe anytime.
            </p>
            <Link
              to="/contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "var(--coral)", color: "#fff",
                padding: "14px 32px", borderRadius: "999px",
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: ".92rem",
                transition: "transform .35s, box-shadow .35s",
              }}
            >
              Get in Touch
              <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
              </svg>
            </Link>
          </div>
        </div>

      </main>
    </>
  );
}

export { POSTS };