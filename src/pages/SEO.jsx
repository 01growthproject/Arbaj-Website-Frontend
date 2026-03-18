import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import '../styles/SEO.css'

import {RESULTS, SEO_SERVICES, PROCESS, TOOLS, WHY_US, FAQS} from '../components/Data/SeoData'
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
  const rankItems = [
    { keyword: "digital marketing agency", pos: 1, change: "↑3" },
    { keyword: "web design zirakpur", pos: 2, change: "↑5" },
    { keyword: "seo services chandigarh", pos: 3, change: "↑8" },
    { keyword: "google ads management", pos: 4, change: "↑2" },
  ];
  return (
    <section className="hero seo-hero">
      <div className="hero__grid" aria-hidden="true">
        {Array.from({ length: 80 }).map((_, i) => <span key={i} className="hero__grid-dot" />)}
      </div>
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          SEO Services — Arbaj Technology
        </div>
        <h1 className="hero__title">
          Rank Higher.<br />
          <span className="hero__title-highlight">Get Found. Grow Faster.</span>
        </h1>
        <p className="hero__desc">
          Data-driven SEO that puts your business on page 1 of Google — and keeps it there.
          Technical audits, content strategy, and authority link building, all under one roof.
        </p>
        <div className="hero__actions">
          <Link to="/contact" className="btn btn--primary">
            Get Free SEO Audit
            <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" /></svg>
          </Link>
          <a href="#why-us" className="btn btn--ghost">Why Choose Us</a>
        </div>
        <div className="hero__stats">
          {[
            { number: "300+", label: "Page 1 Rankings" },
            { number: "5+", label: "Years Experience" },
            { number: "3×", label: "Avg Traffic Growth" },
            { number: "98%", label: "Retention Rate" },
          ].map((s) => (
            <div className="hero__stat" key={s.label}>
              <strong>{s.number}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating rank tracker card */}
      <div className="hero__card-wrap" aria-hidden="true">
        <div className="hero__card seo-rank-card">
          <div className="hero__card-header">
            <span className="hero__card-dot hero__card-dot--red" />
            <span className="hero__card-dot hero__card-dot--yellow" />
            <span className="hero__card-dot hero__card-dot--green" />
            <span className="hero__card-title">Rank Tracker</span>
          </div>
          <div className="seo-rank__header">
            <span className="seo-rank__col">Keyword</span>
            <span className="seo-rank__col">Pos.</span>
            <span className="seo-rank__col">Change</span>
          </div>
          <div className="seo-rank__list">
            {rankItems.map((item, i) => (
              <div className="seo-rank__row" key={i} style={{ "--delay": `${i * 0.1}s` }}>
                <span className="seo-rank__kw">{item.keyword}</span>
                <span className="seo-rank__pos">#{item.pos}</span>
                <span className="seo-rank__change">{item.change}</span>
              </div>
            ))}
          </div>
          <div className="seo-rank__footer">
            <span className="seo-rank__label">Avg. Position</span>
            <span className="seo-rank__avg">2.5</span>
          </div>
        </div>
      </div>
    </section>
  );
}


function Ticker() {
  const items = ["Technical SEO", "On-Page SEO", "Link Building", "Local SEO", "Keyword Research", "SEO Audit", "Content SEO", "E-Commerce SEO", "Schema Markup", "Core Web Vitals"];
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
    <section className={`seo-results section ${visible ? "section--visible" : ""}`} ref={ref}>
      <div className="seo-results__grid">
        {RESULTS.map((r, i) => (
          <div className="seo-results__item" key={r.label} style={{ "--color": r.color, "--i": i }}>
            <strong className="seo-results__metric">{r.metric}</strong>
            <span className="seo-results__label">{r.label}</span>
            <div className="seo-results__bar" />
          </div>
        ))}
      </div>
    </section>
  );
}

