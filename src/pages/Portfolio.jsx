import { useState, useEffect, useRef } from "react";
import "../styles/home.css";
import "../styles/portfolio.css";
import SEOptimization from "../components/SEOptimization";
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_PROJECTS,
} from "../components/Data/PortfolioData";



const SITE_URL = "https://arbajtechnologypvtltd.com";

const PORTFOLIO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Arbaj Technology Portfolio",
  url: `${SITE_URL}/portfolio`,
  numberOfItems: PORTFOLIO_PROJECTS.length,
  itemListElement: PORTFOLIO_PROJECTS.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CreativeWork",
      "@id": `${SITE_URL}/portfolio#project-${project.id}`,
      name: project.title,
      description: project.description,
      image: `${SITE_URL}${project.image}`,
      dateCreated: project.year,
      creator: {
        "@id": `${SITE_URL}/#business`,
      },
    },
  })),
};

const PORTFOLIO_BREADCRUMB_SCHEMA = {
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
      name: "Portfolio",
      item: `${SITE_URL}/portfolio`,
    },
  ],
};

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function ProjectRow({ project, index }) {
  const [ref, visible] = useReveal();
  const reversed = index % 2 === 1;

  return (
    <article
      id={`project-${project.id}`}
      ref={ref}
      className={`portfolio-row fade-up ${visible ? "fade-up--show" : ""
        } ${reversed ? "portfolio-row--reverse" : ""}`}
    >
      <div className="portfolio-row__media">
        <span className="portfolio-row__number">
          {String(index + 1).padStart(2, "0")}
        </span>

        <img
          src={project.image}
          alt={`${project.title} project`}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="portfolio-row__content">
        <div className="portfolio-row__meta">
          <span className="portfolio-row__tag">{project.category}</span>
          <span className="portfolio-row__year">{project.year}</span>
        </div>

        <h2 className="portfolio-row__title">{project.title}</h2>

        <p className="portfolio-row__client">{project.client}</p>

        <p className="portfolio-row__desc">{project.description}</p>

        {project.review && (
          <blockquote className="portfolio-row__review">
            <span className="portfolio-row__quote-mark" aria-hidden="true">
              &ldquo;
            </span>
            {project.review}
          </blockquote>
        )}

        {project.services?.length > 0 && (
          <div className="portfolio-row__services">
            {project.services.map((service) => (
              <span key={service} className="portfolio-row__service-tag">
                {service}
              </span>
            ))}
          </div>
        )}

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-row__link"
          >
            View Project
            <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [headRef, headVisible] = useReveal();

  const filteredProjects =
    activeCategory === "All"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((project) =>
        project.services?.includes(activeCategory)
      );

  return (
    <>
      <SEOptimization
        title="Our Digital Marketing Portfolio | Arbaj Technology"
        description="View our digital marketing projects including SEO, web development, social media marketing, video editing and paid ads. Call +91 79 7361 1226."
        url="https://arbajtechnologypvtltd.com/portfolio"
        schema={[PORTFOLIO_SCHEMA, PORTFOLIO_BREADCRUMB_SCHEMA]}
      />

      <main>
        <section
          className={`portfolio-header bleed-bg page-section fade-up ${headVisible ? "fade-up--show" : ""
            }`}
          ref={headRef}
        >
          <div className="label-tag">Our Selected Work</div>

          <h1 className="block-title">
            Work That <em>Speaks for Itself</em>
          </h1>

          <p className="block-subtitle">
            Explore creative, strategic, and result-driven projects built to
            help brands stand out, connect with their audience, and grow online.
          </p>
        </section>

        <section className="portfolio-filter page-section">
          <div className="portfolio-filter__row">
            {PORTFOLIO_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                className={`portfolio-filter__btn ${activeCategory === category
                  ? "portfolio-filter__btn--active"
                  : ""
                  }`}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="portfolio-list-sec page-section">
          {filteredProjects.length === 0 ? (
            <div className="portfolio-empty">
              <span>Nothing here yet.</span>
              <p>
                No projects are available in this category right now. Please
                check another service.
              </p>
            </div>
          ) : (
            <div className="portfolio-list">
              {filteredProjects.map((project, index) => (
                <ProjectRow
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
}
