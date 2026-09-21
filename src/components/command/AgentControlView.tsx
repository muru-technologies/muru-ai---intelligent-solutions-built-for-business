import React, { useState } from 'react';
import {
  Bot,
  Play,
  Pause,
  Settings,
  ListFilter,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Clock,
  Zap,
  Activity,
  X,
  Radio,
  Sliders,
  Sparkles
} from 'lucide-react';
import { DETAILED_AGENTS } from '../../data/commandCenterData';
import { DetailedAgent } from '../../types';

export const AgentControlView: React.FC = () => {
  const [agents, setAgents] = useState<DetailedAgent[]>(DETAILED_AGENTS);
  const [selectedAgent, setSelectedAgent] = useState<DetailedAgent | null>(DETAILED_AGENTS[0]);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(3);
  const [testExecutionOutput, setTestExecutionOutput] = useState<string | null>(null);
  const [isExecutingTest, setIsExecutingTest] = useState<boolean>(false);

  const toggleAgentStatus = (agentId: string) => {
    setAgents((prev) =>
      prev.map((a) => {
        if (a.id === agentId) {
          const nextStatus = a.status === 'ACTIVE' ? 'PAUSED' : 'ACTIVE';
          return { ...a, status: nextStatus };
        }
        return a;
      })
    );

    if (selectedAgent && selectedAgent.id === agentId) {
      setSelectedAgent((prev) =>
        prev
          ? {
              ...prev,
              status: prev.status === 'ACTIVE' ? 'PAUSED' : 'ACTIVE'
            }
          : null
      );
    }
  };

  const handleRunManualTest = () => {
    if (!selectedAgent) return;
    setIsExecutingTest(true);
    setTestExecutionOutput(null);

    setTimeout(() => {
      setIsExecutingTest(false);
      setTestExecutionOutput(
        `[${new Date().toLocaleTimeString()}] Pipeline executed successfully. Intent confidence: 99.2%. Latency: 118ms. Payload dispatched to enterprise webhook.`
      );
    }, 1200);
  };

  return (
    <div className="space-y-8 text-left">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.07]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#E59500] mb-2">
            Autonomic Fleet Manager
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            AI AGENT FLEET
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Monitor, orchestrate, and configure specialized autonomous AI employees.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-zinc-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>5 Specialized Agents Active</span>
          </div>
        </div>
      </div>

      {/* Grid of Agent Cards as specified */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {agents.map((agent) => {
          const isSelected = selectedAgent?.id === agent.id;
          const isPaused = agent.status === 'PAUSED';

          return (
            <div
              key={agent.id}
              className={`p-6 rounded-2xl glass-card border transition-all duration-300 flex flex-col justify-between group ${
                isSelected
                  ? 'border-[#E59500] bg-[#0E121A] shadow-xl shadow-[#E59500]/10'
                  : 'border-white/[0.08] hover:border-white/[0.18]'
              }`}
            >
              <div>
                {/* Status Indicator */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isPaused ? 'bg-amber-400' : 'bg-emerald-400 animate-pulse'
                      }`}
                    />
                    <span
                      className={`text-[11px] font-mono font-bold tracking-wider ${
                        isPaused ? 'text-amber-400' : 'text-emerald-400'
                      }`}
                    >
                      {agent.status}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono text-zinc-500">
                    {agent.model}
                  </span>
                </div>

                {/* Agent Title & Tagline */}
                <h3 className="text-lg font-bold text-white tracking-tight mb-1 group-hover:text-[#E59500] transition-colors">
                  {agent.name.toUpperCase()}
                </h3>
                <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                  {agent.tagline}
                </p>

                {/* Metrics Table */}
                <div className="space-y-2 py-3 border-y border-white/[0.06] text-xs font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-500">Tasks today</span>
                    <span className="font-bold text-white">{agent.tasksToday}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-500">Success rate</span>
                    <span className="font-bold text-emerald-400">{agent.successRate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-500">Inference latency</span>
                    <span className="text-zinc-300">{agent.latency}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-5 mt-2 flex items-center gap-2">
                <button
                  onClick={() => setSelectedAgent(agent)}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-semibold text-white bg-white/[0.05] hover:bg-[#E59500] hover:text-black border border-white/[0.08] hover:border-transparent transition-all"
                >
                  <span>OPEN AGENT</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => toggleAgentStatus(agent.id)}
                  className={`p-2 rounded-xl border text-xs transition-colors ${
                    isPaused
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                      : 'bg-white/[0.04] border-white/[0.08] text-zinc-400 hover:text-white'
                  }`}
                  title={isPaused ? 'Resume Agent' : 'Pause Agent'}
                >
                  {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Section 7: Agent Detail Futuristic Control Console */}
      {selectedAgent && (
        <div className="rounded-3xl glass-card border border-[#E59500]/40 p-6 sm:p-8 bg-[#0A0D13] relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#E59500]/10 border border-[#E59500]/30 flex items-center justify-center text-[#E59500]">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-display">
                    {selectedAgent.name.toUpperCase()}
                  </h3>
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>ONLINE</span>
                  </div>
                </div>
                <p className="text-xs text-zinc-400 mt-0.5">
                  {selectedAgent.tagline} • Model: {selectedAgent.model}
                </p>
              </div>
            </div>

            {/* Futuristic Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleAgentStatus(selectedAgent.id)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-zinc-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] transition-colors"
              >
                {selectedAgent.status === 'PAUSED' ? (
                  <>
                    <Play className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Resume Agent</span>
                  </>
                ) : (
                  <>
                    <Pause className="w-3.5 h-3.5 text-amber-400" />
                    <span>Pause Agent</span>
                  </>
                )}
              </button>

              <button
                onClick={handleRunManualTest}
                disabled={isExecutingTest}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-black bg-[#E59500] hover:bg-[#F5A31A] transition-colors disabled:opacity-50"
              >
                <Zap className="w-3.5 h-3.5" />
                <span>{isExecutingTest ? 'Executing...' : 'Trigger Pipeline Test'}</span>
              </button>
            </div>
          </div>

          {/* Current Activity Box */}
          <div className="mb-8 p-4 rounded-xl bg-black/50 border border-white/[0.06] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Radio className="w-4 h-4 text-[#E59500] animate-pulse flex-shrink-0" />
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                  CURRENT ACTIVITY
                </span>
                <span className="text-xs sm:text-sm font-mono text-zinc-200">
                  {selectedAgent.currentActivity}
                </span>
              </div>
            </div>

            <span className="text-[11px] font-mono text-emerald-400 hidden sm:block">
              Active Context: 8,490 tokens
            </span>
          </div>

          {/* Futuristic Execution Pipeline Visualizer:
              INPUT → CUSTOMER MESSAGE → AI ANALYSIS → INTENT DETECTION → LEAD SCORING → CRM */}
          <div className="mb-8">
            <div className="text-xs font-mono uppercase tracking-widest text-[#E59500] font-bold mb-4">
              Real-Time Inference Pipeline
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {selectedAgent.pipeline.map((p, idx) => {
                const isStepActive = idx === activeStepIndex;
                const isCompleted = idx < activeStepIndex;

                return (
                  <div
                    key={p.step}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                      isStepActive
                        ? 'bg-[#E59500]/15 border-[#E59500] shadow-md shadow-[#E59500]/10'
                        : isCompleted
                        ? 'bg-white/[0.03] border-emerald-500/30'
                        : 'bg-black/30 border-white/[0.05] opacity-60'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-mono text-zinc-500">
                          {p.step}
                        </span>
                        {isCompleted ? (
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        ) : isStepActive ? (
                          <span className="w-2 h-2 rounded-full bg-[#E59500] animate-ping" />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                        )}
                      </div>
                      <div className="text-xs font-bold text-white leading-tight">
                        {p.label}
                      </div>
                    </div>

                    <div className="text-[10px] text-zinc-400 mt-2 truncate">
                      {p.sublabel}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Test Execution Output Banner */}
          {testExecutionOutput && (
            <div className="mb-6 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300">
              {testExecutionOutput}
            </div>
          )}

          {/* Recent Agent Activity Logs */}
          <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
            <div className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider mb-3">
              Recent Autonomous Actions
            </div>
            <div className="space-y-2 text-xs font-mono text-zinc-400">
              {selectedAgent.recentActions.map((act, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-[#E59500]">▸</span>
                  <span>{act}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
