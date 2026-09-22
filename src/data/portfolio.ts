export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: "Full Stack" | "AI Applications" | "SaaS" | "API Integrations" | "Developer Tools";
  role: string;
  featured: boolean;
  technologies: string[];
  highlights: string[];
  problem: string;
  context: string;
  constraints: string[];
  architecture: string[];
  features: string[];
  decisions: string[];
  challenges: string[];
  outcomes: string[];
  liveUrl?: string;
  sourceUrl?: string;
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "dailytools247",
    title: "DailyTools247",
    subtitle: "200+ browser-based utilities serving more than 10,000 users",
    description: "A free, no-signup utility platform covering PDF, image, developer, security, finance, SEO and AI tools across 17 categories.",
    category: "Developer Tools",
    role: "Full Stack Product Engineer",
    featured: true,
    technologies: ["React", "TypeScript", "Vite", "Node.js", "Express.js", "Redis", "Transformers.js", "OpenAI", "Vercel"],
    highlights: ["200 tools", "17 categories", "More than 10,000 users", "Organic acquisition", "No paid advertising"],
    problem: "People need quick, focused utilities without an account wall, complex workflow or unnecessary data retention.",
    context: "DailyTools247 brings a broad catalogue of everyday browser utilities into one searchable, consistent product.",
    constraints: ["Keep supported workflows in the browser", "Remain useful without sign-up", "Make a large tool catalogue discoverable", "Avoid persistent per-user storage"],
    architecture: ["React and TypeScript client", "Node.js and Express.js service layer", "Optional Redis caching", "OpenAI and Transformers.js for supported AI tools", "Vercel delivery and CDN caching"],
    features: ["PDF, image, developer and security utilities", "Finance, SEO and AI tool categories", "Programmatic SEO and structured metadata", "Automated sitemaps", "Client-side processing for supported tools"],
    decisions: ["No persistent user database with optional Redis caching", "Code splitting keeps the large catalogue manageable", "Structured metadata supports organic discovery"],
    challenges: ["Maintaining consistent UX across 168 distinct tools", "Balancing browser processing with service-backed workflows"],
    outcomes: ["200 tools available across 17 categories", "More than 10,000 users", "User growth achieved through organic acquisition without paid advertising"],
    accent: "#55e6ff",
  },
  {
    slug: "trader-ai-chatbot",
    title: "Trader AI Chatbot",
    subtitle: "AI-powered cryptocurrency analysis and information platform",
    description: "Designed and developed a crypto-focused AI platform using retrieval-augmented generation, real-time asset data, technical and fundamental analysis, prediction integrations and referral analytics.",
    category: "AI Applications",
    role: "Full Stack Developer",
    featured: true,
    technologies: ["Next.js", "Django", "Python", "RAG", "REST APIs", "Cryptocurrency data APIs"],
    highlights: ["Retrieval-augmented answers", "Real-time asset data", "Referral analytics"],
    problem: "Crypto research is fragmented across fast-moving data sources and requires a coherent information interface.",
    context: "Built for Cartel AI while working with Sam Digital Solutions, the product combines conversational discovery with market information.",
    constraints: ["Changing third-party market data", "Ground answers in retrieved information", "Coordinate a Next.js and Django stack"],
    architecture: ["Next.js product interface", "Django and Python backend", "Retrieval-augmented generation pipeline", "Cryptocurrency data and prediction integrations", "REST API boundary"],
    features: ["Crypto-focused conversational interface", "Real-time asset information", "Technical and fundamental analysis", "Prediction integrations", "Referral analytics"],
    decisions: ["Use RAG to keep responses tied to available product knowledge", "Separate the web interface and AI/data service concerns"],
    challenges: ["Presenting multiple analysis modes coherently", "Integrating changing external data sources"],
    outcomes: ["Delivered an integrated crypto information and analysis product", "Combined conversational, market-data and referral workflows"],
    accent: "#8a7dff",
  },
  {
    slug: "goinboxly-cloud",
    title: "Goinboxly Cloud",
    subtitle: "Email campaign management and delivery platform",
    description: "Built an email marketing platform supporting campaign creation, recipient-list management, reusable templates, email validation, list hygiene, delivery tracking and campaign analytics.",
    category: "SaaS",
    role: "Full Stack Developer",
    featured: true,
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs"],
    highlights: ["Campaign workflows", "Email validation", "Delivery analytics"],
    problem: "Campaign teams need one workflow for preparing recipient data, composing campaigns and understanding delivery.",
    context: "A MERN platform built at Sam Digital Solutions for managing email campaign operations end to end.",
    constraints: ["Recipient data needs validation and hygiene", "Campaign state must remain clear", "Delivery reporting must be understandable"],
    architecture: ["React campaign workspace", "Node.js and Express.js API", "MongoDB data layer", "REST-based client-server communication"],
    features: ["Campaign creation", "Recipient-list management", "Reusable templates", "Email validation and list hygiene", "Delivery tracking and analytics"],
    decisions: ["Model campaign and recipient workflows independently", "Expose operational state through a consistent REST API"],
    challenges: ["Coordinating validation, list preparation and delivery state", "Designing reusable campaign workflows"],
    outcomes: ["Unified campaign creation and monitoring", "Integrated list hygiene and delivery analytics"],
    accent: "#78f7bd",
  },
  {
    slug: "multi-agent-whatsapp-crm",
    title: "Multi-Agent WhatsApp CRM",
    subtitle: "Centralized lead and customer-conversation management",
    description: "Designed and developed a role-based CRM for administrators and agents, with lead management, KYC workflows, conversation assignment and centralized WhatsApp communication.",
    category: "API Integrations",
    role: "Full Stack Developer",
    featured: true,
    technologies: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Meta WhatsApp Cloud API", "Webhooks"],
    highlights: ["Admin and Agent roles", "Lead ownership", "Webhook-driven updates"],
    problem: "Teams handling customer conversations through WhatsApp need shared ownership, operational visibility and structured follow-up.",
    context: "A centralized CRM for administrators and agents to manage leads, verification workflows and customer conversations.",
    constraints: ["Role-aware access", "External webhook reliability", "Clear conversation ownership", "KYC workflow state"],
    architecture: ["Next.js and TypeScript dashboards", "Node.js and Express.js service layer", "MongoDB persistence", "Meta WhatsApp Cloud API", "Webhook event processing"],
    features: ["Admin and Agent roles", "Lead ownership", "Conversation assignment", "KYC workflows", "Centralized customer conversations"],
    decisions: ["Use webhook-driven updates for external conversation events", "Make lead and conversation ownership explicit"],
    challenges: ["Mapping asynchronous WhatsApp events to CRM state", "Keeping role-based workflows consistent"],
    outcomes: ["Centralized lead and conversation operations", "Clear assignment and ownership across agent workflows"],
    accent: "#52a8ff",
  },
];

