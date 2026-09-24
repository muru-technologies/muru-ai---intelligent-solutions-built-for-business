import { motion } from 'motion/react';
import { Compass, CheckCircle2, ArrowRight } from 'lucide-react';
import { PROCESS_DATA } from '../data/siteData';

interface ProcessSectionProps {
  onStartAudit: () => void;
}

export default function ProcessSection({ onStartAudit }: ProcessSectionProps) {
  return (
    <section id="process" className="py-16 sm:py-24 relative bg-[#07090D] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-[#E59500] mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Delivery Methodology</span>
          </div>

          <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            From Blueprint to Production in <span className="text-[#E59500]">6 Disciplined Steps.</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-zinc-400">
            Too many AI initiatives stall as expensive experiments that never reach real users. Our
            structured delivery framework guarantees production-readiness, security, and staff adoption.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {PROCESS_DATA.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="rounded-2xl glass-card border border-white/[0.07] p-5 sm:p-6 text-left hover:border-[#E59500]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="font-display font-black text-2xl sm:text-3xl text-zinc-700 group-hover:text-[#E59500] transition-colors">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-zinc-400">
                    STAGE // 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-[#E59500] transition-colors">
                  {step.title}
                </h3>
                <div className="text-xs font-mono text-zinc-400 mt-1 mb-2.5 sm:mb-3">
                  {step.tagline}
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4 sm:mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-3.5 sm:pt-4 border-t border-white/[0.06]">
                <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-1">
                  Deliverable:
                </div>
                <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{step.deliverable}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-8 sm:mt-12 p-4.5 sm:p-6 rounded-2xl glass-card border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div>
            <div className="text-xs sm:text-sm font-bold text-white text-center sm:text-left">
              Ready to kick off Stage 01 with an AI Feasibility Audit?
            </div>
            <div className="text-xs text-zinc-400 mt-0.5 text-center sm:text-left">
              Our lead AI architect will analyze your workflows and quantify automation opportunities.
            </div>
          </div>

          <button
            onClick={onStartAudit}
            className="w-full sm:w-auto px-5 py-3 sm:py-2.5 rounded-xl font-display font-semibold text-xs sm:text-sm text-black bg-[#E59500] hover:bg-[#CC7A00] transition-colors flex items-center justify-center gap-2 flex-shrink-0 cursor-pointer active:scale-95"
          >
            <span>Request Feasibility Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
