import { useEffect, useRef, useState } from "react";
import "../styles/contact.css";
import { CONTACT_INFO, FAQS } from "../components/Data/ContactData";
import SEOptimization from "../components/SEOptimization";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";


const SITE_URL = "https://arbajtechnologypvtltd.com";

const CONTACT_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#business`,
  name: "Arbaj Technology Pvt. Ltd.",
  url: SITE_URL,
  telephone: "+91-7973611226",
  email: "arbajtechnologypvtltd@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "2nd Floor, SCO 40, Royale Estate Complex, Near Oxford Street",
    addressLocality: "Zirakpur",
    addressRegion: "Punjab",
    postalCode: "140603",
    addressCountry: "IN",
  },
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
  sameAs: [
    "https://www.facebook.com/p/Arbaj-Technology-PvtLtd-61579390061534/",
    "https://www.linkedin.com/company/143034324/",
    "https://www.instagram.com/arbaj_technology/",
    "https://www.youtube.com/@arbajtechnology",
  ],
};

const CONTACT_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}/contact#contact-page`,
  url: `${SITE_URL}/contact`,
  name: "Contact Arbaj Technology",
  description:
    "Contact Arbaj Technology in Zirakpur for digital marketing, advertising, design and website development services.",
  mainEntity: {
    "@id": `${SITE_URL}/#business`,
  },
  inLanguage: "en-IN",
};

const CONTACT_BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: `${SITE_URL}/contact`,
    },
  ],
};

const SOCIALS = [
  ["facebook", "Facebook", "https://www.facebook.com/p/Arbaj-Technology-PvtLtd-61579390061534/"],
  ["instagram", "Instagram", "https://www.instagram.com/arbaj_technology/"],
  ["youtube", "YouTube", "https://youtube.com/@arbajtechnology"],
  ["linkedin", "LinkedIn", "https://www.linkedin.com/company/143034324/"],
];

const METHODS = [
  ["phone", "Call", "Talk to Our Team", "Get quick answers and discuss your project directly.", "+91 79 7361 1226", "tel:+917973611226"],
  ["mail", "Email", "Share Your Requirements", "Send your project details and receive a structured response.", "Send an Email", "mailto:arbajtechnologypvtltd@gmail.com"],
  ["message", "WhatsApp", "Start a Quick Chat", "Message us when you need the fastest response.", "Open WhatsApp", "https://wa.me/917973611226"],
  ["pin", "Visit", "Meet Us in Zirakpur", "Visit our office at Royale Estate Complex.", "Get Directions", "#contact-map"],
];

const BENEFITS = ["Free 30-minute consultation", "Personalised marketing strategy", "Transparent pricing and timelines", "Dedicated point of contact"];

const PATHS = {
  phone: <path d="M5 3h3l1.3 4-2 1.2a15 15 0 006.5 6.5l1.2-2 4 1.3v3a2 2 0 01-2 2C9.3 19 5 14.7 5 7V5a2 2 0 012-2z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M4 7l8 6 8-6" /></>,
  message: <><path d="M20 11.5a8 8 0 01-8.5 8 8.7 8.7 0 01-3.7-.9L3 20l1.5-4.4A8 8 0 1120 11.5z" /><path d="M8 12h.01M12 12h.01M16 12h.01" /></>,
  pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1116 0z" /><circle cx="12" cy="10" r="2.5" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  arrow: <path d="M5 12h14M14 7l5 5-5 5" />,
  check: <path d="M5 12l4 4L19 6" />,
};

function Icon({ name, size = 20 }) {
  return <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{PATHS[name]}</svg>;
}

function SocialIcon({ name }) {
  const icons = {
    facebook: <path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v7h4v-7h3l1-4h-4V9c0-.7.3-1 1-1z" />,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".7" fill="currentColor" /></>,
    youtube: <><rect x="2.5" y="6" width="19" height="12" rx="4" /><path d="M10 9.5l5 2.5-5 2.5z" /></>,
    linkedin: <><rect x="3" y="9" width="4" height="12" /><path d="M5 6.5v.01M11 21V9h4v2c1-1.5 6-2 6 3v7M15 14v7" /></>,
  };
  return <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[name]}</svg>;
}

