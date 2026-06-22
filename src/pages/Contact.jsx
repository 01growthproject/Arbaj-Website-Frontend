import { useState, useEffect, useRef } from "react";
import '../styles/contact.css';
import { CONTACT_INFO, FAQS } from '../components/Data/ContactData';
import SEOptimization from "../components/SEOptimization";
import { Link } from "react-router-dom";

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

/* ── Social Links ── */
const SOCIAL_LINKS = [
  {
    key: "facebook", label: "Facebook",
    href: "https://www.facebook.com/p/Arbaj-Technology-PvtLtd-61579390061534/",
    color: "#1d1616", glow: "rgba(24,119,242,0.35)",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
        <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    key: "instagram", label: "Instagram",
    href: "https://www.instagram.com/arbaj_technology/",
    color: "#1d1616", glow: "rgba(225,48,108,0.35)",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
        <path fill="#E4405F" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    key: "youtube", label: "YouTube",
    href: "https://youtube.com/@arbajtechnology?si=Ut129OTM651_G01l",
    color: "#1d1616", glow: "rgba(255,0,0,0.3)",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
        <path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
        <path fill="#FFFFFF" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    key: "linkedin", label: "LinkedIn",
    href: "https://in.linkedin.com/company/arbaj-technology-pvt-ltd",
    color: "#1d1616", glow: "rgba(10,102,194,0.35)",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
        <path fill="#0A66C2" d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.58c-1.14 0-2.06-.93-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.13-.92 2.06-2.06 2.06zM20.45 20.45h-3.56v-5.61c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.96v5.71h-3.56V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z" />
      </svg>
    ),
  },
];

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

