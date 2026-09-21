import React, { useState } from 'react';
import { 
  Bot, 
  ArrowRight, 
  CheckCircle2, 
  Terminal, 
  Sparkles, 
  Share2, 
  UserCheck, 
  Search, 
  Cog, 
  BookOpen,
  Play
} from 'lucide-react';
import { MURU_AGENTS } from '../data/muruData';
import { AIAgent } from '../types';

interface AiAgentsShowcaseProps {
  onDeployAgent: (agent: AIAgent) => void;
}

export const AiAgentsShowcase: React.FC<AiAgentsShowcaseProps> = ({ onDeployAgent }) => {
  const [selectedAgentId, setSelectedAgentId] = useState<string>('sales-agent');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simulationStep, setSimulationStep] = useState<number>(3);

  const selectedAgent = MURU_AGENTS.find((a) => a.id === selectedAgentId) || MURU_AGENTS[0];

  const handleSimulate = () => {
    setIsSimulating(true);
    setSimulationStep(1);
    setTimeout(() => setSimulationStep(2), 700);
    setTimeout(() => setSimulationStep(3), 1500);
    setTimeout(() => setIsSimulating(false), 2000);
  };

  const getAgentIcon = (id: string) => {
    switch (id) {
      case 'sales-agent':
        return <UserCheck className="w-5 h-5" />;
      case 'support-agent':
        return <Bot className="w-5 h-5" />;
      case 'research-agent':
        return <Search className="w-5 h-5" />;
      case 'operations-agent':
        return <Cog className="w-5 h-5" />;
      case 'knowledge-agent':
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <section id="agents" className="py-24 relative border-t border-white/[0.05] tech-grid-pattern">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#E59500]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-[#E59500] mb-4">
            Autonomous Digital Staff
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Meet your <span className="text-[#E59500]">digital workforce.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Unlike static software that waits for human input, Muru AI Agents monitor events, make context-aware decisions, and execute multi-step operations across your systems 24/7.
          </p>
        </div>

        {/* Central Core & Agent Selector Radial Concept */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl glass-card border border-white/[0.08] bg-black/40">
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-gradient-to-br from-[#E59500] to-[#995C00] shadow-[0_0_30px_rgba(229,149,0,0.4)] mb-3">
              <span className="font-display font-black text-black text-xl tracking-wider">MURU AI CORE</span>
            </div>
            <p className="text-xs text-zinc-400">
              The central orchestration hub routing business context, security policies, and memory to specialized agents.
            </p>
          </div>

          {/* Agent Selection Buttons (Connected Nodes) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {MURU_AGENTS.map((agent) => {
              const isSelected = agent.id === selectedAgentId;
              return (
                <button
                  key={agent.id}
                  onClick={() => setSelectedAgentId(agent.id)}
                  className={`p-4 rounded-xl text-center transition-all duration-200 border flex flex-col items-center justify-center gap-2 ${
                    isSelected
                      ? 'bg-[#E59500]/15 border-[#E59500] shadow-[0_0_20px_rgba(229,149,0,0.2)] transform -translate-y-1'
                      : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.15]'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-[#E59500] text-black' : 'bg-white/[0.06] text-zinc-400'
                  }`}>
                    {getAgentIcon(agent.id)}
                  </div>
                  <div>
                    <div className={`text-xs font-bold ${isSelected ? 'text-white' : 'text-zinc-300'}`}>
                      {agent.name}
                    </div>
                    <div className="text-[10px] text-zinc-500 truncate max-w-[120px]">
                      {agent.role}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Deep Dive Agent Panel with Live Simulation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Agent Profile & Capabilities */}
          <div className="lg:col-span-6 rounded-2xl glass-card border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#E59500] font-semibold">
                  Autonomous Agent Profile
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Always-On (99.9% SLA)
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                {selectedAgent.name}
              </h3>
              <p className="text-sm font-semibold text-zinc-300 mb-4">
                {selectedAgent.tagline}
              </p>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                {selectedAgent.description}
              </p>

              {/* Core Capabilities */}
              <div className="space-y-2.5 pt-4 border-t border-white/[0.06] mb-6">
                <div className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                  Specialized Skills
                </div>
                {selectedAgent.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E59500] mt-0.5 flex-shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              {/* Connected Systems */}
              <div className="mb-6">
                <div className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-2">
                  Native System Integrations
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedAgent.connectedSystems.map((sys) => (
                    <span
                      key={sys}
                      className="px-2.5 py-1 rounded text-xs bg-white/[0.04] text-zinc-300 border border-white/[0.07]"
                    >
                      {sys}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06]">
              <button
                onClick={() => onDeployAgent(selectedAgent)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-black bg-[#E59500] hover:bg-[#F5A31A] shadow-lg shadow-[#E59500]/20 transition-all"
              >
                <span>Deploy {selectedAgent.name} for Your Team</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Live Interactive Agent Execution Sandbox */}
          <div className="lg:col-span-6 rounded-2xl glass-card border border-white/[0.08] p-6 sm:p-8 bg-[#090B0E] flex flex-col justify-between">
            <div>
              {/* Terminal header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-mono text-zinc-300 font-medium">
                    Execution Log: {selectedAgent.id}.muru.runtime
                  </span>
                </div>
                <button
                  onClick={handleSimulate}
                  disabled={isSimulating}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-white/[0.06] hover:bg-white/[0.12] text-zinc-200 border border-white/[0.1] transition-all disabled:opacity-50"
                >
                  <Play className="w-3 h-3 text-[#E59500]" />
                  <span>{isSimulating ? 'Simulating...' : 'Run Simulation'}</span>
                </button>
              </div>

              {/* Execution steps visualization */}
              <div className="space-y-4 font-mono text-xs">
                
                {/* Step 1: Trigger */}
                <div className={`p-3 rounded-lg border transition-all ${
                  simulationStep >= 1 ? 'bg-black/50 border-white/[0.1]' : 'opacity-40 border-transparent'
                }`}>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">
                    [01] INCOMING EVENT TRIGGER
                  </div>
                  <div className="text-zinc-200 font-sans">
                    {selectedAgent.sampleTrigger}
                  </div>
                </div>

                {/* Step 2: Autonomous Reasoning */}
                <div className={`p-3 rounded-lg border transition-all ${
                  simulationStep >= 2 ? 'bg-[#E59500]/5 border-[#E59500]/30' : 'opacity-40 border-transparent'
                }`}>
                  <div className="text-[10px] text-[#E59500] uppercase tracking-wider mb-1 flex items-center justify-between">
                    <span>[02] AGENT DELIBERATION & POLICIES</span>
                    <span className="text-[9px] text-zinc-500">Latency: 140ms</span>
                  </div>
                  <div className="text-zinc-300 font-sans text-xs">
                    Evaluated against company compliance rules, historical embeddings, and target CRM schema.
                  </div>
                </div>

                {/* Step 3: Action Execution */}
                <div className={`p-3 rounded-lg border transition-all ${
                  simulationStep >= 3 ? 'bg-emerald-500/5 border-emerald-500/30' : 'opacity-40 border-transparent'
                }`}>
                  <div className="text-[10px] text-emerald-400 uppercase tracking-wider mb-1 flex items-center justify-between">
                    <span>[03] VERIFIED BUSINESS OUTCOME</span>
                    <span className="text-[9px] text-emerald-400">Status: SUCCESS</span>
                  </div>
                  <div className="text-zinc-200 font-sans font-medium text-xs">
                    {selectedAgent.sampleAction}
                  </div>
                </div>

              </div>
            </div>

            {/* Note */}
            <div className="pt-4 mt-6 border-t border-white/[0.06] text-xs text-zinc-500 flex items-center justify-between">
              <span>All agent actions maintain a full audit trail.</span>
              <span className="text-[#E59500] font-mono">Zero Hallucination Guard</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
