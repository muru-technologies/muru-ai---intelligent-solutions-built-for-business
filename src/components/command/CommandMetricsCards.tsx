import React from 'react';
import { Bot, CheckCircle2, Zap, ShieldCheck, TrendingUp, Activity } from 'lucide-react';
import { COMMAND_CENTER_METRICS } from '../../data/commandCenterData';

export const CommandMetricsCards: React.FC = () => {
  const metrics = [
    {
      id: 'active-agents',
      label: 'ACTIVE AGENTS',
      value: COMMAND_CENTER_METRICS.activeAgents,
      badge: COMMAND_CENTER_METRICS.activeAgentsChange,
      badgeColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
      icon: Bot,
      status: 'Fleet Operational',
      sparkline: [18, 19, 21, 22, 22, 23, 24]
    },
    {
      id: 'tasks-processed',
      label: 'TASKS PROCESSED',
      value: COMMAND_CENTER_METRICS.tasksProcessedToday,
      badge: COMMAND_CENTER_METRICS.tasksLabel,
      badgeColor: 'text-[#E59500] bg-[#E59500]/10 border-[#E59500]/20',
      icon: Activity,
      status: '+310 vs Yesterday',
      sparkline: [1200, 1350, 1480, 1600, 1720, 1842]
    },
    {
      id: 'automations',
      label: 'AUTOMATIONS',
      value: COMMAND_CENTER_METRICS.automationsActive,
      badge: COMMAND_CENTER_METRICS.automationsLabel,
      badgeColor: 'text-sky-400 bg-sky-400/10 border-sky-400/20',
      icon: Zap,
      status: '100% Scheduled Runs',
      sparkline: [75, 78, 80, 84, 85, 87]
    },
    {
      id: 'uptime',
      label: 'SYSTEM UPTIME',
      value: COMMAND_CENTER_METRICS.systemUptime,
      badge: COMMAND_CENTER_METRICS.uptimeLabel,
      badgeColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
      icon: ShieldCheck,
      status: 'Zero Critical Outages',
      sparkline: [99.9, 99.8, 99.9, 99.7, 99.8, 98.7]
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((m) => {
        const Icon = m.icon;
        return (
          <div
            key={m.id}
            className="p-5 rounded-2xl glass-card border border-white/[0.08] hover:border-[#E59500]/30 transition-all duration-300 relative overflow-hidden group text-left"
          >
            {/* Top Indicator */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-400 font-semibold">
                {m.label}
              </span>
              <div className="w-7 h-7 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-zinc-400 group-hover:text-[#E59500] transition-colors">
                <Icon className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Metric Value */}
            <div className="flex items-baseline justify-between gap-2 mb-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono">
                {m.value}
              </div>
              <span
                className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${m.badgeColor}`}
              >
                {m.badge}
              </span>
            </div>

            {/* Mini subtle status bar */}
            <div className="pt-2 border-t border-white/[0.05] flex items-center justify-between text-[10px] font-mono text-zinc-500">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{m.status}</span>
              </span>

              {/* Minimal SVG Sparkline */}
              <div className="w-12 h-3 flex items-end gap-0.5 opacity-60">
                {m.sparkline.map((val, idx) => (
                  <div
                    key={idx}
                    className="flex-1 bg-[#E59500]/50 rounded-t-sm"
                    style={{
                      height: `${30 + (idx / m.sparkline.length) * 70}%`
                    }}
                  />
                ))}
              </div>
            </div>

          </div>
        );
      })}
    </div>
  );
};
