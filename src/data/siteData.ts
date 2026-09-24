import {
  ServiceItem,
  ProblemMatcherItem,
  AutonomousAgent,
  CaseStudy,
  ProcessStep,
  IndustryVertical,
  TechStackCategory,
  EngineeringPrinciple,
  KnowledgeDocument,
  SystemServiceNode,
  WorkflowActivityEvent,
  CompanyDivision,
} from '../types';

export const COMPANY_DETAILS = {
  name: 'Muru AI',
  groupName: 'Muru Tech',
  parentName: 'Muru Tech Inc',
  legalName: 'Muru IT Technology Solutions Group',
  division: 'AI ,CONSULT,SMS,ROBOTICS,APP and licences,ERP',
  divisionSummary: 'AI • CONSULT • SMS • ROBOTICS • APP & LICENCES • ERP',
  divisionList: ['AI', 'CONSULT', 'SMS', 'ROBOTICS', 'APP & LICENCES', 'ERP'] as const,
  tagline: 'Intelligent Solutions. Built for Business.',
  mission: 'Delivering end-to-end technology excellence across 6 specialized enterprise divisions: AI, Consulting, Bulk SMS, Robotics, Custom Apps & Licences, and Enterprise ERP.',
  location: 'Nairobi, Kenya • Serving East Africa & Global Enterprises',
  email: 'support@murutechinc.com',
  phone: '+254 716 748 685',
  whatsappNumber: '+254 716 748685',
  whatsappDirectUrl: 'https://wa.me/254716748685?text=Hello%20Muru%20Tech,%20I%20would%20like%20to%20discuss%20an%20enterprise%20project%20for%20my%20business.',
};

