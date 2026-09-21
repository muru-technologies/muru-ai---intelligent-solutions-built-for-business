import {
  AIService,
  ProblemSolution,
  ProcessStep,
  IndustryItem,
  AIAgent,
  CaseStudy,
  TechCategory
} from '../types';

export const MURU_BRAND = {
  name: "MURU AI",
  parentCompany: "Muru Technology",
  tagline: "Intelligent solutions. Built for business.",
  missionStatement: "We design, build and integrate AI solutions that help businesses automate work, serve customers better and turn their data into actionable intelligence.",
  trustPillars: [
    "AI Strategy",
    "Automation",
    "AI Agents",
    "Integrations",
    "Custom AI Software"
  ],
  whatsappNumber: "+254700000000",
  whatsappMessage: "Hello Muru AI, I would like to discuss an AI project for my business.",
  email: "hello@muru.ai",
  officeLocation: "Nairobi & Global Remote",
};

export const NAV_ITEMS = [
  { name: "Home", href: "#hero", sectionId: "hero" },
  { name: "AI Services", href: "#services", sectionId: "services" },
  { name: "Solutions", href: "#solutions", sectionId: "solutions" },
  { name: "AI Agents", href: "#agents", sectionId: "agents" },
  { name: "Industries", href: "#industries", sectionId: "industries" },
  { name: "Case Studies", href: "#case-studies", sectionId: "case-studies" },
  { name: "About", href: "#about", sectionId: "about" },
  { name: "Contact", href: "#contact", sectionId: "contact" }
];

export const AI_FOR_BUSINESS_PILLARS = [
  {
    id: "automate",
    title: "Automate",
    tagline: "Reduce repetitive manual work with intelligent workflows.",
    description: "Free your team from copying data between systems, processing invoices, or sending routine follow-ups. Intelligent agents take over administrative friction so your team can focus on strategic growth.",
    metric: "Up to 80% reduction in manual data processing time",
    icon: "Zap",
    features: [
      "End-to-end task automation",
      "Document & invoice extraction",
      "Cross-system database sync",
      "Rule-free adaptive workflows"
    ]
  },
  {
    id: "assist",
    title: "Assist",
    tagline: "Give customers and employees AI-powered assistants available whenever they need them.",
    description: "Deploy multilingual, contextual AI concierges across WhatsApp, web portals, and internal Slack/Teams to answer questions, resolve tickets, and capture leads 24 hours a day, 7 days a week.",
    metric: "Instant 24/7 response time with 0 waiting queue",
    icon: "Bot",
    features: [
      "Omnichannel WhatsApp & web coverage",
      "Brand-aligned conversational voice",
      "Internal knowledge base lookups",
      "Seamless human agent handoff"
    ]
  },
  {
    id: "understand",
    title: "Understand",
    tagline: "Turn business data into insights that help teams make better decisions.",
    description: "Transform siloed databases, customer interactions, and spreadsheets into live predictive dashboards, automated executive summaries, and decision-support intelligence.",
    metric: "Real-time decision intelligence across all operations",
    icon: "BarChart3",
    features: [
      "Natural language queries on SQL/CRM",
      "Predictive demand forecasting",
      "Automated executive reports",
      "Early churn & opportunity alerts"
    ]
  }
];

