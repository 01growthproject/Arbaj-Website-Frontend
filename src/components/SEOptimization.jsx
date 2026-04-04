import { Helmet } from "react-helmet-async";

export default function SEOptimization({
  title,
  description,
  keywords,
  url,
  image,
  faqs
}) {
  const schemaFAQ =
    Array.isArray(faqs) && faqs.length > 0
      ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs
          .filter(f => f.q && f.a)
          .map(f => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.a
            }
          }))
      }
      : null;

  return (
    <Helmet>
      {/* BASIC SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={url} />

      {/* OPEN GRAPH */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}

      {/* TWITTER */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* EXTRA */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Arbaj Technology" />

      {/* FAQ SCHEMA */}
      {schemaFAQ && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaFAQ)
          }}
        />
      )}
    </Helmet>
  );
}