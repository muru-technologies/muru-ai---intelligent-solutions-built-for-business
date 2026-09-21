import React from 'react';
import { Compass, Eye, Building, Award, ArrowRight } from 'lucide-react';
import { MURU_BRAND } from '../data/muruData';
import { MuruLogo } from './MuruLogo';

interface AboutSectionProps {
  onStartConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onStartConsultation }) => {
  return (
    <section id="about" className="py-24 relative border-t border-white/[0.05] bg-[#0A0C0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-[#E59500] mb-4">
            About Muru AI
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Building the intelligent future <br />
            <span className="text-[#E59500]">of African businesses.</span>
          </h2>
        </div>

        {/* Main Positioning Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed">
              <strong className="text-white font-semibold">Muru AI</strong> is the artificial intelligence solutions division of <strong className="text-white font-semibold">{MURU_BRAND.parentCompany}</strong>, focused on helping businesses adopt AI through practical automation, intelligent applications, and AI-powered systems.
            </p>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              We bridge the gap between abstract academic AI research and the high-stakes, fast-paced realities of enterprise business in Africa and globally. We believe technology should eliminate operational friction, empower human teams to produce their best work, and unlock immediate commercial value.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <div className="px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm">
                <MuruLogo
                  variant="white"
                  size="sm"
                  showAiBadge={true}
                  showTagline={true}
                  taglineText="TECHNOLOGY SOLUTIONS GROUP"
                />
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <Award className="w-4 h-4 text-[#E59500]" />
                <span className="text-xs font-medium text-zinc-300">Enterprise AI Engineering</span>
              </div>
            </div>
          </div>

          {/* Right Highlights Banner */}
          <div className="lg:col-span-5 space-y-4">
            {/* Mission Card */}
            <div className="p-6 rounded-2xl glass-card border border-white/[0.08] hover:border-[#E59500]/30 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-[#E59500]/10 flex items-center justify-center text-[#E59500]">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white uppercase tracking-wider">
                  Our Mission
                </h3>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed italic">
                “Make advanced AI technology accessible, practical and useful for businesses.”
              </p>
            </div>

            {/* Vision Card */}
            <div className="p-6 rounded-2xl glass-card border border-white/[0.08] hover:border-[#E59500]/30 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-[#E59500]/10 flex items-center justify-center text-[#E59500]">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white uppercase tracking-wider">
                  Our Vision
                </h3>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed italic">
                “A future where every business can use intelligent technology to work smarter.”
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