export const COMPANY_DIVISIONS: CompanyDivision[] = [
  {
    id: 'ai',
    code: 'AI',
    name: 'Artificial Intelligence & Autonomous Agents',
    shortTitle: 'AI Division',
    tagline: 'Autonomous digital workers, cognitive LLMs & predictive engines.',
    description:
      'Architecting production-grade AI systems that transform business operations. From autonomous digital staff members that execute multi-step business procedures to enterprise DocuSense RAG pipelines, fine-tuned domain LLMs, and computer vision OCR.',
    offerings: [
      'Autonomous Digital Workforce Agents (Sales, HR, Ops)',
      'Official WhatsApp Business API Conversational Bots',
      'DocuSense Enterprise RAG & PDF Grounding Engines',
      'Computer Vision, OCR & Structured Document Parsing',
      'Hybrid Multi-LLM Orchestration (Gemini, Claude, DeepSeek)',
      'Predictive Business Intelligence & Churn Scoring Models',
    ],
    technologies: [
      'Gemini 2.5 Pro',
      'Claude 3.7 Sonnet',
      'DeepSeek R1',
      'LangChain',
      'pgvector',
      'FastAPI',
    ],
    iconName: 'Bot',
    badgeColor: 'sky',
    metrics: {
      label: 'Avg Response Latency',
      value: '< 1.2s',
    },
  },
  {
    id: 'consult',
    code: 'CONSULT',
    name: 'Enterprise Technology & Strategy Consulting',
    shortTitle: 'Consulting Practice',
    tagline: 'Executive advisory, system architecture & transformation blueprints.',
    description:
      'Guiding C-level executives, IT leadership, and growing enterprises through mission-critical technology decisions. We conduct thorough system audits, design cloud architectures, and deliver actionable digital transformation roadmaps.',
    offerings: [
      'Enterprise Architecture & Legacy Systems Audit',
      'Digital Transformation & AI Readiness Roadmaps',
      'Cloud Infrastructure Migration & Multi-Cloud Strategy',
      'Cybersecurity, Zero Trust & SOC 2 Compliance Advisory',
      'Vendor Evaluation, RFP Formulation & Tech Due Diligence',
      'CTO-as-a-Service & Interim Executive Technical Leadership',
    ],
    technologies: [
      'TOGAF Architecture',
      'AWS Well-Architected',
      'Azure Cloud',
      'ISO 27001',
      'DevOps CI/CD',
      'Enterprise FinOps',
    ],
    iconName: 'Compass',
    badgeColor: 'amber',
    metrics: {
      label: 'Comprehensive Audit',
      value: '48h Briefing',
    },
  },
  {
    id: 'sms',
    code: 'SMS',
    name: 'Carrier Bulk SMS, USSD & Telecom Gateways',
    shortTitle: 'SMS & Telecom Division',
    tagline: 'Carrier-grade bulk SMS broadcast, two-way shortcodes & USSD engines.',
    description:
      'Direct mobile network operator (MNO) telecom connectivity delivering instantaneous transactional OTPs, promotional broadcast campaigns, two-way conversational shortcodes, and interactive USSD (*123#) mobile banking and service menus.',
    offerings: [
      'High-Throughput Bulk SMS Broadcast Engine (> 10k msg/sec)',
      'Direct Carrier SMPP Gateway Connectivity',
      'Dedicated & Shared Two-Way Alphanumeric Shortcodes',
      'Interactive USSD Application Menus (*123#) for Mobile Users',
      'Mission-Critical Banking OTP & Transaction Alert Routing',
      'Automated WhatsApp Cloud API Telecom Integration',
    ],
    technologies: [
      'SMPP Protocol v3.4',
      'REST Telecom APIs',
      'Safaricom Daraja',
      'Airtel Direct MNO',
      'Twilio & Infobip',
      'Kafka Queues',
    ],
    iconName: 'MessageSquare',
    badgeColor: 'emerald',
    metrics: {
      label: 'Carrier Delivery SLA',
      value: '99.98%',
    },
  },
  {
    id: 'robotics',
    code: 'ROBOTICS',
    name: 'Robotics, RPA & Industrial IoT Automation',
    shortTitle: 'Robotics & Automation',
    tagline: 'Software RPA bots, physical automation & IoT telemetry fabrics.',
    description:
      'Unifying software intelligence with physical operations. We build desktop RPA bots that automate repetitive computer actions without API access, alongside physical robotics, warehouse automation, smart sensors, and industrial IoT controls.',
    offerings: [
      'Robotic Process Automation (RPA Desktop & Browser Bots)',
      'Industrial IoT Sensor Telemetry & Edge Computing',
      'Automated Warehouse & Inventory Conveyor Integrations',
      'SCADA, PLC & Industrial Machinery Ingestion Pipelines',
      'Smart Facility & Renewable Energy Monitoring Systems',
      'Hardware-to-Cloud Real-Time Event Streaming',
    ],
    technologies: [
      'Playwright & Selenium RPA',
      'ROS (Robot OS)',
      'MQTT & CoAP',
      'ESP32 & Raspberry Pi',
      'Modbus TCP',
      'TimescaleDB',
    ],
    iconName: 'Cpu',
    badgeColor: 'purple',
    metrics: {
      label: 'Manual Effort Saved',
      value: '88%+',
    },
  },
  {
    id: 'app-licences',
    code: 'APP & LICENCES',
    name: 'Custom Application Engineering & Software Licensing',
    shortTitle: 'Apps & Licences',
    tagline: 'Full-stack bespoke web/mobile platforms & authorized enterprise licenses.',
    description:
      'Engineering mission-critical web applications, iOS/Android mobile apps, and cloud-native microservices. In parallel, we provide authorized tier-1 corporate software licensing and volume subscriptions for Microsoft, Google Cloud, AWS, and cybersecurity suites.',
    offerings: [
      'Custom Mobile Applications (iOS, Android, React Native & Flutter)',
      'High-Performance Enterprise Web Platforms & Client Portals',
      'Official Microsoft 365, Azure & Windows Server Licensing',
      'Google Workspace & Google Cloud Enterprise Subscriptions',
      'Enterprise Database & Security Appliance Licences (Oracle, Cisco)',
      'Cloud Infrastructure Billing Optimization & Volume Tiering',
    ],
    technologies: [
      'React & TypeScript',
      'Flutter & Dart',
      'Node.js & Go',
      'PostgreSQL',
      'Microsoft Cloud Partner',
      'Google Cloud Partner',
    ],
    iconName: 'Layers',
    badgeColor: 'rose',
    metrics: {
      label: 'Licence Provisioning',
      value: '< 4h Express',
    },
  },
  {
    id: 'erp',
    code: 'ERP',
    name: 'Enterprise Resource Planning (ERP) Systems',
    shortTitle: 'ERP Division',
    tagline: 'Unified financials, supply chain, HRMS & manufacturing execution.',
    description:
      'Eliminating operational silos with end-to-end ERP implementations. Specialized in tailoring, deploying, and supporting Odoo ERP, SAP Business One, Microsoft Dynamics 365, and custom ERP engines engineered around your unique workflows.',
    offerings: [
      'Odoo ERP Enterprise Customization & Full Implementation',
      'SAP Business One & Microsoft Dynamics 365 Deployment',
      'Automated Double-Entry Accounting, Invoicing & Tax Compliance',
      'Multi-Warehouse Inventory, Barcode & Supply Chain Tracking',
      'HRMS, Payroll Automation & Employee Self-Service Portals',
      'Manufacturing Execution Systems (MES) & Work-Order Routing',
    ],
    technologies: [
      'Odoo Enterprise',
      'SAP Business One',
      'Microsoft Dynamics 365',
      'PostgreSQL',
      'Python',
      'Docker & Kubernetes',
    ],
    iconName: 'Database',
    badgeColor: 'amber',
    metrics: {
      label: 'Financial Reconciliation',
      value: 'Real-time',
    },
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ai-agents',
    number: '01',
    title: 'AI Agents',
    tagline: 'AI employees for repetitive digital tasks.',
    category: 'core',
    description:
      'Build autonomous, goal-oriented intelligent agents that act as digital staff members, capable of executing multi-step business procedures across your tools without human intervention.',
    capabilities: [
      'Answer questions accurately using company guidelines',
      'Process complex requests & multi-step approvals',
      'Search information across dispersed business drives',
      'Qualify incoming leads and score purchase intent',
      'Perform repetitive tasks across back-office tools',
      'Connect natively with business systems and APIs',
    ],
    examples: ['Inbound Sales Qualifier', 'Procurement Bot', 'Policy Auditor'],
    ctaText: 'Explore AI Agents',
    iconName: 'Cpu',
  },
  {
    id: 'ai-chatbots',
    number: '02',
    title: 'AI Chatbots',
    tagline: 'Turn every conversation into an opportunity.',
    category: 'core',
    description:
      'Modern conversational AI tailored specifically for customer touchpoints. Unlike legacy scripted bots, our assistants truly comprehend nuanced customer intent in English, Swahili, and regional dialects.',
    capabilities: [
      'Website 24/7 intelligent concierge & booking',
      'Official WhatsApp Business API integration',
      'Customer support tier-1 resolution and routing',
      'Interactive sales consultation and product advice',
      'Internal team helpdesk for HR and IT support',
      'CRM synchronization of client inquiries and preferences',
    ],
    examples: ['WhatsApp Support Concierge', 'Website Conversational Rep'],
    ctaText: 'Build an AI Assistant',
    iconName: 'MessageSquareText',
  },
  {
    id: 'ai-automation',
    number: '03',
    title: 'AI Automation',
    tagline: 'Let AI handle the work that slows your team down.',
    category: 'automation',
    description:
      'Replace manual, error-prone administrative tasks with deterministic AI pipelines that extract, transform, validate, and move information with superhuman consistency.',
    capabilities: [
      'Automated lead capture, validation, and CRM entry',
      'Smart customer follow-ups and abandoned cart nudges',
      'Automated structured data entry across legacy databases',
      'Invoice, receipt, and contract OCR document processing',
      'Intelligent email routing and auto-drafted replies',
      'Periodic automated business reporting and notifications',
    ],
    examples: ['Invoice Parsing Engine', 'Email-to-CRM Auto Sync', 'Weekly Metrics Bot'],
    ctaText: 'Automate Business Workflows',
    iconName: 'Workflow',
  },
  {
    id: 'custom-ai-applications',
    number: '04',
    title: 'Custom AI Applications',
    tagline: 'AI built specifically for your business.',
    category: 'custom',
    description:
      "When off-the-shelf software doesn't fit, we engineer bespoke AI-native platforms, internal operating systems, and intelligent customer portals engineered around your proprietary competitive advantage.",
    capabilities: [
      'Full-stack AI-powered enterprise software platforms',
      'SaaS products with embedded machine intelligence',
      'Internal operational tools tailored to your SOPs',
      'Intelligent analytics dashboards and data studios',
      'Client portals with embedded generative AI features',
      'Proprietary workflow engines tailored to your vertical',
    ],
    examples: ['Custom Underwriting Portal', 'Logistics Routing Cockpit', 'SaaS Copilot'],
    ctaText: 'Design Custom AI App',
    iconName: 'Layers',
  },
  {
    id: 'ai-integrations',
    number: '05',
    title: 'AI Integrations',
    tagline: 'Connect AI to the systems you already use.',
    category: 'automation',
    description:
      "AI shouldn't live in an isolated silo. We connect advanced intelligence layers into your existing software stack, eliminating context switching and syncing your records in real time.",
    capabilities: [
      'WhatsApp → AI → CRM (HubSpot, Salesforce, Zoho)',
      'Website Forms → AI → Production Database (PostgreSQL, Supabase)',
      'Customer Mailbox → AI → Helpdesk (Zendesk, Freshdesk, Slack)',
      'AI → Custom Internal Enterprise ERP & Billing APIs',
      'Vector embeddings connected to proprietary company archives',
      'Secure webhook architecture with bank-grade encryption',
    ],
    examples: ['HubSpot WhatsApp Sync', 'Stripe Order Verification Agent'],
    ctaText: 'Connect Your Systems',
    iconName: 'Network',
  },
  {
    id: 'ai-data-analytics',
    number: '06',
    title: 'AI Data & Analytics',
    tagline: 'Turn your business data into intelligence.',
    category: 'analytics',
    description:
      'Stop guessing. We transform raw sales figures, operational logs, and customer touchpoints into actionable clarity with natural language data querying and predictive forecasting.',
    capabilities: [
      'Automated executive reports delivered to executive inboxes',
      'Deep cohort analysis & customer lifetime value modeling',
      'Dynamic business intelligence dashboards with live metrics',
      'AI-powered anomaly detection and fraud warning alerts',
      'Demand forecasting and supply chain inventory planning',
      'Executive decision-support simulations and scenario testing',
    ],
    examples: ['Weekly AI Revenue Memo', 'Predictive Churn Radar'],
    ctaText: 'Unlock Business Data',
    iconName: 'LineChart',
  },
];

