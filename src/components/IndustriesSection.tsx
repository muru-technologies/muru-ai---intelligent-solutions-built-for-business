import React, { useState } from 'react';
import { 
  Building2, 
  ShoppingBag, 
  Home, 
  GraduationCap, 
  HeartHandshake, 
  Coins, 
  Store, 
  Briefcase,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { INDUSTRIES } from '../data/muruData';
import { IndustryItem } from '../types';

interface IndustriesSectionProps {
  onIndustryInquire: (industry: IndustryItem) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onIndustryInquire }) => {
  const [activeIndustryId, setActiveIndustryId] = useState<string>('hospitality');

  const getIndustryIcon = (id: string) => {
    switch (id) {
      case 'hospitality':
        return <Building2 className="w-5 h-5 text-[#E59500]" />;
      case 'ecommerce':
        return <ShoppingBag className="w-5 h-5 text-[#E59500]" />;
      case 'real-estate':
        return <Home className="w-5 h-5 text-[#E59500]" />;
      case 'education':
        return <GraduationCap className="w-5 h-5 text-[#E59500]" />;
      case 'ngos':
        return <HeartHandshake className="w-5 h-5 text-[#E59500]" />;
      case 'financial-services':
        return <Coins className="w-5 h-5 text-[#E59500]" />;
      case 'retail':
        return <Store className="w-5 h-5 text-[#E59500]" />;
      case 'professional-services':
      default:
        return <Briefcase className="w-5 h-5 text-[#E59500]" />;
    }
  };

  const selectedIndustry = INDUSTRIES.find((i) => i.id === activeIndustryId) || INDUSTRIES[0];

  return (
    <section id="industries" className="py-24 relative border-t border-white/[0.05] tech-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-[#E59500] mb-4">
            Domain-Specific Applications
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            AI for the industries that <br />
            <span className="text-[#E59500]">keep business moving.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            We understand the unique regulatory, customer touchpoint, and operational requirements across diverse enterprise sectors.
          </p>
        </div>

        {/* 8 Industry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {INDUSTRIES.map((ind) => {
            const isSelected = ind.id === activeIndustryId;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveIndustryId(ind.id)}
                className={`p-5 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#121620] border-[#E59500] shadow-[0_4px_25px_rgba(229,149,0,0.15)] transform -translate-y-1'
                    : 'glass-card border-white/[0.08] hover:bg-white/[0.04] hover:border-white/[0.15]'
                }`}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-3">
                    {getIndustryIcon(ind.id)}
                  </div>
                  <h3 className={`text-base font-bold mb-1 ${isSelected ? 'text-white' : 'text-zinc-200'}`}>
                    {ind.name}
                  </h3>
                  <p className="text-xs text-zinc-400 line-clamp-2">
                    {ind.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between text-[11px] font-semibold text-[#E59500] pt-2 border-t border-white/[0.06]">
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Spotlight Deep Dive on Active Industry */}
        <div className="rounded-2xl glass-card border border-[#E59500]/30 p-6 sm:p-8 bg-[#090C10]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#E59500]/10 border border-[#E59500]/20 flex items-center justify-center">
                {getIndustryIcon(selectedIndustry.id)}
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#E59500] uppercase tracking-wider">
                  Industry Focus
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {selectedIndustry.name}
                </h3>
              </div>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300">
              {selectedIndustry.statsOrFocus}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {selectedIndustry.useCases.map((uc, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-black/40 border border-white/[0.05] flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#E59500] mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-zinc-300">{uc}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.06]">
            <span className="text-xs text-zinc-400">
              Looking for a custom implementation in {selectedIndustry.name}?
            </span>
            <button
              onClick={() => onIndustryInquire(selectedIndustry)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm text-black bg-[#E59500] hover:bg-[#F5A31A] transition-colors"
            >
              <span>Schedule {selectedIndustry.name} Strategy Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
