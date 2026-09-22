import image1 from "../../../public/clients/growth.jpg";
import image2 from "../../../public/clients/famous.png";
import image3 from "../../../public/clients/Ocean.png";
import image4 from "../../../public/clients/jaguars.png";

export const HERO_SLIDES = [
  {
    tag: "Arbaj Technology — Strategy. Creativity. Technology.",
    titleLine1: "Digital Marketing",
    titleLine2: "Company in Zirakpur",
    titleLine3: "Built for Growth",
    description:
      "Grow your business with SEO, paid advertising, social media marketing, creative design and conversion-focused web development.",
    image: "/hero/Growth-slide.png",
  },
  {
    tag: "Arbaj Technology — Connect. Engage. Grow.",
    titleLine1: "Social Media",
    titleLine2: "Marketing That Builds",
    titleLine3: "Your Brand",
    description:
      "Build a stronger social media presence through engaging content, consistent communication and campaigns created for your target audience.",
    image: "/hero/Socail-media.png",
  },
  {
    tag: "Arbaj Technology — Improve Visibility. Build Authority.",
    titleLine1: "SEO Strategies",
    titleLine2: "Built for Visibility",
    titleLine3: "and Sustainable Growth",
    description:
      "Improve your search visibility and attract relevant organic traffic with technical SEO, content optimization and practical keyword strategies.",
    image: "/hero/seo.png",
  },
  {
    tag: "Arbaj Technology — Target. Connect. Convert.",
    titleLine1: "Meta Ads",
    titleLine2: "Reach the Right Audience",
    titleLine3: "Generate Better Leads",
    description:
      "Reach relevant customers through focused Meta advertising campaigns designed around your business goals, audience and available budget.",
    image: "/hero/Metaads.png",
  },
];

/* ── Core services list — used by the directory layout for id / title / icon / link ── */
export const SERVICES = [
  {
    id: 1,
    tag: "SEO",
    title: "SEO Services",
    anchor: "search-engine-optimization",
    desc: "Improve your website’s visibility in Google Search through keyword research, on-page optimization, technical audits, content improvements and ethical link-building strategies.",
    link: "/services#search-engine-optimization",
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="17" cy="17" r="10" stroke="currentColor" strokeWidth="2.5" />
        <path d="M24 24L34 34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M13 17h8M17 13v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    accent: "#00d4ff",
  },
  {
    id: 2,
    tag: "PPC",
    title: "Google Ads",
    anchor: "google-ads",
    desc: "Reach potential customers who are actively searching for your services through focused Google Ads campaigns, conversion tracking and continuous performance optimization.",
    link: "/services#google-ads",
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <path d="M8 32L16 20L22 26L28 14L36 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="36" cy="8" r="3" fill="currentColor" />
        <path d="M8 36h28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".4" />
      </svg>
    ),
    accent: "#ff6b35",
  },
  {
    id: 3,
    tag: "SMM",
    title: "Social Media Marketing",
    anchor: "social-media-marketing",
    desc: "Build a consistent social presence with audience-focused content, creative campaigns, community engagement and paid advertising across relevant platforms.",
    link: "/services#social-media-marketing",
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="8" cy="20" r="4" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="32" cy="10" r="4" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="32" cy="30" r="4" stroke="currentColor" strokeWidth="2.5" />
        <path d="M12 18L28 12M12 22L28 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    accent: "#a855f7",
  },
  {
    id: 4,
    tag: "WEB",
    title: "Web Development",
    anchor: "web-development",
    desc: "We design and develop fast, responsive and user-friendly websites that represent your business clearly and support your marketing and lead-generation goals.",
    link: "/services#web-development",
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <rect x="4" y="8" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="2.5" />
        <path d="M4 14h32" stroke="currentColor" strokeWidth="2" opacity=".5" />
        <path d="M14 20l-4 4 4 4M26 20l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 19l-3 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".7" />
      </svg>
    ),
    accent: "#22c55e",
  },
  {
    id: 5,
    tag: "DESIGN",
    title: "Graphic Design",
    anchor: "graphic-designing",
    desc: "Build a recognizable visual identity with professional logos, social media creatives, banners, brochures and other designs tailored to your brand.",
    link: "/services#graphic-designing",
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <path d="M10 30L8 36l6-2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 30L28 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="31" cy="9" r="4" stroke="currentColor" strokeWidth="2.5" />
        <path d="M20 12l8 8" stroke="currentColor" strokeWidth="2" opacity=".5" />
      </svg>
    ),
    accent: "#f59e0b",
  },
  {
    id: 6,
    tag: "VIDEO",
    title: "Video Editing",
    anchor: "video-editing",
    desc: "Turn raw footage into polished promotional videos, advertisements, reels and social media content with thoughtful editing, sound and visual effects.",
    link: "/services#video-editing",
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <rect x="4" y="10" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="2.5" />
        <path d="M28 16l8-5v18l-8-5" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M13 17v6M17 15v10M21 18v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".7" />
      </svg>
    ),
    accent: "#ec4899",
  },
];

