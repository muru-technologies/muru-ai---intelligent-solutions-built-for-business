import {
  ActivityEvent,
  DetailedAgent,
  WorkflowItem,
  KnowledgeItem,
  SystemServiceHealth
} from '../types';

export const COMMAND_CENTER_METRICS = {
  activeAgents: 24,
  activeAgentsChange: '+8.4%',
  tasksProcessedToday: '1,842',
  tasksLabel: 'TODAY',
  automationsActive: 87,
  automationsLabel: 'ACTIVE',
  systemUptime: '98.7%',
  uptimeLabel: 'OPERATIONAL',
  totalLatency: '142 ms',
  apiRequestsToday: '18,492',
  errorRate: '0.12%'
};

export const INITIAL_ACTIVITY_EVENTS: ActivityEvent[] = [
  {
    id: 'evt-1',
    time: '09:42:18',
    agent: 'Sales Agent',
    agentId: 'sales',
    action: 'qualified a new high-intent B2B lead (Apex Holdings)',
    category: 'sales',
    status: 'completed',
    latencyMs: 142
  },
  {
    id: 'evt-2',
    time: '09:41:52',
    agent: 'Support Agent',
    agentId: 'support',
    action: 'answered customer query via WhatsApp in 1.2s',
    category: 'support',
    status: 'completed',
    latencyMs: 98
  },
  {
    id: 'evt-3',
    time: '09:40:31',
    agent: 'Operations Agent',
    agentId: 'operations',
    action: 'Workflow #204 completed: automated invoice ledger sync',
    category: 'workflow',
    status: 'operational',
    latencyMs: 110
  },
  {
    id: 'evt-4',
    time: '09:39:48',
    agent: 'Knowledge Agent',
    agentId: 'knowledge',
    action: 'retrieved 12 policy documents with 99.4% confidence',
    category: 'knowledge',
    status: 'synced',
    latencyMs: 65
  },
  {
    id: 'evt-5',
    time: '09:38:22',
    agent: 'System Core',
    agentId: 'system',
    action: 'CRM bidirectional synchronization completed (HubSpot)',
    category: 'crm',
    status: 'completed',
    latencyMs: 184
  }
];

export const SIMULATED_INCOMING_EVENTS: ActivityEvent[] = [
  {
    id: 'evt-6',
    time: '09:43:05',
    agent: 'Sales Agent',
    agentId: 'sales',
    action: 'scheduled demo meeting with VP Operations at Kilimanjaro Safari',
    category: 'sales',
    status: 'completed',
    latencyMs: 130
  },
  {
    id: 'evt-7',
    time: '09:43:40',
    agent: 'Support Agent',
    agentId: 'support',
    action: 'resolved inquiry: room upgrade availability confirmed in PMS',
    category: 'support',
    status: 'completed',
    latencyMs: 82
  },
  {
    id: 'evt-8',
    time: '09:44:12',
    agent: 'Research Agent',
    agentId: 'research',
    action: 'generated weekly commodity cost anomaly digest for CFO',
    category: 'workflow',
    status: 'operational',
    latencyMs: 290
  },
  {
    id: 'evt-9',
    time: '09:44:55',
    agent: 'Knowledge Agent',
    agentId: 'knowledge',
    action: 'indexed 44 pages of updated regulatory tax compliance directives',
    category: 'knowledge',
    status: 'synced',
    latencyMs: 112
  }
];

