
export const WEB_SERVICES = [
  {
    id: 1,
    tag: "LANDING PAGES",
    title: "High-Converting Landing Pages",
    desc: "Pixel-perfect landing pages built for speed, conversions, and brand impact. Every element is A/B tested and optimized.",
    accent: "#048C8C",
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <rect x="4" y="8" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="2.2" />
        <path d="M4 14h32" stroke="currentColor" strokeWidth="2" opacity=".5" />
        <rect x="10" y="20" width="12" height="2" rx="1" fill="currentColor" opacity=".6" />
        <rect x="10" y="24" width="8" height="2" rx="1" fill="currentColor" opacity=".4" />
        <rect x="24" y="19" width="8" height="5" rx="2" fill="currentColor" opacity=".3" />
      </svg>
    ),
  },
  {
    id: 2,
    tag: "E-COMMERCE",
    title: "E-Commerce Stores That Sell",
    desc: "WooCommerce & Shopify stores with seamless checkout, product management, and payment gateway integrations.",
    accent: "#17ABBC",
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <path d="M6 8h4l3 14h18l3-10H13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="18" cy="34" r="2" fill="currentColor" />
        <circle cx="28" cy="34" r="2" fill="currentColor" />
        <path d="M20 16l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 3,
    tag: "BUSINESS WEBSITES",
    title: "Corporate & Business Websites",
    desc: "Professional multi-page websites that establish authority, generate leads and convert visitors into customers 24/7.",
    accent: "#6DC497",
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <rect x="5" y="12" width="30" height="20" rx="3" stroke="currentColor" strokeWidth="2.2" />
        <path d="M5 18h30" stroke="currentColor" strokeWidth="2" opacity=".5" />
        <rect x="10" y="22" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" opacity=".6" />
        <rect x="20" y="22" width="10" height="2" rx="1" fill="currentColor" opacity=".5" />
        <rect x="20" y="26" width="7" height="2" rx="1" fill="currentColor" opacity=".3" />
        <path d="M12 8h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".4" />
      </svg>
    ),
  },
  {
    id: 4,
    tag: "WEB APPS",
    title: "Custom Web Applications",
    desc: "React & Node.js powered web apps with dashboards, APIs, and real-time features built for scale and performance.",
    accent: "#048C8C",
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <path d="M8 20c0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12S8 26.627 8 20z" stroke="currentColor" strokeWidth="2.2" />
        <path d="M14 20c0-3.314 2.686-6 6-6s6 2.686 6 6-2.686 6-6 6" stroke="currentColor" strokeWidth="2" opacity=".5" />
        <circle cx="20" cy="20" r="2.5" fill="currentColor" />
        <path d="M20 8v4M20 28v4M8 20H4M36 20h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".4" />
      </svg>
    ),
  },
  {
    id: 5,
    tag: "CMS WEBSITES",
    title: "WordPress CMS Development",
    desc: "Custom WordPress themes and plugins. Manage your content with ease — no coding required after handoff.",
    accent: "#17ABBC",
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2.2" />
        <path d="M8 20h24M20 6c-4 4-6 8-6 14s2 10 6 14M20 6c4 4 6 8 6 14s-2 10-6 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".6" />
      </svg>
    ),
  },
  {
    id: 6,
    tag: "MAINTENANCE",
    title: "Website Speed & Maintenance",
    desc: "Monthly maintenance, security updates, speed optimization (Core Web Vitals), and 24/7 uptime monitoring.",
    accent: "#6DC497",
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <path d="M20 6l2.4 7.4H30l-6.2 4.5 2.4 7.4L20 21l-6.2 4.3 2.4-7.4L10 13.4h7.6z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M8 32l6-6M32 32l-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".5" />
        <path d="M14 36h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".4" />
      </svg>
    ),
  },
];

export const PROCESS = [
  { step: "01", title: "Discovery & Strategy", desc: "We understand your goals, audience, and competition to craft a website blueprint that converts.", color: "#048C8C" },
  { step: "02", title: "UI/UX Design", desc: "Wireframes to pixel-perfect mockups. Every screen designed for maximum engagement and clarity.", color: "#17ABBC" },
  { step: "03", title: "Development", desc: "Clean, fast, SEO-ready code. Built mobile-first with modern frameworks and best practices.", color: "#6DC497" },
  { step: "04", title: "Testing & Launch", desc: "Cross-browser QA, performance audits, and a smooth launch with zero downtime.", color: "#048C8C" },
];

