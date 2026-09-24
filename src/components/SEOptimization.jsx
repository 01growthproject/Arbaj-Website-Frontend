import { Helmet } from "react-helmet-async";

const SITE_NAME = "Arbaj Technology Pvt. Ltd.";
const SITE_URL = "https://arbajtechnologypvtltd.com";

const DEFAULT_TITLE =
  "Best Digital Marketing Agency in Zirakpur | Arbaj Technology";

const DEFAULT_DESCRIPTION =
  "Boost your online presence with the Best Digital Marketing Agency in Zirakpur. SEO, web development, social media and paid advertising. Call +91 79 7361 1226.";

const DEFAULT_IMAGE = `${SITE_URL}/lg.webp`;

function getAbsoluteUrl(value) {
  if (!value) return undefined;

  try {
    return new URL(value, SITE_URL).href;
  } catch {
    return undefined;
  }
}

export default function SEOOptimization({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  url,
  image = DEFAULT_IMAGE,
  type = "website",
  schema,
  faqs,
  publishedTime,
  modifiedTime,
  author = SITE_NAME,
  noindex = false,
}) {
  const canonicalUrl = getAbsoluteUrl(url);
  const imageUrl = getAbsoluteUrl(image);

  const validFaqs = Array.isArray(faqs)
    ? faqs.filter((item) => item?.q?.trim() && item?.a?.trim())
    : [];

  const faqSchema =
    validFaqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: validFaqs.map((item) => ({
            "@type": "Question",
            name: item.q.trim(),
            acceptedAnswer: {
              "@type": "Answer",
              text: item.a.trim(),
            },
          })),
        }
      : null;

  const schemas = [
    ...(Array.isArray(schema) ? schema : schema ? [schema] : []),
    ...(faqSchema ? [faqSchema] : []),
  ];

  const robotsContent = noindex
    ? "noindex, nofollow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  return (
    <Helmet>
      <html lang="en-IN" />

      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robotsContent} />
      <meta name="author" content={author} />

      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      <meta property="og:locale" content="en_IN" />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      {imageUrl && (
        <meta property="og:image" content={imageUrl} />
      )}

      {imageUrl && (
        <meta property="og:image:alt" content={`${title} — ${SITE_NAME}`} />
      )}

      {type === "article" && publishedTime && (
        <meta
          property="article:published_time"
          content={publishedTime}
        />
      )}

      {type === "article" && modifiedTime && (
        <meta
          property="article:modified_time"
          content={modifiedTime}
        />
      )}

      {type === "article" && author && (
        <meta property="article:author" content={author} />
      )}

      <meta
        name="twitter:card"
        content={imageUrl ? "summary_large_image" : "summary"}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {imageUrl && (
        <meta name="twitter:image" content={imageUrl} />
      )}

      {imageUrl && (
        <meta
          name="twitter:image:alt"
          content={`${title} — ${SITE_NAME}`}
        />
      )}

      {schemas.map((item, index) => (
        <script
          type="application/ld+json"
          key={`structured-data-${index}`}
        >
          {JSON.stringify(item).replace(/</g, "\\u003c")}
        </script>
      ))}
    </Helmet>
  );
}