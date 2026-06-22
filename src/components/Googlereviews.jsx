// GoogleReviews.jsx
// Import: import GoogleReviews from "./GoogleReviews";
// CSS:    import '../styles/google-reviews.css';
// Place:  <GoogleReviews /> in HomePage after <About />

import { useRef, useState, useEffect } from "react";

const REVIEWS = [
  {
    name: "shive Kumar",
    date: "July 19, 2026",
    rating: 5,
    text: "Best digital marketing agency I've worked with. Social media management aur ad campaigns ke results bahut acche rahe..",
    initials: "S",
    color: "#1a73e8",
  },
  {
    name: "Abhishek Bhandari",
    date: "July 19, 2026",
    rating: 5,
    text: "Professional team, great communication, and excellent results. Highly recommend this digital marketing agency.",
    initials: "A",
    color: "#6d4c41",
  },
  {
    name: "Anup Kumar",
    date: "July 19, 2026",
    rating: 5,
    text: "Great experience working with the team. They provided effective digital marketing strategies and helped grow our business online.",
    initials: "A",
    color: "#4a4a4a",
  },
  {
    name: "Sameer Rajput",
    date: "June 18, 2026",
    rating: 5,
    text: "A top digital marketing agency with a skilled team. Their Google Ads campaigns generated quality leads and improved our online visibility.",
    initials: "S",
    color: "#e91e63",
  },
  {
    name: "Paawan Sharma",
    date: "June 17, 2026",
    rating: 5,
    text: "Excellent website development and digital marketing services. The team understood our requirements perfectly and delivered beyond expectations.",
    initials: "P",
    color: "#1565c0",
  },
  {
    name: "Akshay Kumar",
    date: "June 7, 2026",
    rating: 5,
    text: "Arbaj Technology is the best digital marketing company I have worked with. Their SEO and Google Ads strategies helped my business get more leads and better online visibility. The team is professional, responsive, and delivers real results. Highly recommended for anyone looking for a top digital marketing agency.",
    initials: "K",
    color: "#37474f",
  },
  {
    name: "Rahul Singh",
    date: "May 24, 2026",
    rating: 5,
    text: "Arbaj Technology is the best digital marketing company. Professional team, excellent service, and great results. Highly recommended!",
    initials: "R",
    color: "#2e7d32",
  },
  {
    name: "R M K Memer",
    date: "March 20, 2026",
    rating: 5,
    text: "If you are looking for Facebook Ads services in Zirakpur, I highly recommend Arbaj Technology. They provide result-oriented marketing solutions at reasonable prices.",
    initials: "R",
    color: "#7b1fa2",
  },
  {
    name: "ITS Vinod",
    date: "November 10, 2025",
    rating: 5,
    text: "Arbaj Technology is reliable and creative in digital marketing solutions. Excellent service and great results every time!",
    initials: "I",
    color: "#e65100",
  },
  {
    name: "Krishna Goswami",
    date: "October 25, 2025",
    rating: 5,
    text: "Arbaj Technology is a professional and reliable digital marketing company that delivers excellent results. Their creative team helps businesses grow online with smart strategies and great support. Highly recommended!",
    initials: "K",
    color: "#00695c",
  },
];