export const PROBLEM_MATCHER_DATA: ProblemMatcherItem[] = [
  {
    id: 'customer-questions',
    quote: '“We get too many customer questions.”',
    tag: 'High Ticket Volumes',
    solutionTitle: 'AI Customer Support Concierge',
    solutionType: 'AI Assistant & Ticket Resolution',
    summary:
      'An intelligent, polite 24/7 AI agent deployed on WhatsApp and your website that resolves 70%+ of standard inquiries immediately, escalating only complex matters to human staff with full context.',
    businessBenefit:
      'Eliminates response lag, cuts support overhead by 60%, and ensures zero customers are left waiting after business hours.',
    systems: ['WhatsApp Business API', 'Zendesk / Freshdesk', 'PostgreSQL DB', 'Website Chat'],
    exampleOutcome: 'Resolved 4,200 repetitive inquiries/mo with 4.8/5 satisfaction rating.',
    iconName: 'Headphones',
  },
  {
    id: 'repetitive-work',
    quote: '“Our employees spend hours doing repetitive work.”',
    tag: 'Administrative Drag',
    solutionTitle: 'AI Workflow Automation Engine',
    solutionType: 'Intelligent Process Automation',
    summary:
      'Automated end-to-end pipelines that extract data from PDFs, emails, or forms, validate against business rules, and write cleanly into your ERP or databases without human copy-pasting.',
    businessBenefit:
      'Saves 15–25 hours per employee weekly, eliminates typo errors, and frees your senior staff to focus on high-value revenue drivers.',
    systems: ['Invoices/Receipts', 'SAP / ERP & Accounting', 'Google Drive / OneDrive', 'Cloud SQL'],
    exampleOutcome: 'Reduced loan application intake cycle from 48 hours to 4 minutes.',
    iconName: 'FileSpreadsheet',
  },
  {
    id: 'lost-leads',
    quote: '“We lose leads because nobody follows up quickly.”',
    tag: 'Slow Lead Response',
    solutionTitle: 'AI Sales & Qualification Agent',
    solutionType: 'Autonomous Sales Representative',
    summary:
      'Instant conversational outreach within 30 seconds of an inbound inquiry. The AI agent asks qualifying questions, matches requirements, and books a calendar slot directly into your sales team’s calendar.',
    businessBenefit:
      'Quadruples lead conversion rates by responding during peak customer intent, regardless of timezones or weekends.',
    systems: ['HubSpot / Salesforce', 'WhatsApp Business', 'Google Calendar / Calendly', 'Website Leads'],
    exampleOutcome: '3.8x faster first-response time resulting in a 34% rise in closed deals.',
    iconName: 'UserCheck',
  },
  {
    id: 'scattered-info',
    quote: '“Our information is scattered across different systems.”',
    tag: 'Knowledge Fragmentation',
    solutionTitle: 'AI Enterprise Knowledge Assistant',
    solutionType: 'RAG & Unified Knowledge Copilot',
    summary:
      'A private, secure AI copilot trained on your internal documents, SOPs, past proposals, and company handbook. Staff can ask questions in plain English and receive cited, exact answers instantly.',
    businessBenefit:
      'Slashes onboarding time for new hires in half and prevents tribal knowledge loss when experienced employees leave.',
    systems: ['Internal PDFs', 'Notion / Confluence', 'SharePoint / Drive', 'Slack Archives'],
    exampleOutcome: 'Staff save an average of 42 minutes per day searching for internal files.',
    iconName: 'FolderSearch',
  },
  {
    id: 'data-blindness',
    quote: '“We have lots of data but don’t know what it means.”',
    tag: 'Underutilized Data',
    solutionTitle: 'AI Business Intelligence & Insights',
    solutionType: 'Executive Decision-Support System',
    summary:
      'Connect your transactional logs and sales sheets to an AI analytics layer. Receive plain-language executive summaries, early warning alerts, and automated weekly digests explaining trends and root causes.',
    businessBenefit:
      'Replaces costly manual BI consulting with continuous, automated strategic intelligence ready for board reviews.',
    systems: ['PostgreSQL / BigQuery', 'Stripe / M-Pesa Logs', 'Google Sheets', 'CRM Data'],
    exampleOutcome: 'Identified $45,000 in uncollected accounts receivable within the first 14 days.',
    iconName: 'TrendingUp',
  },
  {
    id: 'ai-product-idea',
    quote: '“We have an idea for an AI product.”',
    tag: 'New Venture / Innovation',
    solutionTitle: 'Custom AI Product Engineering',
    solutionType: 'End-to-End Bespoke AI Development',
    summary:
      'From architecture design to LLM evaluation, prompt engineering, vector search implementation, and production deployment, we build scalable software products designed for enterprise security.',
    businessBenefit:
      'Go from concept to production-ready market launch in weeks instead of quarters, backed by enterprise engineering standards.',
    systems: ['React / Next.js', 'Python / Node.js', 'Vector DBs (Pinecone)', 'Private Cloud VPC'],
    exampleOutcome: 'Architected and launched proprietary proptech underwriting app in 6 weeks.',
    iconName: 'Sparkles',
  },
];

