import { useState, useEffect, useRef } from "react";
import '../styles/contact.css';
import { CONTACT_INFO, FAQS } from '../components/Data/ContactData'

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

/* ── Real SVG Social Icons ── */
const SOCIAL_LINKS = [
  {
    key: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/p/Arbaj-Technology-PvtLtd-61579390061534/",
    // color: "#1877f2",
    color: "#1d1616",
    glow: "rgba(24,119,242,0.35)",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
        <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    key: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/arbaj_technology/",
    // color: "#e1306c",
    color: "#1d1616",
    glow: "rgba(225,48,108,0.35)",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
        <path fill="#E4405F" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    key: "youtube",
    label: "YouTube",
    href: "https://youtube.com/@arbajtechnology?si=Ut129OTM651_G01l",
    // color: "#ff0000",
    color: "#1d1616",
    glow: "rgba(255,0,0,0.3)",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
        <path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
        <path fill="#FFFFFF" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://in.linkedin.com/company/arbaj-technology-pvt-ltd",
    // color: "#0a66c2",
    color: "#1d1616",
    glow: "rgba(10,102,194,0.35)",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
        <path fill="#0A66C2" d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.58c-1.14 0-2.06-.93-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.13-.92 2.06-2.06 2.06zM20.45 20.45h-3.56v-5.61c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.96v5.71h-3.56V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z" />
      </svg>
    ),
  },
];

// ── Backend URL — production pe apna real URL daalo ──
const API_URL = import.meta.env.VITE_API_URL;