export const portfolio = {
  personal: {
    name: "Manish Kumar",
    initials: "MK",
    title: "Full Stack Developer & AI Application Engineer",
    experienceLabel: "Nearly 2 Years of Experience",
    location: "Kolkata, West Bengal, India",
    shortLocation: "Kolkata, India",
    institution: "IIEST Shibpur",
  },
  availability: {
    openToWork: true,
    message: "Open to Full-Time Opportunities",
    workModes: ["Remote", "On-site", "Hybrid"],
  },
  social: {
    github: "https://github.com/manni2000",
    linkedin: "https://www.linkedin.com/in/manish-kr-mandal/",
    portfolioUrl: "https://i-manish-kumar.tech",
  },
  introduction: "I’m a Full Stack Developer and AI Application Engineer with nearly two years of professional experience building production web platforms, AI-powered applications, automation pipelines and cloud-deployed systems. I work across frontend, backend, APIs, databases and deployment, taking products from initial architecture to working production releases.",
  heroCopy: "I design and build production-ready web platforms, AI applications and automation systems across frontend, backend, APIs, databases and cloud deployment.",
  capabilities: ["Product Engineering", "Full Stack Development", "AI Applications", "Automation Systems", "Cloud Deployment", "Technical Ownership"],
  projects,
  experience: [
    {
      company: "Sam Digital Solutions",
      period: "February 2026 – September 2026",
      role: "Full Stack Developer",
      type: "Freelance, Part-time",
      location: "Dubai, UAE",
      mode: "Remote",
      technologies: ["Next.js", "Django", "Python", "MERN", "RAG", "WhatsApp Cloud API"],
      responsibilities: [
        "Architected and developed the Trader AI Chatbot for Cartel AI using a RAG architecture, integrating real-time cryptocurrency data, technical and fundamental analysis, prediction integrations and referral analytics using Django and Next.js.",
        "Engineered Goinboxly Cloud, an email marketing platform with bulk-delivery workflows, email validation, campaign management and delivery analytics using the MERN stack.",
        "Designed and developed a multi-agent WhatsApp CRM with role-based Admin and Agent dashboards, lead management, KYC workflows and centralized conversations using Next.js, Node.js, Express.js, MongoDB and WhatsApp Cloud API.",
      ],
    },
    {
      company: "GreenAI Services Private Limited",
      period: "December 2024 – January 2026",
      role: "Junior Full Stack Engineer",
      type: "Full-time",
      location: "Kolkata, India",
      mode: "On-site",
      technologies: ["Python", "React", "GCP", "CI/CD", "LLM Applications", "Automation"],
      responsibilities: [
        "Architected and launched a responsive company website optimized for performance, scalability and SEO, deployed to Google Cloud with CI/CD automation.",
        "Designed and deployed AI-powered chatbot solutions across legal, enterprise and healthcare use cases, including GreenAI Legal, Incopa and Kokilaben Dhirubhai Ambani Hospital.",
        "Built Python automation pipelines that scraped, cleaned and processed more than 2.8 million web records.",
        "Transformed more than 100,000 Markdown documents into structured JSON datasets for legal-domain LLM training.",
        "Contributed to a multilingual LLM-based grammar-checking system evaluated on real-world datasets.",
      ],
    },
  ],
  skills: {
    Languages: ["JavaScript", "TypeScript", "Python", "C", "C++", "HTML", "CSS"],
    Frontend: ["React", "Next.js", "Tailwind CSS", "shadcn/ui", "Responsive UI", "WebSocket interfaces"],
    Backend: ["Node.js", "Express.js", "Django", "REST APIs", "Authentication and authorization", "Webhooks"],
    "Databases and caching": ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    "Cloud and deployment": ["Google Cloud Platform", "Vercel", "GitHub-based CI/CD"],
    "AI and data engineering": ["Retrieval-augmented generation", "LLM application integration", "Dataset processing", "Web scraping", "Automation pipelines", "OpenAI APIs", "Transformers.js"],
    "Engineering tools": ["Git", "GitHub", "VS Code", "Postman", "Figma"],
  },
  education: {
    institution: "Indian Institute of Engineering Science and Technology, Shibpur",
    degree: "Bachelor of Technology in Information Technology",
    period: "December 2020 – June 2024",
    cgpa: "7.8",
    location: "Howrah, West Bengal, India",
    coursework: ["Data Structures and Algorithms", "Database Management Systems", "Operating Systems", "Object-Oriented Programming", "Software Engineering", "Computer Networks"],
  },
  achievements: [
    "Solved 400+ data-structures and algorithms problems across LeetCode, GeeksforGeeks and other platforms.",
    "Contributed through Social Winter of Code, Hacktoberfest and GirlScript Summer of Code.",
    "Worked as a freelance Computer Science Subject Matter Expert with Chegg India.",
    "Qualified for the Kshitij B-plan event organized by IIT Kharagpur.",
  ],
  resumePath: "/Manish-kumar_Resume.pdf",
  resumeDownloadName: "Manish-Kumar-Resume.pdf",
  seo: {
    title: "Manish Kumar | Full Stack Developer & AI Application Engineer",
    description: "Portfolio of Manish Kumar, a full-stack developer with nearly two years of experience building AI applications, scalable web platforms, automation systems and cloud-deployed products.",
  },
  assistant: [
    { keywords: ["built", "projects", "work"], question: "What has Manish built?", answer: "Manish has built DailyTools247, a crypto-focused AI platform, an email campaign platform, and a multi-agent WhatsApp CRM. His work spans product interfaces, APIs, data systems, AI applications, automation and cloud delivery." },
    { keywords: ["stack", "strongest", "technology", "technologies"], question: "What is his strongest technology stack?", answer: "Manish works most broadly across TypeScript, React and Next.js on the frontend; Node.js, Express.js, Django and Python on the backend; MongoDB, PostgreSQL, MySQL and Redis for data; and GCP or Vercel for deployment." },
    { keywords: ["dailytools", "tools", "168"], question: "Tell me about DailyTools247.", answer: "DailyTools247 is a free, no-signup platform with 200+ browser-based utilities across 17 categories. It serves more than 10,000 users and grew organically without paid advertising." },
    { keywords: ["ai", "rag", "llm"], question: "Does Manish have AI application experience?", answer: "Yes. Manish has built RAG-based chatbot experiences, integrated LLM applications and real-time data APIs, prepared legal-domain training datasets, and contributed to a multilingual grammar-checking system." },
    { keywords: ["greenai", "green ai"], question: "What did he build at GreenAI?", answer: "At GreenAI, Manish shipped a cloud-deployed company platform, chatbot solutions across legal, enterprise and healthcare use cases, automation that processed more than 2.8 million web records, and structured more than 100,000 Markdown documents for legal-domain LLM training." },
    { keywords: ["open", "available", "full-time", "hire"], question: "Is he open to full-time roles?", answer: "Yes. Manish is open to full-time opportunities across remote, on-site and hybrid work modes." },
    { keywords: ["contact", "email", "reach", "linkedin"], question: "How can I contact him?", answer: "Use the Contact page to open a prefilled email when an address is configured, or reach Manish through the GitHub and LinkedIn links in the navigation and footer." },
  ],
  featureFlags: { threeDScene: true, localAssistant: true, githubStats: true, resumeViewer: true, contactForm: true },
} as const;
