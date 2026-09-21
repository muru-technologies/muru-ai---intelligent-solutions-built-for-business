export interface NavItem {
  name: string;
  href: string;
  sectionId: string;
}

export interface AIService {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  examples?: string[];
  ctaText: string;
  iconName: string;
}

export interface ProblemSolution {
  id: string;
  quote: string;
  tag: string;
  solutionTitle: string;
  solutionType: string;
  summary: string;
  businessBenefit: string;
  systems: string[];
  exampleOutcome: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverable: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  useCases: string[];
  statsOrFocus: string;
}

export interface AIAgent {
  id: string;
  name: string;
  role: string;
  tagline: string;
  description: string;
  capabilities: string[];
  sampleTrigger: string;
  sampleAction: string;
  connectedSystems: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  clientType: string;
  challenge: string;
  solution: string;
  whatItDoes: string[];
  technology: string[];
  metrics: { label: string; value: string }[];
}

export interface TechCategory {
  title: string;
  description: string;
  items: string[];
}

export interface ContactFormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  interest: string;
  projectDetails: string;
}

// Command Center & Dashboard Types
export type CommandNavSection =
  | 'overview'
  | 'agents'
  | 'automations'
  | 'workflows'
  | 'knowledge'
  | 'analytics'
  | 'insights'
  | 'customers'
  | 'conversations'
  | 'projects'
  | 'integrations'
  | 'api'
  | 'settings';

export interface ActivityEvent {
  id: string;
  time: string;
  agent: string;
  agentId?: string;
  action: string;
  category: 'sales' | 'support' | 'workflow' | 'knowledge' | 'crm' | 'system';
  status: 'operational' | 'completed' | 'active' | 'synced';
  latencyMs: number;
}

export interface DetailedAgent {
  id: string;
  name: string;
  tagline: string;
  status: 'ACTIVE' | 'STANDBY' | 'PAUSED';
  tasksToday: number;
  successRate: string;
  currentActivity: string;
  model: string;
  latency: string;
  pipeline: {
    step: string;
    label: string;
    sublabel: string;
    status: 'completed' | 'processing' | 'pending';
  }[];
  recentActions: string[];
}

export interface WorkflowNode {
  id: string;
  label: string;
  sublabel: string;
  type: 'trigger' | 'intelligence' | 'scoring' | 'integration' | 'action';
  status: 'active' | 'completed' | 'idle';
}

export interface WorkflowItem {
  id: string;
  code: string;
  name: string;
  trigger: string;
  status: 'ACTIVE' | 'PAUSED';
  runsToday: number;
  avgTime: string;
  nodes: WorkflowNode[];
}

export interface KnowledgeItem {
  id: string;
  title: string;
  source: string;
  type: 'PDF' | 'Database' | 'API' | 'Notion' | 'CRM';
  size: string;
  lastSynced: string;
  vectors: number;
}

export interface SystemServiceHealth {
  name: string;
  status: 'ONLINE' | 'DEGRADED' | 'MAINTENANCE';
  latency: string;
  uptime: string;
}