function useReveal() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return setShow(true);
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setShow(true); observer.disconnect(); }
    }, { threshold: 0.12 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, show];
}

function Heading({ eyebrow, title, text, light = false }) {
  return <header className={`ct-heading ${light ? "ct-heading--light" : ""}`}><span>{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</header>;
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "idle", text: "" });
  const change = ({ target }) => setForm((old) => ({ ...old, [target.name]: target.value }));

  async function submit(event) {
    event.preventDefault();
    setStatus({ type: "loading", text: "" });
    try {
      const response = await fetch(`${API_URL}/api/contact`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || data.success === false) throw new Error(data.error || "Unable to send your message.");
      setForm({ name: "", phone: "", email: "", message: "" });
      setStatus({ type: "success", text: "Our team will contact you within 2–4 business hours." });
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus({ type: "error", text: error.message || "Unable to connect. Please try again later." });
    }
  }

  if (status.type === "success") return <div className="ct-success" role="status"><i><Icon name="check" size={28} /></i><h2>Message sent</h2><p>{status.text}</p><button onClick={() => setStatus({ type: "idle", text: "" })}>Send another message</button></div>;

  return <form className="ct-form" onSubmit={submit}>
    <header><span>Free consultation</span><h2>Tell us about your project</h2><p>Complete the form and our team will get back to you shortly.</p></header>
    <div className="ct-form__row">
      <label><span>Name *</span><input name="name" value={form.name} onChange={change} placeholder="Your full name" autoComplete="name" required /></label>
      <label><span>Phone *</span><input type="tel" name="phone" value={form.phone} onChange={change} placeholder="+91 XXXXX XXXXX" autoComplete="tel" required /></label>
    </div>
    <label><span>Email *</span><input type="email" name="email" value={form.email} onChange={change} placeholder="you@example.com" autoComplete="email" required /></label>
    <label><span>Project details</span><textarea name="message" value={form.message} onChange={change} placeholder="Tell us about your business and goals..." rows="5" /></label>
    {status.type === "error" && <p className="ct-form__error" role="alert">{status.text}</p>}
    <button className="ct-btn-primary" disabled={status.type === "loading"}><span>{status.type === "loading" ? "Sending..." : "Send message"}</span>{status.type === "loading" ? <i className="ct-spinner" /> : <Icon name="arrow" size={18} />}</button>
    <small className="ct-form__privacy">We use your information only to respond to your enquiry.</small>
  </form>;
}

function Hero() {
  return <section className="ct-hero" id="contact-form"><div className="ct-hero__grid" /><div className="ct-container ct-hero__inner">
    <div className="ct-hero__content"><span className="ct-badge"><i /> Free consultation · No commitment</span><h1>Let’s build something <em>meaningful together.</em></h1><p>Tell us what you want to achieve. We’ll turn your goals into a clear digital strategy built around your business and budget.</p>
      <div className="ct-quick-list">{CONTACT_INFO.map((item) => { const icon = item.label.includes("Office") ? "pin" : item.label.includes("Call") ? "phone" : item.label.includes("Email") ? "mail" : "clock"; return <div className="ct-quick" key={item.label}><i><Icon name={icon} /></i><div><small>{item.label}</small>{item.link ? <a href={item.link}>{item.value}</a> : <span>{item.value}</span>}</div></div>; })}</div>
      <div className="ct-social"><span>Follow us</span><div>{SOCIALS.map(([key, label, href]) => <a key={key} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}><SocialIcon name={key} /></a>)}</div></div>
    </div><div className="ct-hero__form"><ContactForm /></div>
  </div></section>;
}

