import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Play,
  RotateCw,
  ShieldCheck,
  Zap,
  Terminal,
  Server,
  Workflow,
  MessageSquare,
  Database,
  Building,
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/siteData';

interface HeroProps {
  onOpenConsultation: (initialInterest?: string) => void;
  onExploreSolutions: () => void;
}

type PipelineScenarioKey = 'lead_whatsapp' | 'support_ticket' | 'invoice_sync';

interface PipelineScenario {
  id: PipelineScenarioKey;
  title: string;
  source: string;
  sourceType: string;
  muruCore: string;
  agent: string;
  agentRole: string;
  outputSummary: string;
  sampleInput: string;
  destinations: { name: string; note: string; tag: string }[];
  resultData: Record<string, any>;
}

const SCENARIOS: Record<PipelineScenarioKey, PipelineScenario> = {
  lead_whatsapp: {
    id: 'lead_whatsapp',
    title: 'Inbound Lead to CRM',
    source: 'Prospective Client (WhatsApp Business)',
    sourceType: 'Omnichannel Inbound',
    muruCore: 'Muru Intent Classifier & Guardrail Layer',
    agent: 'Sales Agent (Fleet Node 01)',
    agentRole: 'BANT Lead Qualification & Scheduling',
    outputSummary: 'Scored 94/100 • Demo Booked • CRM Record Created',
    sampleInput: '“Hello, we need an automated invoice and order processing system for our 4 regional branches.”',
    destinations: [
      { name: 'HubSpot CRM', note: 'Contact Created • Score 94/100', tag: 'Synced' },
      { name: 'Google Calendar', note: 'Demo Confirmed: Thursday 2:00 PM', tag: 'Scheduled' },
      { name: 'Director WhatsApp', note: 'Priority Executive Brief Delivered', tag: 'Notified' },
    ],
    resultData: {
      client_name: 'Regional Retail Group',
      budget_tier: '$10,000 - $25,000',
      urgency: 'Immediate (Within 30 days)',
      qualification: 'QUALIFIED_ENTERPRISE',
      assigned_architect: 'Lead AI Engineer',
      latency: '1.4s',
    },
  },
  support_ticket: {
    id: 'support_ticket',
    title: '24/7 Support Resolution',
    source: 'Active Customer (Web Portal & App)',
    sourceType: 'Customer Support Flow',
    muruCore: 'Muru Semantic Knowledge Engine & Policy Store',
    agent: 'Support Agent (Fleet Node 02)',
    agentRole: 'Instant Diagnostics & Ticket Resolution',
    outputSummary: 'Auto-Resolved in 2.1s • Zero Human Escalation',
    sampleInput: '“Our office router shows blinking amber light. Order #8492. Can we reset without losing custom DNS?”',
    destinations: [
      { name: 'Billing & Account API', note: 'Account #8492 Verified Active', tag: 'Looked Up' },
      { name: 'Network Diagnostics', note: 'Remote Line Flushed & Stabilized', tag: 'Executed' },
      { name: 'Zendesk Desk', note: 'Ticket #4819 Closed with 5-Star CSAT', tag: 'Archived' },
    ],
    resultData: {
      customer_id: 'CUST-8492',
      diagnosis: 'DHCP lease refresh required',
      action_taken: 'Automated port toggle signal dispatched',
      resolution_time: '2.1 seconds',
      escalation_needed: false,
    },
  },
  invoice_sync: {
    id: 'invoice_sync',
    title: 'Document Automation',
    source: 'Vendor Accounts Email (PDF Attached)',
    sourceType: 'Multimodal Document Intake',
    muruCore: 'Muru Vision & Document Extraction Parser',
    agent: 'Operations Agent (Fleet Node 04)',
    agentRole: 'Cross-Checking POs & Ledger Reconciliation',
    outputSummary: '48 Items Parsed • Discrepancy Flagged • Ledger Synced',
    sampleInput: 'PDF Manifest: 48 line items, $42,500.00 total across 3 regional customs clearance declarations.',
    destinations: [
      { name: 'SAP / ERP Ledger', note: 'Ledger #204 Posted & Reconciled', tag: 'Committed' },
      { name: 'Slack Ops Channel', note: '1-Click Executive Approval Required', tag: 'Alerted' },
      { name: 'Bank Batch Queue', note: 'Payment Prepared for Sign-Off', tag: 'Staged' },
    ],
    resultData: {
      vendor: 'East Africa Global Logistics Ltd',
      invoice_number: 'INV-2026-8941',
      items_extracted: 48,
      accuracy_confidence: '99.8%',
      tariff_validation: 'MATCHED_KENYA_CUSTOMS_SLA',
    },
  },
};

