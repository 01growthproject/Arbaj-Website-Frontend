import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import '../styles/footer.css';
import Logo from '../assets/A-lg.webp';

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/p/Arbaj-Technology-PvtLtd-61579390061534/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
        <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://in.linkedin.com/company/arbaj-technology-pvt-ltd",
    icon: (
     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
  <path fill="#0A66C2" d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.58c-1.14 0-2.06-.93-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.13-.92 2.06-2.06 2.06zM20.45 20.45h-3.56v-5.61c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.96v5.71h-3.56V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z"/>
</svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/arbaj_technology/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
        <path fill="#E4405F" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@arbajtechnology?si=Ut129OTM651_G01l",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
        <path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
        <path fill="#FFFFFF" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const services = [
  { label: "Website Design & Development", path: "/web" },
  { label: "Search Engine Optimization (SEO)", path: "/seo" },
  { label: "Social Media Marketing (SMM)", path: "/social" },
  { label: "Meta Ads & Google Ads", path: "/ads" },
  { label: "Graphic Design", path: "/graphic" },
  { label: "Video Editing & Promotional Videos", path: "/video" },
];

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const targets = footer.querySelectorAll(
      '.footer__brand, .footer__col, .footer__contact-item, .footer__bottom-inner'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('footer--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    targets.forEach((el, i) => {
      el.style.setProperty('--delay', `${i * 80}ms`);
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="footer" ref={footerRef}>

      {/* background effects */}
      <div className="footer__bg-glow footer__bg-glow--tl" />
      <div className="footer__bg-glow footer__bg-glow--br" />
      <div className="footer__bg-grid" />

      {/* animated shimmer line */}
      <div className="footer__shimmer-line" />

      {/* ── MAIN ── */}
      <div className="footer__wrap footer__main">

        {/* Brand */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <span className="footer__logo-icon">AT</span>
            <span className="footer__logo-name">
              <img src={Logo} alt="Arbaj Technology" className="logo" />
              <small className="small">Pvt. Ltd.</small>
            </span>
          </Link>

          <p className="footer__tagline-badge">Digital Growth Agency</p>

          <p className="footer__desc">
            Helping businesses build a strong digital presence and achieve
            sustainable growth through reliable digital solutions.
          </p>

          <div className="footer__socials">
            {socials.map((s, i) => (
              <a
                key={s.label}
                href={s.href}
                className="footer__social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{ '--social-i': i }}
              >
                {s.icon}
              </a>
            ))}
          </div>

          <div className="footer__live">
            <span className="footer__live-dot" />
            Available for new projects
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__col">
          <h4 className="footer__col-heading">Quick Links</h4>
          <ul className="footer__list">
            {quickLinks.map((l, i) => (
              <li key={l.path} style={{ '--li-i': i }}>
                <Link to={l.path}>
                  <span className="footer__list-arrow">›</span>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="footer__col">
          <h4 className="footer__col-heading">Our Services</h4>
          <ul className="footer__list">
            {services.map((s, i) => (
              <li key={s.path} style={{ '--li-i': i }}>
                <Link to={s.path}>
                  <span className="footer__list-arrow">›</span>
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h4 className="footer__col-heading">Contact Us</h4>
          <ul className="footer__contact">
            <li className="footer__contact-item">
              <span className="footer__contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <span>2nd Floor, S.C.O #40, Royale Estate Complex, Near Oxford Street, Zirakpur – 140 603, Punjab</span>
            </li>
            <li className="footer__contact-item">
              <span className="footer__contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
                </svg>
              </span>
              <a href="tel:+917973611226">+91 79 7361 1226</a>
            </li>
            <li className="footer__contact-item">
              <span className="footer__contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              <a href="mailto:arbajtechnologypvtltd@gmail.com">arbajtechnologypvtltd@gmail.com</a>
            </li>
          </ul>
        </div>

      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="footer__bottom">
        <div className="footer__wrap footer__bottom-inner">
          <p>© 2021 Arbaj Technology Pvt. Ltd. — All rights reserved.</p>
          {/* <p>Made with <span className="footer__heart">♥</span> in Punjab, India</p> */}
        </div>
      </div>

    </footer>
  );
}