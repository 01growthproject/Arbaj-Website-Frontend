import { useState, useEffect, useRef } from "react";
import '../styles/services.css'
import { STATS, SERVICES, PROCESS, FAQS } from "../components/Data/ServicesData";
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

/* ─────────────────────────────────────────────
   SERVICE HERO — NEW CENTERED LAYOUT (sh__*)
───────────────────────────────────────────── */
const FLIP_WORDS = ["Win Online.", "Grow Fast.", "Dominate.", "Get Results."];

const HERO_METRICS = [
  { icon: "🔍", tag: "SEO", value: "300%", label: "Organic Traffic", accent: "#17ABBC" },
  { icon: "📈", tag: "PPC", value: "5×", label: "Return on Ad Spend", accent: "#f97316" },
  { icon: "📱", tag: "Social", value: "200%", label: "Engagement Rate", accent: "#a855f7" },
  { icon: "💻", tag: "Web Dev", value: "180%", label: "Conversion Rate", accent: "#22c55e" },
];

function ServiceHero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const particleRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => {
      setFlipping(true);
      setTimeout(() => {
        setWordIdx(i => (i + 1) % FLIP_WORDS.length);
        setFlipping(false);
      }, 380);
    }, 2600);
    return () => clearInterval(id);
  }, []);

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

      <div className="sh__badge">
        <span className="sh__badge-dot" />
        Complete Digital Marketing Solutions
      </div>

      <h1 className="sh__title">
        Every Service You Need To
        <br />
        <span className="sh__title-line2">
          <span className="sh__title-gradient">Grow &amp;&nbsp;</span>
          <span className={`sh__title-flip${flipping ? " sh__title-flip--out" : ""}`}>
            {FLIP_WORDS[wordIdx]}
          </span>
        </span>
      </h1>

      <p className="sh__desc">
        SEO · Google Ads · Social Media · Web Development · Graphic Design · Video Editing
        <br />
        <span>Result-oriented digital marketing that grows your business — under one roof.</span>
      </p>

      <div className="sh__actions">
        <a href="/contact" className="sh__btn sh__btn--primary">
          Get Free Consultation
          <svg viewBox="0 0 20 20" fill="currentColor" width="17" height="17">
            <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
          </svg>
        </a>
        <a href="#services-grid" className="sh__btn sh__btn--ghost">Explore Services</a>
      </div>

      <div className="sh__divider" />

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

      <div className="sh__cards">
        {HERO_METRICS.map((m, i) => (
          <div
            className="sh__card"
            key={i}
            style={{ "--card-color": m.accent, animationDelay: `${0.6 + i * 0.1}s` }}
          >
            <div className="sh__card-top">
              <span className="sh__card-icon">{m.icon}</span>
              <span className="sh__card-tag">{m.tag}</span>
            </div>
            <div className="sh__card-value">↑ {m.value}</div>
            <div className="sh__card-label">{m.label}</div>
            <div className="sh__card-bar">
              <div className="sh__card-bar-fill" style={{ "--bar-w": `${60 + i * 8}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


function Ticker() {
  const items = [
    "SEO", "Google Ads", "Social Media", "Website Development",
    "Graphic Design", "Video Editing", "Brand Strategy", "Content Marketing",
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


function ServicesGrid() {
  const [ref, visible] = useReveal();
  const [active, setActive] = useState(null);

  return (
    <section
      className={`svc-grid section ${visible ? "section--visible" : ""}`}
      ref={ref}
      id="services-grid"
    >
      <div className="section__label">— What We Offer</div>
      <h2 className="section__title">
        All Services<br />
        <span>In Detail</span>
      </h2>
      <p className="section__sub">
        Click any service to see what's included and the results you can expect.
      </p>

      <div className="svc-grid__list">
        {SERVICES.map((s, i) => (
          <div
            className={`svc-card ${active === s.id ? "svc-card--open" : ""}`}
            key={s.id}
            style={{ "--accent": s.accent, "--i": i }}
            onClick={() => setActive(active === s.id ? null : s.id)}
          >
            <div className="svc-card__inner">
              <div className="svc-card__left">
                <div className="svc-card__tag">{s.tag}</div>
                <div className="svc-card__icon">{s.icon}</div>
                <h3 className="svc-card__title">{s.title}</h3>
                <p className="svc-card__desc">{s.desc}</p>
              </div>

              <div className="svc-card__right">
                <div className="svc-card__result">
                  <span className="svc-card__result-val">{s.result}</span>
                  <span className="svc-card__result-label">avg. client result</span>
                </div>
                <div className="svc-card__toggle">
                  <span>{active === s.id ? "−" : "+"}</span>
                </div>
              </div>
            </div>

            <div className="svc-card__features">
              <div className="svc-card__features-inner">
                <p className="svc-card__features-label">What's included:</p>
                <ul className="svc-card__features-list">
                  {s.features.map((f) => (
                    <li key={f}>
                      <span className="svc-card__check">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="/contact" className="btn btn--primary svc-card__cta">
                  Get Started
                  <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


function ServicesMini() {
  const [ref, visible] = useReveal();
  return (
    <section
      className={`services-mini section ${visible ? "section--visible" : ""}`}
      ref={ref}
    >
      <div className="section__label">— Quick Overview</div>
      <h2 className="section__title">
        Everything You Need<br />
        <span>To Win Online</span>
      </h2>
      <p className="section__sub">
        Complete digital marketing solutions under one roof — strategy, design, execution and growth.
      </p>

      <div className="services__grid">
        {SERVICES.map((s, i) => (
          <div
            className="service-card"
            key={s.id}
            style={{ "--accent": s.accent, "--i": i }}
          >
            <div className="service-card__tag">{s.tag}</div>
            <div className="service-card__icon">{s.icon}</div>
            <h3 className="service-card__title">{s.title}</h3>
            <p className="service-card__desc">{s.desc}</p>
            <a href="#services-grid" className="service-card__link">
              Learn More
              <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
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
      className={`svc-process section ${visible ? "section--visible" : ""}`}
      ref={ref}
    >
      <div className="section__label">— How We Work</div>
      <h2 className="section__title">
        Our Simple <span>4-Step Process</span>
      </h2>
      <p className="section__sub">
        From first call to real results — a clear, transparent process every step of the way.
      </p>

      <div className="svc-process__grid">
        {PROCESS.map((step, i) => (
          <div className="process-card" key={i} style={{ "--i": i }}>
            {i < PROCESS.length - 1 && (
              <div className="process-card__connector" aria-hidden="true" />
            )}
            <div className="process-card__step">{step.step}</div>
            <div className="process-card__icon">{step.icon}</div>
            <h3 className="process-card__title">{step.title}</h3>
            <p className="process-card__desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


function WhyUs() {
  const [ref, visible] = useReveal();
  return (
    <section
      className={`svc-why section ${visible ? "section--visible" : ""}`}
      ref={ref}
    >
      <div className="svc-why__inner">
        <div className="svc-why__visual">
          <div className="svc-why__circle svc-why__circle--1" />
          <div className="svc-why__circle svc-why__circle--2" />
          <div className="svc-why__badge-stack">
            <div className="svc-why__badge-card svc-why__badge-card--blue">
              <span>📊</span>
              <div>
                <strong>Data-Driven Results</strong>
                <p>Every decision we make is backed by real data — no guesswork, only growth.</p>
              </div>
            </div>
            <div className="svc-why__badge-card svc-why__badge-card--gold">
              <span>🤝</span>
              <div>
                <strong>Dedicated Support</strong>
                <p>Your dedicated account manager is always just a call or message away.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="svc-why__text">
          <div className="section__label">— Why Choose Us</div>
          <h2 className="section__title">
            Why Businesses Trust<br />
            <span>Arbaj Technology</span>
          </h2>
          <p className="svc-why__para">
            With 5+ years of experience and 500+ happy clients, we've built our reputation on one
            thing: real, measurable results. No vanity metrics — just growth you can see and feel.
          </p>
          <p className="svc-why__para">
            Every service we offer is backed by a proven strategy, expert execution, and complete
            transparency. We treat your business like our own.
          </p>

          <ul className="svc-why__features">
            {[
              "Certified Google Ads & Meta Ads Partners",
              "Transparent Monthly Reporting",
              "No Lock-In Contracts",
              "Dedicated Account Manager",
              "98% Client Retention Rate",
            ].map((f) => (
              <li key={f}>
                <span className="svc-why__check">✓</span>
                {f}
              </li>
            ))}
          </ul>

          <a href="/contact" className="btn btn--primary">
            Book Free Consultation
            <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          </a>
        </div>
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
      <div className="section__label">— FAQ</div>
      <h2 className="section__title">
        Questions About<br />
        <span>Our Services</span>
      </h2>
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
          <a href="/contact" className="btn btn--primary">
            Book Free Consultation
          </a>
          <a href="tel:917973611226" className="btn btn--ghost btn--ghost-light">
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



export default function ServicePage() {
  return (
    <>
      <main>

        <SEOptimization
          title="Digital Marketing &amp; Web Development Services"
          description="Get expert digital marketing, SEO, PPC, social media, and web development services to grow your business online with Arbaj Technology. Call +91 79 7361 1226"
        
        />
        <ServiceHero />
        <Ticker />
        <ServicesMini />
        <ServicesGrid />
        <Process />
        <WhyUs />
        <FAQ />
        <CTABanner />
      </main>
    </>
  );
}