import {
  BarChart3,
  CheckCircle2,
  Calculator,
  Zap,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  MessageSquare,
  ShieldCheck,
  Clock,
  FileText,
} from 'lucide-react';
import { RESOURCE_PAGES_DATA } from '../data/dropdownPagesData';
import { COMPANY_DETAILS } from '../data/siteData';
import CaseStudiesSection from './CaseStudiesSection';
import ProcessSection from './ProcessSection';
import RoiCalculator from './RoiCalculator';
import ProblemMatcher from './ProblemMatcher';

interface ResourcePageProps {
  resourceId: string;
  onBackToHome: () => void;
  onNavigateToResource: (resourceId: string) => void;
  onNavigateToProduct: (productId: string) => void;
  onOpenConsultation: (interestTopic?: string) => void;
}

export default function ResourcePage({
  resourceId,
  onBackToHome,
  onNavigateToResource,
  onNavigateToProduct,
  onOpenConsultation,
}: ResourcePageProps) {
  const resource =
    RESOURCE_PAGES_DATA.find((r) => r.id === resourceId) || RESOURCE_PAGES_DATA[0];

  const getResourceIcon = (iconName: string, className = 'w-5 h-5') => {
    switch (iconName) {
      case 'BarChart3':
        return <BarChart3 className={className} />;
      case 'CheckCircle2':
        return <CheckCircle2 className={className} />;
      case 'Calculator':
        return <Calculator className={className} />;
      case 'Zap':
      default:
        return <Zap className={className} />;
    }
  };

  const handleBookResource = () => {
    onOpenConsultation(`Resource Inquiry: ${resource.title} (${resource.code})`);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 min-h-screen relative overflow-hidden bg-[#07090D]">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[420px] bg-gradient-to-b from-[#E59500]/10 via-sky-500/5 to-transparent blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <button
              onClick={onBackToHome}
              className="hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Public Site</span>
            </button>
            <span className="text-zinc-600">/</span>
            <span>Resources</span>
            <span className="text-zinc-600">/</span>
            <span className="text-[#E59500] font-semibold">{resource.shortTitle}</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Muru Tech Engineering Knowledge & Tools</span>
          </div>
        </div>

        {/* Horizontal Resource Switcher Bar */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-4 mb-8 border-b border-white/[0.06]">
          {RESOURCE_PAGES_DATA.map((item) => {
            const isCurrent = item.id === resource.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigateToResource(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-2 ${
                  isCurrent
                    ? 'bg-[#E59500] text-black font-semibold'
                    : 'bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.07] border border-white/[0.06]'
                }`}
              >
                {getResourceIcon(item.iconName, 'w-3.5 h-3.5')}
                <span>{item.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Resource Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
          <div className="lg:col-span-8 space-y-4 text-left">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="text-[#E59500] font-semibold">{resource.code}</span>
              <span>·</span>
              <span>Executive Engineering Hub</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {resource.title}
            </h1>

            <p className="text-base sm:text-lg font-medium text-[#E59500]">
              {resource.tagline}
            </p>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl">
              {resource.longDescription}
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
              {resource.highlights.map((hl, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]"
                >
                  <div className="text-[11px] font-mono text-zinc-400">
                    {hl.label}
                  </div>
                  <div className="text-lg sm:text-xl font-display font-bold text-white mt-0.5 tabular-nums">
                    {hl.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Action Card */}
          <div className="lg:col-span-4 rounded-2xl bg-[#0D1117] border border-white/[0.1] p-6 space-y-5 text-left shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#E59500]/15 border border-[#E59500]/30 flex items-center justify-center text-[#E59500]">
                  {getResourceIcon(resource.iconName, 'w-5 h-5')}
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-400">Interactive Resource</div>
                  <div className="text-sm font-display font-bold text-white">
                    {resource.shortTitle}
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono text-emerald-400">VERIFIED</span>
            </div>

            <div className="space-y-2 text-xs text-zinc-300">
              {resource.keyTakeaways.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 space-y-2.5">
              <button
                onClick={handleBookResource}
                className="w-full py-3.5 px-4 rounded-xl font-display font-bold text-xs sm:text-sm text-black bg-gradient-to-r from-[#E59500] via-[#F4A81E] to-[#CC7A00] hover:shadow-[0_0_25px_rgba(229,149,0,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 fill-black/20" />
                <span>{resource.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`${COMPANY_DETAILS.whatsappDirectUrl}%20Specifically%20regarding%20${encodeURIComponent(
                  resource.title
                )}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl font-medium text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 hover:bg-emerald-500/20 transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat Direct on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Full-Width Interactive Resource Component */}
      <div className="border-t border-white/[0.06]">
        {resource.id === 'case-studies' && (
          <CaseStudiesSection onDiscussProject={onOpenConsultation} />
        )}

        {resource.id === 'engineering-process' && (
          <ProcessSection
            onStartAudit={() =>
              onOpenConsultation('Stage 01 AI Feasibility & ROI Opportunity Audit')
            }
          />
        )}

        {resource.id === 'roi-calculator' && (
          <RoiCalculator onBookAuditWithMetrics={onOpenConsultation} />
        )}

        {resource.id === 'problem-matcher' && (
          <ProblemMatcher
            onSelectSolution={onOpenConsultation}
            onNavigateToProduct={onNavigateToProduct}
          />
        )}
      </div>

      {/* Bottom Executive Summary & Booking Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="rounded-2xl bg-gradient-to-r from-[#131822] via-[#0F131A] to-[#131822] border border-[#E59500]/30 p-6 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 text-left">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-wider text-[#E59500]">
              Next Step · Tailored Scoping
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              Ready to Apply This to Your Organization?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Book a 30-minute engineering review with our architecture team at Mb&apos;yuni, Maghonyi Gym Street, Along Voi Town–Mombasa Road Through River Voi to receive a custom feasibility blueprint for your systems.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={handleBookResource}
              className="px-6 py-3.5 rounded-xl font-display font-bold text-xs sm:text-sm text-black bg-[#E59500] hover:bg-[#F4A81E] transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-[#E59500]/20"
            >
              <Sparkles className="w-4 h-4 fill-black/20" />
              <span>{resource.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onBackToHome}
              className="px-4 py-3.5 rounded-xl font-mono text-xs text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-colors cursor-pointer"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
