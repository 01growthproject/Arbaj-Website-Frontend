import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import '../styles/GraphicDesigning.css'
import {STATS, GD_SERVICES, PROCESS, TOOLS,FAQS} from '../components/Data/DesigningData'

import SEOptimization from "../components/SEOptimization";
// ─────────────────────────────────────────
// HOOK
// ─────────────────────────────────────────
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




function Hero() {
  const layers = [
    { label: "Background", color: "#ff6b6b", x: 10, y: 45, w: 80, h: 10 },
    { label: "Logo Shape", color: "#f59e0b", x: 20, y: 30, w: 60, h: 12 },
    { label: "Typography", color: "#8b5cf6", x: 15, y: 18, w: 55, h: 8 },
    { label: "Colour Fill", color: "#10b981", x: 25, y: 8, w: 40, h: 7 },
  ];

  return (
    <section className="hero gd-hero">
      <div className="hero__grid" aria-hidden="true">
        {Array.from({ length: 80 }).map((_, i) => (
          <span key={i} className="hero__grid-dot" />
        ))}
      </div>
      <div className="hero__orb gd-orb--1" aria-hidden="true" />
      <div className="hero__orb gd-orb--2" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" style={{ background: "#ff6b6b" }} />
          Graphic Designing — Arbaj Technology
        </div>

        <h1 className="hero__title">
          Design That Makes<br />
          <span className="gd-title-highlight">Brands Unforgettable.</span>
        </h1>

        <p className="hero__desc">
          From logos to packaging, social media to pitch decks — we craft bold, beautiful
          designs that capture your brand essence and leave a lasting impression.
        </p>

        <div className="hero__actions">
          <Link to="/contact" className="btn btn--primary gd-btn--primary">
            Get a Free Sample Design
            <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          </Link>
          <a href="#services" className="btn btn--ghost">See Our Work</a>
        </div>

        <div className="hero__stats">
          {[
            { number: "500+", label: "Designs Created" },
            { number: "24h", label: "First Concept" },
            { number: "4.9★", label: "Client Rating" },
            { number: "100%", label: "Satisfaction" },
          ].map((s) => (
            <div className="hero__stat" key={s.label}>
              <strong>{s.number}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating design layers card */}
      <div className="hero__card-wrap" aria-hidden="true">
        <div className="hero__card gd-design-card">
          <div className="hero__card-header">
            <span className="hero__card-dot hero__card-dot--red" />
            <span className="hero__card-dot hero__card-dot--yellow" />
            <span className="hero__card-dot hero__card-dot--green" />
            <span className="hero__card-title">brand-identity.ai</span>
          </div>

          {/* colour palette */}
          <div className="gd-palette">
            {["#ff6b6b", "#f59e0b", "#8b5cf6", "#10b981", "#06b6d4", "#f43f5e"].map((c, i) => (
              <div key={i} className="gd-palette__swatch" style={{ background: c, "--i": i }} />
            ))}
          </div>

          {/* layers panel */}
          <div className="gd-layers">
            <div className="gd-layers__header">Layers</div>
            {layers.map((layer, i) => (
              <div className="gd-layer" key={i} style={{ "--delay": `${i * 0.1}s` }}>
                <div className="gd-layer__icon" style={{ background: layer.color }} />
                <span className="gd-layer__name">{layer.label}</span>
                <div className="gd-layer__vis">👁</div>
              </div>
            ))}
          </div>

          {/* mini canvas preview */}
          <div className="gd-canvas">
            <svg viewBox="0 0 200 80" className="gd-canvas__svg">
              <rect width="200" height="80" fill="#111" rx="4" />
              <polygon points="100,10 140,65 60,65" fill="#ff6b6b" opacity=".8" />
              <polygon points="100,10 140,65 60,65" fill="none" stroke="#f59e0b" strokeWidth="2" />
              <text x="100" y="78" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="sans-serif">ARBAJ TECHNOLOGY</text>
            </svg>
          </div>

          <div className="hero__card-tags">
            <span>Logo</span><span>Social</span><span>Print</span><span>Brand</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ticker() {
  const items = ["Logo Design", "Brand Identity", "Social Media", "Brochures", "Packaging", "Pitch Decks", "UI Graphics", "Illustrations", "Business Cards", "Banners", "Infographics", "Typography"];
  const all = [...items, ...items];
  return (
    <div className="ticker">
      <div className="ticker__track">
        {all.map((item, i) => (
          <span key={i} className="ticker__item">
            {item} <span className="ticker__sep" style={{ color: "#ff6b6b" }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function StatsStrip() {
  const [ref, visible] = useReveal();
  return (
    <section className={`gd-stats section ${visible ? "section--visible" : ""}`} ref={ref}>
      <div className="ve-stats__grid">
        {STATS.map((s, i) => (
          <div className="ve-stats__item" key={s.label} style={{ "--color": s.color, "--i": i }}>
            <strong className="ve-stats__metric">{s.metric}</strong>
            <span className="ve-stats__label">{s.label}</span>
            <div className="ve-stats__bar" />
          </div>
        ))}
      </div>
    </section>
  );
}

function GDServices() {
  const [ref, visible] = useReveal();
  return (
    <section className={`services section ${visible ? "section--visible" : ""}`} ref={ref} id="services" style={{ background: "var(--bg)" }}>
      <div className="section__label">— What We Design</div>
      <h2 className="section__title">
        Every Design Need.<br />
        <span>Beautifully Solved.</span>
      </h2>
      <p className="section__sub">From brand identity to print collateral — every pixel crafted with intention and creativity.</p>
      <div className="services__grid ve-services-grid">
        {GD_SERVICES.map((s, i) => (
          <div className="service-card" key={s.id} style={{ "--accent": s.accent, "--i": i, marginLeft: 0 }}>
            <div className="service-card__tag">{s.tag}</div>
            <div className="service-card__icon">{s.icon}</div>
            <h3 className="service-card__title">{s.title}</h3>
            <p className="service-card__desc">{s.desc}</p>
            <Link to="/contact" className="service-card__link">
              Get a Quote
              <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const [ref, visible] = useReveal();
  return (
    <section className={`section ${visible ? "section--visible" : ""}`} ref={ref} style={{ padding: "var(--section-pad)", background: "var(--bg-2)" }}>
      <div className="section__label">— How It Works</div>
      <h2 className="section__title">From Brief<br /><span>To Beautiful</span></h2>
      <p className="section__sub">A creative process built for clarity, speed, and stunning results every single time.</p>
      <div className="ve-process">
        {PROCESS.map((step, i) => (
          <div className="ve-process__item" key={i} style={{ "--color": step.color, "--i": i }}>
            <div className="ve-process__connector" aria-hidden="true" />
            <div className="ve-process__node">
              <span className="ve-process__step">{step.step}</span>
            </div>
            <div className="ve-process__card">
              <h3 className="ve-process__title">{step.title}</h3>
              <p className="ve-process__desc">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Tools() {
  const [ref, visible] = useReveal();
  return (
    <section className={`section ${visible ? "section--visible" : ""}`} ref={ref} style={{ padding: "var(--section-pad)", background: "var(--bg)" }}>
      <div className="section__label">— Our Creative Suite</div>
      <h2 className="section__title">Tools We <span>Design With</span></h2>
      <p className="section__sub">Industry-standard design software for print, digital, and motion graphics.</p>
      <div className="ve-tools">
        {TOOLS.map((t, i) => (
          <div className="ve-tool-badge" key={t.label} style={{ "--i": i }}>
            <span className="ve-tool-badge__dot" style={{ background: t.dot, boxShadow: `0 0 8px ${t.dot}80` }} />
            {t.label}
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
    <section className={`faq section ${visible ? "section--visible" : ""}`} ref={ref} style={{ background: "var(--bg-2)" }}>
      <div className="section__label">— FAQ</div>
      <h2 className="section__title">Design Questions<br /><span>Answered</span></h2>
      <div className="faq__list">
        {FAQS.map((item, i) => (
          <div key={i} className={`faq__item ${open === i ? "faq__item--open" : ""}`}>
            <button className="faq__q" onClick={() => setOpen(open === i ? null : i)}>
              <span>{item.q}</span>
              <span className="faq__icon">{open === i ? "−" : "+"}</span>
            </button>
            <div className="faq__a"><p>{item.a}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTABanner() {
  const [ref, visible] = useReveal();
  return (
    <section className={`cta-banner gd-cta ${visible ? "section--visible" : ""}`} ref={ref}>
      <div className="cta-banner__orb gd-cta__orb" aria-hidden="true" />
      <div className="cta-banner__content">
        <h2>Ready to Make Your Brand Unforgettable?</h2>
        <p>Share your brief today and get a free sample design within 24 hours — no commitment needed.</p>
        <div className="cta-banner__actions">
          <Link to="/contact" className="btn gd-btn--primary">Get Free Sample Design</Link>
          <a href="tel:+917973611226" className="btn btn--ghost btn--ghost-light">
            <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            +91 79 7361 1226
          </a>
        </div>
      </div>
    </section>
  );
}

export default function GraphicDesigningPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
   <>
      <main>


        <SEOptimization
          title="Graphic Designing Services in India | Logo, Branding & Social Media Design | Arbaj Technology"
          description="Arbaj Technology offers professional graphic designing services including logo design, brand identity, social media creatives, brochures, and packaging design to make your brand stand out."
          keywords="graphic designing services India, logo design company, branding agency India, social media post design, brochure design, packaging design, Arbaj Technology"
          url="https://arbajtechnologypvtltd.com/graphic"
          image="https://arbajtechnologypvtltd.com/og-graphic.jpg"

        />
        <Hero />
        <Ticker />
        <StatsStrip />
        <GDServices />
        <Process />
        <Tools />
        <FAQ />
        <CTABanner />
      </main>
   </>
  );
}