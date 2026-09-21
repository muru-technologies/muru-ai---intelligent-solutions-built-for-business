import React from 'react';
import { Target, CheckCircle2, GitMerge, TrendingUp, ShieldCheck } from 'lucide-react';
import { WHY_MURU_AI } from '../data/muruData';

export const WhyMuruAi: React.FC = () => {
  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Target':
        return <Target className="w-6 h-6 text-[#E59500]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-[#E59500]" />;
      case 'GitMerge':
        return <GitMerge className="w-6 h-6 text-[#E59500]" />;
      case 'TrendingUp':
      default:
        return <TrendingUp className="w-6 h-6 text-[#E59500]" />;
    }
  };

  return (
    <section id="why-us" className="py-24 relative border-t border-white/[0.05] tech-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-[#E59500] mb-4">
            The Muru Difference
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            AI should solve problems, <br />
            <span className="text-[#E59500]">not create new ones.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Too many AI initiatives stall as expensive experiments that never reach real users. Muru AI is structured differently from traditional software agencies.
          </p>
        </div>

        {/* Four Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_MURU_AI.map((pillar) => (
            <div
              key={pillar.pillar}
              className="p-7 rounded-2xl glass-card border border-white/[0.08] hover:border-[#E59500]/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-[#E59500]/10"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {getPillarIcon(pillar.icon)}
                </div>

                <div className="text-xs font-mono uppercase tracking-widest text-[#E59500] font-bold mb-2">
                  {pillar.pillar}
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#E59500] transition-colors leading-snug">
                  {pillar.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center gap-2 text-[11px] font-mono text-zinc-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Enterprise Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