export const DETAILED_AGENTS: DetailedAgent[] = [
  {
    id: 'sales',
    name: 'Sales Agent',
    tagline: 'Lead qualification and customer acquisition assistant',
    status: 'ACTIVE',
    tasksToday: 284,
    successRate: '97.8%',
    currentActivity: 'Analyzing incoming B2B lead profile and intent scoring...',
    model: 'Muru-Neural-70B-v4',
    latency: '124 ms',
    pipeline: [
      { step: '01', label: 'INPUT', sublabel: 'Inbound Channel', status: 'completed' },
      { step: '02', label: 'CUSTOMER MESSAGE', sublabel: 'Entity Extraction', status: 'completed' },
      { step: '03', label: 'AI ANALYSIS', sublabel: 'Intent Classification', status: 'completed' },
      { step: '04', label: 'INTENT DETECTION', sublabel: 'Buying Signal Score', status: 'processing' },
      { step: '05', label: 'LEAD SCORING', sublabel: 'Tier-A Threshold Check', status: 'pending' },
      { step: '06', label: 'CRM', sublabel: 'HubSpot / Salesforce Dispatch', status: 'pending' }
    ],
    recentActions: [
      'Dispatched qualified lead $45,000 ARR to Senior Sales Executive',
      'Followed up automatically with cold prospect via personalized WhatsApp note',
      'Enriched company demographic profile with LinkedIn + Crunchbase data'
    ]
  },
  {
    id: 'support',
    name: 'Support Agent',
    tagline: '24/7 Omnichannel customer service and resolution',
    status: 'ACTIVE',
    tasksToday: 642,
    successRate: '99.1%',
    currentActivity: 'Resolving guest booking modification query on WhatsApp...',
    model: 'Muru-Fast-Context-Flash',
    latency: '92 ms',
    pipeline: [
      { step: '01', label: 'MESSAGE INGEST', sublabel: 'WhatsApp / Web / Email', status: 'completed' },
      { step: '02', label: 'SEMANTIC PARSE', sublabel: 'Language & Emotion Detection', status: 'completed' },
      { step: '03', label: 'KNOWLEDGE MATCH', sublabel: 'Muru Vector RAG Retrieval', status: 'processing' },
      { step: '04', label: 'POLICY CHECK', sublabel: 'Internal Safety & SLAs', status: 'pending' },
      { step: '05', label: 'DISPATCH REPLY', sublabel: 'Multi-lingual Response Stream', status: 'pending' }
    ],
    recentActions: [
      'Auto-refunded duplicate reservation according to hotel cancellation grace policy',
      'Escalated complex VIP billing dispute to Duty Manager with full conversation summary',
      'Answered FAQ in French, Swahili and English simultaneously'
    ]
  },
  {
    id: 'research',
    name: 'Research Agent',
    tagline: 'Market trends, competitor intelligence and anomaly detection',
    status: 'ACTIVE',
    tasksToday: 156,
    successRate: '96.4%',
    currentActivity: 'Synthesizing competitor pricing indexes across 14 marketplaces...',
    model: 'Muru-Deep-Reasoner-PRO',
    latency: '310 ms',
    pipeline: [
      { step: '01', label: 'DATA HARVEST', sublabel: 'Public APIs & Web Connectors', status: 'completed' },
      { step: '02', label: 'NORMALIZATION', sublabel: 'Schema Cleanse & Dedupe', status: 'completed' },
      { step: '03', label: 'CROSS-CHECK', sublabel: 'Historical Benchmark Compare', status: 'processing' },
      { step: '04', label: 'SUMMARY GEN', sublabel: 'Executive Flash Briefing', status: 'pending' }
    ],
    recentActions: [
      'Detected 14% competitor price cut in regional logistics and alerted sales leadership',
      'Compiled supplier ESG sustainability compliance audit summary',
      'Summarized 180-page central bank quarterly monetary policy release'
    ]
  },
  {
    id: 'operations',
    name: 'Operations Agent',
    tagline: 'Cross-system logistics, ERP coordination and task routing',
    status: 'ACTIVE',
    tasksToday: 418,
    successRate: '99.4%',
    currentActivity: 'Re-routing delayed supply truck manifest in central ERP...',
    model: 'Muru-Logic-Execution-Core',
    latency: '88 ms',
    pipeline: [
      { step: '01', label: 'SYSTEM EVENT', sublabel: 'Webhook from Fleet Telematics', status: 'completed' },
      { step: '02', label: 'DELAY DETECTION', sublabel: '+45m Over Expected Arrival', status: 'completed' },
      { step: '03', label: 'STOCK ALLOCATION', sublabel: 'Warehouse Buffer Swap', status: 'processing' },
      { step: '04', label: 'NOTIFICATION', sublabel: 'Auto-SMS to Loading Dock Team', status: 'pending' }
    ],
    recentActions: [
      'Matched 120 invoices against purchase orders without human intervention',
      'Triggered automated reorder for critical inventory reaching safety threshold',
      'Updated SAP status codes across 84 delivery consignments'
    ]
  },
  {
    id: 'knowledge',
    name: 'Knowledge Agent',
    tagline: 'Internal document RAG, corporate repository assistant',
    status: 'ACTIVE',
    tasksToday: 342,
    successRate: '98.9%',
    currentActivity: 'Vectorizing new HR policies and supplier agreement addenda...',
    model: 'Muru-Vector-Retrieval-v2',
    latency: '74 ms',
    pipeline: [
      { step: '01', label: 'FILE INGEST', sublabel: 'SharePoint / Google Drive', status: 'completed' },
      { step: '02', label: 'CHUNK & EMBED', sublabel: 'Context-Aware Tokenization', status: 'completed' },
      { step: '03', label: 'VECTOR COMMIT', sublabel: 'Encrypted Enterprise Store', status: 'processing' },
      { step: '04', label: 'CACHE WARMING', sublabel: 'Instant Latency Index Update', status: 'pending' }
    ],
    recentActions: [
      'Extracted critical indemnification clauses across 40 vendor contracts',
      'Answered 82 internal employee compliance queries with verifiable source citations',
      'Refreshed semantic cache for product specification catalog'
    ]
  }
];

