export interface SolutionPageData {
  id: string;
  code: string;
  category: 'industry' | 'use-case';
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  longDescription: string;
  iconName: string;
  metrics: {
    primaryLabel: string;
    primaryValue: string;
    secondaryLabel: string;
    secondaryValue: string;
    deploymentTime: string;
    roiBenchmark: string;
  };
  capabilities: string[];
  workflows: {
    title: string;
    trigger: string;
    aiAction: string;
    systemOutput: string;
    impact: string;
  }[];
  architectureSteps: {
    step: string;
    title: string;
    detail: string;
  }[];
  integrations: string[];
  relatedProductIds: string[];
  ctaText: string;
}

export interface PlatformPageData {
  id: string;
  code: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  longDescription: string;
  iconName: string;
  metrics: {
    primaryLabel: string;
    primaryValue: string;
    secondaryLabel: string;
    secondaryValue: string;
    uptimeSla: string;
    securityTier: string;
  };
  capabilities: string[];
  technicalSpecs: {
    label: string;
    value: string;
    detail: string;
  }[];
  architectureLayers: {
    layer: string;
    title: string;
    detail: string;
  }[];
  supportedStack: string[];
  ctaText: string;
}

export interface ResourcePageData {
  id: string;
  code: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  longDescription: string;
  iconName: string;
  highlights: {
    label: string;
    value: string;
  }[];
  keyTakeaways: string[];
  ctaText: string;
}

