import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import '../styles/GoogleAds.css';
import {RESULTS, GA_SERVICES,PROCESS,TOOLS,WHY_US,FAQS} from '../components/Data/GoogleAdsData'
import SEOptimization from "../components/SEOptimization";

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
  const adMetrics = [
    { label: "Impressions", value: "48,220", change: "+12%", up: true },
    { label: "Clicks", value: "3,841", change: "+28%", up: true },
    { label: "Conversions", value: "312", change: "+41%", up: true },
    { label: "Cost / Conv.", value: "₹142", change: "-18%", up: false },
  ];
  return (
    <section className="hero ga-hero">
      <div className="hero__grid" aria-hidden="true">
        {Array.from({ length: 80 }).map((_, i) => <span key={i} className="hero__grid-dot" />)}
      </div>
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Google Ads — Arbaj Technology
        </div>
        <h1 className="hero__title">
          Ads That Pay<br />
          <span className="hero__title-highlight">For Themselves.</span>
        </h1>
        <p className="hero__desc">
          High-ROI Google Ads management that puts your business in front of customers actively searching for what you sell.
          Average 4.8× return on ad spend, guaranteed transparency.
        </p>
        <div className="hero__actions">
          <Link to="/contact" className="btn btn--primary">
            Get Free Ads Audit
            <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" /></svg>
          </Link>
          <a href="#why-us" className="btn btn--ghost">Why Choose Us</a>
        </div>
        <div className="hero__stats">
          {[
            { number: "4.8×", label: "Avg. ROAS" },
            { number: "500+", label: "Campaigns Run" },
            { number: "48h", label: "Go-Live Time" },
            { number: "40%", label: "Lower CPA" },
          ].map((s) => (
            <div className="hero__stat" key={s.label}>
              <strong>{s.number}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Google Ads dashboard card */}
      <div className="hero__card-wrap" aria-hidden="true">
        <div className="hero__card ga-dash-card">
          <div className="hero__card-header">
            <span className="hero__card-dot hero__card-dot--red" />
            <span className="hero__card-dot hero__card-dot--yellow" />
            <span className="hero__card-dot hero__card-dot--green" />
            <span className="hero__card-title">Campaign Overview</span>
          </div>
          <div className="ga-metrics-grid">
            {adMetrics.map((m, i) => (
              <div className="ga-metric" key={i} style={{ "--delay": `${i * 0.08}s` }}>
                <span className="ga-metric__label">{m.label}</span>
                <span className="ga-metric__val">{m.value}</span>
                <span className={`ga-metric__change ${m.up ? "ga-metric__change--up" : "ga-metric__change--down"}`}>{m.change}</span>
              </div>
            ))}
          </div>
          <div className="ga-roas-bar">
            <span className="ga-roas-bar__label">ROAS</span>
            <div className="ga-roas-bar__track">
              <div className="ga-roas-bar__fill" />
            </div>
            <span className="ga-roas-bar__val">4.8×</span>
          </div>
          <div className="hero__card-tags">
            <span>Search</span><span>Display</span><span>Shopping</span><span>YouTube</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ticker() {
  const items = ["Search Ads", "Display Network", "Shopping Ads", "YouTube Ads", "Remarketing", "PPC Management", "Conversion Tracking", "Smart Bidding", "Quality Score", "Google Analytics"];
  const all = [...items, ...items];
  return (
    <div className="ticker">
      <div className="ticker__track">
        {all.map((item, i) => <span key={i} className="ticker__item">{item} <span className="ticker__sep">✦</span></span>)}
      </div>
    </div>
  );
}

function Results() {
  const [ref, visible] = useReveal();
  return (
    <section className={`ga-results section ${visible ? "section--visible" : ""}`} ref={ref}>
      <div className="ga-results__grid">
        {RESULTS.map((r, i) => (
          <div className="ga-results__item" key={r.label} style={{ "--color": r.color, "--i": i }}>
            <strong className="ga-results__metric">{r.metric}</strong>
            <span className="ga-results__label">{r.label}</span>
            <div className="ga-results__bar" />
          </div>
        ))}
      </div>
    </section>
  );
}

function GAServices() {
  const [ref, visible] = useReveal();
  return (
    <section className={`services section ${visible ? "section--visible" : ""}`} ref={ref} style={{ background: "var(--bg)" }}>
      <div className="section__label">— What We Manage</div>
      <h2 className="section__title">Every Type of Google Ad<br /><span>Handled by Experts</span></h2>
      <p className="section__sub">From search to shopping to YouTube — we run every ad format that puts your business in front of the right people.</p>
      <div className="services__grid ga-services-grid">
        {GA_SERVICES.map((s, i) => (
          <div className="service-card" key={s.id} style={{ "--accent": s.accent, "--i": i, marginLeft: 0 }}>
            <div className="service-card__tag">{s.tag}</div>
            <div className="service-card__icon">{s.icon}</div>
            <h3 className="service-card__title">{s.title}</h3>
            <p className="service-card__desc">{s.desc}</p>
            <Link to="/contact" className="service-card__link">
              Get Started
              <svg viewBox="0 0 16 16" fill="none" width="14" height="14"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
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
      <div className="section__label">— How We Work</div>
      <h2 className="section__title">Our <span>4-Step Ads Process</span></h2>
      <p className="section__sub">A systematic approach that eliminates waste and maximises every rupee of your ad budget.</p>
      <div className="ga-process">
        {PROCESS.map((step, i) => (
          <div className="ga-process__item" key={i} style={{ "--color": step.color, "--i": i }}>
            <div className="ga-process__connector" aria-hidden="true" />
            <div className="ga-process__node"><span className="ga-process__step">{step.step}</span></div>
            <div className="ga-process__card">
              <h3 className="ga-process__title">{step.title}</h3>
              <p className="ga-process__desc">{step.desc}</p>
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
      <div className="section__label">— Our Toolkit</div>
      <h2 className="section__title">Platforms We <span>Use Daily</span></h2>
      <p className="section__sub">The best-in-class PPC tools that give your campaigns a serious competitive advantage.</p>
      <div className="ga-tools">
        {TOOLS.map((t, i) => (
          <div className="ga-tool-badge" key={t.label} style={{ "--i": i }}>
            <span className="ga-tool-badge__dot" style={{ background: t.dot, boxShadow: `0 0 8px ${t.dot}80` }} />
            {t.label}
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const [ref, visible] = useReveal();
  return (
    <section className={`section ga-why ${visible ? "section--visible" : ""}`} ref={ref} id="why-us" style={{ padding: "var(--section-pad)", background: "var(--bg-2)" }}>
      <div className="section__label">— Why Arbaj Technology</div>
      <h2 className="section__title">Your Budget Deserves<br /><span>Better Results.</span></h2>
      <p className="section__sub">Stop wasting money on poorly managed campaigns. Here's why 500+ businesses trust us with their Google Ads.</p>
      <div className="ga-why__grid">
        {WHY_US.map((item, i) => (
          <div className="ga-why__card" key={i} style={{ "--accent": item.accent, "--i": i }}>
            <div className="ga-why__icon-wrap">
              <span className="ga-why__icon" style={{ color: item.accent }}>{item.icon}</span>
            </div>
            <div className="ga-why__body">
              <h3 className="ga-why__title">{item.title}</h3>
              <p className="ga-why__desc">{item.desc}</p>
            </div>
            <div className="ga-why__bar" style={{ background: item.accent }} />
          </div>
        ))}
      </div>
      <div className="ga-why__cta-strip">
        <p className="ga-why__cta-text">Ready to get more leads for less money?</p>
        <Link to="/contact" className="btn btn--primary">
          Get Free Ads Audit
          <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" /></svg>
        </Link>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(null);
  const [ref, visible] = useReveal();
  return (
    <section className={`faq section ${visible ? "section--visible" : ""}`} ref={ref} style={{ background: "var(--bg)" }}>
      <div className="section__label">— FAQ</div>
      <h2 className="section__title">Google Ads Questions<br /><span>Answered</span></h2>
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
    <section className={`cta-banner ${visible ? "section--visible" : ""}`} ref={ref}>
      <div className="cta-banner__orb" aria-hidden="true" />
      <div className="cta-banner__content">
        <h2>Stop Wasting Your Ad Budget</h2>
        <p>Get a free Google Ads audit and see exactly where your money is going — and how to get more from it.</p>
        <div className="cta-banner__actions">
          <Link to="/contact" className="btn btn--primary">Get Free Ads Audit</Link>
          <a href="tel:+917973611226" className="btn btn--ghost btn--ghost-light">
            <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
            +91 79 7361 1226
          </a>
        </div>
      </div>
    </section>
  );
}

export default function GoogleAdsPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (


    <>
      <SEOptimization
        title="Google Ads Agency in India | PPC Services | Arbaj Technology"
        description="Boost your business with high-converting Google Ads campaigns. Arbaj Technology offers expert PPC management, search ads, display ads, and YouTube ads services."
        keywords="Google Ads agency India, PPC services India, Google Ads management, search ads, display ads, YouTube ads, Arbaj Technology"
        url="https://arbajtechnologypvtltd.com/google-ads"
        image="https://arbajtechnologypvtltd.com/og-google-ads.jpg"
      />
    
    <main>
      <Hero />
      <Ticker />
      <Results />
      <GAServices />
      <Process />
      <Tools />
      <WhyChooseUs />
      <FAQ />
      <CTABanner />
    </main>
    </>
  );
}