import { Link } from "react-router-dom";
import "../styles/footer.css";
import Logo from "../assets/Artboard lg.png";

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/p/Arbaj-Technology-PvtLtd-61579390061534/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 8h3V4.2c-.5-.1-2.2-.2-4.1-.2C9 4 6.3 6.4 6.3 10.8V14H3v4.2h3.3V24h4.1v-5.8h3.4l.6-4.2h-4v-2.8c0-1.2.3-2 2.1-2H14V8z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
   href: "https://www.linkedin.com/company/143034324/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.2 7.8A2.4 2.4 0 1 0 5.2 3a2.4 2.4 0 0 0 0 4.8zM3.2 9.5h4V21h-4V9.5zM9.6 9.5h3.8v1.6h.1c.5-1 1.8-2.1 3.8-2.1 4 0 4.7 2.5 4.7 5.9V21h-4v-5.4c0-1.3 0-3-2-3s-2.3 1.5-2.3 2.9V21h-4.1V9.5z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
      href: "https://www.instagram.com/arbaj_technology/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.2" className="footer__icon-cutout" />
        <circle cx="17.4" cy="6.7" r="1.1" className="footer__icon-cutout" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@arbajtechnology",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.4 6.2a3 3 0 0 0-2.1-2.1C19.4 3.6 12 3.6 12 3.6s-7.4 0-9.3.5A3 3 0 0 0 .6 6.2C.1 8.1.1 12 .1 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.3.5 9.3.5s7.4 0 9.3-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8z" />
        <path d="m9.6 15.6 6.2-3.6-6.2-3.6v7.2z" className="footer__icon-cutout" />
      </svg>
    ),
  },
];

const SERVICES = [
  {
    label: "Web Development",
    path: "/services#web-development",
  },
  {
    label: "Graphic Designing",
    path: "/services#graphic-designing",
  },
  {
    label: "Video Editing",
    path: "/services#video-editing",
  },
  {
    label: "Search Engine Optimization",
    path: "/services#search-engine-optimization",
  },
  {
    label: "Social Media Marketing",
    path: "/services#social-media-marketing",
  },
  {
    label: "Google Ads",
    path: "/services#google-ads",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 8h9M9 4.5 12.5 8 9 11.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__glow" aria-hidden="true" />
      <div className="footer__grid" aria-hidden="true" />

      <div className="footer__wrap footer__main">
        <div className="footer__brand">
          <Link to="/" className="footer__logo" aria-label="Arbaj Technology home">
            <img
              src={Logo}
              alt="Arbaj Technology"
              width="160"
              height="50"
            />
          </Link>

          <p className="footer__eyebrow">Digital Growth Agency</p>
          <p className="footer__desc">
            Helping businesses build a strong digital presence and achieve
            sustainable growth through reliable digital solutions.
          </p>

          <div className="footer__socials" aria-label="Social media links">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="footer__social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h2 className="footer__heading">Our Services</h2>
          <ul className="footer__list">
            {SERVICES.map((service) => (
              <li key={service.path}>
                <Link to={service.path}>
                  <ArrowIcon />
                  <span>{service.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h2 className="footer__heading">Contact Us</h2>
          <ul className="footer__contact">
            <li>
              <span className="footer__contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M20 10c0 5.4-8 11-8 11S4 15.4 4 10a8 8 0 1 1 16 0z" />
                  <circle cx="12" cy="10" r="2.7" />
                </svg>
              </span>
              <span>
                2nd Floor, S.C.O #40, Royale Estate Complex, Near Oxford Street,
                Zirakpur – 140603, Punjab
              </span>
            </li>

            <li>
              <span className="footer__contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M21 16.7v3a2 2 0 0 1-2.2 2 19.5 19.5 0 0 1-8.5-3A19 19 0 0 1 4.4 13a19.5 19.5 0 0 1-3-8.5A2 2 0 0 1 3.4 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.4 2.1L7.4 9.7a16 16 0 0 0 6.9 6.9l1.2-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 .7 1z" />
                </svg>
              </span>
              <a href="tel:+917973611226">+91 79 7361 1226</a>
            </li>

            <li>
              <span className="footer__contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </span>
              <a href="mailto:arbajtechnologypvtltd@gmail.com">
                arbajtechnologypvtltd@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__wrap footer__bottom-inner">
          <p>© 2021–{new Date().getFullYear()} Arbaj Technology Pvt. Ltd.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