export const AUTONOMOUS_AGENTS_DATA: AutonomousAgent[] = [
  {
    id: 'sales-agent',
    name: 'Sales Agent',
    role: 'Lead Acquisition & Qualification',
    tagline: 'Captures, qualifies, and nurtures leads 24/7.',
    status: 'ONLINE',
    avgLatency: '1.2s',
    accuracyRate: '99.2%',
    description:
      'Engages prospects instantly upon contact. Evaluates budget, timeline, and decision-maker status using conversational logic, then logs data to CRM and books meetings.',
    capabilities: [
      'Sub-30s response to web & WhatsApp leads',
      'BANT qualification methodology',
      'Dynamic calendar booking integration',
      'HubSpot / Salesforce auto-enrichment',
    ],
    sampleTrigger: 'Inbound form submitted or WhatsApp message received',
    sampleAction: 'Initiates chat, confirms budget > $5k, syncs to HubSpot & reserves demo slot on calendar.',
    connectedSystems: ['WhatsApp Business', 'HubSpot', 'Google Calendar', 'Stripe'],
  },
  {
    id: 'support-agent',
    name: 'Support Agent',
    role: '24/7 Customer Resolution',
    tagline: 'Answers customer questions and resolves tickets 24/7.',
    status: 'ONLINE',
    avgLatency: '0.8s',
    accuracyRate: '98.7%',
    description:
      'Trained on your knowledge base, policy docs, and order history. Accurately handles billing inquiries, order status, return policies, and troubleshooting without waiting.',
    capabilities: [
      'Zero-latency multi-channel support',
      'Full context order & ticket lookups',
      'Sentiment-aware human escalation',
      'Multilingual translation (English, Swahili, French)',
    ],
    sampleTrigger: "Customer asks: 'Where is my shipment #8492?'",
    sampleAction: 'Queries logistics API, confirms transit status, and replies via SMS/WhatsApp with live tracking link.',
    connectedSystems: ['Shopify', 'Zendesk', 'Logistics API', 'WhatsApp'],
  },
  {
    id: 'research-agent',
    name: 'Research Agent',
    role: 'Intelligence & Market Synthesis',
    tagline: 'Finds, analyzes and summarizes vital information.',
    status: 'ACTIVE',
    avgLatency: '2.4s',
    accuracyRate: '99.5%',
    description:
      'Monitors industry feeds, analyzes competitor movements, digests massive regulatory filings, and outputs structured intelligence memos for executive leadership.',
    capabilities: [
      'Automated web & document synthesis',
      'Competitive pricing intelligence',
      'Regulatory policy change alerts',
      'Structured executive briefing memos',
    ],
    sampleTrigger: 'New government regulatory gazette or tariff published',
    sampleAction: 'Extracts clauses impacting company operations, flags 3 compliance risks, and emails 1-page digest.',
    connectedSystems: ['Web Scrapers', 'Document Stores', 'Notion', 'Email Gateway'],
  },
  {
    id: 'operations-agent',
    name: 'Operations Agent',
    role: 'Workflow & Administrative Execution',
    tagline: 'Automates repetitive business workflows.',
    status: 'ONLINE',
    avgLatency: '1.5s',
    accuracyRate: '99.8%',
    description:
      'Bridges the gap between messy inbound communication and rigid back-office software. Audits vendor receipts, confirms purchase orders, and updates financial systems.',
    capabilities: [
      'Cross-system data reconciliation',
      'Invoice and expense verification',
      'Automated vendor dispatch and reminders',
      'Audit trail compliance logging',
    ],
    sampleTrigger: 'Supplier emails invoice PDF with 40 line items',
    sampleAction: 'Parses items, cross-checks against PO #1092, flags 2 price discrepancies, and routes for one-click approval.',
    connectedSystems: ['Xero / QuickBooks', 'Gmail', 'SAP / ERP', 'Slack'],
  },
  {
    id: 'knowledge-agent',
    name: 'Knowledge Agent',
    role: 'Internal Enterprise Copilot',
    tagline: 'Answers questions using your company’s internal information.',
    status: 'ONLINE',
    avgLatency: '0.9s',
    accuracyRate: '99.6%',
    description:
      'Empowers every team member with a private AI assistant that knows every SOP, past contract, engineering spec, and internal process. Secure and hallucination-guarded.',
    capabilities: [
      'Strict citation of internal company sources',
      'Role-based access control permissions',
      'Instant onboarding assistance for recruits',
      'Drafts proposals using historical company wins',
    ],
    sampleTrigger: "Associate asks: 'What is our SLA for Severity 1 enterprise incidents?'",
    sampleAction: 'Retrieves Master Services Agreement Section 4.2 and provides exact SLA with direct link to source document.',
    connectedSystems: ['Google Drive', 'Slack', 'Notion', 'SharePoint'],
  },
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'cs-support',
    title: 'AI Customer Support Platform',
    category: 'AI Chatbots & Integrations',
    clientType: 'Fast-Growing Regional Telecommunications & ISP Provider',
    challenge:
      'The client was receiving over 12,000 inquiries monthly across WhatsApp and their website. Support staff were overwhelmed by repetitive queries about coverage, billing balances, and router troubleshooting, leading to 4-hour wait times and high customer churn.',
    solution:
      'Muru AI developed an intelligent, omnichannel customer assistant integrated with the company’s billing API, network status database, and WhatsApp Business account.',
    whatItDoes: [
      'Answers common technical and billing questions instantly with live account lookups',
      'Captures customer verified identity and account credentials securely',
      'Performs automated line diagnostic checks on active router connections',
      'Routes complex network issues and field technician requests with pre-filled CRM tickets',
    ],
    technology: ['Muru AI Core', 'WhatsApp Business API', 'Custom Node.js Engine', 'Billing REST API', 'Vector Knowledge Store'],
    metrics: [
      { label: 'Queries Auto-Resolved', value: '74%' },
      { label: 'Average Response Time', value: '< 4s' },
      { label: 'Customer CSAT Rating', value: '4.8/5' },
      { label: 'Support Overhead Reduction', value: '55%' },
    ],
  },
  {
    id: 'cs-automation',
    title: 'Automated Invoice & Logistics Intelligence',
    category: 'AI Automation & Enterprise Data',
    clientType: 'East African Freight & Supply Chain Distributor',
    challenge:
      'Processing cross-border customs declarations and vendor invoices required a team of 14 clerks manually transcribing data from unstandardized paper bills, resulting in constant shipping delays and costly customs discrepancy penalties.',
    solution:
      'Muru AI engineered an intelligent document processing pipeline using computer vision and multimodal AI to parse multi-lingual manifests, validate tariff codes, and sync automatically to their SAP ERP.',
    whatItDoes: [
      'Scans multimodal invoices and customs bills in English, French, and Portuguese',
      'Validates item quantities and tariff codes against customs guidelines',
      'Directly flags price variances above 3% for senior procurement review',
      'Automatically updates ERP ledger balances without human data entry',
    ],
    technology: ['Multimodal AI', 'PostgreSQL', 'SAP Integration API', 'Document OCR', 'Webhook Pipelines'],
    metrics: [
      { label: 'Intake Cycle Time', value: '-92%' },
      { label: 'Data Accuracy', value: '99.4%' },
      { label: 'Annual Cost Savings', value: '$140,000+' },
      { label: 'Clerk Hours Saved/Mo', value: '1,200 hrs' },
    ],
  },
  {
    id: 'cs-sales',
    title: 'Real Estate 24/7 Lead Concierge',
    category: 'AI Sales Agents',
    clientType: 'Premier Property Development & Advisory Group',
    challenge:
      'High-value international property buyers were reaching out over weekends and different time zones. By the time brokers replied on Monday, over 40% of leads had moved on or booked with competing developments.',
    solution:
      'Muru AI launched an autonomous Sales Agent on WhatsApp and the web portal capable of holding natural property advisory conversations, presenting floor plans, verifying buyer budgets, and scheduling site visits directly on agent calendars.',
    whatItDoes: [
      'Answers questions regarding unit pricing, square footage, amenities, and payment plans',
      'Sends curated PDF brochures and 3D virtual tour walkthrough links',
      'Screens buyers for financing readiness and pre-approvals',
      'Schedules in-person site visits directly into agent Google/Outlook calendars',
    ],
    technology: ['Conversational Agent Engine', 'WhatsApp Business API', 'HubSpot CRM Sync', 'Calendar Booking API'],
    metrics: [
      { label: 'Weekend Lead Retention', value: '100%' },
      { label: 'First Response Time', value: '< 30s' },
      { label: 'Lead-to-Viewing Conversion', value: '+44%' },
      { label: 'Broker Time Saved/Wk', value: '18 hrs' },
    ],
  },
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    tagline: 'We understand your business, workflow and challenges.',
    description:
      'We begin by mapping your operational bottlenecks, team workflows, and customer journeys. No AI buzzwords—just an honest assessment of where friction costs you money.',
    deliverable: 'AI Feasibility & ROI Opportunity Audit',
  },
  {
    number: '02',
    title: 'Design',
    tagline: 'We identify where AI can create measurable value.',
    description:
      'We architect a targeted solution specifying data pipelines, model choices, security safeguards, and measurable business KPIs (hours saved, conversion increase).',
    deliverable: 'System Architecture & Business Impact Blueprint',
  },
  {
    number: '03',
    title: 'Build',
    tagline: 'We design and develop your AI solution.',
    description:
      'Our engineering team develops the custom logic, fine-tuned prompts, and robust user interfaces, ensuring guardrails against hallucinations and bias.',
    deliverable: 'Production-Grade AI Engine & UI Components',
  },
  {
    number: '04',
    title: 'Integrate',
    tagline: 'We connect it to your existing systems.',
    description:
      'We plug the AI solution directly into your existing CRM, WhatsApp, ERP, and databases using resilient APIs. Your staff works in the tools they already know.',
    deliverable: 'Secure Bidirectional System Integrations',
  },
  {
    number: '05',
    title: 'Launch',
    tagline: 'We deploy, test and monitor the solution.',
    description:
      'We roll out with controlled pilot groups, rigorous stress-testing, and hands-on staff training to ensure high adoption and smooth day-one performance.',
    deliverable: 'Staged Deployment & Staff Enablement Workshop',
  },
  {
    number: '06',
    title: 'Improve',
    tagline: 'We continuously optimize the system as your business grows.',
    description:
      'AI thrives on continuous feedback. We analyze real user interactions, refine response quality, and adapt workflows as your business expands.',
    deliverable: 'Monthly Optimization & Intelligence Tuning',
  },
];

