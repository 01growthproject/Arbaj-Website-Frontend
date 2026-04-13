import { useState, useEffect, useRef } from "react";
import '../styles/home.css';
import { SERVICES, STATS, FAQS } from '../components/Data/HomeData';
// import {Helmet} from 'react-helmet-async'
import SEOptimization from "../components/SEOptimization";
import { Link } from "react-router-dom";
/* ═══════════════════════════════════════════════
   PARTICLE CANVAS — floats in Hero background
═══════════════════════════════════════════════ */
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;
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
      particles = Array.from({ length: 30 }, mkParticle);
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
          #1 Digital Marketing Company — In India
        </div>

        <h1 className="hero__title">
          Best Digital Marketing Company<br />
          <span className="hero__title-highlight">in India   </span>
        </h1>

        <p className="hero__desc">
         As one of the leading digital marketing businesses in India, Arbaj Technology gives a wealth of enjoy in offering boom answers for corporations. Being a renowned digital advertising business enterprise, the primary priority lies in creating a solid on-line presence for the client, in addition to making sure that they get more visible and grow consistently.


        </p>

        <div className="hero__actions">
          {/* <Link to="/contact" className="btn btn--primary">
            Get Free Consultation
            <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          </Link> */}
          <Link to="/services" className="btn btn--ghost">
            Explore Digital Marketing Services
          </Link>
          <Link to="/blog" className="btn btn--ghost">
            Read Our Blog
          </Link>
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
      <div className="section__label_">—
        Top Notch Digital Marketing Company</div>
      <h2 className="section__title_">
        Our<br />
        <span>Services</span>
      </h2>
      <p className="section__sub">
        Our services include SEO services in India, Google Ads campaigns, social media
        marketing, and website development. We focus on data-driven strategies that
        deliver measurable results and long-term business growth.
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
            <Link to={s.link} className="service-card__link">
              Learn More About {s.title}
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
                <p>
                  Empower your business with progressive answers so one can propel your brand to fulfillment and growth within the virtual world. Our challenge is to help agencies in creating a strong presence on-line, gaining visibility, and attaining out to their target audience through revolutionary digital marketing strategies.
                </p>
              </div>
            </div>
            <div className="about__badge-card about__badge-card--vision">
              <span>🌟</span>
              <div>
                <strong>Our Vision</strong>
                <p>Becoming a pacesetter in digital advertising and marketing services that gives revolutionary, straightforward, and efficient solutions worldwide. We are dedicated to supplying modern techniques to help special corporations unleash their maximum capacity on line.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about__text">
          <div className="section__label_">— About Arbaj Technology</div>
          <h2 className="section__title">

            Your Reliable <br />
            <span>Digital Growth Partner</span>
          </h2>
          <p className="about__para">
            Our team of experienced virtual entrepreneurs is prepared to assist you in developing on line with modern answers and strategies designed to create a successful destiny.
          </p>
          <p className="about__para">
            Every challenge may be tailored to in shape the objectives of our customers irrespective of whether the business enterprise is new to the enterprise or an already set up brand. We provide most effective top notch virtual advertising and marketing answers and work tough to deliver measurable results.
          </p>

          <ul className="about__features">
            {[
              "Over 10 Successful Projects Completed",
              "5+ Years of Industry Experience",
              "Digital Marketing Certification",
              "Transparent Reports & Results",
              "Personal Support & Account Management",
            ].map((f) => (
              <li key={f}>
                <span className="about__check">✓</span>
                {f}
              </li>
            ))}
          </ul>

          <Link to="/about" className="btn btn--primary">
            Learn More About Us
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
          <Link to="/contact" className="btn btn--primary">
            Book Free Consultation
          </Link>
          <Link  to="tel:917973611226" className="btn btn--ghost btn--ghost-light">
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
   PAGE
═══════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
        <SEOptimization
        title="Best Digital Marketing Company in India | Arbaj Technology"
        description="Arbaj Technology is a leading digital marketing company in India offering SEO services, Google Ads management, social media marketing, and web development to grow your business online and increase ROI."

        keywords="digital marketing company, Digital marketing company in Haryana, SEO services India,SEO company in India,  web development company, Google Ads expert, social media marketing India, Arbaj Technology, Google Ads agency in Zirakpur"

          url="https://arbajtechnologypvtltd.com/"

          image="https://arbajtechnologypvtltd.com/preview.jpg"
        faqs={FAQS}  
        />
      <main>






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