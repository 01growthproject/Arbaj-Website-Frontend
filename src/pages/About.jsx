import { useState, useEffect, useRef } from "react";
import '../styles/about.css';
import { STATS, TEAM, MVV, TIMELINE, STACK, FAQS } from '../components/Data/AboutDAta'
import SEOptimization from "../components/SEOptimization";
import { Link } from "react-router-dom";
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
      },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

/* ─────────────────────────────────────────────
   ABOUT HERO — Centered sh__* style (matches Services)
   Flip words cycle, NO underline on flip word
───────────────────────────────────────────── */
const FLIP_WORDS = ["Since 2019.", "500+ Clients.", "Real Results.", "Always Growing."];

const ABOUT_METRICS = [
  { icon: "🏆", tag: "Clients", value: "500+", label: "Happy Clients", accent: "#17ABBC", bar: "82%" },
  { icon: "📅", tag: "Experience", value: "5+", label: "Years in Industry", accent: "#048C8C", bar: "75%" },
  { icon: "✅", tag: "Projects", value: "1200+", label: "Projects Delivered", accent: "#6DC497", bar: "90%" },
  { icon: "😊", tag: "Retention", value: "98%", label: "Client Retention", accent: "#a855f7", bar: "98%" },
];

function AboutHero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const particleRef = useRef(null);

  /* word flip interval */
  useEffect(() => {
    const id = setInterval(() => {
      setFlipping(true);
      setTimeout(() => {
        setWordIdx(i => (i + 1) % FLIP_WORDS.length);
        setFlipping(false);
      }, 380);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  /* floating particles — same as services */
  useEffect(() => {
    const container = particleRef.current;
    if (!container) return;
    const colors = ["#048C8C", "#17ABBC", "#6DC497", "#a855f7"];
    for (let i = 0; i < 24; i++) {
      const p = document.createElement("span");
      p.className = "sh-particle";
      p.style.cssText = `
        left:${Math.random() * 100}%;
        top:${Math.random() * 100}%;
        width:${2 + Math.random() * 3}px;
        height:${2 + Math.random() * 3}px;
        background:${colors[i % colors.length]};
        animation-duration:${6 + Math.random() * 6}s;
        animation-delay:${Math.random() * 7}s;
      `;
      container.appendChild(p);
    }
  }, []);

  return (
    <section className="sh">
      {/* ── Background (identical to ServiceHero) ── */}
      <div className="sh__bg">
        <div className="sh__bg-mesh" />
        <div className="sh__bg-lines" />
        <div className="sh__ring sh__ring--lg" />
        <div className="sh__ring sh__ring--md" />
        <div className="sh__ring sh__ring--sm" />
        <div className="sh__ring-spin sh__ring-spin--1" />
        <div className="sh__ring-spin sh__ring-spin--2" />
        <div ref={particleRef} className="sh__particles" />
      </div>

      {/* ── Badge ── */}
      <div className="sh__badge">
        <span className="sh__badge-dot" />
        Who We Are — Arbaj Technology
      </div>

      {/* ── Title with flip word (NO underline) ── */}
      <h1 className="sh__title">
        Building the Future of
        <br />
        <span className="sh__title-line2">
          <span className="sh__title-gradient">Digital Growth&nbsp;</span>
          <span className={`sh__title-flip sh__title-flip--no-line${flipping ? " sh__title-flip--out" : ""}`}>
            {FLIP_WORDS[wordIdx]}
          </span>
        </span>
      </h1>

      {/* ── Description ── */}
      <p className="sh__desc">
        SEO · Google Ads · Social Media · Web Development · Graphic Design · Video Editing
        <br />
        <span>A passionate team in Zirakpur, Punjab — building real results for 500+ businesses across India.</span>
      </p>

      {/* ── CTA ── */}
      <div className="sh__actions">
        <Link to="/contact" className="sh__btn sh__btn--primary">
          Work With Us
          <svg viewBox="0 0 20 20" fill="currentColor" width="17" height="17">
            <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
          </svg>
        </Link>
        <a href="#story" className="sh__btn sh__btn--ghost">Our Story</a>
      </div>

      {/* ── Divider ── */}
      <div className="sh__divider" />

      {/* ── Stats bar ── */}
      <div className="sh__stats">
        {STATS.map((s, i) => (
          <div className="sh__stat" key={i}>
            <strong>
              {s.number.replace(/[+%×]/g, "")}
              <span>{s.number.match(/[+%×]/)?.[0]}</span>
            </strong>
            <em>{s.label}</em>
          </div>
        ))}
      </div>

      {/* ── Metric cards ── */}
      <div className="sh__cards">
        {ABOUT_METRICS.map((m, i) => (
          <div
            className="sh__card"
            key={i}
            style={{ "--card-color": m.accent, animationDelay: `${0.6 + i * 0.1}s` }}
          >
            <div className="sh__card-top">
              <span className="sh__card-icon">{m.icon}</span>
              <span className="sh__card-tag">{m.tag}</span>
            </div>
            <div className="sh__card-value">{m.value}</div>
            <div className="sh__card-label">{m.label}</div>
            <div className="sh__card-bar">
              <div className="sh__card-bar-fill" style={{ "--bar-w": m.bar }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


function Ticker() {
  const items = [
    "Innovation", "Digital Marketing", "SEO", "Google Ads",
    "Social Media", "Web Development", "Graphic Design", "Video Editing",
  ];
  const all = [...items, ...items];
  return (
    <div className="ticker">
      <div className="ticker__track">
        {all.map((item, i) => (
          <span key={i} className="ticker__item">
            {item} <span className="ticker__sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}


function WhoWeAre() {
  const [ref, visible] = useReveal();
  return (
    <section
      className={`about-story section ${visible ? "section--visible" : ""}`}
      ref={ref}
      id="story"
    >
      <div className="about-story__inner">
        <div className="about-story__visual">
          <div className="about-story__circle about-story__circle--1" />
          <div className="about-story__circle about-story__circle--2" />
          <div className="about-story__circle about-story__circle--3" />
          <div className="about-story__center">AT</div>
          <div className="about-story__pin about-story__pin--1">
            <span className="about-story__pin-dot about-story__pin-dot--teal" />
            500+ Clients
          </div>
          <div className="about-story__pin about-story__pin--2">
            <span className="about-story__pin-dot about-story__pin-dot--mint" />
            Est. 2019
          </div>
          <div className="about-story__pin about-story__pin--3">
            <span className="about-story__pin-dot about-story__pin-dot--green" />
            98% Success
          </div>
        </div>

        <div className="about-story__text">
          <div className="section__label">— Who We Are</div>
          <h2 className="section__title">
            Your Trusted<br />
            <span>Digital Growth Partner</span>
          </h2>
          <p className="about-story__para">
            Arbaj Technology was born from a simple belief — that great digital marketing
            should solve real problems. Founded in 2019 in Zirakpur, Punjab, we've grown
            from a small studio into a full-service agency trusted by 500+ businesses.
          </p>
          <p className="about-story__para">
            We combine cutting-edge marketing with thoughtful design and transparent
            reporting to build campaigns that don't just run — they deliver real, lasting growth.
          </p>
          <ul className="about-story__features">
            {[
              "500+ Happy Clients Across India",
              "5+ Years of Industry Experience",
              "Certified Digital Marketing Experts",
              "Transparent Monthly Reporting",
              "Dedicated Account Manager",
            ].map((f) => (
              <li key={f}>
                <span className="about-story__check">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn btn--primary">
            Start a Project
            <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}


function MissionVisionValues() {
  const [ref, visible] = useReveal();
  return (
    <section
      className={`about-mvv section ${visible ? "section--visible" : ""}`}
      ref={ref}
    >
      <div className="about-mvv__header">
        <div className="section__label">— Our Foundation</div>
        <h2 className="section__title">
          What <span>Drives Us</span> Forward
        </h2>
        <p className="section__sub">
          Three pillars that define who we are and how we work every single day.
        </p>
      </div>
      <div className="about-mvv__grid">
        {MVV.map((item, i) => (
          <div
            className="mvv-card"
            key={item.id}
            style={{ "--card-accent": item.accent, "--i": i }}
          >
            <div className="mvv-card__num">{item.num}</div>
            <div className="mvv-card__icon">{item.icon}</div>
            <div className="mvv-card__tag">{item.tag}</div>
            <h3 className="mvv-card__title">{item.title}</h3>
            <p className="mvv-card__desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


function Team() {
  const [ref, visible] = useReveal();
  return (
    <section
      className={`about-team section ${visible ? "section--visible" : ""}`}
      ref={ref}
    >
      <div className="about-team__header">
        <div className="section__label">— Our People</div>
        <h2 className="section__title">
          Meet the <span>Team</span>
        </h2>
        <p className="section__sub">
          The talented humans behind every campaign, every pixel, and every result.
        </p>
      </div>
      <div className="about-team__grid">
        {TEAM.map((member, i) => (
          <div
            className="team-card"
            key={member.id}
            style={{ "--i": i, "--color": member.color }}
          >
            <div
              className="team-card__avatar"
              style={{ background: `linear-gradient(135deg, ${member.color} 0%, ${member.color}aa 100%)` }}
            >
              {member.initials}
            </div>
            <h3 className="team-card__name">{member.name}</h3>
            <p className="team-card__role">{member.role}</p>
            <p className="team-card__bio">{member.bio}</p>
            <div className="team-card__socials">
              {/* {member.socials.map((s) => (
                <a key={s} href="#" className="team-card__social">{s}</a>
              ))} */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


function Timeline() {
  const [ref, visible] = useReveal();
  return (
    <section
      className={`about-timeline section ${visible ? "section--visible" : ""}`}
      ref={ref}
    >
      <div className="about-timeline__header">
        <div className="section__label">— Our Journey</div>
        <h2 className="section__title">
          How We <span>Got Here</span>
        </h2>
        <p className="section__sub">
          A story of growth, learning, and relentless building.
        </p>
      </div>
      <div className="timeline">
        {TIMELINE.map((item, i) => (
          <div className="timeline__item" key={i} style={{ "--i": i }}>
            {i % 2 === 0 ? (
              <>
                <div className="timeline__card">
                  <p className="timeline__year">{item.year}</p>
                  <h3 className="timeline__card-title">{item.title}</h3>
                  <p className="timeline__card-desc">{item.desc}</p>
                </div>
                <div className="timeline__node"><div className="timeline__dot" /></div>
                <div className="timeline__spacer" />
              </>
            ) : (
              <>
                <div className="timeline__spacer" />
                <div className="timeline__node"><div className="timeline__dot" /></div>
                <div className="timeline__card">
                  <p className="timeline__year">{item.year}</p>
                  <h3 className="timeline__card-title">{item.title}</h3>
                  <p className="timeline__card-desc">{item.desc}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}


function ToolsStack() {
  const [ref, visible] = useReveal();
  return (
    <section
      className={`about-stack section ${visible ? "section--visible" : ""}`}
      ref={ref}
    >
      <div className="about-stack__header">
        <div className="section__label">— Tools We Use</div>
        <h2 className="section__title">
          Platforms We <span>Master</span>
        </h2>
        <p className="section__sub">
          Industry-leading tools powering every campaign and project we deliver.
        </p>
      </div>
      <div className="about-stack__grid">
        {STACK.map((s) => (
          <div className="stack-badge" key={s.label}>
            <span className="stack-badge__dot" style={{ background: s.dot }} />
            {s.label}
          </div>
        ))}
      </div>
    </section>
  );
}


function FAQ() {
  const [open, setOpen] = useState(null);
  const [ref, visible] = useReveal();
  return (
    <section
      className={`faq section ${visible ? "section--visible" : ""}`}
      ref={ref}
    >
      <div className="faq__header">
        <div className="section__label">— FAQ</div>
        <h2 className="section__title">
          Questions You<br />
          <span>Probably Have</span>
        </h2>
      </div>
      <div className="faq__list">
        {FAQS.map((item, i) => (
          <div
            key={i}
            className={`faq__item ${open === i ? "faq__item--open" : ""}`}
          >
            <button
              className="faq__q"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span>{item.q}</span>
              <span className="faq__icon">{open === i ? "−" : "+"}</span>
            </button>
            <div className="faq__a">
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


function CTABanner() {
  const [ref, visible] = useReveal();
  return (
    <section
      className={`cta-banner ${visible ? "section--visible" : ""}`}
      ref={ref}
    >
      <div className="cta-banner__orb" aria-hidden="true" />
      <div className="cta-banner__content">
        <h2>Ready to Grow Your Business?</h2>
        <p>Book a free consultation today — no commitment, just a results-focused conversation.</p>
        <div className="cta-banner__actions">
          <Link to="/contact" className="btn btn--primary">
            Book Free Consultation
          </Link>
          <Link to="tel:917973611226" className="btn btn--ghost btn--ghost-light">
            <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            +91 79 7361 1226
          </Link>
        </div>
      </div>
    </section>
  );
}


export default function AboutPage() {
  return (
    <>
        <SEOptimization
          title="About Us | Arbaj Technology – Digital Growth Partner"
          description="Learn about Arbaj Technology, a Zirakpur-based digital marketing agency helping 500+ businesses grow with SEO, ads, and web development."
          keywords="Arbaj Technology, digital marketing agency Zirakpur, SEO company India, web development, social media marketing"
          url="https://arbajtechnologypvtltd.com/about"
          image="https://arbajtechnologypvtltd.com/og-image.jpg"
        />
      <main>


        <AboutHero />
        <Ticker />
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