export const INDUSTRIES_DATA: IndustryVertical[] = [
  {
    id: 'hospitality',
    name: 'Hospitality & Tourism',
    tagline: 'Elevate guest experiences from booking to check-out.',
    description:
      'Deploy multilingual reservation concierges, dynamic itinerary creators, and instant hotel service dispatch on WhatsApp.',
    useCases: [
      'WhatsApp room booking and instant quote concierge',
      'Automated guest concierge for amenities & dining',
      'Dynamic pricing recommendations based on seasonality',
      'Staff task assignment and housekeeping dispatch',
    ],
    statsOrFocus: '24/7 Multi-language guest service in 12+ dialects',
    iconName: 'Hotel',
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    tagline: 'Convert visitors into loyal buyers with personalized shopping.',
    description:
      'Smart product discovery assistants, automated order updates, personalized upsell recommendations, and instant returns processing.',
    useCases: [
      'Conversational product recommendation engines',
      'Automated cart abandonment recovery via WhatsApp',
      'Zero-latency order tracking and returns handling',
      'Customer review sentiment analysis and inventory signals',
    ],
    statsOrFocus: '+28% average order value with conversational upsells',
    iconName: 'ShoppingBag',
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    tagline: 'Qualify high-intent buyers and automate property inquiries.',
    description:
      'AI agents that answer property questions, verify buyer financing readiness, share floorplans, and book physical viewing appointments.',
    useCases: [
      '24/7 property listing inquiry assistant',
      'Automated buyer budget & mortgage pre-qualification',
      'Calendar scheduling for viewing appointments',
      'Agent CRM synchronization and follow-up reminders',
    ],
    statsOrFocus: '100% of weekend inquiries responded to within 1 minute',
    iconName: 'Building2',
  },
  {
    id: 'financial-services',
    name: 'Financial Services',
    tagline: 'Deliver compliant, secure, and fast financial services.',
    description:
      'AI-assisted loan pre-screening, financial document extraction, anti-fraud anomaly detection, and automated account inquiry resolution.',
    useCases: [
      'Instant KYC document extraction and verification',
      'Loan eligibility pre-screening and income analysis',
      'Account balance and transaction inquiry assistants',
      'Transaction anomaly monitoring and alert flags',
    ],
    statsOrFocus: 'Bank-grade data encryption and strict compliance controls',
    iconName: 'ShieldCheck',
  },
  {
    id: 'retail',
    name: 'Retail & Distribution',
    tagline: 'Unify in-store intelligence with digital supply chains.',
    description:
      'AI stock forecasting, automated distributor replenishment orders, customer loyalty engagement, and store performance summaries.',
    useCases: [
      'Intelligent stock replenishment notifications',
      'Distributor WhatsApp order intake and automated ERP logging',
      'Customer loyalty reward reminders and promotions',
      'Store-level sales pattern insights for management',
    ],
    statsOrFocus: 'Eliminates stockouts with predictive replenishment',
    iconName: 'Truck',
  },
  {
    id: 'education',
    name: 'Education & EdTech',
    tagline: 'Empower students and streamline institutional administration.',
    description:
      'Personalized student study tutors, admissions inquiry bots, and administrative document processing for schools and universities.',
    useCases: [
      'Student admissions & fee payment FAQ bot',
      'Personalized course study tutor and homework assistant',
      'Automated transcript and enrollment processing',
      'Campus event and schedule notification coordinator',
    ],
    statsOrFocus: 'Up to 75% reduction in repetitive admissions emails',
    iconName: 'GraduationCap',
  },
  {
    id: 'ngos',
    name: 'NGOs & Non-Profits',
    tagline: 'Maximize humanitarian impact with automated operations.',
    description:
      'Automate grant reporting, field survey data aggregation, beneficiary communication in local languages, and donor transparency updates.',
    useCases: [
      'Field survey data extraction and automatic cleansing',
      'Multilingual community SMS/WhatsApp updates',
      'Automated grant compliance documentation and reporting',
      'Donor engagement and impact storytelling digests',
    ],
    statsOrFocus: 'Saved 200+ staff hours per quarterly reporting cycle',
    iconName: 'HeartHandshake',
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    tagline: 'Supercharge billable hours for legal, audit, and consulting.',
    description:
      'Internal knowledge retrieval across decades of files, automated client intake, proposal drafting, and meeting transcription intelligence.',
    useCases: [
      'Firm-wide legal & advisory document RAG search',
      'Automated client scoping questionnaires and briefs',
      'Instant proposal generator from historical bid templates',
      'Meeting executive summary and action item dispatch',
    ],
    statsOrFocus: 'Cuts initial draft research time from 6 hours to 15 minutes',
    iconName: 'Briefcase',
  },
];

