import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import '../styles/SocialMediaMarketing.css'
import {RESULTS, SMM_SERVICES, PROCESS, WHY_US, TOOLS, FAQS} from '../components/Data/SocialData'
import SEOptimization from "../components/SEOptimization";

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



function Hero() {
  const posts = [
    { platform: "IG", likes: "2.4K", comments: "138", time: "2h ago", growth: "+12%" },
    { platform: "FB", likes: "1.8K", comments: "94", time: "5h ago", growth: "+8%" },
    { platform: "LI", likes: "940", comments: "61", time: "1d ago", growth: "+22%" },
  ];
  return (
    <section className="hero smm-hero">
      <div className="hero__grid" aria-hidden="true">
        {Array.from({ length: 80 }).map((_, i) => <span key={i} className="hero__grid-dot" />)}
      </div>
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Social Media Marketing — Arbaj Technology
        </div>
        <h1 className="hero__title">
          Build Your Brand.<br />
          <span className="hero__title-highlight">Grow Your Audience.</span>
        </h1>
        <p className="hero__desc">
          Strategic social media management that turns followers into fans and fans into customers.
          Consistent content, real engagement, and measurable growth — every single month.
        </p>
        <div className="hero__actions">
          <Link to="/contact" className="btn btn--primary">
            Get Free Social Audit
            <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" /></svg>
          </Link>
          <a href="#why-us" className="btn btn--ghost">Why Choose Us</a>
        </div>
        <div className="hero__stats">
          {[
            { number: "200+", label: "Brands Managed" },
            { number: "5×", label: "Avg. Growth" },
            { number: "30+", label: "Posts/Month" },
            { number: "98%", label: "Client Retention" },
          ].map((s) => (
            <div className="hero__stat" key={s.label}>
              <strong>{s.number}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating social feed card */}
      <div className="hero__card-wrap" aria-hidden="true">
        <div className="hero__card smm-feed-card">
          <div className="hero__card-header">
            <span className="hero__card-dot hero__card-dot--red" />
            <span className="hero__card-dot hero__card-dot--yellow" />
            <span className="hero__card-dot hero__card-dot--green" />
            <span className="hero__card-title">Social Performance</span>
          </div>

          {/* follower counter */}
          <div className="smm-followers">
            <div className="smm-followers__row">
              <span className="smm-followers__label">Total Followers</span>
              <span className="smm-followers__change">↑ 5× this month</span>
            </div>
            <div className="smm-followers__count">48,290</div>
            <div className="smm-followers__bar-wrap">
              <div className="smm-followers__bar" />
            </div>
          </div>

          {/* recent posts */}
          <div className="smm-posts">
            {posts.map((p, i) => (
              <div className="smm-post" key={i} style={{ "--delay": `${i * 0.1}s` }}>
                <div className="smm-post__platform">{p.platform}</div>
                <div className="smm-post__info">
                  <span className="smm-post__stat">❤ {p.likes}</span>
                  <span className="smm-post__stat">💬 {p.comments}</span>
                  <span className="smm-post__time">{p.time}</span>
                </div>
                <span className="smm-post__growth">{p.growth}</span>
              </div>
            ))}
          </div>

          <div className="hero__card-tags">
            <span>Instagram</span><span>Facebook</span><span>LinkedIn</span><span>YouTube</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ticker() {
  const items = ["Instagram Marketing", "Facebook Ads", "Reels & Shorts", "LinkedIn B2B", "YouTube Growth", "Meta Ads", "Content Creation", "Community Management", "Brand Strategy", "Influencer Outreach"];
  const all = [...items, ...items];
  return (
    <div className="ticker">
      <div className="ticker__track">
        {all.map((item, i) => <span key={i} className="ticker__item">{item} <span className="ticker__sep">✦</span></span>)}
      </div>
    </div>
  );
}

function Results() {
  const [ref, visible] = useReveal();
  return (
    <section className={`smm-results section ${visible ? "section--visible" : ""}`} ref={ref}>
      <div className="smm-results__grid">
        {RESULTS.map((r, i) => (
          <div className="smm-results__item" key={r.label} style={{ "--color": r.color, "--i": i }}>
            <strong className="smm-results__metric">{r.metric}</strong>
            <span className="smm-results__label">{r.label}</span>
            <div className="smm-results__bar" />
          </div>
        ))}
      </div>
    </section>
  );
}

function SMMServices() {
  const [ref, visible] = useReveal();
  return (
    <section className={`services section ${visible ? "section--visible" : ""}`} ref={ref} style={{ background: "var(--bg)" }}>
      <div className="section__label">— What We Do</div>
      <h2 className="section__title">Social Media Services<br /><span>That Build Real Brands</span></h2>
      <p className="section__sub">From Instagram Reels to LinkedIn thought leadership — we manage every platform your audience lives on.</p>
      <div className="services__grid smm-services-grid">
        {SMM_SERVICES.map((s, i) => (
          <div className="service-card" key={s.id} style={{ "--accent": s.accent, "--i": i, marginLeft: 0 }}>
            <div className="service-card__tag">{s.tag}</div>
            <div className="service-card__icon">{s.icon}</div>
            <h3 className="service-card__title">{s.title}</h3>
            <p className="service-card__desc">{s.desc}</p>
            <Link to="/contact" className="service-card__link">
              Get Started
              <svg viewBox="0 0 16 16" fill="none" width="14" height="14"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const [ref, visible] = useReveal();
  return (
    <section className={`section ${visible ? "section--visible" : ""}`} ref={ref} style={{ padding: "var(--section-pad)", background: "var(--bg-2)" }}>
      <div className="section__label">— How We Work</div>
      <h2 className="section__title">Our <span>4-Step Social Process</span></h2>
      <p className="section__sub">From zero to a thriving online community — here's how we make it happen.</p>
      <div className="smm-process">
        {PROCESS.map((step, i) => (
          <div className="smm-process__item" key={i} style={{ "--color": step.color, "--i": i }}>
            <div className="smm-process__connector" aria-hidden="true" />
            <div className="smm-process__node"><span className="smm-process__step">{step.step}</span></div>
            <div className="smm-process__card">
              <h3 className="smm-process__title">{step.title}</h3>
              <p className="smm-process__desc">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Tools() {
  const [ref, visible] = useReveal();
  return (
    <section className={`section ${visible ? "section--visible" : ""}`} ref={ref} style={{ padding: "var(--section-pad)", background: "var(--bg)" }}>
      <div className="section__label">— Our Toolkit</div>
      <h2 className="section__title">Tools We <span>Create With</span></h2>
      <p className="section__sub">Professional-grade tools that ensure your content looks premium and your campaigns perform.</p>
      <div className="smm-tools">
        {TOOLS.map((t, i) => (
          <div className="smm-tool-badge" key={t.label} style={{ "--i": i }}>
            <span className="smm-tool-badge__dot" style={{ background: t.dot, boxShadow: `0 0 8px ${t.dot}80` }} />
            {t.label}
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const [ref, visible] = useReveal();
  return (
    <section className={`section smm-why ${visible ? "section--visible" : ""}`} ref={ref} id="why-us" style={{ padding: "var(--section-pad)", background: "var(--bg-2)" }}>
      <div className="section__label">— Why Arbaj Technology</div>
      <h2 className="section__title">More Than Just<br /><span>Posting Content.</span></h2>
      <p className="section__sub">We build social media strategies that turn your profiles into powerful business growth engines.</p>
      <div className="smm-why__grid">
        {WHY_US.map((item, i) => (
          <div className="smm-why__card" key={i} style={{ "--accent": item.accent, "--i": i }}>
            <div className="smm-why__icon-wrap">
              <span className="smm-why__icon" style={{ color: item.accent }}>{item.icon}</span>
            </div>
            <div className="smm-why__body">
              <h3 className="smm-why__title">{item.title}</h3>
              <p className="smm-why__desc">{item.desc}</p>
            </div>
            <div className="smm-why__bar" style={{ background: item.accent }} />
          </div>
        ))}
      </div>
      <div className="smm-why__cta-strip">
        <p className="smm-why__cta-text">Ready to build a social media presence that actually drives business?</p>
        <Link to="/contact" className="btn btn--primary">
          Get Free Social Audit
          <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" /></svg>
        </Link>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(null);
  const [ref, visible] = useReveal();
  return (
    <section className={`faq section ${visible ? "section--visible" : ""}`} ref={ref} style={{ background: "var(--bg)" }}>
      <div className="section__label">— FAQ</div>
      <h2 className="section__title">Social Media Questions<br /><span>Answered</span></h2>
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
        <h2>Let's Grow Your Social Media Together</h2>
        <p>Get a free social media audit — we'll show you exactly how to grow faster and convert more.</p>
        <div className="cta-banner__actions">
          <Link to="/contact" className="btn btn--primary">Get Free Social Audit</Link>
          <a href="tel:+917973611226" className="btn btn--ghost btn--ghost-light">
            <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
            +91 79 7361 1226
          </a>
        </div>
      </div>
    </section>
  );
}

export default function SocialMediaPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (

    <>
      <SEOptimization
        title="Social Media Marketing Agency in India | Instagram, Facebook Ads | Arbaj Technology"
        description="Grow your brand with Arbaj Technology’s social media marketing services. We manage Instagram, Facebook, LinkedIn & YouTube to boost engagement, followers, and sales."
        keywords="social media marketing India, Instagram marketing agency, Facebook ads service, social media management India, SMM services, Arbaj Technology"
        url="https://arbajtechnologypvtltd.com/social-media-marketing"
        image="https://arbajtechnologypvtltd.com/og-smm.jpg"
      />
    <main>
      <Hero />
      <Ticker />
      <Results />
      <SMMServices />
      <Process />
      <Tools />
      <WhyChooseUs />
      <FAQ />
      <CTABanner />
    </main>
    </>
  );
}