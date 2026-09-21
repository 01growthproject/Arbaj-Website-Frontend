import { useState, useEffect, useRef } from "react";
import '../styles/home.css';

import { SERVICES, STATS, FAQS, HERO_SLIDES, SERVICE_DIRECTORY_EXTRAS, ROMAN } from '../components/Data/HomeData';
import SEOptimization from "../components/SEOptimization";
import { Link } from "react-router-dom";
import GoogleReviews from "../components/Googlereviews.jsx";
import '../styles/Googlereviews.css';
import FloatingPhotos from "../components/FloatingPhotos.jsx";





const SITE_URL = "https://arbajtechnologypvtltd.com";

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#business`,
  name: "Arbaj Technology Pvt. Ltd.",
  url: SITE_URL,
  logo: `${SITE_URL}/arbaj-logo.png`,
  image: `${SITE_URL}/lg.webp`,
  description:
    "Arbaj Technology provides SEO, Google Ads, social media marketing, graphic design, video editing and website development services.",
  telephone: "+91-7973611226",
  email: "arbajtechnologypvtltd@gmail.com",
  sameAs: [
    "https://www.facebook.com/p/Arbaj-Technology-PvtLtd-61579390061534/",
    "https://www.linkedin.com/company/143034324/",
    "https://www.instagram.com/arbaj_technology/",
    "https://www.youtube.com/@arbajtechnology",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "2nd Floor, SCO 40, Royale Estate Complex, Near Oxford Street",
    addressLocality: "Zirakpur",
    addressRegion: "Punjab",
    postalCode: "140603",
    addressCountry: "IN",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Zirakpur",
    },
    {
      "@type": "City",
      name: "Chandigarh",
    },
    {
      "@type": "City",
      name: "Mohali",
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-7973611226",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi", "Punjabi"],
  },
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Arbaj Technology Pvt. Ltd.",
  publisher: {
    "@id": `${SITE_URL}/#business`,
  },
  inLanguage: "en-IN",
};



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

