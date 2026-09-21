import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Headphones,
  FileSpreadsheet,
  UserCheck,
  FolderSearch,
  TrendingUp,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Layers,
  Cpu,
  ShieldCheck,
} from 'lucide-react';
import { PROBLEM_MATCHER_DATA } from '../data/siteData';

interface ProblemMatcherProps {
  onSelectSolution: (solutionTitle: string) => void;
}

export default function ProblemMatcher({ onSelectSolution }: ProblemMatcherProps) {
  const [selectedId, setSelectedId] = useState(PROBLEM_MATCHER_DATA[0].id);

  const activeProblem =
    PROBLEM_MATCHER_DATA.find((p) => p.id === selectedId) || PROBLEM_MATCHER_DATA[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'customer-questions':
        return <Headphones className="w-5 h-5" />;
      case 'repetitive-work':
        return <FileSpreadsheet className="w-5 h-5" />;
      case 'lost-leads':
        return <UserCheck className="w-5 h-5" />;
      case 'scattered-info':
        return <FolderSearch className="w-5 h-5" />;
      case 'data-blindness':
        return <TrendingUp className="w-5 h-5" />;
      case 'ai-product-idea':
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="solutions" className="py-24 relative border-t border-white/[0.05] bg-[#090B0E]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#E59500]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-[#E59500] mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive Problem Matcher</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Start with a problem.{' '}
            <span className="text-[#E59500] block sm:inline">We’ll engineer the AI solution.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            You don’t need to figure out vector stores, embeddings, or LLM routing. Select the primary
            bottleneck your organization faces today to see how Muru AI resolves it with guaranteed ROI.
          </p>
        </div>

        {/* Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Problem Buttons */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="text-xs uppercase tracking-wider font-mono font-semibold text-zinc-400 mb-3 px-1">
              Select Your Operational Challenge:
            </div>

            {PROBLEM_MATCHER_DATA.map((item) => {
              const isSelected = item.id === selectedId;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center justify-between gap-3 border cursor-pointer ${
                    isSelected
                      ? 'bg-white/[0.08] border-[#E59500] shadow-[0_0_20px_rgba(229,149,0,0.15)] translate-x-1'
                      : 'bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.12]'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`p-2.5 rounded-lg transition-colors flex-shrink-0 ${
                        isSelected ? 'bg-[#E59500] text-black font-bold' : 'bg-white/[0.05] text-zinc-400'
                      }`}
                    >
                      {getIcon(item.id)}
                    </div>
                    <div className="min-w-0">
                      <div
                        className={`text-xs font-mono font-semibold uppercase tracking-wider ${
                          isSelected ? 'text-[#E59500]' : 'text-zinc-400'
                        }`}
                      >
                        {item.tag}
                      </div>
                      <div className="text-sm font-bold text-white truncate mt-0.5">{item.quote}</div>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 flex-shrink-0 transition-transform ${
                      isSelected ? 'text-[#E59500] translate-x-0.5' : 'text-zinc-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Solution Blueprint Display */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProblem.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl glass-card border border-white/[0.1] p-6 sm:p-8 relative overflow-hidden"
              >
                {/* Decorative background glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#E59500]/10 rounded-full blur-[100px] pointer-events-none" />

                {/* Badge & Category */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-4 border-b border-white/[0.08]">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E59500] bg-[#E59500]/10 px-2.5 py-1 rounded-md border border-[#E59500]/20">
                      Muru Recommended Architecture
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-2">
                      {activeProblem.solutionTitle}
                    </h3>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-medium text-zinc-400 block">Solution Archetype</span>
                    <span className="text-xs font-mono font-semibold text-emerald-400">
                      {activeProblem.solutionType}
                    </span>
                  </div>
                </div>

                {/* Challenge Quote Display */}
                <div className="mb-6 p-3.5 rounded-xl bg-black/40 border border-white/[0.06] text-zinc-300 italic text-sm">
                  {activeProblem.quote}
                </div>

                {/* Summary & Benefit */}
                <div className="space-y-4 mb-6 text-left">
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                      How Muru AI Solves It:
                    </h4>
                    <p className="text-sm text-zinc-300 leading-relaxed">{activeProblem.summary}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-1.5 flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5" /> Commercial ROI & Benefit:
                    </h4>
                    <p className="text-sm text-zinc-300 leading-relaxed font-medium">
                      {activeProblem.businessBenefit}
                    </p>
                  </div>
                </div>

                {/* Systems & Proven Outcome */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="p-3.5 rounded-xl bg-black/30 border border-white/[0.06]">
                    <div className="text-xs font-mono font-bold uppercase text-zinc-400 mb-2 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#E59500]" /> Integrated Systems:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProblem.systems.map((sys, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 rounded bg-white/[0.04] border border-white/[0.06] text-xs text-zinc-300"
                        >
                          {sys}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-black/30 border border-white/[0.06]">
                    <div className="text-xs font-mono font-bold uppercase text-zinc-400 mb-2 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Measured Result:
                    </div>
                    <p className="text-xs font-semibold text-emerald-300 leading-snug">
                      {activeProblem.exampleOutcome}
                    </p>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.06]">
                  <span className="text-xs text-zinc-400">
                    Ready to eliminate this bottleneck in your operations?
                  </span>
                  <button
                    onClick={() => onSelectSolution(activeProblem.solutionTitle)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-display font-semibold text-xs sm:text-sm text-black bg-gradient-to-r from-[#E59500] to-[#CC7A00] hover:shadow-lg hover:shadow-[#E59500]/25 transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95"
                  >
                    <span>Deploy This Solution</span>
                    <ArrowRight className="w-4 h-4 text-black" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
