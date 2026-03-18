import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import '../styles/WebDevelopement.css'
import {STATS, WEB_SERVICES, PROCESS, TECH_STACK, WHY_US, FAQS} from '../components/Data/WebData'
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
  return (
    <section className="hero wd-hero">
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
          Web Development — Arbaj Technology
        </div>

        <h1 className="hero__title">
          Websites That Work<br />
          <span className="hero__title-highlight">As Hard As You Do</span>
        </h1>

        <p className="hero__desc">
          From sleek landing pages to powerful e-commerce stores and custom web apps —
          we build fast, beautiful, and conversion-focused websites that grow your business.
        </p>

        <div className="hero__actions">
          <Link to="/contact" className="btn btn--primary">
            Get a Free Quote
            <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          </Link>
          <a href="#why-us" className="btn btn--ghost">Why Choose Us</a>
        </div>

        <div className="hero__stats">
          {STATS.map((s) => (
            <div className="hero__stat" key={s.label}>
              <strong>{s.number}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating code card */}
      <div className="hero__card-wrap" aria-hidden="true">
        <div className="hero__card wd-code-card">
          <div className="hero__card-header">
            <span className="hero__card-dot hero__card-dot--red" />
            <span className="hero__card-dot hero__card-dot--yellow" />
            <span className="hero__card-dot hero__card-dot--green" />
            <span className="hero__card-title">index.jsx</span>
          </div>
          <div className="wd-code">
            <div className="wd-code__line"><span className="wd-kw">const</span> <span className="wd-fn">Website</span> <span className="wd-op">=</span> <span className="wd-paren">()</span> <span className="wd-op">=&gt;</span> <span className="wd-paren">{"{"}</span></div>
            <div className="wd-code__line wd-indent"><span className="wd-kw">return</span> <span className="wd-paren">(</span></div>
            <div className="wd-code__line wd-indent2"><span className="wd-tag">&lt;div</span> <span className="wd-attr">className</span><span className="wd-op">=</span><span className="wd-str">"hero"</span><span className="wd-tag">&gt;</span></div>
            <div className="wd-code__line wd-indent3"><span className="wd-tag">&lt;h1&gt;</span><span className="wd-str">Your Brand</span><span className="wd-tag">&lt;/h1&gt;</span></div>
            <div className="wd-code__line wd-indent3"><span className="wd-tag">&lt;p&gt;</span><span className="wd-str">Grows Here</span><span className="wd-tag">&lt;/p&gt;</span></div>
            <div className="wd-code__line wd-indent2"><span className="wd-tag">&lt;/div&gt;</span></div>
            <div className="wd-code__line wd-indent"><span className="wd-paren">)</span></div>
            <div className="wd-code__line"><span className="wd-paren">{"}"}</span></div>
          </div>
          <div className="wd-metrics">
            <div className="wd-metric">
              <span className="wd-metric__label">Performance</span>
              <span className="wd-metric__val wd-metric__val--green">98</span>
            </div>
            <div className="wd-metric">
              <span className="wd-metric__label">SEO Score</span>
              <span className="wd-metric__val wd-metric__val--blue">100</span>
            </div>
            <div className="wd-metric">
              <span className="wd-metric__label">Load Time</span>
              <span className="wd-metric__val wd-metric__val--gold">1.2s</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ticker() {
  const items = ["React.js", "WordPress", "Shopify", "Node.js", "WooCommerce", "Figma", "Mobile-First", "Fast Loading", "SEO-Ready", "Secure"];
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


function WebServices() {
  const [ref, visible] = useReveal();
  return (
    <section
      className={`services section ${visible ? "section--visible" : ""}`}
      ref={ref}
      style={{ background: "var(--bg)" }}
    >
      <div className="section__label">— What We Build</div>
      <h2 className="section__title">
        Web Solutions for<br />
        <span>Every Business Need</span>
      </h2>
      <p className="section__sub">
        From simple brochure websites to complex web applications — we build it all with precision.
      </p>

      <div className="services__grid wd-services-grid">
        {WEB_SERVICES.map((s, i) => (
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
    <section
      className={`section ${visible ? "section--visible" : ""}`}
      ref={ref}
      style={{ padding: "var(--section-pad)", background: "var(--bg-2)" }}
    >
      <div className="section__label">— How We Work</div>
      <h2 className="section__title">
        Our <span>4-Step Process</span>
      </h2>
      <p className="section__sub">
        A proven process that delivers every time — on time, on budget, on brand.
      </p>

      <div className="wd-process">
        {PROCESS.map((step, i) => (
          <div className="wd-process__item" key={i} style={{ "--color": step.color, "--i": i }}>
            <div className="wd-process__connector" aria-hidden="true" />
            <div className="wd-process__node">
              <span className="wd-process__step">{step.step}</span>
            </div>
            <div className="wd-process__card">
              <h3 className="wd-process__title">{step.title}</h3>
              <p className="wd-process__desc">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


function TechStack() {
  const [ref, visible] = useReveal();
  return (
    <section
      className={`section ${visible ? "section--visible" : ""}`}
      ref={ref}
      style={{ padding: "var(--section-pad)", background: "var(--bg)" }}
    >
      <div className="section__label">— Our Tech Stack</div>
      <h2 className="section__title">
        Tools We <span>Build With</span>
      </h2>
      <p className="section__sub">
        Industry-leading technologies ensuring your website is fast, secure, and future-proof.
      </p>
      <div className="wd-stack">
        {TECH_STACK.map((s, i) => (
          <div className="wd-stack__badge" key={s.label} style={{ "--i": i }}>
            <span className="wd-stack__dot" style={{ background: s.dot, boxShadow: `0 0 8px ${s.dot}80` }} />
            {s.label}
          </div>
        ))}
      </div>
    </section>
  );
}


function WhyChooseUs() {
  const [ref, visible] = useReveal();
  return (
    <section
      className={`section wd-why ${visible ? "section--visible" : ""}`}
      ref={ref}
      id="why-us"
      style={{ padding: "var(--section-pad)", background: "var(--bg-2)" }}
    >
      <div className="section__label">— Why Arbaj Technology</div>
      <h2 className="section__title">
        Built Different.<br />
        <span>Delivered Better.</span>
      </h2>
      <p className="section__sub">
        We don't just build websites — we build digital assets that work for your business around the clock.
      </p>

      <div className="wd-why__grid">
        {WHY_US.map((item, i) => (
          <div
            className="wd-why__card"
            key={i}
            style={{ "--accent": item.accent, "--i": i }}
          >
            <div className="wd-why__icon-wrap">
              <span className="wd-why__icon" style={{ color: item.accent }}>
                {item.icon}
              </span>
            </div>
            <div className="wd-why__body">
              <h3 className="wd-why__title">{item.title}</h3>
              <p className="wd-why__desc">{item.desc}</p>
            </div>
            <div className="wd-why__bar" style={{ background: item.accent }} />
          </div>
        ))}
      </div>

      {/* bottom CTA strip */}
      <div className="wd-why__cta-strip">
        <p className="wd-why__cta-text">
          Ready to work with a team that actually cares?
        </p>
        <Link to="/contact" className="btn btn--primary">
          Start Your Project
          <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
            <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
          </svg>
        </Link>
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
        Web Dev Questions<br />
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
    <section
      className={`cta-banner ${visible ? "section--visible" : ""}`}
      ref={ref}
    >
      <div className="cta-banner__orb" aria-hidden="true" />
      <div className="cta-banner__content">
        <h2>Ready to Build Your Website?</h2>
        <p>Get a free consultation and project estimate — delivered within 24 hours.</p>
        <div className="cta-banner__actions">
          <Link to="/contact" className="btn btn--primary">
            Get Free Consultation
          </Link>
          <Link to="tel:+917973611226" className="btn btn--ghost btn--ghost-light">
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

export default function WebDevelopmentPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
   <>
      <main>

        <SEOptimization
          title="Web Development Company in India | Custom Websites & E-commerce | Arbaj Technology"
          description="Arbaj Technology offers professional web development services including custom websites, e-commerce, React apps, and SEO-friendly fast-loading websites to grow your business online."
          keywords="web development company India, custom website development, ecommerce website development, React web development, SEO friendly websites, Arbaj Technology"
          url="https://arbajtechnologypvtltd.com/web"
          image="https://arbajtechnologypvtltd.com/og-web.jpg"
        />


        <Hero />
        <Ticker />
        <WebServices />
        <Process />
        <TechStack />
        <WhyChooseUs />
        <FAQ />
        <CTABanner />
      </main>
   </>
  );
}