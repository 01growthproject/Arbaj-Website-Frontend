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
    link: "/seo-services-india",
    desc: "We create and edit expert videos to engage with your target audience. If it is a promotional video, social media video, or YouTube video, we offer excellent visual quality to leave a long-lasting impression.",
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
    link: "/google-ads-agency-india", 
    desc: "Boost your sales immediately with targeted Google Ads campaigns. We create, manage, and optimize commercials that deliver real results – more clicks, more leads, and higher ROI for your business.",
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
    desc: "Our layout team will come up with appealing pics to tell your emblem tale. Whether you want a logo, banner, brochure, or social media publish, we will make sure that your business looks professional and appealing.",
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
    link: "/web-development-company-india", 
    desc: "We expand rapid, steady, and smooth-to-cope with websites using the modern technology. Our improvement ensures clean capability, and your enterprise will grow and reach more customers on-line.",
    
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
    desc: "Our design team creates attractive pix that inform your emblem story. Whether it’s a emblem, banner, brochure, or social media update, we ensure your business seems expert and attractive.",
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
    desc: "We produce and edit expert videos that engage your target audience. Whether it’s a promotional video, social media video, or YouTube video, we offer high-quality visual content that leaves a lasting impact.",
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
    q: "How do I know which service is right for my business?",
    a: "Book a free consultation and our experts will analyze your business, competition, and goals to recommend the most effective services for your specific situation.",
  },
  {
    q: "Do you offer packages that combine multiple services?",
    a: "Yes! We offer bundled packages that combine SEO, Google Ads, Social Media, and Web services at discounted rates. Contact us to get a custom quote.",
  },
  {
    q: "How long before I see results from your services?",
    a: "Google Ads can deliver results within days. SEO typically shows strong improvements in 3–6 months. Social Media growth usually takes 1–3 months of consistent effort.",
  },
  {
    q: "Will I get reports on how my campaigns are performing?",
    a: "Absolutely. Every client gets a dedicated account manager and detailed monthly reports covering traffic, leads, conversions, and ROI for full transparency.",
  },
];
