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
    desc: "We help your internet site appear higher on Google and get more potential customers. Our search engine optimization offerings enhance your internet site, target appropriate key phrases, and help carry additional visitors from search engines.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="17" cy="17" r="10" stroke="currentColor" strokeWidth="2.5" />
        <path d="M24 24L34 34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M13 17h8M17 13v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    accent: "#00d4ff",
    features: [
      "Keyword Research",
      "On-Page search engine marketing",
      "Technical Search Engine Market",
      "search engine marketing Content",
      "Monthly performance reports",
    ],
    result: "The expected result — more website visibility",
  },
  {
    id: 2,
    tag: "PPC",
    title: "Paid Advertising",
    anchor: "google-ads",
    link: "/services#google-ads",
    desc: "Reach the proper customers with focused paid advertising campaigns built to boom visibility, generate best leads, and assist measurable commercial enterprise boom.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M8 32L16 20L22 26L28 14L36 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="36" cy="8" r="3" fill="currentColor" />
        <path d="M8 36h28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".4" />
      </svg>
    ),
    accent: "#ff6b35",
    features: [
      "Google & Meta Ads Campaigns",
      "Audience & Keyword Targeting",
      "Ad Creative & Copy Developmen",
      "Conversion & Performance Tracking",
      "Budget & Campaign Optimization",

    ],
    result: "Expected outcome — Better Ad Reach & Lead Generation",
  },
  {
    id: 3,
    tag: "SMM",
    title: "Social Media Marketing",
    anchor: "social-media-marketing",
    link: "/services#social-media-marketing",
    desc: "Your social media need to do extra than simply fill your feed. We create content and campaigns that help your emblem live lively, reach the proper people, and build meaningful connections along with your target audience. From content material making plans to paid promotions, we manipulate your social presence with a clear method.",
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
      "Social Media Strategy",
      "Content Planning & Calendar",
      "Post & Creative Design",
      "Reels & Short-Form Content",
      "Monthly Performance Reports",
    ],
    result: "Expected Outcome: Stronger Brand Presence",
  },
  {
    id: 4,
    tag: "WEB",
    title: "Website Development",
    anchor: "web-development",
    link: "/services#web-development",
    desc: "Create an professional internet site that appears first-rate, capabilities easily, and cleans amongst your clients to get in contact with your commercial organisation. We construct web sites which are designed round your logo, audience, and business organisation choice.",
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
      "Custom website design",
      "Mobile-friendly and responsive",
      "E-trade website development",
      "search engine optimization-friendly internet site shape",
      "Fast loading and optimized performance",
    ],
    result: "Built for Performance & Growth",
  },
  {
    id: 5,
    tag: "DESIGN",
    title: "Graphic Design",
    anchor: "graphic-designing",
    link: "/services#graphic-designing",
    desc: "Make your logo stand out with creative and expert designs that talk your message honestly. From trademarks and social media posts to brochures and promotional creatives, we create designs that fit your brand fashion and business desires.",
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
      "Logo & Visual Identity Design",
      "Social Media Post & Creative Design",
      "Brochure, Flyer & Catalogue Design",
      "Business Card & Stationery Design",
      "Promotional Banner & Ad Creative Design",
    ],
    result: "Expected Outcome: Strong & Consistent Brand Presence",
  },
  {
    id: 6,
    tag: "VIDEO",
    title: "Video Editing",
    anchor: "video-editing",
    link: "/services#video-editing",
    desc: "We create easy, engaging videos that help your logo talk its message certainly and hook up with your target audience. From social media reels to promotional motion pictures and ad creatives, our group handles the enhancing, visuals, audio, and completing touches.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="4" y="10" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="2.5" />
        <path d="M28 16l8-5v18l-8-5" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M13 17v6M17 15v10M21 18v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".7" />
      </svg>
    ),
    accent: "#ec4899",
    features: [
      "Promotional & Brand Videos",
      "Instagram Reels & YouTube Shorts",
      "Social Media Ad Videos",
      "Motion Graphics & Visual Effects",
      "Subtitles, Captions & Sound Editing",
    ],
    result: "Expected Outcome Professional & Engaging Video Content",
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
