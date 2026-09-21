import "../styles/Googlereviews.css";

const REVIEWS = [
  {
    name: "Shive Kumar",
    rating: 5,
    text: "Best digital marketing agency I've worked with. Social media management aur ad campaigns ke results bahut acche rahe.",
    initials: "S",
    color: "#1a73e8",
  },
  {
    name: "Abhishek Bhandari",
    rating: 5,
    text: "Professional team, great communication, and excellent results. Highly recommend this digital marketing agency.",
    initials: "A",
    color: "#6d4c41",
  },
  {
    name: "Anup Kumar",
    rating: 5,
    text: "Great experience working with the team. They provided effective digital marketing strategies and helped grow our business online.",
    initials: "A",
    color: "#4a4a4a",
  },
  {
    name: "Sameer Rajput",
    rating: 5,
    text: "A top digital marketing agency with a skilled team. Their Google Ads campaigns generated quality leads.",
    initials: "S",
    color: "#e91e63",
  },
  {
    name: "Paawan Sharma",
    rating: 5,
    text: "Excellent website development and digital marketing services. Delivered beyond expectations.",
    initials: "P",
    color: "#1565c0",
  },
  {
    name: "Akshay Kumar",
    rating: 5,
    text: "The best digital marketing company I have worked with. Professional, responsive, real results.",
    initials: "K",
    color: "#37474f",
  },
  {
    name: "Rahul Singh",
    rating: 5,
    text: "Professional team, excellent service, and great results. Highly recommended!",
    initials: "R",
    color: "#2e7d32",
  },
  {
    name: "R M K Memer",
    rating: 5,
    text: "Result-oriented marketing solutions at reasonable prices. Highly recommend.",
    initials: "R",
    color: "#7b1fa2",
  },
  {
    name: "ITS Vinod",
    rating: 5,
    text: "Reliable and creative in digital marketing solutions. Excellent service every time!",
    initials: "I",
    color: "#e65100",
  },
  {
    name: "Krishna Goswami",
    rating: 5,
    text: "Professional and reliable. Their creative team helps businesses grow online.",
    initials: "K",
    color: "#00695c",
  },
  // Sample entries: replace these with verified customer feedback before publishing.
  {
    name: "Customer 11",
    rating: 5,
    text: "The team understood our goals and created a clear strategy that delivered consistent results.",
    initials: "M",
    color: "#5e35b1",
  },
  {
    name: "Customer 12",
    rating: 5,
    text: "Our website looks professional, loads quickly, and works perfectly across mobile devices.",
    initials: "N",
    color: "#00838f",
  },
  {
    name: "Customer 13",
    rating: 5,
    text: "Very responsive team with creative ideas and excellent support throughout the project.",
    initials: "R",
    color: "#c62828",
  },
  {
    name: "Customer 14",
    rating: 5,
    text: "Their social media campaigns improved our reach and brought genuine customer enquiries.",
    initials: "P",
    color: "#283593",
  },
  {
    name: "Customer 15",
    rating: 5,
    text: "The complete project was delivered on time with clean design and smooth functionality.",
    initials: "A",
    color: "#ad1457",
  },
  {
    name: "Customer 16",
    rating: 5,
    text: "Their SEO work helped improve our online visibility and website traffic significantly.",
    initials: "S",
    color: "#2e7d32",
  },
  {
    name: "Customer 17",
    rating: 5,
    text: "Excellent communication, transparent process, and reliable service from start to finish.",
    initials: "H",
    color: "#ef6c00",
  },
  {
    name: "Customer 18",
    rating: 5,
    text: "The Google Ads campaign generated better-quality leads while keeping costs under control.",
    initials: "V",
    color: "#455a64",
  },
  {
    name: "Customer 19",
    rating: 5,
    text: "They transformed our ideas into a modern website that represents our business perfectly.",
    initials: "G",
    color: "#6a1b9a",
  },
  {
    name: "Customer 20",
    rating: 5,
    text: "Professional service, quick updates, and thoughtful solutions for every requirement.",
    initials: "D",
    color: "#0277bd",
  },
  {
    name: "Customer 21",
    rating: 5,
    text: "We noticed stronger engagement and more enquiries after launching the new campaigns.",
    initials: "T",
    color: "#558b2f",
  },
  {
    name: "Customer 22",
    rating: 5,
    text: "A knowledgeable and supportive team that always responds quickly to questions.",
    initials: "J",
    color: "#4527a0",
  },
  {
    name: "Customer 23",
    rating: 5,
    text: "Their branding and content ideas gave our business a fresh and professional identity.",
    initials: "B",
    color: "#00897b",
  },
  {
    name: "Customer 24",
    rating: 5,
    text: "The website is simple to use, visually appealing, and exactly what we needed.",
    initials: "L",
    color: "#d84315",
  },
  {
    name: "Customer 25",
    rating: 5,
    text: "Their practical marketing approach helped us connect with the right audience.",
    initials: "E",
    color: "#3949ab",
  },
  {
    name: "Customer 26",
    rating: 5,
    text: "Great attention to detail and a smooth development process from planning to launch.",
    initials: "Y",
    color: "#7b1fa2",
  },
  {
    name: "Customer 27",
    rating: 5,
    text: "The team consistently provided useful suggestions and delivered more than expected.",
    initials: "F",
    color: "#00695c",
  },
  {
    name: "Customer 28",
    rating: 5,
    text: "Our online presence has improved noticeably since we started working with them.",
    initials: "C",
    color: "#1565c0",
  },
  {
    name: "Customer 29",
    rating: 5,
    text: "Reliable digital services, friendly support, and results that made a real difference.",
    initials: "W",
    color: "#9e4d00",
  },
];

