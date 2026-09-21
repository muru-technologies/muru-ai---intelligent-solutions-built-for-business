import React from 'react';
import { Zap, Bot, BarChart3, ArrowRight, Check } from 'lucide-react';
import { AI_FOR_BUSINESS_PILLARS } from '../data/muruData';

interface AiForBusinessProps {
  onLearnMore: (pillarId: string) => void;
}

export const AiForBusiness: React.FC<AiForBusinessProps> = ({ onLearnMore }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#E59500]" />;
      case 'Bot':
        return <Bot className="w-6 h-6 text-[#E59500]" />;
      case 'BarChart3':
      default:
        return <BarChart3 className="w-6 h-6 text-[#E59500]" />;
    }
  };

  return (
    <section id="ai-for-business" className="py-24 relative border-t border-white/[0.05] bg-[#0A0C0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-[#E59500] mb-4">
            The Business Reality
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Your business already has the data. <br />
            Your team already has the knowledge. <br />
            <span className="text-[#E59500]">Now make it intelligent.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Most companies do not suffer from a lack of information. They suffer from the friction of manual work, slow response times, and underutilized data. Muru AI bridges this gap.
          </p>
        </div>

        {/* Three Large Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {AI_FOR_BUSINESS_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="group relative rounded-2xl glass-card p-8 border border-white/[0.08] hover:border-[#E59500]/40 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-[#E59500]/10"
            >
              <div>
                {/* Header Icon & Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#E59500]/10 border border-[#E59500]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(pillar.icon)}
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                    Pillar
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#E59500] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm font-semibold text-zinc-300 mb-4 leading-snug">
                  {pillar.tagline}
                </p>
                <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Key Features */}
                <div className="space-y-2.5 pt-4 border-t border-white/[0.06] mb-6">
                  {pillar.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-zinc-300">
                      <div className="w-4 h-4 rounded-full bg-[#E59500]/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#E59500]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Metric & Action */}
              <div className="pt-4 border-t border-white/[0.06]">
                <div className="text-xs font-mono text-[#E59500] mb-4 bg-[#E59500]/5 py-2 px-3 rounded-lg border border-[#E59500]/15">
                  ★ {pillar.metric}
                </div>
                <button
                  onClick={() => onLearnMore(pillar.id)}
                  className="w-full inline-flex items-center justify-between text-xs font-semibold text-zinc-300 group-hover:text-white py-2 px-1 transition-colors"
                >
                  <span>Explore {pillar.title} Solutions</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#E59500]" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