/* ── Extra data for the directory-style Services layout — features + preview image
     per service, keyed by the SERVICES id above. Put your actual photos in
     /public/services/ and update the paths. ── */
export const SERVICE_DIRECTORY_EXTRAS = {
  1: { // SEO Services
    tag: "SEO",
    image: "/Service/SEO-1.png",
    features: [
      "Audit and keyword research",
      "On-site and technical optimization",
      "Content and link building",
      "Traffic and strength gains",
    ],
  },
  2: { // Google Ads
    tag: "ADS",
    image: "/Service/ad-campaigns.png",
    features: [
      "Google Search and view adsp",
      "Keyword research and advertising strategy",
      "Campaign setup and optimization",
      "Conversion and results tracking",
    ],
  },
  3: { // Social Media Marketing
    tag: "SMM",
    image: "/Service/Social.png",
    features: [
      "Social media strategy and planning",
      "Content creation and management",
      "Audience engagement and growth",
      "Results tracking and reporting",
    ],
  },
  4: { // Web Development
    tag: "WEB",
    image: "/Service/web.png",
    features: [
      "Custom Web Solutions",
      "Modern UI/UX Design",
      "Responsive Development",
      "Performance Optimization",
    ],
  },
  5: { // Graphic Design
    tag: "DESIGN",
    image: "/Service/design.png",
    features: [
      "Social media and advertising",
      "Logo design and brand identity",
      "Posters, banners and brochures",
      "Creative and professional photography",
    ],
  },
  6: { // Video Editing
    tag: "VIDEO",
    image: "/Service/VIDEO-EDIT.png",
    features: [
      "Wheels and Short Form Video Essay",
      "Advertising and promotional videos",
      "Motion graphics and visual effects",
      "Color grading and expert editing",
    ],
  },
};

export const ROMAN = ["I", "II", "III", "IV"];

export const STATS = [
  { number: "50+", label: "Happy Clients" },
  { number: "5+", label: "Years Experience" },
  { number: "98%", label: "Success Rate" },
  { number: "15+", label: "Team Experts" },
];

export const FAQS = [
  {
    q: "Do you work with small agencies and startups?",
    a: "Yes, we work with startups, small organizations and hooked up businesses and create virtual advertising and marketing solutions primarily based on their dreams and necessities.",
  },
  {
    q: "What services does your digital advertising agency offer?",
    a: "We offer search engine optimization, website design and development, social media marketing, Google Ads, Meta Ads, graphic design, video editing and other virtual advertising services.",
  },
  {
    q: "Why is Arbaj Technology the best digital marketing company for me?",
    a: "Arbaj Technology is the best choice because we focus on real results, use proven marketing strategies, and give personal support to help your business grow faster online.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "SEO is a long-term process. Results can vary depending on your website, competition, keywords and the SEO strategy being used.",
  },
   {
    q: "How do I get started with your agency?",
    a: "Getting started is easy. Contact our team at +91 79 7361 1226 and share your business goals and requirements. We’ll discuss your needs and suggest the right digital marketing solutions for your business.",
  }
];

export const CLIENTS = [
  { id: 1, name: "", logo: image1 },
  { id: 2, name: "", logo: image2 },
  { id: 3, name: "", logo: image3 },
  { id: 4, name: "", logo: image4 },
];