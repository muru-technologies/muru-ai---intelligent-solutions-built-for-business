import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Bot,
  Compass,
  MessageSquare,
  Cpu,
  Layers,
  Database,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Zap,
  Building2,
  ExternalLink,
} from 'lucide-react';
import { COMPANY_DIVISIONS, COMPANY_DETAILS } from '../data/siteData';
import { CompanyDivision } from '../types';

interface DivisionsSectionProps {
  onSelectDivision: (interestTopic: string) => void;
  onNavigateToDivision?: (divisionId: string) => void;
}

export default function DivisionsSection({
  onSelectDivision,
  onNavigateToDivision,
}: DivisionsSectionProps) {
  const [selectedDivisionId, setSelectedDivisionId] = useState<string>('ai');

  const activeDivision =
    COMPANY_DIVISIONS.find((d) => d.id === selectedDivisionId) || COMPANY_DIVISIONS[0];

  const getDivisionIcon = (iconName: string, className = 'w-5 h-5') => {
    switch (iconName) {
      case 'Bot':
        return <Bot className={className} />;
      case 'Compass':
        return <Compass className={className} />;
      case 'MessageSquare':
        return <MessageSquare className={className} />;
      case 'Cpu':
        return <Cpu className={className} />;
      case 'Layers':
        return <Layers className={className} />;
      case 'Database':
        return <Database className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  const getBadgeStyle = (code: string, isActive: boolean) => {
    if (isActive) {
      switch (code) {
        case 'AI':
          return 'bg-sky-500/20 text-sky-300 border-sky-500/50 shadow-lg shadow-sky-500/10';
        case 'CONSULT':
          return 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-lg shadow-amber-500/10';
        case 'SMS':
          return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-lg shadow-emerald-500/10';
        case 'ROBOTICS':
          return 'bg-purple-500/20 text-purple-300 border-purple-500/50 shadow-lg shadow-purple-500/10';
        case 'APP & LICENCES':
          return 'bg-rose-500/20 text-rose-300 border-rose-500/50 shadow-lg shadow-rose-500/10';
        case 'ERP':
          return 'bg-orange-500/20 text-orange-300 border-orange-500/50 shadow-lg shadow-orange-500/10';
        default:
          return 'bg-[#E59500]/20 text-[#E59500] border-[#E59500]/50';
      }
    }
    return 'bg-white/[0.03] text-zinc-400 border-white/[0.08] hover:border-white/20 hover:text-white';
  };

  return (
    <section id="divisions" className="py-20 sm:py-28 relative overflow-hidden border-b border-white/[0.06]">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#E59500]/5 via-sky-500/5 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono text-zinc-300 mb-4">
            <Building2 className="w-3.5 h-3.5 text-[#E59500]" />
            <span className="font-semibold uppercase tracking-wider text-[#E59500]">
              Muru Tech Group
            </span>
            <span className="text-zinc-500">•</span>
            <span>6 Specialized Enterprise Divisions</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            One Technology Partner.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E59500] via-[#FFAE19] to-amber-200">
              Six Enterprise Divisions.
            </span>
          </h2>

          <p className="mt-4 text-xs sm:text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            From cognitive AI agents and strategic consulting to carrier-grade SMS, robotics, custom applications, and integrated ERP systems.
          </p>

          {/* Division Pill Summary */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {COMPANY_DIVISIONS.map((d) => (
              <button
                key={d.id}
                onClick={() => setSelectedDivisionId(d.id)}
                className={`px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-mono font-bold uppercase transition-all duration-200 border cursor-pointer ${
                  selectedDivisionId === d.id
                    ? getBadgeStyle(d.code, true)
                    : 'bg-black/40 text-zinc-400 border-white/[0.06] hover:text-white hover:border-white/20'
                }`}
              >
                {d.code}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Division Showcase */}
        <div className="rounded-2xl glass-card border border-white/[0.1] bg-[#090B0F]/90 p-5 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          {/* Active Division Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#E59500]/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Tab Navigation for 6 Divisions */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 pb-6 sm:pb-8 border-b border-white/[0.08]">
            {COMPANY_DIVISIONS.map((division) => {
              const isActive = division.id === selectedDivisionId;
              return (
                <button
                  key={division.id}
                  onClick={() => setSelectedDivisionId(division.id)}
                  className={`flex flex-col items-start p-3 sm:p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-white/[0.07] border-[#E59500]/60 ring-1 ring-[#E59500]/40'
                      : 'bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.12]'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <div
                      className={`p-2 rounded-lg ${
                        isActive
                          ? 'bg-[#E59500]/20 text-[#E59500]'
                          : 'bg-white/[0.05] text-zinc-400'
                      }`}
                    >
                      {getDivisionIcon(division.iconName, 'w-4 h-4')}
                    </div>
                    <span
                      className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                        isActive
                          ? 'bg-[#E59500]/20 text-[#E59500]'
                          : 'bg-white/[0.05] text-zinc-500'
                      }`}
                    >
                      {division.code}
                    </span>
                  </div>
                  <span
                    className={`text-xs sm:text-sm font-display font-bold leading-tight ${
                      isActive ? 'text-white' : 'text-zinc-300'
                    }`}
                  >
                    {division.shortTitle}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500 mt-1 truncate w-full">
                    {division.metrics.value}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Division Detailed Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDivision.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="pt-6 sm:pt-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">
                {/* Left Col: Overview & Value Proposition */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`px-2.5 py-1 rounded-md text-xs font-mono font-bold border ${getBadgeStyle(
                        activeDivision.code,
                        true
                      )}`}
                    >
                      DIVISION: {activeDivision.code}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">
                      Practice ID: {activeDivision.id.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-3xl font-extrabold text-white leading-snug">
                    {activeDivision.name}
                  </h3>

                  <p className="text-xs sm:text-sm font-medium text-[#E59500]">
                    {activeDivision.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {activeDivision.description}
                  </p>

                  {/* Benchmark & SLA Card */}
                  <div className="p-4 rounded-xl bg-black/50 border border-white/[0.08] flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-mono text-zinc-400">
                        {activeDivision.metrics.label}
                      </div>
                      <div className="text-xl sm:text-2xl font-display font-bold text-white">
                        {activeDivision.metrics.value}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Production SLA</span>
                    </div>
                  </div>

                  {/* Technologies Ecosystem */}
                  <div className="pt-2">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      Core Technology Stack & Ecosystem:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {activeDivision.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action CTA */}
                  <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                      onClick={() => {
                        if (onNavigateToDivision) {
                          onNavigateToDivision(activeDivision.id);
                        } else {
                          onSelectDivision(
                            `Muru Tech Division: ${activeDivision.code} (${activeDivision.name})`
                          );
                        }
                      }}
                      className="py-3 px-6 rounded-xl font-display font-semibold text-xs sm:text-sm text-black bg-[#E59500] hover:bg-[#CC7A00] transition-colors flex items-center justify-center gap-2 cursor-pointer active:scale-98 shadow-lg shadow-[#E59500]/20"
                    >
                      <Sparkles className="w-4 h-4 fill-black/20 text-black" />
                      <span>Explore {activeDivision.code} Division Page</span>
                      <ArrowRight className="w-4 h-4 text-black" />
                    </button>

                    <button
                      onClick={() =>
                        onSelectDivision(
                          `Muru Tech Division: ${activeDivision.code} (${activeDivision.name})`
                        )
                      }
                      className="py-3 px-4 rounded-xl text-xs font-mono text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] flex items-center justify-center gap-2 transition-all active:scale-98 cursor-pointer"
                    >
                      <span>Inquire Directly</span>
                    </button>

                    <a
                      href={COMPANY_DETAILS.whatsappDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-4 rounded-xl text-xs font-mono text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] flex items-center justify-center gap-2 transition-all active:scale-98"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-400" />
                      <span>WhatsApp Practice Lead</span>
                    </a>
                  </div>
                </div>

                {/* Right Col: 6 Key Capabilities / Deliverables */}
                <div className="lg:col-span-6 space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center justify-between">
                    <span>Key Offerings & Solutions:</span>
                    <span className="text-[#E59500]">6 Core Capabilities</span>
                  </div>

                  <div className="space-y-2.5">
                    {activeDivision.offerings.map((offering, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06] hover:border-[#E59500]/30 transition-all flex items-start gap-3 group"
                      >
                        <div className="p-1 rounded-md bg-[#E59500]/10 text-[#E59500] mt-0.5 flex-shrink-0 group-hover:bg-[#E59500] group-hover:text-black transition-colors">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <div className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-medium">
                          {offering}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-gradient-to-r from-white/[0.02] to-white/[0.05] border border-white/[0.07] flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                      <Zap className="w-4 h-4 text-[#E59500]" />
                      <span>Multi-Division Interoperability</span>
                    </div>
                    <span className="text-xs text-zinc-500 font-mono">
                      Integrated by Muru Tech
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 6-Division Quick Matrix Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
          {COMPANY_DIVISIONS.map((division) => (
            <div
              key={division.id}
              onClick={() => {
                if (onNavigateToDivision) {
                  onNavigateToDivision(division.id);
                } else {
                  setSelectedDivisionId(division.id);
                }
              }}
              className={`p-5 rounded-xl border transition-all cursor-pointer group ${
                selectedDivisionId === division.id
                  ? 'bg-white/[0.06] border-[#E59500]/60 ring-1 ring-[#E59500]/30'
                  : 'bg-[#090B0F]/60 border-white/[0.06] hover:bg-white/[0.04] hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-white/[0.05] text-[#E59500] border border-white/[0.08]">
                  {division.code}
                </span>
                <span className="text-xs font-mono text-[#E59500] group-hover:text-white flex items-center gap-1 font-semibold">
                  <span>Explore Division Page</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
              <h4 className="font-display text-sm font-bold text-white mb-1 group-hover:text-[#E59500] transition-colors">
                {division.name}
              </h4>
              <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                {division.tagline}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