/* ═══════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════ */
function ContactHero() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); setError("");
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Server error");
      if (data.success) {
        setSubmitted(true);
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Unable to connect to server. Please try again later.",err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="ct-hero" id="ct-contact-form">
        {/* dot grid bg */}
        <div className="ct-hero__dotgrid" aria-hidden="true" />
        <div className="ct-hero__orb ct-hero__orb--1" aria-hidden="true" />
        <div className="ct-hero__orb ct-hero__orb--2" aria-hidden="true" />

        <div className="ct-hero__inner">

          {/* LEFT — copy + info + socials */}
          <div className="ct-hero__copy">
            <div className="ct-hero__badge">
              <span className="ct-hero__badge-dot" />
              Free Consultation — No Commitment
            </div>

            <h1 className="ct-hero__heading">
              <span className="ct-hero__heading-row">
                <span>Let's Grow Your</span>
              </span>
              <span className="ct-hero__heading-row">
                <span>
                  <span className="ct-hero__accent">
                    Business Together
                    <svg viewBox="0 0 200 20" preserveAspectRatio="none">
                      <path d="M5,12 C50,4 150,4 195,12" />
                    </svg>
                  </span>
                </span>
              </span>
            </h1>

            <p className="ct-hero__para">
              Tell us about your project and get a free, personalised digital marketing
              strategy — built specifically for your goals and budget.
            </p>

            <div className="ct-hero__info">
              {CONTACT_INFO.map((item, i) => (
                <div className="ct-hero__info-item" key={i}>
                  <span className="ct-hero__info-icon">{item.icon}</span>
                  <div>
                    <span className="ct-hero__info-label">{item.label}</span>
                    {item.link
                      ? <Link to={item.link} className="ct-hero__info-value link">{item.value}</Link>
                      : <span className="ct-hero__info-value">{item.value}</span>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className="ct-hero__socials-wrap">
              <p className="ct-hero__socials-label">Follow Us</p>
              <div className="ct-hero__socials">
                {SOCIAL_LINKS.map((s) => (
                  <Link
                    key={s.key}
                    to={s.href}
                    className="ct-hero__social"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    style={{ "--social-color": s.color, "--social-glow": s.glow }}
                    title={s.label}
                  >
                    <span className="ct-hero__social-icon">{s.icon}</span>
                    <span className="ct-hero__social-tooltip">{s.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — floating form card */}
          <div className="ct-hero__form-wrap">
            <div className="ct-form-card">
              <div className="ct-form-card__bar">
                <span className="ct-form-card__dot ct-form-card__dot--r" />
                <span className="ct-form-card__dot ct-form-card__dot--y" />
                <span className="ct-form-card__dot ct-form-card__dot--g" />
                <span className="ct-form-card__bar-label">Get Free Consultation</span>
              </div>

              {submitted ? (
                <div className="ct-form__success">
                  <div className="ct-form__success-icon">✓</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you! We'll get back to you within 2–4 business hours.</p>
                  <button onClick={() => setSubmitted(false)} className="ct-form__success-btn">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="ct-form" onSubmit={handleSubmit}>
                  <div className="ct-form__row">
                    <div className="ct-form__group">
                      <label className="ct-form__label">Your Name *</label>
                      <input type="text" name="name" className="ct-form__input" placeholder="Enter Your Name" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="ct-form__group">
                      <label className="ct-form__label">Phone Number *</label>
                      <input type="tel" name="phone" className="ct-form__input" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="ct-form__group">
                    <label className="ct-form__label">Email Address *</label>
                    <input type="email" name="email" className="ct-form__input" placeholder="you@gmail.com" value={form.email} onChange={handleChange} required />
                  </div>

                  <div className="ct-form__group">
                    <label className="ct-form__label">Tell Us About Your Business</label>
                    <textarea name="message" className="ct-form__input ct-form__textarea" placeholder="Briefly describe your business and what you're looking to achieve..." rows={4} value={form.message} onChange={handleChange} />
                  </div>

                  {error && <div className="ct-form__error">⚠️ {error}</div>}

                  <button
                    type="submit"
                    className={`ct-btn ct-btn--filled ct-form__submit ${loading ? "loading" : ""}`}
                    disabled={loading}
                  >
                    {loading ? (
                      <><span className="ct-form__spinner" /> Sending...</>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <svg viewBox="0 0 20 20" fill="currentColor" width="17" height="17">
                          <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="ct-form__note">🔒 Your information is safe. We never share your data.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Ticker */}
      {/* <div className="ct-ticker">
        <div className="ct-ticker__belt">
          {[...["SEO", "Google Ads", "Social Media", "Web Development", "Graphic Design", "Video Editing", "Brand Strategy", "Content Marketing"],
          ...["SEO", "Google Ads", "Social Media", "Web Development", "Graphic Design", "Video Editing", "Brand Strategy", "Content Marketing"]
          ].map((item, i) => (
            <span key={i} className="ct-ticker__word">
              {item} <span className="ct-ticker__div">✦</span>
            </span>
          ))}
        </div>
      </div> */}
    </>
  );
}

/* ═══════════════════════════════════════════════
   CHANNEL CARDS
═══════════════════════════════════════════════ */
function ContactChannels() {
  const [ref, visible] = useReveal();

  const CHANNELS = [
    {
      emoji: "📞", tag: "CALL", title: "Call Us Directly",
      desc: "Speak with our team instantly for quick queries and consultations.",
      cta: "+91 79 7361 1226", link: "tel:917973611226", accent: "#FF6B5B",
    },
    {
      emoji: "✉️", tag: "EMAIL", title: "Email Our Team",
      desc: "Send your requirements and we'll reply with a detailed proposal.",
      cta: "Send Email →", link: "mailto:arbajtechnologypvtltd@gmail.com", accent: "#22c55e",
    },
    {
      emoji: "💬", tag: "WHATSAPP", title: "WhatsApp Us",
      desc: "Drop us a message on WhatsApp for the fastest possible response.",
      cta: "Chat on WhatsApp →", link: "https://wa.me/917973611226", accent: "#25d366",
    },
    {
      emoji: "📍", tag: "VISIT", title: "Visit Our Office",
      desc: "S.C.O #40, Royale Estate Complex, Near Oxford Street, Zirakpur, Punjab.",
      cta: "Get Directions →", link: "#ct-map", accent: "#f59e0b",
    },
  ];

  return (
    <section
      ref={ref}
      className={`ct-page-section ct-channels ct-reveal ${visible ? "ct-reveal--show" : ""}`}
    >
      <div className="ct-channels__head">
        <div className="ct-label">— Get In Touch</div>
        <h2 className="ct-title">Multiple Ways to <em>Reach Us</em></h2>
        <p className="ct-sub">
          Choose the channel that works best for you — we're available across all of them.
        </p>
      </div>

      <div className="ct-channels__grid">
        {CHANNELS.map((c, i) => (
          <div
            className="ct-channel-tile"
            key={i}
            style={{ "--i": i, "--tile-accent": c.accent }}
          >
            <div className="ct-channel-tile__emoji">{c.emoji}</div>
            <div className="ct-channel-tile__tag">{c.tag}</div>
            <h3 className="ct-channel-tile__title">{c.title}</h3>
            <p className="ct-channel-tile__desc">{c.desc}</p>
            <Link to={c.link} className="ct-channel-tile__cta">
              {c.cta}
              <svg viewBox="0 0 16 16" fill="none" width="13" height="13">
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
   WHY REACH OUT
═══════════════════════════════════════════════ */
function WhyReachOut() {
  const [ref, visible] = useReveal();

  const WHY_CARDS = [
    {
      emoji: "⚡",
      title: "Immediate Help",
      desc: "Our expert team responds fast and handles all your queries without wasting time.",
      cls: "ct-why-card--coral",
    },
    {
      emoji: "🎯",
      title: "FREE Business Growth Plan",
      desc: "Get a complete plan with everything you need for brand success — free of charge.",
      cls: "ct-why-card--mint",
    },
  ];

  const FEATURES = [
    "Free 30 Minute Consultation",
    "Personalised Marketing Strategy",
    "Certified Google & Meta Experts",
    "100% Transparent Pricing",
    "Dedicated Account Manager",
  ];

  return (
    <div
      ref={ref}
      className={`ct-why ct-reveal ${visible ? "ct-reveal--show" : ""}`}
    >
      <div className="ct-why__inner">
        {/* Left — trust cards */}
        <div className="ct-why__cards">
          {WHY_CARDS.map((c, i) => (
            <div className={`ct-why-card ${c.cls}`} key={i}>
              <span className="ct-why-card__emoji">{c.emoji}</span>
              <div className="ct-why-card__body">
                <strong>{c.title}</strong>
                <p>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right — text */}
        <div className="ct-why__text">
          <div className="ct-label ct-label--mint">— Why Reach Out</div>
          <h2 className="ct-title ct-title--white">
            Let's Scale Up <em>Your Business</em>
          </h2>
          <p className="ct-why__para">
            We simplify the process. You share your goals, we craft a winning digital
            marketing plan tailored specifically to your brand.
          </p>
          <p className="ct-why__para">
            No complexity, no guesswork — just straightforward collaboration and powerful results.
          </p>

          <ul className="ct-why__list">
            {FEATURES.map((f, i) => (
              <li key={f} style={{ "--i": i }}>
                <span className="ct-why__tick">✓</span>
                {f}
              </li>
            ))}
          </ul>

          <Link to="tel:917973611226" className="ct-btn ct-btn--coral">
            <svg viewBox="0 0 20 20" fill="currentColor" width="17" height="17">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>Let's Grow Your Business</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   MAP
═══════════════════════════════════════════════ */
function MapSection() {
  const [ref, visible] = useReveal();
  return (
    <section
      ref={ref}
      className={`ct-page-section ct-map ct-reveal ${visible ? "ct-reveal--show" : ""}`}
      id="ct-map"
    >
      <div className="ct-map__head">
        <div className="ct-label">— Find Us</div>
        <h2 className="ct-title">We're Located in <em>Zirakpur, Punjab</em></h2>
        <p className="ct-sub">
          Visit us at our office or reach out online — we're always happy to connect.
        </p>
      </div>

      <div className="ct-map__frame-wrap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.445313565068!2d76.82016207633792!3d30.649586489645014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f95e047b300e3%3A0x3b2f6db977f15214!2sARBAJ%20TECHNOLOGY%20PVT.%20LTD!5e0!3m2!1sen!2sin!4v1775884244256!5m2!1sen!2sin"
          width="100%"
          height="420"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Arbaj Technology Office"
          className="ct-map__iframe"
        />
        <div className="ct-map__pin">
          <span className="ct-map__pin-emoji">📍</span>
          <div>
            <strong>Arbaj Technology</strong>
            <span>Zirakpur, Punjab – 140 603</span>
          </div>
        </div>
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
    <div
      ref={ref}
      className={`ct-cta ct-reveal ${visible ? "ct-reveal--show" : ""}`}
    >
      <div className="ct-cta__glow" aria-hidden="true" />
      <div className="ct-cta__inner">
        <h2>Ready to <em>Grow</em> Your Business?</h2>
        <p>Book a free consultation today — no commitment, just a results-focused conversation.</p>
        <div className="ct-cta__btns">
          <a href="#ct-contact-form" className="ct-btn ct-btn--coral">
            <span>Get Free Consultation</span>
            <svg viewBox="0 0 20 20" fill="currentColor" width="17" height="17">
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          </a>
          <Link to="tel:917973611226" className="ct-btn ct-btn--outline-light">
            <svg viewBox="0 0 20 20" fill="currentColor" width="17" height="17">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call Us
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════ */
export default function ContactPage() {
  return (
    <>
      <SEOptimization
        title="Contact Arbaj Technology | Get Free Digital Marketing Consultation"
        description="Contact Arbaj Technology – Zirakpur based digital marketing agency. Get free consultation for SEO, Google Ads, social media & web development. Call +91 79 7361 1226."
        keywords="contact Arbaj Technology, digital marketing agency Zirakpur contact, SEO company phone number, web development contact India, Google Ads agency contact"
        url="https://arbajtechnologypvtltd.com/contact"
        image="https://arbajtechnologypvtltd.com/og-contact.jpg"
      />
      <main>
        <ContactHero />
        <ContactChannels />
        <WhyReachOut />
        <MapSection />
        <CTABanner />
      </main>
    </>
  );
}