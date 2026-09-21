import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Database, MessageSquare, Globe, Laptop, CheckCircle2, Play, Pause, RefreshCw } from 'lucide-react';
import { MURU_BRAND } from '../data/muruData';

interface HeroProps {
  onStartProject: () => void;
  onExploreServices: () => void;
}

type SimulationScenario = 'lead_whatsapp' | 'support_ticket' | 'invoice_sync';

export const Hero: React.FC<HeroProps> = ({ onStartProject, onExploreServices }) => {
  const [activeScenario, setActiveScenario] = useState<SimulationScenario>('lead_whatsapp');
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [processedCount, setProcessedCount] = useState<number>(14290);

  // Automatic simulation pulse
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev >= 4 ? 1 : prev + 1));
      setProcessedCount((prev) => prev + 1);
    }, 2400);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const scenarioData = {
    lead_whatsapp: {
      title: "Inbound Lead to CRM",
      customer: "Prospective Client (WhatsApp)",
      muruCore: "Muru AI Intent Classifier & RAG Guardrail",
      agent: "Sales Agent (BANT Qualification)",
      destinations: [
        { name: "HubSpot CRM", note: "Lead Scored 94/100", active: true },
        { name: "Google Calendar", note: "VIP Demo Scheduled", active: true },
        { name: "WhatsApp Notification", note: "Executive Alert Sent", active: true }
      ],
      payload: "“Hello, we need an automated order processing bot for 4 retail stores.”"
    },
    support_ticket: {
      title: "24/7 Support Resolution",
      customer: "Active Customer (Web Portal)",
      muruCore: "Muru AI Semantic Knowledge Engine",
      agent: "Support Agent (Instant Resolver)",
      destinations: [
        { name: "Live Database", note: "Order #8492 Located", active: true },
        { name: "Customer Portal", note: "Resolved in 2.4s", active: true },
        { name: "Zendesk", note: "Ticket Closed Auto", active: true }
      ],
      payload: "“Can I modify the delivery address for order #8492 before dispatch?”"
    },
    invoice_sync: {
      title: "Document Automation",
      customer: "Vendor Accounts Team",
      muruCore: "Muru AI Vision & Multimodal Parser",
      agent: "Operations Agent (Ledger Audit)",
      destinations: [
        { name: "PostgreSQL ERP", note: "Ledger Reconciled", active: true },
        { name: "Approval Slack", note: "1-Click Sign-off", active: true },
        { name: "Bank Batch", note: "Payment Scheduled", active: true }
      ],
      payload: "PDF Invoice: 48 items parsed, tariff codes validated, 0 errors."
    }
  };

  const current = scenarioData[activeScenario];

  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-20 flex items-center overflow-hidden tech-grid-pattern">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#E59500]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#3B82F6]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Positioning & CTAs */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-7 text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-zinc-300 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#E59500] animate-pulse" />
              <span className="text-[#E59500] font-semibold">MURU AI</span>
              <span className="text-zinc-500">•</span>
              <span>Intelligent Solutions. Built for Business.</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                AI THAT WORKS <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#E59500]">
                  FOR YOUR BUSINESS.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-zinc-400 font-normal leading-relaxed max-w-2xl">
                From intelligent assistants to business automation, we build practical AI systems that solve real business problems.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-start-project-btn"
                onClick={onStartProject}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base text-black bg-gradient-to-r from-[#F5A31A] via-[#E59500] to-[#CC7A00] hover:brightness-110 shadow-[0_0_30px_rgba(229,149,0,0.35)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Start Your AI Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                id="hero-explore-services-btn"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-medium text-sm sm:text-base text-zinc-200 bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.12] hover:border-white/[0.25] transition-all backdrop-blur-md"
              >
                <span>Explore Services</span>
              </button>
            </div>

            {/* Trust statement & pills */}
            <div className="pt-4 border-t border-white/[0.07] space-y-3">
              <div className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">
                Specialized Enterprise Capabilities
              </div>
              <div className="flex flex-wrap gap-2 text-xs sm:text-sm font-medium text-zinc-400">
                {MURU_BRAND.trustPillars.map((pillar, idx) => (
                  <React.Fragment key={pillar}>
                    <span className="hover:text-zinc-200 transition-colors">{pillar}</span>
                    {idx < MURU_BRAND.trustPillars.length - 1 && (
                      <span className="text-zinc-700">•</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Animated AI Network & Enterprise Flow Interface */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="relative rounded-2xl glass-card border border-white/[0.1] p-5 sm:p-6 shadow-2xl shadow-black/80 overflow-hidden">
              
              {/* Card Header & Controls */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.08]">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold tracking-wide uppercase text-zinc-300">
                    Live AI Operational Mesh
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-zinc-500">
                    {processedCount.toLocaleString()} events
                  </span>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1 rounded text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
                    title={isPlaying ? "Pause simulation" : "Resume simulation"}
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Scenario Switcher Tabs */}
              <div className="grid grid-cols-3 gap-1.5 p-1 rounded-lg bg-black/40 border border-white/[0.06] mb-5">
                {(['lead_whatsapp', 'support_ticket', 'invoice_sync'] as SimulationScenario[]).map((scenario) => {
                  const titles = {
                    lead_whatsapp: 'Sales Flow',
                    support_ticket: 'Support 24/7',
                    invoice_sync: 'Operations'
                  };
                  return (
                    <button
                      key={scenario}
                      onClick={() => {
                        setActiveScenario(scenario);
                        setActiveStep(1);
                      }}
                      className={`py-1.5 px-2 rounded-md text-[11px] font-medium transition-all ${
                        activeScenario === scenario
                          ? 'bg-[#E59500]/20 text-[#E59500] border border-[#E59500]/40 shadow-sm'
                          : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      {titles[scenario]}
                    </button>
                  );
                })}
              </div>

              {/* Connected Flowchart Nodes Visual */}
              <div className="space-y-3 relative">
                
                {/* NODE 1: CUSTOMER */}
                <div className={`p-3.5 rounded-xl border transition-all duration-300 ${
                  activeStep === 1
                    ? 'bg-white/[0.08] border-[#E59500] shadow-[0_0_15px_rgba(229,149,0,0.2)]'
                    : 'bg-black/30 border-white/[0.06]'
                }`}>
                  <div className="flex items-center justify-between text-xs font-semibold mb-1">
                    <span className="text-zinc-400 uppercase tracking-wider text-[10px]">01 • INBOUND ORIGIN</span>
                    {activeStep === 1 && <span className="text-[#E59500] text-[10px] font-mono animate-pulse">Processing...</span>}
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div className="font-semibold text-white text-sm">
                      {current.customer}
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-zinc-400 italic bg-black/40 px-2.5 py-1.5 rounded border border-white/[0.04]">
                    {current.payload}
                  </div>
                </div>

                {/* CONNECTOR 1 */}
                <div className="flex justify-center -my-1">
                  <div className="flex flex-col items-center">
                    <div className={`w-0.5 h-4 transition-colors ${activeStep >= 2 ? 'bg-[#E59500]' : 'bg-white/[0.1]'}`} />
                    <div className={`w-2 h-2 rounded-full ${activeStep >= 2 ? 'bg-[#E59500] shadow-[0_0_8px_#E59500]' : 'bg-zinc-700'}`} />
                  </div>
                </div>

                {/* NODE 2: MURU AI CORE */}
                <div className={`p-3.5 rounded-xl border transition-all duration-300 ${
                  activeStep === 2
                    ? 'bg-[#E59500]/10 border-[#E59500] shadow-[0_0_20px_rgba(229,149,0,0.25)]'
                    : 'bg-black/30 border-white/[0.06]'
                }`}>
                  <div className="flex items-center justify-between text-xs font-semibold mb-1">
                    <span className="text-[#E59500] uppercase tracking-wider text-[10px] font-bold">02 • INTELLIGENCE LAYER</span>
                    {activeStep === 2 && <span className="text-[#E59500] text-[10px] font-mono animate-pulse">Analyzing Intent</span>}
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#E59500] flex items-center justify-center text-black font-black text-xs">
                      M
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">MURU AI CORE</div>
                      <div className="text-[11px] text-zinc-400">{current.muruCore}</div>
                    </div>
                  </div>
                </div>

                {/* CONNECTOR 2 */}
                <div className="flex justify-center -my-1">
                  <div className="flex flex-col items-center">
                    <div className={`w-0.5 h-4 transition-colors ${activeStep >= 3 ? 'bg-[#E59500]' : 'bg-white/[0.1]'}`} />
                    <div className={`w-2 h-2 rounded-full ${activeStep >= 3 ? 'bg-[#E59500] shadow-[0_0_8px_#E59500]' : 'bg-zinc-700'}`} />
                  </div>
                </div>

                {/* NODE 3: AI AGENT */}
                <div className={`p-3.5 rounded-xl border transition-all duration-300 ${
                  activeStep === 3
                    ? 'bg-white/[0.08] border-[#E59500] shadow-[0_0_15px_rgba(229,149,0,0.2)]'
                    : 'bg-black/30 border-white/[0.06]'
                }`}>
                  <div className="flex items-center justify-between text-xs font-semibold mb-1">
                    <span className="text-zinc-400 uppercase tracking-wider text-[10px]">03 • AUTONOMOUS WORKER</span>
                    {activeStep === 3 && <span className="text-emerald-400 text-[10px] font-mono animate-pulse">Executing Action</span>}
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div className="font-semibold text-white text-sm">
                      {current.agent}
                    </div>
                  </div>
                </div>

                {/* CONNECTOR 3 */}
                <div className="flex justify-center -my-1">
                  <div className="flex flex-col items-center">
                    <div className={`w-0.5 h-4 transition-colors ${activeStep >= 4 ? 'bg-[#E59500]' : 'bg-white/[0.1]'}`} />
                    <div className={`w-2 h-2 rounded-full ${activeStep >= 4 ? 'bg-[#E59500] shadow-[0_0_8px_#E59500]' : 'bg-zinc-700'}`} />
                  </div>
                </div>

                {/* NODE 4: CRM / WHATSAPP / WEBSITE / DATABASE */}
                <div className={`p-3.5 rounded-xl border transition-all duration-300 ${
                  activeStep === 4
                    ? 'bg-white/[0.08] border-emerald-500/80 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                    : 'bg-black/30 border-white/[0.06]'
                }`}>
                  <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                    <span className="text-zinc-400 uppercase tracking-wider text-[10px]">04 • CONNECTED BUSINESS SYSTEMS</span>
                    <span className="text-zinc-500 text-[10px]">CRM • WhatsApp • DB</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    {current.destinations.map((dest) => (
                      <div key={dest.name} className="p-2 rounded bg-black/40 border border-white/[0.05] text-center">
                        <div className="text-[11px] font-medium text-white truncate">{dest.name}</div>
                        <div className="text-[10px] text-emerald-400 truncate flex items-center justify-center gap-1 mt-0.5">
                          <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                          <span>Synced</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Sub-note explaining the visual */}
              <div className="mt-4 pt-3 border-t border-white/[0.06] text-center">
                <p className="text-[11px] text-zinc-400">
                  Muru AI connects business intelligence seamlessly into your existing tools.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
