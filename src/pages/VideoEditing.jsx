import { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import '../styles/VideoEditing.css';
import { STATS, PROCESS, VE_SERVICES, TOOLS, FAQS } from '../components/Data/EditingData';
import SEOptimization from "../components/SEOptimization";


function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function Hero() {
  const timelineItems = useMemo(() => [
    { label: "Hook", w: 12, color: "#ff3b5c" },
    { label: "B-Roll", w: 22, color: "#f4a200" },
    { label: "Voiceover", w: 30, color: "#1d7afc" },
    { label: "Music", w: 60, color: "#a855f7" },
    { label: "Color Grade", w: 45, color: "#22c55e" },
    { label: "SFX", w: 18, color: "#ff3b5c" },
  ], []);

  // FIX: Widths ko direct state me hi initialize karein random values ke sath
  // Isse useEffect wala synchronous error khatam ho jayega
  const [widths] = useState(() =>
    timelineItems.map(item => item.w + Math.floor(Math.random() * 20))
  );

  return (
    <section className="hero ve-hero">
      <div className="hero__grid" aria-hidden="true">
        {Array.from({ length: 80 }).map((_, i) => (
          <span key={i} className="hero__grid-dot" />
        ))}
      </div>
      <div className="hero__orb ve-orb--1" aria-hidden="true" />
      <div className="hero__orb ve-orb--2" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" style={{ background: "#ff3b5c" }} />
          Video Editing — Arbaj Technology
        </div>

        <h1 className="hero__title">
          Videos That Stop<br />
          <span className="ve-title-highlight">The Scroll Dead.</span>
        </h1>

        <p className="hero__desc">
          From 15-second Reels to full brand films — we edit, colour grade, and deliver professional videos that capture attention.
        </p>

        <div className="hero__actions">
          <Link to="/contact" className="btn btn--primary ve-btn--primary">
            Get a Free Sample Edit
            <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          </Link>
          <a href="#services" className="btn btn--ghost">See Our Work</a>
        </div>

        <div className="hero__stats">
          {[
            { number: "1000+", label: "Videos Edited" },
            { number: "48h", label: "Turnaround" },
            { number: "4.9★", label: "Client Rating" },
            { number: "100%", label: "Satisfaction" },
          ].map((s) => (
            <div className="hero__stat" key={s.label}>
              <strong>{s.number}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__card-wrap" aria-hidden="true">
        <div className="hero__card ve-editor-card">
          <div className="hero__card-header">
            <span className="hero__card-dot hero__card-dot--red" />
            <span className="hero__card-dot hero__card-dot--yellow" />
            <span className="hero__card-dot hero__card-dot--green" />
            <span className="hero__card-title">timeline.prproj</span>
          </div>

          <div className="ve-preview">
            <div className="ve-preview__screen">
              <div className="ve-preview__play">▶</div>
              <span className="ve-preview__duration">00:00:31:08</span>
            </div>
          </div>

          <div className="ve-timeline">
            {timelineItems.map((item, i) => (
              <div className="ve-track" key={item.label} style={{ "--delay": `${i * 0.1}s` }}>
                <span className="ve-track__label">{item.label}</span>
                <div className="ve-track__bar-wrap">
                  <div
                    className="ve-track__bar"
                    style={{
                      width: `${widths[i]}%`,
                      background: item.color,
                      marginLeft: `${i * 4}%`,
                      transition: 'width 1s ease-out'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="hero__card-tags">
            <span>Reels</span><span>Ads</span><span>Films</span><span>Motion</span>
          </div>
        </div>
      </div>
    </section>
  );
}


function Ticker() {
  const items = ["Reels", "YouTube", "Brand Films", "Ad Videos", "Motion Graphics", "Color Grading", "Podcast Editing", "Shorts", "Subtitles", "Thumbnails"];
  return (
    <div className="ticker">
      <div className="ticker__track">
        {[...items, ...items].map((item, i) => (
          <span key={`${item}-${i}`} className="ticker__item">
            {item} <span className="ticker__sep" style={{ color: "#ff3b5c" }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}


function VEServices() {
  const [ref, visible] = useReveal();
  return (
    <section className={`services section ${visible ? "section--visible" : ""}`} ref={ref} id="services">
      <div className="section__label">— What We Edit</div>
      <h2 className="section__title">Every Format.<br /><span>Every Platform. Every Brand.</span></h2>
      <div className="services__grid ve-services-grid">
        {VE_SERVICES.map((s, i) => (
          <div className="service-card" key={s.id || i} style={{ "--accent": s.accent, "--i": i }}>
            <div className="service-card__tag">{s.tag}</div>
            <div className="service-card__icon">{s.icon}</div>
            <h3 className="service-card__title">{s.title}</h3>
            <p className="service-card__desc">{s.desc}</p>
            <Link to="/contact" className="service-card__link">
              Get a Quote
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


export default function VideoEditingPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (

    <>
      <SEOptimization
        title="Professional Video Editing Services | Creative Experts"
        description="Get high-quality video editing services for YouTube, reels, ads, and social media. We create engaging, professional videos to grow your brand."
        keywords="Video Editing, video editing services India, reels editing, YouTube video editor, ad video editing, motion graphics India, color grading services, Arbaj Technology"
        url="https://arbajtechnologypvtltd.com/video"
        image="https://arbajtechnologypvtltd.com/og-video.jpg"
      />
    <main className="ve-page-wrapper">


      <Hero />
      <Ticker />
      <VEServices />
    </main>
    </>
  );
}