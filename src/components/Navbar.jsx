import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";
import Logo from "../assets/Artboard lg.png";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Blog", path: "/blog" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <header className={`navbar-wrap ${scrolled ? "navbar-wrap--scrolled" : ""}`}>
      <nav className="navbar" aria-label="Main navigation">
        <span className="navbar__line" aria-hidden="true" />

        <Link to="/" className="navbar__logo" aria-label="Arbaj Technology home">
          <img src={Logo} alt="Arbaj Technology" width="160" height="50" />
        </Link>

        <ul
          id="primary-navigation"
          className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}
        >
          {NAV_LINKS.map((item, index) => (
            <li className="navbar__link-item" style={{ "--li": index }} key={item.path}>
              <Link to={item.path} className={isActive(item.path) ? "active" : ""}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={`navbar__burger ${menuOpen ? "navbar__burger--open" : ""}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <button
        type="button"
        className={`navbar__backdrop ${menuOpen ? "navbar__backdrop--show" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-label="Close navigation menu"
        tabIndex={menuOpen ? 0 : -1}
      />
    </header>
  );
}
