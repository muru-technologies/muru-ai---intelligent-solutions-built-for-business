import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/muruData';

interface ProcessFlowProps {
  onStartConsultation: () => void;
}

export const ProcessFlow: React.FC<ProcessFlowProps> = ({ onStartConsultation }) => {
  return (
    <section id="process" className="py-24 relative border-t border-white/[0.05] bg-[#0A0C0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-[#E59500] mb-4">
            Predictable Delivery Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            How <span className="text-[#E59500]">Muru AI</span> Works.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            We follow an engineered, business-first framework that minimizes risk, protects sensitive company data, and guarantees production reliability.
          </p>
        </div>

        {/* Visual Workflow Ribbon as specified: DISCOVER → DESIGN → BUILD → INTEGRATE → LAUNCH → SCALE */}
        <div className="mb-14 overflow-x-auto pb-4">
          <div className="inline-flex items-center min-w-max p-3 rounded-2xl glass-card border border-[#E59500]/30 bg-black/40 gap-3">
            {['DISCOVER', 'DESIGN', 'BUILD', 'INTEGRATE', 'LAUNCH', 'SCALE'].map((stage, idx) => (
              <React.Fragment key={stage}>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E59500]" />
                  <span className="font-mono text-xs font-bold tracking-wider text-white">
                    {stage}
                  </span>
                </div>
                {idx < 5 && (
                  <span className="text-zinc-600 font-bold text-sm">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 6 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-2xl glass-card border border-white/[0.08] hover:border-[#E59500]/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-[#E59500]/5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-extrabold text-zinc-600 group-hover:text-[#E59500] transition-colors">
                    {step.number}
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500">
                    Phase {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-[#E59500] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-zinc-300 mb-3">
                  {step.tagline}
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06]">
                <div className="text-[10px] uppercase font-mono text-zinc-500 mb-1">
                  Tangible Deliverable:
                </div>
                <div className="text-xs font-medium text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{step.deliverable}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center">
          <button
            onClick={onStartConsultation}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-xs sm:text-sm text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.12] hover:border-[#E59500]/60 transition-all"
          >
            <span>Start Phase 01: Discover Your Opportunities</span>
            <ArrowRight className="w-4 h-4 text-[#E59500]" />
          </button>
        </div>

      </div>
    </section>
  );
};
