import { useEffect, useRef, useState } from "react";
import "../styles/services.css";
import { PROCESS, SERVICES, STATS } from "../components/Data/ServicesData";
import SEOptimization from "../components/SEOptimization";

const ROTATING_SERVICES = [
  "SEO",
  "Google Ads",
  "Web Development",
  "Meta Ads",
  "Video Editing",
  "Graphic Designing",
];

const PERFORMANCE_METRICS = [
  { value: "Search", label: "Organic visibility", code: "SEO" },
  { value: "Reach", label: "Intent-focused advertising", code: "PPC" },
  { value: "Engage", label: "Audience connection", code: "SOC" },
  { value: "Convert", label: "User-focused websites", code: "WEB" },
];

const SITE_URL = "https://arbajtechnologypvtltd.com";

const SERVICES_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Digital Marketing and Web Development Services",
  url: `${SITE_URL}/services`,
  itemListElement: SERVICES.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.desc,
      url: `${SITE_URL}/services#${service.anchor}`,
      provider: {
        "@id": `${SITE_URL}/#business`,
      },
      areaServed: ["Zirakpur", "Chandigarh", "Mohali"],
    },
  })),
};

const BREADCRUMB_SCHEMA = {
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
      name: "Services",
      item: `${SITE_URL}/services`,
    },
  ],
};

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.14 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function SectionHeading({ eyebrow, title, highlight, description, align = "left" }) {
  return (
    <header className={`sv-heading sv-heading--${align}`}>
      <p className="sv-eyebrow">
        <span aria-hidden="true" />
        {eyebrow}
      </p>

      <h2 className="sv-heading__title">
        {title} <span>{highlight}</span>
      </h2>

      {description && <p className="sv-heading__description">{description}</p>}
    </header>
  );
}

