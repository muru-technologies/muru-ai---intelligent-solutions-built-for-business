import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Building2,
  TrendingUp,
  Clock,
  DollarSign,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Sparkles,
} from 'lucide-react';
import { CASE_STUDIES_DATA } from '../data/siteData';

interface CaseStudiesSectionProps {
  onDiscussProject: (caseStudyTitle: string) => void;
}

export default function CaseStudiesSection({ onDiscussProject }: CaseStudiesSectionProps) {
  const [activeCaseId, setActiveCaseId] = useState(CASE_STUDIES_DATA[0].id);

  const activeCase =
    CASE_STUDIES_DATA.find((c) => c.id === activeCaseId) || CASE_STUDIES_DATA[0];

  return (
    <section id="case-studies" className="py-24 relative bg-[#090B0E] border-t border-white/[0.05]">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#E59500]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-[#E59500] mb-4">
              <Building2 className="w-3.5 h-3.5" />
              <span>Proven Enterprise Deployments</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Real Impact.{' '}
              <span className="text-[#E59500]">Measured Numbers.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-400">
              Explore how leading East African and international enterprises use Muru AI to resolve thousands
              of customer touchpoints, automate back-office ledgers, and scale revenue.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex flex-nowrap sm:flex-wrap gap-2 overflow-x-auto no-scrollbar pb-1">
            {CASE_STUDIES_DATA.map((cs) => (
              <button
                key={cs.id}
                onClick={() => setActiveCaseId(cs.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap active:scale-95 ${
                  activeCaseId === cs.id
                    ? 'bg-[#E59500] text-black shadow-lg shadow-[#E59500]/20'
                    : 'bg-white/[0.03] text-zinc-400 border border-white/[0.06] hover:bg-white/[0.06] hover:text-white'
                }`}
              >
                {cs.title}
              </button>
            ))}
          </div>
        </div>

        {/* Case Study Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCase.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl glass-card border border-white/[0.1] p-6 sm:p-10 text-left"
          >
            {/* Top metadata */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#E59500] font-bold">
                  {activeCase.category}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  {activeCase.title}
                </h3>
                <div className="text-xs sm:text-sm text-zinc-400 mt-1 flex items-center gap-1.5">
                  <span className="text-zinc-500 font-mono">CLIENT:</span>
                  <span>{activeCase.clientType}</span>
                </div>
              </div>

              <button
                onClick={() => onDiscussProject(activeCase.title)}
                className="px-4 py-2.5 rounded-xl font-display font-semibold text-xs sm:text-sm text-black bg-gradient-to-r from-[#E59500] to-[#CC7A00] hover:shadow-lg hover:shadow-[#E59500]/20 transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>Discuss Similar Solution</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>
            </div>

            {/* Metrics Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-8">
              {activeCase.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-black/40 border border-white/[0.06] relative overflow-hidden"
                >
                  <div className="text-2xl sm:text-3xl font-display font-black text-white">
                    {metric.value}
                  </div>
                  <div className="text-xs font-mono text-zinc-400 mt-1 uppercase tracking-wider">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Challenge */}
              <div className="p-5 sm:p-6 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 mb-2">
                  The Business Challenge:
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {activeCase.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="p-5 sm:p-6 rounded-xl bg-white/[0.02] border border-[#E59500]/30">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#E59500] mb-2">
                  The Deployed Muru AI Solution:
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {activeCase.solution}
                </p>
              </div>
            </div>

            {/* Execution Capabilities */}
            <div className="mb-8 space-y-2">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-3">
                Key System Capabilities:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeCase.whatItDoes.map((item, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-black/30 border border-white/[0.04] flex items-start gap-2 text-xs text-zinc-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-zinc-500 uppercase mr-2">
                Engineered With:
              </span>
              {activeCase.technology.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
