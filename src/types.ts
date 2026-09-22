export interface ContactFormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  interest: string;
  projectDetails: string;
}

export type AgentStatus = 'ACTIVE' | 'PAUSED';

export interface AgentPipelineStep {
  step: string;
  label: string;
  sublabel: string;
}

export interface DetailedAgent {
  id: string;
  name: string;
  tagline: string;
  model: string;
  status: AgentStatus;
  tasksToday: number;
  successRate: string;
  latency: string;
  currentActivity: string;
  pipeline: AgentPipelineStep[];
  recentActions: string[];
}
export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  examples: string[];
  ctaText: string;
  iconName: string;
  category: 'core' | 'automation' | 'custom' | 'analytics';
}

export interface ProblemMatcherItem {
  id: string;
  quote: string;
  tag: string;
  solutionTitle: string;
  solutionType: string;
  summary: string;
  businessBenefit: string;
  systems: string[];
  exampleOutcome: string;
  iconName: string;
}

export interface AutonomousAgent {
  id: string;
  name: string;
  role: string;
  tagline: string;
  description: string;
  capabilities: string[];
  sampleTrigger: string;
  sampleAction: string;
  connectedSystems: string[];
  status: 'ONLINE' | 'ACTIVE' | 'IDLE';
  avgLatency: string;
  accuracyRate: string;
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
  metrics: {
    label: string;
    value: string;
  }[];
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverable: string;
}

export interface IndustryVertical {
  id: string;
  name: string;
  tagline: string;
  description: string;
  useCases: string[];
  statsOrFocus: string;
  iconName: string;
}

export interface TechStackCategory {
  title: string;
  description: string;
  items: string[];
}

export interface EngineeringPrinciple {
  pillar: string;
  title: string;
  description: string;
  icon: string;
}

export interface KnowledgeDocument {
  id: string;
  title: string;
  source: string;
  type: string;
  size: string;
  lastSynced: string;
  vectors: number;
  status: 'INDEXED' | 'SYNCING';
}

export interface SystemServiceNode {
  name: string;
  status: 'ONLINE' | 'STANDBY';
  latency: string;
  uptime: string;
}

export interface WorkflowActivityEvent {
  id: string;
  title: string;
  agent: string;
  timestamp: string;
  status: 'SUCCESS' | 'RUNNING' | 'QUEUED';
  details: string;
}

/*
 * Compatibility aliases used by muruData.ts
 */
export type AIService = ServiceItem;
export type ProblemSolution = ProblemMatcherItem;
export type IndustryItem = IndustryVertical;
export type AIAgent = AutonomousAgent;
export type TechCategory = TechStackCategory;