export const AI_SERVICES: AIService[] = [
  {
    id: "ai-agents",
    number: "01",
    title: "AI Agents",
    tagline: "AI employees for repetitive digital tasks.",
    description: "Build autonomous, goal-oriented intelligent agents that act as digital staff members, capable of executing multi-step business procedures across your tools without human intervention.",
    capabilities: [
      "Answer questions accurately using company guidelines",
      "Process complex requests & multi-step approvals",
      "Search information across dispersed business drives",
      "Qualify incoming leads and score purchase intent",
      "Perform repetitive tasks across back-office tools",
      "Connect natively with business systems and APIs"
    ],
    examples: ["Inbound Sales Qualifier", "Procurement Bot", "Policy Auditor"],
    ctaText: "Explore AI Agents",
    iconName: "Cpu"
  },
  {
    id: "ai-chatbots",
    number: "02",
    title: "AI Chatbots",
    tagline: "Turn every conversation into an opportunity.",
    description: "Modern conversational AI tailored specifically for customer touchpoints. Unlike legacy scripted bots, our assistants truly comprehend nuanced customer intent in English, Swahili, and regional dialects.",
    capabilities: [
      "Website 24/7 intelligent concierge & booking",
      "Official WhatsApp Business API integration",
      "Customer support tier-1 resolution and routing",
      "Interactive sales consultation and product advice",
      "Internal team helpdesk for HR and IT support",
      "CRM synchronization of client inquiries and preferences"
    ],
    examples: ["WhatsApp Support Concierge", "Website Conversational Rep"],
    ctaText: "Build an AI Assistant",
    iconName: "MessageSquareText"
  },
  {
    id: "ai-automation",
    number: "03",
    title: "AI Automation",
    tagline: "Let AI handle the work that slows your team down.",
    description: "Replace manual, error-prone administrative tasks with deterministic AI pipelines that extract, transform, validate, and move information with superhuman consistency.",
    capabilities: [
      "Automated lead capture, validation, and CRM entry",
      "Smart customer follow-ups and abandoned cart nudges",
      "Automated structured data entry across legacy databases",
      "Invoice, receipt, and contract OCR document processing",
      "Intelligent email routing and auto-drafted replies",
      "Periodic automated business reporting and notifications"
    ],
    examples: ["Invoice Parsing Engine", "Email-to-CRM Auto Sync", "Weekly Metrics Bot"],
    ctaText: "Automate Business Workflows",
    iconName: "Workflow"
  },
  {
    id: "custom-ai-applications",
    number: "04",
    title: "Custom AI Applications",
    tagline: "AI built specifically for your business.",
    description: "When off-the-shelf software doesn't fit, we engineer bespoke AI-native platforms, internal operating systems, and intelligent customer portals engineered around your proprietary competitive advantage.",
    capabilities: [
      "Full-stack AI-powered enterprise software platforms",
      "SaaS products with embedded machine intelligence",
      "Internal operational tools tailored to your SOPs",
      "Intelligent analytics dashboards and data studios",
      "Client portals with embedded generative AI features",
      "Proprietary workflow engines tailored to your vertical"
    ],
    examples: ["Custom Underwriting Portal", "Logistics Routing Cockpit", "SaaS Copilot"],
    ctaText: "Design Custom AI App",
    iconName: "Layers"
  },
  {
    id: "ai-integrations",
    number: "05",
    title: "AI Integrations",
    tagline: "Connect AI to the systems you already use.",
    description: "AI shouldn't live in an isolated silo. We connect advanced intelligence layers into your existing software stack, eliminating context switching and syncing your records in real time.",
    capabilities: [
      "WhatsApp → AI → CRM (HubSpot, Salesforce, Zoho)",
      "Website Forms → AI → Production Database (PostgreSQL, Supabase)",
      "Customer Mailbox → AI → Helpdesk (Zendesk, Freshdesk, Slack)",
      "AI → Custom Internal Enterprise ERP & Billing APIs",
      "Vector embeddings connected to proprietary company archives",
      "Secure webhook architecture with bank-grade encryption"
    ],
    examples: ["HubSpot WhatsApp Sync", "Stripe Order Verification Agent"],
    ctaText: "Connect Your Systems",
    iconName: "Network"
  },
  {
    id: "ai-data-analytics",
    number: "06",
    title: "AI Data & Analytics",
    tagline: "Turn your business data into intelligence.",
    description: "Stop guessing. We transform raw sales figures, operational logs, and customer touchpoints into actionable clarity with natural language data querying and predictive forecasting.",
    capabilities: [
      "Automated executive reports delivered to executive inboxes",
      "Deep cohort analysis & customer lifetime value modeling",
      "Dynamic business intelligence dashboards with live metrics",
      "AI-powered anomaly detection and fraud warning alerts",
      "Demand forecasting and supply chain inventory planning",
      "Executive decision-support simulations and scenario testing"
    ],
    examples: ["Weekly AI Revenue Memo", "Predictive Churn Radar"],
    ctaText: "Unlock Business Data",
    iconName: "LineChart"
  }
];

