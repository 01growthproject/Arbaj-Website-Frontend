import image1 from "../../../public/clients/growth.jpg"
import image2 from "../../../public/clients/famous.png"
import image3 from "../../../public/clients/Ocean.png"
import image4 from "../../../public/clients/jaguars.png"




export const SERVICES = [
  {
    id: 1,
    tag: "SEO",
    title: "SEO Services",
    desc: "Improve your internet site’s Google ranking and attain your target marketplace with our a success search engine optimization answers. We offer keyword optimization, on-web page and rancid-web page optimization, technical search engine optimization, and exceptional one-way links to increase your site visitors.",
    link: "/search-engine-optimization",
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
    title: "Google Ads ",
    desc: "Seek instant exposure with our Google Ads answers. We lay out and manipulate powerful ad campaigns that attract real clients to your enterprise – helping you grow faster with tangible results",
    link: "/google-ads", 
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
    title: "Social Media Marketing ",
    link: "/social-media-marketing", 
    desc: "Engage with your target audience and establish your logo on social media platforms along with Facebook, Instagram, LinkedIn, and YouTube. Our social media experts layout innovative content material and execute centered ad campaigns to growth your followers and engagement.",
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
    title: "Web Development ",
    desc: "Your internet site is your on-line id. We design and develop quick, modern, and cellular responsive internet sites that reflect your id flawlessly. Be it a commercial internet site or an e-commerce internet site, we design consumer-friendly internet sites for you.",
    link: "/web-development", 
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
    desc: " Our creative designers make your ideas come to life in terms of truth through our beautiful visuals. We offer emblems, banners, brochures, business cards, and social media pix that make your logo stand out and appearance expert.",
    link: "/graphic-designing", 
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
    desc: "We make fantastic films for promotions, advertisements, and social media content. Our video modifying team will make sure that your logo tale is told in a clean, engaging, and aesthetically pleasing fashion.",
    link: "/video-editing", 
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

export const STATS = [
  { number: "50+", label: "Happy Clients" },
  { number: "5+", label: "Years Experience" },
  { number: "98%", label: "Success Rate" },
  { number: "15+", label: "Team Experts" },
];

export const FAQS = [
  {
    q: "How do I get started with your agency?",
    a: "To get started, just contact us and tell us about your business. Our team will understand your goals and create an easy, effective plan to grow your business online.",
  },
  {
    q: "WHAT SERVICES DOES YOUR AGENCY OFFER?",
    a: "We offer SEO, Google Ads, social media marketing, website design, website development, graphic design, and video editing services to help your business grow and build a strong online presence.",
  },
  {
    q: "Why is ARBAJ TECHNOLOGY the best digital marketing company for me?",
    a: "ARBAJ TECHNOLOGY is the best choice because we focus on real results, use proven marketing strategies, and give personal support to help your business grow faster online.",
  },
  {
    q: "How do I get started with your agency?",
    a: " Getting started is easy! Reach out to ARBAJ TECHNOLOGY PVT.LTD, and our experts will guide you step- by - step to boost your online growth.",
  },
];

export const CLIENTS = [
  { id: 1, name: "", logo: image1 },
  { id: 2, name: "", logo: image2},
  { id: 3, name: "", logo: image3},
  { id: 4, name: "", logo: image4},
  
  
];