function Hero() {
  const [current, setCurrent] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);
  const total = HERO_SLIDES.length;
  const currentRef = useRef(current);
  const transitionRef = useRef({ leave: null, auto: null });

  useEffect(() => {
    currentRef.current = current;
  }, [current]);

  const changeSlide = (nextIndex) => {
    if (nextIndex === currentRef.current) return;

    setIsLeaving(true);
    clearTimeout(transitionRef.current.leave);

    transitionRef.current.leave = window.setTimeout(() => {
      setCurrent(nextIndex);
      setIsLeaving(false);
    }, 320);
  };

  useEffect(() => {
    transitionRef.current.auto = window.setInterval(() => {
      changeSlide((currentRef.current + 1) % total);
    }, 5000);

    return () => {
      clearInterval(transitionRef.current.auto);
      clearTimeout(transitionRef.current.leave);
    };
  }, [total]);

  const slide = HERO_SLIDES[current];

  return (
    <>
      <section className="banner">

        <video
          className="banner__bg-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero/AiRobot.jpeg"
        >
          <source src="/hero/backgroundVideo.mp4" type="video/mp4" />
        </video>
        <div className="banner__video-overlay" aria-hidden="true" />

        <FloatingPhotos />
        <div className="banner__corner-glow" aria-hidden="true" />

        <div className="banner__sidebar">
          <span className="banner__sidebar-email">arbajtechnologypvtltd@gmail.com</span>
          <div className="banner__sidebar-line" />
          <div className="banner__sidebar-icons">
            <a href="https://www.facebook.com/p/Arbaj-Technology-PvtLtd-61579390061534/" aria-label="Facebook"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0022 12z" /></svg></a>
            <a href="https://www.instagram.com/arbaj_technology/" aria-label="Instagram"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2c2.7 0 3.1 0 4.1.1 1 .1 1.7.2 2.3.5.6.2 1.1.6 1.6 1.1.5.5.8.9 1.1 1.6.2.6.4 1.3.5 2.3.1 1 .1 1.4.1 4.1s0 3.1-.1 4.1c-.1 1-.2 1.7-.5 2.3-.2.6-.6 1.1-1.1 1.6-.5.5-.9.8-1.6 1.1-.6.2-1.3.4-2.3.5-1 .1-1.4.1-4.1.1s-3.1 0-4.1-.1c-1-.1-1.7-.2-2.3-.5-.6-.2-1.1-.6-1.6-1.1-.5-.5-.8-.9-1.1-1.6-.2-.6-.4-1.3-.5-2.3C2 15.1 2 14.7 2 12s0-3.1.1-4.1c.1-1 .2-1.7.5-2.3.2-.6.6-1.1 1.1-1.6.5-.5.9-.8 1.6-1.1.6-.2 1.3-.4 2.3-.5C8.9 2 9.3 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.2-8.4a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z" /></svg></a>
            <a href="https://www.linkedin.com/company/143034324/" aria-label="LinkedIn"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1s2.48 1.1 2.48 2.5zM.5 8h4V23h-4V8zm7 0h3.8v2.05h.05c.53-1 1.83-2.05 3.76-2.05C19 8 20.5 10 20.5 13.3V23h-4v-8.6c0-2.05-.04-4.7-2.86-4.7-2.86 0-3.3 2.24-3.3 4.55V23h-4V8z" /></svg></a>
          </div>
        </div>

        <div className="banner__wrapper">
          <div className={`banner__copy ${isLeaving ? 'banner__copy--exit' : ''}`} key={current}>
            <div className="banner__tag">{slide.tag}</div>

            <h1 className="banner__heading">
              <span className="text-row"><span>{slide.titleLine1}</span></span>
              <span className="text-row"><span>{slide.titleLine2}</span></span>
              {slide.titleLine3 && (
                <span className="text-row"><span className="highlight-solid">{slide.titleLine3}</span></span>
              )}
            </h1>

            <div className="banner__desc-row">
              {/* <svg className="banner__arrow-icon" viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 18L18 6M18 6H9M18 6v9" strokeLinecap="round" strokeLinejoin="round" />
              </svg> */}
              <p className="banner__para">{slide.description}</p>
            </div>

            <div className="banner__btns">
              <Link to="/services" className="cta cta--filled">
                <span>Explore Our Services</span>
                <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
                  <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                </svg>
              </Link>
              <a
                href="tel:+917973611226"
                className="cta cta--outline"
                aria-label="Call Arbaj Technology at +91 79 7361 1226"
              >
                Call: +91 79 7361 1226
              </a>
            </div>
          </div>

          <div
            className={`hero-slide-image ${isLeaving ? 'hero-slide-image--exit' : ''}`}
            key={`img-${current}`}
          >
            <img src={slide.image} alt={slide.titleLine1} />
          </div>
        </div>

        <div className="hero-dots">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              className={`hero-dots__dot ${i === current ? "hero-dots__dot--active" : ""}`}
              onClick={() => changeSlide(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

    </>
  );
}


function Services() {
  const [ref, visible] = useReveal();
  const [active, setActive] = useState(0);

  return (
    <section
      className={`services-sec bleed-bg page-section fade-up ${visible ? "fade-up--show" : ""}`}
      ref={ref}
      id="services"
    >
      <div className="services-sec__head services-sec__head--directory">
        <div className="label-tag">What We Do</div>
        <h2 className="block-title">
          Our <em>Services</em>
        </h2>
        <p className="block-subtitle">
          From SEO and Google Ads to social media and web development —
          we build data-driven strategies that deliver measurable results
          and long-term business growth.
        </p>
      </div>

      <div className="services-directory">
        <div className="services-directory__labels">
          <span>Service</span>
          <span>Features</span>
          <span>Preview</span>
        </div>

        {SERVICES.map((s, i) => {
          const extra = SERVICE_DIRECTORY_EXTRAS[s.id] || {};
          const isActive = active === i;

          return (
            <div
              key={s.id}
              className={`service-directory__row ${isActive ? "service-directory__row--active" : ""}`}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(0)}
            >
              <Link to={s.link} className="service-directory__name">
                <span className="service-directory__number">{String(i + 1).padStart(2, "0")}</span>
                <span className="service-directory__icon">{s.icon}</span>
                {s.title}
                <svg className="service-directory__arrow" viewBox="0 0 16 16" fill="none" width="14" height="14">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              <ul className="service-directory__features">
                {(extra.features || []).map((f, fi) => (
                  <li key={fi}>
                    <span>{ROMAN[fi]}.</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="service-directory__preview">
                {extra.image && <img src={extra.image} alt={s.title} />}
                <span>{extra.tag}</span>
              </div>

              <Link to={s.link} className="service-directory__mobile-link">
                View service
                <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function About() {
  const [ref, visible] = useReveal();
  return (
    <section
      className={`about-sec bleed-bg page-section fade-up ${visible ? "fade-up--show" : ""}`}
      ref={ref}
      id="about"
    >
      <div className="about-layout">

        <div className="about-copy">
          <div className="label-tag">About Arbaj Technology</div>

          <h2 className="block-title">
            Your Reliable <em>Digital Growth Partner</em>
          </h2>

          <p className="about-copy__text">
            Our team of experienced digital strategists helps you grow online
            with modern solutions designed to create a successful future.
          </p>
          <p className="about-copy__text">
            Every project is tailored to fit our clients' goals — whether you're
            a new business or an established brand. We deliver only top quality
            digital marketing solutions and work hard for measurable results.
          </p>

          <ul className="about-perks">
            {[
              "10+ Successful Projects Completed",
              "5+ Years of Industry Experience",
              "Digital Marketing Certification",
              "Personal Support & Account Management",
            ].map((f, i) => (
              <li key={f} style={{ "--i": i }}>
                <span className="about-perks__tick">✓</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="about-robot">
          <span className="about-robot-dot about-robot-dot--1" />
          <span className="about-robot-dot about-robot-dot--2" />
          <span className="about-robot-dot about-robot-dot--3" />
          <img src="/hero/AiRobot.jpeg" alt="Ai Robot" className="about-image__img" />
        </div>

      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);
  const [ref, visible] = useReveal();

  return (
    <section
      className={`faq-sec bleed-bg page-section fade-up ${visible ? "fade-up--show" : ""}`}
      ref={ref}
      id="faq"
    >
      <div className="faq-header">
        <div className="label-tag">FAQ</div>
        <h2 className="block-title">
          Questions You <em>Probably Have</em>
        </h2>
        <p className="block-subtitle">
          Quick answers to the things people usually ask before working with us.
        </p>
      </div>

      <div className="faq-accordion">
        {FAQS.map((item, i) => (
          <div
            key={i}
            className={`faq-row ${open === i ? "faq-row--open" : ""}`}
            style={{ "--i": i }}
          >
            <button
              className="faq-row__trigger"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span className="faq-row__num">{String(i + 1).padStart(2, "0")}</span>
              <span className="faq-row__q">{item.q}</span>
              <span className="faq-row__toggle">+</span>
            </button>
            <div className="faq-row__body">
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="faq-cta">
        <span className="faq-cta__icon">💬</span>
        <div className="faq-cta__text">
          <strong>Still have questions?</strong>
          <p>Our team is happy to walk you through anything, no pressure.</p>
        </div>
        <Link to="/contact" className="faq-cta__link">
          Talk to us
          <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  );
}


export default function HomePage() {
  return (
    <>
      <SEOptimization
        title="Digital Marketing Company in Zirakpur | Arbaj Technology"
        description="Arbaj Technology provides SEO, Google Ads, social media marketing and website development services in Zirakpur, Chandigarh and Mohali."
        url="https://arbajtechnologypvtltd.com/"
        faqs={FAQS}
        schema={[LOCAL_BUSINESS_SCHEMA, WEBSITE_SCHEMA]}
      />

      <main>
        <Hero />
        <Services />

        <About />
        <GoogleReviews />
        <FAQ />

      </main>
    </>
  );
}
