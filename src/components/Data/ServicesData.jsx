export const STATS = [
  { number: "50+", label: "Happy Clients" },
  { number: "6+", label: "Services Offered" },
  { number: "98%", label: "Success Rate" },
  { number: "5+", label: "Years Experience" },
];

export const SERVICES = [
  {
    id: 1,
    tag: "SEO",
    title: "Search Engine Optimization",
    link: "/seo-services",
    desc: "Search engine optimization (SEO) is the practice of optimizing your website for search engines such as Google Search. This involves conducting keyword research, performing on-page optimization, making technical changes, and acquiring backlinks. The primary aim of SEO is to achieve high search engine rankings and drive organic traffic to your site.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="17" cy="17" r="10" stroke="currentColor" strokeWidth="2.5" />
        <path d="M24 24L34 34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M13 17h8M17 13v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    accent: "#00d4ff",
    features: ["Keyword Research & Strategy", "On-Page Optimization", "Technical SEO Audit", "Premium Link Building", "Monthly Ranking Reports"],
    result: "↑ 300% Organic Traffic",
  },
  {
    id: 2,
    tag: "PPC",
    title: "Google Ads (PPC)",
    link: "/google-ads-agency", 
    desc: "Paid Advertising or PPC(Pay Per Click) enables a business to place advertisements on platforms such as Google Ads.The business will be charged only when the advertisement receives a click.This is considered one of the quickest means of attracting leads and making sales.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <path d="M8 32L16 20L22 26L28 14L36 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="36" cy="8" r="3" fill="currentColor" />
        <path d="M8 36h28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".4" />
      </svg>
    ),
    accent: "#ff6b35",
    features: ["Campaign Setup & Strategy", "Ad Copywriting", "Bid Management", "Conversion Tracking", "ROI Reporting"],
    result: "↑ 5x Return on Ad Spend",
  },
  {
    id: 3,
    tag: "SMM",
    title: "Social Media Marketing",
    link: "/social-media-marketing", 
    desc: "Social Media Marketing aims to advertise a company using social media sites such as Instagram and Facebook. This marketing process encompasses developing content, posting it, engaging with the target audience, and launching advertisements.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="8" cy="20" r="4" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="32" cy="10" r="4" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="32" cy="30" r="4" stroke="currentColor" strokeWidth="2.5" />
        <path d="M12 18L28 12M12 22L28 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    accent: "#a855f7",
    features: ["Content Calendar & Strategy", "Creative Post Design", "Community Management", "Paid Social Campaigns", "Engagement Analytics"],
    result: "↑ 200% Engagement Rate",
  },
  {
    id: 4,
    tag: "WEB",
    title: "Website Development",
    link: "/web-development-company", 
    desc: "Website Development entails designing a professional and efficient website for organizations. The proper design of a website ensures that the user experience is improved while aiding in search engine optimization and marketing.",
    
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <rect x="4" y="8" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="2.5" />
        <path d="M4 14h32" stroke="currentColor" strokeWidth="2" opacity=".5" />
        <path d="M14 20l-4 4 4 4M26 20l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 19l-3 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".7" />
      </svg>
    ),
    accent: "#22c55e",
    features: ["Custom UI/UX Design", "Mobile-First Development", "E-Commerce Solutions", "SEO-Ready Structure", "Speed & Performance Optimization"],
    result: "↑ 180% Conversion Rate",
  },
  {
    id: 5,
    tag: "DESIGN",
    title: "Graphic Design",
    link: "/graphic-designing", 
    desc: "Graphic designing is the visual foundation of digital marketing. It includes the design of social media posts, banners, advertising creatives, logos, thumbnails, and other branding elements. Professional-looking designs draw the attention of the audience, while branding ensures the identity of the business, which helps increase engagement and conversions.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <path d="M10 30L8 36l6-2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 30L28 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="31" cy="9" r="4" stroke="currentColor" strokeWidth="2.5" />
        <path d="M20 12l8 8" stroke="currentColor" strokeWidth="2" opacity=".5" />
      </svg>
    ),
    accent: "#f59e0b",
    features: ["Logo & Brand Identity", "Social Media Graphics", "Brochure & Flyer Design", "Business Card Design", "Banner & Ad Creatives"],
    result: "↑ 150% Brand Recognition",
  },
  {
    id: 6,
    tag: "VIDEO",
    title: "Video Editing",
    link: "/video-editing", 
    desc: "Video Editing has become one of the most powerful aspects of marketing, especially for reels and ads. Raw footage is edited to create captivating videos such as Instagram Reels, YouTube videos, creative ads, transitions, effects, subtitles, and sound design. The better the editing quality of videos, the more they attract audiences and make their content go viral.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <rect x="4" y="10" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="2.5" />
        <path d="M28 16l8-5v18l-8-5" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M13 17v6M17 15v10M21 18v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".7" />
      </svg>
    ),
    accent: "#ec4899",
    features: ["Promotional Video Production", "Instagram Reels & Shorts", "Ad Film Editing", "Motion Graphics", "YouTube Video Optimization"],
    result: "↑ 400% Video Reach",
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "We understand your business goals, target audience, and current challenges in a free strategy session.",
    icon: "🎯",
  },
  {
    step: "02",
    title: "Custom Strategy",
    desc: "Our team crafts a tailored digital marketing plan built specifically around your goals and budget.",
    icon: "📋",
  },
  {
    step: "03",
    title: "Execution",
    desc: "We launch and manage your campaigns with precision — every action backed by data and experience.",
    icon: "🚀",
  },
  {
    step: "04",
    title: "Track & Optimize",
    desc: "Monthly reports, transparent metrics, and constant optimization to keep your results growing.",
    icon: "📈",
  },
];

export const FAQS = [
  {
    q: "How long does it take to see results from SEO?",
    a: "SEO results usually start appearing within 3–6 months, depending on your industry, competition, and the keywords targeted. Continuous optimization ensures long-term growth.",
  },
  {
    q: "Do you offer customized service packages?",
    a: "Yes! All our services, including SEO, website development, and digital marketing, are tailored to your business goals and budget.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Absolutely. We can modernize your website, improve its design, speed, and user experience while keeping it SEO-friendly and mobile-responsive.",
  },
  {
    q: "Will I get reports on my digital marketing campaigns?",
    a: "Yes. We provide regular reports for all services, including SEO, Google Ads, and social media campaigns, so you can track progress and ROI.",
  },
  {
    q: "Do you offer support after the project is completed?",
    a: "Yes. We provide ongoing maintenance, updates, and technical support for websites and marketing campaigns to ensure your business keeps performing well online.",
  },
];
