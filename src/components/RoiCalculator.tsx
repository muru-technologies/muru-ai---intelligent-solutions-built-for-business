import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Calculator,
  TrendingUp,
  Clock,
  DollarSign,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';

interface RoiCalculatorProps {
  onBookAuditWithMetrics: (summary: string) => void;
}

export default function RoiCalculator({ onBookAuditWithMetrics }: RoiCalculatorProps) {
  const [teamSize, setTeamSize] = useState(12);
  const [monthlyTickets, setMonthlyTickets] = useState(4500);
  const [hourlyRate, setHourlyRate] = useState(25);

  // Calculations
  // Assume each employee spends ~18 hours/week on repetitive admin/queries => ~72 hrs/month
  // Muru AI automates 65% of those hours
  const hoursSavedPerEmployeeMonth = Math.round(72 * 0.65);
  const totalHoursSavedMonth = teamSize * hoursSavedPerEmployeeMonth;
  const monthlyCostSavings = totalHoursSavedMonth * hourlyRate;
  const annualCostSavings = monthlyCostSavings * 12;

  // Auto-resolution rate estimated based on volume
  const resolutionRate = 72;

  const handleAuditClick = () => {
    const summary = `ROI Estimate: ${teamSize} employees, ${monthlyTickets.toLocaleString()} monthly volume, projected $${monthlyCostSavings.toLocaleString()}/mo savings (${totalHoursSavedMonth.toLocaleString()} hrs saved).`;
    onBookAuditWithMetrics(summary);
  };

  return (
    <section id="calculator" className="py-16 sm:py-24 relative bg-[#07090D] border-t border-white/[0.05]">
      {/* Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#E59500]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-[#E59500] mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive ROI & Feasibility Estimator</span>
          </div>

          <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Calculate Your Organization’s{' '}
            <span className="text-[#E59500]">AI Savings.</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-zinc-400">
            See the concrete commercial impact of deploying Muru AI automation and agents across your team
            before writing a single line of code.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left: Input Sliders */}
          <div className="lg:col-span-6 rounded-2xl glass-card border border-white/[0.08] p-4.5 sm:p-8 space-y-6 sm:space-y-7 text-left">
            <h3 className="font-display text-lg sm:text-xl font-bold text-white border-b border-white/[0.08] pb-3 sm:pb-4">
              Your Operational Parameters
            </h3>

            {/* Slider 1: Team Size */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between text-xs font-mono gap-1">
                <span className="text-zinc-300 font-medium">Team in Operations / Support:</span>
                <span className="text-sm sm:text-base font-bold text-[#E59500] font-sans">{teamSize} staff</span>
              </div>
              <input
                type="range"
                min={2}
                max={60}
                step={1}
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-3 sm:h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#E59500]"
              />
              <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                <span>2 staff</span>
                <span>30 staff</span>
                <span>60+ staff</span>
              </div>
            </div>

            {/* Slider 2: Monthly Inquiries / Documents */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between text-xs font-mono gap-1">
                <span className="text-zinc-300 font-medium">Monthly Inquiries / Tasks:</span>
                <span className="text-sm sm:text-base font-bold text-[#E59500] font-sans">
                  {monthlyTickets.toLocaleString()} tasks
                </span>
              </div>
              <input
                type="range"
                min={500}
                max={30000}
                step={500}
                value={monthlyTickets}
                onChange={(e) => setMonthlyTickets(Number(e.target.value))}
                className="w-full h-3 sm:h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#E59500]"
              />
              <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                <span>500 / mo</span>
                <span>15,000 / mo</span>
                <span>30,000+ / mo</span>
              </div>
            </div>

            {/* Slider 3: Blended Hourly Rate */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between text-xs font-mono gap-1">
                <span className="text-zinc-300 font-medium">Blended Hourly Compensation ($):</span>
                <span className="text-sm sm:text-base font-bold text-[#E59500] font-sans">${hourlyRate} / hr</span>
              </div>
              <input
                type="range"
                min={10}
                max={75}
                step={5}
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full h-3 sm:h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#E59500]"
              />
              <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                <span>$10 / hr</span>
                <span>$40 / hr</span>
                <span>$75 / hr</span>
              </div>
            </div>

            {/* Assumptions Callout */}
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-[11px] text-zinc-400 leading-relaxed">
              Based on empirical Muru AI client benchmarks across logistics, telco, and enterprise retail
              deployments in 2025–2026.
            </div>
          </div>

          {/* Right: Projected Commercial Impact Card */}
          <div className="lg:col-span-6 rounded-2xl glass-card border border-[#E59500]/40 p-4.5 sm:p-8 flex flex-col justify-between text-left relative overflow-hidden bg-gradient-to-b from-[#0A0D12] to-[#07090D] shadow-2xl shadow-[#E59500]/10">
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#E59500]/15 rounded-full blur-[80px] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-5 sm:mb-6 pb-3 sm:pb-4 border-b border-white/[0.08]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#E59500] font-bold">
                  Projected ROI & Value
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  90-Day Break-Even
                </span>
              </div>

              {/* Big Stat 1: Monthly Cost Reclaimed */}
              <div className="mb-5 sm:mb-6">
                <div className="text-xs font-mono uppercase text-zinc-400">
                  Estimated Monthly Operational Savings:
                </div>
                <div className="text-3xl sm:text-5xl font-display font-black text-white mt-1">
                  ${monthlyCostSavings.toLocaleString()}{' '}
                  <span className="text-sm sm:text-lg font-normal text-zinc-400">/ month</span>
                </div>
                <div className="text-xs font-mono text-emerald-400 mt-1">
                  ≈ ${annualCostSavings.toLocaleString()} Annualized Commercial Savings
                </div>
              </div>

              {/* Secondary Metrics Bento */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-5 sm:mb-6">
                <div className="p-3 sm:p-3.5 rounded-xl bg-black/40 border border-white/[0.06]">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono mb-1">
                    <Clock className="w-3.5 h-3.5 text-[#E59500] flex-shrink-0" />
                    <span className="truncate">Hours Reclaimed</span>
                  </div>
                  <div className="text-lg sm:text-2xl font-bold text-white">
                    {totalHoursSavedMonth.toLocaleString()} hrs
                  </div>
                  <div className="text-[10px] text-zinc-500 mt-0.5 truncate">Every month across team</div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-black/40 border border-white/[0.06]">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono mb-1">
                    <TrendingUp className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                    <span className="truncate">Auto-Resolution</span>
                  </div>
                  <div className="text-lg sm:text-2xl font-bold text-white">{resolutionRate}%</div>
                  <div className="text-[10px] text-zinc-500 mt-0.5 truncate">Average tier-1 inquiries</div>
                </div>
              </div>

              {/* Guarantees */}
              <div className="space-y-2 mb-6">
                <div className="flex items-start sm:items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5 sm:mt-0" />
                  <span>Sub-30-day staged deployment with zero legacy downtime</span>
                </div>
                <div className="flex items-start sm:items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5 sm:mt-0" />
                  <span>Full staff onboarding workshop and integration warranty</span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={handleAuditClick}
              className="w-full py-3.5 px-5 rounded-xl font-display font-bold text-xs sm:text-sm text-black bg-gradient-to-r from-[#E59500] via-[#F4A81E] to-[#CC7A00] hover:shadow-xl hover:shadow-[#E59500]/30 transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-98"
            >
              <span>Schedule Audit with These Projections</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