export const PROBLEM_SOLUTIONS: ProblemSolution[] = [
  {
    id: "customer-questions",
    quote: "“We get too many customer questions.”",
    tag: "High Ticket Volumes",
    solutionTitle: "AI Customer Support Concierge",
    solutionType: "AI Assistant & Ticket Resolution",
    summary: "An intelligent, polite 24/7 AI agent deployed on WhatsApp and your website that resolves 70%+ of standard inquiries immediately, escalating only complex matters to human staff with full context.",
    businessBenefit: "Eliminates response lag, cuts support overhead by 60%, and ensures zero customers are left waiting after business hours.",
    systems: ["WhatsApp Business API", "Helpdesk", "Zendesk", "Website Chat"],
    exampleOutcome: "Resolved 4,200 repetitive inquiries/mo with 4.8/5 satisfaction rating."
  },
  {
    id: "repetitive-work",
    quote: "“Our employees spend hours doing repetitive work.”",
    tag: "Administrative Drag",
    solutionTitle: "AI Workflow Automation Engine",
    solutionType: "Intelligent Process Automation",
    summary: "Automated end-to-end pipelines that extract data from PDFs, emails, or forms, validate against business rules, and write cleanly into your ERP or databases without human copy-pasting.",
    businessBenefit: "Saves 15–25 hours per employee weekly, eliminates typo errors, and frees your senior staff to focus on high-value revenue drivers.",
    systems: ["Invoices/Receipts", "ERP & Accounting", "Google Drive / OneDrive", "Databases"],
    exampleOutcome: "Reduced loan application intake cycle from 48 hours to 4 minutes."
  },
  {
    id: "lost-leads",
    quote: "“We lose leads because nobody follows up quickly.”",
    tag: "Slow Lead Response",
    solutionTitle: "AI Sales & Qualification Agent",
    solutionType: "Autonomous Sales Representative",
    summary: "Instant conversational outreach within 30 seconds of an inbound inquiry. The AI agent asks qualifying questions, matches requirements, and books a calendar slot directly into your sales team's calendar.",
    businessBenefit: "Quadruples lead conversion rates by responding during peak customer intent, regardless of timezones or weekends.",
    systems: ["HubSpot / Salesforce", "WhatsApp", "Calendly / Google Cal", "Website Leads"],
    exampleOutcome: "3.8x faster first-response time resulting in a 34% rise in closed deals."
  },
  {
    id: "scattered-info",
    quote: "“Our information is scattered across different systems.”",
    tag: "Knowledge Fragmentation",
    solutionTitle: "AI Enterprise Knowledge Assistant",
    solutionType: "RAG & Unified Knowledge Copilot",
    summary: "A private, secure AI copilot trained on your internal documents, SOPs, past proposals, and company handbook. Staff can ask questions in plain English and receive cited, exact answers instantly.",
    businessBenefit: "Slashes onboarding time for new hires in half and prevents tribal knowledge loss when experienced employees leave.",
    systems: ["Internal PDFs", "Notion / Confluence", "SharePoint", "Slack Archives"],
    exampleOutcome: "Staff save an average of 42 minutes per day searching for internal files."
  },
  {
    id: "data-blindness",
    quote: "“We have lots of data but don't know what it means.”",
    tag: "Underutilized Data",
    solutionTitle: "AI Business Intelligence & Insights",
    solutionType: "Executive Decision-Support System",
    summary: "Connect your transactional logs and sales sheets to an AI analytics layer. Receive plain-language executive summaries, early warning alerts, and automated weekly digests explaining trends and root causes.",
    businessBenefit: "Replaces costly manual BI consulting with continuous, automated strategic intelligence ready for board reviews.",
    systems: ["PostgreSQL / BigQuery", "Stripe / M-Pesa Logs", "Google Sheets", "CRM Data"],
    exampleOutcome: "Identified $45,000 in uncollected accounts receivable within the first 14 days."
  },
  {
    id: "ai-product-idea",
    quote: "“We have an idea for an AI product.”",
    tag: "New Venture / Innovation",
    solutionTitle: "Custom AI Product Engineering",
    solutionType: "End-to-End Bespoke AI Development",
    summary: "From architecture design to LLM evaluation, prompt engineering, vector search implementation, and production deployment, we build scalable software products designed for enterprise security.",
    businessBenefit: "Go from concept to production-ready market launch in weeks instead of quarters, backed by enterprise engineering standards.",
    systems: ["React / Next.js", "Cloud Run / AWS", "OpenAI / Claude / Gemini", "Vector DB"],
    exampleOutcome: "Shipped fully functional compliance SaaS MVP to enterprise pilots in 6 weeks."
  }
];

