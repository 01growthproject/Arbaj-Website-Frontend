export const STATS = [
  { number: "10", label: "Clients Served" },
  { number: "6", label: "Core Services" },
  { number: "5+", label: "Years Experience" },
  { number: "10+", label: "Team Members" },
];

export const SERVICES = [
  {
    id: 1,
    tag: "SEO",
    title: "Search Engine Optimization",
    anchor: "search-engine-optimization",
    link: "/services#search-engine-optimization",
    desc: "Improve your website's visibility in search results through keyword research, on-page optimization, technical SEO, content improvements, and responsible link-building strategies.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="17" cy="17" r="10" stroke="currentColor" strokeWidth="2.5" />
        <path d="M24 24L34 34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M13 17h8M17 13v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    accent: "#00d4ff",
    features: [
      "Keyword Research & Strategy",
      "On-Page Optimization",
      "Technical SEO Audits",
      "Content Recommendations",
      "Performance Reporting",
    ],
    result: "Stronger Organic Visibility",
  },
  {
    id: 2,
    tag: "PPC",
    title: "Google Ads",
    anchor: "google-ads",
    link: "/services#google-ads",
    desc: "Reach people actively searching for your products or services with focused Google Ads campaigns, clear conversion tracking, and ongoing budget optimization.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M8 32L16 20L22 26L28 14L36 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="36" cy="8" r="3" fill="currentColor" />
        <path d="M8 36h28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".4" />
      </svg>
    ),
    accent: "#ff6b35",
    features: [
      "Campaign Strategy & Setup",
      "Keyword and Audience Targeting",
      "Ad Copy Development",
      "Conversion Tracking",
      "Performance Reporting",
    ],
    result: "Focused Ad Performance",
  },
  {
    id: 3,
    tag: "SMM",
    title: "Social Media Marketing",
    anchor: "social-media-marketing",
    link: "/services#social-media-marketing",
    desc: "Build a consistent social presence through audience-focused content, creative campaigns, community engagement, and paid advertising across relevant platforms.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="8" cy="20" r="4" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="32" cy="10" r="4" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="32" cy="30" r="4" stroke="currentColor" strokeWidth="2.5" />
        <path d="M12 18L28 12M12 22L28 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    accent: "#a855f7",
    features: [
      "Content Strategy & Calendar",
      "Creative Post Design",
      "Community Management",
      "Paid Social Campaigns",
      "Engagement Reporting",
    ],
    result: "Stronger Audience Engagement",
  },
  {
    id: 4,
    tag: "WEB",
    title: "Website Development",
    anchor: "web-development",
    link: "/services#web-development",
    desc: "Get a fast, responsive, and user-friendly website designed to represent your business clearly and support your marketing and lead-generation goals.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="2.5" />
        <path d="M4 14h32" stroke="currentColor" strokeWidth="2" opacity=".5" />
        <path d="M14 20l-4 4 4 4M26 20l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 19l-3 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".7" />
      </svg>
    ),
    accent: "#22c55e",
    features: [
      "Custom UI/UX Design",
      "Responsive Development",
      "E-Commerce Solutions",
      "SEO-Ready Structure",
      "Speed Optimization",
    ],
    result: "Conversion-Focused Experience",
  },
  {
    id: 5,
    tag: "DESIGN",
    title: "Graphic Design",
    anchor: "graphic-designing",
    link: "/services#graphic-designing",
    desc: "Create a recognizable visual identity with professional logos, social media creatives, banners, brochures, and other designs tailored to your brand.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M10 30L8 36l6-2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 30L28 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="31" cy="9" r="4" stroke="currentColor" strokeWidth="2.5" />
        <path d="M20 12l8 8" stroke="currentColor" strokeWidth="2" opacity=".5" />
      </svg>
    ),
    accent: "#f59e0b",
    features: [
      "Logo & Brand Identity",
      "Social Media Graphics",
      "Brochure & Flyer Design",
      "Business Card Design",
      "Banner & Ad Creatives",
    ],
    result: "Consistent Brand Identity",
  },
  {
    id: 6,
    tag: "VIDEO",
    title: "Video Editing",
    anchor: "video-editing",
    link: "/services#video-editing",
    desc: "Turn raw footage into polished promotional videos, advertisements, reels, and social content through thoughtful editing, sound, subtitles, and visual effects.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="4" y="10" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="2.5" />
        <path d="M28 16l8-5v18l-8-5" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M13 17v6M17 15v10M21 18v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".7" />
      </svg>
    ),
    accent: "#ec4899",
    features: [
      "Promotional Video Editing",
      "Instagram Reels & Shorts",
      "Ad Creative Editing",
      "Motion Graphics",
      "Subtitles & Sound Design",
    ],
    result: "More Engaging Video Content",
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "We discuss your business, audience, goals, timeline, and current challenges.",
    icon: "🎯",
  },
  {
    step: "02",
    title: "Custom Strategy",
    desc: "Our team prepares a practical plan based on your goals, priorities, and budget.",
    icon: "📋",
  },
  {
    step: "03",
    title: "Execution",
    desc: "We create, launch, and manage the agreed work while keeping you informed.",
    icon: "🚀",
  },
  {
    step: "04",
    title: "Review & Improve",
    desc: "We review relevant performance data, share updates, and improve the strategy over time.",
    icon: "📈",
  },
];

export const FAQS = [
  {
    q: "How long does it take to see results from SEO?",
    a: "SEO timelines vary by website, industry, competition, and target keywords. Meaningful improvements often take several months and require ongoing optimization.",
  },
  {
    q: "Do you offer customized service packages?",
    a: "Yes. We recommend services based on your business goals, priorities, timeline, and available budget.",
  },
  {
    q: "Can you redesign an existing website?",
    a: "Yes. We can improve an existing website's design, responsiveness, speed, usability, and SEO foundations.",
  },
  {
    q: "Will I receive campaign or project reports?",
    a: "Reporting depends on the selected service. For ongoing marketing work, we share relevant updates and performance information at an agreed frequency.",
  },
  {
    q: "Do you provide support after a project is completed?",
    a: "Yes. Ongoing maintenance and support can be included based on the project's requirements and the selected service plan.",
  },
];
