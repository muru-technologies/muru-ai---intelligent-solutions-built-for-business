import { motion } from 'motion/react';
import {
  Target,
  CheckCircle2,
  GitMerge,
  TrendingUp,
  Building,
  MapPin,
  Mail,
  Phone,
  MessageSquare,
  ShieldCheck,
  Award,
  ArrowRight,
} from 'lucide-react';
import { ENGINEERING_CREED, COMPANY_DETAILS } from '../data/siteData';

interface WhyUsAndAboutProps {
  onOpenConsultation: () => void;
  onNavigateToDivision?: (divisionId: string) => void;
}

export default function WhyUsAndAbout({ onOpenConsultation, onNavigateToDivision }: WhyUsAndAboutProps) {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'Target':
        return <Target className="w-5 h-5 text-[#E59500]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      case 'GitMerge':
        return <GitMerge className="w-5 h-5 text-sky-400" />;
      case 'TrendingUp':
      default:
        return <TrendingUp className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="about" className="py-16 sm:py-24 relative bg-[#090B0E] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Why Muru AI Header */}
        <div className="max-w-3xl mb-10 sm:mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-[#E59500] mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Strategic Enterprise Advantages</span>
          </div>

          <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Why Enterprise Leaders Choose <span className="text-[#E59500]">Muru AI.</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-zinc-400">
            We are structured differently from traditional software consultancies. We measure success
            in actual hours saved, customer retention gained, and commercial payback.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-20">
          {ENGINEERING_CREED.map((principle, idx) => (
            <motion.div
              key={principle.pillar}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="rounded-2xl glass-card border border-white/[0.07] p-4.5 sm:p-6 text-left flex flex-col justify-between hover:border-[#E59500]/30 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    {getIcon(principle.icon)}
                  </div>
                  <span className="text-[10px] font-mono uppercase text-zinc-500 font-bold">
                    PILLAR 0{idx + 1}
                  </span>
                </div>

                <div className="text-xs font-mono font-bold uppercase text-[#E59500] mb-1">
                  {principle.pillar}
                </div>
                <h3 className="font-display text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                  {principle.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* About Company & Muru Group Card */}
        <div className="rounded-2xl glass-card border border-white/[0.1] p-4.5 sm:p-10 text-left bg-gradient-to-br from-[#0B0E14] via-[#090B0F] to-[#07090D] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.05] border border-white/[0.08] text-xs font-mono text-zinc-300">
                <Building className="w-3.5 h-3.5 text-[#E59500] flex-shrink-0" />
                <span className="truncate">{COMPANY_DETAILS.legalName} ({COMPANY_DETAILS.parentName})</span>
              </div>

              <h3 className="font-display text-xl sm:text-3xl font-extrabold text-white">
                Six Unified Technology Practices Built for Modern Enterprise
              </h3>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Most companies do not suffer from a lack of technology. They suffer from disconnected vendors, siloed software, and manual bottlenecks. Muru Tech unifies your entire digital estate across 6 enterprise divisions:
              </p>

              {/* 6 Divisions Tag Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 pb-2">
                {[
                  { id: 'ai', code: 'AI', name: 'Artificial Intelligence' },
                  { id: 'consult', code: 'CONSULT', name: 'Technology Consulting' },
                  { id: 'sms', code: 'SMS', name: 'Bulk SMS & USSD' },
                  { id: 'robotics', code: 'ROBOTICS', name: 'Robotics & RPA' },
                  { id: 'app-licences', code: 'APP & LICENCES', name: 'Apps & Licensing' },
                  { id: 'erp', code: 'ERP', name: 'Enterprise ERP' },
                ].map((d, i) => (
                  <button
                    key={i}
                    onClick={() => onNavigateToDivision && onNavigateToDivision(d.id)}
                    className="p-2.5 rounded-lg bg-black/50 hover:bg-white/[0.06] border border-white/[0.06] hover:border-[#E59500]/50 flex items-center gap-2 text-left cursor-pointer transition-all active:scale-98 group"
                    title={`Explore Muru Tech ${d.code} Division`}
                  >
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#E59500]/15 text-[#E59500] border border-[#E59500]/30 group-hover:bg-[#E59500] group-hover:text-black transition-colors">
                      {d.code}
                    </span>
                    <span className="text-xs text-zinc-300 font-medium truncate group-hover:text-white transition-colors">{d.name}</span>
                  </button>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Whether deploying autonomous AI agents, conducting system security audits, broadcasting carrier SMS, or customizing Odoo ERP, Muru Tech provides accountable engineering under unified SLAs.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-2">
                <div className="p-3 rounded-xl bg-black/40 border border-white/[0.05]">
                  <div className="text-base sm:text-lg font-bold text-white">99.9%</div>
                  <div className="text-[10px] font-mono text-zinc-400 truncate">Enterprise SLA</div>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/[0.05]">
                  <div className="text-base sm:text-lg font-bold text-emerald-400">&lt; 30 Days</div>
                  <div className="text-[10px] font-mono text-zinc-400 truncate">Time-to-Production</div>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/[0.05] col-span-2 sm:col-span-1">
                  <div className="text-base sm:text-lg font-bold text-[#E59500]">Bank-Grade</div>
                  <div className="text-[10px] font-mono text-zinc-400 truncate">VPC & Security</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-3 p-4 sm:p-6 rounded-xl bg-black/50 border border-white/[0.07]">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#E59500] mb-3">
                Direct Engineering Desk:
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-center gap-3 text-zinc-300">
                  <MapPin className="w-4 h-4 text-[#E59500] flex-shrink-0" />
                  <span>{COMPANY_DETAILS.location}</span>
                </div>

                <div className="flex items-center gap-3 text-zinc-300">
                  <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:underline text-white truncate">
                    {COMPANY_DETAILS.email}
                  </a>
                </div>

                <div className="flex items-center gap-3 text-zinc-300">
                  <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{COMPANY_DETAILS.phone}</span>
                </div>

                <div className="flex items-center gap-3 text-zinc-300">
                  <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <a
                    href={COMPANY_DETAILS.whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>Instant WhatsApp Desk</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-white/[0.06]">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3 px-4 rounded-xl font-display font-bold text-xs sm:text-sm text-black bg-[#E59500] hover:bg-[#CC7A00] transition-colors flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <span>Book Strategy Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