function StarRow({ count = 5, size = 13 }) {
  return (
    <div className="gr-pill-stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          width={size}
          height={size}
          aria-hidden="true"
          style={{ fill: index < count ? "#e9a15b" : "#d8d3cd" }}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleTextLogo() {
  return (
    <svg
      viewBox="0 0 75 24"
      width="70"
      height="22"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Google"
    >
      <path d="M2.428 10.088c0-4.185 3.385-7.57 7.57-7.57 2.038 0 3.752.75 5.07 1.977L13.45 6.13c-.9-.856-2.125-1.37-3.452-1.37-2.857 0-5.178 2.32-5.178 5.178 0 2.858 2.321 5.178 5.178 5.178 2.09 0 3.484-.9 4.29-1.706.667-.667 1.1-1.624 1.267-2.93H9.998V8.74h7.39c.083.44.125.912.125 1.43 0 1.787-.49 4.003-2.068 5.582-1.536 1.6-3.497 2.454-6.037 2.454-4.185 0-7.57-3.385-7.57-7.57L2.428 10.088z" fill="#4285F4" />
      <path d="M30.003 10.088c0 3.01-2.357 5.227-5.24 5.227-2.882 0-5.24-2.217-5.24-5.227 0-3.032 2.358-5.227 5.24-5.227 2.883 0 5.24 2.195 5.24 5.227zm-2.293 0c0-1.88-1.365-3.168-2.947-3.168-1.582 0-2.947 1.288-2.947 3.168 0 1.858 1.365 3.168 2.947 3.168 1.582 0 2.947-1.31 2.947-3.168z" fill="#EA4335" />
      <path d="M41.255 10.088c0 3.01-2.356 5.227-5.24 5.227-2.882 0-5.24-2.217-5.24-5.227 0-3.032 2.358-5.227 5.24-5.227 2.884 0 5.24 2.195 5.24 5.227zm-2.293 0c0-1.88-1.365-3.168-2.947-3.168-1.582 0-2.947 1.288-2.947 3.168 0 1.858 1.365 3.168 2.947 3.168 1.582 0 2.947-1.31 2.947-3.168z" fill="#FBBC05" />
      <path d="M51.994 5.153v9.514c0 3.914-2.31 5.513-5.038 5.513-2.572 0-4.117-1.72-4.7-3.126l1.997-.832c.362.864 1.245 1.88 2.703 1.88 1.77 0 2.865-1.093 2.865-3.148v-.77h-.08c-.527.65-1.543 1.22-2.824 1.22-2.682 0-5.137-2.337-5.137-5.34 0-3.024 2.455-5.34 5.137-5.34 1.28 0 2.296.57 2.825 1.2h.08V5.153h2.172zm-2.01 4.957c0-1.857-1.24-3.21-2.823-3.21-1.603 0-2.947 1.353-2.947 3.21 0 1.836 1.344 3.168 2.947 3.168 1.583 0 2.824-1.332 2.824-3.168z" fill="#4285F4" />
      <path d="M55.468 1v14.016H53.21V1h2.258z" fill="#34A853" />
      <path d="M63.965 11.876l1.8 1.2c-.58.857-1.98 2.24-4.403 2.24-3.002 0-5.24-2.323-5.24-5.228 0-3.11 2.258-5.227 4.98-5.227 2.743 0 4.085 2.158 4.525 3.327l.24.6-7.055 2.92c.54 1.06 1.38 1.6 2.55 1.6 1.173 0 1.988-.578 2.603-1.432zm-5.537-1.9l4.712-1.957c-.258-.66-1.038-1.116-1.956-1.116-1.175 0-2.81 1.036-2.756 3.073z" fill="#EA4335" />
    </svg>
  );
}

function shortQuote(text, max = 62) {
  const firstSentence = text.split(/(?<=[.!?])\s/)[0];
  const base = firstSentence.length <= max ? firstSentence : text;

  return base.length > max ? `${base.slice(0, max).trim()}…` : base;
}

function ReviewPill({ review }) {
  return (
    <article className="gr-pill" title={review.name}>
      <div className="gr-pill-avatar" style={{ background: review.color }}>
        {review.image ? (
          <img src={review.image} alt={review.name} loading="lazy" />
        ) : (
          review.initials
        )}
      </div>

      <div className="gr-pill-body">
        <StarRow count={review.rating} />
        <p className="gr-pill-quote">{shortQuote(review.text)}</p>
      </div>
    </article>
  );
}

function MarqueeGroup({ reviews, duplicate = false }) {
  return (
    <div className="gr-marquee-group" aria-hidden={duplicate || undefined}>
      {reviews.map((review, index) => (
        <ReviewPill
          review={review}
          key={`${review.name}-${duplicate ? "duplicate" : "original"}-${index}`}
        />
      ))}
    </div>
  );
}

function MarqueeRow({ reviews, reverse = false }) {
  return (
    <div className="gr-marquee-track">
      <div className={`gr-marquee-row${reverse ? " gr-marquee-row--reverse" : ""}`}>
        <MarqueeGroup reviews={reviews} />
        <MarqueeGroup reviews={reviews} duplicate />
      </div>
    </div>
  );
}

export default function GoogleReviews() {
  const rowA = REVIEWS.slice(0, 10);
  const rowB = REVIEWS.slice(10, 20);
  const rowC = REVIEWS.slice(20, 29);

  return (
    <section className="gr-section" aria-labelledby="google-reviews-title">
      <div className="gr-inner">
        <div className="gr-heading-wrap">
          <h2 className="gr-heading" id="google-reviews-title">
            <span>Put Your Customer Feedback</span>
            <span className="gr-heading-line">in the Spotlight</span>
          </h2>

          <p className="gr-desc">
            Positive reviews help new visitors trust your business and become
            customers. Show your Google reviews using smooth, responsive sliders.
          </p>
        </div>

        <div className="gr-rating-row">
          {/* <span className="gr-rating-label">Excellent</span>
          <StarRow count={5} size={16} />
          <span className="gr-rating-count">
            Based on <strong>29 reviews</strong>
          </span>
          <GoogleTextLogo /> */}
        </div>

        <div className="gr-marquee-wrap">
          <MarqueeRow reviews={rowA} />
          <MarqueeRow reviews={rowB} reverse />
          <MarqueeRow reviews={rowC} />
        </div>
      </div>
    </section>
  );
}
