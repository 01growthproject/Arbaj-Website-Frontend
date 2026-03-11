export const DM_SERVICES = [
  {
    id: 1,
    tag: "SEO",
    title: "Search Engine Optimization",
    desc: "Rank #1 on Google with our data-driven SEO strategies — technical audits, on-page optimization, and white-hat link building.",
    accent: "#1d7afc",
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="18" cy="18" r="11" stroke="currentColor" strokeWidth="2.2" />
        <path d="M26 26l8 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M14 18h8M18 14v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".6" />
      </svg>
    ),
  },
  {
    id: 2,
    tag: "GOOGLE ADS",
    title: "Google Ads (PPC)",
    desc: "High-ROI Google Ads campaigns that put your business in front of ready-to-buy customers every single day.",
    accent: "#f4a200",
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <path d="M8 28L16 14l6 10 5-7 5 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="10" r="5" stroke="currentColor" strokeWidth="2" />
        <path d="M30 10h4M32 8v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 34h28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".3" />
      </svg>
    ),
  },
  {
    id: 3,
    tag: "SOCIAL MEDIA",
    title: "Social Media Marketing",
    desc: "Build a loyal community, grow your followers, and turn social engagement into real business revenue.",
    accent: "#ec4899",
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="10" cy="20" r="4" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="30" cy="10" r="4" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="30" cy="30" r="4" stroke="currentColor" strokeWidth="2.2" />
        <path d="M14 18l12-6M14 22l12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".6" />
      </svg>
    ),
  },
  {
    id: 4,
    tag: "CONTENT MARKETING",
    title: "Content & Blog Marketing",
    desc: "Strategic content that educates, engages, and converts — blogs, infographics, and video scripts built to rank.",
    accent: "#22c55e",
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <rect x="6" y="6" width="28" height="28" rx="4" stroke="currentColor" strokeWidth="2.2" />
        <path d="M12 14h16M12 20h12M12 26h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".7" />
      </svg>
    ),
  },
  {
    id: 5,
    tag: "EMAIL MARKETING",
    title: "Email Marketing Campaigns",
    desc: "Automated email sequences and newsletters that nurture leads and drive repeat purchases on autopilot.",
    accent: "#a855f7",
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <rect x="4" y="10" width="32" height="22" rx="4" stroke="currentColor" strokeWidth="2.2" />
        <path d="M4 14l16 11 16-11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity=".7" />
      </svg>
    ),
  },
  {
    id: 6,
    tag: "ANALYTICS",
    title: "Marketing Analytics & Reporting",
    desc: "Crystal-clear monthly reports with actionable insights — track every rupee spent and every lead generated.",
    accent: "#06b6d4",
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <path d="M6 34V22M14 34V16M22 34V20M30 34V10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M6 34h28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".4" />
        <path d="M6 22l8-6 8 4 8-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity=".5" />
      </svg>
    ),
  },
];

export const PROCESS = [
  { step: "01", title: "Audit & Research", desc: "Deep dive into your brand, competitors, and target audience to build a bulletproof strategy.", color: "#1d7afc" },
  { step: "02", title: "Strategy & Planning", desc: "Custom campaign blueprints with clear goals, KPIs, timelines, and budget allocation.", color: "#f4a200" },
  { step: "03", title: "Execute & Optimise", desc: "Launch campaigns and continuously A/B test to squeeze out maximum ROI every week.", color: "#22c55e" },
  { step: "04", title: "Report & Scale", desc: "Transparent reporting every month with insights to double down on what's working.", color: "#a855f7" },
];

export const TOOLS = [
  { label: "Google Ads", dot: "#ff9900" },
  { label: "Meta Ads", dot: "#1877f2" },
  { label: "SEMrush", dot: "#ff6b35" },
  { label: "Ahrefs", dot: "#f59e0b" },
  { label: "Google Search Console", dot: "#4285f4" },
  { label: "Mailchimp", dot: "#ffe01b" },
  { label: "Canva", dot: "#00c4cc" },
  { label: "YouTube Ads", dot: "#ff0000" },
  { label: "GA4", dot: "#e37400" },
  { label: "Hotjar", dot: "#fd3a5c" },
  { label: "HubSpot", dot: "#ff7a59" },
  { label: "Buffer", dot: "#168eea" },
];

export const PACKAGES = [
  {
    name: "Starter",
    price: "₹7,999",
    period: "/ month",
    tag: "For Small Businesses",
    accent: "#8a97b0",
    features: [
      "SEO — 10 Keywords",
      "Google My Business Setup",
      "2 Social Media Platforms",
      "8 Posts / Month",
      "Monthly Analytics Report",
      "Email Support",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Growth",
    price: "₹18,999",
    period: "/ month",
    tag: "Most Popular",
    accent: "#1d7afc",
    features: [
      "SEO — 25 Keywords",
      "Google Ads Management",
      "Meta Ads (FB + IG)",
      "4 Social Media Platforms",
      "20 Posts + Stories / Month",
      "Weekly Performance Report",
      "Landing Page Optimization",
      "Dedicated Account Manager",
    ],
    cta: "Choose Growth",
    highlight: true,
  },
  {
    name: "Dominator",
    price: "Custom",
    period: "",
    tag: "Full-Scale",
    accent: "#f4a200",
    features: [
      "Unlimited Keywords",
      "All Ad Platforms Managed",
      "Full Content Strategy",
      "Video & Reel Production",
      "Influencer Outreach",
      "Daily Reporting Dashboard",
      "Conversion Rate Optimization",
      "Priority 24/7 Support",
    ],
    cta: "Contact Us",
    highlight: false,
  },
];

export const RESULTS = [
  { metric: "284%", label: "Avg. Traffic Increase", color: "#1d7afc" },
  { metric: "4.8×", label: "Average ROI on Ads", color: "#f4a200" },
  { metric: "60%", label: "Lead Cost Reduction", color: "#22c55e" },
  { metric: "500+", label: "Campaigns Delivered", color: "#a855f7" },
];

export const FAQS = [
  {
    q: "How long before I see results from SEO?",
    a: "SEO is a long-term strategy. Most clients start seeing measurable improvements in rankings and traffic within 3-6 months. Google Ads and Social Media Ads can produce results within days of launch.",
  },
  {
    q: "What budget do I need for Google Ads?",
    a: "We recommend a minimum ad spend of ₹10,000–₹15,000/month to see meaningful results. Our management fee is separate. We'll help you allocate budget for the best possible ROI based on your industry.",
  },
  {
    q: "Do you manage Facebook and Instagram Ads together?",
    a: "Yes! Meta Ads Manager runs ads across both Facebook and Instagram simultaneously. We create platform-optimised creatives for both and split-test to find your winning audience.",
  },
  {
    q: "Will I get reports on my campaigns?",
    a: "Absolutely. Every client gets a detailed monthly performance report covering traffic, leads, conversions, ad spend, and ROI. Growth and Dominator plan clients get weekly reporting.",
  },
  {
    q: "Can you handle marketing for my local business?",
    a: "Yes! Local SEO and Google My Business optimisation are our speciality. We help local businesses in Zirakpur, Chandigarh, and across Punjab dominate their local search results.",
  },
];