function Methods() {
  const [ref, show] = useReveal();
  return <section ref={ref} className={`ct-section ct-methods ct-reveal ${show ? "is-visible" : ""}`}><div className="ct-container"><Heading eyebrow="Contact options" title="Choose the easiest way to reach us" text="Call, email, message or visit—we’re available through the channel that works best for you." /><div className="ct-methods__grid">{METHODS.map(([icon, tag, title, text, action, href], i) => <article className="ct-method" key={tag} style={{ "--delay": `${i * 80}ms` }}><i><Icon name={icon} size={22} /></i><small>{tag}</small><h3>{title}</h3><p>{text}</p><a href={href}>{action}<Icon name="arrow" size={16} /></a></article>)}</div></div></section>;
}

function Trust() {
  const [ref, show] = useReveal();
  return <section ref={ref} className={`ct-trust ct-reveal ${show ? "is-visible" : ""}`}><div className="ct-container ct-trust__inner"><div><Heading light eyebrow="Why Arbaj Technology" title="Clear communication. Practical strategy. Real support." text="We understand your goals, build the right plan and communicate clearly at every stage." /><a className="ct-btn-light" href="tel:+917973611226"><Icon name="phone" size={18} /> Call our team</a></div><ul>{BENEFITS.map((item, i) => <li key={item} style={{ "--delay": `${i * 80}ms` }}><i><Icon name="check" size={17} /></i>{item}</li>)}</ul></div></section>;
}

function Location() {
  const [ref, show] = useReveal();
  return <section ref={ref} className={`ct-section ct-location ct-reveal ${show ? "is-visible" : ""}`} id="contact-map"><div className="ct-container"><Heading eyebrow="Our office" title="Visit us in Zirakpur, Punjab" text="Find us at Royale Estate Complex near Oxford Street. We’d be happy to discuss your project." /><div className="ct-map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.445313565068!2d76.82016207633792!3d30.649586489645014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f95e047b300e3%3A0x3b2f6db977f15214!2sARBAJ%20TECHNOLOGY%20PVT.%20LTD!5e0!3m2!1sen!2sin!4v1775884244256!5m2!1sen!2sin" title="Arbaj Technology office" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /><div><i><Icon name="pin" /></i><span><strong>Arbaj Technology Pvt. Ltd.</strong>
  
  <small>
  2nd Floor, SCO 40, Royale Estate Complex, Near Oxford Street,
  Zirakpur, Punjab 140603, India
</small>
  </span></div></div></div></section>;
}

function FAQs() {
  const [ref, show] = useReveal();
  return <section ref={ref} className={`ct-section ct-faq ct-reveal ${show ? "is-visible" : ""}`}><div className="ct-container ct-faq__inner"><Heading eyebrow="Frequently asked" title="Before you get in touch" text="Quick answers to common questions about your first consultation." /><div className="ct-faq__list">{FAQS.map((item, i) => <details key={item.q} open={i === 0}><summary>{item.q}<span>+</span></summary><p>{item.a}</p></details>)}</div></div></section>;
}

function FinalCTA() {
  return <section className="ct-final"><div className="ct-container ct-final__inner"><div><span>Ready when you are</span><h2>Let’s discuss your next project.</h2><p>No pressure—just a clear conversation about your goals.</p></div><div><a className="ct-btn-white" href="#contact-form">Get free consultation <Icon name="arrow" size={18} /></a><a className="ct-btn-outline" href="tel:+917973611226"><Icon name="phone" size={18} /> Call us</a></div></div></section>;
}

export default function ContactPage() {
  return <><SEOptimization title="Contact Us | Digital Marketing Agency in Zirakpur."
   description="Contact a digital marketing agency in Zirakpur for SEO, web development, social media marketing, Google Ads and Meta Ads. Call +91 79 7361 1226." 
    
    url="https://arbajtechnologypvtltd.com/contact" image="https://arbajtechnologypvtltd.com/og-contact.jpg" faqs={FAQS} /><main className="ct-page"><Hero /><Methods /><Trust /><Location /><FAQs /><FinalCTA /></main></>;
}
