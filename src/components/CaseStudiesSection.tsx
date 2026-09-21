import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, Cpu, X } from 'lucide-react';
import { CASE_STUDIES } from '../data/muruData';
import { CaseStudy } from '../types';

interface CaseStudiesSectionProps {
  onStartProject: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onStartProject }) => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  return (
    <section id="case-studies" className="py-24 relative border-t border-white/[0.05] bg-[#08090B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-[#E59500] mb-4">
            Proven Commercial Results
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Case Studies in <br />
            <span className="text-[#E59500]">Business Intelligence.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Real enterprise transformations. No vanity metrics—we measure success in operational hours saved, lead conversion increases, and automated revenue pipelines.
          </p>
        </div>

        {/* Storytelling Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="rounded-2xl glass-card border border-white/[0.08] hover:border-[#E59500]/40 transition-all duration-300 p-7 flex flex-col justify-between group hover:shadow-2xl hover:shadow-[#E59500]/10"
            >
              <div>
                {/* Category & Client Type */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono text-[#E59500] font-semibold uppercase tracking-wider">
                    {study.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#E59500] transition-colors">
                  {study.title}
                </h3>
                
                <p className="text-xs text-zinc-400 mb-6 italic">
                  Client: {study.clientType}
                </p>

                {/* The Challenge */}
                <div className="mb-5 p-3.5 rounded-xl bg-black/40 border border-white/[0.04]">
                  <div className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
                    The Challenge
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                {/* The Solution */}
                <div className="mb-5 p-3.5 rounded-xl bg-[#E59500]/[0.03] border border-[#E59500]/15">
                  <div className="text-[11px] font-bold text-[#E59500] uppercase tracking-wider mb-1">
                    The Muru AI Solution
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {study.solution}
                  </p>
                </div>

                {/* What It Does */}
                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
                    What It Does:
                  </div>
                  {study.whatItDoes.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E59500] mt-0.5 flex-shrink-0" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Technology Tags */}
                <div className="mb-6">
                  <div className="text-[10px] uppercase font-mono text-zinc-500 mb-2">
                    Technology Stack:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {study.technology.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/[0.04] text-zinc-400 border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics Highlight */}
                <div className="grid grid-cols-2 gap-2 pt-4 border-t border-white/[0.06] mb-4">
                  {study.metrics.slice(0, 2).map((m, i) => (
                    <div key={i} className="p-2 rounded bg-white/[0.02] text-center border border-white/[0.04]">
                      <div className="text-lg font-extrabold text-[#E59500] font-mono">{m.value}</div>
                      <div className="text-[10px] text-zinc-400">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* View Full Case Study CTA */}
              <button
                onClick={() => setSelectedCaseStudy(study)}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-zinc-200 hover:text-white bg-white/[0.04] hover:bg-[#E59500] hover:text-black transition-all border border-white/[0.08] hover:border-transparent"
              >
                <span>View Full Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Modal for In-Depth Storytelling Case Study View */}
        {selectedCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="relative w-full max-w-2xl rounded-2xl glass-card border border-[#E59500]/40 p-6 sm:p-8 bg-[#0C0E14] max-h-[90vh] overflow-y-auto">
              
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-xs font-mono text-[#E59500] font-semibold uppercase tracking-wider mb-1">
                {selectedCaseStudy.category}
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {selectedCaseStudy.title}
              </h3>
              
              <p className="text-xs text-zinc-400 mb-6 italic">
                Client Sector: {selectedCaseStudy.clientType}
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                    The Business Problem
                  </h4>
                  <p className="text-sm text-zinc-300 leading-relaxed bg-black/40 p-4 rounded-xl border border-white/[0.05]">
                    {selectedCaseStudy.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-[#E59500] uppercase tracking-wider mb-2">
                    The Deployed Solution
                  </h4>
                  <p className="text-sm text-zinc-300 leading-relaxed bg-[#E59500]/5 p-4 rounded-xl border border-[#E59500]/20">
                    {selectedCaseStudy.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                    Functional Architecture
                  </h4>
                  <div className="space-y-2">
                    {selectedCaseStudy.whatItDoes.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-[#E59500] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                    Measurable Commercial Impact
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {selectedCaseStudy.metrics.map((metric, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-center">
                        <div className="text-xl font-bold text-[#E59500] font-mono">{metric.value}</div>
                        <div className="text-[11px] text-zinc-400 mt-1">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between">
                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="px-4 py-2 rounded-xl text-xs font-medium text-zinc-400 hover:text-white"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedCaseStudy(null);
                    onStartProject();
                  }}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-xs sm:text-sm text-black bg-[#E59500] hover:bg-[#F5A31A] transition-colors"
                >
                  <span>Build Similar Solution</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