export const MURU_AGENTS: AIAgent[] = [
  {
    id: "sales-agent",
    name: "Sales Agent",
    role: "Lead Acquisition & Qualification",
    tagline: "Captures, qualifies, and nurtures leads 24/7.",
    description: "Engages prospects instantly upon contact. Evaluates budget, timeline, and decision-maker status using conversational logic, then logs data to CRM and books meetings.",
    capabilities: [
      "Sub-30s response to web & WhatsApp leads",
      "BANT qualification methodology",
      "Dynamic calendar booking integration",
      "HubSpot / Salesforce auto-enrichment"
    ],
    sampleTrigger: "Inbound form submitted on website",
    sampleAction: "Initiates WhatsApp chat, confirms budget > $5k, syncs to HubSpot & reserves calendar slot.",
    connectedSystems: ["WhatsApp", "HubSpot", "Google Calendar", "Stripe"]
  },
  {
    id: "support-agent",
    name: "Support Agent",
    role: "24/7 Customer Resolution",
    tagline: "Answers customer questions and resolves tickets 24/7.",
    description: "Trained on your knowledge base, policy docs, and order history. Accurately handles billing inquiries, order status, return policies, and troubleshooting without waiting.",
    capabilities: [
      "Zero-latency multi-channel support",
      "Full context order & ticket lookups",
      "Sentiment-aware human escalation",
      "Multilingual translation (English, Swahili, French)"
    ],
    sampleTrigger: "Customer inquires: 'Where is my shipment #8492?'",
    sampleAction: "Queries logistics API, confirms transit status, and replies via SMS/WhatsApp with live tracking link.",
    connectedSystems: ["Shopify", "Zendesk", "Logistics API", "WhatsApp"]
  },
  {
    id: "research-agent",
    name: "Research Agent",
    role: "Intelligence & Market Synthesis",
    tagline: "Finds, analyzes and summarizes vital information.",
    description: "Monitors industry feeds, analyzes competitor movements, digests massive regulatory filings, and outputs structured intelligence memos for executive leadership.",
    capabilities: [
      "Automated web & document synthesis",
      "Competitive pricing intelligence",
      "Regulatory policy change alerts",
      "Structured executive briefing memos"
    ],
    sampleTrigger: "New government regulatory gazette published",
    sampleAction: "Extracts clauses impacting company operations, flags 3 compliance risks, and emails 1-page digest.",
    connectedSystems: ["Web Scrapers", "Document Stores", "Notion", "Email Gateway"]
  },
  {
    id: "operations-agent",
    name: "Operations Agent",
    role: "Workflow & Administrative Execution",
    tagline: "Automates repetitive business workflows.",
    description: "Bridges the gap between messy inbound communication and rigid back-office software. Audits vendor receipts, confirms purchase orders, and updates financial systems.",
    capabilities: [
      "Cross-system data reconciliation",
      "Invoice and expense verification",
      "Automated vendor dispatch and reminders",
      "Audit trail compliance logging"
    ],
    sampleTrigger: "Supplier emails invoice PDF with 40 line items",
    sampleAction: "Parses items, cross-checks against PO #1092, flags 2 price discrepancies, and routes for one-click approval.",
    connectedSystems: ["Xero / QuickBooks", "Gmail", "ERP", "Slack"]
  },
  {
    id: "knowledge-agent",
    name: "Knowledge Agent",
    role: "Internal Enterprise Copilot",
    tagline: "Answers questions using your company's internal information.",
    description: "Empowers every team member with a private AI assistant that knows every SOP, past contract, engineering spec, and internal process. Secure and hallucination-guarded.",
    capabilities: [
      "Strict citation of internal company sources",
      "Role-based access control permissions",
      "Instant onboarding assistance for recruits",
      "Drafts proposals using historical company wins"
    ],
    sampleTrigger: "Junior associate asks: 'What is our standard cancellation SLA for Tier-2 clients?'",
    sampleAction: "Retrieves Master Services Agreement Section 4.2 and provides exact SLA with direct link to source document.",
    connectedSystems: ["Google Drive", "SharePoint", "Confluence", "Slack"]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    tagline: "We understand your business, workflow and challenges.",
    description: "We begin by mapping your operational bottlenecks, team workflows, and customer journeys. No AI buzzwords—just an honest assessment of where friction costs you money.",
    deliverable: "AI Feasibility & ROI Opportunity Audit"
  },
  {
    number: "02",
    title: "Design",
    tagline: "We identify where AI can create measurable value.",
    description: "We architect a targeted solution specifying data pipelines, model choices, security safeguards, and measurable business KPIs (hours saved, conversion increase).",
    deliverable: "System Architecture & Business Impact Blueprint"
  },
  {
    number: "03",
    title: "Build",
    tagline: "We design and develop your AI solution.",
    description: "Our engineering team develops the custom logic, fine-tuned prompts, and robust user interfaces, ensuring guardrails against hallucinations and bias.",
    deliverable: "Production-Grade AI Engine & UI Components"
  },
  {
    number: "04",
    title: "Integrate",
    tagline: "We connect it to your existing systems.",
    description: "We plug the AI solution directly into your existing CRM, WhatsApp, ERP, and databases using resilient APIs. Your staff works in the tools they already know.",
    deliverable: "Secure Bidirectional System Integrations"
  },
  {
    number: "05",
    title: "Launch",
    tagline: "We deploy, test and monitor the solution.",
    description: "We roll out with controlled pilot groups, rigorous stress-testing, and hands-on staff training to ensure high adoption and smooth day-one performance.",
    deliverable: "Staged Deployment & Staff Enablement Workshop"
  },
  {
    number: "06",
    title: "Improve",
    tagline: "We continuously optimize the system as your business grows.",
    description: "AI thrives on continuous feedback. We analyze real user interactions, refine response quality, and adapt workflows as your business expands.",
    deliverable: "Monthly Optimization & Intelligence Tuning"
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: "hospitality",
    name: "Hospitality & Tourism",
    tagline: "Elevate guest experiences from booking to check-out.",
    description: "Deploy multilingual reservation concierges, dynamic itinerary creators, and instant hotel service dispatch on WhatsApp.",
    useCases: [
      "WhatsApp room booking and instant quote concierge",
      "Automated guest concierge for amenities & dining",
      "Dynamic pricing recommendations based on seasonality",
      "Staff task assignment and housekeeping dispatch"
    ],
    statsOrFocus: "24/7 Multi-language guest service in 12+ dialects"
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    tagline: "Convert visitors into loyal buyers with personalized shopping.",
    description: "Smart product discovery assistants, automated order updates, personalized upsell recommendations, and instant returns processing.",
    useCases: [
      "Conversational product recommendation engines",
      "Automated cart abandonment recovery via WhatsApp",
      "Zero-latency order tracking and returns handling",
      "Customer review sentiment analysis and inventory signals"
    ],
    statsOrFocus: "+28% average order value with conversational upsells"
  },
  {
    id: "real-estate",
    name: "Real Estate",
    tagline: "Qualify high-intent buyers and automate property inquiries.",
    description: "AI agents that answer property questions, verify buyer financing readiness, share floorplans, and book physical viewing appointments.",
    useCases: [
      "24/7 property listing inquiry assistant",
      "Automated buyer budget & mortgage pre-qualification",
      "Calendar scheduling for viewing appointments",
      "Agent CRM synchronization and follow-up reminders"
    ],
    statsOrFocus: "100% of weekend inquiries responded to within 1 minute"
  },
  {
    id: "education",
    name: "Education & EdTech",
    tagline: "Empower students and streamline institutional administration.",
    description: "Personalized student study tutors, admissions inquiry bots, and administrative document processing for schools and universities.",
    useCases: [
      "Student admissions & fee payment FAQ bot",
      "Personalized course study tutor and homework assistant",
      "Automated transcript and enrollment processing",
      "Campus event and schedule notification coordinator"
    ],
    statsOrFocus: "Up to 75% reduction in repetitive admissions emails"
  },
  {
    id: "ngos",
    name: "NGOs & Non-Profits",
    tagline: "Maximize humanitarian impact with automated operations.",
    description: "Automate grant reporting, field survey data aggregation, beneficiary communication in local languages, and donor transparency updates.",
    useCases: [
      "Field survey data extraction and automatic cleansing",
      "Multilingual community SMS/WhatsApp updates",
      "Automated grant compliance documentation and reporting",
      "Donor engagement and impact storytelling digests"
    ],
    statsOrFocus: "Saved 200+ staff hours per quarterly reporting cycle"
  },
  {
    id: "financial-services",
    name: "Financial Services",
    tagline: "Deliver compliant, secure, and fast financial services.",
    description: "AI-assisted loan pre-screening, financial document extraction, anti-fraud anomaly detection, and automated account inquiry resolution.",
    useCases: [
      "Instant KYC document extraction and verification",
      "Loan eligibility pre-screening and income analysis",
      "Account balance and transaction inquiry assistants",
      "Transaction anomaly monitoring and alert flags"
    ],
    statsOrFocus: "Bank-grade data encryption and strict compliance controls"
  },
  {
    id: "retail",
    name: "Retail & Distribution",
    tagline: "Unify in-store intelligence with digital supply chains.",
    description: "AI stock forecasting, automated distributor replenishment orders, customer loyalty engagement, and store performance summaries.",
    useCases: [
      "Intelligent stock replenishment notifications",
      "Distributor WhatsApp order intake and automated ERP logging",
      "Customer loyalty reward reminders and promotions",
      "Store-level sales pattern insights for management"
    ],
    statsOrFocus: "Eliminates stockouts with predictive replenishment"
  },
  {
    id: "professional-services",
    name: "Professional Services",
    tagline: "Supercharge billable hours for legal, audit, and consulting.",
    description: "Internal knowledge retrieval across decades of files, automated client intake, proposal drafting, and meeting transcription intelligence.",
    useCases: [
      "Firm-wide legal & advisory document RAG search",
      "Automated client scoping questionnaires and briefs",
      "Instant proposal first-draft generation based on past bids",
      "Executive meeting summaries with action items"
    ],
    statsOrFocus: "+35% billable team productivity on complex engagements"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-support",
    title: "AI Customer Support Platform",
    category: "AI Chatbots & Integrations",
    clientType: "Fast-Growing Regional Telecommunications & ISP Provider",
    challenge: "The client was receiving over 12,000 inquiries monthly across WhatsApp and their website. Support staff were overwhelmed by repetitive queries about coverage, billing balances, and router troubleshooting, leading to 4-hour wait times and high customer churn.",
    solution: "Muru AI developed an intelligent, omnichannel customer assistant integrated with the company's billing API, network status database, and WhatsApp Business account.",
    whatItDoes: [
      "Answers common technical and billing questions instantly with live account lookups",
      "Captures customer verified identity and account credentials securely",
      "Performs automated line diagnostic checks on active router connections",
      "Routes complex network issues and field technician requests with pre-filled CRM tickets"
    ],
    technology: ["Muru AI Core", "WhatsApp Business API", "Custom Node.js Engine", "Billing REST API", "Vector Knowledge Store"],
    metrics: [
      { label: "Queries Auto-Resolved", value: "74%" },
      { label: "Average Response Time", value: "< 4s" },
      { label: "Customer CSAT Rating", value: "4.8/5" },
      { label: "Overhead Reduction", value: "55%" }
    ]
  },
  {
    id: "cs-automation",
    title: "Automated Invoice & Logistics Intelligence",
    category: "AI Automation & Enterprise Data",
    clientType: "East African Freight & Supply Chain Distributor",
    challenge: "Processing cross-border customs declarations and vendor invoices required a team of 14 clerks manually transcribing data from unstandardized paper bills, resulting in constant shipping delays and costly customs discrepancy penalties.",
    solution: "Muru AI engineered an intelligent document processing pipeline using computer vision and multimodal AI to parse multi-lingual manifests, validate tariff codes, and sync automatically to their SAP ERP.",
    whatItDoes: [
      "Scans multimodal invoices and customs bills in English, French, and Portuguese",
      "Validates item quantities and tariff codes against customs guidelines",
      "Directly flags price variances above 3% for senior procurement review",
      "Automatically updates ERP ledger balances without human data entry"
    ],
    technology: ["Multimodal AI", "PostgreSQL", "SAP Integration API", "Document OCR", "Webhook Pipelines"],
    metrics: [
      { label: "Intake Cycle Time", value: "-92%" },
      { label: "Data Accuracy", value: "99.4%" },
      { label: "Annual Cost Savings", value: "$140,000+" },
      { label: "Clerk Hours Saved/Mo", value: "1,200 hrs" }
    ]
  },
  {
    id: "cs-sales",
    title: "Real Estate 24/7 Lead Concierge",
    category: "AI Sales Agents",
    clientType: "Premier Property Development & Advisory Group",
    challenge: "High-value international property buyers were reaching out over weekends and different time zones. By the time brokers replied on Monday, over 40% of leads had moved on or booked with competing developments.",
    solution: "Muru AI launched an autonomous Sales Agent on WhatsApp and the web portal capable of holding natural property advisory conversations, presenting floor plans, verifying buyer budgets, and scheduling site visits directly on agent calendars.",
    whatItDoes: [
      "Answers questions regarding unit pricing, square footage, amenities, and payment plans",
      "Sends curated PDF brochures and 3D virtual tour walkthrough links dynamically",
      "Qualifies buyer readiness (cash vs mortgage, timeline, purchasing authority)",
      "Syncs conversation transcripts directly to HubSpot CRM and schedules video consultations"
    ],
    technology: ["Muru AI Agent", "HubSpot CRM", "WhatsApp API", "Google Calendar API", "Cloud Architecture"],
    metrics: [
      { label: "Lead Response Time", value: "22 sec" },
      { label: "Qualified Lead Conversion", value: "+38%" },
      { label: "Weekend Bookings Captured", value: "240+" },
      { label: "Pipeline Value Generated", value: "$4.2M" }
    ]
  }
];

