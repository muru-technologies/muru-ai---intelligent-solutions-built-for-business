import React, { useState } from 'react';
import { 
  ArrowRight, 
  HelpCircle, 
  Clock, 
  UserX, 
  FolderSync, 
  DatabaseZap, 
  Lightbulb, 
  CheckCircle, 
  Layers,
  Sparkles
} from 'lucide-react';
import { PROBLEM_SOLUTIONS } from '../data/muruData';
import { ProblemSolution } from '../types';

interface ProblemSolutionFinderProps {
  onSelectSolution: (solution: ProblemSolution) => void;
}

export const ProblemSolutionFinder: React.FC<ProblemSolutionFinderProps> = ({ onSelectSolution }) => {
  const [activeProblemId, setActiveProblemId] = useState<string>('customer-questions');

  const getProblemIcon = (id: string) => {
    switch (id) {
      case 'customer-questions':
        return <HelpCircle className="w-5 h-5" />;
      case 'repetitive-work':
        return <Clock className="w-5 h-5" />;
      case 'lost-leads':
        return <UserX className="w-5 h-5" />;
      case 'scattered-info':
        return <FolderSync className="w-5 h-5" />;
      case 'data-blindness':
        return <DatabaseZap className="w-5 h-5" />;
      case 'ai-product-idea':
      default:
        return <Lightbulb className="w-5 h-5" />;
    }
  };

  const currentSolution = PROBLEM_SOLUTIONS.find((s) => s.id === activeProblemId) || PROBLEM_SOLUTIONS[0];

  return (
    <section id="solutions" className="py-24 relative border-t border-white/[0.05] bg-[#0A0C0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-[#E59500] mb-4">
            Interactive Problem Matcher
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Start with a problem. <br />
            <span className="text-[#E59500]">We'll find the AI solution.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            You don't need to know which vector database or LLM architecture to use. Select the friction your organization is experiencing today to see how Muru AI resolves it.
          </p>
        </div>

        {/* Interactive Layout: Problem Selector on Left, Dynamic Solution Spotlight on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 6 Clickable Problem Cards */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs uppercase tracking-wider font-semibold text-zinc-500 mb-2 px-1">
              Select Your Business Challenge:
            </div>

            {PROBLEM_SOLUTIONS.map((item) => {
              const isSelected = item.id === activeProblemId;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveProblemId(item.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center justify-between gap-3 border ${
                    isSelected
                      ? 'bg-white/[0.07] border-[#E59500] shadow-[0_0_20px_rgba(229,149,0,0.15)] transform translate-x-1'
                      : 'bg-black/30 border-white/[0.06] hover:bg-white/[0.03] hover:border-white/[0.12]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-[#E59500] text-black'
                        : 'bg-white/[0.05] text-zinc-400'
                    }`}>
                      {getProblemIcon(item.id)}
                    </div>
                    <div>
                      <div className={`text-xs font-bold ${isSelected ? 'text-white' : 'text-zinc-300'}`}>
                        {item.quote}
                      </div>
                      <div className="text-[11px] text-zinc-500">
                        {item.tag}
                      </div>
                    </div>
                  </div>
                  
                  <div className={`text-[10px] font-mono px-2 py-1 rounded transition-colors ${
                    isSelected
                      ? 'bg-[#E59500]/20 text-[#E59500] font-semibold'
                      : 'bg-white/[0.04] text-zinc-500'
                  }`}>
                    {isSelected ? 'ACTIVE' : 'VIEW'}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic AI Solution Display */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl glass-card border border-[#E59500]/30 p-6 sm:p-8 relative overflow-hidden shadow-2xl shadow-black/80">
              
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#E59500]" />
                  <span className="text-xs font-mono uppercase tracking-widest text-[#E59500] font-bold">
                    Muru AI Recommended Architecture
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Ready to Deploy
                </span>
              </div>

              {/* Problem Repetition */}
              <div className="mb-4">
                <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">
                  Identified Friction:
                </div>
                <div className="text-lg font-bold text-zinc-300 italic">
                  {currentSolution.quote}
                </div>
              </div>

              {/* Solution Title */}
              <div className="mb-6">
                <div className="text-xs text-[#E59500] uppercase tracking-wider font-semibold mb-1">
                  AI Solution:
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {currentSolution.solutionTitle}
                </h3>
                <div className="text-xs text-zinc-400 font-mono mt-1">
                  Category: {currentSolution.solutionType}
                </div>
              </div>

              {/* Plain-English Breakdown */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] mb-6">
                <div className="text-xs font-semibold text-zinc-300 mb-1.5">
                  How Muru AI Solves It:
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {currentSolution.summary}
                </p>
              </div>

              {/* Business Benefit & Outcome */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-xs font-semibold text-[#E59500] mb-1">
                    Commercial Impact
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {currentSolution.businessBenefit}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-500/[0.03] border border-emerald-500/20">
                  <div className="text-xs font-semibold text-emerald-400 mb-1">
                    Typical Measurable Outcome
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed font-medium">
                    {currentSolution.exampleOutcome}
                  </p>
                </div>
              </div>

              {/* Integrated Systems Badges */}
              <div className="mb-8">
                <div className="text-xs text-zinc-500 uppercase tracking-wider mb-2">
                  Systems Connected:
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentSolution.systems.map((sys) => (
                    <span
                      key={sys}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-white/[0.05] text-zinc-300 border border-white/[0.08]"
                    >
                      {sys}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="text-xs text-zinc-400">
                  Ready to eliminate this bottleneck in your operations?
                </div>
                <button
                  onClick={() => onSelectSolution(currentSolution)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-xs sm:text-sm text-black bg-gradient-to-r from-[#F5A31A] to-[#E59500] hover:brightness-110 shadow-lg shadow-[#E59500]/25 transition-all"
                >
                  <span>Build This Solution</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
