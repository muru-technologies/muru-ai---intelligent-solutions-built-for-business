import React from 'react';
import { Cpu, Code2, Database, Network, Sparkles, CheckCircle2 } from 'lucide-react';
import { TECH_ECOSYSTEM } from '../data/muruData';

export const TechnologySection: React.FC = () => {
  const getCategoryIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Cpu className="w-5 h-5 text-[#E59500]" />;
      case 1:
        return <Code2 className="w-5 h-5 text-[#E59500]" />;
      case 2:
        return <Database className="w-5 h-5 text-[#E59500]" />;
      case 3:
      default:
        return <Network className="w-5 h-5 text-[#E59500]" />;
    }
  };

  return (
    <section id="technology" className="py-24 relative border-t border-white/[0.05] bg-[#0A0C0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-[#E59500] mb-4">
            Pragmatic Engineering Stack
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Built with modern <br />
            <span className="text-[#E59500]">AI technology.</span>
          </h2>
        </div>

        {/* The Core Guiding Philosophy Banner - Emphasized by User */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl glass-card border border-[#E59500]/30 bg-gradient-to-r from-black/80 via-[#16130D]/80 to-black/80 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 max-w-3xl">
              <div className="text-xs uppercase tracking-widest font-mono text-[#E59500] font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Our Engineering Creed</span>
              </div>
              <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug">
                “We choose the technology based on the problem — not the other way around.”
              </blockquote>
              <p className="text-xs sm:text-sm text-zinc-400">
                We do not lock clients into proprietary vendor monopolies. We evaluate latency, data privacy, cloud residency, and per-token unit economics to select the perfect model and stack for your specific requirements.
              </p>
            </div>
            
            <div className="flex-shrink-0 p-4 rounded-xl bg-black/60 border border-white/[0.08] text-left">
              <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1">Architecture Standard</div>
              <div className="text-xs font-semibold text-white">Private VPC & Data Confidentiality</div>
              <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Zero Public Model Retraining</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Tech Ecosystem Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_ECOSYSTEM.map((cat, idx) => (
            <div
              key={cat.title}
              className="p-6 rounded-2xl glass-card border border-white/[0.08] flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-4">
                  {getCategoryIcon(idx)}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {cat.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {cat.description}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/[0.06]">
                {cat.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E59500]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