export const SOLUTION_PAGES_DATA: SolutionPageData[] = [
  // 1. Retail & E-Commerce
  {
    id: 'retail-ecommerce',
    code: 'IND-01 // RETAIL & E-COMMERCE',
    category: 'industry',
    title: 'Retail & E-Commerce AI Automation',
    shortTitle: 'Retail & E-Commerce',
    tagline: 'WhatsApp catalog checkout, automated order tracking, and abandoned cart recovery.',
    description:
      'Convert conversational inquiries into instant checkouts across WhatsApp, Instagram, and Web while automating order tracking, stock replenishment, and returns.',
    longDescription:
      'Muru AI transforms retail and e-commerce operations by unifying conversational commerce with back-office inventory and payment gateways. Customers browse catalogs, receive personalized product recommendations, pay via M-Pesa STK Push or card inside WhatsApp, and track deliveries in real time without human intervention.',
    iconName: 'ShoppingBag',
    metrics: {
      primaryLabel: 'Cart Recovery Lift',
      primaryValue: '+34%',
      secondaryLabel: 'Support Auto-Resolution',
      secondaryValue: '82%',
      deploymentTime: '7–10 Days',
      roiBenchmark: '+28% Average Order Value',
    },
    capabilities: [
      'Interactive WhatsApp Business catalog browsing & conversational product discovery',
      'Instant M-Pesa STK Push & card checkout links embedded directly inside chat threads',
      'Automated abandoned cart recovery sequences triggered 45 minutes after drop-off',
      'Real-time order status lookup, courier tracking links & automated return exchanges',
      'Multi-branch stock level synchronization with Shopify, WooCommerce, Odoo, and SAP',
      'Automated customer review collection & VIP loyalty tier reward reminders',
    ],
    workflows: [
      {
        title: 'WhatsApp Conversational Checkout & STK Push',
        trigger: 'Customer sends product inquiry or clicks Instagram/WhatsApp ad link.',
        aiAction: 'AI assistant verifies live stock in ERP, recommends matching size/variant, and triggers M-Pesa STK Push to customer phone.',
        systemOutput: 'Payment confirmed in 6 seconds, invoice generated in Odoo/Shopify, and dispatch rider assigned.',
        impact: '3.2x higher conversion rate compared to static web checkout forms.',
      },
      {
        title: 'Zero-Touch Order Tracking & Returns Desk',
        trigger: 'Buyer asks: "Where is my order #ORD-9042?" or requests a size exchange.',
        aiAction: 'Queries courier API for live GPS status or validates return policy eligibility window.',
        systemOutput: 'Sends instant live tracking link or generates automated return pickup label.',
        impact: 'Eliminates 80%+ of repetitive WISMO ("Where Is My Order") support tickets.',
      },
      {
        title: 'Predictive Stock Replenishment Alerting',
        trigger: 'Fast-moving SKU drops below 14-day safety threshold across retail branches.',
        aiAction: 'Forecasting engine calculates optimal reorder quantity based on seasonal velocity.',
        systemOutput: 'Drafts purchase order in ERP and alerts procurement lead on WhatsApp for 1-click approval.',
        impact: 'Reduces out-of-stock revenue loss by 64%.',
      },
    ],
    architectureSteps: [
      {
        step: '01. Channel Ingestion',
        title: 'WhatsApp Cloud API, Instagram DM & Web Storefront',
        detail: 'Captures customer messages, catalog selections, and cart events in real time.',
      },
      {
        step: '02. Commerce Intelligence',
        title: 'Catalog RAG & Inventory Verification',
        detail: 'Cross-checks live SKU stock, pricing tiers, and active promo codes against your store database.',
      },
      {
        step: '03. Payment & Order Sync',
        title: 'M-Pesa Daraja / Stripe Gateway & ERP Writeback',
        detail: 'Processes instant mobile money or card payment and posts confirmed order to ERP & fulfillment.',
      },
      {
        step: '04. Post-Purchase Loop',
        title: 'Automated Delivery Updates & Retention',
        detail: 'Dispatches rider tracking notifications and schedules personalized restock nudges.',
      },
    ],
    integrations: ['WhatsApp Business API', 'Shopify & WooCommerce', 'M-Pesa Daraja & Stripe', 'Odoo & SAP ERP', 'Instagram Messaging API', 'DHL / Local Courier APIs'],
    relatedProductIds: ['ai-chatbots', 'ai-automation', 'ai-data-analytics'],
    ctaText: 'Book Retail & E-Commerce AI Demo',
  },

  // 2. Healthcare & Clinics
  {
    id: 'healthcare-clinics',
    code: 'IND-02 // HEALTHCARE & CLINICS',
    category: 'industry',
    title: 'Healthcare, Hospitals & Clinic AI Solutions',
    shortTitle: 'Healthcare & Clinics',
    tagline: 'Automated appointment triage, patient SMS reminders, and clinic inquiry handling.',
    description:
      'Streamline patient intake, specialist appointment scheduling, insurance pre-authorization, and post-visit follow-ups with privacy-first healthcare AI.',
    longDescription:
      'Engineered for hospitals, outpatient clinics, diagnostic labs, and telehealth networks. Muru AI automates 24/7 patient scheduling on WhatsApp and SMS, verifies insurance scheme rules, dispatches automated medication and appointment reminders, and structures clinical intake notes into your HMIS.',
    iconName: 'HeartPulse',
    metrics: {
      primaryLabel: 'No-Show Reduction',
      primaryValue: '-62%',
      secondaryLabel: 'Patient Triage Speed',
      secondaryValue: '< 15s',
      deploymentTime: '10–14 Days',
      roiBenchmark: '4.5x Front-Desk Capacity',
    },
    capabilities: [
      '24/7 WhatsApp & USSD specialist appointment booking with real-time doctor calendar sync',
      'Automated SMS & WhatsApp appointment reminders and pre-procedure preparation instructions',
      'Insurance card OCR & scheme coverage pre-authorization verification workflow',
      'Confidential lab result readiness notifications & secure PDF report delivery',
      'Post-discharge patient follow-up check-ins and medication adherence reminders',
      'Strict patient data privacy, role-based access control, and encrypted audit trails',
    ],
    workflows: [
      {
        title: '24/7 Patient Appointment Triage & Booking',
        trigger: 'Patient messages clinic WhatsApp line requesting a pediatric or dental consultation.',
        aiAction: 'Collects symptom summary, checks specialist roster availability, and confirms insurance/cash preference.',
        systemOutput: 'Books slot in HMIS calendar, sends confirmation SMS, and schedules a 24h reminder.',
        impact: 'Captures 100% of after-hours patient inquiries and cuts phone queue abandonment.',
      },
      {
        title: 'Insurance Pre-Authorization & Card OCR',
        trigger: 'Patient uploads photo of insurance member card prior to clinic arrival.',
        aiAction: 'Vision OCR extracts policy number and queries payer portal/rules for outpatient limit.',
        systemOutput: 'Pre-fills reception check-in record and alerts billing desk before patient walks in.',
        impact: 'Reduces patient reception waiting time from 25 minutes to under 3 minutes.',
      },
      {
        title: 'Automated Lab Results & Chronic Care Follow-Up',
        trigger: 'Laboratory Information System (LIS) marks diagnostic report as verified.',
        aiAction: 'Dispatches encrypted notification to patient with option to book follow-up review.',
        systemOutput: 'Logs patient acknowledgment and schedules 30-day prescription refill reminder.',
        impact: 'Boosts follow-up consultation retention by 41%.',
      },
    ],
    architectureSteps: [
      {
        step: '01. Patient Touchpoint',
        title: 'Omnichannel WhatsApp, SMS & USSD Intake',
        detail: 'Accessible 24/7 in English and Swahili with zero app downloads required for patients.',
      },
      {
        step: '02. Clinical Guardrails',
        title: 'Deterministic Triage & Privacy Encryption',
        detail: 'Applies strict clinical escalation protocols and encrypts PHI in transit and at rest.',
      },
      {
        step: '03. HMIS & Payer Sync',
        title: 'Calendar, Billing & Insurance API Integration',
        detail: 'Reads and writes directly to hospital management calendars, lab systems, and billing ledgers.',
      },
      {
        step: '04. Care Continuity',
        title: 'Automated Reminders & Outcome Tracking',
        detail: 'Sends scheduled SMS/WhatsApp check-ins and escalates urgent responses to nursing staff.',
      },
    ],
    integrations: ['Hospital Management Systems (HMIS)', 'WhatsApp Business API', 'Carrier Bulk SMS & USSD', 'Insurance Payer Portals', 'Google / Outlook Calendars', 'HL7 / FHIR Gateways'],
    relatedProductIds: ['ai-chatbots', 'docusense-rag', 'ai-automation'],
    ctaText: 'Book Healthcare AI Consultation',
  },

  // 3. Logistics & Fleet Ops
  {
    id: 'logistics-fleet',
    code: 'IND-03 // LOGISTICS & FLEET OPS',
    category: 'industry',
    title: 'Logistics, Freight & Fleet AI Automation',
    shortTitle: 'Logistics & Fleet Ops',
    tagline: 'Real-time consignment tracking, driver dispatch bots, and waybill data extraction.',
    description:
      'Eliminate manual manifest transcription, automate cross-border customs documentation, and coordinate fleet drivers and consignees in real time.',
    longDescription:
      'Designed for freight forwarders, 3PL distributors, courier networks, and fleet operators. Muru AI combines multimodal OCR for waybills and customs declarations with automated WhatsApp driver dispatch bots and live shipment tracking portals.',
    iconName: 'Truck',
    metrics: {
      primaryLabel: 'Manifest Processing Time',
      primaryValue: '-92%',
      secondaryLabel: 'Customs Data Accuracy',
      secondaryValue: '99.4%',
      deploymentTime: '10–14 Days',
      roiBenchmark: '1,200+ Clerk Hours Saved/Mo',
    },
    capabilities: [
      'Multimodal OCR extraction for waybills, commercial invoices, packing lists, and customs forms',
      'Automated HS tariff code validation and 3-way PO-to-Delivery reconciliation',
      'WhatsApp driver dispatch bot for route assignments, fuel receipts, and proof-of-delivery (POD) photos',
      '24/7 consignee shipment tracking via WhatsApp or SMS shortcode',
      'Automated detention, demurrage, and cold-chain temperature excursion alerts',
      'Direct ERP and Transport Management System (TMS) ledger synchronization',
    ],
    workflows: [
      {
        title: 'Automated Waybill & Customs Manifest Ingestion',
        trigger: 'Supplier or clearing agent emails 40-page multi-item commercial invoice & packing list PDF.',
        aiAction: 'Vision AI extracts line items, weights, and HS codes, cross-checking against customs tariff rules.',
        systemOutput: 'Populates SAP/Odoo ERP and customs declaration draft in 35 seconds, flagging any variance.',
        impact: 'Cuts document clearance prep from 4 hours to under 1 minute per consignment.',
      },
      {
        title: 'WhatsApp Driver POD & Expense Capture',
        trigger: 'Fleet driver completes delivery and snaps photo of signed delivery note on WhatsApp.',
        aiAction: 'Verifies signature, extracts stamped quantity, and updates delivery status to COMPLETED.',
        systemOutput: 'Triggers instant customer invoice dispatch in ERP and updates consignee tracking link.',
        impact: 'Accelerates invoice-to-cash cycle by 5 days.',
      },
      {
        title: 'Live Consignee Shipment Tracking Desk',
        trigger: 'Client messages tracking number or container ID on WhatsApp.',
        aiAction: 'Queries GPS telematics and port clearance milestones in real time.',
        systemOutput: 'Returns exact vessel/truck location, ETA, and customs clearance status immediately.',
        impact: 'Reduces dispatch center phone calls by 78%.',
      },
    ],
    architectureSteps: [
      {
        step: '01. Document & Telemetry Intake',
        title: 'Emails, PDFs, Driver WhatsApp & GPS Feeds',
        detail: 'Ingests unstructured shipping documents, POD images, and live vehicle telemetry.',
      },
      {
        step: '02. Multimodal Parsing',
        title: 'OCR Extraction & Tariff Rule Validation',
        detail: 'Transforms scanned tables and stamps into validated JSON schemas with 99.4% accuracy.',
      },
      {
        step: '03. TMS & ERP Execution',
        title: 'Automated Ledger Posting & Dispatch Routing',
        detail: 'Updates SAP, Odoo, or custom TMS databases and dispatches driver instructions.',
      },
      {
        step: '04. Stakeholder Alerts',
        title: 'Proactive Consignee & Operations Notifications',
        detail: 'Sends automated milestone SMS/WhatsApp updates and flags exceptions for ops managers.',
      },
    ],
    integrations: ['SAP & Odoo ERP', 'Custom TMS & Fleet Telematics', 'WhatsApp Business API', 'Carrier Bulk SMS', 'Document OCR Pipeline', 'Customs & Port Portals'],
    relatedProductIds: ['ai-automation', 'docusense-rag', 'ai-agents'],
    ctaText: 'Book Logistics & Fleet AI Demo',
  },

  // 4. Financial Services & SACCOs
  {
    id: 'financial-services',
    code: 'IND-04 // FINANCIAL SERVICES & SACCOS',
    category: 'industry',
    title: 'Financial Services, Banking & SACCO AI Solutions',
    shortTitle: 'Financial Services & SACCOs',
    tagline: 'Loan pre-screening, KYC document verification, and account balance assistants.',
    description:
      'Accelerate loan underwriting, automate KYC/AML document verification, and serve members 24/7 across WhatsApp, USSD, and Bulk SMS with bank-grade security.',
    longDescription:
      'Built for commercial banks, microfinance institutions, SACCOs, insurance underwriters, and fintechs. Muru AI automates KYC ID and bank statement parsing, performs instant loan eligibility scoring, and provides 24/7 member self-service on WhatsApp and USSD (*123#) inside isolated private VPCs.',
    iconName: 'Landmark',
    metrics: {
      primaryLabel: 'Loan Intake Cycle',
      primaryValue: '48h → 4m',
      secondaryLabel: 'KYC Verification Accuracy',
      secondaryValue: '99.6%',
      deploymentTime: '10–14 Days',
      roiBenchmark: '3.8x Underwriting Throughput',
    },
    capabilities: [
      'Automated KYC document extraction (National ID, KRA PIN, Passport, CR12) with tamper detection',
      'M-Pesa and bank statement parsing with automated cashflow, debt-service, and affordability scoring',
      '24/7 SACCO & banking member self-service via WhatsApp and USSD (*123#) for balances and mini-statements',
      'Automated loan repayment reminders and early delinquency recovery outreach via SMS & WhatsApp',
      'Insurance policy underwriting copilot and automated claims document verification',
      'Zero data retention, private VPC isolation, and cryptographic audit logging for CBK/regulatory compliance',
    ],
    workflows: [
      {
        title: 'Instant KYC & M-Pesa/Bank Statement Underwriting',
        trigger: 'Applicant submits loan request with PDF M-Pesa statement and ID photos via portal or WhatsApp.',
        aiAction: 'Extracts 12-month cashflow, identifies recurring income vs. gambling/liabilities, and calculates credit score.',
        systemOutput: 'Generates structured credit memo in Core Banking System for instant approval or officer sign-off.',
        impact: 'Reduces loan processing turnaround from 48 hours to 4 minutes.',
      },
      {
        title: '24/7 SACCO Member Balance & Guarantor Assistant',
        trigger: 'Member queries share deposits, loan limit, or guarantor status on WhatsApp or USSD.',
        aiAction: 'Authenticates member via OTP and retrieves live ledger balances from Core Banking API.',
        systemOutput: 'Displays real-time statement summary and allows digital guarantor nomination.',
        impact: 'Deflects 85% of routine branch and call-center inquiries.',
      },
      {
        title: 'Automated Collections & Repayment Nudges',
        trigger: 'Installment due date approaches (T-3 days) or enters early arrears.',
        aiAction: 'Sends personalized SMS/WhatsApp reminder with embedded M-Pesa Paybill/STK Push prompt.',
        systemOutput: 'Reconciles incoming payment automatically and updates member ledger in real time.',
        impact: 'Improves on-time loan collection rates by 24%.',
      },
    ],
    architectureSteps: [
      {
        step: '01. Secure Member Channel',
        title: 'OTP-Verified WhatsApp, USSD & Web Portal',
        detail: 'Enforces multi-factor authentication and session encryption before accessing financial records.',
      },
      {
        step: '02. Document & Risk Engine',
        title: 'KYC Vision OCR & Cashflow Scoring',
        detail: 'Parses financial statements and identity documents inside an isolated zero-retention VPC.',
      },
      {
        step: '03. Core Banking Sync',
        title: 'T24, Microsoft Dynamics, Mifos & Custom CBS APIs',
        detail: 'Executes read/write transactions with idempotent ledger reconciliation and audit trails.',
      },
      {
        step: '04. Compliance & Audit',
        title: 'Immutable Regulatory Logging & RBAC',
        detail: 'Logs every decision trace and human approval for internal audit and regulatory inspection.',
      },
    ],
    integrations: ['Core Banking Systems (T24, Mifos, Dynamics)', 'M-Pesa Daraja API', 'Carrier Bulk SMS & USSD Gateways', 'WhatsApp Business API', 'KYC / Credit Bureau APIs', 'Private Cloud VPC'],
    relatedProductIds: ['ai-agents', 'docusense-rag', 'ai-data-analytics'],
    ctaText: 'Book Financial Services AI Audit',
  },

  // 5. Real Estate & Property
  {
    id: 'real-estate',
    code: 'IND-05 // REAL ESTATE & PROPERTY',
    category: 'industry',
    title: 'Real Estate & Property Management AI',
    shortTitle: 'Real Estate & Property',
    tagline: '24/7 lead qualification, automated viewing scheduling, and tenant query desks.',
    description:
      'Capture high-intent property buyers across time zones, automate site visit scheduling, and streamline tenant rent invoicing and maintenance dispatch.',
    longDescription:
      'Muru AI empowers property developers, real estate agencies, and commercial property managers with 24/7 autonomous sales and operations agents. Engage international and diaspora buyers within 30 seconds, share interactive floor plans and payment schedules, qualify budgets, and book site visits directly into broker calendars.',
    iconName: 'Building2',
    metrics: {
      primaryLabel: 'Lead-to-Viewing Lift',
      primaryValue: '+44%',
      secondaryLabel: 'First Response Time',
      secondaryValue: '< 30s',
      deploymentTime: '7–10 Days',
      roiBenchmark: '100% Weekend Lead Retention',
    },
    capabilities: [
      '24/7 property advisory agent on WhatsApp & Web for unit pricing, ROI yields, and floor plans',
      'Automated buyer budget, financing readiness, and investment horizon qualification',
      'Direct Google/Outlook calendar booking for physical site visits and virtual 3D walkthroughs',
      'Automated tenant rent invoicing, M-Pesa receipting, and service charge reconciliation',
      'Tenant maintenance ticket intake with automated plumber/electrician contractor dispatch',
      'Instant lease agreement & property legal document Q&A powered by DocuSense RAG',
    ],
    workflows: [
      {
        title: '24/7 Diaspora & Weekend Property Buyer Concierge',
        trigger: 'Prospect clicks property ad at 11:00 PM Sunday asking for 2-bedroom payment plans.',
        aiAction: 'Shares curated PDF brochure, calculates installment schedule, and qualifies buyer budget.',
        systemOutput: 'Syncs qualified lead to HubSpot CRM and books Tuesday 10:00 AM site viewing with senior broker.',
        impact: 'Increases lead-to-viewing conversion by 44% with zero missed weekend inquiries.',
      },
      {
        title: 'Automated Rent Collection & Service Charge Desk',
        trigger: 'Monthly billing cycle starts on the 1st of the month across 500+ managed units.',
        aiAction: 'Dispatches itemized rent & utility invoices via WhatsApp/SMS with instant payment link.',
        systemOutput: 'Auto-reconciles payments in property ERP and issues digital PDF receipts immediately.',
        impact: 'Saves 80+ accounting hours monthly and accelerates on-time rent collection.',
      },
      {
        title: 'Smart Maintenance Triage & Contractor Dispatch',
        trigger: 'Tenant sends photo of plumbing leak on WhatsApp maintenance desk.',
        aiAction: 'Classifies urgency as High, logs unit number, and checks approved contractor roster.',
        systemOutput: 'Dispatches work order to on-call technician and updates tenant with confirmed arrival window.',
        impact: 'Cuts average maintenance resolution time by 58%.',
      },
    ],
    architectureSteps: [
      {
        step: '01. Omnichannel Capture',
        title: 'WhatsApp, Property Portals, Instagram & Webchat',
        detail: 'Engages buyers and tenants instantly across all marketing and management channels.',
      },
      {
        step: '02. Property Knowledge RAG',
        title: 'Live Unit Inventory, Pricing & Brochure Grounding',
        detail: 'Retrieves exact unit availability, square footage, payment plans, and lease terms.',
      },
      {
        step: '03. CRM & Calendar Sync',
        title: 'HubSpot, Salesforce & Property ERP Integration',
        detail: 'Logs lead qualification scores, books broker calendars, and updates tenant ledgers.',
      },
      {
        step: '04. Automated Follow-Up',
        title: 'Drip Nurturing & Payment Reconciliation',
        detail: 'Sends viewing reminders, investment yield updates, and automated rent receipts.',
      },
    ],
    integrations: ['WhatsApp Business API', 'HubSpot & Salesforce CRM', 'Google & Outlook Calendar', 'Property Management ERPs', 'M-Pesa & Bank Gateways', 'Carrier Bulk SMS'],
    relatedProductIds: ['ai-agents', 'ai-chatbots', 'ai-automation'],
    ctaText: 'Book Real Estate AI Demo',
  },

  // 6. Hospitality & Tourism
  {
    id: 'hospitality',
    code: 'IND-06 // HOSPITALITY & TOURISM',
    category: 'industry',
    title: 'Hospitality, Hotels & Safari Tourism AI',
    shortTitle: 'Hospitality & Tourism',
    tagline: 'Elevate guest experiences with 24/7 multilingual booking and concierge automation.',
    description:
      'Deploy multilingual reservation concierges, dynamic safari itinerary builders, and instant in-stay guest service dispatch on WhatsApp and Web.',
    longDescription:
      'Built for hotels, resorts, safari tour operators, and travel agencies. Muru AI engages international guests in 12+ languages 24/7, checks live room availability in your Property Management System (PMS), generates custom safari/stay quotes, processes deposits, and coordinates housekeeping and dining requests.',
    iconName: 'Hotel',
    metrics: {
      primaryLabel: 'Direct Booking Lift',
      primaryValue: '+38%',
      secondaryLabel: 'Guest Response Speed',
      secondaryValue: '< 2.0s',
      deploymentTime: '7–12 Days',
      roiBenchmark: '24/7 Service in 12+ Languages',
    },
    capabilities: [
      '24/7 multilingual reservation concierge (English, French, German, Spanish, Italian, Mandarin, Swahili)',
      'Real-time room availability, seasonal rate lookup, and direct booking engine integration',
      'Automated custom safari & holiday itinerary builder with instant PDF proposal generation',
      'In-stay WhatsApp guest concierge for room service, spa bookings, airport transfers, and late check-out',
      'Automated housekeeping and maintenance task dispatch with SLA tracking',
      'Post-stay guest feedback collection and TripAdvisor/Google review routing',
    ],
    workflows: [
      {
        title: '24/7 Direct Room & Safari Reservation Concierge',
        trigger: 'International traveler inquires at 2:00 AM local time about a 5-night family suite & safari package.',
        aiAction: 'Converses in guest’s native language, checks PMS availability, and generates itemized quote.',
        systemOutput: 'Processes card/mobile deposit link and confirms reservation directly in Opera/Cloudbeds PMS.',
        impact: 'Increases direct commission-free bookings by 38%.',
      },
      {
        title: 'In-Stay WhatsApp Room Service & Concierge',
        trigger: 'Guest scans QR code in room to request extra towels and book a 7:30 PM dinner table.',
        aiAction: 'Verifies room number, confirms restaurant table availability, and routes towel request to housekeeping.',
        systemOutput: 'Logs task in staff dashboard and sends instant confirmation to guest on WhatsApp.',
        impact: 'Reduces front-desk phone volume by 70% while boosting F&B upsell revenue.',
      },
    ],
    architectureSteps: [
      {
        step: '01. Guest Touchpoint',
        title: 'Multilingual WhatsApp, Webchat & In-Room QR',
        detail: 'Auto-detects guest language and maintains context across pre-arrival, stay, and post-checkout.',
      },
      {
        step: '02. Hospitality Knowledge & PMS',
        title: 'Live Room Inventory, Rates & Amenity RAG',
        detail: 'Grounds responses in your live PMS availability, seasonal tariffs, and resort policies.',
      },
      {
        step: '03. Booking & Staff Dispatch',
        title: 'Payment Processing & Department Routing',
        detail: 'Secures booking deposits and routes housekeeping, F&B, and transport tasks in real time.',
      },
      {
        step: '04. Loyalty & Reviews',
        title: 'Post-Stay Feedback & Repeat Guest Campaigns',
        detail: 'Automates review requests and seasonal return-guest offers.',
      },
    ],
    integrations: ['Opera, Cloudbeds & eZee PMS', 'WhatsApp Business API', 'Stripe, Pesapal & M-Pesa', 'POS & Restaurant Booking', 'Google & TripAdvisor APIs', 'Staff Task Boards'],
    relatedProductIds: ['ai-chatbots', 'ai-agents', 'ai-automation'],
    ctaText: 'Book Hospitality AI Demo',
  },

  // 7. Education & EdTech
  {
    id: 'education',
    code: 'IND-07 // EDUCATION & EDTECH',
    category: 'industry',
    title: 'Education, Universities & EdTech AI',
    shortTitle: 'Education & EdTech',
    tagline: 'Automate admissions inquiries, fee collection reminders, and 24/7 student support.',
    description:
      'Empower universities, colleges, K-12 schools, and training institutions with automated admissions desks, fee reconciliation, and curriculum-grounded study copilots.',
    longDescription:
      'Muru AI helps educational institutions handle thousands of seasonal admissions inquiries, automate transcript and application document verification, provide parents and students with instant fee balance lookups via WhatsApp/USSD, and deploy 24/7 AI study tutors grounded in approved course syllabi.',
    iconName: 'GraduationCap',
    metrics: {
      primaryLabel: 'Admissions Email Reduction',
      primaryValue: '-75%',
      secondaryLabel: 'Student Query Resolution',
      secondaryValue: '86%',
      deploymentTime: '7–14 Days',
      roiBenchmark: '2.6x Faster Enrollment Intake',
    },
    capabilities: [
      '24/7 Admissions & Enrollment Assistant for program requirements, intakes, and tuition structures',
      'Automated certificate and transcript OCR verification during student application intake',
      'Parent & Student WhatsApp/USSD desk for real-time fee balances, M-Pesa payment prompts, and receipts',
      'Curriculum-grounded 24/7 AI Study Tutor trained strictly on faculty lecture notes and textbooks',
      'Automated exam timetable, campus event, and emergency broadcast notifications via Bulk SMS',
      'Alumni engagement and career placement tracking automation',
    ],
    workflows: [
      {
        title: 'Automated Admissions & Certificate Verification',
        trigger: 'Prospective student inquiries about degree requirements and uploads high school transcript on WhatsApp.',
        aiAction: 'Vision OCR extracts grades, checks minimum cluster/program eligibility, and guides applicant through intake form.',
        systemOutput: 'Creates verified applicant profile in Student Information System (SIS) and issues provisional offer letter.',
        impact: 'Cuts admissions processing bottlenecks by 75% during peak intake months.',
      },
      {
        title: 'Fee Balance Lookup & Automated Receipting',
        trigger: 'Parent requests current semester fee balance via WhatsApp or school USSD code.',
        aiAction: 'Authenticates student ID, retrieves live balance from school ERP, and offers instant payment prompt.',
        systemOutput: 'Posts payment to finance ledger, updates meal/exam clearance card, and sends PDF receipt.',
        impact: 'Eliminates long queues at the finance office and improves on-time fee collection.',
      },
    ],
    architectureSteps: [
      {
        step: '01. Campus Channels',
        title: 'WhatsApp, Student Portal, USSD & Bulk SMS',
        detail: 'Provides accessible communication for prospective students, parents, and faculty.',
      },
      {
        step: '02. Academic & Policy RAG',
        title: 'Course Catalogs, Fee Structures & Syllabi',
        detail: 'Answers academic and administrative questions with 100% adherence to institutional policies.',
      },
      {
        step: '03. SIS & Finance ERP Sync',
        title: 'Moodle, Canvas, Odoo & School ERP Connectors',
        detail: 'Synchronizes enrollment records, fee ledgers, and academic timetables.',
      },
      {
        step: '04. Proactive Engagement',
        title: 'Automated Deadlines & Parent Broadcasts',
        detail: 'Sends targeted SMS/WhatsApp alerts for registration deadlines and fee milestones.',
      },
    ],
    integrations: ['Student Information Systems (SIS)', 'Moodle & Canvas LMS', 'School Finance ERPs', 'WhatsApp Business API', 'Carrier Bulk SMS & USSD', 'M-Pesa & Bank Integrations'],
    relatedProductIds: ['ai-chatbots', 'docusense-rag', 'ai-automation'],
    ctaText: 'Book Education AI Demo',
  },

  // 8. NGOs & Non-Profits
  {
    id: 'ngos',
    code: 'IND-08 // NGOS & DEVELOPMENT',
    category: 'industry',
    title: 'NGOs, Humanitarian & Development Programs AI',
    shortTitle: 'NGOs & Non-Profits',
    tagline: 'Maximize humanitarian impact with automated field data, M&E reporting, and community SMS.',
    description:
      'Automate grant compliance reporting, multilingual beneficiary communication via SMS/USSD/WhatsApp, and field survey data synthesis.',
    longDescription:
      'Built for international NGOs, foundations, UN agencies, and development programs. Muru AI reduces administrative overhead by automating Monitoring & Evaluation (M&E) data cleansing, enabling two-way beneficiary feedback in local dialects over SMS/USSD/WhatsApp, and accelerating donor compliance reporting.',
    iconName: 'HeartHandshake',
    metrics: {
      primaryLabel: 'M&E Reporting Time Saved',
      primaryValue: '200+ hrs/qtr',
      secondaryLabel: 'Field Data Accuracy',
      secondaryValue: '99.2%',
      deploymentTime: '10–14 Days',
      roiBenchmark: '3x Faster Donor Audit Prep',
    },
    capabilities: [
      'Two-way multilingual community engagement via Bulk SMS, USSD (*123#), and WhatsApp',
      'Automated field survey ingestion, data cleansing, and anomaly detection (KoboToolbox / ODK sync)',
      'DocuSense RAG across grant agreements, donor compliance guidelines (USAID, EU, DFID), and procurement SOPs',
      'Automated vendor receipt & field expenditure auditing against approved grant budget lines',
      'Instant generation of quarterly donor impact narratives and KPI dashboards',
      'Strict data sovereignty, beneficiary anonymization, and encrypted audit trails',
    ],
    workflows: [
      {
        title: 'Multilingual Field Survey & Beneficiary Feedback Loop',
        trigger: '5,000 rural program beneficiaries respond to USSD/SMS impact survey in Swahili and local dialects.',
        aiAction: 'Translates, categorizes sentiment, flags urgent community alerts, and aggregates KPIs.',
        systemOutput: 'Populates live M&E dashboard and generates donor-ready statistical summary.',
        impact: 'Compresses 3 weeks of manual survey coding into real-time field intelligence.',
      },
      {
        title: 'Grant Compliance & Field Expense Verification',
        trigger: 'Field office submits 120 procurement receipts and workshop attendance sheets.',
        aiAction: 'Vision OCR extracts amounts, verifies compliance against donor per-diem rules, and checks budget codes.',
        systemOutput: 'Flags 2 policy exceptions for finance director review and posts approved entries to ERP.',
        impact: 'Ensures 100% audit readiness and saves 200+ staff hours per quarterly reporting cycle.',
      },
    ],
    architectureSteps: [
      {
        step: '01. Field & Community Intake',
        title: 'USSD, Bulk SMS, WhatsApp & ODK/Kobo Feeds',
        detail: 'Reaches beneficiaries on basic feature phones or smartphones across low-connectivity regions.',
      },
      {
        step: '02. Translation & Compliance AI',
        title: 'Multilingual NLP & Grant Rule Grounding',
        detail: 'Processes local languages and cross-references donor compliance frameworks.',
      },
      {
        step: '03. ERP & M&E Warehouse',
        title: 'DHIS2, KoboToolbox, SAP & Dynamics Sync',
        detail: 'Writes structured, anonymized indicators directly to program databases.',
      },
      {
        step: '04. Donor Reporting',
        title: 'Automated Impact Digests & Audit Logs',
        detail: 'Produces verifiable metrics and narrative reports for board and donor reviews.',
      },
    ],
    integrations: ['KoboToolbox, ODK & CommCare', 'DHIS2 & PowerBI', 'Carrier Bulk SMS & USSD', 'WhatsApp Business API', 'Microsoft Dynamics & SAP', 'SharePoint & Google Drive'],
    relatedProductIds: ['docusense-rag', 'ai-data-analytics', 'ai-automation'],
    ctaText: 'Book NGO & Program AI Consultation',
  },

  // 9. Professional Services
  {
    id: 'professional-services',
    code: 'IND-09 // LEGAL, AUDIT & CONSULTING',
    category: 'industry',
    title: 'Professional Services, Legal & Advisory AI',
    shortTitle: 'Professional Services',
    tagline: 'Supercharge billable hours with firm-wide document RAG, contract review, and proposal drafting.',
    description:
      'Instant semantic retrieval across decades of case files, automated contract risk analysis, client intake automation, and proposal synthesis.',
    longDescription:
      'Engineered for law firms, audit & accounting practices, management consultancies, and engineering advisories. Muru AI deploys private, zero-retention DocuSense RAG engines over your firm’s precedent library, contracts, and tax regulations—cutting research and drafting time from hours to minutes.',
    iconName: 'Briefcase',
    metrics: {
      primaryLabel: 'Research & Drafting Time',
      primaryValue: '6h → 15m',
      secondaryLabel: 'Citation Precision',
      secondaryValue: '99.7%',
      deploymentTime: '7–14 Days',
      roiBenchmark: '+9.5 Billable Hours/Partner/Wk',
    },
    capabilities: [
      'Private DocuSense RAG across thousands of legal precedents, historical contracts, and audit working papers',
      'Automated contract redlining and risk clause detection against firm playbooks',
      'Instant RFP & client proposal drafting grounded in past winning bids and partner CVs',
      '24/7 client intake, conflict-of-interest pre-checks, and engagement letter generation',
      'Automated regulatory & tax gazette monitoring with client impact briefings',
      'Strict matter-level access permissions (ethical walls) and zero external model training',
    ],
    workflows: [
      {
        title: 'Precedent Search & Automated Contract Risk Review',
        trigger: 'Associate uploads a 65-page commercial lease or M&A agreement for risk review.',
        aiAction: 'Compares every clause against firm standard playbook, highlighting non-standard indemnities and missing protections.',
        systemOutput: 'Outputs structured redline memo with exact page/clause citations in 90 seconds.',
        impact: 'Cuts initial legal and compliance review time from 6 hours to 15 minutes.',
      },
      {
        title: 'RFP & Technical Proposal Synthesis',
        trigger: 'Consulting team receives a 90-page enterprise tender / RFP document.',
        aiAction: 'Extracts mandatory compliance criteria and retrieves relevant past project case studies from firm archive.',
        systemOutput: 'Generates compliance matrix and first-draft technical response aligned to tender rubric.',
        impact: 'Enables partners to respond to 3x more high-value tenders without adding headcount.',
      },
    ],
    architectureSteps: [
      {
        step: '01. Encrypted Matter Ingestion',
        title: 'SharePoint, iManage, NetDocuments & Local Drives',
        detail: 'Indexes PDFs, DOCX files, and scanned agreements while preserving matter-level ACL permissions.',
      },
      {
        step: '02. Citation-Strict RAG',
        title: 'Hybrid Semantic + Exact Clause Retrieval',
        detail: 'Every generated answer is locked to verifiable source paragraphs with zero fabrication.',
      },
      {
        step: '03. Practice Management Sync',
        title: 'Clio, PracticePanther, CRM & Billing Integration',
        detail: 'Automates client onboarding, conflict checks, and time-entry categorization.',
      },
      {
        step: '04. Private VPC Security',
        title: 'Zero Data Retention & Attorney-Client Privilege',
        detail: 'Runs inside isolated tenant infrastructure so confidential client files never leave your control.',
      },
    ],
    integrations: ['SharePoint & OneDrive', 'Google Workspace', 'Legal DMS & Practice ERPs', 'WhatsApp & Client Portals', 'Private Vector Databases', 'Isolated Cloud VPC'],
    relatedProductIds: ['docusense-rag', 'ai-agents', 'custom-ai-applications'],
    ctaText: 'Book Professional Services AI Demo',
  },

  // 10. Use Case 1: Customer Support Automation
  {
    id: 'customer-support-automation',
    code: 'USE-CASE 01 // CUSTOMER SUPPORT',
    category: 'use-case',
    title: '24/7 Customer Support & Ticket Automation',
    shortTitle: 'Customer Support Automation',
    tagline: 'Resolve 80%+ of repetitive queries with < 1.2s response time across WhatsApp, Web & Email.',
    description:
      'Deploy an omnichannel AI support workforce grounded in your knowledge base and live customer databases—resolving tier-1 and tier-2 tickets autonomously while seamlessly escalating complex cases to human agents.',
    longDescription:
      'Customer support teams spend up to 75% of their day answering the same repetitive questions about order status, account balances, password resets, and policy terms. Muru AI deploys a unified conversational and ticket-resolution engine across WhatsApp Business, Webchat, Instagram, and Email that authenticates users, performs live API lookups, resolves issues in under 1.2 seconds, and hands off edge cases to human agents with a complete executive summary.',
    iconName: 'Headphones',
    metrics: {
      primaryLabel: 'Ticket Auto-Resolution',
      primaryValue: '80%+',
      secondaryLabel: 'Avg First Response',
      secondaryValue: '< 1.2s',
      deploymentTime: '7–10 Days',
      roiBenchmark: '-60% Support Cost Per Ticket',
    },
    capabilities: [
      'Instant 24/7 response across WhatsApp Business API, Website Chat, Instagram, Facebook, and Email',
      'Live account, billing, and order status lookups via authenticated REST/GraphQL APIs',
      'Hallucination-free policy answers grounded in your PDFs, help center, and SOP manuals',
      'Sentiment-aware human escalation with full conversation summary and pre-filled CRM ticket fields',
      'Live Agent Co-Pilot that drafts 1-click replies and surfaces relevant policy articles for human reps',
      'Multilingual support across English, Swahili, French, Arabic, and 40+ global languages',
    ],
    workflows: [
      {
        title: 'Autonomous Tier-1 Account & Order Resolution',
        trigger: 'Customer messages on WhatsApp asking why their account invoice or shipment is delayed.',
        aiAction: 'Authenticates phone number, queries ERP/billing API, identifies status, and explains exact resolution.',
        systemOutput: 'Resolves inquiry in 1.1 seconds and logs closed interaction in Zendesk/HubSpot.',
        impact: 'Eliminates 4-hour queue wait times and boosts CSAT to 4.8/5.',
      },
      {
        title: 'Smart Sentiment Escalation & Human Handoff',
        trigger: 'VIP enterprise client reports a complex billing dispute or expresses frustration.',
        aiAction: 'Detects VIP tier + negative sentiment, pauses bot, and compiles a 4-bullet context brief.',
        systemOutput: 'Routes to senior account manager on Slack/Zendesk with 3 recommended resolution drafts.',
        impact: 'Cuts human agent handle time by 52% with zero customer repetition.',
      },
    ],
    architectureSteps: [
      {
        step: '01. Omnichannel Gateway',
        title: 'WhatsApp, Webchat, Social & Email Ingestion',
        detail: 'Normalizes customer messages across all channels into a single unified thread.',
      },
      {
        step: '02. Intent & Policy RAG',
        title: 'Knowledge Retrieval & Live API Tool Calling',
        detail: 'Combines static policy documentation with live customer database lookups.',
      },
      {
        step: '03. Resolution or Handoff',
        title: 'Autonomous Execution or Co-Pilot Escalation',
        detail: 'Solves routine tasks immediately or transfers seamlessly to human agents when thresholds trigger.',
      },
      {
        step: '04. CSAT & Analytics',
        title: 'Continuous Quality Scoring & Topic Clustering',
        detail: 'Tracks resolution rates, CSAT scores, and emerging product issues in real time.',
      },
    ],
    integrations: ['WhatsApp Business Cloud API', 'Zendesk, Freshdesk & Intercom', 'HubSpot & Salesforce', 'Custom ERP & Billing APIs', 'Slack & Microsoft Teams', 'Carrier Bulk SMS'],
    relatedProductIds: ['ai-chatbots', 'live-agent-assist', 'docusense-rag'],
    ctaText: 'Book Support Automation Demo',
  },

  // 11. Use Case 2: Inbound Lead Qualification
  {
    id: 'inbound-lead-qualification',
    code: 'USE-CASE 02 // REVENUE & SALES',
    category: 'use-case',
    title: 'Autonomous Inbound Lead Qualification & Booking',
    shortTitle: 'Inbound Lead Qualification',
    tagline: 'Engage website and WhatsApp leads in under 30 seconds and auto-book qualified demos.',
    description:
      'Stop losing high-intent leads to slow follow-up. Deploy an autonomous AI Sales Agent that engages prospects 24/7, qualifies budget and timeline, updates your CRM, and books meetings directly onto your reps’ calendars.',
    longDescription:
      'Studies show that responding to an inbound lead within 1 minute increases conversion by over 390% compared to waiting 30 minutes. Muru AI’s Inbound Lead Qualification Agent engages every web form submission, WhatsApp click-to-chat ad, and social inquiry within seconds—holding natural consultative conversations, applying your BANT/MEDDIC qualification criteria, sending tailored brochures, and reserving calendar slots for your closers.',
    iconName: 'UserCheck',
    metrics: {
      primaryLabel: 'Lead Response Speed',
      primaryValue: '< 30s',
      secondaryLabel: 'Pipeline Conversion Lift',
      secondaryValue: '+38%',
      deploymentTime: '5–10 Days',
      roiBenchmark: '3.8x More Qualified Meetings',
    },
    capabilities: [
      'Instant sub-30-second engagement across WhatsApp Click-to-Chat ads, web forms, and landing pages',
      'Natural conversational qualification for Budget, Authority, Need, and Timeline (BANT)',
      'Dynamic product recommendation and automated PDF case study / pricing brochure delivery',
      'Real-time round-robin calendar scheduling directly into Google Calendar, Outlook, or Calendly',
      'Automated HubSpot, Salesforce, Pipedrive, or Zoho CRM contact creation and deal stage updates',
      'Automated multi-day WhatsApp and email follow-up sequences for prospects who go quiet',
    ],
    workflows: [
      {
        title: 'Click-to-WhatsApp Ad to Booked Sales Demo',
        trigger: 'Prospect clicks a LinkedIn/Meta ad at 9:30 PM and opens a WhatsApp chat.',
        aiAction: 'Answers initial pricing/feature questions, confirms company size & budget, and offers 3 calendar slots.',
        systemOutput: 'Books Google Meet invite, creates HubSpot deal with full transcript, and alerts AE on Slack.',
        impact: 'Converts after-hours ad spend into confirmed morning sales meetings.',
      },
      {
        title: 'Web Form Enrichment & Instant Outreach',
        trigger: 'Visitor submits "Request Quote" form on website.',
        aiAction: 'Enriches company domain, initiates immediate WhatsApp/email outreach, and gathers technical requirements.',
        systemOutput: 'Scores lead 92/100 and routes high-value enterprise accounts straight to senior leadership.',
        impact: 'Eliminates manual SDR qualification drag and quadruples speed-to-lead.',
      },
    ],
    architectureSteps: [
      {
        step: '01. Lead Capture',
        title: 'Web Forms, WhatsApp Ads, LinkedIn & Live Chat',
        detail: 'Triggers within milliseconds of any inbound prospect action 24/7/365.',
      },
      {
        step: '02. Consultative Qualification',
        title: 'Dynamic BANT Reasoning & Collateral Matching',
        detail: 'Adapts questions based on prospect industry and shares relevant ROI proof points.',
      },
      {
        step: '03. Calendar & CRM Sync',
        title: 'Round-Robin Scheduling & Deal Enrichment',
        detail: 'Writes structured qualification fields to CRM and locks calendar invites with zero friction.',
      },
      {
        step: '04. Nurture Automation',
        title: 'Intelligent Follow-Up & Re-Engagement',
        detail: 'Sends polite, value-driven check-ins and pre-meeting reminders to ensure 90%+ show rates.',
      },
    ],
    integrations: ['HubSpot, Salesforce & Pipedrive', 'WhatsApp Business API', 'Google & Outlook Calendar', 'Meta & LinkedIn Lead Ads', 'Slack & Teams Alerts', 'Webhooks & REST APIs'],
    relatedProductIds: ['ai-agents', 'ai-chatbots', 'ai-integrations'],
    ctaText: 'Book Lead Qualification Demo',
  },

  // 12. Use Case 3: Back-Office Document Processing
  {
    id: 'document-processing',
    code: 'USE-CASE 03 // DOCUMENT & OCR PIPELINES',
    category: 'use-case',
    title: 'Back-Office Document Processing & Intelligent OCR',
    shortTitle: 'Document Processing',
    tagline: 'Parse invoices, receipts, contracts, and compliance forms straight into your ERP & databases.',
    description:
      'Eliminate manual data entry and spreadsheet copy-pasting. Our multimodal vision and RAG pipelines extract, validate, and reconcile structured data from messy PDFs, scans, and emails automatically.',
    longDescription:
      'Finance, procurement, logistics, and underwriting teams lose thousands of hours transcribing data from unstandardized vendor invoices, delivery waybills, bank statements, and KYC forms. Muru AI combines high-precision Multimodal Vision OCR with deterministic business rule validation to parse complex tables, handwritten notes, and multi-page PDFs—posting verified records directly into SAP, Odoo, QuickBooks, or PostgreSQL.',
    iconName: 'FileText',
    metrics: {
      primaryLabel: 'Processing Speed',
      primaryValue: '-92% Time',
      secondaryLabel: 'Extraction Accuracy',
      secondaryValue: '99.4%',
      deploymentTime: '7–14 Days',
      roiBenchmark: '15–25 Hrs Saved/Employee/Wk',
    },
    capabilities: [
      'Layout-aware Multimodal Vision OCR for invoices, purchase orders, receipts, waybills, and bank statements',
      'Automated 3-way matching across Purchase Orders (PO), Goods Received Notes (GRN), and Vendor Invoices',
      'Tax compliance verification (KRA eTIMS / VAT pin validation, withholding calculations, tariff codes)',
      'Confidence scoring with human-in-the-loop side-by-side review queue for low-confidence or high-variance fields',
      'Multi-language document parsing (English, French, Swahili, Portuguese, Arabic)',
      'Direct writeback to SAP, Odoo, Microsoft Dynamics, Xero, QuickBooks, and SQL databases',
    ],
    workflows: [
      {
        title: 'Automated Accounts Payable & 3-Way PO Matching',
        trigger: 'Vendor emails PDF invoice to accounts@company.com or uploads via supplier portal.',
        aiAction: 'Extracts header & 50+ line items, matches against ERP Purchase Order & delivery note, and checks tax math.',
        systemOutput: 'Posts clean bill to SAP/Odoo ledger if variance is 0%, or flags exact price discrepancy for controller approval.',
        impact: 'Processes 1,000+ monthly invoices with zero manual typing.',
      },
      {
        title: 'KYC, Bank Statement & Compliance Form Extraction',
        trigger: 'Operations team receives batch of scanned application forms, IDs, and 6-month bank statements.',
        aiAction: 'Extracts identity fields, normalizes transaction rows into structured JSON, and runs fraud/tamper heuristics.',
        systemOutput: 'Populates underwriting database and compliance checklist in under 20 seconds.',
        impact: 'Reduces onboarding backlogs by 90% while eliminating transcription typos.',
      },
    ],
    architectureSteps: [
      {
        step: '01. Multi-Source Ingestion',
        title: 'Email Inboxes, SFTP, WhatsApp, Scanners & Portals',
        detail: 'Monitors designated inboxes and upload buckets for PDFs, images, DOCX, and spreadsheets.',
      },
      {
        step: '02. Multimodal Vision Extraction',
        title: 'Table Reconstruction, Stamp Detection & Schema Mapping',
        detail: 'Converts unstandardized layouts into strict, typed JSON schemas with field-level confidence scores.',
      },
      {
        step: '03. Rule & Cross-DB Validation',
        title: '3-Way Matching, Tax Verification & Anomaly Checks',
        detail: 'Verifies extracted values against live ERP purchase orders, vendor master lists, and math rules.',
      },
      {
        step: '04. ERP Commit & Audit Trail',
        title: 'Automated Ledger Posting & Exception Routing',
        detail: 'Commits verified records to your database and routes exceptions to a 1-click human review UI.',
      },
    ],
    integrations: ['SAP, Odoo & Microsoft Dynamics', 'QuickBooks, Xero & Sage', 'Gmail, Outlook & SharePoint', 'PostgreSQL & BigQuery', 'KRA eTIMS / Tax APIs', 'Custom Webhook Pipelines'],
    relatedProductIds: ['docusense-rag', 'ai-automation', 'ai-integrations'],
    ctaText: 'Book Document Processing Demo',
  },

  // 13. Spotlight: 14-Day Proof-of-Concept Pilot
  {
    id: '14-day-poc',
    code: 'PILOT PROGRAM // 14-DAY POC',
    category: 'use-case',
    title: '14-Day Enterprise Proof-of-Concept (PoC) Sprint',
    shortTitle: '14-Day PoC Pilot',
    tagline: 'Deploy a working AI prototype on your own business data in 14 days before full commitment.',
    description:
      'De-risk your AI investment. In two weeks, our senior engineers scope, build, and deploy a functional production prototype grounded in your real documents, workflows, and APIs.',
    longDescription:
      'Enterprise leaders shouldn’t have to buy slide decks or wait six months to see if AI works for their operations. Muru AI’s 14-Day Proof-of-Concept Sprint delivers a working, security-hardened prototype connected to a sample of your real business data (PDFs, WhatsApp sandbox, or CRM/ERP staging API) with clear ROI benchmarks before you commit to full-scale rollout.',
    iconName: 'Sparkles',
    metrics: {
      primaryLabel: 'Sprint Duration',
      primaryValue: '14 Days',
      secondaryLabel: 'Accuracy Target SLA',
      secondaryValue: '> 98.5%',
      deploymentTime: '2 Weeks Fixed',
      roiBenchmark: 'Verified ROI Before Scale-Up',
    },
    capabilities: [
      'Days 1–3: Executive bottleneck audit, data security boundary setup, and KPI baseline definition',
      'Days 4–8: Custom AI agent / RAG / workflow development grounded in your sample company documents',
      'Days 9–11: Staging integration with your WhatsApp test number, CRM sandbox, or ERP read-replica',
      'Days 12–14: Live stakeholder testing, latency & accuracy benchmarking, and full rollout roadmap',
      '100% isolated private VPC environment with NDA protection and zero external model training',
      'Full credit of PoC sprint fee toward your production enterprise deployment',
    ],
    workflows: [
      {
        title: 'Week 1: Architecture Scoping & Data Grounding',
        trigger: 'Kickoff workshop with your operations/IT lead and selection of 1 high-impact bottleneck.',
        aiAction: 'Muru engineers ingest sample SOPs/invoices/catalogs and configure deterministic agent tools.',
        systemOutput: 'Working alpha prototype demonstrated live by Day 5.',
        impact: 'Immediate visibility into accuracy and response speed on your actual domain data.',
      },
      {
        title: 'Week 2: Live Sandbox Testing & Executive Sign-Off',
        trigger: 'Your team tests the prototype directly on WhatsApp or Web Cockpit.',
        aiAction: 'Refines prompts, edge-case guardrails, and API payload schemas based on real staff feedback.',
        systemOutput: 'Delivers working pilot + comprehensive Production Architecture & ROI Business Case.',
        impact: 'Zero guesswork—board-ready proof of value in 14 days.',
      },
    ],
    architectureSteps: [
      {
        step: 'Days 01–03',
        title: 'Discovery, NDA & Sandbox Provisioning',
        detail: 'Sign mutual NDA, provision isolated tenant environment, and lock target KPIs.',
      },
      {
        step: 'Days 04–08',
        title: 'Core Engine & Knowledge Build',
        detail: 'Configure RAG vector index, agent state machine, or OCR extraction pipeline.',
      },
      {
        step: 'Days 09–11',
        title: 'Channel & API Staging Hookup',
        detail: 'Connect to WhatsApp Business test channel, web widget, or staging CRM/ERP endpoints.',
      },
      {
        step: 'Days 12–14',
        title: 'UAT Benchmarking & Production Handover',
        detail: 'Run 100+ test scenarios with your team and deliver final ROI & production rollout blueprint.',
      },
    ],
    integrations: ['Isolated Tenant VPC', 'WhatsApp Business Sandbox', 'Staging CRM / ERP APIs', 'Private Vector Store', 'Live Telemetry Cockpit', 'Full Production Portability'],
    relatedProductIds: ['ai-agents', 'docusense-rag', 'ai-chatbots'],
    ctaText: 'Request 14-Day Pilot Access',
  },
];

