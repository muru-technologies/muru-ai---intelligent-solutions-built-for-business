import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Terminal,
  Activity,
  Cpu,
  Layers,
  Database,
  ArrowLeft,
  Play,
  RotateCw,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Zap,
  Server,
  Workflow,
  Search,
  BookOpen,
  MessageSquare,
  Globe,
  Sliders,
} from 'lucide-react';
import {
  COCKPIT_NODES,
  KNOWLEDGE_DOCS_SAMPLE,
  RECENT_ACTIVITY_EVENTS,
  AUTONOMOUS_AGENTS_DATA,
} from '../data/siteData';
import { WorkflowActivityEvent } from '../types';

interface EnterpriseCockpitProps {
  onReturnToWebsite: () => void;
  onBookConsultation: () => void;
}

type CockpitTab = 'overview' | 'agents' | 'workflows' | 'knowledge' | 'integrations';

export default function EnterpriseCockpit({
  onReturnToWebsite,
  onBookConsultation,
}: EnterpriseCockpitProps) {
  const [activeTab, setActiveTab] = useState<CockpitTab>('overview');
  const [tasksCount, setTasksCount] = useState(1842);
  const [events, setEvents] = useState<WorkflowActivityEvent[]>(RECENT_ACTIVITY_EVENTS);
  const [isSimulatingWorkflow, setIsSimulatingWorkflow] = useState(false);
  const [knowledgeSearch, setKnowledgeSearch] = useState('');
  const [vectorQuery, setVectorQuery] = useState('');
  const [vectorResult, setVectorResult] = useState<string | null>(null);

  // Live counter tick
  useEffect(() => {
    const timer = setInterval(() => {
      setTasksCount((prev) => prev + 1);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleSimulateNewWorkflow = () => {
    setIsSimulatingWorkflow(true);
    setTimeout(() => {
      const newEvent: WorkflowActivityEvent = {
        id: `evt-${Date.now()}`,
        title: `Workflow #${Math.floor(Math.random() * 800 + 200)} Completed: Automated Document Ingestion`,
        agent: 'Operations Agent (Fleet Node 03)',
        timestamp: 'Just now',
        status: 'SUCCESS',
        details: 'Multimodal extraction verified against compliance rules. 0 schema errors.',
      };
      setEvents((prev) => [newEvent, ...prev.slice(0, 7)]);
      setTasksCount((t) => t + 1);
      setIsSimulatingWorkflow(false);
    }, 1200);
  };

  const handleVectorQuery = () => {
    if (!vectorQuery) return;
    setVectorResult('Searching semantic embedding space (1536-dim)...');
    setTimeout(() => {
      setVectorResult(
        `[Matched Document: Master Services Agreement §4.2] Direct Result: "Tier-1 Enterprise Accounts receive a 15-minute guaranteed initial response for critical incidents (Severity 1), 99.9% uptime SLA, and direct WhatsApp routing to dedicated senior engineering duty officers." (Cosine Similarity: 0.942)`
      );
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#07090C] text-[#ECEFF3] pt-20 pb-16">
      {/* Top Cockpit Header Bar */}
      <div className="border-b border-white/[0.08] bg-[#090B0F]/90 backdrop-blur-md sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={onReturnToWebsite}
                className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white border border-white/[0.08] transition-colors cursor-pointer flex items-center gap-2 text-xs font-mono"
                title="Return to Public Website"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Exit Cockpit</span>
              </button>

              <div>
                <div className="flex items-center gap-2">
                  <div className="font-display font-extrabold text-sm sm:text-base text-white tracking-wider">
                    MURU AI <span className="text-[#E59500]">// COMMAND CENTER</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#E59500]/15 text-[#E59500] border border-[#E59500]/30">
                    FLEET v3.4
                  </span>
                </div>
                <div className="text-[10px] font-mono text-zinc-400">
                  Real-Time Enterprise Node Telemetry & Activity Bus
                </div>
              </div>
            </div>

            {/* Top Right Quick Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>24 Distributed Nodes Online</span>
              </div>

              <button
                onClick={onBookConsultation}
                className="px-3.5 py-1.5 rounded-xl font-display font-semibold text-xs text-black bg-[#E59500] hover:bg-[#CC7A00] transition-colors cursor-pointer"
              >
                Deploy Fleet
              </button>
            </div>
          </div>
        </div>

        {/* Cockpit Nav Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-1 overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview & Telemetry', icon: Activity },
            { id: 'agents', label: 'Fleet Agents (24)', icon: Cpu },
            { id: 'workflows', label: 'Live Automations (87)', icon: Workflow },
            { id: 'knowledge', label: 'Vector Knowledge Store', icon: Database },
            { id: 'integrations', label: 'Integrations & APIs', icon: Server },
          ].map((tab) => {
            const Icon = tab.icon;
            const isCurrent = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as CockpitTab)}
                className={`flex items-center gap-2 py-2.5 px-4 text-xs font-mono font-semibold transition-all border-b-2 cursor-pointer whitespace-nowrap ${
                  isCurrent
                    ? 'border-[#E59500] text-[#E59500] bg-white/[0.02]'
                    : 'border-transparent text-zinc-400 hover:text-white hover:bg-white/[0.01]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Metric Cards Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 text-left">
          <div className="p-4 rounded-xl glass-card border border-white/[0.08] bg-black/40">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-1">
              <span>ACTIVE AGENTS</span>
              <span className="text-emerald-400 text-[10px] bg-emerald-500/10 px-1.5 py-0.5 rounded">
                100% HEALTH
              </span>
            </div>
            <div className="text-2xl sm:text-3xl font-display font-black text-white">24 Nodes</div>
            <div className="text-[10px] text-zinc-500 mt-1 font-mono">Distributed cloud cluster</div>
          </div>

          <div className="p-4 rounded-xl glass-card border border-white/[0.08] bg-black/40">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-1">
              <span>TASKS TODAY</span>
              <span className="text-[#E59500] text-[10px] bg-[#E59500]/10 px-1.5 py-0.5 rounded">
                +310 vs YEST
              </span>
            </div>
            <div className="text-2xl sm:text-3xl font-display font-black text-[#E59500]">
              {tasksCount.toLocaleString()}
            </div>
            <div className="text-[10px] text-zinc-500 mt-1 font-mono">Average latency 42ms</div>
          </div>

          <div className="p-4 rounded-xl glass-card border border-white/[0.08] bg-black/40">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-1">
              <span>ACTIVE AUTOMATIONS</span>
              <span className="text-sky-400 text-[10px] bg-sky-500/10 px-1.5 py-0.5 rounded">
                87 SCHEDULED
              </span>
            </div>
            <div className="text-2xl sm:text-3xl font-display font-black text-white">87 Pipelines</div>
            <div className="text-[10px] text-zinc-500 mt-1 font-mono">Zero failed runs (24h)</div>
          </div>

          <div className="p-4 rounded-xl glass-card border border-white/[0.08] bg-black/40">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-1">
              <span>SYSTEM UPTIME</span>
              <span className="text-emerald-400 text-[10px] bg-emerald-500/10 px-1.5 py-0.5 rounded">
                SLA MET
              </span>
            </div>
            <div className="text-2xl sm:text-3xl font-display font-black text-emerald-400">
              99.98%
            </div>
            <div className="text-[10px] text-zinc-500 mt-1 font-mono">Zero critical outages</div>
          </div>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
            {/* Left: Live Node Health Status */}
            <div className="lg:col-span-6 rounded-2xl glass-card border border-white/[0.08] p-6 bg-black/50">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <Server className="w-4 h-4 text-[#E59500]" />
                  <span className="text-xs font-mono uppercase font-bold text-white">
                    Distributed Infrastructure Nodes
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400">7/7 Synchronized</span>
              </div>

              <div className="space-y-2.5">
                {COCKPIT_NODES.map((n) => (
                  <div
                    key={n.name}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between text-xs"
                  >
                    <div>
                      <div className="font-semibold text-white truncate max-w-[240px]">
                        {n.name}
                      </div>
                      <div className="text-[10px] font-mono text-zinc-500">Uptime: {n.uptime}</div>
                    </div>

                    <div className="text-right font-mono">
                      <span className="text-emerald-400 font-bold">{n.status}</span>
                      <div className="text-zinc-400 text-[11px]">{n.latency}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Live Activity Stream */}
            <div className="lg:col-span-6 rounded-2xl glass-card border border-white/[0.08] p-6 bg-black/50 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-sky-400" />
                    <span className="text-xs font-mono uppercase font-bold text-white">
                      Live Fleet Execution Feed
                    </span>
                  </div>

                  <button
                    onClick={handleSimulateNewWorkflow}
                    disabled={isSimulatingWorkflow}
                    className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-[#E59500]/15 text-[#E59500] border border-[#E59500]/30 hover:bg-[#E59500]/25 transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                  >
                    {isSimulatingWorkflow ? (
                      <RotateCw className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Play className="w-3.5 h-3.5 fill-current" />
                    )}
                    <span>{isSimulatingWorkflow ? 'Executing...' : 'Trigger Event'}</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {events.map((evt) => (
                    <div
                      key={evt.id}
                      className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs font-mono"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-white text-xs">{evt.title}</span>
                        <span className="text-[10px] text-zinc-500">{evt.timestamp}</span>
                      </div>
                      <div className="text-sky-400 text-[11px] mb-1">{evt.agent}</div>
                      <div className="text-zinc-400 text-[11px] leading-relaxed">{evt.details}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.06] text-right">
                <span className="text-[10px] font-mono text-zinc-500">
                  Encrypted Event Bus • Zero Ingestion Latency
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Agents */}
        {activeTab === 'agents' && (
          <div className="space-y-6 text-left">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-zinc-300 flex items-center justify-between">
              <span>Showing 5 core archetypes across 24 running containerized fleet pods.</span>
              <span className="font-mono text-[#E59500]">All Pods Guarded by RAG & RBAC</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {AUTONOMOUS_AGENTS_DATA.map((agent) => (
                <div
                  key={agent.id}
                  className="p-6 rounded-2xl glass-card border border-white/[0.08] bg-black/50 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-[#E59500] uppercase">
                        {agent.role}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400">
                        {agent.status}
                      </span>
                    </div>

                    <h4 className="font-display text-xl font-bold text-white">{agent.name}</h4>
                    <p className="text-xs text-zinc-400 mt-1 mb-4">{agent.tagline}</p>

                    <div className="p-3 rounded-lg bg-black/40 border border-white/[0.04] text-[11px] font-mono text-zinc-300 space-y-1 mb-4">
                      <div>Latency: {agent.avgLatency}</div>
                      <div>Accuracy: {agent.accuracyRate}</div>
                      <div>Connected: {agent.connectedSystems.join(', ')}</div>
                    </div>
                  </div>

                  <button
                    onClick={onBookConsultation}
                    className="w-full py-2 px-3 rounded-xl text-xs font-semibold text-black bg-[#E59500] hover:bg-[#CC7A00] transition-colors"
                  >
                    Configure {agent.name} Pod
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Workflows */}
        {activeTab === 'workflows' && (
          <div className="space-y-6 text-left">
            <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div>
                <h4 className="text-sm font-bold text-white">Active Enterprise Automation Workflows</h4>
                <p className="text-xs text-zinc-400">Deterministic multi-step state machines with error recovery</p>
              </div>
              <button
                onClick={handleSimulateNewWorkflow}
                className="px-4 py-2 rounded-xl text-xs font-mono bg-[#E59500] text-black font-bold"
              >
                + Trigger Test Pipeline
              </button>
            </div>

            <div className="space-y-3">
              {[
                {
                  id: 'wf-01',
                  name: 'Invoice Ledger Posting & Tariff Reconciliation',
                  trigger: 'PDF attached to accounts@ inbox',
                  steps: 'Multimodal OCR → Tariff Lookup → ERP Ledger Signoff',
                  cadence: 'Event-driven (sub-second)',
                  status: 'HEALTHY',
                },
                {
                  id: 'wf-02',
                  name: 'Omnichannel WhatsApp Lead Scoring & Calendar Booking',
                  trigger: 'Incoming prospect message on WhatsApp Business',
                  steps: 'Intent Classify → BANT Validation → Google Calendar Reserve → HubSpot Sync',
                  cadence: 'Continuous 24/7',
                  status: 'HEALTHY',
                },
                {
                  id: 'wf-03',
                  name: 'ISP Customer Router Diagnostic & Line Recovery',
                  trigger: 'Customer submits order # or router fault',
                  steps: 'Account API Lookup → Line Telemetry Check → Diagnostic Reset Signal',
                  cadence: 'Event-driven (2.1s avg)',
                  status: 'HEALTHY',
                },
                {
                  id: 'wf-04',
                  name: 'Executive Morning Revenue & Risk Intelligence Memo',
                  trigger: 'Cron schedule (06:00 AM EAT daily)',
                  steps: 'DB Aggregate → Anomaly Scanner → AI Reasoning Digest → WhatsApp Executive Send',
                  cadence: 'Daily at 06:00 AM',
                  status: 'HEALTHY',
                },
              ].map((wf) => (
                <div
                  key={wf.id}
                  className="p-4 rounded-xl glass-card border border-white/[0.07] bg-black/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono"
                >
                  <div className="space-y-1">
                    <div className="font-bold text-white text-sm flex items-center gap-2">
                      <span>{wf.name}</span>
                      <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                        {wf.status}
                      </span>
                    </div>
                    <div className="text-zinc-400">Trigger: {wf.trigger}</div>
                    <div className="text-sky-400">Pipeline: {wf.steps}</div>
                  </div>

                  <div className="text-right flex-shrink-0">
                    <div className="text-zinc-500 text-[11px]">{wf.cadence}</div>
                    <span className="text-[10px] text-[#E59500] font-bold">100% SUCCESS RATE</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Knowledge Base Vector Store */}
        {activeTab === 'knowledge' && (
          <div className="space-y-6 text-left">
            {/* Interactive Vector Search Simulator */}
            <div className="p-6 rounded-2xl glass-card border border-white/[0.08] bg-black/60 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#E59500] font-bold">
                <Search className="w-4 h-4" />
                <span>Interactive Semantic Vector Retrieval Engine</span>
              </div>

              <p className="text-xs text-zinc-400">
                Test how Muru AI’s vector store performs sub-second semantic retrieval with source document
                citations and zero hallucinations:
              </p>

              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  value={vectorQuery}
                  onChange={(e) => setVectorQuery(e.target.value)}
                  placeholder="e.g. What is our SLA for Severity 1 enterprise incidents?"
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-xs font-mono text-white focus:outline-none focus:border-[#E59500]"
                />
                <button
                  onClick={handleVectorQuery}
                  className="px-5 py-2.5 rounded-xl bg-[#E59500] hover:bg-[#CC7A00] text-black font-display font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Execute Vector Query</span>
                </button>
              </div>

              {vectorResult && (
                <div className="p-4 rounded-xl bg-[#E59500]/10 border border-[#E59500]/30 text-xs font-mono text-zinc-200 leading-relaxed">
                  {vectorResult}
                </div>
              )}
            </div>

            {/* Indexed Document Stores */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold px-1">
                Connected Corporate Document Stores (5 Live Stores Indexed):
              </div>

              {KNOWLEDGE_DOCS_SAMPLE.map((doc) => (
                <div
                  key={doc.id}
                  className="p-4 rounded-xl glass-card border border-white/[0.07] bg-black/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono"
                >
                  <div>
                    <div className="font-bold text-white text-sm flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-[#E59500]" />
                      <span>{doc.title}</span>
                    </div>
                    <div className="text-zinc-400 mt-1">
                      Source: {doc.source} • Format: {doc.type} ({doc.size})
                    </div>
                  </div>

                  <div className="text-right font-mono">
                    <span className="text-emerald-400 font-bold">
                      {doc.vectors.toLocaleString()} Vectors
                    </span>
                    <div className="text-zinc-500 text-[10px]">Synced {doc.lastSynced}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 5: Integrations & API */}
        {activeTab === 'integrations' && (
          <div className="space-y-6 text-left">
            <div className="p-6 rounded-2xl glass-card border border-white/[0.08] bg-black/60 space-y-4">
              <div className="text-xs font-mono font-bold uppercase text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Active Enterprise API Connectors</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-mono">
                {[
                  { name: 'WhatsApp Cloud API Gateway', latency: '45ms', status: 'ACTIVE', auth: 'Meta Bearer' },
                  { name: 'PostgreSQL / Supabase Replica', latency: '14ms', status: 'CONNECTED', auth: 'VPC Peering' },
                  { name: 'SAP ERP Integration REST', latency: '82ms', status: 'ACTIVE', auth: 'OAuth2 Mutual TLS' },
                  { name: 'HubSpot Enterprise CRM', latency: '65ms', status: 'ACTIVE', auth: 'Token Refresh' },
                  { name: 'Zendesk Support Webhook', latency: '38ms', status: 'LISTENING', auth: 'HMAC-SHA256' },
                  { name: 'Stripe & M-Pesa Gateways', latency: '54ms', status: 'VERIFIED', auth: 'Webhook Secret' },
                ].map((conn, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1.5"
                  >
                    <div className="font-bold text-white">{conn.name}</div>
                    <div className="flex justify-between text-[11px] text-zinc-400">
                      <span>Status: <strong className="text-emerald-400">{conn.status}</strong></span>
                      <span>{conn.latency}</span>
                    </div>
                    <div className="text-[10px] text-zinc-500">Security: {conn.auth}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
