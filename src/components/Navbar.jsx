import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import '../styles/navbar.css';
import Logo from '../assets/A-logo.png';

const SERVICE_LINKS = [
  {
    label: "Web Development",
    path: "/web",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" width="18" height="18">
        <rect x="2" y="3" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 7h16" stroke="currentColor" strokeWidth="1.2" opacity=".5" />
        <path d="M6 17h8M8 13v4M12 13v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    desc: "React, WordPress, Web Apps",
    accent: "#00d4ff",
  },
  {
    label: "Graphic Designing",
    path: "/graphic",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" width="18" height="18">
        <circle cx="7" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="13" cy="13" r="4" stroke="currentColor" strokeWidth="1.5" opacity=".7" />
        <path d="M7 7h6" stroke="currentColor" strokeWidth="1.2" opacity=".4" />
      </svg>
    ),
    desc: "Logos, Social Media, Print",
    accent: "#ff6b6b",
  },
  {
    label: "Video Editing",
    path: "/video",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" width="18" height="18">
        <rect x="1" y="4" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15 8l4-2v8l-4-2V8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    desc: "Reels, Ads, Brand Films",
    accent: "#ff3b5c",
  },
  {
    label: "Digital Marketing",
    path: "/marketing",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" width="18" height="18">
        <path d="M2 14l4-5 4 3 4-6 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="5" r="2.5" fill="currentColor" opacity=".4" />
      </svg>
    ),
    desc: "SEO, Google Ads, Social",
    accent: "#22c55e",
  },
  {
    label: "Search Engine Optimization",
    path: "/seo",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="18" height="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <polyline points="8 11 10 9 12 11 16 7" />
      </svg>
    ),
    desc: "Rankings, Traffic, Growth",
    accent: "#f59e0b",
  },
  {
    label: "Social Media Marketing",
    path: "/social",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="18" height="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
    desc: "Instagram, Facebook, LinkedIn",
    accent: "#a855f7",
  },
  {
    label: "Google Ads",
    path: "/google",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="18" height="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
        <path d="M7 15l1.5-5L10 15M7.5 13.5h2M13 10v5a3 3 0 0 0 6 0v-5" />
      </svg>
    ),
    desc: "PPC, Display, Shopping",
    accent: "#fb923c",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [navMounted, setNavMounted] = useState(false);

  const wrapRef = useRef(null);
  const closeTimer = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  /* ── mount animation ── */
  useEffect(() => {
    const t = setTimeout(() => setNavMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  /* ── hover helpers with debounce ── */
  const openDropdown = useCallback(() => {
    clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  }, []);

  const closeDropdown = useCallback(() => {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 200);
  }, []);

  /* ── Services click: navigate + toggle dropdown ── */
  const handleServicesClick = useCallback(() => {
    navigate("/services");
    setDropdownOpen(p => !p);
  }, [navigate]);

  /* ── dropdown item click: close dropdown cleanly ── */
  const handleItemClick = useCallback(() => {
    clearTimeout(closeTimer.current);
    setDropdownOpen(false);
  }, []);

  /* scroll */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* close on route change */
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
    setMobileServicesOpen(false);
    clearTimeout(closeTimer.current);
  }, [location.pathname]);

  /* body scroll lock */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* outside click closes dropdown */
  useEffect(() => {
    const fn = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  /* keyboard: Escape closes everything */
  useEffect(() => {
    const fn = (e) => {
      if (e.key === "Escape") {
        setDropdownOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, []);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const isServiceActive =
    SERVICE_LINKS.some(s => location.pathname === s.path) || location.pathname === "/services";

  return (
    <>
      <div className={`navbar-wrap ${scrolled ? "navbar-wrap--scrolled" : ""} ${navMounted ? "navbar-wrap--mounted" : ""}`}>
        <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>

          {/* shimmer line at top */}
          <span className="navbar__shimmer" aria-hidden="true" />

          {/* LOGO */}
          <Link to="/" className="navbar__logo">
            <img src={Logo} alt="Arbaj Technology" className="logo" />
          </Link>

          {/* ── DESKTOP + MOBILE DRAWER LINKS ── */}
          <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>

            <li className="navbar__link-item" style={{ "--li": 0 }}>
              <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
            </li>

            {/* ── SERVICES ── */}
            <li
              className="navbar__dropdown-wrap navbar__link-item"
              style={{ "--li": 1 }}
              ref={wrapRef}
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              {/* Desktop trigger */}
              <button
                className={`navbar__dropdown-trigger ${isServiceActive ? "active" : ""}`}
                onClick={handleServicesClick}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
              >
                Services
                <svg
                  className={`navbar__chevron ${dropdownOpen ? "navbar__chevron--open" : ""}`}
                  viewBox="0 0 12 12" fill="none" width="11" height="11"
                >
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Desktop dropdown panel */}
              <div
                className={`navbar__dropdown ${dropdownOpen ? "navbar__dropdown--open" : ""}`}
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
                aria-hidden={!dropdownOpen}
                role="menu"
              >
                {/* invisible bridge covers the gap between trigger and panel */}
                <div className="navbar__dropdown-bridge" />
                <div className="navbar__dropdown-inner">
                  <p className="navbar__dropdown-header">Our Services</p>
                  <div className="navbar__dropdown-grid">
                    {SERVICE_LINKS.map((s, i) => (
                      <Link
                        key={s.path}
                        to={s.path}
                        className={`navbar__dropdown-item ${location.pathname === s.path ? "navbar__dropdown-item--active" : ""}`}
                        style={{ "--item-accent": s.accent, "--item-i": i }}
                        onClick={handleItemClick}
                        role="menuitem"
                      >
                        <span className="navbar__dropdown-icon">{s.icon}</span>
                        <span className="navbar__dropdown-text">
                          <span className="navbar__dropdown-label">{s.label}</span>
                          <span className="navbar__dropdown-desc">{s.desc}</span>
                        </span>
                        <svg className="navbar__dropdown-arrow" viewBox="0 0 12 12" fill="none" width="10">
                          <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile accordion */}
              <div className="navbar__mobile-services">
                <button
                  className={`navbar__mobile-services-toggle ${isServiceActive ? "active" : ""}`}
                  onClick={() => setMobileServicesOpen(p => !p)}
                  aria-expanded={mobileServicesOpen}
                >
                  Services
                  <svg
                    className={`navbar__chevron ${mobileServicesOpen ? "navbar__chevron--open" : ""}`}
                    viewBox="0 0 12 12" fill="none" width="11" height="11"
                  >
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className={`navbar__mobile-services-list ${mobileServicesOpen ? "navbar__mobile-services-list--open" : ""}`}>
                  <Link
                    to="/services"
                    className={`navbar__mobile-service-item ${location.pathname === "/services" ? "active" : ""}`}
                    style={{ "--item-accent": "#1d7afc" }}
                  >
                    <span className="navbar__mobile-service-dot" style={{ background: "#1d7afc" }} />
                    All Services
                  </Link>
                  {SERVICE_LINKS.map((s) => (
                    <Link
                      key={s.path}
                      to={s.path}
                      className={`navbar__mobile-service-item ${location.pathname === s.path ? "active" : ""}`}
                      style={{ "--item-accent": s.accent }}
                    >
                      <span className="navbar__mobile-service-dot" style={{ background: s.accent }} />
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            <li className="navbar__link-item" style={{ "--li": 2 }}>
              <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link>
            </li>

            <li className="navbar__link-item" style={{ "--li": 3 }}>
              <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link>
            </li>

            {/* CTA inside mobile drawer */}
            <li className="navbar__links-cta">
              <Link to="/contact" className="navbar__cta">Get Free Consultation</Link>
            </li>
          </ul>

          {/* Desktop CTA */}
          <Link to="/contact" className="navbar__cta navbar__cta--desktop">
            Get Free Consultation
          </Link>

          {/* Burger */}
          <button
            className={`navbar__burger ${menuOpen ? "navbar__burger--open" : ""}`}
            onClick={() => setMenuOpen(p => !p)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </nav>
      </div>

      {menuOpen && (
        <div
          className="navbar__backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}