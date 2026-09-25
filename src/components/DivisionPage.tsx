import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Bot,
  Compass,
  MessageSquare,
  Cpu,
  Layers,
  Database,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Zap,
  Building2,
  ExternalLink,
  Server,
  Code2,
  FileText,
  Clock,
  Send,
  Play,
  RotateCcw,
  Sliders,
  DollarSign,
  Users,
  Smartphone,
  Check,
  ChevronRight,
  Lock,
} from 'lucide-react';
import { COMPANY_DIVISIONS, COMPANY_DETAILS } from '../data/siteData';

interface DivisionPageProps {
  divisionId: string;
  onBackToHome: () => void;
  onNavigateToDivision: (id: string) => void;
  onOpenConsultation: (interestTopic?: string) => void;
}

export default function DivisionPage({
  divisionId,
  onBackToHome,
  onNavigateToDivision,
  onOpenConsultation,
}: DivisionPageProps) {
  // Find current division or fallback to 'ai'
  const division = COMPANY_DIVISIONS.find((d) => d.id === divisionId) || COMPANY_DIVISIONS[0];

  // Tab states for interactive widgets
  const [activeTab, setActiveTab] = useState<'overview' | 'capabilities' | 'interactive' | 'architecture' | 'specs'>('overview');

  // Interactive AI Agent Simulator state (for AI division)
  const [aiSelectedAgent, setAiSelectedAgent] = useState<'sales' | 'rag' | 'support'>('sales');
  const [aiSimStep, setAiSimStep] = useState<number>(3);
  const [isAiRunning, setIsAiRunning] = useState<boolean>(false);

  // Interactive USSD Simulator state (for SMS division)
  const [ussdInput, setUssdInput] = useState<string>('*384*500#');
  const [ussdSessionState, setUssdSessionState] = useState<'idle' | 'menu' | 'balance' | 'support'>('menu');
  const [ussdResponseMsg, setUssdResponseMsg] = useState<string>('CON Welcome to Muru Tech Telecom Gateway:\n1. Check Account Balance\n2. Buy SMS Package\n3. Connect with Support\n0. Exit');

  // Interactive Audit Scope Estimator state (for CONSULT division)
  const [consultInfraType, setConsultInfraType] = useState<'legacy' | 'hybrid' | 'cloud'>('hybrid');
  const [consultTeamSize, setConsultTeamSize] = useState<'small' | 'mid' | 'enterprise'>('mid');
  const [consultPriority, setConsultPriority] = useState<string>('Security & SOC 2 Compliance');

  // Interactive RPA Visualizer state (for ROBOTICS division)
  const [rpaStep, setRpaStep] = useState<number>(2);
  const [isRpaExecuting, setIsRpaExecuting] = useState<boolean>(false);

  // Interactive Licensing Configurator state (for APP & LICENCES division)
  const [seatsCount, setSeatsCount] = useState<number>(50);
  const [selectedLicense, setSelectedLicense] = useState<'m365' | 'google' | 'azure'>('m365');

  // Interactive ERP Module Explorer state (for ERP division)
  const [selectedErpModule, setSelectedErpModule] = useState<'accounting' | 'inventory' | 'mrp' | 'hrms'>('accounting');

  // Other 5 divisions for cross-navigation
  const otherDivisions = COMPANY_DIVISIONS.filter((d) => d.id !== division.id);

  const getDivisionIcon = (iconName: string, className = 'w-5 h-5') => {
    switch (iconName) {
      case 'Bot':
        return <Bot className={className} />;
      case 'Compass':
        return <Compass className={className} />;
      case 'MessageSquare':
        return <MessageSquare className={className} />;
      case 'Cpu':
        return <Cpu className={className} />;
      case 'Layers':
        return <Layers className={className} />;
      case 'Database':
        return <Database className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  const runAiSimulation = () => {
    setIsAiRunning(true);
    setAiSimStep(1);
    setTimeout(() => setAiSimStep(2), 700);
    setTimeout(() => {
      setAiSimStep(3);
      setIsAiRunning(false);
    }, 1500);
  };

  const handleUssdDial = (choice?: string) => {
    if (choice === '1') {
      setUssdSessionState('balance');
      setUssdResponseMsg('END Muru Telecom Gateway Status:\nSMS Units Available: 154,200\nOTP Delivery SLA: 99.98%\nAccount: Active');
    } else if (choice === '2') {
      setUssdResponseMsg('END Tier 1 Enterprise Bulk SMS Package:\nRate: 0.25 KES / SMS\nInstant Carrier Routing\nDial 0716748685 to recharge.');
    } else if (choice === '3') {
      setUssdResponseMsg('END Connecting you to Muru Tech Nairobi Desk.\nA lead engineer will reach out on WhatsApp within 10 minutes.');
    } else {
      setUssdSessionState('menu');
      setUssdResponseMsg('CON Welcome to Muru Tech Telecom Gateway:\n1. Check Account Balance\n2. Buy SMS Package\n3. Connect with Support\n0. Exit');
    }
  };

  const runRpaSimulation = () => {
    setIsRpaExecuting(true);
    setRpaStep(1);
    setTimeout(() => setRpaStep(2), 800);
    setTimeout(() => setRpaStep(3), 1600);
    setTimeout(() => {
      setRpaStep(4);
      setIsRpaExecuting(false);
    }, 2400);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 min-h-screen relative overflow-hidden bg-[#07090D]">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-[#E59500]/10 via-amber-500/5 to-transparent blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Navigation Breadcrumb & Back Button */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <button
              onClick={onBackToHome}
              className="hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Overview</span>
            </button>
            <span className="text-zinc-600">/</span>
            <span>Divisions</span>
            <span className="text-zinc-600">/</span>
            <span className="text-[#E59500] font-bold">{division.code}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Practice Active • Nairobi HQ & Global SLA</span>
            </span>
          </div>
        </div>

        {/* Division Header Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs font-mono">
              <div className="p-1 rounded bg-[#E59500]/20 text-[#E59500]">
                {getDivisionIcon(division.iconName, 'w-3.5 h-3.5')}
              </div>
              <span className="text-zinc-400">MURU TECH GROUP DIVISION:</span>
              <span className="font-bold text-[#E59500]">{division.code}</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {division.name}
            </h1>

            <p className="text-base sm:text-lg font-medium text-[#E59500]">
              {division.tagline}
            </p>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl">
              {division.description}
            </p>

            {/* Metrics Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-[11px] font-mono text-zinc-400">{division.metrics.label}</div>
                <div className="text-lg sm:text-xl font-display font-bold text-white mt-0.5">
                  {division.metrics.value}
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-[11px] font-mono text-zinc-400">Enterprise SLA</div>
                <div className="text-lg sm:text-xl font-display font-bold text-emerald-400 mt-0.5">
                  99.98%
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-[11px] font-mono text-zinc-400">Compliance & VPC</div>
                <div className="text-lg sm:text-xl font-display font-bold text-[#E59500] mt-0.5">
                  Bank-Grade
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-[11px] font-mono text-zinc-400">Support Desk</div>
                <div className="text-lg sm:text-xl font-display font-bold text-white mt-0.5">
                  24/7/365
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() =>
                  onOpenConsultation(
                    `Muru Tech Division: ${division.code} (${division.name})`
                  )
                }
                className="py-3 px-6 rounded-xl font-display font-semibold text-xs sm:text-sm text-black bg-[#E59500] hover:bg-[#CC7A00] transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-[#E59500]/25 active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-black fill-black/20" />
                <span>Schedule {division.code} Consultation</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>

              <a
                href={`https://wa.me/254716748685?text=Hello%20Muru%20Tech,%20I%20am%20reviewing%20the%20${encodeURIComponent(
                  division.code
                )}%20Division%20page%20and%20would%20like%20to%20discuss%20our%20enterprise%20requirements.`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 rounded-xl text-xs sm:text-sm font-mono text-zinc-200 hover:text-white bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.1] flex items-center gap-2 transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Division Lead</span>
              </a>

              <button
                onClick={onBackToHome}
                className="py-3 px-4 rounded-xl text-xs font-mono text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                Back to All Divisions
              </button>
            </div>
          </div>

          {/* Right Col: Quick Division Spec Card */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl bg-[#0B0E14] border border-white/[0.1] p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#E59500]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-4">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#E59500]" />
                  <span className="text-xs font-mono uppercase text-zinc-300 font-semibold">
                    Division Profile
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#E59500] px-2 py-0.5 rounded bg-[#E59500]/10 border border-[#E59500]/30 font-bold">
                  {division.code}
                </span>
              </div>

              <div className="space-y-3.5 text-xs">
                <div>
                  <span className="text-zinc-500 font-mono text-[11px] block">PRACTICE LEAD DESK:</span>
                  <span className="text-zinc-200 font-medium">Nairobi Engineering Hub</span>
                </div>
                <div>
                  <span className="text-zinc-500 font-mono text-[11px] block">DIRECT EMAIL:</span>
                  <a
                    href="mailto:support@murutechinc.com"
                    className="text-[#E59500] hover:underline font-mono"
                  >
                    support@murutechinc.com
                  </a>
                </div>
                <div>
                  <span className="text-zinc-500 font-mono text-[11px] block">DIRECT DISPATCH:</span>
                  <span className="text-zinc-200 font-mono">+254 716 748 685</span>
                </div>
                <div>
                  <span className="text-zinc-500 font-mono text-[11px] block mb-1">
                    PRIMARY CORE TECHNOLOGIES:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {division.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.08] font-mono text-[11px] text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>ISO 27001 / VPC</span>
                </span>
                <span>Muru Tech Inc</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation for this Division */}
        <div className="flex items-center gap-2 border-b border-white/[0.08] mb-8 overflow-x-auto pb-1 no-scrollbar">
          {[
            { id: 'overview', label: 'Offerings & Capabilities' },
            { id: 'interactive', label: `Interactive ${division.code} Simulator` },
            { id: 'architecture', label: 'Architecture & Security' },
            { id: 'specs', label: 'Specifications & SLAs' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-white/[0.08] text-[#E59500] border-b-2 border-[#E59500]'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.03]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Offerings & Capabilities */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-10"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
                  Core Enterprise Offerings & Deliverables
                </h2>
                <span className="text-xs font-mono text-[#E59500]">
                  6 Accountable Capabilities
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {division.offerings.map((offering, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#0B0E14] border border-white/[0.08] hover:border-[#E59500]/40 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white/[0.05] text-[#E59500]">
                          0{idx + 1}
                        </span>
                        <CheckCircle2 className="w-4 h-4 text-[#E59500] group-hover:scale-110 transition-transform" />
                      </div>
                      <h3 className="text-sm font-semibold text-white mb-2 leading-snug group-hover:text-[#E59500] transition-colors">
                        {offering}
                      </h3>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        Engineered under enterprise SLAs with zero downtime, comprehensive API docs, and dedicated post-launch support.
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                      <span>Production-Ready</span>
                      <span className="text-emerald-400">Active Spec</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Division Implementation Lifecycle */}
            <div className="rounded-2xl bg-[#090B0F] border border-white/[0.08] p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#E59500]" />
                <span>How We Deliver in the {division.code} Practice</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    step: 'Stage 01',
                    title: 'Discovery & Feasibility Audit',
                    desc: 'We review existing infrastructure, API endpoints, data pipelines, and compliance requirements in 48 hours.',
                  },
                  {
                    step: 'Stage 02',
                    title: 'Architecture Blueprint',
                    desc: 'We draft technical schemas, VPC isolation boundaries, SLA commitments, and milestone delivery plans.',
                  },
                  {
                    step: 'Stage 03',
                    title: 'Staged Implementation',
                    desc: 'Rigorous engineering with automated testing, continuous integration, and staged client environment demos.',
                  },
                  {
                    step: 'Stage 04',
                    title: 'Production Cutover & 24/7 SLA',
                    desc: 'Zero-downtime deployment, staff onboarding, real-time telemetry monitoring, and ongoing maintenance.',
                  },
                ].map((s, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-left"
                  >
                    <div className="text-xs font-mono text-[#E59500] font-bold mb-1">
                      {s.step}
                    </div>
                    <div className="text-sm font-semibold text-white mb-1.5">{s.title}</div>
                    <div className="text-xs text-zinc-400 leading-relaxed">{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 2: Interactive Division Simulator */}
        {activeTab === 'interactive' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-8"
          >
            {/* Division 1: AI Interactive Simulator */}
            {division.id === 'ai' && (
              <div className="rounded-2xl bg-[#090B0F] border border-white/[0.1] p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/[0.08]">
                  <div>
                    <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                      <Bot className="w-5 h-5 text-[#E59500]" />
                      <span>Live AI Autonomous Agent Execution Trace</span>
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      Observe how our autonomous agents parse requests, retrieve enterprise vectors, and execute business actions.
                    </p>
                  </div>

                  <button
                    onClick={runAiSimulation}
                    disabled={isAiRunning}
                    className="px-4 py-2 rounded-lg bg-[#E59500] text-black font-semibold text-xs flex items-center gap-2 cursor-pointer hover:bg-[#CC7A00] transition-colors disabled:opacity-50"
                  >
                    <Play className="w-3.5 h-3.5 fill-black" />
                    <span>{isAiRunning ? 'Agent Reasoning...' : 'Run Live Agent Trace'}</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Agent Selector */}
                  <div className="lg:col-span-4 space-y-2">
                    <div className="text-xs font-mono uppercase text-zinc-400 mb-2">
                      Select Agent Scenario:
                    </div>
                    {[
                      {
                        id: 'sales',
                        name: 'Inbound WhatsApp Lead Qualifier',
                        desc: 'Engages prospective B2B client, validates budget & books calendar.',
                      },
                      {
                        id: 'rag',
                        name: 'DocuSense Policy & Contract RAG',
                        desc: 'Grounds responses on 4,000+ page internal compliance PDFs.',
                      },
                      {
                        id: 'support',
                        name: 'Automated Account Triage Agent',
                        desc: 'Resolves billing queries and issues one-time verification tokens.',
                      },
                    ].map((agent) => (
                      <button
                        key={agent.id}
                        onClick={() => {
                          setAiSelectedAgent(agent.id as any);
                          runAiSimulation();
                        }}
                        className={`w-full p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                          aiSelectedAgent === agent.id
                            ? 'bg-white/[0.08] border-[#E59500] text-white'
                            : 'bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:text-white'
                        }`}
                      >
                        <div className="text-xs font-bold text-white mb-0.5">{agent.name}</div>
                        <div className="text-[11px] text-zinc-400">{agent.desc}</div>
                      </button>
                    ))}
                  </div>

                  {/* Execution Trace Terminal */}
                  <div className="lg:col-span-8 rounded-xl bg-black/70 border border-white/[0.08] p-4 font-mono text-xs text-zinc-300 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-[11px] text-zinc-500">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span>MURU AI COGNITIVE TRACE LOG</span>
                      </span>
                      <span>LATENCY: 840ms • TEMP: 0.1</span>
                    </div>

                    <div className="space-y-2.5">
                      <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.05]">
                        <span className="text-zinc-500 text-[10px] block">TRIGGER INBOUND:</span>
                        <span className="text-emerald-300">
                          {aiSelectedAgent === 'sales' && '"Hi, we need to deploy bulk SMS and AI WhatsApp bots for our 12 branches in Kenya. What is the setup time?"'}
                          {aiSelectedAgent === 'rag' && '"What is Section 14.2 indemnity clause in the Supplier Standard SLA?"'}
                          {aiSelectedAgent === 'support' && '"My ERP webhook failed with HTTP 504. Can you re-trigger invoice #8492?"'}
                        </span>
                      </div>

                      {aiSimStep >= 1 && (
                        <div className="p-2.5 rounded bg-sky-500/10 border border-sky-500/20 text-sky-300">
                          <span className="text-sky-500 text-[10px] block font-bold">1. VECTOR RETRIEVAL & CONTEXT INGESTION:</span>
                          <span>Matched 3 semantic chunks in pgvector (similarity: 0.942). Injected SLA policy & branch matrix.</span>
                        </div>
                      )}

                      {aiSimStep >= 2 && (
                        <div className="p-2.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-300">
                          <span className="text-amber-500 text-[10px] block font-bold">2. TOOL CALL & VERIFICATION:</span>
                          <span>Tool invoked: verify_capacity(branches=12, carrier="MNO_DIRECT"). Output: {"{status: 'READY', eta: '< 5 days'}"}</span>
                        </div>
                      )}

                      {aiSimStep >= 3 && (
                        <div className="p-2.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                          <span className="text-emerald-500 text-[10px] block font-bold">3. DETERMINISTIC REASONED RESPONSE:</span>
                          <span>
                            "Muru Tech can provision your 12-branch WhatsApp Bot and Bulk SMS gateway within 5 business days under direct carrier SLAs. We provide dedicated shortcodes and private VPC routing. Would you like to schedule an engineering walkthrough?"
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Division 2: CONSULT Interactive Estimator */}
            {division.id === 'consult' && (
              <div className="rounded-2xl bg-[#090B0F] border border-white/[0.1] p-6 sm:p-8">
                <h3 className="text-xl font-display font-bold text-white mb-2 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[#E59500]" />
                  <span>Enterprise Strategic Audit Scope Generator</span>
                </h3>
                <p className="text-xs text-zinc-400 mb-6">
                  Configure your enterprise environment to preview recommended consulting milestones and audit deliverables.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-2">Current Architecture:</label>
                    <select
                      value={consultInfraType}
                      onChange={(e) => setConsultInfraType(e.target.value as any)}
                      className="w-full bg-black border border-white/[0.1] rounded-lg p-2.5 text-xs text-white"
                    >
                      <option value="legacy">On-Premise Legacy Servers</option>
                      <option value="hybrid">Hybrid Cloud & Monolith</option>
                      <option value="cloud">Cloud-Native Microservices</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-2">Team & User Scale:</label>
                    <select
                      value={consultTeamSize}
                      onChange={(e) => setConsultTeamSize(e.target.value as any)}
                      className="w-full bg-black border border-white/[0.1] rounded-lg p-2.5 text-xs text-white"
                    >
                      <option value="small">Growing Team (10 - 50 staff)</option>
                      <option value="mid">Mid-Market Enterprise (50 - 500 staff)</option>
                      <option value="enterprise">Large Scale (500+ staff)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-2">Strategic Focus:</label>
                    <select
                      value={consultPriority}
                      onChange={(e) => setConsultPriority(e.target.value)}
                      className="w-full bg-black border border-white/[0.1] rounded-lg p-2.5 text-xs text-white"
                    >
                      <option value="Security & SOC 2 Compliance">Security, ISO 27001 & DPA Compliance</option>
                      <option value="Cloud Migration & Modernization">Cloud Migration & Cost Optimization</option>
                      <option value="AI Readiness & Automation">AI Roadmap & Process Automation</option>
                    </select>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-black/60 border border-[#E59500]/30 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#E59500] font-bold">
                      GENERATED AUDIT ROADMAP FOR {consultPriority.toUpperCase()}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400">Briefing SLA: 48 Hours</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                    <div className="p-3 rounded-lg bg-white/[0.03]">
                      <div className="font-bold text-white mb-1">Phase 1: Deep Discovery</div>
                      <div className="text-zinc-400">Inventory all {consultInfraType} assets, security policies, and single points of failure.</div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/[0.03]">
                      <div className="font-bold text-white mb-1">Phase 2: Target Blueprint</div>
                      <div className="text-zinc-400">Architect zero-trust architecture, multi-cloud redundancy, and compliance checklists.</div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/[0.03]">
                      <div className="font-bold text-white mb-1">Phase 3: Executive Board Deck</div>
                      <div className="text-zinc-400">Complete financial model, risk score, and phased 90-day modernization roadmap.</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Division 3: SMS Interactive Simulator */}
            {division.id === 'sms' && (
              <div className="rounded-2xl bg-[#090B0F] border border-white/[0.1] p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/[0.08]">
                  <div>
                    <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-[#E59500]" />
                      <span>Interactive USSD Session & Bulk SMS Simulator</span>
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      Experience how our carrier-grade USSD menus (*384*500#) and high-throughput SMPP SMS gateways operate in real time.
                    </p>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/20">
                    Carrier TPS: 12,000 msg/sec
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  {/* Phone Simulator Frame */}
                  <div className="md:col-span-5 flex justify-center">
                    <div className="w-[280px] rounded-3xl bg-[#12161F] border-4 border-zinc-700 p-4 shadow-2xl space-y-4">
                      <div className="w-16 h-1.5 bg-zinc-600 rounded-full mx-auto" />

                      <div className="bg-[#1C2333] rounded-xl p-3 text-center border border-white/[0.08]">
                        <div className="text-[10px] font-mono text-zinc-400 mb-1">USSD SESSION ACTIVE</div>
                        <pre className="text-xs font-mono text-amber-300 text-left whitespace-pre-wrap leading-relaxed">
                          {ussdResponseMsg}
                        </pre>
                      </div>

                      {/* Interactive USSD buttons */}
                      <div className="space-y-1.5 pt-2">
                        <div className="grid grid-cols-3 gap-1.5">
                          {['1', '2', '3'].map((btn) => (
                            <button
                              key={btn}
                              onClick={() => handleUssdDial(btn)}
                              className="py-2.5 rounded-lg bg-white/[0.08] hover:bg-[#E59500] hover:text-black text-white font-mono font-bold text-xs transition-colors cursor-pointer"
                            >
                              Option {btn}
                            </button>
                          ))}
                        </div>
                        <button
                          onClick={() => handleUssdDial('reset')}
                          className="w-full py-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white font-mono text-[11px] cursor-pointer"
                        >
                          Dial New Session (*384*500#)
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* SMS Gateway Specs & Code Snippet */}
                  <div className="md:col-span-7 space-y-4 text-left">
                    <div className="text-xs font-mono uppercase text-zinc-400">
                      Sample Transactional OTP API Request (cURL):
                    </div>
                    <div className="p-4 rounded-xl bg-black border border-white/[0.08] font-mono text-xs text-zinc-300 overflow-x-auto">
                      <pre className="text-emerald-400">
{`curl -X POST https://api.murutechinc.com/v1/sms/send \\
  -H "Authorization: Bearer YOUR_ENTERPRISE_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "senderId": "MURU_TECH",
    "recipients": ["+254716748685"],
    "message": "Your Muru Tech OTP is 849201. Valid for 5 minutes.",
    "priority": "HIGH",
    "carrierRouting": "SAFARICOM_DIRECT"
  }'`}
                      </pre>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                        <span className="text-zinc-400 font-mono block">DELIVERY SPEED:</span>
                        <span className="text-white font-bold">&lt; 1.8 Seconds Guaranteed</span>
                      </div>
                      <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                        <span className="text-zinc-400 font-mono block">PROTOCOLS:</span>
                        <span className="text-white font-bold">SMPP v3.4 / v5.0 & REST</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Division 4: ROBOTICS Interactive RPA Simulator */}
            {division.id === 'robotics' && (
              <div className="rounded-2xl bg-[#090B0F] border border-white/[0.1] p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/[0.08]">
                  <div>
                    <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                      <Cpu className="w-5 h-5 text-[#E59500]" />
                      <span>Robotic Process Automation (RPA) Pipeline Visualizer</span>
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      See how our software bots execute desktop legacy procedures without APIs, and how IoT sensors report telemetry.
                    </p>
                  </div>

                  <button
                    onClick={runRpaSimulation}
                    disabled={isRpaExecuting}
                    className="px-4 py-2 rounded-lg bg-[#E59500] text-black font-semibold text-xs flex items-center gap-2 cursor-pointer hover:bg-[#CC7A00] transition-colors disabled:opacity-50"
                  >
                    <Play className="w-3.5 h-3.5 fill-black" />
                    <span>{isRpaExecuting ? 'Bot Executing...' : 'Simulate RPA Run'}</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                  {[
                    {
                      stepNum: 1,
                      name: '1. Ingest Voucher',
                      desc: 'Monitors inbox & extracts scanned PO data using OCR.',
                    },
                    {
                      stepNum: 2,
                      name: '2. Launch Desktop ERP',
                      desc: 'Opens legacy client, enters credentials securely via vault.',
                    },
                    {
                      stepNum: 3,
                      name: '3. Data Entry & Match',
                      desc: 'Enters 24 invoice lines, checks 3-way match against bank feed.',
                    },
                    {
                      stepNum: 4,
                      name: '4. Sign-Off & Notify',
                      desc: 'Posts entry, archives voucher, alerts accounting on Slack.',
                    },
                  ].map((s) => (
                    <div
                      key={s.stepNum}
                      className={`p-4 rounded-xl border transition-all text-left ${
                        rpaStep >= s.stepNum
                          ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300'
                          : 'bg-white/[0.02] border-white/[0.06] text-zinc-500'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono font-bold">STEP {s.stepNum}</span>
                        {rpaStep >= s.stepNum ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Clock className="w-4 h-4 text-zinc-600" />
                        )}
                      </div>
                      <div className="text-xs font-bold text-white mb-1">{s.name}</div>
                      <div className="text-[11px] leading-relaxed">{s.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Division 5: APP & LICENCES Configurator */}
            {division.id === 'app-licences' && (
              <div className="rounded-2xl bg-[#090B0F] border border-white/[0.1] p-6 sm:p-8">
                <h3 className="text-xl font-display font-bold text-white mb-2 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#E59500]" />
                  <span>Enterprise Software Licensing & App Architecture Configurator</span>
                </h3>
                <p className="text-xs text-zinc-400 mb-6">
                  Estimate authorized Microsoft, Google, AWS licensing tiers and custom application velocity.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs font-mono text-zinc-400 mb-2">
                        <span>Organization Seat Scale:</span>
                        <span className="text-[#E59500] font-bold">{seatsCount} Users</span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="500"
                        step="10"
                        value={seatsCount}
                        onChange={(e) => setSeatsCount(Number(e.target.value))}
                        className="w-full accent-[#E59500] cursor-pointer"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-zinc-400 block mb-2">Select Primary License Suite:</label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: 'm365', label: 'Microsoft 365 E3/E5' },
                          { id: 'google', label: 'Google Workspace' },
                          { id: 'azure', label: 'Azure / AWS Cloud' },
                        ].map((lic) => (
                          <button
                            key={lic.id}
                            onClick={() => setSelectedLicense(lic.id as any)}
                            className={`p-2.5 rounded-lg border text-xs font-mono transition-all cursor-pointer ${
                              selectedLicense === lic.id
                                ? 'bg-[#E59500]/20 border-[#E59500] text-white'
                                : 'bg-black border-white/[0.08] text-zinc-400 hover:text-white'
                            }`}
                          >
                            {lic.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-black border border-[#E59500]/30 space-y-3">
                    <div className="text-xs font-mono text-[#E59500] uppercase font-bold">
                      PROVISIONING & CUSTOM APP SUMMARY:
                    </div>
                    <div className="text-xs text-zinc-300 space-y-1.5">
                      <div className="flex justify-between py-1 border-b border-white/[0.05]">
                        <span className="text-zinc-500">Tier Provisioning SLA:</span>
                        <span className="text-emerald-400 font-mono">&lt; 4 Hours Express</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-white/[0.05]">
                        <span className="text-zinc-500">Volume Discount Bracket:</span>
                        <span className="text-white font-mono font-bold">Tier-1 Partner (Save ~18%)</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-white/[0.05]">
                        <span className="text-zinc-500">Complimentary Setup:</span>
                        <span className="text-white font-mono">Tenant Migration & DNS Setup</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-zinc-500">Custom App Companion:</span>
                        <span className="text-[#E59500] font-mono">React Native & Web Portal</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Division 6: ERP Interactive Module Explorer */}
            {division.id === 'erp' && (
              <div className="rounded-2xl bg-[#090B0F] border border-white/[0.1] p-6 sm:p-8">
                <h3 className="text-xl font-display font-bold text-white mb-2 flex items-center gap-2">
                  <Database className="w-5 h-5 text-[#E59500]" />
                  <span>Enterprise ERP Architecture & Module Explorer</span>
                </h3>
                <p className="text-xs text-zinc-400 mb-6">
                  Explore how our Odoo ERP, SAP Business One, and custom ERP integrations unify enterprise operations.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    { id: 'accounting', name: 'Financials & KRA eTIMS' },
                    { id: 'inventory', name: 'Multi-Warehouse & Barcode' },
                    { id: 'mrp', name: 'Manufacturing (BOM & Routing)' },
                    { id: 'hrms', name: 'HRMS & Kenya Payroll' },
                  ].map((mod) => (
                    <button
                      key={mod.id}
                      onClick={() => setSelectedErpModule(mod.id as any)}
                      className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                        selectedErpModule === mod.id
                          ? 'bg-[#E59500] text-black'
                          : 'bg-white/[0.04] text-zinc-400 hover:text-white border border-white/[0.08]'
                      }`}
                    >
                      {mod.name}
                    </button>
                  ))}
                </div>

                <div className="p-6 rounded-xl bg-black border border-white/[0.08] text-xs text-zinc-300 space-y-3">
                  {selectedErpModule === 'accounting' && (
                    <div>
                      <div className="text-sm font-bold text-white mb-1">
                        Double-Entry Financial Accounting & Automated KRA eTIMS Fiscalization
                      </div>
                      <p className="text-zinc-400 leading-relaxed">
                        Automatic generation of compliant QR code fiscal signatures for every invoice sent. Multi-currency ledgers, bank auto-reconciliation, automated vendor payment batches, and real-time P&L reporting.
                      </p>
                    </div>
                  )}
                  {selectedErpModule === 'inventory' && (
                    <div>
                      <div className="text-sm font-bold text-white mb-1">
                        Multi-Warehouse Logistics & Barcode RFID Ingestion
                      </div>
                      <p className="text-zinc-400 leading-relaxed">
                        Track stock movement across 50+ branches or warehouses in real time. Automated reorder point generation, FIFO/LIFO valuation, serial and batch tracking, and mobile handheld scanning.
                      </p>
                    </div>
                  )}
                  {selectedErpModule === 'mrp' && (
                    <div>
                      <div className="text-sm font-bold text-white mb-1">
                        Manufacturing Resource Planning (MRP II) & Work-Center Scheduling
                      </div>
                      <p className="text-zinc-400 leading-relaxed">
                        Multi-level Bill of Materials (BOM), shop-floor tablet controls, automatic scrap tracking, cost variance analysis, and live equipment utilization telemetry.
                      </p>
                    </div>
                  )}
                  {selectedErpModule === 'hrms' && (
                    <div>
                      <div className="text-sm font-bold text-white mb-1">
                        HRMS, Biometric Attendance & Kenya Statutory Payroll
                      </div>
                      <p className="text-zinc-400 leading-relaxed">
                        Compliant P.A.Y.E, NSSF, NHIF/SHIF, and Housing Levy computation. Direct electronic bank file generation (KBA / EFT / MPESA B2C), and employee self-service leave requests.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Tab 3: Architecture & Security */}
        {activeTab === 'architecture' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-8"
          >
            <div className="rounded-2xl bg-[#090B0F] border border-white/[0.08] p-6 sm:p-8">
              <h3 className="text-xl font-display font-bold text-white mb-4 flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#E59500]" />
                <span>Security Hardening, Compliance & Private VPC Architecture</span>
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                All solutions deployed by the {division.code} division follow strict enterprise standards. We do not compromise on customer data ownership, encryption, or regulatory compliance.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-black/60 border border-white/[0.06]">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 mb-2" />
                  <div className="text-sm font-bold text-white mb-1">Zero Training Retention</div>
                  <div className="text-xs text-zinc-400 leading-relaxed">
                    Customer data, documents, and chat records are never retained or utilized to train public foundation models. Complete VPC isolation.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black/60 border border-white/[0.06]">
                  <Server className="w-5 h-5 text-[#E59500] mb-2" />
                  <div className="text-sm font-bold text-white mb-1">Data Sovereignty & Local Regs</div>
                  <div className="text-xs text-zinc-400 leading-relaxed">
                    Compliant with the Kenya Data Protection Act 2019, GDPR, and global banking standards. Local Kenyan cloud hosting options available.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black/60 border border-white/[0.06]">
                  <Zap className="w-5 h-5 text-sky-400 mb-2" />
                  <div className="text-sm font-bold text-white mb-1">Multi-AZ High Availability</div>
                  <div className="text-xs text-zinc-400 leading-relaxed">
                    Automated failover, 99.98% uptime SLA guarantee, automated disaster recovery, and point-in-time database backups.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 4: Specifications & SLAs */}
        {activeTab === 'specs' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            <div className="rounded-2xl bg-[#090B0F] border border-white/[0.08] p-6 sm:p-8">
              <h3 className="text-xl font-display font-bold text-white mb-6">
                Technical Specifications & Certified SLA Commitments
              </h3>

              <div className="divide-y divide-white/[0.08] text-xs">
                {[
                  { label: 'Division Identity', val: `${division.name} (Code: ${division.code})` },
                  { label: 'Primary Delivery Center', val: 'Nairobi HQ Engineering Practice • Global Reach' },
                  { label: 'Uptime Availability SLA', val: '99.98% Financially-Backed Service Level Agreement' },
                  { label: 'Critical Incident Response', val: '< 15 Minutes for P1 Production Events' },
                  { label: 'Supported Deployment Targets', val: 'AWS, Microsoft Azure, Google Cloud, On-Premises Kubernetes, Hybrid Bare-Metal' },
                  { label: 'Data Encryption', val: 'TLS 1.3 in Transit • AES-256 at Rest with Customer Managed Keys (CMK)' },
                  { label: 'Direct Engineering Support', val: 'Dedicated Slack / Teams / WhatsApp Lead Channel + 24/7 Phone Desk' },
                ].map((row, idx) => (
                  <div key={idx} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-mono text-zinc-400">{row.label}:</span>
                    <span className="font-semibold text-white sm:text-right">{row.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Bottom Banner: Ready to consult with this division? */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-amber-500/10 via-[#E59500]/20 to-amber-500/10 border border-[#E59500]/40 p-8 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="px-3 py-1 rounded-full bg-[#E59500]/20 text-[#E59500] border border-[#E59500]/40 text-xs font-mono font-bold">
              ENGAGE {division.code} PRACTICE
            </span>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              Ready to deploy with Muru Tech’s {division.shortTitle}?
            </h3>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Speak directly with our principal engineers in Nairobi. We provide an initial technical audit, feasibility briefing, and fixed-cost delivery roadmap within 48 hours.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() =>
                  onOpenConsultation(
                    `Muru Tech Division: ${division.code} (${division.name})`
                  )
                }
                className="py-3 px-6 rounded-xl font-display font-semibold text-xs sm:text-sm text-black bg-[#E59500] hover:bg-[#CC7A00] transition-all flex items-center gap-2 cursor-pointer shadow-xl shadow-[#E59500]/25 active:scale-95"
              >
                <Sparkles className="w-4 h-4 fill-black/20 text-black" />
                <span>Book Practice Consultation</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>

              <a
                href={COMPANY_DETAILS.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 rounded-xl text-xs sm:text-sm font-mono text-white bg-black/60 hover:bg-black border border-white/[0.1] flex items-center gap-2 transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Nairobi Lead</span>
              </a>
            </div>
          </div>
        </div>

        {/* Cross-Navigation: Explore Other Muru Tech Divisions */}
        <div className="mt-16 pt-10 border-t border-white/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <h4 className="text-lg font-display font-bold text-white">
                Explore Other Muru Tech Divisions
              </h4>
              <p className="text-xs text-zinc-400">
                Seamlessly integrated technology practices under a single enterprise SLA.
              </p>
            </div>
            <button
              onClick={onBackToHome}
              className="text-xs font-mono text-[#E59500] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>View All Solutions Overview</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {otherDivisions.map((other) => (
              <button
                key={other.id}
                onClick={() => {
                  onNavigateToDivision(other.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="p-4 rounded-xl bg-[#090B0F] border border-white/[0.06] hover:border-[#E59500]/50 hover:bg-white/[0.04] transition-all text-left group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-white/[0.05] text-[#E59500]">
                    {other.code}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#E59500] group-hover:translate-x-1 transition-all" />
                </div>
                <div className="text-xs font-bold text-white group-hover:text-[#E59500] transition-colors line-clamp-1 mb-1">
                  {other.shortTitle}
                </div>
                <div className="text-[11px] text-zinc-400 line-clamp-2">
                  {other.tagline}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
