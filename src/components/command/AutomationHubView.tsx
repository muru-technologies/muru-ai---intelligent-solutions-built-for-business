import React, { useState } from 'react';
import { GitFork, Zap, Play, ArrowDown, CheckCircle2, Clock, Activity, Sparkles, RefreshCw } from 'lucide-react';
import { WORKFLOWS_DATA } from '../../data/commandCenterData';
import { WorkflowItem } from '../../types';

export const AutomationHubView: React.FC = () => {
  const [workflows, setWorkflows] = useState<WorkflowItem[]>(WORKFLOWS_DATA);
  const [selectedWorkflow, setSelectedWorkflow] = useState<WorkflowItem>(WORKFLOWS_DATA[0]);
  const [simulatingStep, setSimulatingStep] = useState<number | null>(null);

  const runSimulation = () => {
    setSimulatingStep(0);
    const totalNodes = selectedWorkflow.nodes.length;

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < totalNodes) {
        setSimulatingStep(step);
      } else {
        clearInterval(interval);
        setTimeout(() => setSimulatingStep(null), 1500);
      }
    }, 600);
  };

  return (
    <div className="space-y-8 text-left">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.07]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#E59500] mb-2">
            State Machine Orchestration
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            AUTOMATION HUB
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Autonomous multi-system workflows connecting AI reasoning directly to your enterprise tools.
          </p>
        </div>

        <button
          onClick={runSimulation}
          disabled={simulatingStep !== null}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-black bg-[#E59500] hover:bg-[#F5A31A] transition-colors disabled:opacity-50"
        >
          <Play className="w-4 h-4 fill-current" />
          <span>{simulatingStep !== null ? 'Simulating Workflow...' : 'Test Workflow Execution'}</span>
        </button>
      </div>

      {/* Workflow Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {workflows.map((wf) => {
          const isSelected = selectedWorkflow.id === wf.id;
          return (
            <button
              key={wf.id}
              onClick={() => {
                setSelectedWorkflow(wf);
                setSimulatingStep(null);
              }}
              className={`p-4 rounded-2xl border text-left transition-all ${
                isSelected
                  ? 'bg-[#10141D] border-[#E59500] shadow-lg shadow-[#E59500]/10'
                  : 'glass-card border-white/[0.07] hover:border-white/[0.15]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-mono text-[#E59500] font-bold">
                  {wf.code}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400">
                  {wf.status}
                </span>
              </div>
              <h3 className="text-sm font-bold text-white mb-2 leading-tight">
                {wf.name}
              </h3>
              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>Runs today: <strong className="text-white">{wf.runsToday}</strong></span>
                <span>Avg: <strong className="text-zinc-200">{wf.avgTime}</strong></span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Futuristic Visual Workflow Canvas */}
      <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/[0.08] bg-[#090C11] relative overflow-hidden">
        
        {/* Background Grid Accent */}
        <div className="absolute inset-0 tech-grid-pattern opacity-40 pointer-events-none" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/[0.06] mb-8 relative z-10">
          <div>
            <span className="text-xs font-mono text-[#E59500] uppercase tracking-wider">
              Selected Topology
            </span>
            <h3 className="text-xl font-bold text-white mt-0.5">
              {selectedWorkflow.name}
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Trigger Source: <span className="font-mono text-zinc-200">{selectedWorkflow.trigger}</span>
            </p>
          </div>

          <div className="mt-3 sm:mt-0 text-xs font-mono text-zinc-400">
            Node Count: <span className="text-white font-bold">{selectedWorkflow.nodes.length} Stages</span>
          </div>
        </div>

        {/* Visual Glass Nodes Flow as Requested:
            NEW CUSTOMER → AI CLASSIFICATION → LEAD QUALIFICATION → CRM UPDATE → FOLLOW-UP → SALES TEAM */}
        <div className="relative z-10 flex flex-col items-center gap-3 max-w-xl mx-auto py-2">
          {selectedWorkflow.nodes.map((node, index) => {
            const isSimulating = simulatingStep === index;
            const isPassed = simulatingStep !== null && simulatingStep > index;

            return (
              <React.Fragment key={node.id}>
                {/* Node Box (Futuristic Glass Component) */}
                <div
                  className={`w-full p-4 rounded-2xl transition-all duration-300 border flex items-center justify-between ${
                    isSimulating
                      ? 'bg-[#E59500]/20 border-[#E59500] shadow-[0_0_30px_rgba(229,149,0,0.3)] transform scale-102'
                      : isPassed
                      ? 'bg-emerald-500/10 border-emerald-500/30'
                      : 'glass-card border-white/[0.08] hover:border-white/[0.2]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center font-mono text-xs font-bold ${
                        isSimulating
                          ? 'bg-[#E59500] text-black animate-pulse'
                          : isPassed
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : 'bg-white/[0.04] text-zinc-400'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-white tracking-tight">
                        {node.label}
                      </h4>
                      <p className="text-[11px] text-zinc-400 font-mono">
                        {node.sublabel}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                      {node.type}
                    </span>
                    {isPassed ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : isSimulating ? (
                      <span className="w-2 h-2 rounded-full bg-[#E59500] animate-ping" />
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                    )}
                  </div>
                </div>

                {/* Down Arrow / Connector */}
                {index < selectedWorkflow.nodes.length - 1 && (
                  <div className="flex flex-col items-center my-0.5">
                    <div
                      className={`w-0.5 h-4 transition-colors ${
                        isPassed || isSimulating ? 'bg-[#E59500]' : 'bg-white/[0.1]'
                      }`}
                    />
                    <ArrowDown
                      className={`w-3.5 h-3.5 transition-colors ${
                        isPassed || isSimulating ? 'text-[#E59500]' : 'text-zinc-600'
                      }`}
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Live Simulation Banner */}
        {simulatingStep !== null && (
          <div className="mt-6 p-3 rounded-xl bg-[#E59500]/10 border border-[#E59500]/30 text-xs font-mono text-[#E59500] text-center">
            Simulating live packet routing: Step {simulatingStep + 1} of {selectedWorkflow.nodes.length} —{' '}
            {selectedWorkflow.nodes[simulatingStep].label} ({selectedWorkflow.nodes[simulatingStep].sublabel})
          </div>
        )}

      </div>

    </div>
  );
};
