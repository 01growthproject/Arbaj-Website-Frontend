import { useState, useEffect, useRef } from "react";
import '../styles/home.css';
import { SERVICES, STATS, FAQS, CLIENTS } from '../components/Data/HomeData';
import SEOptimization from "../components/SEOptimization";
import { Link } from "react-router-dom";
import GoogleReviews from "../components/Googlereviews";
import '../styles/Googlereviews.css';


const FLIP_WORDS = ["SEO", "Google Ads", "Web Development", "Meta Ads", "Video Editing", "Graphic Designing"];

function FlipWord() {
  const innerRef = useRef(null);
  const idxRef = useRef(0);

  useEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;

    const id = setInterval(() => {
      const next = FLIP_WORDS[(idxRef.current + 1) % FLIP_WORDS.length];

      const nextEl = document.createElement('span');
      nextEl.className = 'flipword__word';
      nextEl.textContent = next;
      inner.appendChild(nextEl);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          inner.style.transform = 'translateY(-1.2em)';

          setTimeout(() => {
            inner.removeChild(inner.firstChild);
            inner.style.transition = 'none';
            inner.style.transform = 'translateY(0)';

            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                inner.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
              });
            });

            idxRef.current = (idxRef.current + 1) % FLIP_WORDS.length;
          }, 620);
        });
      });
    }, 2500);

    return () => clearInterval(id);
  }, []);

  return (
    <span className="flipword">
      <span className="flipword__inner" ref={innerRef}>
        <span className="flipword__word">{FLIP_WORDS[0]}</span>
      </span>
    </span>
  );
}