function ServiceHero() {
  const [activeWord, setActiveWord] = useState(0);
  const [changing, setChanging] = useState(false);

  useEffect(() => {
    let transitionTimer;

    const interval = window.setInterval(() => {
      setChanging(true);

      transitionTimer = window.setTimeout(() => {
        setActiveWord((current) => (current + 1) % ROTATING_SERVICES.length);
        setChanging(false);
      }, 280);
    }, 2600);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(transitionTimer);
    };
  }, []);

  return (
    <section className="sv-hero">
      <div className="sv-hero__grid" aria-hidden="true" />
      <div className="sv-hero__glow sv-hero__glow--one" aria-hidden="true" />
      <div className="sv-hero__glow sv-hero__glow--two" aria-hidden="true" />

      <div className="sv-shell sv-hero__layout">
        <div className="sv-hero__copy">
          <p className="sv-hero__kicker">
            <span className="sv-hero__live" aria-hidden="true" />
            Complete Digital Marketing Solutions
          </p>

          <h1 className="sv-hero__title">
            Complete digital services for
            <span className={`sv-hero__word${changing ? " sv-hero__word--changing" : ""}`}>
              {ROTATING_SERVICES[activeWord]}
            </span>
          </h1>

          <p className="sv-hero__description">
            Result-focused digital marketing services that help businesses improve
            visibility, generate qualified leads and build a stronger online presence.
          </p>

          <div className="sv-hero__service-line" aria-label="Available services">
            {ROTATING_SERVICES.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>

          <div className="sv-hero__stats">
            {STATS.map((stat, index) => (
              <div className="sv-hero__stat" key={`${stat.label}-${index}`}>
                <strong>{stat.number}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="sv-performance" aria-label="Performance overview">
          <div className="sv-performance__topbar">
            <div>
              <span className="sv-performance__dot" />
              Growth overview
            </div>
            <span>Performance</span>
          </div>

          <div className="sv-performance__spotlight">
            <p>Strategy. Execution. Growth.</p>
            <strong>Built around measurable business outcomes.</strong>
          </div>

          <div className="sv-performance__grid">
            {PERFORMANCE_METRICS.map((metric, index) => (
              <article className="sv-performance__card" key={metric.code}>
                <div className="sv-performance__card-head">
                  <span>{metric.code}</span>
                  <em>0{index + 1}</em>
                </div>
                <strong>{metric.value}</strong>
                <p>{metric.label}</p>
                <div className="sv-performance__bar">
                  <span style={{ "--metric-width": `${64 + index * 8}%` }} />
                </div>
              </article>
            ))}
          </div>

          <div className="sv-performance__footer">
            <span>Research</span>
            <i />
            <span>Strategy</span>
            <i />
            <span>Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesShowcase() {
  const [ref, visible] = useReveal();

  return (
    <section
      className={`sv-services sv-section${visible ? " sv-section--visible" : ""}`}
      ref={ref}
    >
      <div className="sv-shell">
        <SectionHeading
          eyebrow="Our Expertise"
          title="One team. Every essential"
          highlight="digital service."
          description="We combine strategy, creativity and technology to build solutions that support every stage of your digital growth."
        />

        <div className="sv-services__grid">
          {SERVICES.map((service, index) => (
            <article
              id={service.anchor}
              className="sv-service-card"
              key={service.id}
              style={{ "--card-index": index, scrollMarginTop: "110px" }}
            >
              <div className="sv-service-card__top">
                <span className="sv-service-card__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="sv-service-card__icon" aria-hidden="true">
                  {service.icon}
                </span>
              </div>

              <p className="sv-service-card__tag">{service.tag}</p>
              <h3>{service.title}</h3>
              <p className="sv-service-card__description">{service.desc}</p>

              <div className="sv-service-card__divider" />

              <div className="sv-service-card__details">
                <div>
                  <span>Expected outcome</span>
                  <strong>{service.result}</strong>
                </div>

                <ul>
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <span aria-hidden="true">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const [ref, visible] = useReveal();

  return (
    <section
      className={`sv-process sv-section${visible ? " sv-section--visible" : ""}`}
      ref={ref}
    >
      <div className="sv-shell">
        <SectionHeading
          eyebrow="How We Work"
          title="A focused process from idea to"
          highlight="measurable growth."
          description="Every project follows a clear system, so you always know what we are doing, why we are doing it and what comes next."
        />

        <div className="sv-process__track">
          {PROCESS.map((step, index) => (
            <article
              className="sv-process__step"
              key={`${step.step}-${step.title}`}
              style={{ "--step-index": index }}
            >
              <div className="sv-process__marker">
                <span>{step.step || String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className="sv-process__content">
                <span className="sv-process__icon" aria-hidden="true">
                  {step.icon}
                </span>
                <p>Phase {String(index + 1).padStart(2, "0")}</p>
                <h3>{step.title}</h3>
                <span>{step.desc}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingStatement() {
  const [ref, visible] = useReveal();

  return (
    <section
      className={`sv-closing sv-section${visible ? " sv-section--visible" : ""}`}
      ref={ref}
    >
      <div className="sv-shell">
        <div className="sv-closing__panel">
          <p className="sv-eyebrow">
            <span aria-hidden="true" />
            Built for Long-Term Growth
          </p>
          <h3>Clear strategy. Thoughtful execution. Results you can measure.</h3>
          <p>
            From visibility and lead generation to design and development, Arbaj
            Technology brings your essential digital services together under one roof.
          </p>

          <div className="sv-closing__chips">
            {ROTATING_SERVICES.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicePage() {
  return (
    <>
      <SEOptimization
        title="Digital Marketing Services in Zirakpur | Arbaj Technology"
        description="Explore SEO, Google Ads, social media marketing, website development, graphic design and video editing services from Arbaj Technology in Zirakpur."
        url="https://arbajtechnologypvtltd.com/services"
        schema={[SERVICES_SCHEMA, BREADCRUMB_SCHEMA]}
      />

      <div className="sv-page">
        <main>
          <ServiceHero />
          <ServicesShowcase />
          <ProcessSection />
          <ClosingStatement />
        </main>
      </div>
    </>
  );
}

