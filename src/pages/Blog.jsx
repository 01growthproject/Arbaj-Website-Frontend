import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/blog.css";

/* ─────────────────────────────────────────
   DIGITAL MARKETING POSTS ONLY
───────────────────────────────────────── */
const POSTS = [
  {
    id: 1,
    slug: "google-core-update-2025",
    cat: "SEO",
    accent: "#f59e0b",
    date: "10 Jun 2025",
    readTime: "5 min read",
    title: "Google's 2025 Core Update: Ranking Signals That Actually Matter",
    excerpt:
      "A deep dive into the latest core update — which content signals got rewarded, which got penalised, and how to realign your SEO strategy before rankings slip.",
    img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
    featured: true,
    // author: { name: "Arbaj Khan", avatar: "AK" },
  },
  {
    id: 2,
    slug: "meta-ads-budget-2025",
    cat: "Social Media",
    accent: "#a855f7",
    date: "3 Jun 2025",
    readTime: "6 min read",
    title: "Meta Ads vs Google Ads: Where to Put Your Budget in 2025",
    excerpt:
      "We ran Rs 5L across both platforms for 90 days. Here's the honest, data-backed breakdown by industry, audience type, and campaign goal.",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80",
    featured: false,
    // author: { name: "Priya Sharma", avatar: "PS" },
  },
  {
    id: 3,
    slug: "local-seo-india",
    cat: "SEO",
    accent: "#f59e0b",
    date: "26 May 2025",
    readTime: "4 min read",
    title: "Local SEO for Indian Businesses: The 2025 Playbook",
    excerpt:
      "Google Business Profile optimisation, local citations, and review strategies that are actually moving the needle for small businesses across India.",
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80",
    featured: false,
    // author: { name: "Rahul Verma", avatar: "RV" },
  },
  {
    id: 4,
    slug: "linkedin-organic-b2b",
    cat: "Social Media",
    accent: "#a855f7",
    date: "19 May 2025",
    readTime: "5 min read",
    title: "LinkedIn Organic in 2025: The B2B Playbook Nobody Shares",
    excerpt:
      "How B2B brands are driving qualified leads without spending a rupee on ads — and the exact content formats and posting cadence that work right now.",
    img: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=600&q=80",
    featured: false,
    // author: { name: "Arbaj Khan", avatar: "AK" },
  },
  {
    id: 5,
    slug: "google-pmax-campaigns",
    cat: "Google Ads",
    accent: "#fb923c",
    date: "12 May 2025",
    readTime: "6 min read",
    title: "Performance Max Campaigns: What's Working in 2025",
    excerpt:
      "PMax is no longer a black box. Here's how to structure asset groups, use audience signals, and actually interpret the limited data Google gives you.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    featured: false,
    // author: { name: "Priya Sharma", avatar: "PS" },
  },
  {
    id: 6,
    slug: "content-marketing-seo-2025",
    cat: "Content",
    accent: "#22c55e",
    date: "5 May 2025",
    readTime: "7 min read",
    title: "Content Marketing + SEO: Why They Must Work Together in 2025",
    excerpt:
      "Publishing blog posts and hoping for rankings is dead. Here's the integrated content-SEO system that drives compounding traffic over time.",
    img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80",
    featured: false,
    // author: { name: "Rahul Verma", avatar: "RV" },
  },
  {
    id: 7,
    slug: "email-marketing-roi",
    cat: "Email",
    accent: "#17abbc",
    date: "28 Apr 2025",
    readTime: "4 min read",
    title: "Email Marketing Still Has the Highest ROI — Here's the Proof",
    excerpt:
      "With average returns of Rs 3,600 per Rs 100 spent, email refuses to die. We break down the sequences, subject lines, and send-times driving results for our clients.",
    img: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&q=80",
    featured: false,
    // author: { name: "Arbaj Khan", avatar: "AK" },
  },
  {
    id: 8,
    slug: "instagram-reels-algorithm",
    cat: "Social Media",
    accent: "#a855f7",
    date: "21 Apr 2025",
    readTime: "4 min read",
    title: "Instagram Reels Algorithm in 2025: What Actually Boosts Reach",
    excerpt:
      "Hook length, caption strategy, hashtag use, and post timing — we tested 200+ reels across client accounts to figure out what the algorithm rewards this year.",
    img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&q=80",
    featured: false,
    // author: { name: "Priya Sharma", avatar: "PS" },
  },
  {
    id: 9,
    slug: "google-ads-quality-score",
    cat: "Google Ads",
    accent: "#fb923c",
    date: "14 Apr 2025",
    readTime: "5 min read",
    title: "Improving Quality Score: The Fastest Way to Lower Your CPC",
    excerpt:
      "A step-by-step guide to auditing ad relevance, landing page experience, and expected CTR — the three levers that cut cost-per-click without cutting volume.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    featured: false,
    // author: { name: "Rahul Verma", avatar: "RV" },
  },
];

/* ─────────────────────────────────────────
   NEWSLETTER
───────────────────────────────────────── */
function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(false);

  return (
    <div className="bl-nl">
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
    </div>
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
        <div className="bl-hero__stats" aria-hidden>
          {[["9+", "Articles"], ["5", "Topics"], ["Free", "Always"]].map(([n, l]) => (
            <div className="bl-hero__stat" key={l}>
              <span className="bl-hero__stat-n">{n}</span>
              <span className="bl-hero__stat-l">{l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── MAIN ── */}
      <main className="bl-main">

        {/* Featured */}
        {featured && (
          <article className="bl-featured" style={{ "--a": featured.accent }}>
            <div className="bl-featured__img-wrap">
              <img src={featured.img} alt={featured.title} className="bl-featured__img" />
              <div className="bl-featured__overlay" />
              <span className="bl-featured__badge">Featured</span>
              <span className="bl-featured__cat">{featured.cat}</span>
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
                <div className="bl-author">
                  {/* <span className="bl-author__av">{featured.author.avatar}</span> */}
                  {/* <span className="bl-author__name">{featured.author.name}</span> */}
                </div>
                <Link to={`/blog/${featured.slug}`} className="bl-featured__cta">
                  Read Article
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
                style={{ "--a": post.accent, "--i": i }}
              >
                <span className="bl-card__glow-line" aria-hidden />
                <div className="bl-card__img-wrap">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="bl-card__img"
                    loading="lazy"
                  />
                  <span className="bl-card__tag">{post.cat}</span>
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
                    <div className="bl-author bl-author--sm">
                      {/* <span className="bl-author__av">{post.author.avatar}</span> */}
                      {/* <span className="bl-author__name">{post.author.name}</span> */}
                    </div>
                    <Link to={`/blog/${post.slug}`} className="bl-card__link">
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
            <button
              className="bl-empty__reset"
              onClick={() => setSearch("")}
            >
              Reset search
            </button>
          </div>
        )}

        <Newsletter />
      </main>
    </>
  );
}