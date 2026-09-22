import { useState, useEffect, useRef } from "react";
import '../styles/about.css';
import {
  STATS,
  TEAM,
  MVV,
  TIMELINE,
  STACK,
  FAQS,
} from "../components/Data/AboutData.jsx";
import SEOptimization from "../components/SEOptimization";
import { Link } from "react-router-dom";



const SITE_URL = "https://arbajtechnologypvtltd.com";

const ABOUT_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE_URL}/about#about-page`,
  url: `${SITE_URL}/about`,
  name: "About Arbaj Technology Pvt. Ltd.",
  description:
    "Learn about Arbaj Technology, a digital marketing and web development company founded in 2021 in Zirakpur, Punjab.",
  isPartOf: {
    "@id": `${SITE_URL}/#website`,
  },
  about: {
    "@id": `${SITE_URL}/#business`,
  },
  inLanguage: "en-IN",
};

const ABOUT_BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: `${SITE_URL}/about`,
    },
  ],
};









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
  const PROFILE_ROWS = [
    { label: "SEO & Ads", val: "Available", w: "100%" },
    { label: "Social Media", val: "Available", w: "100%" },
    { label: "Web Development", val: "Available", w: "100%" },
    { label: "Creative Services", val: "Available", w: "100%" },
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
              A growing team based in Zirakpur, Punjab—providing SEO,
              Google Ads, social media marketing, web development, graphic
              design and video editing services since 2021.
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
              {[
                "10 Clients",
                "5+ Years",
                "10+ Team Members",
                "Zirakpur, Punjab",
              ].map((tag) => (
                <span className="ab-profile-card__tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
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
            Arbaj Technology was founded in 2021 in Zirakpur, Punjab.
            Since then, we have grown into a team of more than 10 people
            supporting 10 clients across marketing, design, development
            and creative services.
          </p>
          <p className="ab-story__para">
            We combine cutting-edge marketing with thoughtful design and transparent
            reporting to build campaigns that don't just run — they deliver real, lasting growth.
          </p>

          <ul className="ab-story__list">
            {[
              "10 Clients Served",
              "5+ Years of Industry Experience",
              "Transparent Project Communication",
              "Dedicated Client Support",
            ].map((feature, index) => (
              <li key={feature} style={{ "--i": index }}>
                <span className="ab-story__tick">✓</span>
                {feature}
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


            <div className="ab-bento-tile__num">
              10<em>+</em>
            </div>
            <div className="ab-bento-tile__label">Clients Served</div>
          </div>


         


          <div className="ab-bento-tile">
            <div className="ab-bento-tile__num">
              5<em>+</em>
            </div>
            <div className="ab-bento-tile__label">Years Experience</div>
          </div>


          <div className="ab-bento-tile">
            <div className="ab-bento-tile__num">
              6<em>+</em>
            </div>
            <div className="ab-bento-tile__label">Core Services</div>
          </div>


          <div className="ab-bento-tile ab-bento-tile--wide">
            <div className="ab-bento-tile__wide-inner">
              <div className="ab-bento-tile__icon">🎯</div>
              <div className="ab-bento-tile__text">
                <strong>Established in 2021 — Zirakpur, Punjab</strong>
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
      className={`ab-section ab-team ab-reveal ${visible ? "ab-reveal--show" : ""
        }`}
    >
      <div className="ab-team__header">
        <div className="ab-label">— Our People</div>

        <h2 className="ab-title">
          Meet the <em>Team</em>
        </h2>

        <p className="ab-sub ab-sub--center">
          The talented humans behind every campaign, every pixel, and every result.
        </p>
      </div>

      <div className="ab-team__track">
        {TEAM.map((member, i) => (
          <div
            className="ab-member-card"
            key={member.id}
            style={{ "--i": i }}
          >
            {/* LEFT — IMAGE */}
            <div className="ab-member-card__img-wrap">
              <img
                src={member.img}
                alt={`${member.name}, ${member.role} at Arbaj Technology`}
                className="ab-member-card__img"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* RIGHT — CONTENT */}
            <div className="ab-member-card__content">

              <h3 className="ab-member-card__name">
                {member.name}
              </h3>

              <p className="ab-member-card__role">
                {member.role}
              </p>

              {/* LinkedIn — icon only, no text label */}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ab-member-card__linkedin"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
                  </svg>
                </a>
              )}

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
          <a
            href="tel:+917973611226"
            className="ab-btn ab-btn--outline-light"
            aria-label="Call Arbaj Technology at +91 79 7361 1226"
          >
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              width="17"
              height="17"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            +91 79 7361 1226
          </a>
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
        title="About Us | Digital Marketing Agency"
        description="Learn about Arbaj Technology, a Zirakpur-based team providing SEO, Google Ads, social media, web development, design and video editing services since 202Get to know our team and services. About Us gives you an overview of SEO, website development, social media, Google Ads and Meta Ads. Call +91 79 7361 1226."
        url="https://arbajtechnologypvtltd.com/about"
        faqs={FAQS}
        schema={[ABOUT_PAGE_SCHEMA, ABOUT_BREADCRUMB_SCHEMA]}
      />
      <main>
        <AboutHero />
        <WhoWeAre />
        <MissionVisionValues />
        <Team />
        <Timeline />
        <ToolsStack />
        <FAQ />
        <CTABanner />
      </main>
    </>
  );
}