export const TECH_STACK_DATA: TechStackCategory[] = [
  {
    title: 'AI Models',
    description: 'Multi-model orchestration leveraging best-of-breed reasoning, vision, and coding models.',
    items: ['Google AI (Gemini 2.5 Flash & Pro)', 'OpenAI (GPT-4o & o3-mini)', 'Anthropic (Claude 3.7 Sonnet)', 'Self-Hosted Llama 3 on Private VPC'],
  },
  {
    title: 'Engineering & Architecture',
    description: 'Production-ready, battle-tested modern web, cloud, and edge infrastructure.',
    items: ['React & Next.js', 'TypeScript & Node.js', 'Python FastAPI & LangGraph', 'Docker & Cloud Run Containers', 'Microservices Architecture'],
  },
  {
    title: 'Data & Memory',
    description: 'Scalable data stores and vector indexes optimized for sub-second retrieval.',
    items: ['PostgreSQL & Supabase', 'Vector Databases (Pinecone, Qdrant, Milvus)', 'Redis Distributed Cache', 'Document DBs', 'Enterprise Cloud Warehouses'],
  },
  {
    title: 'Integrations & APIs',
    description: 'Connecting directly to the business tools your organization already depends on.',
    items: ['WhatsApp Business Cloud API', 'HubSpot & Salesforce CRM', 'Zendesk & Freshdesk', 'Stripe & M-Pesa Gateways', 'REST & GraphQL Internal ERPs'],
  },
];