export default function Hero({ onOpenConsultation, onExploreSolutions }: HeroProps) {
  const [activeTab, setActiveTab] = useState<PipelineScenarioKey>('lead_whatsapp');
  const [pipelineStep, setPipelineStep] = useState(1);
  const [isSimulating, setIsSimulating] = useState(false);
  const [tasksProcessed, setTasksProcessed] = useState(14298);

  const scenario = SCENARIOS[activeTab];

  // Simulated auto-stepper when running
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isSimulating) {
      interval = setInterval(() => {
        setPipelineStep((prev) => {
          if (prev >= 4) {
            setIsSimulating(false);
            setTasksProcessed((t) => t + 1);
            return 4;
          }
          return prev + 1;
        });
      }, 700);
    }
    return () => clearInterval(interval);
  }, [isSimulating]);

  const handleRunSimulation = () => {
    setPipelineStep(1);
    setIsSimulating(true);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] pt-24 pb-16 sm:pt-36 sm:pb-24 flex items-center overflow-hidden tech-grid-pattern"
    >
      {/* Background Lighting Gradients */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#E59500]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Core Value & High-Impact Copy */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-6 sm:space-y-7 text-left">
            {/* Enterprise Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-[11px] sm:text-xs font-semibold text-[#E59500] backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E59500] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E59500]" />
              </span>
              <span className="tracking-wide">Muru AI Enterprise Division • Production-Ready AI</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.12] sm:leading-[1.08]">
                Intelligent Solutions.{' '}
                <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#E59500] via-[#F6AF2D] to-[#FFC555]">
                  Built for Business.
                </span>
              </h1>
            </motion.div>

            {/* Subheading with Concrete Positioning */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-lg lg:text-xl text-zinc-300 max-w-2xl leading-relaxed"
            >
              From autonomous digital agents to end-to-end workflow automation, we engineer practical,
              enterprise-grade AI systems that integrate seamlessly with your legacy stack and deliver measurable ROI.
            </motion.p>

            {/* High-Contrast CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2"
            >
              <button
                onClick={() => onOpenConsultation()}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-display font-bold text-sm sm:text-base text-black bg-gradient-to-r from-[#E59500] via-[#F4A81E] to-[#CC7A00] shadow-[0_0_30px_rgba(229,149,0,0.35)] hover:shadow-[0_0_40px_rgba(229,149,0,0.6)] transition-all cursor-pointer flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95"
                id="hero-start-project-btn"
              >
                <span>Schedule Solution Audit</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>

              <button
                onClick={onExploreSolutions}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-display font-semibold text-sm sm:text-base text-zinc-200 bg-white/[0.04] border border-white/[0.1] hover:bg-white/[0.08] hover:text-white transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95"
                id="hero-explore-solutions-btn"
              >
                <Workflow className="w-4 h-4 text-[#E59500]" />
                <span>Explore Problem Matcher</span>
              </button>
            </motion.div>

            {/* Trust & Guarantee Micro-Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-2 sm:pt-4 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-y-2 gap-x-5 text-xs text-zinc-400 font-medium"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#E59500] flex-shrink-0" />
                <span>Private VPC & Zero Data-Retention</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#E59500] flex-shrink-0" />
                <span>Official WhatsApp Business Integration</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#E59500] flex-shrink-0" />
                <span>Sub-Second Latency Architecture</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: The Interactive Live AI Pipeline Simulator */}
          <div className="lg:col-span-6 xl:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-2xl glass-card border border-white/[0.1] p-4 sm:p-6 shadow-2xl shadow-black/80"
            >
              {/* Simulator Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <div>
                    <div className="text-xs font-mono font-semibold text-white uppercase tracking-wider flex items-center gap-1.5">
                      <span>Muru Pipeline Simulator</span>
                      <span className="text-[10px] text-zinc-500 font-normal">v3.4</span>
                    </div>
                    <div className="text-[11px] text-zinc-400">
                      Live event orchestrator & agent routing
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleRunSimulation}
                    disabled={isSimulating}
                    className="px-2.5 sm:px-3 py-1 rounded-lg text-xs font-mono font-medium bg-[#E59500]/15 text-[#E59500] border border-[#E59500]/30 hover:bg-[#E59500]/25 transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50 active:scale-95"
                    title="Simulate Event Pipeline Execution"
                  >
                    {isSimulating ? (
                      <RotateCw className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Play className="w-3.5 h-3.5 fill-current" />
                    )}
                    <span>{isSimulating ? 'Processing...' : 'Run Pipeline'}</span>
                  </button>
                </div>
              </div>

              {/* Scenario Switcher Tabs */}
              <div className="grid grid-cols-3 gap-1 sm:gap-1.5 my-3 sm:my-4 p-1 rounded-xl bg-black/40 border border-white/[0.06]">
                {(Object.keys(SCENARIOS) as PipelineScenarioKey[]).map((key) => {
                  const item = SCENARIOS[key];
                  const isSelected = activeTab === key;
                  return (
                    <button
                      key={key}
                      onClick={() => {
                        setActiveTab(key);
                        setPipelineStep(1);
                      }}
                      className={`py-1.5 sm:py-2 px-1 sm:px-2 rounded-lg text-[10px] sm:text-[11px] font-semibold transition-all truncate text-center cursor-pointer active:scale-95 ${
                        isSelected
                          ? 'bg-[#E59500] text-black shadow-md'
                          : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                      }`}
                    >
                      {item.title}
                    </button>
                  );
                })}
              </div>

              {/* Pipeline Nodes Flow */}
              <div className="space-y-3">
                {/* Node 1: Inbound Source */}
                <div
                  className={`p-3 rounded-xl border transition-all ${
                    pipelineStep >= 1
                      ? 'bg-white/[0.05] border-[#E59500]/50 shadow-sm'
                      : 'bg-white/[0.01] border-white/[0.05] opacity-60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 font-bold">
                        01. SOURCE
                      </span>
                      <span className="text-xs font-semibold text-white">{scenario.source}</span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400">INBOUND</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 italic bg-black/30 p-2 rounded-lg border border-white/[0.03]">
                    {scenario.sampleInput}
                  </p>
                </div>

                {/* Node 2: Muru Neural Core */}
                <div
                  className={`p-3 rounded-xl border transition-all ${
                    pipelineStep >= 2
                      ? 'bg-[#E59500]/10 border-[#E59500] shadow-[0_0_15px_rgba(229,149,0,0.15)]'
                      : 'bg-white/[0.01] border-white/[0.05] opacity-60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#E59500]/20 text-[#E59500] font-bold">
                        02. CORE
                      </span>
                      <span className="text-xs font-semibold text-[#E59500]">
                        {scenario.muruCore}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400">
                      {pipelineStep >= 2 ? 'VERIFIED (32ms)' : 'STANDBY'}
                    </span>
                  </div>
                  <div className="text-[11px] text-zinc-300 flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Guardrails checked: Prompt injection 0%, SLA validation 100%</span>
                  </div>
                </div>

                {/* Node 3: Specialized Agent */}
                <div
                  className={`p-3 rounded-xl border transition-all ${
                    pipelineStep >= 3
                      ? 'bg-sky-500/10 border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.15)]'
                      : 'bg-white/[0.01] border-white/[0.05] opacity-60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-400 font-bold">
                        03. AGENT
                      </span>
                      <span className="text-xs font-semibold text-white">{scenario.agent}</span>
                    </div>
                    <span className="text-[10px] font-mono text-sky-400">{scenario.agentRole}</span>
                  </div>
                  <div className="text-[11px] text-zinc-300 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span>{scenario.outputSummary}</span>
                    <span className="text-[10px] font-mono text-emerald-400 self-start sm:self-auto">100% Autonomous</span>
                  </div>
                </div>

                {/* Node 4: Enterprise Integrations */}
                <div
                  className={`p-3 rounded-xl border transition-all ${
                    pipelineStep >= 4
                      ? 'bg-emerald-500/10 border-emerald-500/40 shadow-sm'
                      : 'bg-white/[0.01] border-white/[0.05] opacity-60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                      04. DESTINATIONS
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400">
                      3/3 Systems Synchronized
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5">
                    {scenario.destinations.map((dest, i) => (
                      <div
                        key={i}
                        className="p-2 rounded-lg bg-black/40 border border-white/[0.04] text-left"
                      >
                        <div className="text-[11px] font-bold text-white flex items-center justify-between">
                          <span>{dest.name}</span>
                          <span className="text-[9px] font-mono text-emerald-400">{dest.tag}</span>
                        </div>
                        <div className="text-[10px] text-zinc-400 truncate mt-0.5">{dest.note}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Simulator Footer Status */}
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#E59500]" />
                  <span>Tasks Today: {tasksProcessed.toLocaleString()}</span>
                </div>
                <div className="text-emerald-400 font-semibold">Zero Latency Dropouts</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Enterprise Stacks Bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-6">
            Engineered to connect natively with mission-critical systems & cloud stacks
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-12 gap-y-3 text-zinc-300 font-semibold text-xs sm:text-sm">
            <span className="flex items-center gap-2 hover:text-white transition-colors">
              <MessageSquare className="w-4 h-4 text-emerald-400" /> WhatsApp Cloud API
            </span>
            <span className="flex items-center gap-2 hover:text-white transition-colors">
              <Database className="w-4 h-4 text-[#E59500]" /> PostgreSQL & Supabase
            </span>
            <span className="flex items-center gap-2 hover:text-white transition-colors">
              <Building className="w-4 h-4 text-sky-400" /> SAP ERP & NetSuite
            </span>
            <span className="flex items-center gap-2 hover:text-white transition-colors">
              <Workflow className="w-4 h-4 text-purple-400" /> HubSpot & Salesforce
            </span>
            <span className="flex items-center gap-2 hover:text-white transition-colors">
              <Server className="w-4 h-4 text-amber-400" /> Private Docker & Cloud Run
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