function ContactHero() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Server error");
      }

      if (data.success) {
        setSubmitted(true);
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setError("Something went wrong. Please try again.");
      }

    } catch (err) {
      console.error("Contact form error:", err);
      setError("Unable to connect to server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-hero" id="contact-form">
      <div className="contact-hero__grid" aria-hidden="true">
        {Array.from({ length: 80 }).map((_, i) => <span key={i} className="contact-hero__grid-dot" />)}
      </div>
      <div className="contact-hero__orb contact-hero__orb--1" aria-hidden="true" />
      <div className="contact-hero__orb contact-hero__orb--2" aria-hidden="true" />

      <div className="contact-hero__inner">

        {/* ──── LEFT ──── */}
        <div className="contact-hero__left">
          <div className="contact-hero__badge">
            <span className="contact-hero__badge-dot" />
            Free Consultation — No Commitment
          </div>

          <h1 className="contact-hero__title">
            Let's Grow Your<br />
            <span className="contact-hero__title-highlight">Business Together</span>
          </h1>

          <p className="contact-hero__desc">
            Tell us about your project and get a free, personalised digital marketing
            strategy — built specifically for your goals and budget.
          </p>

          {/* info list */}
          <div className="contact-hero__info">
            {CONTACT_INFO.map((item, i) => (
              <div className="contact-hero__info-item" key={i}>
                <span className="contact-hero__info-icon">{item.icon}</span>
                <div>
                  <span className="contact-hero__info-label">{item.label}</span>
                  {item.link
                    ? <a href={item.link} className="contact-hero__info-value link">{item.value}</a>
                    : <span className="contact-hero__info-value">{item.value}</span>
                  }
                </div>
              </div>
            ))}
          </div>

          {/* ── SOCIAL LINKS ── */}
          <div className="contact-hero__socials-wrap">
            <p className="contact-hero__socials-label">Follow Us</p>
            <div className="contact-hero__socials">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  className="contact-hero__social"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{ "--social-color": s.color, "--social-glow": s.glow }}
                  title={s.label}
                >
                  <span className="contact-hero__social-icon">{s.icon}</span>
                  <span className="contact-hero__social-tooltip">{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ──── RIGHT: form card ──── */}
        <div className="contact-hero__right">
          <div className="contact-form-card">
            <div className="contact-form-card__header">
              <span className="contact-form-card__dot contact-form-card__dot--red" />
              <span className="contact-form-card__dot contact-form-card__dot--yellow" />
              <span className="contact-form-card__dot contact-form-card__dot--green" />
              <span className="contact-form-card__label">Get Free Consultation</span>
            </div>

            {submitted ? (
              <div className="contact-form__success">
                <div className="contact-form__success-icon">✓</div>
                <h3>Message Sent!</h3>
                <p>Thank you! We'll get back to you within 2–4 business hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="contact-form__success-btn"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label className="contact-form__label">Your Name *</label>
                    <input type="text" name="name" className="contact-form__input" placeholder="Enter Your Name" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="contact-form__group">
                    <label className="contact-form__label">Phone Number *</label>
                    <input type="tel" name="phone" className="contact-form__input" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} required />
                  </div>
                </div>

                <div className="contact-form__group">
                  <label className="contact-form__label">Email Address *</label>
                  <input type="email" name="email" className="contact-form__input" placeholder="you@gmail.com" value={form.email} onChange={handleChange} required />
                </div>

                {/* <div className="contact-form__group">
                  <label className="contact-form__label">Service Interested In</label>
                  <select name="service" className="contact-form__input contact-form__select" value={form.service} onChange={handleChange}>
                    <option value="">Select a service...</option>
                    {SERVICES_LIST.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div> */}

                <div className="contact-form__group">
                  <label className="contact-form__label">Tell Us About Your Business</label>
                  <textarea name="message" className="contact-form__input contact-form__textarea" placeholder="Briefly describe your business and what you're looking to achieve..." rows={4} value={form.message} onChange={handleChange} />
                </div>

                {/* ── ERROR MESSAGE ── */}
                {error && (
                  <div className="contact-form__error">
                    ⚠️ {error}
                  </div>
                )}

                <button type="submit" className={`btn btn--primary contact-form__submit ${loading ? "loading" : ""}`} disabled={loading}>
                  {loading ? (
                    <><span className="contact-form__spinner" /> Sending...</>
                  ) : (
                    <>Send Message <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" /></svg></>
                  )}
                </button>

                <p className="contact-form__note">🔒 Your information is safe. We never share your data.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


function Ticker() {
  const items = ["SEO", "Google Ads", "Social Media", "Website Development", "Graphic Design", "Video Editing", "Brand Strategy", "Content Marketing"];
  const all = [...items, ...items];
  return (
    <div className="ticker">
      <div className="ticker__track">
        {all.map((item, i) => (
          <span key={i} className="ticker__item">{item} <span className="ticker__sep">✦</span></span>
        ))}
      </div>
    </div>
  );
}


function ContactCards() {
  const [ref, visible] = useReveal();
  const cards = [
    { icon: "📞", tag: "CALL", title: "Call Us Directly", desc: "Speak with our team instantly for quick queries and consultations.", value: "+91 79 7361 1226", link: "tel:917973611226", accent: "#1d7afc" },
    { icon: "✉️", tag: "EMAIL", title: "Email Our Team", desc: "Send your requirements and we'll reply with a detailed proposal.", value: "Send Email →", link: "mailto:arbajtechnologypvtltd@gmail.com", accent: "#22c55e" },
    { icon: "💬", tag: "WHATSAPP", title: "WhatsApp Us", desc: "Drop us a message on WhatsApp for the fastest possible response.", value: "Chat on WhatsApp →", link: "https://wa.me/917973611226", accent: "#25d366" },
    { icon: "📍", tag: "VISIT", title: "Visit Our Office", desc: "S.C.O #40, Royale Estate Complex, Near Oxford Street, Zirakpur, Punjab.", value: "Get Directions →", link: "#map", accent: "#f59e0b" },
  ];

  return (
    <section className={`contact-cards section ${visible ? "section--visible" : ""}`} ref={ref}>
      <div className="section__label">— Get In Touch</div>
      <h2 className="section__title">Multiple Ways to <span>Reach Us</span></h2>
      <p className="section__sub">Choose the channel that works best for you — we're available across all of them.</p>

      <div className="contact-cards__grid">
        {cards.map((c, i) => (
          <div className="contact-info-card" key={i} style={{ "--accent": c.accent, "--i": i }}>
            <div className="contact-info-card__tag">{c.tag}</div>
            <div className="contact-info-card__icon">{c.icon}</div>
            <h3 className="contact-info-card__title">{c.title}</h3>
            <p className="contact-info-card__desc">{c.desc}</p>
            <a href={c.link} className="contact-info-card__link">
              {c.value}
              <svg viewBox="0 0 16 16" fill="none" width="13" height="13"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyContact() {
  const [ref, visible] = useReveal();
  return (
    <section className={`contact-why section ${visible ? "section--visible" : ""}`} ref={ref}>
      <div className="contact-why__inner">
        <div className="contact-why__visual">
          <div className="contact-why__circle contact-why__circle--1" />
          <div className="contact-why__circle contact-why__circle--2" />
          <div className="contact-why__badge-stack">
            <div className="contact-why__badge-card contact-why__badge-card--blue">
              <span>⚡</span>
              <div>
                <strong>Fast Response</strong>
                <p>We respond to every inquiry within 2–4 hours during business days.</p>
              </div>
            </div>
            <div className="contact-why__badge-card contact-why__badge-card--gold">
              <span>🎯</span>
              <div>
                <strong>Free Strategy Session</strong>
                <p>Get a custom digital marketing roadmap — completely free, no strings attached.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-why__text">
          <div className="section__label">— Why Reach Out</div>
          <h2 className="section__title">We're Here to Help <span>Your Business Grow</span></h2>
          <p className="contact-why__para">
            Getting started is simple. Share your goals with us and our certified digital marketing
            experts will create a personalised strategy that fits your business, industry and budget.
          </p>
          <p className="contact-why__para">
            No jargon, no pressure, no lock-in contracts. Just honest advice and real results —
            backed by 5+ years of experience and 500+ happy clients.
          </p>
          <ul className="contact-why__features">
            {["Free 30-min Strategy Consultation", "Custom Plan for Your Business", "Certified Google & Meta Experts", "Transparent Pricing — No Hidden Fees", "Dedicated Account Manager"].map((f) => (
              <li key={f}><span className="contact-why__check">✓</span>{f}</li>
            ))}
          </ul>
          <a href="tel:917973611226" className="btn btn--primary">
            <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}


function MapSection() {
  const [ref, visible] = useReveal();
  return (
    <section className={`contact-map section ${visible ? "section--visible" : ""}`} ref={ref} id="map">
      <div className="section__label">— Find Us</div>
      <h2 className="section__title">We're Located in <span>Zirakpur, Punjab</span></h2>
      <p className="section__sub">Visit us at our office or reach out online — we're always happy to connect.</p>

      <div className="contact-map__wrap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.3!2d76.8!3d30.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDM5JzAwLjAiTiA3NsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%" height="420" style={{ border: 0 }}
          allowFullScreen="" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Arbaj Technology Office"
          className="contact-map__iframe"
        />
        <div className="contact-map__pin-card">
          <span>📍</span>
          <div>
            <strong>Arbaj Technology</strong>
            <span>Zirakpur, Punjab – 140 603</span>
          </div>
        </div>
      </div>
    </section>
  );
}


function FAQ() {
  const [open, setOpen] = useState(null);
  const [ref, visible] = useReveal();
  return (
    <section className={`faq section ${visible ? "section--visible" : ""}`} ref={ref}>
      <div className="section__label">— FAQ</div>
      <h2 className="section__title">Common Questions<br /><span>About Contacting Us</span></h2>
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
        <h2>Ready to Grow Your Business?</h2>
        <p>Book a free consultation today — no commitment, just a results-focused conversation.</p>
        <div className="cta-banner__actions">
          <a href="#contact-form" className="btn btn--primary">Get Free Consultation</a>
          <a href="tel:917973611226" className="btn btn--ghost btn--ghost-light">
            <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
            +91 79 7361 1226
          </a>
        </div>
      </div>
    </section>
  );
}


export default function ContactPage() {
  return (
    <>
      <main>
        <ContactHero />
        <Ticker />
        <ContactCards />
        <WhyContact />
        <MapSection />
        <FAQ />
        <CTABanner />
      </main>
    </>
  );
}