export const PLATFORM_PAGES_DATA: PlatformPageData[] = [
  {
    id: 'hybrid-llm-routing',
    code: 'PLATFORM 01 // NEURAL ROUTER',
    title: 'Hybrid Multi-LLM Routing & Orchestration',
    shortTitle: 'Hybrid Multi-LLM Routing',
    tagline: 'Dynamic load balancing across Gemini 2.5, Claude 3.7, DeepSeek R1, GPT-4o, and private VPC models.',
    description:
      'Eliminate single-vendor lock-in and API downtime. Our neural router dynamically selects the optimal model for every prompt based on reasoning complexity, latency targets, data sensitivity, and token cost.',
    longDescription:
      'Relying on a single AI provider exposes your enterprise to rate limits, unexpected outages, and bloated token bills. Muru AI’s Hybrid Multi-LLM Router evaluates every incoming task in under 8 milliseconds—routing fast conversational triage to low-latency flash models, complex financial/code synthesis to frontier reasoning models, and confidential regulated data to self-hosted Llama 3 instances inside your private VPC.',
    iconName: 'Cpu',
    metrics: {
      primaryLabel: 'Router Overhead',
      primaryValue: '< 8ms',
      secondaryLabel: 'Token Cost Savings',
      secondaryValue: '-46%',
      uptimeSla: '99.99% Multi-Provider Failover',
      securityTier: 'Zero Vendor Lock-In',
    },
    capabilities: [
      'Sub-10ms task classification routing prompts to the best model for speed, accuracy, or cost',
      'Automatic sub-second failover if a primary cloud provider experiences degraded latency or 5xx errors',
      'Semantic caching layer that serves verified recurring queries in < 40ms at $0 token cost',
      'Hybrid cloud + private VPC routing: keep PII and regulated financial records on dedicated private GPUs',
      'Unified schema enforcement ensuring consistent JSON tool-calling outputs across all model families',
      'Real-time token economics telemetry tracking cost-per-resolution by department and workflow',
    ],
    technicalSpecs: [
      {
        label: 'Supported Frontier Models',
        value: 'Gemini 2.5 Pro/Flash, Claude 3.7 Sonnet, GPT-4o, DeepSeek R1',
        detail: 'Hot-swappable model registry with zero application code changes required.',
      },
      {
        label: 'Private VPC Models',
        value: 'Llama 3.3 70B, Qwen 2.5, Mistral Enterprise',
        detail: 'Deployed on dedicated single-tenant cloud GPUs or on-premise hardware.',
      },
      {
        label: 'Failover Recovery Time',
        value: '< 180ms Automatic Retry',
        detail: 'Circuit-breaker pattern seamlessly shifts traffic to secondary model provider.',
      },
      {
        label: 'Semantic Cache Hit Latency',
        value: '18ms – 35ms',
        detail: 'Redis + vector similarity cache bypasses LLM inference on validated frequent queries.',
      },
    ],
    architectureLayers: [
      {
        layer: 'Layer 01 // Ingress Classifier',
        title: 'Complexity, Intent & Sensitivity Scoring',
        detail: 'Analyzes prompt token length, required tool calls, and data classification tags in 6ms.',
      },
      {
        layer: 'Layer 02 // Semantic Cache',
        title: 'High-Speed Vector Cache Lookup',
        detail: 'Checks if an identical or semantically equivalent policy query was recently verified.',
      },
      {
        layer: 'Layer 03 // Dynamic Model Dispatch',
        title: 'Cost- & Latency-Optimized Provider Selection',
        detail: 'Dispatches to Gemini 2.5 Flash for speed, Claude 3.7 / Gemini 2.5 Pro for deep reasoning, or VPC Llama 3 for restricted data.',
      },
      {
        layer: 'Layer 04 // Output Validator',
        title: 'Schema Verification & Hallucination Guard',
        detail: 'Validates structured JSON output and verifies citations before returning to the user or API.',
      },
    ],
    supportedStack: ['Google Gemini 2.5 Pro & Flash', 'Anthropic Claude 3.7 Sonnet', 'DeepSeek R1 & V3', 'OpenAI GPT-4o & o3-mini', 'Self-Hosted Llama 3.3 VPC', 'Redis Semantic Cache'],
    ctaText: 'Book Multi-LLM Architecture Review',
  },
  {
    id: 'enterprise-security',
    code: 'PLATFORM 02 // SECURITY & GOVERNANCE',
    title: 'Enterprise Security, Privacy & SOC 2 Readiness',
    shortTitle: 'Enterprise Security & SOC 2',
    tagline: 'Private VPC isolation, zero data retention for training, cryptographic audit logs, and strict RBAC.',
    description:
      'Deploy AI with bank-grade governance. Your proprietary company documents, customer conversations, and database records are never used to train public AI models.',
    longDescription:
      'Security and compliance are the #1 concern for enterprise CIOs, CISOs, and legal counsel. Muru AI is architected from the ground up with defense-in-depth security: isolated Virtual Private Cloud (VPC) deployments, real-time PII redaction before model inference, prompt-injection firewalls, document-level Role-Based Access Control (RBAC), and immutable audit logs aligned with ISO 27001, SOC 2 Type II, GDPR, and Kenya ODPC Data Protection Act standards.',
    iconName: 'ShieldCheck',
    metrics: {
      primaryLabel: 'Public Model Training',
      primaryValue: '0% (Zero)',
      secondaryLabel: 'Encryption Standard',
      secondaryValue: 'AES-256 / TLS 1.3',
      uptimeSla: '100% Audit Traceability',
      securityTier: 'ISO 27001 / SOC 2 / ODPC Aligned',
    },
    capabilities: [
      'Contractual and technical Zero Data Retention (ZDR) with model providers—your data never trains public LLMs',
      'Automated PII & PHI Redaction Engine that masks national IDs, card numbers, and phone numbers pre-inference',
      'Real-time Prompt Injection & Jailbreak Firewall blocking adversarial manipulation attempts',
      'Document-level Role-Based Access Control (RBAC) ensuring staff only retrieve answers from files they are authorized to view',
      'Flexible deployment options: Dedicated Single-Tenant Cloud VPC (AWS, GCP, Azure) or On-Premise air-gapped servers',
      'Immutable cryptographic audit logs recording every user query, retrieved source chunk, tool call, and human override',
    ],
    technicalSpecs: [
      {
        label: 'Data Residency & Sovereignty',
        value: 'Configurable Region (EU, US, Africa, or On-Prem)',
        detail: 'Full compliance with Kenya Data Protection Act (ODPC), GDPR, and central bank guidelines.',
      },
      {
        label: 'Access Control & SSO',
        value: 'SAML 2.0, OAuth 2.0 / OIDC (Okta, Azure AD, Google)',
        detail: 'Inherits group permissions directly from your corporate identity provider.',
      },
      {
        label: 'Adversarial Guardrails',
        value: 'Pre- & Post-Inference Safety Filters',
        detail: 'Blocks prompt injection, SQL injection, unauthorized tool execution, and competitor mentions.',
      },
      {
        label: 'Encryption & Key Management',
        value: 'AES-256 at Rest / TLS 1.3 in Transit (BYOK Supported)',
        detail: 'Supports customer-managed encryption keys via AWS KMS or Google Cloud KMS.',
      },
    ],
    architectureLayers: [
      {
        layer: 'Layer 01 // Edge Firewall & Auth',
        title: 'SSO Authentication & Rate Limiting',
        detail: 'Verifies user identity token (JWT/SAML) and enforces role permissions at the gateway.',
      },
      {
        layer: 'Layer 02 // Input Sanitizer',
        title: 'Prompt-Injection Scanner & PII Masking',
        detail: 'Detects malicious prompt patterns and tokenizes sensitive PII before context assembly.',
      },
      {
        layer: 'Layer 03 // ACL-Scoped Retrieval',
        title: 'Permission-Filtered Vector & SQL Queries',
        detail: 'Queries only the document namespaces and database rows authorized for the requesting user’s role.',
      },
      {
        layer: 'Layer 04 // Output Audit & Compliance Log',
        title: 'Citation Verification & Immutable Ledger',
        detail: 'Verifies grounding fidelity and writes a tamper-evident audit record to the security log.',
      },
    ],
    supportedStack: ['Private AWS / GCP / Azure VPC', 'Azure Entra ID & Okta SSO', 'AES-256 & Customer KMS', 'Prompt-Injection Firewall', 'PII Redaction Pipeline', 'SOC 2 / ISO 27001 / ODPC Controls'],
    ctaText: 'Book Security & Compliance Review',
  },
  {
    id: 'omnichannel-api-gateway',
    code: 'PLATFORM 03 // OMNICHANNEL GATEWAY',
    title: 'Omnichannel API & Webhook Gateway',
    shortTitle: 'Omnichannel API Gateway',
    tagline: 'Unified connectors for WhatsApp Business, Webchat, Instagram, Bulk SMS, USSD, Slack, and ERPs.',
    description:
      'Connect your AI workforce to every customer channel and back-office database through a single resilient, high-throughput event gateway.',
    longDescription:
      'Customers interact across WhatsApp, web portals, Instagram DMs, SMS, and USSD, while your operational truth lives in SAP, Odoo, HubSpot, and payment gateways. Muru AI’s Omnichannel API Gateway provides a unified bidirectional bridge—normalizing inbound messages, preserving cross-channel session memory, and executing reliable webhook transactions with automatic retry queues and dead-letter protection.',
    iconName: 'Layers',
    metrics: {
      primaryLabel: 'Gateway Throughput',
      primaryValue: '10,000+ msg/s',
      secondaryLabel: 'Avg Webhook Latency',
      secondaryValue: '42ms',
      uptimeSla: '99.98% Guaranteed SLA',
      securityTier: 'HMAC Signed & Idempotent',
    },
    capabilities: [
      'Official Meta WhatsApp Business Cloud API integration (interactive buttons, list menus, catalogs, PDF media)',
      'Direct Carrier SMPP Bulk SMS & interactive USSD (*123#) session gateway for East African & global telcos',
      'Embeddable Webchat widget, Instagram Messaging, Facebook Messenger, Telegram, and Email intake',
      'Pre-built bidirectional adapters for HubSpot, Salesforce, Zendesk, SAP, Odoo, Microsoft Dynamics, and QuickBooks',
      'Native payment gateway orchestration for Safaricom M-Pesa Daraja (STK Push, C2B, B2C), Stripe, and Pesapal',
      'Idempotent webhook delivery with Redis/Kafka message queues, exponential backoff retries, and live payload inspection',
    ],
    technicalSpecs: [
      {
        label: 'Messaging Channels',
        value: 'WhatsApp API, Webchat, SMS, USSD, Instagram, Slack, Email',
        detail: 'Unified customer identity graph links conversations across channels.',
      },
      {
        label: 'ERP & CRM Connectors',
        value: 'REST, GraphQL, SOAP/XML, ODBC & Webhook Adapters',
        detail: 'Connects both modern cloud SaaS and legacy on-premise enterprise databases.',
      },
      {
        label: 'Queue & Retry Resilience',
        value: 'Zero-Loss Persistent Event Bus',
        detail: 'Queues transactions during downstream ERP maintenance windows and replays automatically.',
      },
      {
        label: 'Webhook Security',
        value: 'HMAC-SHA256 Signatures & Mutual TLS (mTLS)',
        detail: 'Cryptographically verifies every inbound and outbound webhook payload.',
      },
    ],
    architectureLayers: [
      {
        layer: 'Layer 01 // Channel Ingress',
        title: 'Multi-Protocol Webhook & SMPP Listeners',
        detail: 'Ingests events from Meta Cloud API, telco SMPP binds, web sockets, and email servers.',
      },
      {
        layer: 'Layer 02 // Session & Identity Graph',
        title: 'Cross-Channel Context Normalization',
        detail: 'Maps phone numbers, emails, and CRM IDs into a single continuous conversation state.',
      },
      {
        layer: 'Layer 03 // Orchestration Bus',
        title: 'Idempotent Transaction & Queue Engine',
        detail: 'Routes payloads to AI agents and executes external API calls with guaranteed delivery.',
      },
      {
        layer: 'Layer 04 // Enterprise Writeback',
        title: 'CRM, ERP & Payment Ledger Synchronization',
        detail: 'Commits structured updates to SAP, Odoo, HubSpot, and M-Pesa/Stripe ledgers.',
      },
    ],
    supportedStack: ['WhatsApp Business Cloud API', 'Carrier SMPP & USSD Gateways', 'M-Pesa Daraja & Stripe APIs', 'SAP, Odoo & Dynamics Adapters', 'HubSpot, Salesforce & Zendesk', 'Redis & Kafka Event Queues'],
    ctaText: 'Book API Integration Scoping',
  },
  {
    id: 'command-cockpit',
    code: 'PLATFORM 04 // LIVE COMMAND COCKPIT',
    title: 'Real-Time Enterprise Command Cockpit',
    shortTitle: 'Real-Time Command Cockpit',
    tagline: 'Live telemetry, agent execution traces, knowledge index manager, and manual human override switch.',
    description:
      'Maintain total operational visibility and control over your AI workforce. Monitor live reasoning traces, inspect vector documents, simulate prompts, and pause or override any agent with one click.',
    longDescription:
      'Enterprise AI cannot be a black box. Every Muru AI deployment includes our Real-Time Command Cockpit—a supervisor console designed for operations directors, support leads, and IT administrators. Watch autonomous agents execute multi-step workflows in real time, audit exact document citations, monitor node latency across your infrastructure, and flip any conversation or workflow into human manual override instantly.',
    iconName: 'Terminal',
    metrics: {
      primaryLabel: 'Telemetry Refresh',
      primaryValue: 'Real-Time (<50ms)',
      secondaryLabel: 'Active Fleet Nodes',
      secondaryValue: '24 Nodes Live',
      uptimeSla: '99.98% Cluster Uptime',
      securityTier: 'Role-Based Supervisor Control',
    },
    capabilities: [
      'Live Agent Execution Trace Inspector showing every thought step, API call, SQL query, and retrieved document chunk',
      'Instant Human-in-the-Loop Override Switch to pause any autonomous agent or take over a live customer conversation',
      'DocuSense Knowledge Vault Manager to upload PDFs, trigger vector re-indexing, and inspect embedding counts',
      'Interactive Prompt & Workflow Simulator for testing new policies before deploying to production channels',
      'Real-time Infrastructure Node Matrix tracking latency, uptime, and throughput across all 7 core system services',
      'Executive ROI & Resolution Telemetry tracking hours saved, auto-resolution %, and cost per transaction',
    ],
    technicalSpecs: [
      {
        label: 'Observability Granularity',
        value: '100% Step-by-Step Traceability',
        detail: 'Inspect exact JSON inputs/outputs, latency in ms, and token consumption per step.',
      },
      {
        label: 'Human Override Latency',
        value: 'Instant (< 100ms Kill-Switch / Takeover)',
        detail: 'Supervisors can pause a single conversation or halt an entire workflow queue immediately.',
      },
      {
        label: 'Knowledge Sync Speed',
        value: 'Incremental Vector Indexing in < 60s',
        detail: 'Upload updated policy PDFs or sync SharePoint folders without downtime.',
      },
      {
        label: 'Alerting & Escalation',
        value: 'Slack, WhatsApp, Email & PagerDuty Webhooks',
        detail: 'Instant supervisor alerts when confidence drops below threshold or VIP rules trigger.',
      },
    ],
    architectureLayers: [
      {
        layer: 'Module 01 // Fleet Telemetry Stream',
        title: 'Live Node Health & Event Activity Bus',
        detail: 'Streams real-time execution events, latency metrics, and status heartbeats to the console.',
      },
      {
        layer: 'Module 02 // Reasoning Trace Studio',
        title: 'Step-by-Step Agent & Tool Audit',
        detail: 'Visualizes the exact chain of thought, database lookups, and guardrail checks for every task.',
      },
      {
        layer: 'Module 03 // Knowledge Vector Vault',
        title: 'Document Indexing & Citation Tester',
        detail: 'Manages indexed PDFs, DOCX manuals, and database schemas with live retrieval testing.',
      },
      {
        layer: 'Module 04 // Supervisor Governance',
        title: 'Manual Takeover & Threshold Controls',
        detail: 'Empowers managers to adjust confidence thresholds, approve flagged actions, or assume control.',
      },
    ],
    supportedStack: ['Live WebSocket Telemetry', 'Agent State Machine Inspector', 'Qdrant / Pinecone Vector Manager', 'RBAC Supervisor Console', '1-Click Human Takeover', 'Automated SLA Alerting'],
    ctaText: 'Book Live Cockpit Walkthrough',
  },
];

