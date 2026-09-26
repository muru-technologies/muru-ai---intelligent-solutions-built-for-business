import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Hotel,
  ShoppingBag,
  Building2,
  ShieldCheck,
  Truck,
  GraduationCap,
  HeartHandshake,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { INDUSTRIES_DATA } from '../data/siteData';

interface IndustriesSectionProps {
  onSelectIndustry: (industryName: string) => void;
  onNavigateToSolution?: (solutionId: string) => void;
}

export default function IndustriesSection({
  onSelectIndustry,
  onNavigateToSolution,
}: IndustriesSectionProps) {
  const [activeIndustryId, setActiveIndustryId] = useState(INDUSTRIES_DATA[0].id);

  const mapIndustryToSolutionId = (id: string) => {
    if (id === 'ecommerce' || id === 'retail') return 'retail-ecommerce';
    return id;
  };

  const activeIndustry =
    INDUSTRIES_DATA.find((i) => i.id === activeIndustryId) || INDUSTRIES_DATA[0];

  const getIndustryIcon = (iconName: string, selected: boolean) => {
    const cls = `w-4 h-4 ${selected ? 'text-black' : 'text-[#E59500]'}`;
    switch (iconName) {
      case 'Hotel':
        return <Hotel className={cls} />;
      case 'ShoppingBag':
        return <ShoppingBag className={cls} />;
      case 'Building2':
        return <Building2 className={cls} />;
      case 'ShieldCheck':
        return <ShieldCheck className={cls} />;
      case 'Truck':
        return <Truck className={cls} />;
      case 'GraduationCap':
        return <GraduationCap className={cls} />;
      case 'HeartHandshake':
        return <HeartHandshake className={cls} />;
      case 'Briefcase':
      default:
        return <Briefcase className={cls} />;
    }
  };

  return (
    <section id="industries" className="py-24 relative bg-[#090B0E] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-[#E59500] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Vertical Specialization</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Engineered for Your Industry’s{' '}
            <span className="text-[#E59500]">Operational Reality.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Every vertical carries its own regulatory frameworks, transaction patterns, and customer
            expectations. Discover our specialized industry deployments.
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="flex flex-nowrap sm:flex-wrap gap-2 mb-8 pb-2 overflow-x-auto no-scrollbar">
          {INDUSTRIES_DATA.map((ind) => {
            const isSelected = ind.id === activeIndustryId;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveIndustryId(ind.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap active:scale-95 ${
                  isSelected
                    ? 'bg-[#E59500] text-black shadow-lg shadow-[#E59500]/20'
                    : 'bg-white/[0.02] text-zinc-400 border border-white/[0.06] hover:bg-white/[0.05] hover:text-white'
                }`}
              >
                {getIndustryIcon(ind.iconName, isSelected)}
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl glass-card border border-white/[0.1] p-6 sm:p-10 text-left"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/[0.08]">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#E59500] font-bold">
                  INDUSTRY BLUEPRINT
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  {activeIndustry.name}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl">
                  {activeIndustry.tagline}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#E59500]/10 border border-[#E59500]/20 text-right flex-shrink-0">
                <span className="text-[10px] font-mono uppercase text-zinc-400 block">
                  Measured Vertical Outcome
                </span>
                <span className="text-xs font-bold text-[#E59500]">
                  {activeIndustry.statsOrFocus}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed my-6">
              {activeIndustry.description}
            </p>

            <div className="space-y-3 mb-8">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
                Tailored Commercial Use Cases:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeIndustry.useCases.map((uc, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-black/40 border border-white/[0.04] flex items-start gap-2.5 text-xs text-zinc-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-snug">{uc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-zinc-400">
                Operating in {activeIndustry.name}? Explore the full industry solution page before booking.
              </span>
              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => {
                    if (onNavigateToSolution) {
                      onNavigateToSolution(mapIndustryToSolutionId(activeIndustry.id));
                    } else {
                      onSelectIndustry(activeIndustry.name);
                    }
                  }}
                  className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-display font-semibold text-black bg-[#E59500] hover:bg-[#CC7A00] transition-colors flex items-center gap-2 cursor-pointer shadow-lg shadow-[#E59500]/20"
                >
                  <span>Explore {activeIndustry.name} Solution Page</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
