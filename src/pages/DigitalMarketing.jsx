import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import '../styles/DigitalMarketing.css'
import{RESULTS, DM_SERVICES, PROCESS, TOOLS, PACKAGES, FAQS} from'../components/Data/MarketingData'


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
  const metrics = [
    { label: "Organic Traffic", value: "↑ 284%", color: "#22c55e" },
    { label: "Ad ROI", value: "4.8×", color: "#f4a200" },
    { label: "Leads / Month", value: "↑ 142", color: "#1d7afc" },
  ];

  const bars = [30, 52, 45, 70, 60, 85, 72, 95, 88, 100];

  return (
    <section className="hero dm-hero">
      <div className="hero__grid" aria-hidden="true">
        {Array.from({ length: 80 }).map((_, i) => (
          <span key={i} className="hero__grid-dot" />
        ))}
      </div>
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Digital Marketing — Arbaj Technology
        </div>

        <h1 className="hero__title">
          More Traffic.<br />
          <span className="hero__title-highlight">More Leads. More Sales.</span>
        </h1>

        <p className="hero__desc">
          India's results-first digital marketing agency. We combine SEO, Google Ads, Social Media,
          and Content to build a growth engine that runs 24/7 for your business.
        </p>

        <div className="hero__actions">
          <Link to="/contact" className="btn btn--primary">
            Get Free Strategy Call
            <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          </Link>
          <a href="#packages" className="btn btn--ghost">View Plans</a>
        </div>

        <div className="hero__stats">
          {[
            { number: "500+", label: "Clients Grown" },
            { number: "5+", label: "Years Experience" },
            { number: "98%", label: "Retention Rate" },
            { number: "50+", label: "Team Experts" },
          ].map((s) => (
            <div className="hero__stat" key={s.label}>
              <strong>{s.number}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating analytics dashboard card */}
      <div className="hero__card-wrap" aria-hidden="true">
        <div className="hero__card dm-dash-card">
          <div className="hero__card-header">
            <span className="hero__card-dot hero__card-dot--red" />
            <span className="hero__card-dot hero__card-dot--yellow" />
            <span className="hero__card-dot hero__card-dot--green" />
            <span className="hero__card-title">Analytics Dashboard</span>
          </div>

          {/* chart */}
          <div className="hero__chart dm-chart">
            {bars.map((h, i) => (
              <div key={i} className="hero__bar-wrap">
                <div
                  className="hero__bar"
                  style={{ "--bar-h": `${h}%`, "--delay": `${i * 0.07}s` }}
                />
              </div>
            ))}
          </div>

          {/* metric rows */}
          <div className="dm-metrics">
            {metrics.map((m) => (
              <div className="dm-metric-row" key={m.label}>
                <span className="dm-metric-row__label">{m.label}</span>
                <span className="dm-metric-row__val" style={{ color: m.color }}>{m.value}</span>
              </div>
            ))}
          </div>

          <div className="hero__card-tags">
            <span>SEO</span><span>PPC</span><span>SMM</span><span>Email</span>
          </div>
        </div>
      </div>
    </section>
  );
}


function Ticker() {
  const items = ["SEO", "Google Ads", "Meta Ads", "Social Media", "Content Marketing", "Email Campaigns", "Analytics", "Lead Generation", "Brand Awareness", "ROI"];
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


function Results() {
  const [ref, visible] = useReveal();
  return (
    <section
      className={`dm-results section ${visible ? "section--visible" : ""}`}
      ref={ref}
    >
      <div className="dm-results__grid">
        {RESULTS.map((r, i) => (
          <div className="dm-results__item" key={r.label} style={{ "--color": r.color, "--i": i }}>
            <strong className="dm-results__metric">{r.metric}</strong>
            <span className="dm-results__label">{r.label}</span>
            <div className="dm-results__bar" />
          </div>
        ))}
      </div>
    </section>
  );
}


function DMServices() {
  const [ref, visible] = useReveal();
  return (
    <section
      className={`services section ${visible ? "section--visible" : ""}`}
      ref={ref}
      style={{ background: "var(--bg)" }}
    >
      <div className="section__label">— What We Do</div>
      <h2 className="section__title">
        Full-Funnel Marketing<br />
        <span>From Awareness to Revenue</span>
      </h2>
      <p className="section__sub">
        Every service we offer is built around one goal — growing your business profitably.
      </p>

      <div className="services__grid dm-services-grid">
        {DM_SERVICES.map((s, i) => (
          <div
            className="service-card"
            key={s.id}
            style={{ "--accent": s.accent, "--i": i, marginLeft: 0 }}
          >
            <div className="service-card__tag">{s.tag}</div>
            <div className="service-card__icon">{s.icon}</div>
            <h3 className="service-card__title">{s.title}</h3>
            <p className="service-card__desc">{s.desc}</p>
            <Link to="/contact" className="service-card__link">
              Get Started
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
    <section
      className={`section ${visible ? "section--visible" : ""}`}
      ref={ref}
      style={{ padding: "var(--section-pad)", background: "var(--bg-2)" }}
    >
      <div className="section__label">— How We Work</div>
      <h2 className="section__title">
        Our <span>4-Step Formula</span>
      </h2>
      <p className="section__sub">
        A repeatable system that's driven growth for 500+ businesses across India.
      </p>

      <div className="dm-process">
        {PROCESS.map((step, i) => (
          <div className="dm-process__item" key={i} style={{ "--color": step.color, "--i": i }}>
            <div className="dm-process__connector" aria-hidden="true" />
            <div className="dm-process__node">
              <span className="dm-process__step">{step.step}</span>
            </div>
            <div className="dm-process__card">
              <h3 className="dm-process__title">{step.title}</h3>
              <p className="dm-process__desc">{step.desc}</p>
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
    <section
      className={`section ${visible ? "section--visible" : ""}`}
      ref={ref}
      style={{ padding: "var(--section-pad)", background: "var(--bg)" }}
    >
      <div className="section__label">— Our Toolkit</div>
      <h2 className="section__title">
        Platforms We <span>Master</span>
      </h2>
      <p className="section__sub">
        Industry-leading tools that give your campaigns a serious competitive edge.
      </p>

      <div className="dm-tools">
        {TOOLS.map((t, i) => (
          <div className="dm-tool-badge" key={t.label} style={{ "--i": i }}>
            <span className="dm-tool-badge__dot" style={{ background: t.dot, boxShadow: `0 0 8px ${t.dot}80` }} />
            {t.label}
          </div>
        ))}
      </div>
    </section>
  );
}


function Packages() {
  const [ref, visible] = useReveal();
  return (
    <section
      className={`section ${visible ? "section--visible" : ""}`}
      ref={ref}
      id="packages"
      style={{ padding: "var(--section-pad)", background: "var(--bg-2)" }}
    >
      <div className="section__label">— Pricing</div>
      <h2 className="section__title">
        Transparent Monthly<br />
        <span>Marketing Plans</span>
      </h2>
      <p className="section__sub">
        No lock-ins, no hidden fees. Cancel anytime. Results guaranteed or we'll fix it free.
      </p>

      <div className="dm-packages">
        {PACKAGES.map((pkg, i) => (
          <div
            className={`dm-pkg ${pkg.highlight ? "dm-pkg--highlight" : ""}`}
            key={pkg.name}
            style={{ "--accent": pkg.accent, "--i": i }}
          >
            {pkg.highlight && <div className="dm-pkg__popular">⭐ Most Popular</div>}
            <div className="dm-pkg__top">
              <span className="dm-pkg__tag">{pkg.tag}</span>
              <h3 className="dm-pkg__name">{pkg.name}</h3>
              <div className="dm-pkg__price-wrap">
                <span className="dm-pkg__price">{pkg.price}</span>
                {pkg.period && <span className="dm-pkg__period">{pkg.period}</span>}
              </div>
            </div>
            <ul className="dm-pkg__features">
              {pkg.features.map((f) => (
                <li key={f}>
                  <span className="dm-pkg__check" style={{ color: pkg.accent }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className={`btn ${pkg.highlight ? "btn--primary" : "btn--ghost"} dm-pkg__cta`}
            >
              {pkg.cta}
              <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
              </svg>
            </Link>
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
      style={{ background: "var(--bg)" }}
    >
      <div className="section__label">— FAQ</div>
      <h2 className="section__title">
        Marketing Questions<br />
        <span>Answered</span>
      </h2>
      <div className="faq__list">
        {FAQS.map((item, i) => (
          <div key={i} className={`faq__item ${open === i ? "faq__item--open" : ""}`}>
            <button className="faq__q" onClick={() => setOpen(open === i ? null : i)}>
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
    <section className={`cta-banner ${visible ? "section--visible" : ""}`} ref={ref}>
      <div className="cta-banner__orb" aria-hidden="true" />
      <div className="cta-banner__content">
        <h2>Let's Grow Your Business Together</h2>
        <p>Book a free 30-minute strategy call — no commitment, just a results-focused conversation.</p>
        <div className="cta-banner__actions">
          <Link to="/contact" className="btn btn--primary">
            Book Free Strategy Call
          </Link>
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


export default function DigitalMarketingPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <main>
      <Hero />
      <Ticker />
      <Results />
      <DMServices />
      <Process />
      <Tools />
      {/* <Packages /> */}
      <FAQ />
      <CTABanner />
    </main>
  );
}