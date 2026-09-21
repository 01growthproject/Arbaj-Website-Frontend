import { Link, useParams } from "react-router-dom";
import SEOptimization from "../components/SEOptimization";
import { POSTS } from "../components/Post/Post";
import "../styles/Blogpost.css";

const SITE_URL = "https://arbajtechnologypvtltd.com";

function toSlug(value = "") {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function toISODate(value = "") {
  const months = {
    january: "01",
    february: "02",
    march: "03",
    april: "04",
    may: "05",
    june: "06",
    july: "07",
    august: "08",
    september: "09",
    october: "10",
    november: "11",
    december: "12",
  };

  const [day, month, year] = value.trim().split(/\s+/);
  const monthNumber = months[month?.toLowerCase()];

  if (!day || !monthNumber || !year) return undefined;
  return `${year}-${monthNumber}-${day.padStart(2, "0")}`;
}

function plainText(value = "") {
  return value
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*#•]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getReadTime(post) {
  if (post.readTime) return post.readTime;

  const words = (post.content || [])
    .filter((block) => block.type === "text")
    .map((block) => plainText(block.value))
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;

  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

function absoluteImage(image) {
  if (!image) return `${SITE_URL}/lg.webp`;
  if (/^https?:\/\//i.test(image)) return image;
  return `${SITE_URL}${image.startsWith("/") ? image : `/${image}`}`;
}

function renderInline(value) {
  const tokens = value.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g);

  return tokens.filter(Boolean).map((token, index) => {
    const linkMatch = token.match(/^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      const external = !href.startsWith(SITE_URL);

      return (
        <a
          href={href}
          key={`${href}-${index}`}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {label}
        </a>
      );
    }

    const boldMatch = token.match(/^\*\*([^*]+)\*\*$/);
    if (boldMatch) {
      return <strong key={`strong-${index}`}>{boldMatch[1]}</strong>;
    }

    return token;
  });
}

function TextBlock({ value }) {
  const lines = value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const elements = [];
  let listItems = [];
  let listType = null;

  const flushList = () => {
    if (listItems.length === 0) return;

    const ListTag = listType === "ol" ? "ol" : "ul";
    elements.push(
      <ListTag key={`list-${elements.length}`}>
        {listItems.map((item, index) => (
          <li key={`${item}-${index}`}>{renderInline(item)}</li>
        ))}
      </ListTag>
    );

    listItems = [];
    listType = null;
  };

  lines.forEach((line) => {
    if (line.startsWith("### ")) {
      flushList();
      elements.push(
        <h3 key={`heading-${elements.length}`}>
          {renderInline(line.slice(4))}
        </h3>
      );
      return;
    }

    if (line.startsWith("## ")) {
      flushList();
      elements.push(
        <h2 key={`heading-${elements.length}`}>
          {renderInline(line.slice(3))}
        </h2>
      );
      return;
    }

    const orderedMatch = line.match(/^\d+\.\s+(.*)$/);
    if (orderedMatch) {
      if (listType && listType !== "ol") flushList();
      listType = "ol";
      listItems.push(orderedMatch[1]);
      return;
    }

    const unorderedMatch = line.match(/^(?:•|-)\s+(.*)$/);
    if (unorderedMatch) {
      if (listType && listType !== "ul") flushList();
      listType = "ul";
      listItems.push(unorderedMatch[1]);
      return;
    }

    flushList();

    const standaloneBold = line.match(/^\*\*([^*]+)\*\*:?$/);
    if (standaloneBold) {
      elements.push(
        <h3 key={`subheading-${elements.length}`}>{standaloneBold[1]}</h3>
      );
      return;
    }

    elements.push(
      <p key={`paragraph-${elements.length}`}>{renderInline(line)}</p>
    );
  });

  flushList();
  return elements;
}

export default function BlogPost() {
  const { slug } = useParams();

  const post = POSTS.find((item) => (item.slug || toSlug(item.title)) === slug);

  if (!post) {
    return (
      <>
        <SEOptimization
          title="Article Not Found | Arbaj Technology"
          description="The requested article could not be found."
          url={`${SITE_URL}/blog/${slug || "not-found"}`}
          noindex
        />

        <main className="bp-not-found">
          <p>404</p>
          <h1>Article not found</h1>
          <span>The article may have been moved or its URL may be incorrect.</span>
          <Link to="/blog">Back to Blog</Link>
        </main>
      </>
    );
  }

  const postSlug = post.slug || toSlug(post.title);
  const canonicalUrl = `${SITE_URL}/blog/${postSlug}`;
  const publishedDate = post.dateISO || toISODate(post.date);
  const description = plainText(post.excerpt).slice(0, 160);
  const imageUrl = absoluteImage(post.img);
  const readTime = getReadTime(post);
  const author = post.author || "Arbaj Technology Editorial Team";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description,
    image: imageUrl,
    datePublished: publishedDate,
    dateModified: post.modifiedDate || publishedDate,
    mainEntityOfPage: canonicalUrl,
    author: {
      "@type": "Organization",
      name: author,
      url: SITE_URL,
    },
    publisher: {
      "@id": `${SITE_URL}/#business`,
    },
    inLanguage: "en-IN",
  };

  const breadcrumbSchema = {
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
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: canonicalUrl,
      },
    ],
  };

  const relatedPosts = POSTS.filter((item) => item.id !== post.id).slice(0, 3);

  return (
    <>
      <SEOptimization
        title={`${post.title} | Arbaj Technology`}
        description={description}
        url={canonicalUrl}
        image={imageUrl}
        type="article"
        publishedTime={publishedDate}
        modifiedTime={post.modifiedDate || publishedDate}
        author={author}
        schema={[articleSchema, breadcrumbSchema]}
      />

      <main className="bp-page">
        <article className="bp-article">
          <header className="bp-hero">
            <div className="bp-shell bp-hero__inner">
              <nav className="bp-breadcrumb" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <span>/</span>
                <Link to="/blog">Blog</Link>
                <span>/</span>
                <span aria-current="page">Article</span>
              </nav>

              <p className="bp-eyebrow">Digital Marketing Insights</p>
              <h1>{post.title}</h1>
              <p className="bp-excerpt">{post.excerpt}</p>

              <div className="bp-meta">
                <span>By {author}</span>
                <span aria-hidden="true">•</span>
                <time dateTime={publishedDate}>{post.date}</time>
                <span aria-hidden="true">•</span>
                <span>{readTime}</span>
              </div>
            </div>
          </header>

          <div className="bp-shell bp-body-wrap">
            <figure className="bp-cover">
              <img
                src={post.img}
                alt={post.title}
                fetchPriority="high"
                decoding="async"
              />
            </figure>

            <div className="bp-layout">
              <div className="bp-content">
                {(post.content || []).map((block, index) => {
                  if (block.type === "image") {
                    return (
                      <figure className="bp-inline-image" key={`image-${index}`}>
                        <img
                          src={block.src}
                          alt={block.alt || post.title}
                          loading="lazy"
                          decoding="async"
                        />
                      </figure>
                    );
                  }

                  if (block.type === "text") {
                    return (
                      <div className="bp-text-block" key={`text-${index}`}>
                        <TextBlock value={block.value} />
                      </div>
                    );
                  }

                  return null;
                })}
              </div>

              <aside className="bp-aside">
                <div className="bp-aside__card">
                  <span>Need digital support?</span>
                  <h2>Let’s discuss your business goals.</h2>
                  <p>Talk to our team about SEO, advertising, social media, or web development.</p>
                  <Link to="/contact">Book a Consultation</Link>
                </div>
              </aside>
            </div>
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <section className="bp-related" aria-labelledby="related-heading">
            <div className="bp-shell">
              <div className="bp-related__header">
                <p>Continue Reading</p>
                <h2 id="related-heading">Related Articles</h2>
              </div>

              <div className="bp-related__grid">
                {relatedPosts.map((item) => {
                  const relatedSlug = item.slug || toSlug(item.title);

                  return (
                    <article className="bp-related__card" key={item.id}>
                      <img src={item.img} alt="" loading="lazy" decoding="async" />
                      <div>
                        <time dateTime={item.dateISO || toISODate(item.date)}>
                          {item.date}
                        </time>
                        <h3>{item.title}</h3>
                        <Link to={`/blog/${relatedSlug}`}>Read Article</Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