function SEOServices() {
  const [ref, visible] = useReveal();
  return (
    <section className={`services section ${visible ? "section--visible" : ""}`} ref={ref} style={{ background: "var(--bg)" }}>
      <div className="section__label">— What We Do</div>
      <h2 className="section__title">Complete SEO Services<br /><span>That Drive Real Growth</span></h2>
      <p className="section__sub">Every SEO service we offer is laser-focused on one outcome — getting your business found by customers ready to buy.</p>
      <div className="services__grid seo-services-grid">
        {SEO_SERVICES.map((s, i) => (
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
      <h2 className="section__title">Our <span>4-Step SEO Process</span></h2>
      <p className="section__sub">A proven framework that takes your site from invisible to unstoppable.</p>
      <div className="seo-process">
        {PROCESS.map((step, i) => (
          <div className="seo-process__item" key={i} style={{ "--color": step.color, "--i": i }}>
            <div className="seo-process__connector" aria-hidden="true" />
            <div className="seo-process__node"><span className="seo-process__step">{step.step}</span></div>
            <div className="seo-process__card">
              <h3 className="seo-process__title">{step.title}</h3>
              <p className="seo-process__desc">{step.desc}</p>
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
      <h2 className="section__title">SEO Tools We <span>Master</span></h2>
      <p className="section__sub">Industry-leading platforms that give your SEO campaign a serious data advantage.</p>
      <div className="seo-tools">
        {TOOLS.map((t, i) => (
          <div className="seo-tool-badge" key={t.label} style={{ "--i": i }}>
            <span className="seo-tool-badge__dot" style={{ background: t.dot, boxShadow: `0 0 8px ${t.dot}80` }} />
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
    <section className={`section seo-why ${visible ? "section--visible" : ""}`} ref={ref} id="why-us" style={{ padding: "var(--section-pad)", background: "var(--bg-2)" }}>
      <div className="section__label">— Why Arbaj Technology</div>
      <h2 className="section__title">SEO That Actually<br /><span>Moves the Needle.</span></h2>
      <p className="section__sub">We combine technical expertise, creative content, and authority building to deliver rankings that stick.</p>
      <div className="seo-why__grid">
        {WHY_US.map((item, i) => (
          <div className="seo-why__card" key={i} style={{ "--accent": item.accent, "--i": i }}>
            <div className="seo-why__icon-wrap">
              <span className="seo-why__icon" style={{ color: item.accent }}>{item.icon}</span>
            </div>
            <div className="seo-why__body">
              <h3 className="seo-why__title">{item.title}</h3>
              <p className="seo-why__desc">{item.desc}</p>
            </div>
            <div className="seo-why__bar" style={{ background: item.accent }} />
          </div>
        ))}
      </div>
      <div className="seo-why__cta-strip">
        <p className="seo-why__cta-text">Ready to rank higher and get found by more customers?</p>
        <Link to="/contact" className="btn btn--primary">
          Get Free SEO Audit
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
      <h2 className="section__title">SEO Questions<br /><span>Answered</span></h2>
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
        <h2>Start Ranking on Page 1 Today</h2>
        <p>Get your free SEO audit and discover exactly what's holding your site back — no commitment required.</p>
        <div className="cta-banner__actions">
          <Link to="/contact" className="btn btn--primary">Get Free SEO Audit</Link>
          <a href="tel:+917973611226" className="btn btn--ghost btn--ghost-light">
            <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
            +91 79 7361 1226
          </a>
        </div>
      </div>
    </section>
  );
}

export default function SEOPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (

    <>

      <SEOptimization
        title="SEO Services in India | #1 SEO Company | Arbaj Technology"
        description="Boost your Google rankings with Arbaj Technology. We provide technical SEO, on-page SEO, link building, and local SEO services to grow your business online."
        keywords="SEO services India, SEO company India, local SEO Chandigarh, technical SEO, on page SEO, link building services, SEO expert India"
        url="https://arbajtechnologypvtltd.com/seo"
        image="https://arbajtechnologypvtltd.com/og-seo.jpg"
      />
    <main>
      <Hero />
      <Ticker />
      <Results />
      <SEOServices />
      <Process />
      <Tools />
      <WhyChooseUs />
      <FAQ />
      <CTABanner />
    </main>
    </>
  );
}