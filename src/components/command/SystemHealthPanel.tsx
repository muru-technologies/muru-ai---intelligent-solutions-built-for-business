import React from 'react';
import { ShieldCheck, Activity, Radio, Cpu, RefreshCw, Terminal, CheckCircle2 } from 'lucide-react';
import { SYSTEM_SERVICES, COMMAND_CENTER_METRICS } from '../../data/commandCenterData';

export const SystemHealthPanel: React.FC = () => {
  return (
    <div className="rounded-3xl glass-card border border-white/[0.08] p-6 sm:p-8 bg-[#090C11] text-left">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/[0.07] mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#E59500] font-bold">
              Infrastructure Diagnostics
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-display">
            SYSTEM STATUS & TELEMETRY
          </h3>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
          <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08]">
            Heartbeat: 1000ms
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold">
            HEALTH: 98.7%
          </span>
        </div>
      </div>

      {/* Futuristic Monitoring Matrix:
          AI CORE             ● ONLINE
          AGENTS              ● ONLINE
          DATABASE             ● ONLINE
          API                  ● ONLINE
          AUTOMATIONS          ● ONLINE
          KNOWLEDGE ENGINE     ● ONLINE
          INTEGRATIONS         ● ONLINE */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
        {SYSTEM_SERVICES.map((srv) => (
          <div
            key={srv.name}
            className="p-3.5 rounded-xl bg-black/40 border border-white/[0.05] hover:border-white/[0.12] transition-colors flex items-center justify-between"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono font-semibold text-zinc-200">
                {srv.name}
              </span>
            </div>

            <div className="flex items-center gap-3 text-[11px] font-mono">
              <span className="text-zinc-500">{srv.latency}</span>
              <span className="font-bold text-emerald-400 px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                ONLINE
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Latency, API Requests, Error Rate Metrics Banner as specified */}
      <div className="p-5 rounded-2xl bg-black/60 border border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1">
            Global Median Latency
          </div>
          <div className="text-3xl font-extrabold text-white font-mono">
            {COMMAND_CENTER_METRICS.totalLatency}
          </div>
          <div className="text-[10px] font-mono text-emerald-400 mt-1">
            p99: 210ms • p50: 84ms
          </div>
        </div>

        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1">
            Total API Requests
          </div>
          <div className="text-3xl font-extrabold text-[#E59500] font-mono">
            {COMMAND_CENTER_METRICS.apiRequestsToday}
          </div>
          <div className="text-[10px] font-mono text-zinc-400 mt-1">
            Today across all client gateways
          </div>
        </div>

        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1">
            System Error Rate
          </div>
          <div className="text-3xl font-extrabold text-emerald-400 font-mono">
            {COMMAND_CENTER_METRICS.errorRate}
          </div>
          <div className="text-[10px] font-mono text-zinc-400 mt-1">
            Sub-millisecond failover protection
          </div>
        </div>
      </div>

    </div>
  );
};
