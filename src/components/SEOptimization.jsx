import { Helmet } from "react-helmet-async";

const SEOptimization = ({
  title,
  description,
  keywords = "",
  url = "https://arbajtechnologypvtltd.com/",
  image = "https://arbajtechnologypvtltd.com/arbaj-logo.png",
}) => {
  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Robots */}
      <meta name="robots" content="index, follow" />

      {/* Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Arbaj Technology",
          url: "https://arbajtechnologypvtltd.com/",
          logo: "https://arbajtechnologypvtltd.com/arbaj-logo.png",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-7973611226",
            contactType: "customer service",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi"],
          },
          sameAs: [
            "https://www.facebook.com/p/Arbaj-Technology-PvtLtd-61579390061534/",
            "https://www.instagram.com/arbaj_technology/",
            "https://in.linkedin.com/company/arbaj-technology-pvt-ltd"
          ],
        })}
      </script>
    </Helmet>
  );
};

export default SEOptimization;