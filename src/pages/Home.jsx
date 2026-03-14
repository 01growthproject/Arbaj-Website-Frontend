import { useState, useEffect, useRef } from "react";
import '../styles/home.css';
import { SERVICES, STATS, FAQS } from '../components/Data/HomeData';
// import {Helmet} from 'react-helmet-async'
import SEOptimization from "../components/SEOptimization";
/* ═══════════════════════════════════════════════
   PARTICLE CANVAS — floats in Hero background
═══════════════════════════════════════════════ */
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const COLORS = ["#048C8C", "#6DC497", "#17ABBC"];
    let W, H, particles, animId;

    function resize() {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }

    function rand(min, max) { return Math.random() * (max - min) + min; }

    function mkParticle() {
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const shape = Math.random() > 0.55 ? "circle" : "diamond";
      return {
        x: rand(0, W),
        y: rand(0, H),
        r: rand(1.5, 4.2),
        dx: rand(-0.22, 0.22),
        dy: rand(-0.45, -0.06),
        alpha: rand(0.06, 0.40),
        dAlpha: rand(0.0005, 0.0018),
        fade: Math.random() > 0.5,
        color,
        shape,
        angle: rand(0, Math.PI * 2),
        dAngle: rand(-0.007, 0.007),
      };
    }

    function drawDiamond(x, y, r) {
      ctx.beginPath();
      ctx.moveTo(x, y - r);
      ctx.lineTo(x + r, y);
      ctx.lineTo(x, y + r);
      ctx.lineTo(x - r, y);
      ctx.closePath();
    }

    function init() {
      resize();
      particles = Array.from({ length: 60 }, mkParticle);
    }

    function tick() {
      ctx.clearRect(0, 0, W, H);

      /* connecting lines */
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 100) {
            ctx.save();
            ctx.globalAlpha = (1 - d / 100) * 0.07;
            ctx.strokeStyle = "#048C8C";
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      /* particles */
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        p.angle += p.dAngle;

        /* breathe */
        if (p.fade) { p.alpha -= p.dAlpha; if (p.alpha <= 0.04) p.fade = false; }
        else { p.alpha += p.dAlpha; if (p.alpha >= 0.42) p.fade = true; }

        /* wrap */
        if (p.y < -10) p.y = H + 10;
        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);

        if (p.shape === "circle") {
          /* core */
          ctx.beginPath();
          ctx.arc(0, 0, p.r, 0, Math.PI * 2);
          ctx.fill();
          /* soft glow halo */
          ctx.beginPath();
          ctx.arc(0, 0, p.r * 3, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha * 0.12;
          ctx.fill();
        } else {
          drawDiamond(0, 0, p.r * 1.3);
          ctx.fill();
        }
        ctx.restore();
      });

      animId = requestAnimationFrame(tick);
    }

    init();
    tick();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    /* pause when tab hidden */
    const handleVis = () => {
      if (document.hidden) cancelAnimationFrame(animId);
      else { animId = requestAnimationFrame(tick); }
    };
    document.addEventListener("visibilitychange", handleVis);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      document.removeEventListener("visibilitychange", handleVis);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero__particles" aria-hidden="true" />;
}

/* ═══════════════════════════════════════════════
   SCROLL REVEAL HOOK
═══════════════════════════════════════════════ */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

/* ═══════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="hero">
      {/* particle canvas — sits behind everything */}
      <ParticleCanvas />

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
          #1 Digital Marketing Company — Zirakpur, Punjab
        </div>

        <h1 className="hero__title">
          Dominate Online &amp;<br />
          <span className="hero__title-highlight">Grow Your Business</span><br />
          With Confidence
        </h1>

        <p className="hero__desc">
          Searching for the best digital marketing partner? We deliver powerful, result-oriented
          solutions — SEO, Google Ads, Social Media & Web Development — that help your brand
          shine above the competition.
        </p>

        <div className="hero__actions">
          <a href="/contact" className="btn btn--primary">
            Get Free Consultation
            <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          </a>
          <a href="/services" className="btn btn--ghost">
            Explore Our Services
          </a>
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

      {/* Floating Dashboard Card */}
      <div className="hero__card-wrap" aria-hidden="true">
        <div className="hero__card">
          <div className="hero__card-header">
            <span className="hero__card-dot hero__card-dot--red" />
            <span className="hero__card-dot hero__card-dot--yellow" />
            <span className="hero__card-dot hero__card-dot--green" />
            <span className="hero__card-title">Growth Dashboard</span>
          </div>
          <div className="hero__chart">
            {[40, 65, 52, 80, 68, 90, 75, 95].map((h, i) => (
              <div key={i} className="hero__bar-wrap">
                <div
                  className="hero__bar"
                  style={{ "--bar-h": `${h}%`, "--delay": `${i * 0.08}s` }}
                />
              </div>
            ))}
          </div>
          <div className="hero__card-metric">
            <span>Organic Traffic</span>
            <strong className="hero__card-up">↑ 284%</strong>
          </div>
          <div className="hero__card-tags">
            <span>SEO</span><span>Ads</span><span>SMM</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   TICKER
