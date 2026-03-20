import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { POSTS } from "./Blog";
import "../styles/Blogpost.css";

function parseInline(text) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return <a key={i} href={linkMatch[2]} target="_blank" rel="noopener noreferrer" className="bp-content__link">{linkMatch[1]}</a>;
    }
    return part;
  });
}

function renderContent(raw) {
  const lines = raw.trim().split("\n");
  const elements = [];
  let key = 0;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    if (line.startsWith("## ")) {
      elements.push(<h2 key={key++} className="bp-content__h2">{line.slice(3)}</h2>);
    } else if (line.startsWith("**") && line.endsWith("**") && line.length > 4) {
      elements.push(<p key={key++} className="bp-content__bold-line"><strong>{line.slice(2, -2)}</strong></p>);
    } else {
      elements.push(<p key={key++} className="bp-content__p">{parseInline(line)}</p>);
    }
  }
  return elements;
}

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = POSTS.find(p => String(p.id) === String(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="bp-notfound">
        <h2>Article not found</h2>
        <Link to="/blog" className="bp-back">← Back to Blog</Link>
      </div>
    );
  }

  const related = POSTS.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <div className="bp-wrap">
      <div className="bp-hero">
        <div className="bp-hero__img-wrap">
          <img src={post.img} alt={post.title} className="bp-hero__img" />
          <div className="bp-hero__overlay" />
        </div>
        <div className="bp-hero__content">
          <button className="bp-back" onClick={() => navigate(-1)}>
            <svg viewBox="0 0 12 12" fill="none" width="12">
              <path d="M10 6H2M5 3L2 6l3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Blog
          </button>
          <div className="bp-hero__meta">
            <span>{post.date}</span>
            <span className="bp-hero__dot" />
            <span>{post.readTime}</span>
          </div>
          <h1 className="bp-hero__title">{post.title}</h1>
          <p className="bp-hero__excerpt">{post.excerpt}</p>
        </div>
      </div>

      <main className="bp-main">
        <article className="bp-content">
          {renderContent(post.content)}
        </article>

        {related.length > 0 && (
          <section className="bp-related">
            <h3 className="bp-related__heading">More Articles</h3>
            <div className="bp-related__grid">
              {related.map(r => (
                <Link to={`/blog/${r.id}`} key={r.id} className="bp-related__card">
                  <div className="bp-related__img-wrap">
                    <img src={r.img} alt={r.title} className="bp-related__img" loading="lazy" />
                  </div>
                  <div className="bp-related__body">
                    <div className="bp-related__meta">
                      <span>{r.date}</span>
                      <span className="bp-related__dot" />
                      <span>{r.readTime}</span>
                    </div>
                    <h4 className="bp-related__title">{r.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}