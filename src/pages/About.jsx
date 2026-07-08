import { useState, useEffect, useRef } from "react";
import '../styles/about.css';
import { STATS, TEAM, MVV, TIMELINE, STACK, FAQS } from '../components/Data/AboutDAta';
import SEOptimization from "../components/SEOptimization";
import { Link } from "react-router-dom";

/* ─── Scroll reveal hook ─── */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

/* ═══════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════ */
function AboutHero() {
  // const TICKER_ITEMS = ["SEO", "Google Ads", "Social Media", "Web Development",
  //   "Graphic Design", "Video Editing", "Brand Strategy", "Since 2019"];
  // const all = [...TICKER_ITEMS, ...TICKER_ITEMS];

  const PROFILE_ROWS = [
    { label: "SEO & Ads", val: "95%", w: "95%" },
    { label: "Social Media", val: "90%", w: "90%" },
    { label: "Web Dev", val: "85%", w: "85%" },
    { label: "Client Retention", val: "98%", w: "98%" },
  ];

  return (
    <>
      <section className="ab-hero">
        {/* background chart line */}
        <div className="ab-hero__chartline" aria-hidden="true">
          <svg viewBox="0 0 1200 400" preserveAspectRatio="none">
            <path
              className="ab-hero__chartline-fill"
              d="M0,280 C150,260 280,220 420,230 C560,240 650,160 800,150 C940,140 1050,100 1200,90 L1200,400 L0,400 Z"
              fill="#7FE6C4"
              opacity="0.08"
            />
            <path
              className="ab-hero__chartline-stroke"
              d="M0,280 C150,260 280,220 420,230 C560,240 650,160 800,150 C940,140 1050,100 1200,90"
            />
            <circle className="ab-hero__chartline-dot" cx="1200" cy="90" r="9" fill="#FF6B5B" />
          </svg>
        </div>

        <div className="ab-hero__inner">
          {/* LEFT — copy */}
          <div className="ab-hero__copy">
            <div className="ab-hero__badge">
              <span className="ab-hero__badge-dot" />
              Who We Are — Arbaj Technology
            </div>

            <h1 className="ab-hero__heading">
              <span className="ab-hero__heading-row">
                <span>Building the Future</span>
              </span>
              <span className="ab-hero__heading-row">
                <span>
                  of{" "}
                  <span className="ab-hero__accent">
                    Digital Growth
                    <svg viewBox="0 0 200 20" preserveAspectRatio="none">
                      <path d="M5,12 C50,4 150,4 195,12" />
                    </svg>
                  </span>
                </span>
              </span>
            </h1>

            <p className="ab-hero__para">
              A passionate team in Zirakpur, Punjab — delivering SEO, Google Ads, Social Media,
              Web Development, and Design solutions for 50+ businesses across India since 2019.
            </p>

            <div className="ab-hero__btns">
              <Link to="/contact" className="ab-btn ab-btn--filled">
                <span>Work With Us</span>
                <svg viewBox="0 0 20 20" fill="currentColor" width="17" height="17">
                  <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                </svg>
              </Link>
              <a href="#ab-story" className="ab-btn ab-btn--outline-light">
                Our Story
              </a>
            </div>

            <div className="ab-hero__stats">
              {STATS.map((s, i) => (
                <div className="ab-hero__stat" key={i}>
                  <strong>
                    {s.number.replace(/[+%×]/g, "")}
                    <em>{s.number.match(/[+%×]/)?.[0]}</em>
                  </strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — floating profile card */}
          <div className="ab-profile-card" aria-hidden="true">
            <div className="ab-profile-card__header">
              <div className="ab-profile-card__logo">AT</div>
              <div>
                <div className="ab-profile-card__name">Arbaj Technology</div>
                <div className="ab-profile-card__tagline">Digital Growth Partner</div>
              </div>
            </div>

            <div className="ab-profile-card__rows">
              {PROFILE_ROWS.map((r) => (
                <div className="ab-profile-card__row" key={r.label}>
                  <span className="ab-profile-card__row-label">{r.label}</span>
                  <div className="ab-profile-card__row-bar">
                    <div
                      className="ab-profile-card__row-fill"
                      style={{ width: r.w }}
                    />
                  </div>
                  <span className="ab-profile-card__row-val">{r.val}</span>
                </div>
              ))}
            </div>

            <div className="ab-profile-card__tags">
              {["50+ Clients", "5+ Years", "98% Retention", "Zirakpur, PB"].map((t) => (
                <span className="ab-profile-card__tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ticker */}
      {/* <div className="ab-ticker">
        <div className="ab-ticker__belt">
          {all.map((item, i) => (
            <span key={i} className="ab-ticker__word">
              {item} <span className="ab-ticker__divider">✦</span>
            </span>
          ))}
        </div>
      </div> */}
    </>
  );
}

/* ═══════════════════════════════════════════════
   WHO WE ARE
═══════════════════════════════════════════════ */
function WhoWeAre() {
  const [ref, visible] = useReveal();
  return (
    <section
      id="ab-story"
      ref={ref}
      className={`ab-section ab-story ab-reveal ${visible ? "ab-reveal--show" : ""}`}
    >
      <div className="ab-story__layout">
        {/* Left — text */}
        <div className="ab-story__text">
          <div className="ab-label">— Who We Are</div>
          <h2 className="ab-title">
            Driven by Results,<br />
            <em>Powered by Strategy</em>
          </h2>
          <p className="ab-story__para">
            Arbaj Technology was born from a simple belief — that great digital marketing
            should solve real problems. Founded in 2019 in Zirakpur, Punjab, we've grown
            from a small studio into a full-service agency trusted by 50+ businesses.
          </p>
          <p className="ab-story__para">
            We combine cutting-edge marketing with thoughtful design and transparent
            reporting to build campaigns that don't just run — they deliver real, lasting growth.
          </p>

          <ul className="ab-story__list">
            {[
              "50+ Happy Clients Across India",
              "5+ Years of Industry Experience",
              "Certified Digital Marketing Experts",
              "Transparent Monthly Reporting",
              "Dedicated Account Manager",
            ].map((f, i) => (
              <li key={f} style={{ "--i": i }}>
                <span className="ab-story__tick">✓</span>
                {f}
              </li>
            ))}
          </ul>

          <Link to="/contact" className="ab-btn ab-btn--filled">
            <span>Start a Project</span>
            <svg viewBox="0 0 20 20" fill="currentColor" width="17" height="17">
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          </Link>
        </div>

        {/* Right — bento grid */}
        <div className="ab-story__bento">
          <div className="ab-bento-tile ab-bento-tile--dark">
            <div className="ab-bento-tile__num"><em>50</em>+</div>
            <div className="ab-bento-tile__label">Happy Clients</div>
          </div>
          <div className="ab-bento-tile ab-bento-tile--coral">
            <div className="ab-bento-tile__num">98<em>%</em></div>
            <div className="ab-bento-tile__label">Client Retention</div>
          </div>
          <div className="ab-bento-tile">
            <div className="ab-bento-tile__num">5<em>+</em></div>
            <div className="ab-bento-tile__label">Years Experience</div>
          </div>
          <div className="ab-bento-tile">
            <div className="ab-bento-tile__num">10<em>×</em></div>
            <div className="ab-bento-tile__label">Avg. ROI Delivered</div>
          </div>
          <div className="ab-bento-tile ab-bento-tile--wide">
            <div className="ab-bento-tile__wide-inner">
              <div className="ab-bento-tile__icon">🎯</div>
              <div className="ab-bento-tile__text">
                <strong>Est. 2019 — Zirakpur, Punjab</strong>
                <p>Full-service digital agency helping businesses across India grow online with measurable, data-driven results.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   MISSION / VISION / VALUES
═══════════════════════════════════════════════ */
function MissionVisionValues() {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`ab-mvv ab-reveal ${visible ? "ab-reveal--show" : ""}`}
    >
      <div className="ab-mvv__inner">
        <div className="ab-mvv__head">
          <div className="ab-label ab-label--mint">— Our Foundation</div>
          <h2 className="ab-title ab-title--white">
            What <em>Drives Us</em> Forward
          </h2>
          <p className="ab-sub" style={{ color: "rgba(255,255,255,.55)", marginBottom: 0 }}>
            Three pillars that define who we are and how we work every single day.
          </p>
        </div>

        <div className="ab-mvv__grid">
          {MVV.map((item, i) => (
            <div
              className="ab-mvv-card"
              key={item.id}
              style={{ "--i": i }}
            >
              <div className="ab-mvv-card__bg-num">{item.num}</div>
              <div className="ab-mvv-card__emoji">{item.icon}</div>
              <div className="ab-mvv-card__tag">{item.tag}</div>
              <h3 className="ab-mvv-card__title">{item.title}</h3>
              <p className="ab-mvv-card__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   TEAM
═══════════════════════════════════════════════ */
function Team() {
  const [ref, visible] = useReveal();
  return (
    <section
      ref={ref}
      className={`ab-section ab-team ab-reveal ${visible ? "ab-reveal--show" : ""}`}
    >
      <div className="ab-team__header">
        <div className="ab-label">— Our People</div>
        <h2 className="ab-title">Meet the <em>Team</em></h2>
        <p className="ab-sub ab-sub--center">
          The talented humans behind every campaign, every pixel, and every result.
        </p>
      </div>

      <div className="ab-team__track">
        {TEAM.map((member, i) => (
          <div className="ab-member-card" key={member.id} style={{ "--i": i }}>
            <div className="ab-member-card__img-wrap">
              <img
                src={member.img}
                alt={member.name}
                className="ab-member-card__img"
                loading="lazy"
              />
            </div>
            <div className="ab-member-card__body">
              <h3 className="ab-member-card__name">{member.name}</h3>
              <p className="ab-member-card__role">{member.role}</p>
              <p className="ab-member-card__bio">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   TIMELINE
═══════════════════════════════════════════════ */
function Timeline() {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`ab-timeline ab-reveal ${visible ? "ab-reveal--show" : ""}`}
    >
      <div className="ab-timeline__inner">
        <div className="ab-label">— Our Journey</div>
        <h2 className="ab-title">How We <em>Got Here</em></h2>
        <p className="ab-sub">A story of growth, learning, and relentless building.</p>

        <div className="ab-tl-track">
          {TIMELINE.map((item, i) => (
            <div className="ab-tl-item" key={i} style={{ "--i": i }}>
              {i % 2 === 0 ? (
                <>
                  <div className="ab-tl-card">
                    <p className="ab-tl-card__year">{item.year}</p>
                    <h3 className="ab-tl-card__title">{item.title}</h3>
                    <p className="ab-tl-card__desc">{item.desc}</p>
                  </div>
                  <div className="ab-tl-node"><div className="ab-tl-dot" /></div>
                  <div className="ab-tl-spacer" />
                </>
              ) : (
                <>
                  <div className="ab-tl-spacer" />
                  <div className="ab-tl-node"><div className="ab-tl-dot" /></div>
                  <div className="ab-tl-card">
                    <p className="ab-tl-card__year">{item.year}</p>
                    <h3 className="ab-tl-card__title">{item.title}</h3>
                    <p className="ab-tl-card__desc">{item.desc}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   TOOLS STACK
═══════════════════════════════════════════════ */
function ToolsStack() {
  const [ref, visible] = useReveal();
  return (
    <section
      ref={ref}
      className={`ab-section ab-stack ab-reveal ${visible ? "ab-reveal--show" : ""}`}
    >
      <div className="ab-stack__header">
        <div className="ab-label">— Tools We Use</div>
        <h2 className="ab-title">Platforms We <em>Master</em></h2>
        <p className="ab-sub ab-sub--center">
          Industry-leading tools powering every campaign and project we deliver.
        </p>
      </div>
      <div className="ab-stack__grid">
        {STACK.map((s) => (
          <div className="ab-stack-chip" key={s.label}>
            <span className="ab-stack-chip__dot" style={{ background: s.dot }} />
            {s.label}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   FAQ
═══════════════════════════════════════════════ */
function FAQ() {
  const [open, setOpen] = useState(null);
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`ab-faq ab-reveal ${visible ? "ab-reveal--show" : ""}`}
    >
      <div className="ab-faq__inner">
        {/* Sticky left col */}
        <div className="ab-faq__left">
          <div className="ab-label ab-label--mint">— FAQ</div>
          <h2 className="ab-title ab-title--white">
            Questions You <em>Probably Have</em>
          </h2>
          <p style={{ color: "rgba(255,255,255,.55)", fontSize: "1rem", lineHeight: 1.75, marginTop: 8 }}>
            Can't find what you're looking for?{" "}
            <Link to="/contact" style={{ color: "var(--mint)", fontWeight: 700, textDecoration: "underline" }}>
              Drop us a message.
            </Link>
          </p>
        </div>

        {/* Accordion right col */}
        <div className="ab-faq__list">
          {FAQS.map((item, i) => (
            <div
              key={i}
              className={`ab-faq-item ${open === i ? "ab-faq-item--open" : ""}`}
              style={{ "--i": i }}
            >
              <button
                className="ab-faq-item__btn"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{item.q}</span>
                <span className="ab-faq-item__icon">{open === i ? "−" : "+"}</span>
              </button>
              <div className="ab-faq-item__body">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   CTA BANNER
═══════════════════════════════════════════════ */
function CTABanner() {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`ab-cta ab-reveal ${visible ? "ab-reveal--show" : ""}`}
    >
      <div className="ab-cta__glow" aria-hidden="true" />
      <div className="ab-cta__inner">
        <h2>Ready to <em>Grow</em> Your Business?</h2>
        <p>Book a free consultation today — no commitment, just a results-focused conversation.</p>
        <div className="ab-cta__btns">
          <Link to="/contact" className="ab-btn ab-btn--filled">
            <span>Book Free Consultation</span>
            <svg viewBox="0 0 20 20" fill="currentColor" width="17" height="17">
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          </Link>
          <Link to="tel:917973611226" className="ab-btn ab-btn--outline-light">
            <svg viewBox="0 0 20 20" fill="currentColor" width="17" height="17">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            +91 79 7361 1226
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════ */
export default function AboutPage() {
  return (
    <>
      <SEOptimization
        title="About Us | Arbaj Technology – Digital Growth Partner"
        description="Learn about Arbaj Technology, a Zirakpur-based digital marketing agency helping 50+ businesses grow with SEO, ads, and web development."
        keywords="Arbaj Technology, digital marketing agency Zirakpur, SEO company India, web development, social media marketing"
        url="https://arbajtechnologypvtltd.com/about"
        image="https://arbajtechnologypvtltd.com/og-image.jpg"
      />
      <main>
        <AboutHero />
        <WhoWeAre />
        <MissionVisionValues />
        {/* <Team /> */}
        <Timeline />
        <ToolsStack />
        <FAQ />
        <CTABanner />
      </main>
    </>
  );
}