export const TECH_ECOSYSTEM: TechCategory[] = [
  {
    title: "AI Models",
    description: "We deploy state-of-the-art foundation models with enterprise privacy guarantees.",
    items: ["OpenAI (GPT-4o)", "Anthropic (Claude 3.5 Sonnet)", "Google AI (Gemini 2.0 / Flash)", "Open-Source Llama 3 on Private VPCs"]
  },
  {
    title: "Engineering & Architecture",
    description: "Production-ready, battle-tested modern web, cloud, and edge infrastructure.",
    items: ["React & Next.js", "TypeScript & Node.js", "Python FastAPIs", "Docker & Cloud Run", "Microservices Architecture"]
  },
  {
    title: "Data & Memory",
    description: "Scalable data stores and vector indexes optimized for sub-second retrieval.",
    items: ["PostgreSQL & Supabase", "Vector Databases (Pinecone, Qdrant)", "MongoDB", "Redis Cache", "Enterprise Cloud Warehouses"]
  },
  {
    title: "Integrations & APIs",
    description: "Connecting directly to the business tools your organization already depends on.",
    items: ["WhatsApp Business API", "HubSpot & Salesforce", "Zoho & Zendesk", "REST & GraphQL APIs", "Stripe & M-Pesa Gateways"]
  }
];