export const WORKFLOWS_DATA: WorkflowItem[] = [
  {
    id: 'wf-1',
    code: 'WF-204',
    name: 'New Customer Classification & Routing',
    trigger: 'Inbound Contact Form / Webhook',
    status: 'ACTIVE',
    runsToday: 312,
    avgTime: '1.4s',
    nodes: [
      { id: 'n1', label: 'NEW CUSTOMER', sublabel: 'Form / WhatsApp', type: 'trigger', status: 'completed' },
      { id: 'n2', label: 'AI CLASSIFICATION', sublabel: 'Intent & Budget', type: 'intelligence', status: 'completed' },
      { id: 'n3', label: 'LEAD QUALIFICATION', sublabel: 'B2B Criteria Filter', type: 'scoring', status: 'completed' },
      { id: 'n4', label: 'CRM UPDATE', sublabel: 'HubSpot Contact Create', type: 'integration', status: 'completed' },
      { id: 'n5', label: 'FOLLOW-UP', sublabel: 'Smart Email & SMS', type: 'action', status: 'completed' },
      { id: 'n6', label: 'SALES TEAM', sublabel: 'Calendar Direct Booking', type: 'action', status: 'completed' }
    ]
  },
  {
    id: 'wf-2',
    code: 'WF-118',
    name: 'Multimodal Invoice OCR & Three-Way Match',
    trigger: 'Email PDF Attachment (finance@)',
    status: 'ACTIVE',
    runsToday: 184,
    avgTime: '2.8s',
    nodes: [
      { id: 'n21', label: 'INVOICE PDF INGEST', sublabel: 'Mailbox Listener', type: 'trigger', status: 'completed' },
      { id: 'n22', label: 'MULTIMODAL AI OCR', sublabel: 'Table & Line-Item Parse', type: 'intelligence', status: 'completed' },
      { id: 'n23', label: 'THREE-WAY MATCH', sublabel: 'PO vs Delivery Slip', type: 'scoring', status: 'completed' },
      { id: 'n24', label: 'ERP LEDGER ENTRY', sublabel: 'SAP / QuickBooks API', type: 'integration', status: 'completed' },
      { id: 'n25', label: 'PAYMENT SCHEDULING', sublabel: 'Bank Gateway Staging', type: 'action', status: 'idle' }
    ]
  },
  {
    id: 'wf-3',
    code: 'WF-305',
    name: 'VIP Hospitality Guest Concierge Loop',
    trigger: 'Booking Reservation Status: CONFIRMED',
    status: 'ACTIVE',
    runsToday: 96,
    avgTime: '0.9s',
    nodes: [
      { id: 'n31', label: 'PMS RESERVATION', sublabel: 'Opera / Cloudbeds API', type: 'trigger', status: 'completed' },
      { id: 'n32', label: 'GUEST PROFILING', sublabel: 'Preference AI Memory', type: 'intelligence', status: 'completed' },
      { id: 'n33', label: 'WHATSAPP CONCIERGE', sublabel: 'Personalized Greeting', type: 'action', status: 'completed' },
      { id: 'n34', label: 'PRE-ARRIVAL ITINERARY', sublabel: 'Dining & Spa Upsell', type: 'action', status: 'idle' }
    ]
  }
];

export const KNOWLEDGE_METRICS = {
  documents: '1,284',
  knowledgeSources: '48',
  indexedData: '4.8 GB',
  queriesToday: '3,291'
};

export const SAMPLE_KNOWLEDGE_DOCS: KnowledgeItem[] = [
  { id: 'k1', title: 'Master Services Agreement & Standard SLA Terms', source: 'Legal/Contracts/2026', type: 'PDF', size: '2.4 MB', lastSynced: '2h ago', vectors: 1420 },
  { id: 'k2', title: 'Hotel Group Operations Manual & Cancellation Policy', source: 'Hospitality/Ops', type: 'Notion', size: '14.8 MB', lastSynced: '1h ago', vectors: 6840 },
  { id: 'k3', title: 'E-commerce Product Catalog & Live Stock Schema', source: 'PostgreSQL / Direct Sync', type: 'Database', size: '84.2 MB', lastSynced: '5m ago', vectors: 41200 },
  { id: 'k4', title: 'East Africa Tax & Logistics Import Compliance Guidelines', source: 'Regulatory/Gov', type: 'PDF', size: '8.1 MB', lastSynced: '4h ago', vectors: 3900 },
  { id: 'k5', title: 'Customer Support Escalation Matrix & VIP Protocols', source: 'Zendesk / Knowledge', type: 'CRM', size: '1.9 MB', lastSynced: '15m ago', vectors: 980 }
];

export const SYSTEM_SERVICES: SystemServiceHealth[] = [
  { name: 'AI CORE (Muru Neural Orchestrator)', status: 'ONLINE', latency: '24 ms', uptime: '99.98%' },
  { name: 'AGENTS (Autonomic Fleet Engine)', status: 'ONLINE', latency: '110 ms', uptime: '99.95%' },
  { name: 'DATABASE (Vector & Document Store)', status: 'ONLINE', latency: '18 ms', uptime: '100.00%' },
  { name: 'API (Public & Private Gateway)', status: 'ONLINE', latency: '45 ms', uptime: '99.92%' },
  { name: 'AUTOMATIONS (Workflow State Machine)', status: 'ONLINE', latency: '62 ms', uptime: '99.89%' },
  { name: 'KNOWLEDGE ENGINE (Semantic Embeddings)', status: 'ONLINE', latency: '78 ms', uptime: '99.94%' },
  { name: 'INTEGRATIONS (HubSpot, WhatsApp, ERP)', status: 'ONLINE', latency: '134 ms', uptime: '99.80%' }
];
