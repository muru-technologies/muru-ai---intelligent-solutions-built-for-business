import React, { useState, useEffect } from 'react';
import { Cpu, Zap, GitFork, Database, Network, RefreshCw, Activity, Sparkles } from 'lucide-react';

interface CommandCenterHeroCoreProps {
  onNavigateSection: (section: any) => void;
}

export const CommandCenterHeroCore: React.FC<CommandCenterHeroCoreProps> = ({
  onNavigateSection
}) => {
  const [coreMode, setCoreMode] = useState<'operational' | 'neural' | 'diagnostics'>('operational');
  const [pulseDegree, setPulseDegree] = useState<number>(0);
  const [activeNode, setActiveNode] = useState<string>('agents');

  // Animation frame loop for continuous orb rotation & pulse
  useEffect(() => {
    const timer = setInterval(() => {
      setPulseDegree((prev) => (prev + 1) % 360);
    }, 40);
    return () => clearInterval(timer);
  }, []);

  const satelliteNodes = [
    {
      id: 'agents',
      name: 'AGENTS',
      metric: '24 Active',
      status: 'AUTONOMIC',
      color: '#E59500',
      section: 'agents',
      x: '20%',
      y: '30%'
    },
    {
      id: 'workflows',
      name: 'WORKFLOWS',
      metric: '87 Running',
      status: 'HIGH-EFFICIENCY',
      color: '#10B981',
      section: 'workflows',
      x: '50%',
      y: '15%'
    },
    {
      id: 'data',
      name: 'DATA & RAG',
      metric: '4.8 GB Indexed',
      status: 'VECTOR SYNC',
      color: '#3B82F6',
      section: 'knowledge',
      x: '80%',
      y: '30%'
    },
    {
      id: 'integrations',
      name: 'INTEGRATIONS',
      metric: '18 Systems',
      status: 'ZERO-LATENCY',
      color: '#8B5CF6',
      section: 'integrations',
      x: '50%',
      y: '85%'
    }
  ];

  return (
    <div className="relative rounded-3xl glass-card border border-white/[0.08] p-6 sm:p-8 bg-[#090C11] overflow-hidden">
      
      {/* Top Header of the Core */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.07] relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#E59500] font-bold">
              Autonomous Neural Architecture
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            MURU AI CORE
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Intelligence systems operating normally across 24 distributed enterprise agent nodes.
          </p>
        </div>

        {/* Core Mode Switcher */}
        <div className="flex items-center p-1 rounded-xl bg-black/50 border border-white/[0.08]">
          {(['operational', 'neural', 'diagnostics'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setCoreMode(mode)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono capitalize transition-all ${
                coreMode === mode
                  ? 'bg-[#E59500] text-black font-bold shadow-md shadow-[#E59500]/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Main Centerpiece Visualization Stage */}
      <div className="relative min-h-[380px] sm:min-h-[420px] flex items-center justify-center my-4">
        
        {/* Background Radial Glow */}
        <div className="absolute w-72 h-72 rounded-full bg-[#E59500]/10 blur-[90px] pointer-events-none" />

        {/* Concentric Sci-Fi Radar Rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[320px] h-[320px] rounded-full border border-white/[0.04] animate-pulse-ring" />
          <div className="w-[440px] h-[440px] rounded-full border border-white/[0.025] hidden sm:block" />
          <div className="w-[560px] h-[560px] rounded-full border border-dashed border-white/[0.02] hidden md:block" />
        </div>

        {/* Center Orb: MURU AI CORE */}
        <div className="relative z-20 flex flex-col items-center justify-center group cursor-pointer">
          {/* Animated Glowing Rings */}
          <div
            className="w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-[#E59500]/40 flex items-center justify-center relative p-3 bg-gradient-to-b from-[#141824] to-[#0A0D14] shadow-[0_0_50px_rgba(229,149,0,0.2)]"
            style={{
              boxShadow: `0 0 45px rgba(229, 149, 0, ${0.15 + 0.1 * Math.sin(pulseDegree * 0.05)})`
            }}
          >
            {/* Spinning orbit ring */}
            <div
              className="absolute inset-0 rounded-full border-t border-b border-[#E59500]/60 pointer-events-none"
              style={{ transform: `rotate(${pulseDegree}deg)` }}
            />
            <div
              className="absolute inset-2 rounded-full border-l border-r border-emerald-400/40 pointer-events-none"
              style={{ transform: `rotate(-${pulseDegree * 1.5}deg)` }}
            />

            {/* Inner Core Surface */}
            <div className="w-full h-full rounded-full bg-black/80 flex flex-col items-center justify-center text-center p-2 border border-white/[0.1]">
              <Cpu className="w-6 h-6 text-[#E59500] mb-1 animate-pulse" />
              <div className="font-display font-black text-sm tracking-wider text-white">
                MURU CORE
              </div>
              <div className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>ONLINE</span>
              </div>
            </div>
          </div>

          <div className="mt-3 text-[11px] font-mono text-zinc-400 flex items-center gap-2">
            <span>Cognitive Latency: <strong className="text-white">24ms</strong></span>
            <span>•</span>
            <span>Throughput: <strong className="text-[#E59500]">4.2k evt/s</strong></span>
          </div>
        </div>

        {/* Radiating Satellite Nodes */}
        {satelliteNodes.map((node) => {
          const isCurrentActive = activeNode === node.id;
          return (
            <div
              key={node.id}
              onClick={() => {
                setActiveNode(node.id);
                onNavigateSection(node.section);
              }}
              className={`absolute z-20 cursor-pointer transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 ${
                isCurrentActive ? 'scale-105' : 'hover:scale-105'
              }`}
              style={{ left: node.x, top: node.y }}
            >
              <div className="p-3 sm:p-4 rounded-2xl glass-card border border-white/[0.08] hover:border-[#E59500]/50 bg-[#0E121A]/90 backdrop-blur-md shadow-xl text-left w-36 sm:w-44">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-zinc-400">
                    {node.name}
                  </span>
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: node.color }}
                  />
                </div>
                <div className="text-sm sm:text-base font-bold text-white mb-0.5">
                  {node.metric}
                </div>
                <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                  {node.status}
                </div>
              </div>
            </div>
          );
        })}

        {/* Vector Connecting Lines (SVG overlay) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-40 sm:opacity-60">
          {/* Top-Left: Agents */}
          <line x1="25%" y1="35%" x2="45%" y2="48%" stroke="#E59500" strokeWidth="1.5" strokeDasharray="4 4" />
          {/* Top-Center: Workflows */}
          <line x1="50%" y1="25%" x2="50%" y2="40%" stroke="#10B981" strokeWidth="1.5" strokeDasharray="4 4" />
          {/* Top-Right: Data */}
          <line x1="75%" y1="35%" x2="55%" y2="48%" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 4" />
          {/* Bottom-Center: Integrations */}
          <line x1="50%" y1="75%" x2="50%" y2="60%" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="4 4" />
        </svg>

      </div>

      {/* Bottom Telemetry Ticker */}
      <div className="pt-4 border-t border-white/[0.07] grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
        <div>
          <div className="text-[10px] font-mono text-zinc-500 uppercase">Token Velocity</div>
          <div className="text-sm font-mono font-bold text-white">48,290 / min</div>
        </div>
        <div>
          <div className="text-[10px] font-mono text-zinc-500 uppercase">Vector Cache Hit</div>
          <div className="text-sm font-mono font-bold text-emerald-400">99.4%</div>
        </div>
        <div>
          <div className="text-[10px] font-mono text-zinc-500 uppercase">Failover Redundancy</div>
          <div className="text-sm font-mono font-bold text-white">Active (VPC-East)</div>
        </div>
        <div>
          <div className="text-[10px] font-mono text-zinc-500 uppercase">Model Security</div>
          <div className="text-sm font-mono font-bold text-emerald-400">Isolated VPC</div>
        </div>
      </div>

    </div>
  );
};