export const TECH_STACK = [
  { label: "React.js", dot: "#61dafb" },
  { label: "Node.js", dot: "#68a063" },
  { label: "WordPress", dot: "#17ABBC" },
  { label: "Shopify", dot: "#6DC497" },
  { label: "WooCommerce", dot: "#7ab8b4" },
  { label: "MongoDB", dot: "#47a248" },
  { label: "Tailwind CSS", dot: "#06b6d4" },
  { label: "Figma", dot: "#a259ff" },
  { label: "MySQL", dot: "#4479a1" },
  { label: "Firebase", dot: "#ffca28" },
  { label: "Vercel", dot: "#e8f8f5" },
  { label: "cPanel", dot: "#048C8C" },
];


export const WHY_US = [
  {
    accent: "#048C8C",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="28" height="28">
        <path d="M20 4L4 12v8c0 9 7 16 16 17 9-1 16-8 16-17v-8L20 4z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M13 20l5 5 9-9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "100% Ownership Handoff",
    desc: "Every file, credential, and source code belongs to you after delivery — no lock-ins, ever.",
  },
  {
    accent: "#17ABBC",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="28" height="28">
        <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="2.2" />
        <path d="M20 10v10l6 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "On-Time Delivery, Always",
    desc: "We set clear milestones and hit them. Your launch date is treated like a promise, not a suggestion.",
  },
  {
    accent: "#6DC497",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="28" height="28">
        <rect x="5" y="8" width="30" height="22" rx="3" stroke="currentColor" strokeWidth="2.2" />
        <path d="M5 14h30" stroke="currentColor" strokeWidth="2" opacity=".5" />
        <path d="M13 20h14M13 25h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".6" />
      </svg>
    ),
    title: "Mobile-First by Default",
    desc: "Every website we build is fully responsive — tested across 10+ real devices before handoff.",
  },
  {
    accent: "#048C8C",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="28" height="28">
        <path d="M10 20c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M6 32l8-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="30" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M28.5 12h3M30 10.5v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "SEO-Optimized from Day 1",
    desc: "Clean code, fast load times, and proper on-page SEO baked in — so Google notices you immediately.",
  },
  {
    accent: "#17ABBC",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="28" height="28">
        <path d="M8 28l8-8 6 6 10-12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="4" y="4" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2" opacity=".3" />
      </svg>
    ),
    title: "Performance-Grade Speed",
    desc: "We target 95+ Lighthouse scores. Fast websites rank higher, convert better, and retain users longer.",
  },
  {
    accent: "#6DC497",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="28" height="28">
        <circle cx="20" cy="14" r="6" stroke="currentColor" strokeWidth="2.2" />
        <path d="M8 34c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M28 10l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Dedicated Post-Launch Support",
    desc: "We don't disappear after go-live. Every project includes free support so your site stays flawless.",
  },
];

export const FAQS = [
  {
    q: "How long does it take to build a website?",
    a: "A standard 5-10 page business website takes 7-14 working days. E-commerce or custom web applications may take 3-6 weeks depending on complexity and feature requirements.",
  },
  {
    q: "Will my website be mobile-friendly?",
    a: "Absolutely. Every website we build is mobile-first and fully responsive. We test across all major devices and browsers before delivery.",
  },
  {
    q: "Do you provide website hosting?",
    a: "Yes, we can set up and manage hosting for you. We work with cPanel hosting, VPS servers, and cloud platforms like Vercel and AWS depending on your needs.",
  },
  {
    q: "Can I update my website content myself?",
    a: "Yes! WordPress-based websites allow you to update content, images, and blogs easily without any coding knowledge. We also provide a training session after handoff.",
  },
  {
    q: "What's included in website maintenance?",
    a: "Our maintenance plans include security updates, plugin/theme updates, speed optimization, daily backups, uptime monitoring, and minor content updates every month.",
  },
];

export const STATS = [
  { number: "200+", label: "Websites Delivered" },
  { number: "100%", label: "Mobile Responsive" },
  { number: "< 2s", label: "Avg Load Time" },
  { number: "5★", label: "Client Rating" },
];