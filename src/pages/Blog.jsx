import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/blog.css";
import SEOptimization from "../components/SEOptimization";
import { POSTS } from "../components/Post/Post";
/* ─────────────────────────────────────────
   POSTS — no cat / slug / accent
───────────────────────────────────────── */

/* ─────────────────────────────────────────
   NEWSLETTER
───────────────────────────────────────── */
function Newsletter() {
  // const [email, setEmail] = useState("");
  // const [sent, setSent] = useState(false);
  // const [focused, setFocused] = useState(false);

  return (
    <>
      <SEOptimization
        title="Digital Marketing Blog | SEO, Ads & Growth Tips"
        description="Learn SEO, Google Ads, and social media strategies with our expert blog. Get practical tips to increase traffic, leads, and online business growth."
        url="https://arbajtechnologypvtltd.com/blog"
        image="https://arbajtechnologypvtltd.com/og-blog.jpg"
      />

      {/* <div className="bl-nl">
        <div className="bl-nl__bg" aria-hidden />
        <div className="bl-nl__content">
          <span className="bl-nl__eyebrow">Stay Ahead</span>
          <h2 className="bl-nl__heading">
            Digital Marketing tips,<br />straight to your inbox
          </h2>
          <p className="bl-nl__sub">
            Weekly insights on SEO, social, ads and growth. No spam. Unsubscribe anytime.
          </p>
          {sent ? (
            <div className="bl-nl__success">
              <svg viewBox="0 0 20 20" fill="none" width="20" height="20">
                <circle cx="10" cy="10" r="9" stroke="#17abbc" strokeWidth="1.5" />
                <path d="M6 10l3 3 5-5" stroke="#17abbc" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              You are on the list!
            </div>
          ) : (
            <div className={`bl-nl__form${focused ? " bl-nl__form--focus" : ""}`}>
              <svg viewBox="0 0 20 20" fill="none" width="16" height="16" className="bl-nl__icon">
                <path d="M2 5l8 5 8-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" />
              </svg>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className="bl-nl__input"
              />
              <button className="bl-nl__btn" onClick={() => email && setSent(true)}>
                Subscribe
              </button>
            </div>
          )}
        </div>
      </div> */}
    </>
  );
}

/* ─────────────────────────────────────────
   BLOG PAGE
───────────────────────────────────────── */
export default function Blog() {
  const [search, setSearch] = useState("");
  const heroRef = useRef(null);

  /* mouse parallax on hero orbs */
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const move = (e) => {
      const { left, top, width, height } = hero.getBoundingClientRect();
      const x = ((e.clientX - left) / width - 0.5) * 30;
      const y = ((e.clientY - top) / height - 0.5) * 20;
      hero.querySelectorAll(".bl-hero__orb").forEach((orb, i) => {
        const d = i === 0 ? 1 : -0.6;
        orb.style.transform = `translate(${x * d}px, ${y * d}px)`;
      });
    };
    hero.addEventListener("mousemove", move);
    return () => hero.removeEventListener("mousemove", move);
  }, []);

  const filtered = POSTS.filter(p => {
    const q = search.toLowerCase();
    return (
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q)
    );
  });

  const featured = !search ? filtered.find(p => p.featured) : null;
  const grid = featured ? filtered.filter(p => !p.featured) : filtered;

  return (
    <>
      {/* ── HERO ── */}
      <section className="bl-hero" ref={heroRef}>
        <div className="bl-hero__orb bl-hero__orb--a" aria-hidden />
        <div className="bl-hero__orb bl-hero__orb--b" aria-hidden />
        <div className="bl-hero__orb bl-hero__orb--c" aria-hidden />
        <div className="bl-hero__grid" aria-hidden />

        <div className="bl-hero__content">
          <div className="bl-hero__badge">
            <span className="bl-hero__badge-dot" />
            Digital Marketing Blog
          </div>
          <h1 className="bl-hero__title">
            Marketing Strategies<br />
            <span className="bl-hero__title-grad">That Drive Results</span>
          </h1>
          <p className="bl-hero__sub">
            SEO, social media, Google Ads, content and email marketing —
            actionable insights from the Arbaj Technology team.
          </p>

          {/* search */}
          <div className={`bl-search${search ? " bl-search--val" : ""}`}>
            <svg viewBox="0 0 20 20" fill="none" width="16" className="bl-search__ico">
              <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.6" />
              <path d="M14 14l3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="bl-search__input"
            />
            {search && (
              <button
                className="bl-search__clear"
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

        {/* stats strip */}
        {/* <div className="bl-hero__stats" aria-hidden>
          {[["9+", "Articles"], ["5", "Topics"], ["Free", "Always"]].map(([n, l]) => (
            <div className="bl-hero__stat" key={l}>
              <span className="bl-hero__stat-n">{n}</span>
              <span className="bl-hero__stat-l">{l}</span>
            </div>
          ))}
        </div> */}
      </section>

      {/* ── MAIN ── */}
      <main className="bl-main">

        {/* Featured */}
        {featured && (
          <article className="bl-featured">
            <div className="bl-featured__img-wrap">
              <img src={featured.img} alt={featured.title} className="bl-featured__img" />
              <div className="bl-featured__overlay" />
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
                <Link to={`/blog/${featured.id}`} className="bl-featured__cta">
                  Read More
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
              <article
                key={post.id}
                className="bl-card"
                style={{ "--i": i }}
              >
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
                    <div />
                    <Link to={`/blog/${post.id}`} className="bl-card__link">
                      Read
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
              <circle cx="22" cy="22" r="14" stroke="#7ab8b4" strokeWidth="2" />
              <path d="M32 32l8 8" stroke="#7ab8b4" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <p>No articles found</p>
            <button className="bl-empty__reset" onClick={() => setSearch("")}>
              Reset search
            </button>
          </div>
        )}

        <Newsletter />
      </main>
    </>
  );
}

/* ─────────────────────────────────────────
   EXPORT POSTS (for BlogPost page)
───────────────────────────────────────── */
export { POSTS };