export const ENGINEERING_CREED: EngineeringPrinciple[] = [
  {
    pillar: 'Business First',
    title: 'We start with your business problem — not the technology.',
    description:
      'We never push AI for the sake of novelty. Every system we build must deliver a clear, measurable commercial outcome: lower cost, higher revenue, or faster cycle times.',
    icon: 'Target',
  },
  {
    pillar: 'Practical AI',
    title: 'We focus on solutions that can actually be deployed and used.',
    description:
      'No endless theoretical research or science projects. We build robust, reliable systems that your real-world employees and customers can navigate seamlessly on day one.',
    icon: 'CheckCircle2',
  },
  {
    pillar: 'Integrated',
    title: 'Your AI should work with the systems your business already uses.',
    description:
      'We don’t force your team to learn a dozen new dashboards. We embed intelligent capabilities right inside your current CRM, WhatsApp, databases, and emails.',
    icon: 'GitMerge',
  },
  {
    pillar: 'Built to Scale',
    title: 'Solutions are designed to grow alongside your business.',
    description:
      'From handling 100 inquiries a day to 100,000 across multiple international offices, our architectures are engineered for enterprise security, resilience, and scale.',
    icon: 'TrendingUp',
  },
];

export const COCKPIT_NODES: SystemServiceNode[] = [
  { name: 'MURU AI CORE (Neural Orchestrator)', status: 'ONLINE', latency: '24 ms', uptime: '99.98%' },
  { name: 'AUTONOMIC FLEET ENGINE (24 Nodes)', status: 'ONLINE', latency: '110 ms', uptime: '99.95%' },
  { name: 'VECTOR & DOCUMENT STORE (Qdrant/Pinecone)', status: 'ONLINE', latency: '18 ms', uptime: '100.00%' },
  { name: 'API GATEWAY (Public & Private Endpoints)', status: 'ONLINE', latency: '42 ms', uptime: '99.92%' },
  { name: 'WORKFLOW STATE MACHINE (Event Bus)', status: 'ONLINE', latency: '58 ms', uptime: '99.89%' },
  { name: 'SEMANTIC EMBEDDING ENGINE (Multimodal)', status: 'ONLINE', latency: '72 ms', uptime: '99.94%' },
  { name: 'ENTERPRISE INTEGRATIONS (HubSpot, WhatsApp, ERP)', status: 'ONLINE', latency: '128 ms', uptime: '99.85%' },
];

