import React, { useState, useEffect } from 'react';
import { Play, Pause, Filter, CheckCircle2, Zap, Clock, Radio } from 'lucide-react';
import { ActivityEvent } from '../../types';
import {
  INITIAL_ACTIVITY_EVENTS,
  SIMULATED_INCOMING_EVENTS
} from '../../data/commandCenterData';

export const LiveActivityFeed: React.FC = () => {
  const [events, setEvents] = useState<ActivityEvent[]>(INITIAL_ACTIVITY_EVENTS);
  const [isLiveStreaming, setIsLiveStreaming] = useState<boolean>(true);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [nextSimIndex, setNextSimIndex] = useState<number>(0);

  // Periodically inject realistic AI live events
  useEffect(() => {
    if (!isLiveStreaming) return;

    const interval = setInterval(() => {
      const simEvent = SIMULATED_INCOMING_EVENTS[nextSimIndex % SIMULATED_INCOMING_EVENTS.length];
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });

      const newEvent: ActivityEvent = {
        ...simEvent,
        id: `evt-${Date.now()}`,
        time: timeString
      };

      setEvents((prev) => [newEvent, ...prev.slice(0, 19)]);
      setNextSimIndex((prev) => prev + 1);
    }, 6000);

    return () => clearInterval(interval);
  }, [isLiveStreaming, nextSimIndex]);

  const filteredEvents = events.filter((evt) => {
    if (activeFilter === 'all') return true;
    return evt.category === activeFilter;
  });

  const getAgentColor = (category: string) => {
    switch (category) {
      case 'sales':
        return 'text-[#E59500] bg-[#E59500]/10 border-[#E59500]/20';
      case 'support':
        return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
      case 'workflow':
        return 'text-sky-400 bg-sky-400/10 border-sky-400/20';
      case 'knowledge':
        return 'text-purple-400 bg-purple-400/10 border-purple-400/20';
      case 'crm':
      default:
        return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
    }
  };

  return (
    <div className="rounded-2xl glass-card border border-white/[0.08] p-5 sm:p-6 bg-[#090C11] flex flex-col justify-between h-full">
      
      {/* Top Header Bar */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.07] mb-4">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              {isLiveStreaming && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              )}
              <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isLiveStreaming ? 'bg-emerald-500' : 'bg-zinc-600'}`} />
            </span>
            <h3 className="text-sm font-mono font-bold tracking-wider text-white uppercase">
              LIVE AI ACTIVITY
            </h3>
            <span className="text-[10px] font-mono text-zinc-500">
              ({events.length} logged)
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Pause / Resume Live Stream */}
            <button
              onClick={() => setIsLiveStreaming(!isLiveStreaming)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.07] text-zinc-300 transition-colors"
            >
              {isLiveStreaming ? (
                <>
                  <Pause className="w-3 h-3 text-[#E59500]" />
                  <span>Pause Stream</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 text-emerald-400" />
                  <span>Resume</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-3 text-[11px] font-mono">
          {['all', 'sales', 'support', 'workflow', 'knowledge', 'crm'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-2.5 py-1 rounded-lg capitalize transition-all whitespace-nowrap ${
                activeFilter === filter
                  ? 'bg-white/[0.1] text-white border border-white/[0.15] font-semibold'
                  : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.03]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Streaming Event Items List */}
        <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
          {filteredEvents.map((evt, idx) => (
            <div
              key={evt.id}
              className={`p-3 rounded-xl bg-black/40 border border-white/[0.04] hover:border-white/[0.1] transition-all flex items-start justify-between gap-3 text-left group ${
                idx === 0 ? 'border-l-2 border-l-[#E59500]' : ''
              }`}
            >
              <div className="flex items-start gap-2.5">
                {/* Monospace Timestamp */}
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 pt-0.5 whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E59500]" />
                  <span>{evt.time}</span>
                </div>

                {/* Event Message */}
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded border ${getAgentColor(
                        evt.category
                      )}`}
                    >
                      {evt.agent}
                    </span>
                    <span className="text-xs font-medium text-zinc-200 leading-snug">
                      {evt.action}
                    </span>
                  </div>
                </div>
              </div>

              {/* Latency badge */}
              <div className="text-[10px] font-mono text-zinc-500 whitespace-nowrap">
                {evt.latencyMs}ms
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer Info */}
      <div className="pt-3 mt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-zinc-500">
        <span className="flex items-center gap-1">
          <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
          <span>Telemetry channel: ws://muru.internal/feed</span>
        </span>
        <span>Auto-prune: 50 items</span>
      </div>

    </div>
  );
};
