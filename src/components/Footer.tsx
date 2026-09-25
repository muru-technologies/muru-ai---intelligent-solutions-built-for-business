import {
  Building,
  Mail,
  Phone,
  MessageSquare,
  ArrowUp,
  ShieldCheck,
  Terminal,
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/siteData';

interface FooterProps {
  onOpenCockpit: () => void;
  onOpenConsultation: (topic?: string) => void;
  onNavigateToDivision?: (divisionId: string) => void;
}

export default function Footer({
  onOpenCockpit,
  onOpenConsultation,
  onNavigateToDivision,
}: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050709] border-t border-white/[0.08] text-zinc-400 pt-12 sm:pt-16 pb-10 sm:pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-10 pb-8 sm:pb-12 border-b border-white/[0.08] text-left">
          {/* Col 1 & 2: Brand & Tagline */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/Logo-White-No-Bg.webp"
                alt="Muru IT - Technology Solutions Group"
                className="h-8 sm:h-9 w-auto max-w-[180px] object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
              Intelligent Solutions Built for Business. Muru Tech Group powers forward-thinking organizations across 6 specialized divisions: AI, Consulting, Bulk SMS, Robotics, Custom Apps & Licences, and Enterprise ERP.
            </p>

            <div className="pt-2">
              <div className="text-xs font-mono text-zinc-400">
                {COMPANY_DETAILS.legalName} ({COMPANY_DETAILS.parentName})
              </div>
              <div className="text-[11px] font-mono text-[#E59500] mt-1">
                DIVISIONS: {COMPANY_DETAILS.divisionSummary}
              </div>
              <div className="text-xs text-zinc-400 mt-2 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>Enterprise SLA • Private VPC • Zero Retained Data</span>
              </div>
            </div>
          </div>

          {/* Col 2: Muru Tech 6 Divisions */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#E59500] mb-3 sm:mb-4">
              Muru Tech Divisions
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { id: 'ai', code: 'AI', label: 'AI & Autonomous Agents' },
                { id: 'consult', code: 'CONSULT', label: 'Enterprise Tech Consulting' },
                { id: 'sms', code: 'SMS', label: 'Bulk SMS & USSD Gateways' },
                { id: 'robotics', code: 'ROBOTICS', label: 'Robotics & Process Automation' },
                { id: 'app-licences', code: 'APP & LICENCES', label: 'Apps & Software Licensing' },
                { id: 'erp', code: 'ERP', label: 'Enterprise ERP Systems' },
              ].map((division, i) => (
                <li key={i}>
                  <button
                    onClick={() => {
                      if (onNavigateToDivision) {
                        onNavigateToDivision(division.id);
                      } else {
                        onOpenConsultation(`Muru Tech Division: ${division.code} (${division.label})`);
                      }
                    }}
                    className="hover:text-white text-zinc-300 transition-colors cursor-pointer text-left py-0.5 active:scale-98 flex items-center gap-1.5"
                  >
                    <span className="text-[9px] font-mono font-bold px-1 py-0.2 rounded bg-white/[0.08] text-[#E59500]">
                      {division.code}
                    </span>
                    <span className="truncate">{division.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-3 sm:mb-4">
              AI Capabilities
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                'Autonomous AI Agents',
                'Conversational Chatbots',
                'Workflow Automation',
                'Custom AI Applications',
                'WhatsApp API Integrations',
                'DocuSense RAG Engine',
              ].map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => onOpenConsultation(item)}
                    className="hover:text-[#E59500] transition-colors cursor-pointer text-left py-0.5 active:scale-98"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Industries */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-3 sm:mb-4">
              Industry Verticals
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                'Hospitality & Tourism',
                'E-commerce & Retail',
                'Real Estate & Advisory',
                'Financial Services & Fintech',
                'Logistics & Distribution',
                'Education & EdTech',
              ].map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => onOpenConsultation(`Industry: ${item}`)}
                    className="hover:text-[#E59500] transition-colors cursor-pointer text-left py-0.5 active:scale-98"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Operations & Contact */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-3 sm:mb-4">
              Enterprise Contact
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="text-zinc-300 font-medium">{COMPANY_DETAILS.location}</div>
              <div>
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-white hover:underline truncate block">
                  {COMPANY_DETAILS.email}
                </a>
              </div>
              <div className="text-zinc-300">{COMPANY_DETAILS.phone}</div>
              <div>
                <a
                  href={COMPANY_DETAILS.whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline flex items-center gap-1 font-semibold"
                >
                  <MessageSquare className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>WhatsApp Lead Desk</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenCockpit}
                  className="w-full sm:w-auto px-3 py-2 sm:py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-[#E59500] text-zinc-300 hover:text-white text-xs font-mono flex items-center justify-center sm:justify-start gap-1.5 transition-colors cursor-pointer active:scale-95"
                >
                  <Terminal className="w-3 h-3 text-[#E59500]" />
                  <span>Launch Live Cockpit</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs font-mono">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-400">All 24 Enterprise Nodes Live</span>
            <span className="text-zinc-600 hidden xs:inline sm:inline">•</span>
            <span>Latency: 42ms</span>
          </div>

          <div className="text-zinc-500 text-center">
            © {new Date().getFullYear()} Muru Technology Solutions Group. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 active:scale-95"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