═══════════════════════════════════════════════ */
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

/* ═══════════════════════════════════════════════
   SERVICES
═══════════════════════════════════════════════ */
function Services() {
  const [ref, visible] = useReveal();
  return (
    <section
      className={`services section ${visible ? "section--visible" : ""}`}
      ref={ref}
      id="services"
    >
      <div className="section__label">— Our Services</div>
      <h2 className="section__title">
        Everything You Need<br />
        <span>To Win Online</span>
      </h2>
      <p className="section__sub">
        Complete digital marketing solutions under one roof — from strategy and design to execution and growth.
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
            <a href="./services" className="service-card__link">
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

/* ═══════════════════════════════════════════════
   ABOUT
═══════════════════════════════════════════════ */
function About() {
  const [ref, visible] = useReveal();
  return (
    <section
      className={`about section ${visible ? "section--visible" : ""}`}
      ref={ref}
      id="about"
    >
      <div className="about__inner">
        <div className="about__visual">
          <div className="about__circle about__circle--1" />
          <div className="about__circle about__circle--2" />
          <div className="about__badge-stack">
            <div className="about__badge-card about__badge-card--mission">
              <span>🎯</span>
              <div>
                <strong>Our Mission</strong>
                <p>To empower businesses with innovative digital solutions that fuel growth, visibility, and lasting success.</p>
              </div>
            </div>
            <div className="about__badge-card about__badge-card--vision">
              <span>🌟</span>
              <div>
                <strong>Our Vision</strong>
                <p>To become a globally recognized digital marketing company known for creativity, results, and trustworthiness.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about__text">
          <div className="section__label">— About Arbaj Technology</div>
          <h2 className="section__title">
            Your Trusted<br />
            <span>Digital Growth Partner</span>
          </h2>
          <p className="about__para">
            We are a passionate team dedicated to helping businesses grow online. Our experts use
            innovative strategies, progressive tools, and creative approaches to build a solid
            online foundation for your brand.
          </p>
          <p className="about__para">
            Whether you're a startup or an established entrepreneur, we develop customized strategies
            that meet your specific objectives. With a strong emphasis on quality and performance,
            we are fully committed to your success.
          </p>

          <ul className="about__features">
            {[
              "500+ Happy Clients Across India",
              "5+ Years of Industry Experience",
              "Certified Digital Marketing Experts",
              "Transparent Monthly Reporting",
              "Dedicated Account Manager",
            ].map((f) => (
              <li key={f}>
                <span className="about__check">✓</span>
                {f}
              </li>
            ))}
          </ul>

          <a href="/about" className="btn btn--primary">
            Learn More About Us
            <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          </a>
        </div>
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
    <section
      className={`faq section ${visible ? "section--visible" : ""}`}
      ref={ref}
      id="faq"
    >
      <div className="section__label">— FAQ</div>
      <h2 className="section__title">
        Questions You<br />
        <span>Probably Have</span>
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

/* ═══════════════════════════════════════════════
   CTA BANNER
═══════════════════════════════════════════════ */
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

/* ═══════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
      <main>

        <SEOptimization
          title="Best Digital Marketing Company | Arbaj Technology"
          description="Arbaj Technology is a trusted digital marketing company helping businesses grow online with real results. Call us today at +91 79 7361 1226."
        />





        <Hero />
        <Ticker />
        <Services />
        <About />
        <FAQ />
        <CTABanner />
      </main>
    </>
  );
}