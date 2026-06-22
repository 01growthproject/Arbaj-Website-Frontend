import { useState, useEffect, useRef } from "react";
import '../styles/services.css';
import { STATS, SERVICES, PROCESS, FAQS } from "../components/Data/ServicesData";
import SEOptimization from "../components/SEOptimization";
import { Link } from "react-router-dom";

/* ═══════════════════════════════════════════════
   SCROLL REVEAL HOOK  (home.css se same)
═══════════════════════════════════════════════ */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

/* ═══════════════════════════════════════════════
   FLIP WORDS + METRIC CARDS DATA
═══════════════════════════════════════════════ */
const FLIP_WORDS = ["SEO", "Google Ads", "Web Development","Meta Ads","Video Editing","Graphic Designing"];

const HERO_METRICS = [
  { icon: "🔍", tag: "SEO", value: "300%", label: "Organic Traffic", accent: "#FF6B5B" },
  { icon: "📈", tag: "PPC", value: "5×", label: "Return on Ad Spend", accent: "#8B7CF6" },
  { icon: "📱", tag: "Social", value: "200%", label: "Engagement Rate", accent: "#7FE6C4" },
  { icon: "💻", tag: "Web Dev", value: "180%", label: "Conversion Rate", accent: "#F97316" },
];

/* ═══════════════════════════════════════════════
   SERVICE HERO
═══════════════════════════════════════════════ */
function ServiceHero() {
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
    }, 2600);
    return () => clearInterval(id);
  }, []);

  /* floating particles */
  useEffect(() => {
    const container = particleRef.current;
    if (!container || window.innerWidth < 768) return;
    container.innerHTML = "";
    const colors = ["#FF6B5B", "#7FE6C4", "#8B7CF6", "#F97316"];
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
      {/* Background decorations */}
      <div className="serv__bg">
        <div className="serv__bg-mesh" />
        <div className="serv__bg-lines" />
        <div className="serv__ring serv__ring--lg" />
        <div className="serv__ring serv__ring--md" />
        <div className="serv__ring serv__ring--sm" />
        <div className="serv__ring-spin serv__ring-spin--1" />
        <div className="serv__ring-spin serv__ring-spin--2" />
        <div ref={particleRef} className="serv__particles" />
      </div>

      {/* Badge pill — home eyebrow style */}
      <div className="serv__badge">
        <span className="serv__badge-dot" />
        Complete Digital Marketing Solutions
      </div>

      {/* Title with flip word */}
      <h1 className="serv__title">
        <span className="serv__title-line2">
          <span className="serv__title-gradient">Grow Your Business with&nbsp;</span>
          <span className={`serv__title-flip${flipping ? " serv__title-flip--out" : ""}`}>
            {FLIP_WORDS[wordIdx]}
          </span>
        </span>
      </h1>

      {/* Description */}
      <p className="serv__desc">
        SEO · Google Ads · Social Media · Web Development · Graphic Design · Video Editing
        <br />
        <span>
          Result-oriented digital marketing services in India that help you rank on Google,
          generate leads and grow your business faster.
        </span>
      </p>

      {/* Action buttons */}
      <div className="serv__actions">
        <Link to="/contact" className="serv__btn serv__btn--primary">
          <span>Get Free Consultation</span>
          <svg viewBox="0 0 20 20" fill="currentColor" width="17" height="17">
            <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
          </svg>
        </Link>
        <Link to="#services-grid" className="serv__btn serv__btn--ghost">
          Explore Services
        </Link>
      </div>

      {/* Divider */}
      <div className="serv__divider" />

      {/* Stats row */}
      <div className="serv__stats">
        {STATS.map((s, i) => (
          <div className="serv__stat" key={i}>
            <strong>
              {s.number.replace(/[+%×]/g, "")}
              <span>{s.number.match(/[+%×]/)?.[0]}</span>
            </strong>
            <em>{s.label}</em>
          </div>
        ))}
      </div>

      {/* Metric cards */}
      <div className="serv__cards">
        {HERO_METRICS.map((m, i) => (
          <div
            className="serv__card"
            key={i}
            style={{ "--card-color": m.accent, animationDelay: `${0.6 + i * 0.1}s` }}
          >
            <div className="serv__card-top">
              <span className="serv__card-icon">{m.icon}</span>
              <span className="serv__card-tag">{m.tag}</span>
            </div>
            <div className="serv__card-value">↑ {m.value}</div>
            <div className="serv__card-label">{m.label}</div>
            <div className="serv__card-bar">
              <div className="serv__card-bar-fill" style={{ "--bar-w": `${60 + i * 8}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   TICKER  (home.css se same)
═══════════════════════════════════════════════ */
function Ticker() {
  // const items = [
  //   "SEO", "Google Ads", "Social Media", "Website Development",
  //   "Graphic Design", "Video Editing", "Brand Strategy", "Content Marketing",
  // ];
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

/* ═══════════════════════════════════════════════
   SERVICES MINI GRID
═══════════════════════════════════════════════ */
function ServicesMini() {
  const [ref, visible] = useReveal();

  return (
    <section
      className={`serv-mini section ${visible ? "section--visible" : ""}`}
      ref={ref}
    >
      <div className="section__label_">What We Do</div>
      <h2 className="section__title">
        Complete Digital Marketing <br />
        <span>Services</span>
      </h2>
      <p className="section__sub">
        At Arbaj Technology, we specialize in result-driven digital solutions that help
        businesses grow online. We have customized strategies for startups, small businesses,
        and established companies to increase visibility, generate more leads, and increase
        revenues. We use creativity, technology, and marketing expertise to deliver
        measurable results.
      </p>

      <div className="serv__grid">
        {SERVICES.map((s, i) => (
          <div
            className="serv-card"
            key={s.id}
            style={{ "--accent": s.accent, "--i": i }}
          >
            <div className="serv-card__tag">{s.tag}</div>
            <div className="serv-card__icon">{s.icon}</div>
            <h3 className="serv-card__title">{s.title}</h3>
            <p className="serv-card__desc">{s.desc}</p>
            <Link to={s.link} className="serv-card__link">
              Explore {s.title} Services
              <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SERVICES ACCORDION GRID
═══════════════════════════════════════════════ */
function ServicesGrid() {
  const [ref, visible] = useReveal();
  const [active, setActive] = useState(null);

  return (
    <section
      className={`serv-grid section ${visible ? "section--visible" : ""}`}
      ref={ref}
      id="services-grid"
    >
      <div className="section__label_">What We Offer</div>
      <h2 className="section__title">
        Digital Marketing Services in India<br />
        <span>In Detail</span>
      </h2>
      <p className="section__sub">
        Click any service to see what's included and the results you can expect.
      </p>

      <div className="serv-grid__list">
        {SERVICES.map((s, i) => (
          <div
            className={`serv-card ${active === s.id ? "serv-card--open" : ""}`}
            key={s.id}
            style={{ "--accent": s.accent, "--i": i }}
            onClick={() => setActive(active === s.id ? null : s.id)}
          >
            <div className="serv-card__inner">
              <div className="serv-card__left">
                <div className="serv-card__tag">{s.tag}</div>
                <div className="serv-card__icon">{s.icon}</div>
                <div>
                  <h3 className="serv-card__title">{s.title}</h3>
                  <p className="serv-card__desc">{s.desc}</p>
                </div>
              </div>

              <div className="serv-card__right">
                <div className="serv-card__result">
                  <span className="serv-card__result-val">{s.result}</span>
                  <span className="serv-card__result-label">avg. client result</span>
                </div>
                <div className="serv-card__toggle">
                  <span>{active === s.id ? "−" : "+"}</span>
                </div>
              </div>
            </div>

            {/* Expandable features */}
            <div className="serv-card__features">
              <div className="serv-card__features-inner">
                <p className="serv-card__features-label">What's included:</p>
                <ul className="serv-card__features-list">
                  {s.features.map((f) => (
                    <li key={f}>
                      <span className="serv-card__check">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn--primary serv-card__cta">
                  <span>Get Started</span>
                  <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   PROCESS  (4-step)
═══════════════════════════════════════════════ */
function Process() {
  const [ref, visible] = useReveal();

  return (
    <section
      className={`serv-process section ${visible ? "section--visible" : ""}`}
      ref={ref}
    >
      <div className="section__label">How We Work</div>
      <h2 className="section__title">
        Our Simple <span>4-Step Process</span>
      </h2>
      <p className="section__sub">
        From first call to real results — a clear, transparent process every step of the way.
      </p>

      <div className="serv-process__grid">
        {PROCESS.map((step, i) => (
          <div
            className="serv-process-card"
            key={i}
            style={{ "--i": i }}
          >
            {/* connector arrow between cards */}
            {i < PROCESS.length - 1 && (
              <div className="serv-process-card__connector" aria-hidden="true" />
            )}
            <div className="serv-process-card__step">{step.step}</div>
            <div className="serv-process-card__icon">{step.icon}</div>
            <h3 className="serv-process-card__title">{step.title}</h3>
            <p className="serv-process-card__desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   WHY US  (home About section se inspired)
═══════════════════════════════════════════════ */
const WHY_FEATURES = [
  "Certified Google Ads & Meta Ads Partners",
  "Transparent Monthly Reporting",
  "No Lock-In Contracts",
  "Dedicated Account Manager",
  "98% Client Retention Rate",
];

function WhyUs() {
  const [ref, visible] = useReveal();

  return (
    <section
      className={`serv-why section ${visible ? "section--visible" : ""}`}
      ref={ref}
    >
      <div className="serv-why__inner">
        {/* Visual side */}
        <div className="serv-why__visual">
          <div className="serv-why__circle serv-why__circle--1" />
          <div className="serv-why__circle serv-why__circle--2" />
          <div className="serv-why__badge-stack">
            <div className="serv-why__badge-card serv-why__badge-card--blue">
              <span>📊</span>
              <div>
                <strong>Data-Driven Results</strong>
                <p>
                  We use Google Analytics, Search Console and advanced tracking tools to
                  measure performance, optimise campaigns and maximise your ROI.
                </p>
              </div>
            </div>
            <div className="serv-why__badge-card serv-why__badge-card--gold">
              <span>🤝</span>
              <div>
                <strong>Dedicated Support</strong>
                <p>
                  Constant support, prompt responses, periodic updates and personalised advice
                  to keep communication smooth and clients satisfied.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Text side */}
        <div className="serv-why__text">
          <div className="section__label_">Why Choose Us</div>
          <h2 className="section__title">
            Why Businesses Trust<br />
            <span>Arbaj Technology</span>
          </h2>
          <p className="serv-why__para">
            With 5+ years of experience and 50+ happy clients, we've earned our reputation
            on one thing: real, measurable results. No vanity metrics. Just growth you can
            see and feel.
          </p>
          <p className="serv-why__para">
            All of our services are backed by a proven strategy, expert execution, and
            complete transparency. We treat your business like our own.
          </p>

          <ul className="serv-why__features">
            {WHY_FEATURES.map((f, i) => (
              <li key={f} style={{ "--i": i }}>
                <span className="serv-why__check">✓</span>
                {f}
              </li>
            ))}
          </ul>

          <Link to="/contact" className="btn btn--primary">
            <span>Book Free Consultation</span>
            <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   FAQ  (home.css ke FAQ se same structure)
═══════════════════════════════════════════════ */
function FAQ() {
  const [open, setOpen] = useState(null);
  const [ref, visible] = useReveal();

  return (
    <section
      className={`faq section ${visible ? "section--visible" : ""}`}
      ref={ref}
    >
      <div className="section__label">FAQ</div>
      <h2 className="section__title">
        Questions About<br />
        <span>Our Services</span>
      </h2>

      <div className="serv-faq__list">
        {FAQS.map((item, i) => (
          <div
            key={i}
            className={`serv-faq__item ${open === i ? "serv-faq__item--open" : ""}`}
            style={{ "--i": i }}
          >
            <button
              className="serv-faq__q"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span>{item.q}</span>
              <span className="serv-faq__icon">+</span>
            </button>
            <div className="serv-faq__a">
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   CTA BANNER  (home.css ke CTABanner se same)
═══════════════════════════════════════════════ */
function CTABanner() {
  const [ref, visible] = useReveal();

  return (
    <section
      className={`serv-cta-banner ${visible ? "section--visible" : ""}`}
      ref={ref}
    >
      <div className="serv-cta-banner__orb" aria-hidden="true" />
      <div className="serv-cta-banner__content">
        <h2>
          Ready to <span>Grow</span> Your Business?
        </h2>
        <p>
          Book a free consultation today — no commitment, just a results-focused conversation.
        </p>
        <div className="serv-cta-banner__actions">
          <Link to="/contact" className="btn btn--primary">
            <span>Book Free Consultation</span>
            <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          </Link>
          <Link to="tel:917973611226" className="btn btn--ghost btn--ghost-light">
            <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call Us
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   PAGE EXPORT
═══════════════════════════════════════════════ */
export default function ServicePage() {
  return (
    <>
      <SEOptimization
        title="Digital Marketing Company in India | SEO, Google Ads & Web Development"
        description="Looking for the best digital marketing services in India? Arbaj Technology offers SEO, Google Ads, social media marketing & web development to increase traffic, leads and sales."
        keywords="digital marketing services India, SEO services India, Google Ads agency India, social media marketing services, website development company India, PPC services India"
        url="https://arbajtechnologypvtltd.com/services"
        image="https://arbajtechnologypvtltd.com/preview.jpg"
        faqs={FAQS}
      />
      <main>
        <ServiceHero />
        {/* <Ticker /> */}
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