import React from 'react';
import { ArrowRight, Calendar, MessageSquare, Sparkles } from 'lucide-react';

interface ConsultationBannerProps {
  onTalkToAi: () => void;
  onBookConsultation: () => void;
}

export const ConsultationBanner: React.FC<ConsultationBannerProps> = ({
  onTalkToAi,
  onBookConsultation
}) => {
  return (
    <section className="py-20 relative border-t border-white/[0.06] bg-gradient-to-b from-[#0A0C0F] to-[#060709] overflow-hidden">
      {/* Luminous ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#E59500]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-[#E59500] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Complimentary Strategic Assessment</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
          Have a business problem <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#E59500]">
            AI could solve?
          </span>
        </h2>

        <p className="text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Tell us what you're trying to achieve. We'll help identify where AI can make a measurable difference.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onTalkToAi}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm sm:text-base text-black bg-gradient-to-r from-[#F5A31A] via-[#E59500] to-[#CC7A00] hover:brightness-110 shadow-[0_0_30px_rgba(229,149,0,0.35)] transition-all transform hover:-translate-y-0.5"
          >
            <span>Talk to Muru AI</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </button>

          <button
            onClick={onBookConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-medium text-sm sm:text-base text-zinc-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] hover:border-white/[0.25] transition-all backdrop-blur-md"
          >
            <Calendar className="w-4 h-4 text-[#E59500]" />
            <span>Book a Consultation</span>
          </button>
        </div>

        <div className="mt-8 text-xs text-zinc-500 font-mono">
          No commitment required • Direct consultation with senior AI engineers
        </div>

      </div>
    </section>
  );
};
