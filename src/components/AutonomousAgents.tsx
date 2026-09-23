import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Cpu,
  UserCheck,
  Headphones,
  FileSearch,
  Cog,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Play,
  RotateCw,
  Terminal,
  Zap,
  Shield,
  Layers,
} from 'lucide-react';
import { AUTONOMOUS_AGENTS_DATA } from '../data/siteData';

interface AutonomousAgentsProps {
  onDeployAgent: (agentName: string) => void;
}

export default function AutonomousAgents({ onDeployAgent }: AutonomousAgentsProps) {
  const [selectedAgentId, setSelectedAgentId] = useState(AUTONOMOUS_AGENTS_DATA[0].id);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationStep, setSimulationStep] = useState(0);

  const activeAgent =
    AUTONOMOUS_AGENTS_DATA.find((a) => a.id === selectedAgentId) || AUTONOMOUS_AGENTS_DATA[0];

  const getAgentIcon = (id: string, active: boolean) => {
    const cls = `w-5 h-5 ${active ? 'text-black' : 'text-[#E59500]'}`;
    switch (id) {
      case 'sales-agent':
        return <UserCheck className={cls} />;
      case 'support-agent':
        return <Headphones className={cls} />;
      case 'research-agent':
        return <FileSearch className={cls} />;
      case 'operations-agent':
        return <Cog className={cls} />;
      case 'knowledge-agent':
      default:
        return <BookOpen className={cls} />;
    }
  };

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setSimulationStep(1);

    setTimeout(() => {
      setSimulationStep(2);
    }, 800);

    setTimeout(() => {
      setSimulationStep(3);
      setIsSimulating(false);
    }, 1800);
  };

  return (
    <section id="agents" className="py-24 relative bg-[#090B0E] border-t border-white/[0.05]">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#E59500]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-[#E59500] mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Autonomous AI Fleet</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Meet Your New <span className="text-[#E59500]">Digital Workforce.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Unlike static software that sits waiting for human input, Muru AI Agents monitor real-world events,
            apply reasoning, and execute multi-step procedures across your business systems 24/7.
          </p>
        </div>

        {/* Central Core Diagram Header */}
        <div className="mb-10 p-6 sm:p-8 rounded-2xl glass-card border border-white/[0.08] bg-black/40 text-center">
          <div className="max-w-xl mx-auto mb-6">
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-gradient-to-br from-[#E59500] to-[#995C00] shadow-[0_0_30px_rgba(229,149,0,0.35)] mb-2">
              <span className="font-display font-black text-black text-sm sm:text-base tracking-wider">
                MURU AI CORE ORCHESTRATOR
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-1">
              Central intelligence hub routing business memory, RBAC security boundaries, and SLA rules to
              specialized agent nodes.
            </p>
          </div>

          {/* Agent Selection Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
            {AUTONOMOUS_AGENTS_DATA.map((agent) => {
              const isSelected = agent.id === selectedAgentId;
              return (
                <button
                  key={agent.id}
                  onClick={() => {
                    setSelectedAgentId(agent.id);
                    setSimulationStep(0);
                  }}
                  className={`p-3 sm:p-3.5 rounded-xl text-center transition-all duration-200 border flex flex-col items-center justify-center gap-2 cursor-pointer active:scale-95 last:col-span-2 sm:last:col-span-1 ${
                    isSelected
                      ? 'bg-[#E59500]/15 border-[#E59500] shadow-[0_0_20px_rgba(229,149,0,0.2)] -translate-y-0.5 sm:-translate-y-1'
                      : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.15]'
                  }`}
                >
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-[#E59500]' : 'bg-white/[0.06]'
                    }`}
                  >
                    {getAgentIcon(agent.id, isSelected)}
                  </div>

                  <div>
                    <div className={`text-xs font-bold ${isSelected ? 'text-white' : 'text-zinc-300'}`}>
                      {agent.name}
                    </div>
                    <div className="text-[10px] text-zinc-500 truncate max-w-[110px] mt-0.5 font-mono">
                      {agent.role}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Agent Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeAgent.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch"
          >
            {/* Left Card: Profile & Capabilities */}
            <div className="lg:col-span-6 rounded-2xl glass-card border border-white/[0.08] p-4.5 sm:p-8 flex flex-col justify-between text-left">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-mono text-emerald-400 font-bold tracking-wider">
                      STATUS: {activeAgent.status}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-zinc-400">
                    <span>Latency: <strong className="text-white">{activeAgent.avgLatency}</strong></span>
                    <span>•</span>
                    <span>Accuracy: <strong className="text-emerald-400">{activeAgent.accuracyRate}</strong></span>
                  </div>
                </div>

                <h3 className="font-display text-xl sm:text-3xl font-extrabold text-white">
                  {activeAgent.name}
                </h3>
                <div className="text-xs font-mono text-[#E59500] font-semibold mt-1">
                  {activeAgent.role}
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 mt-3 sm:mt-4 leading-relaxed">
                  {activeAgent.description}
                </p>

                {/* Capabilities */}
                <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-white/[0.06] space-y-2 sm:space-y-2.5">
                  <div className="text-xs font-mono uppercase font-bold text-zinc-400 tracking-wider">
                    Agent Capabilities:
                  </div>
                  {activeAgent.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start sm:items-center gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E59500] flex-shrink-0 mt-0.5 sm:mt-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>

                {/* Connected Tools */}
                <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-white/[0.06]">
                  <div className="text-xs font-mono uppercase font-bold text-zinc-400 tracking-wider mb-2 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#E59500]" /> Connected Tools & Integrations:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeAgent.connectedSystems.map((tool, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-zinc-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6 sm:mt-8 pt-4 border-t border-white/[0.06]">
                <button
                  onClick={() => onDeployAgent(activeAgent.name)}
                  className="w-full py-3 px-5 rounded-xl font-display font-semibold text-xs sm:text-sm text-black bg-gradient-to-r from-[#E59500] to-[#CC7A00] hover:shadow-lg hover:shadow-[#E59500]/20 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Deploy {activeAgent.name} in My Stack</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>
              </div>
            </div>

            {/* Right Card: Interactive Simulation Console */}
            <div className="lg:col-span-6 rounded-2xl glass-card border border-white/[0.08] p-4.5 sm:p-8 flex flex-col justify-between text-left bg-black/60">
              <div>
                <div className="flex items-center justify-between pb-3.5 sm:pb-4 mb-3.5 sm:mb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-[#E59500] flex-shrink-0" />
                    <span className="text-[11px] sm:text-xs font-mono text-zinc-300 font-bold uppercase tracking-wider truncate">
                      Telemetry & Execution Log
                    </span>
                  </div>

                  <button
                    onClick={handleRunSimulation}
                    disabled={isSimulating}
                    className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs font-mono font-medium bg-[#E59500]/15 text-[#E59500] border border-[#E59500]/30 hover:bg-[#E59500]/25 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50 flex-shrink-0"
                  >
                    {isSimulating ? (
                      <RotateCw className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Play className="w-3.5 h-3.5 fill-current" />
                    )}
                    <span>{isSimulating ? 'Processing...' : 'Run Simulation'}</span>
                  </button>
                </div>

                {/* Trigger Section */}
                <div className="mb-4">
                  <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-400" /> Event Trigger:
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-zinc-200">
                    {activeAgent.sampleTrigger}
                  </div>
                </div>

                {/* Simulated Execution State */}
                <div className="space-y-2 mb-4">
                  <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-sky-400" /> Reasoning Trace:
                  </div>

                  <div className="p-3.5 rounded-xl bg-black/80 border border-white/[0.06] space-y-2 font-mono text-xs">
                    <div className="flex items-center gap-2 text-zinc-400">
                      <span className="text-emerald-400">✓</span>
                      <span>[0.0s] Inbound event sanitized & matched against SLA parameters</span>
                    </div>

                    <div
                      className={`flex items-center gap-2 transition-opacity ${
                        simulationStep >= 1 ? 'text-zinc-300 opacity-100' : 'text-zinc-600 opacity-40'
                      }`}
                    >
                      <span className={simulationStep >= 1 ? 'text-emerald-400' : 'text-zinc-600'}>
                        ✓
                      </span>
                      <span>[0.4s] Knowledge embeddings retrieved (similarity score 0.96)</span>
                    </div>

                    <div
                      className={`flex items-center gap-2 transition-opacity ${
                        simulationStep >= 2 ? 'text-zinc-300 opacity-100' : 'text-zinc-600 opacity-40'
                      }`}
                    >
                      <span className={simulationStep >= 2 ? 'text-emerald-400' : 'text-zinc-600'}>
                        ✓
                      </span>
                      <span>[0.9s] Multi-step actions prepared across connected APIs</span>
                    </div>
                  </div>
                </div>

                {/* Action Taken Section */}
                <div>
                  <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Autonomous Output:
                  </div>
                  <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300 leading-relaxed">
                    {activeAgent.sampleAction}
                  </div>
                </div>
              </div>

              {/* Footnote */}
              <div className="mt-6 pt-3 border-t border-white/[0.05] text-[11px] text-zinc-500 font-mono flex items-center justify-between">
                <span>Enterprise SLA Guaranteed</span>
                <span>Zero Hallucination Guardrails</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