export const WHY_MURU_AI = [
  {
    pillar: "Business First",
    title: "We start with your business problem — not the technology.",
    description: "We never push AI for the sake of novelty. Every system we build must deliver a clear, measurable commercial outcome: lower cost, higher revenue, or faster cycle times.",
    icon: "Target"
  },
  {
    pillar: "Practical AI",
    title: "We focus on solutions that can actually be deployed and used.",
    description: "No endless theoretical research or science projects. We build robust, reliable systems that your real-world employees and customers can navigate seamlessly on day one.",
    icon: "CheckCircle2"
  },
  {
    pillar: "Integrated",
    title: "Your AI should work with the systems your business already uses.",
    description: "We don't force your team to learn a dozen new dashboards. We embed intelligent capabilities right inside your current CRM, WhatsApp, databases, and emails.",
    icon: "GitMerge"
  },
  {
    pillar: "Built to Scale",
    title: "Solutions are designed to grow alongside your business.",
    description: "From handling 100 inquiries a day to 100,000 across multiple international offices, our architectures are engineered for enterprise security, resilience, and scale.",
    icon: "TrendingUp"
  }
];

export const FAQ_ITEMS = [
  {
    question: "How long does it take to build and deploy an AI solution with Muru AI?",
    answer: "Most focused solutions (such as an AI WhatsApp Concierge, Lead Qualification Agent, or Document Automation Pipeline) are deployed within 2 to 4 weeks. Larger custom enterprise platforms and bespoke multi-system integrations typically range from 6 to 10 weeks, with iterative milestone releases."
  },
  {
    question: "Is our proprietary business data safe and private?",
    answer: "Absolutely. We adhere to strict enterprise data confidentiality. Your data is never used to train public models. All vector databases, embeddings, and API pipelines are isolated with end-to-end encryption, and can be deployed inside your private VPC or cloud environment."
  },
  {
    question: "Do we need to replace our current software or CRM?",
    answer: "No. Muru AI is designed to integrate into your existing tech stack (HubSpot, Salesforce, Zoho, WhatsApp, PostgreSQL, Google Workspace, custom ERPs). AI acts as an intelligence bridge that makes your current software exponentially more powerful."
  },
  {
    question: "How do we prevent AI from making up information (hallucinations)?",
    answer: "We build strict guardrails using Retrieval-Augmented Generation (RAG) and deterministic business verification layers. The AI is programmed to only answer using verified company facts and documents. If a question falls outside its scope, it gracefully escalates to your team."
  }
];