export const RESOURCE_PAGES_DATA: ResourcePageData[] = [
  {
    id: 'case-studies',
    code: 'RESOURCE 01 // VERIFIED CLIENT ROI',
    title: 'Enterprise Case Studies & Production Benchmarks',
    shortTitle: 'Case Studies & Client ROI',
    tagline: 'Read real production results, clerk hours saved, and verified performance benchmarks across East Africa & global deployments.',
    description:
      'Explore detailed architectural breakdowns and verified commercial outcomes from telecommunications, freight logistics, real estate, and financial services enterprises powered by Muru AI.',
    longDescription:
      'Every Muru AI engagement is measured against strict commercial KPIs: ticket deflection rate, intake cycle compression, lead-to-viewing conversion lift, and annualized cost savings. Explore our production case studies below, inspect the exact technology stacks deployed, and review how our engineering team solved mission-critical operational bottlenecks.',
    iconName: 'BarChart3',
    highlights: [
      { label: 'Queries Auto-Resolved (ISP)', value: '74%' },
      { label: 'Logistics Intake Cycle Cut', value: '-92%' },
      { label: 'Real Estate Viewing Lift', value: '+44%' },
      { label: 'Verified Annual Client Savings', value: '$140k+/yr' },
    ],
    keyTakeaways: [
      'How a regional ISP automated 74% of 12,000+ monthly WhatsApp and web support inquiries with < 4s latency',
      'How an East African freight distributor saved 1,200 clerk hours/month using multimodal OCR connected to SAP ERP',
      'How a premier property developer retained 100% of weekend diaspora leads and boosted viewings by 44%',
      'Full architectural diagrams, integration blueprints, and 14-day pilot validation metrics',
    ],
    ctaText: 'Book a Case Study & Architecture Briefing',
  },
  {
    id: 'engineering-process',
    code: 'RESOURCE 02 // DELIVERY METHODOLOGY',
    title: '6-Stage Disciplined Engineering Delivery Process',
    shortTitle: '6-Stage Engineering Process',
    tagline: 'From 48-hour feasibility audit to hardened production rollout, staff enablement, and 24/7 enterprise SLA.',
    description:
      'See exactly how Muru Tech takes your organization from initial operational bottleneck discovery to a secure, integrated AI system in weeks—not quarters.',
    longDescription:
      'Most enterprise AI projects stall because they lack a disciplined engineering methodology. At Muru AI, we follow a rigorous 6-stage delivery lifecycle—Discover, Design, Build, Integrate, Launch, and Improve—complete with concrete deliverables, security gate sign-offs, human-in-the-loop guardrails, and hands-on staff training at every milestone.',
    iconName: 'CheckCircle2',
    highlights: [
      { label: 'Stage 01 Feasibility Audit', value: '48 Hours' },
      { label: 'Working PoC Prototype', value: '14 Days' },
      { label: 'Full Production Rollout', value: '3–6 Weeks' },
      { label: 'Post-Launch Uptime SLA', value: '99.98%' },
    ],
    keyTakeaways: [
      'Stage 01 (Discover) & Stage 02 (Design): Mapping operational bottlenecks and delivering a fixed-scope ROI blueprint',
      'Stage 03 (Build) & Stage 04 (Integrate): Engineering hallucination-guarded agents connected directly to your CRM/ERP',
      'Stage 05 (Launch) & Stage 06 (Improve): Staged pilot rollout, staff enablement workshops, and continuous accuracy tuning',
      'Transparent governance gates, zero vendor lock-in, and complete documentation handover',
    ],
    ctaText: 'Schedule Stage 01 Feasibility Audit',
  },
  {
    id: 'roi-calculator',
    code: 'RESOURCE 03 // FINANCIAL SIMULATOR',
    title: 'Interactive Enterprise AI ROI & Savings Calculator',
    shortTitle: 'ROI & Savings Calculator',
    tagline: 'Model your team size, repetitive weekly hours, and labor costs to calculate your annualized AI savings and payback period.',
    description:
      'Use our interactive financial modeling studio to estimate how many thousands of staff hours and dollars your organization can reclaim by automating repetitive support, sales, and back-office workflows.',
    longDescription:
      'Before writing a single line of code, every Muru AI deployment is anchored in unit economics. Use the interactive calculator below to adjust your team headcount, average weekly hours spent on repetitive manual tasks (data entry, ticket triage, lead qualification, report compilation), and hourly operational cost—then generate a custom ROI audit brief for your leadership board.',
    iconName: 'Calculator',
    highlights: [
      { label: 'Avg Automation Efficiency', value: '70% – 85%' },
      { label: 'Typical Payback Period', value: '< 60 Days' },
      { label: 'Hours Reclaimed / Employee', value: '15–25 hrs/wk' },
      { label: 'First-Year Net ROI Multiple', value: '4.2x – 8.5x' },
    ],
    keyTakeaways: [
      'Interactive sliders to model your exact headcount, repetitive task hours, and monthly labor overhead',
      'Department-by-department breakdown across Customer Support, Sales/SDRs, Finance/AP, and Operations',
      'Transparent calculation of reclaimed productive hours, annualized net savings, and breakeven timeline',
      'One-click export of your custom metrics directly into an executive consultation request',
    ],
    ctaText: 'Book Custom ROI Verification Audit',
  },
  {
    id: 'problem-matcher',
    code: 'RESOURCE 04 // BOTTLENECK DIAGNOSTIC',
    title: 'Interactive Operational Problem Matcher & Blueprint Generator',
    shortTitle: 'Interactive Problem Matcher',
    tagline: 'Select your primary operational bottleneck to generate an immediate AI architecture blueprint and system recommendation.',
    description:
      'Not sure which AI product or division fits your immediate business challenge? Select your symptom below to inspect the exact solution architecture, connected systems, and verified commercial outcome.',
    longDescription:
      'We always start with your business problem—never technology for technology’s sake. Whether your team is overwhelmed by customer inquiries, losing leads due to slow follow-ups, buried in manual invoice data entry, or struggling to search scattered internal documents, our interactive Problem Matcher maps your bottleneck to a proven Muru AI architecture.',
    iconName: 'Zap',
    highlights: [
      { label: 'Core Bottlenecks Mapped', value: '6 Archetypes' },
      { label: 'Architecture Blueprints', value: 'Production-Ready' },
      { label: 'Deployment Turnaround', value: '7–21 Days' },
      { label: 'Custom Scoping Session', value: 'Complimentary' },
    ],
    keyTakeaways: [
      'Diagnose high ticket volumes, slow lead response, repetitive data entry, scattered documents, or data blindness',
      'Inspect recommended AI system architecture, required API integrations, and real client outcome metrics',
      'Jump directly to the matching Muru AI Product Page or book a tailored scoping session with our Lead Architect',
      'Compare turnkey vs. custom-engineered deployment paths for your existing software stack',
    ],
    ctaText: 'Book Bottleneck Diagnostic Session',
  },
];
