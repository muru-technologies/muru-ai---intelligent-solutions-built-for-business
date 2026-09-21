import React, { useState } from 'react';
import { 
  Cpu, 
  MessageSquareText, 
  Workflow, 
  Layers, 
  Network, 
  LineChart, 
  ArrowRight, 
  CheckCircle2,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { AI_SERVICES } from '../data/muruData';
import { AIService } from '../types';

interface AiServicesProps {
  onSelectService: (service: AIService) => void;
}

export const AiServices: React.FC<AiServicesProps> = ({ onSelectService }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('ai-agents');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#E59500]" />;
      case 'MessageSquareText':
        return <MessageSquareText className="w-6 h-6 text-[#E59500]" />;
      case 'Workflow':
        return <Workflow className="w-6 h-6 text-[#E59500]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#E59500]" />;
      case 'Network':
        return <Network className="w-6 h-6 text-[#E59500]" />;
      case 'LineChart':
      default:
        return <LineChart className="w-6 h-6 text-[#E59500]" />;
    }
  };

  return (
    <section id="services" className="py-24 relative border-t border-white/[0.05] tech-grid-pattern">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E59500]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-[#E59500] mb-4">
            Comprehensive Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            AI solutions designed around the way <br className="hidden sm:inline" />
            <span className="text-[#E59500]">your business works.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            We reject one-size-fits-all gimmicks. Every Muru AI service is engineered to solve concrete commercial problems, integrate seamlessly with legacy stacks, and return measurable ROI.
          </p>
        </div>

        {/* 6 Large Visual Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AI_SERVICES.map((service) => {
            const isSelected = selectedServiceId === service.id;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedServiceId(service.id)}
                className={`group relative rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-[#11141C] border-2 border-[#E59500] shadow-[0_10px_30px_rgba(229,149,0,0.15)]'
                    : 'glass-card border border-white/[0.08] hover:border-white/[0.2] hover:bg-[#0E1015]'
                }`}
              >
                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="font-mono text-xl font-extrabold text-zinc-600 group-hover:text-[#E59500] transition-colors">
                      {service.number}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#E59500] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Specific Capabilities List */}
                  <div className="space-y-2 pt-4 border-t border-white/[0.06] mb-6">
                    <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                      Key Capabilities
                    </div>
                    {service.capabilities.slice(0, 4).map((cap, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E59500] mt-0.5 flex-shrink-0" />
                        <span className="leading-snug">{cap}</span>
                      </div>
                    ))}
                  </div>

                  {/* Example use cases if any */}
                  {service.examples && (
                    <div className="mb-6 flex flex-wrap gap-1.5">
                      {service.examples.map((ex, i) => (
                        <span key={i} className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/[0.04] text-zinc-400 border border-white/[0.05]">
                          {ex}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectService(service);
                    }}
                    className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl font-semibold text-xs text-white bg-white/[0.04] group-hover:bg-[#E59500] group-hover:text-black transition-all border border-white/[0.08] group-hover:border-transparent"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Dynamic Interactive Service Architecture Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl glass-card border border-[#E59500]/20 bg-gradient-to-r from-black/60 via-[#12151D]/60 to-black/60 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-xs uppercase tracking-widest text-[#E59500] font-bold">
              Custom Architecture Guarantee
            </div>
            <h4 className="text-lg font-bold text-white">
              Need a bespoke combination of agents, integrations, and automation?
            </h4>
            <p className="text-xs text-zinc-400 max-w-2xl">
              We design composite systems where WhatsApp bots route to custom agents, sync across databases, and deliver automated executive summaries.
            </p>
          </div>
          <button
            onClick={() => onSelectService(AI_SERVICES[3])}
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm text-black bg-[#E59500] hover:bg-[#F5A31A] shadow-lg shadow-[#E59500]/20 transition-all"
          >
            <span>Request Custom Solution Architecture</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
