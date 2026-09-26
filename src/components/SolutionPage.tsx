import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  ShoppingBag,
  HeartPulse,
  Truck,
  Landmark,
  Building2,
  Hotel,
  GraduationCap,
  HeartHandshake,
  Briefcase,
  Headphones,
  UserCheck,
  FileText,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Play,
  ShieldCheck,
  Server,
  Clock,
  MessageSquare,
  Layers,
  Cpu,
  Zap,
} from 'lucide-react';
import { SOLUTION_PAGES_DATA } from '../data/dropdownPagesData';
import { COMPANY_PRODUCTS, COMPANY_DETAILS } from '../data/siteData';

interface SolutionPageProps {
  solutionId: string;
  onBackToHome: () => void;
  onNavigateToSolution: (solutionId: string) => void;
  onNavigateToProduct: (productId: string) => void;
  onOpenConsultation: (interestTopic?: string) => void;
}

export default function SolutionPage({
  solutionId,
  onBackToHome,
  onNavigateToSolution,
  onNavigateToProduct,
  onOpenConsultation,
}: SolutionPageProps) {
  const solution =
    SOLUTION_PAGES_DATA.find((s) => s.id === solutionId) || SOLUTION_PAGES_DATA[0];

  const [activeTab, setActiveTab] = useState<
    'overview' | 'simulator' | 'architecture' | 'rollout'
  >('overview');
  const [selectedWorkflowIdx, setSelectedWorkflowIdx] = useState<number>(0);
  const [simStep, setSimStep] = useState<number>(4);
  const [isSimRunning, setIsSimRunning] = useState<boolean>(false);

  useEffect(() => {
    setSelectedWorkflowIdx(0);
    setSimStep(4);
    setIsSimRunning(false);
  }, [solutionId]);

  const activeWorkflow =
    solution.workflows[selectedWorkflowIdx] || solution.workflows[0];

  const relatedProducts = COMPANY_PRODUCTS.filter((p) =>
    solution.relatedProductIds.includes(p.id)
  );

  const industrySolutions = SOLUTION_PAGES_DATA.filter(
    (s) => s.category === 'industry'
  );
  const useCaseSolutions = SOLUTION_PAGES_DATA.filter(
    (s) => s.category === 'use-case'
  );

  const getSolutionIcon = (iconName: string, className = 'w-5 h-5') => {
    switch (iconName) {
      case 'ShoppingBag':
        return <ShoppingBag className={className} />;
      case 'HeartPulse':
        return <HeartPulse className={className} />;
      case 'Truck':
        return <Truck className={className} />;
      case 'Landmark':
        return <Landmark className={className} />;
      case 'Building2':
        return <Building2 className={className} />;
      case 'Hotel':
        return <Hotel className={className} />;
      case 'GraduationCap':
        return <GraduationCap className={className} />;
      case 'HeartHandshake':
        return <HeartHandshake className={className} />;
      case 'Briefcase':
        return <Briefcase className={className} />;
      case 'Headphones':
        return <Headphones className={className} />;
      case 'UserCheck':
        return <UserCheck className={className} />;
      case 'FileText':
        return <FileText className={className} />;
      case 'Sparkles':
      default:
        return <Sparkles className={className} />;
    }
  };

  const runWorkflowSimulation = () => {
    setIsSimRunning(true);
    setSimStep(1);
    setTimeout(() => setSimStep(2), 450);
    setTimeout(() => setSimStep(3), 900);
    setTimeout(() => {
      setSimStep(4);
      setIsSimRunning(false);
    }, 1350);
  };

  const handleBookThisSolution = () => {
    onOpenConsultation(`Solution Deployment: ${solution.title} (${solution.code})`);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 min-h-screen relative overflow-hidden bg-[#07090D]">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[420px] bg-gradient-to-b from-[#E59500]/10 via-emerald-500/5 to-transparent blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <button
              onClick={onBackToHome}
              className="hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Solutions & Home</span>
            </button>
            <span className="text-zinc-600">/</span>
            <span>Solutions</span>
            <span className="text-zinc-600">/</span>
            <span className="text-[#E59500] font-semibold">{solution.shortTitle}</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Production Blueprint · Rollout in {solution.metrics.deploymentTime}</span>
          </div>
        </div>

        {/* Horizontal Solution Switcher Bar */}
        <div className="space-y-2 pb-4 mb-8 border-b border-white/[0.06]">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 pr-2 shrink-0">
              Industries:
            </span>
            {industrySolutions.map((item) => {
              const isCurrent = item.id === solution.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigateToSolution(item.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5 ${
                    isCurrent
                      ? 'bg-[#E59500] text-black font-semibold'
                      : 'bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.07] border border-white/[0.06]'
                  }`}
                >
                  {getSolutionIcon(item.iconName, 'w-3.5 h-3.5')}
                  <span>{item.shortTitle}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 pr-2 shrink-0">
              Use Cases:
            </span>
            {useCaseSolutions.map((item) => {
              const isCurrent = item.id === solution.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigateToSolution(item.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5 ${
                    isCurrent
                      ? 'bg-[#E59500] text-black font-semibold'
                      : 'bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.07] border border-white/[0.06]'
                  }`}
                >
                  {getSolutionIcon(item.iconName, 'w-3.5 h-3.5')}
                  <span>{item.shortTitle}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Solution Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
          <div className="lg:col-span-8 space-y-4 text-left">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="text-[#E59500] font-semibold">{solution.code}</span>
              <span>·</span>
              <span>
                {solution.category === 'industry'
                  ? 'Industry Vertical Blueprint'
                  : 'Enterprise Use-Case Architecture'}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {solution.title}
            </h1>

            <p className="text-base sm:text-lg font-medium text-[#E59500]">
              {solution.tagline}
            </p>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl">
              {solution.longDescription}
            </p>

            {/* Key Solution Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-[11px] font-mono text-zinc-400">
                  {solution.metrics.primaryLabel}
                </div>
                <div className="text-lg sm:text-xl font-display font-bold text-white mt-0.5 tabular-nums">
                  {solution.metrics.primaryValue}
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-[11px] font-mono text-zinc-400">
                  {solution.metrics.secondaryLabel}
                </div>
                <div className="text-lg sm:text-xl font-display font-bold text-emerald-400 mt-0.5 tabular-nums">
                  {solution.metrics.secondaryValue}
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-[11px] font-mono text-zinc-400">
                  Deployment Speed
                </div>
                <div className="text-lg sm:text-xl font-display font-bold text-[#E59500] mt-0.5 tabular-nums">
                  {solution.metrics.deploymentTime}
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-[11px] font-mono text-zinc-400">
                  Verified Impact
                </div>
                <div className="text-sm sm:text-base font-display font-bold text-white mt-1">
                  {solution.metrics.roiBenchmark}
                </div>
              </div>
            </div>
          </div>

          {/* Right Action & Scoping Card */}
          <div className="lg:col-span-4 rounded-2xl bg-[#0D1117] border border-white/[0.1] p-6 space-y-5 text-left shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#E59500]/15 border border-[#E59500]/30 flex items-center justify-center text-[#E59500]">
                  {getSolutionIcon(solution.iconName, 'w-5 h-5')}
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-400">Ready to Deploy</div>
                  <div className="text-sm font-display font-bold text-white">
                    {solution.shortTitle}
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono text-emerald-400">SLA Verified</span>
            </div>

            <div className="space-y-2.5 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Tailored to your existing ERP, CRM & WhatsApp</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#E59500] shrink-0" />
                <span>Isolated Private VPC & Zero Data Retention</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>14-Day Working Pilot before full rollout</span>
              </div>
            </div>

            <div className="pt-2 space-y-2.5">
              <button
                onClick={handleBookThisSolution}
                className="w-full py-3.5 px-4 rounded-xl font-display font-bold text-xs sm:text-sm text-black bg-gradient-to-r from-[#E59500] via-[#F4A81E] to-[#CC7A00] hover:shadow-[0_0_25px_rgba(229,149,0,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 fill-black/20" />
                <span>{solution.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`${COMPANY_DETAILS.whatsappDirectUrl}%20Specifically%20regarding%20${encodeURIComponent(
                  solution.title
                )}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl font-medium text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 hover:bg-emerald-500/20 transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Discuss on WhatsApp with Lead Architect</span>
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Sub-Tabs for the Solution Page */}
        <div className="flex items-center gap-2 border-b border-white/[0.08] mb-8 overflow-x-auto no-scrollbar">
          {[
            { id: 'overview', label: '01. Solution Blueprint & Workflows' },
            { id: 'simulator', label: '02. Interactive Workflow Simulator' },
            { id: 'architecture', label: '03. System Architecture & Integrations' },
            { id: 'rollout', label: '04. 14-Day Pilot & Delivery Plan' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-4 py-3 text-xs sm:text-sm font-medium border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'border-[#E59500] text-[#E59500] font-semibold'
                  : 'border-transparent text-zinc-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: OVERVIEW & WORKFLOWS */}
        {activeTab === 'overview' && (
          <div className="space-y-10 text-left">
            {/* Core Capabilities Grid */}
            <div className="rounded-2xl bg-[#0D1117] border border-white/[0.08] p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/[0.08]">
                <div>
                  <div className="text-xs font-mono text-[#E59500] uppercase tracking-wider">
                    Production Capabilities
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
                    What We Engineer for {solution.shortTitle}
                  </h2>
                </div>
                <button
                  onClick={() => setActiveTab('simulator')}
                  className="px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-xs font-mono text-[#E59500] flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Launch Interactive Workflow Simulator</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {solution.capabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                      {cap}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Automated Workflows */}
            <div className="space-y-4">
              <div>
                <div className="text-xs font-mono text-[#E59500] uppercase tracking-wider">
                  End-to-End Execution
                </div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
                  Verified Automation Workflows
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-5">
                {solution.workflows.map((wf, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-[#0D1117] border border-white/[0.08] p-6 hover:border-[#E59500]/30 transition-colors"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-white/[0.06]">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xs font-mono text-[#E59500] font-bold">
                          WORKFLOW 0{idx + 1}
                        </span>
                        <span className="text-zinc-600">·</span>
                        <h3 className="font-display text-base sm:text-lg font-bold text-white">
                          {wf.title}
                        </h3>
                      </div>
                      <span className="text-xs font-mono text-emerald-400">
                        Impact: {wf.impact}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 rounded-xl bg-black/40 border border-white/[0.05]">
                        <div className="text-[11px] font-mono text-zinc-400 uppercase mb-1">
                          01. Inbound Trigger
                        </div>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          {wf.trigger}
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-[#E59500]/[0.04] border border-[#E59500]/20">
                        <div className="text-[11px] font-mono text-[#E59500] uppercase mb-1">
                          02. Muru AI Cognitive Action
                        </div>
                        <p className="text-xs text-zinc-200 leading-relaxed">
                          {wf.aiAction}
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-emerald-500/[0.04] border border-emerald-500/20">
                        <div className="text-[11px] font-mono text-emerald-400 uppercase mb-1">
                          03. System Writeback & Output
                        </div>
                        <p className="text-xs text-zinc-200 leading-relaxed">
                          {wf.systemOutput}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Powered By Muru AI Core Products */}
            {relatedProducts.length > 0 && (
              <div className="rounded-2xl bg-[#0D1117] border border-white/[0.08] p-6 sm:p-8">
                <div className="text-xs font-mono text-[#E59500] uppercase tracking-wider mb-1">
                  Core Product Stack
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-5">
                  Muru AI Products Powering This Solution
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {relatedProducts.map((prod) => (
                    <div
                      key={prod.id}
                      onClick={() => onNavigateToProduct(prod.id)}
                      className="p-5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.07] hover:border-[#E59500]/40 transition-all cursor-pointer group flex flex-col justify-between"
                    >
                      <div>
                        <div className="text-xs font-mono text-[#E59500] mb-1">
                          PRODUCT {prod.number} · {prod.code}
                        </div>
                        <h4 className="font-display text-base font-bold text-white group-hover:text-[#E59500] transition-colors">
                          {prod.title}
                        </h4>
                        <p className="text-xs text-zinc-400 mt-1.5 line-clamp-2">
                          {prod.description}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold text-[#E59500]">
                        <span>Open Product Page</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: INTERACTIVE WORKFLOW SIMULATOR */}
        {activeTab === 'simulator' && (
          <div className="rounded-2xl bg-[#0D1117] border border-white/[0.1] p-6 sm:p-8 text-left space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/[0.08]">
              <div>
                <div className="text-xs font-mono text-[#E59500] uppercase tracking-wider">
                  Interactive Sandbox · {solution.shortTitle}
                </div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
                  Simulate Live End-to-End Execution
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Select a scenario below and trigger the pipeline to inspect how Muru AI processes events in real time.
                </p>
              </div>

              <button
                onClick={runWorkflowSimulation}
                disabled={isSimRunning}
                className="px-4 py-2.5 rounded-xl font-display font-bold text-xs text-black bg-[#E59500] hover:bg-[#F4A81E] disabled:opacity-50 transition-all flex items-center gap-2 cursor-pointer self-start sm:self-auto"
              >
                <Play className="w-3.5 h-3.5 fill-black" />
                <span>{isSimRunning ? 'Executing Pipeline...' : 'Re-Run Pipeline Simulation'}</span>
              </button>
            </div>

            {/* Scenario Selector Buttons */}
            <div className="flex flex-wrap gap-2">
              {solution.workflows.map((wf, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedWorkflowIdx(idx);
                    runWorkflowSimulation();
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedWorkflowIdx === idx
                      ? 'bg-[#E59500] text-black'
                      : 'bg-white/[0.03] text-zinc-300 hover:bg-white/[0.07] border border-white/[0.07]'
                  }`}
                >
                  Scenario 0{idx + 1}: {wf.title}
                </button>
              ))}
            </div>

            {/* 4-Stage Interactive Execution Trace */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
              {[
                {
                  stepNum: 1,
                  label: 'STAGE 01 // INGRESS',
                  title: 'Inbound Event Trigger',
                  body: activeWorkflow.trigger,
                  latency: '14ms',
                },
                {
                  stepNum: 2,
                  label: 'STAGE 02 // REASONING',
                  title: 'AI Policy & Tool Execution',
                  body: activeWorkflow.aiAction,
                  latency: '640ms',
                },
                {
                  stepNum: 3,
                  label: 'STAGE 03 // WRITEBACK',
                  title: 'ERP / API Ledger Sync',
                  body: activeWorkflow.systemOutput,
                  latency: '190ms',
                },
                {
                  stepNum: 4,
                  label: 'STAGE 04 // VERIFIED ROI',
                  title: 'Measured Business Outcome',
                  body: activeWorkflow.impact,
                  latency: 'COMPLETED',
                },
              ].map((stage) => {
                const isActive = simStep >= stage.stepNum;
                return (
                  <div
                    key={stage.stepNum}
                    className={`p-4 rounded-xl border transition-all ${
                      isActive
                        ? 'bg-white/[0.03] border-[#E59500]/40 shadow-lg'
                        : 'bg-black/30 border-white/[0.05] opacity-45'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono mb-2">
                      <span className="text-[#E59500] font-bold">{stage.label}</span>
                      <span className="text-emerald-400">{stage.latency}</span>
                    </div>
                    <div className="text-sm font-display font-bold text-white mb-1.5">
                      {stage.title}
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {stage.body}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom Sandbox Action Bar */}
            <div className="p-4 rounded-xl bg-black/50 border border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-xs text-zinc-300">
                <span className="text-emerald-400 font-mono font-semibold">LIVE SANDBOX READY: </span>
                Want to test <strong className="text-white">{activeWorkflow.title}</strong> connected to your own sample data?
              </div>
              <button
                onClick={() =>
                  onOpenConsultation(
                    `14-Day Pilot: ${solution.shortTitle} — ${activeWorkflow.title}`
                  )
                }
                className="px-4 py-2 rounded-lg bg-[#E59500] text-black font-display font-bold text-xs hover:bg-[#F4A81E] transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
              >
                <span>Deploy This Workflow on Your Data</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* TAB 3: SYSTEM ARCHITECTURE & INTEGRATIONS */}
        {activeTab === 'architecture' && (
          <div className="space-y-8 text-left">
            <div className="rounded-2xl bg-[#0D1117] border border-white/[0.08] p-6 sm:p-8">
              <div className="text-xs font-mono text-[#E59500] uppercase tracking-wider">
                Reference Architecture
              </div>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-white mt-1 mb-6">
                4-Layer Production Pipeline for {solution.shortTitle}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {solution.architectureSteps.map((step, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.07] flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xs font-mono text-[#E59500] font-bold mb-2">
                        {step.step}
                      </div>
                      <h3 className="font-display text-base font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/[0.05] text-[11px] font-mono text-emerald-400">
                      Encrypted · High Availability
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Supported Integrations */}
            <div className="rounded-2xl bg-[#0D1117] border border-white/[0.08] p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-mono text-[#E59500] uppercase tracking-wider mb-2">
                <Server className="w-3.5 h-3.5" />
                <span>Pre-Built Connectors & Ecosystem</span>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-4">
                Systems We Connect Out-of-the-Box
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {solution.integrations.map((integ, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06] flex items-center gap-2.5 text-xs sm:text-sm font-medium text-zinc-200"
                  >
                    <Layers className="w-4 h-4 text-[#E59500] shrink-0" />
                    <span>{integ}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: 14-DAY PILOT & ROLLOUT */}
        {activeTab === 'rollout' && (
          <div className="rounded-2xl bg-[#0D1117] border border-white/[0.08] p-6 sm:p-8 text-left space-y-6">
            <div>
              <div className="text-xs font-mono text-[#E59500] uppercase tracking-wider">
                Rapid Enterprise Delivery
              </div>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
                From Discovery Audit to Production in {solution.metrics.deploymentTime}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl">
                We deploy in structured milestones so your team sees working software on your actual data within the first two weeks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.07]">
                <div className="text-xs font-mono text-[#E59500] font-bold mb-1">
                  PHASE 01 · DAYS 1–3
                </div>
                <h3 className="font-display text-base font-bold text-white mb-2">
                  Feasibility Audit & Security Scoping
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Map your exact {solution.shortTitle} workflows, sign mutual NDA, provision isolated VPC, and define measurable ROI acceptance criteria.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.07]">
                <div className="text-xs font-mono text-[#E59500] font-bold mb-1">
                  PHASE 02 · DAYS 4–9
                </div>
                <h3 className="font-display text-base font-bold text-white mb-2">
                  Engine Build & API Integration
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Ingest domain documents, configure deterministic tool calling, and connect staging webhooks to your WhatsApp, CRM, or ERP.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.07]">
                <div className="text-xs font-mono text-[#E59500] font-bold mb-1">
                  PHASE 03 · DAYS 10–14
                </div>
                <h3 className="font-display text-base font-bold text-white mb-2">
                  Staff Enablement & Production Go-Live
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Stress-test accuracy and latency, train your supervisors on the Live Command Cockpit, and transition to 24/7 monitored SLA.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA Banner before booking */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#131822] via-[#0F131A] to-[#131822] border border-[#E59500]/30 p-6 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 text-left">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-wider text-[#E59500]">
              Ready to Transform {solution.shortTitle}?
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              Book Your {solution.shortTitle} Architecture & Demo Session
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Speak directly with a Muru Tech Lead Architect at Mb&apos;yuni, Maghonyi Gym Street, Along Voi Town–Mombasa Road Through River Voi. We will walk through a live demonstration tailored to your systems and provide a fixed-scope implementation roadmap.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={handleBookThisSolution}
              className="px-6 py-3.5 rounded-xl font-display font-bold text-xs sm:text-sm text-black bg-[#E59500] hover:bg-[#F4A81E] transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-[#E59500]/20"
            >
              <Sparkles className="w-4 h-4 fill-black/20" />
              <span>{solution.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onBackToHome}
              className="px-4 py-3.5 rounded-xl font-mono text-xs text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-colors cursor-pointer"
            >
              Back to Overview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