export const KNOWLEDGE_DOCS_SAMPLE: KnowledgeDocument[] = [
  {
    id: 'k1',
    title: 'Master Services Agreement & Standard SLA Terms',
    source: 'Legal / Contract Store',
    type: 'PDF',
    size: '4.2 MB',
    lastSynced: '12m ago',
    vectors: 2450,
    status: 'INDEXED',
  },
  {
    id: 'k2',
    title: 'Hotel Group Operations Manual & Cancellation Policy',
    source: 'SharePoint / Internal Drive',
    type: 'DOCX',
    size: '12.8 MB',
    lastSynced: '1h ago',
    vectors: 6840,
    status: 'INDEXED',
  },
  {
    id: 'k3',
    title: 'E-commerce Product Catalog & Live Stock Schema',
    source: 'PostgreSQL / Direct Sync',
    type: 'Database',
    size: '84.2 MB',
    lastSynced: '3m ago',
    vectors: 41200,
    status: 'INDEXED',
  },
  {
    id: 'k4',
    title: 'East Africa Tax & Logistics Import Compliance Guidelines',
    source: 'Regulatory / Gov Portal',
    type: 'PDF',
    size: '8.1 MB',
    lastSynced: '3h ago',
    vectors: 3900,
    status: 'INDEXED',
  },
  {
    id: 'k5',
    title: 'Customer Support Escalation Matrix & VIP Protocols',
    source: 'Zendesk / Knowledge Base',
    type: 'CRM',
    size: '1.9 MB',
    lastSynced: '10m ago',
    vectors: 980,
    status: 'INDEXED',
  },
];

export const RECENT_ACTIVITY_EVENTS: WorkflowActivityEvent[] = [
  {
    id: 'evt-1',
    title: 'Workflow #204 Triggered: Automated Invoice Ledger Sync',
    agent: 'Operations Agent (Fleet Node 04)',
    timestamp: 'Just now',
    status: 'SUCCESS',
    details: 'Parsed 48 line items from Freight manifest, tariff codes checked, SAP ERP ledger posted.',
  },
  {
    id: 'evt-2',
    title: 'Inbound WhatsApp Lead Qualified (Score 94/100)',
    agent: 'Sales Agent (Fleet Node 01)',
    timestamp: '2 mins ago',
    status: 'SUCCESS',
    details: 'Budget $15k confirmed, company size 65 staff. Calendar slot booked with Lead Architect.',
  },
  {
    id: 'evt-3',
    title: 'Live Router Diagnostic & Line Reset Performed',
    agent: 'Support Agent (Fleet Node 02)',
    timestamp: '4 mins ago',
    status: 'SUCCESS',
    details: 'Resolved customer connection latency in 3.4s without human agent escalation.',
  },
  {
    id: 'evt-4',
    title: 'Vector Knowledge Store Incremental Re-index',
    agent: 'Knowledge Engine',
    timestamp: '8 mins ago',
    status: 'SUCCESS',
    details: 'Synchronized 14 new corporate policy memos and updated similarity indexes.',
  },
  {
    id: 'evt-5',
    title: 'Security Audit Verified: Zero Prompt Injections',
    agent: 'Security Guardrail Layer',
    timestamp: '15 mins ago',
    status: 'SUCCESS',
    details: 'Sanitized 1,420 incoming customer messages against prompt-injection heuristics.',
  },
];