/* ═══════════════════════════════════════════════
   SCROLL REVEAL HOOK
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
    <>
      <section className="banner">
        {/* signature growth-line animation, drawn on load */}
        <div className="banner__chartline" aria-hidden="true">
          <svg viewBox="0 0 1200 400" preserveAspectRatio="none">
            <path
              className="chartline__fill"
              d="M0,260 C150,250 250,210 380,220 C520,230 600,150 760,140 C900,130 1000,90 1200,80 L1200,400 L0,400 Z"
              fill="#7FE6C4"
              opacity="0.12"
            />
            <path
              className="chartline__stroke"
              d="M0,260 C150,250 250,210 380,220 C520,230 600,150 760,140 C900,130 1000,90 1200,80"
            />
            <circle className="chartline__dot" cx="1200" cy="80" r="9" fill="#FF6B5B" />
          </svg>
        </div>

        <div className="banner__wrapper">
          <div className="banner__copy">
            <div className="banner__tag">
              #1 Digital Marketing Company — In India
            </div>

            {/* <h1 className="banner__heading">
              <span className="text-row"><span>Best Digital Marketing</span></span>
              <span className="text-row">
                <span>
                  Company <span className="highlight">
                    in India
                    <svg viewBox="0 0 200 20" preserveAspectRatio="none">
                      <path d="M5,12 C50,4 150,4 195,12" />
                    </svg>
                  </span>
                </span>
              </span>
            </h1> */}


            <h1 className="banner__heading">
              <span className="text-row"><span>Best Digital Marketing</span></span>
              <span className="text-row">
                <span>Company for <FlipWord /></span>
              </span>
            </h1>


            <p className="banner__para">
              As one of the leading digital marketing businesses in India, Arbaj Technology
              brings a wealth of experience in delivering growth solutions for companies.
              We focus on building a strong online presence, increasing visibility, and
              driving consistent, measurable growth.
            </p>

            <div className="banner__btns">
              <Link to="/services" className="cta cta--filled">
                <span>Explore Our Services</span>
                <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
                  <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                </svg>
              </Link>
              <Link to="/blog" className="cta cta--outline">
                Read Our Blog
              </Link>
            </div>

            <div className="banner__metrics">
              {STATS.map((s) => (
                <div className="banner__metric" key={s.label}>
                  <strong>{s.number}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Dashboard Card */}
          <div className="dashboard-card" aria-hidden="true">
            <div className="dashboard-card__header">
              <div>
                <div className="dashboard-card__title">Organic Traffic</div>
                <div className="dashboard-card__value">↑ 284%</div>
              </div>
              <div className="dashboard-card__pill">
                <svg viewBox="0 0 16 16" fill="currentColor" width="14" height="14">
                  <path d="M8 1l1.5 1.5L5 7h6v2H5l4.5 4.5L8 15 1 8z" transform="rotate(90 8 8)" />
                </svg>
                Growing
              </div>
            </div>

            <div className="dashboard-card__bars">
              {[40, 65, 52, 80, 68, 90, 75, 95].map((h, i) => (
                <div
                  key={i}
                  className="dashboard-card__bar"
                  style={{ height: `${h}%`, "--d": `${0.5 + i * 0.08}s` }}
                />
              ))}
            </div>

            <div className="dashboard-card__labels">
              <span>SEO</span>
              <span>Google Ads</span>
              <span>Social Media</span>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ FIX: Ticker banner ke BAHAR hai ab — overflow clip nahi hoga */}
      <Ticker />
    </>
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
    <div className="marquee">
      <div className="marquee__belt">
        {all.map((item, i) => (
          <span key={i} className="marquee__word">
            {item} <span className="marquee__divider">✦</span>
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
      className={`offerings page-section fade-up ${visible ? "fade-up--show" : ""}`}
      ref={ref}
      id="services"
    >
      <div className="offerings__top">
        <div>
          <div className="label-tag">What We Do</div>
          <h2 className="block-title">
            Our <em>Services</em>
          </h2>
        </div>
        <p className="block-subtitle">
          From SEO and Google Ads to social media and web development —
          we build data-driven strategies that deliver measurable results
          and long-term business growth.
        </p>
      </div>

      <div className="offerings__grid">
        {SERVICES.map((s, i) => (
          <div
            className="offering-tile"
            key={s.id}
            style={{ "--accent": s.accent, "--i": i }}
          >
            <div className="offering-tile__num">{String(i + 1).padStart(2, "0")}</div>
            <div className="offering-tile__icon">{s.icon}</div>
            <h3 className="offering-tile__name">{s.title}</h3>
            <p className="offering-tile__info">{s.desc}</p>
            <Link to={s.link} className="offering-tile__more">
              Learn More
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
   CLIENTS
═══════════════════════════════════════════════ */
function Clients() {
  const [ref, visible] = useReveal();
  // 4x duplicate taaki chhoti list mein bhi loop seamless dikhe, kabhi khali gap na aaye
  const allClients = [...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <section
      className={`clients page-section fade-up ${visible ? "fade-up--show" : ""}`}
      ref={ref}
      id="clients"
    >
      <div className="clients__top">
        <div className="label-tag">Our Clients</div>
        <h2 className="block-title">
          Brands That <em>Trust Us</em>
        </h2>
      </div>

      <div className="clients__slider">
        <div className="clients__track">
          {allClients.map((c, i) => (
            <div className="client-tile" key={`${c.id}-${i}`}>
              <img src={c.logo} alt={c.name} loading="lazy" />
            </div>
          ))}
        </div>
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
      className={`story page-section fade-up ${visible ? "fade-up--show" : ""}`}
      ref={ref}
      id="about"
    >
      <div className="story__layout">
        <div className="story__details">
          <div className="label-tag">About Arbaj Technology</div>
          <h2 className="block-title">
            Your Reliable <em>Digital Growth Partner</em>
          </h2>
          <p className="story__body">
            Our team of experienced digital strategists helps you grow online
            with modern solutions designed to create a successful future.
          </p>
          <p className="story__body">
            Every project is tailored to fit our clients' goals — whether you're
            a new business or an established brand. We deliver only top quality
            digital marketing solutions and work hard for measurable results.
          </p>

          <ul className="story__perks">
            {[
              "10+ Successful Projects Completed",
              "5+ Years of Industry Experience",
              "Digital Marketing Certification",
              "Transparent Reports & Results",
              "Personal Support & Account Management",
            ].map((f, i) => (
              <li key={f} style={{ "--i": i }}>
                <span className="story__tick">✓</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="story__graphic">
          <div className="ring-widget">
            <svg viewBox="0 0 220 220">
              <circle className="ring-widget__track" cx="110" cy="110" r="100" />
              <circle className="ring-widget__arc" cx="110" cy="110" r="100" />
            </svg>
            <div className="ring-widget__text">
              <strong>98%</strong>
              <span>Client Satisfaction</span>
            </div>
          </div>

          <div className="info-block">
            <span className="info-block__emoji">🎯</span>
            <div>
              <strong>Our Mission</strong>
              <p>
                Empower your business with progressive solutions that propel
                your brand toward success and growth in the digital world.
              </p>
            </div>
          </div>

          <div className="info-block">
            <span className="info-block__emoji">🌟</span>
            <div>
              <strong>Our Vision</strong>
              <p>
                To be a leader in digital marketing services, delivering
                innovative, transparent, and efficient solutions worldwide.
              </p>
            </div>
          </div>
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
      className={`questions page-section fade-up ${visible ? "fade-up--show" : ""}`}
      ref={ref}
      id="faq"
    >
      <div className="questions__top">
        <div className="label-tag">FAQ</div>
        <h2 className="block-title">
          Questions You <em>Probably Have</em>
        </h2>
      </div>
      <div className="questions__list">
        {FAQS.map((item, i) => (
          <div
            key={i}
            className={`accordion-row ${open === i ? "accordion-row--open" : ""}`}
            style={{ "--i": i }}
          >
            <button
              className="accordion-row__trigger"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span>{item.q}</span>
              <span className="accordion-row__symbol">+</span>
            </button>
            <div className="accordion-row__body">
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
      className={`promo-strip fade-up ${visible ? "fade-up--show" : ""}`}
      ref={ref}
    >
      <div className="promo-strip__glow" aria-hidden="true" />
      <div className="promo-strip__inner">
        <h2>Ready to <em>Grow</em> Your Business?</h2>
        <p>Book a free consultation today — no commitment, just a results-focused conversation.</p>
        <div className="promo-strip__btns">
          <Link to="/contact" className="cta cta--filled">
            <span>Book Free Consultation</span>
            <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          </Link>
          <Link to="tel:917973611226" className="cta cta--outline">
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
        keywords="digital marketing company, Digital marketing company in Haryana, SEO services India, SEO company in India, web development company, Google Ads expert, social media marketing India, Arbaj Technology, Google Ads agency in Zirakpur"
        url="https://arbajtechnologypvtltd.com/"
        image="https://arbajtechnologypvtltd.com/preview.jpg"
        faqs={FAQS}
      />
      <main>
        <Hero />
        <Services />
        <Clients />
        <About />
        <GoogleReviews />
        <FAQ />
        <CTABanner />
      </main>
    </>
  );
}