function StarRating({ count = 5 }) {
  return (
    <div className="gr-stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" width="16" height="16"
          style={{ fill: i < count ? "#f4b400" : "#e0e0e0" }}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleColorIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function GoogleTextLogo() {
  return (
    <svg viewBox="0 0 75 24" width="75" height="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.428 10.088c0-4.185 3.385-7.57 7.57-7.57 2.038 0 3.752.75 5.07 1.977L13.45 6.13c-.9-.856-2.125-1.37-3.452-1.37-2.857 0-5.178 2.32-5.178 5.178 0 2.858 2.321 5.178 5.178 5.178 2.09 0 3.484-.9 4.29-1.706.667-.667 1.1-1.624 1.267-2.93H9.998V8.74h7.39c.083.44.125.912.125 1.43 0 1.787-.49 4.003-2.068 5.582-1.536 1.6-3.497 2.454-6.037 2.454-4.185 0-7.57-3.385-7.57-7.57L2.428 10.088z" fill="#4285F4" />
      <path d="M30.003 10.088c0 3.01-2.357 5.227-5.24 5.227-2.882 0-5.24-2.217-5.24-5.227 0-3.032 2.358-5.227 5.24-5.227 2.883 0 5.24 2.195 5.24 5.227zm-2.293 0c0-1.88-1.365-3.168-2.947-3.168-1.582 0-2.947 1.288-2.947 3.168 0 1.858 1.365 3.168 2.947 3.168 1.582 0 2.947-1.31 2.947-3.168z" fill="#EA4335" />
      <path d="M41.255 10.088c0 3.01-2.356 5.227-5.24 5.227-2.882 0-5.24-2.217-5.24-5.227 0-3.032 2.358-5.227 5.24-5.227 2.884 0 5.24 2.195 5.24 5.227zm-2.293 0c0-1.88-1.365-3.168-2.947-3.168-1.582 0-2.947 1.288-2.947 3.168 0 1.858 1.365 3.168 2.947 3.168 1.582 0 2.947-1.31 2.947-3.168z" fill="#FBBC05" />
      <path d="M51.994 5.153v9.514c0 3.914-2.31 5.513-5.038 5.513-2.572 0-4.117-1.72-4.7-3.126l1.997-.832c.362.864 1.245 1.88 2.703 1.88 1.77 0 2.865-1.093 2.865-3.148v-.77h-.08c-.527.65-1.543 1.22-2.824 1.22-2.682 0-5.137-2.337-5.137-5.34 0-3.024 2.455-5.34 5.137-5.34 1.28 0 2.296.57 2.825 1.2h.08V5.153h2.172zm-2.01 4.957c0-1.857-1.24-3.21-2.823-3.21-1.603 0-2.947 1.353-2.947 3.21 0 1.836 1.344 3.168 2.947 3.168 1.583 0 2.824-1.332 2.824-3.168z" fill="#4285F4" />
      <path d="M55.468 1v14.016H53.21V1h2.258z" fill="#34A853" />
      <path d="M63.965 11.876l1.8 1.2c-.58.857-1.98 2.24-4.403 2.24-3.002 0-5.24-2.323-5.24-5.228 0-3.11 2.258-5.227 4.98-5.227 2.743 0 4.085 2.158 4.525 3.327l.24.6-7.055 2.92c.54 1.06 1.38 1.6 2.55 1.6 1.173 0 1.988-.578 2.603-1.432zm-5.537-1.9l4.712-1.957c-.258-.66-1.038-1.116-1.956-1.116-1.175 0-2.81 1.036-2.756 3.073z" fill="#EA4335" />
    </svg>
  );
}

function VerifiedBadge() {
  return (
    <svg viewBox="0 0 20 20" width="15" height="15">
      <circle cx="10" cy="10" r="10" fill="#4285F4" />
      <path d="M6 10l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export default function GoogleReviews() {
  const trackRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [expanded, setExpanded] = useState({});

  const CARD_W = 280 + 12;

  const update = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    update();
    return () => el.removeEventListener("scroll", update);
  }, []);

  const scroll = (dir) => {
    trackRef.current?.scrollBy({ left: dir * CARD_W * 1, behavior: "smooth" });
  };

  const toggleExpand = (i) => setExpanded((p) => ({ ...p, [i]: !p[i] }));

  return (
    <section className="gr-section page-section">
      <div className="gr-inner">

        {/* ── Left: Rating Summary ── */}
        <div className="gr-summary">
          <p className="gr-summary__excellent">EXCELLENT</p>
          <StarRating count={5} />
          <p className="gr-summary__count">Based on <strong>29 reviews</strong></p>
          <div className="gr-summary__glogo">
            <GoogleTextLogo />
          </div>
        </div>

        {/* ── Right: Slider with arrows ── */}
        <div className="gr-slider-wrap">
          <button
            className={`gr-arrow gr-arrow--prev ${canPrev ? "" : "gr-arrow--hidden"}`}
            onClick={() => scroll(-1)}
            aria-label="Previous"
          >
            <svg viewBox="0 0 20 20" width="18" height="18" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>

          <div className="gr-track" ref={trackRef}>
            {REVIEWS.map((r, i) => {
              const isLong = r.text.length > 100;
              const showFull = expanded[i];
              return (
                <div className="gr-card" key={i}>
                  <div className="gr-card__top">
                    <div className="gr-card__avatar" style={{ background: r.color }}>
                      {r.initials}
                    </div>
                    <div className="gr-card__meta">
                      <p className="gr-card__name">{r.name}</p>
                      <p className="gr-card__date">{r.date}</p>
                    </div>
                    <div className="gr-card__gicon">
                      <GoogleColorIcon />
                    </div>
                  </div>

                  <div className="gr-card__rating">
                    <StarRating count={r.rating} />
                    <VerifiedBadge />
                  </div>

                  <p className="gr-card__text">
                    {isLong && !showFull ? r.text.slice(0, 98) + "…" : r.text}
                  </p>
                  {isLong && (
                    <button className="gr-card__readmore" onClick={() => toggleExpand(i)}>
                      {showFull ? "Show less" : "Read more"}
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          <button
            className={`gr-arrow gr-arrow--next ${canNext ? "" : "gr-arrow--hidden"}`}
            onClick={() => scroll(1)}
            aria-label="Next"
          >
            <svg viewBox="0 0 20 20" width="18" height="18" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}