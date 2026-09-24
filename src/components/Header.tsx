import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Bot,
  MessageSquare,
  FileText,
  Headphones,
  Workflow,
  ShoppingBag,
  HeartPulse,
  Truck,
  Landmark,
  Building2,
  ShieldCheck,
  Cpu,
  Layers,
  BarChart3,
  Sparkles,
  ChevronDown,
  ArrowRight,
  Terminal,
  Menu,
  X,
  Zap,
  BookOpen,
  Calculator,
  CheckCircle2,
  ExternalLink,
  Compass,
  Database,
} from 'lucide-react';
import { COMPANY_DETAILS, COMPANY_DIVISIONS } from '../data/siteData';

interface HeaderProps {
  currentView: 'website' | 'cockpit';
  onToggleView: (view: 'website' | 'cockpit') => void;
  onOpenConsultation: (initialInterest?: string) => void;
}

type MenuKey = 'divisions' | 'products' | 'solutions' | 'platform' | 'resources' | null;

export default function Header({
  currentView,
  onToggleView,
  onOpenConsultation,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<MenuKey>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<MenuKey>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const handleMouseEnter = (menu: MenuKey) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const scrollToTarget = (targetId: string, consultationInterest?: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);

    if (consultationInterest) {
      onOpenConsultation(consultationInterest);
      return;
    }

    if (currentView !== 'website') {
      onToggleView('website');
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Engati-Style Mega Menu Content Data
  const divisionsMenu = [
    {
      code: 'AI',
      title: 'Artificial Intelligence & Agents',
      desc: 'Autonomous digital workers, WhatsApp bots, and DocuSense enterprise RAG.',
      icon: Bot,
      targetId: 'divisions',
      interest: 'Muru Tech Division: AI (Autonomous Agents & Cognitive Systems)',
    },
    {
      code: 'CONSULT',
      title: 'Enterprise Tech Consulting',
      desc: 'Executive advisory, IT system audits, and digital transformation blueprints.',
      icon: Compass,
      targetId: 'divisions',
      interest: 'Muru Tech Division: CONSULT (Enterprise Tech Consulting & Audits)',
    },
    {
      code: 'SMS',
      title: 'Carrier Bulk SMS & USSD',
      desc: 'High-throughput SMPP broadcast, two-way shortcodes, and transactional OTPs.',
      icon: MessageSquare,
      targetId: 'divisions',
      interest: 'Muru Tech Division: SMS (Bulk SMS, USSD & Telecom Gateways)',
    },
    {
      code: 'ROBOTICS',
      title: 'Robotics & Process Automation',
      desc: 'RPA desktop/browser automation bots, physical automation, and IoT sensor fabrics.',
      icon: Cpu,
      targetId: 'divisions',
      interest: 'Muru Tech Division: ROBOTICS (RPA & Industrial Automation)',
    },
    {
      code: 'APP & LICENCES',
      title: 'Apps & Software Licensing',
      desc: 'Custom web/mobile app engineering & authorized Microsoft/Google/AWS software licensing.',
      icon: Layers,
      targetId: 'divisions',
      interest: 'Muru Tech Division: APP & LICENCES (Custom Apps & Enterprise Software Licenses)',
    },
    {
      code: 'ERP',
      title: 'Enterprise Resource Planning (ERP)',
      desc: 'Odoo, SAP Business One, Dynamics 365, inventory, accounting & HRMS.',
      icon: Database,
      targetId: 'divisions',
      interest: 'Muru Tech Division: ERP (Odoo, SAP & Custom ERP Implementation)',
    },
  ];

  const products = [
    {
      title: 'Autonomous AI Agents',
      desc: 'Multi-step goal-seeking agents that query DBs, call APIs, and execute workflows.',
      icon: Bot,
      targetId: 'agents',
      interest: 'Autonomous AI Agents Deployment',
    },
    {
      title: 'WhatsApp & Omnichannel Bots',
      desc: 'Official WhatsApp Business API bots with 24/7 natural conversational intelligence.',
      icon: MessageSquare,
      targetId: 'services',
      interest: 'WhatsApp & Omnichannel Bot Integration',
    },
    {
      title: 'DocuSense & Enterprise RAG',
      desc: 'Accurate knowledge engines grounded in your PDFs, contracts, and internal manuals.',
      icon: FileText,
      targetId: 'services',
      interest: 'DocuSense & Knowledge Retrieval RAG',
    },
    {
      title: 'Live Agent Assist & Handoff',
      desc: 'Smart human-in-the-loop escalation with real-time AI reply suggestions.',
      icon: Headphones,
      targetId: 'services',
      interest: 'Live Agent Assist & Human Handoff',
    },
    {
      title: 'Workflow Automation Engine',
      desc: 'Seamless multi-app bridges connecting CRM, ERP, payments, and logistics.',
      icon: Workflow,
      targetId: 'services',
      interest: 'Workflow Automation & System Integration',
    },
  ];

  const industrySolutions = [
    {
      title: 'Retail & E-Commerce',
      desc: 'WhatsApp catalog checkout, automated order tracking, and abandoned cart recovery.',
      icon: ShoppingBag,
      targetId: 'industries',
      interest: 'E-Commerce & Retail AI Automation',
    },
    {
      title: 'Healthcare & Clinics',
      desc: 'Automated appointment triage, patient SMS reminders, and clinic inquiry handling.',
      icon: HeartPulse,
      targetId: 'industries',
      interest: 'Healthcare & Clinic AI Solutions',
    },
    {
      title: 'Logistics & Fleet Ops',
      desc: 'Real-time consignment tracking, driver dispatch bots, and waybill data extraction.',
      icon: Truck,
      targetId: 'industries',
      interest: 'Logistics & Fleet AI Automation',
    },
    {
      title: 'Financial Services & SACCOs',
      desc: 'Loan pre-screening, KYC document verification, and account balance assistants.',
      icon: Landmark,
      targetId: 'industries',
      interest: 'Financial Services AI Solutions',
    },
    {
      title: 'Real Estate & Property',
      desc: '24/7 lead qualification, automated viewing scheduling, and tenant query desks.',
      icon: Building2,
      targetId: 'industries',
      interest: 'Real Estate & Property Management AI',
    },
  ];

  const useCaseSolutions = [
    {
      title: 'Customer Support Automation',
      desc: 'Resolve 80%+ of repetitive queries with < 1.2s response time.',
      targetId: 'solutions',
      interest: 'Customer Support Automation',
    },
    {
      title: 'Inbound Lead Qualification',
      desc: 'Engage website visitors instantly and auto-book qualified demos.',
      targetId: 'solutions',
      interest: 'Inbound Lead Qualification Bot',
    },
    {
      title: 'Back-Office Document Processing',
      desc: 'Parse invoices, receipts, and compliance forms straight to your database.',
      targetId: 'solutions',
      interest: 'Document Extraction & OCR Pipelines',
    },
  ];

  const platformFeatures = [
    {
      title: 'Hybrid Multi-LLM Routing',
      desc: 'Dynamic load balancing across Gemini 2.5, Claude 3.7, DeepSeek R1, and GPT-4o.',
      icon: Cpu,
      targetId: 'technology',
      interest: 'Multi-LLM Hybrid Core Architecture',
    },
    {
      title: 'Enterprise Security & SOC 2 Readiness',
      desc: 'VPC isolation, zero data retention for training, audit logs, and strict RBAC.',
      icon: ShieldCheck,
      targetId: 'technology',
      interest: 'Enterprise AI Security & Data Governance',
    },
    {
      title: 'Omnichannel API Gateway',
      desc: 'Unified connectors for WhatsApp Business, Webchat, Instagram, Slack, and Email.',
      icon: Layers,
      targetId: 'technology',
      interest: 'Omnichannel API Gateway Integration',
    },
    {
      title: 'Real-time Command Cockpit',
      desc: 'Live telemetry, agent execution traces, manual override switch, and analytics.',
      icon: Terminal,
      targetId: 'cockpit-switch',
      interest: 'Live Command Center Access',
    },
  ];

  const resources = [
    {
      title: 'Case Studies & Client ROI',
      desc: 'Read real production results, hours saved, and verified performance benchmarks.',
      icon: BarChart3,
      targetId: 'case-studies',
    },
    {
      title: '6-Stage Engineering Delivery Process',
      desc: 'From initial feasibility audit to hardened production rollout and 24/7 SLA.',
      icon: CheckCircle2,
      targetId: 'process',
    },
    {
      title: 'Interactive ROI & Savings Calculator',
      desc: 'Model your team size, repetitive hours, and calculate annualized ROI.',
      icon: Calculator,
      targetId: 'calculator',
    },
    {
      title: 'Interactive Problem Matcher',
      desc: 'Select your operational bottleneck to generate an immediate architecture blueprint.',
      icon: Zap,
      targetId: 'solutions',
    },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090D]/95 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/80 py-2.5 sm:py-3'
          : 'bg-[#07090D]/80 backdrop-blur-md border-b border-white/[0.04] py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* 1. Brand Logo (Engati-style high-clarity brand area with white logo on dark) */}
          <div className="flex items-center flex-shrink-0">
            <button
              onClick={() => {
                if (currentView !== 'website') onToggleView('website');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center group cursor-pointer focus:outline-none py-1"
              id="brand-logo-btn"
              aria-label="Muru AI Homepage"
            >
              <img
                src="/Logo-White-No-Bg.webp"
                alt="Muru AI - Intelligent Solutions Built for Business"
                className="h-7 sm:h-8.5 w-auto max-w-[140px] sm:max-w-[180px] object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
            </button>
          </div>

          {/* 2. Desktop Navigation with Engati-Style Mega Dropdowns */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium"
            onMouseLeave={handleMouseLeave}
          >
            {/* Divisions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('divisions')}
            >
              <button
                onClick={() => handleMouseEnter(activeDropdown === 'divisions' ? null : 'divisions')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                  activeDropdown === 'divisions'
                    ? 'text-[#E59500] bg-white/[0.05]'
                    : 'text-zinc-300 hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                <span className="font-semibold">Divisions</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#E59500]/20 text-[#E59500] border border-[#E59500]/30">
                  6
                </span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === 'divisions' ? 'rotate-180 text-[#E59500]' : 'text-zinc-400'
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === 'divisions' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.16 }}
                    className="absolute top-full left-0 mt-2 w-[600px] rounded-2xl bg-[#0B0E14] border border-white/[0.1] shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl p-4 z-50"
                  >
                    <div className="flex items-center justify-between px-2 mb-2">
                      <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                        Muru Tech Enterprise Divisions (6 Practices)
                      </div>
                      <span className="text-[10px] font-mono text-[#E59500] bg-[#E59500]/10 px-2 py-0.5 rounded border border-[#E59500]/20">
                        Nairobi • Global SLA
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-1.5">
                      {divisionsMenu.map((item) => {
                        const Icon = item.icon;
                        return (
                          <button
                            key={item.code}
                            onClick={() => scrollToTarget('divisions', item.interest)}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.05] border border-transparent hover:border-white/[0.08] transition-all text-left group cursor-pointer"
                          >
                            <div className="p-2 rounded-lg bg-[#E59500]/10 text-[#E59500] group-hover:bg-[#E59500] group-hover:text-black transition-colors shrink-0 mt-0.5">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center gap-1.5">
                                <span className="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded bg-white/[0.06] text-[#E59500]">
                                  {item.code}
                                </span>
                                <span className="text-xs font-semibold text-white group-hover:text-[#E59500] truncate transition-colors">
                                  {item.title}
                                </span>
                              </div>
                              <p className="text-[11px] text-zinc-400 leading-relaxed line-clamp-1 mt-1">
                                {item.desc}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center justify-between px-2 text-xs">
                      <button
                        onClick={() => scrollToTarget('divisions')}
                        className="text-zinc-400 hover:text-white flex items-center gap-1 cursor-pointer font-mono text-[11px]"
                      >
                        <span>Explore full division matrix</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => {
                          setActiveDropdown(null);
                          onOpenConsultation('Multi-Division Enterprise Consultation');
                        }}
                        className="text-[#E59500] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                      >
                        <span>Book Division Consultation</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('products')}
            >
              <button
                onClick={() => handleMouseEnter(activeDropdown === 'products' ? null : 'products')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                  activeDropdown === 'products'
                    ? 'text-[#E59500] bg-white/[0.05]'
                    : 'text-zinc-300 hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === 'products' ? 'rotate-180 text-[#E59500]' : 'text-zinc-400'
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === 'products' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.16 }}
                    className="absolute top-full left-0 mt-2 w-[520px] rounded-2xl bg-[#0B0E14] border border-white/[0.1] shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl p-4 z-50"
                  >
                    <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider px-2 mb-2">
                      Core Conversational & Autonomous AI Products
                    </div>
                    <div className="grid grid-cols-1 gap-1">
                      {products.map((item) => {
                        const Icon = item.icon;
                        return (
                          <button
                            key={item.title}
                            onClick={() => scrollToTarget(item.targetId, item.interest)}
                            className="flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-white/[0.04] transition-all text-left group cursor-pointer"
                          >
                            <div className="p-2 rounded-lg bg-[#E59500]/10 text-[#E59500] group-hover:bg-[#E59500] group-hover:text-black transition-colors shrink-0 mt-0.5">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-white group-hover:text-[#E59500] flex items-center gap-1.5 transition-colors">
                                <span>{item.title}</span>
                                <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#E59500]" />
                              </div>
                              <p className="text-xs text-zinc-400 leading-relaxed line-clamp-1 mt-0.5">
                                {item.desc}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center justify-between px-2 text-xs">
                      <span className="text-zinc-400">Need a custom AI workforce architecture?</span>
                      <button
                        onClick={() => {
                          setActiveDropdown(null);
                          onOpenConsultation('Custom AI Workforce Architecture');
                        }}
                        className="text-[#E59500] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                      >
                        <span>Talk to an Architect</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('solutions')}
            >
              <button
                onClick={() => handleMouseEnter(activeDropdown === 'solutions' ? null : 'solutions')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                  activeDropdown === 'solutions'
                    ? 'text-[#E59500] bg-white/[0.05]'
                    : 'text-zinc-300 hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                <span>Solutions</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === 'solutions' ? 'rotate-180 text-[#E59500]' : 'text-zinc-400'
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === 'solutions' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.16 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[680px] rounded-2xl bg-[#0B0E14] border border-white/[0.1] shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl p-5 z-50"
                  >
                    <div className="grid grid-cols-2 gap-6">
                      {/* Column 1: By Industry */}
                      <div>
                        <div className="text-[11px] font-mono text-[#E59500] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                          <span>By Industry</span>
                        </div>
                        <div className="space-y-1">
                          {industrySolutions.map((item) => {
                            const Icon = item.icon;
                            return (
                              <button
                                key={item.title}
                                onClick={() => scrollToTarget(item.targetId, item.interest)}
                                className="w-full flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/[0.04] transition-all text-left group cursor-pointer"
                              >
                                <div className="p-1.5 rounded-lg bg-white/[0.05] text-zinc-300 group-hover:text-[#E59500] group-hover:bg-[#E59500]/10 shrink-0 mt-0.5 transition-colors">
                                  <Icon className="w-3.5 h-3.5" />
                                </div>
                                <div>
                                  <div className="text-xs font-semibold text-white group-hover:text-[#E59500] transition-colors">
                                    {item.title}
                                  </div>
                                  <p className="text-[11px] text-zinc-400 line-clamp-1 mt-0.5">
                                    {item.desc}
                                  </p>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Column 2: By Use Case + Highlight Card */}
                      <div className="flex flex-col justify-between border-l border-white/[0.06] pl-6">
                        <div>
                          <div className="text-[11px] font-mono text-[#E59500] uppercase tracking-wider mb-2.5">
                            By Business Use Case
                          </div>
                          <div className="space-y-2">
                            {useCaseSolutions.map((useCase) => (
                              <button
                                key={useCase.title}
                                onClick={() => scrollToTarget(useCase.targetId, useCase.interest)}
                                className="w-full p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-[#E59500]/40 hover:bg-white/[0.04] text-left group cursor-pointer transition-all"
                              >
                                <div className="text-xs font-semibold text-white group-hover:text-[#E59500] flex items-center justify-between">
                                  <span>{useCase.title}</span>
                                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#E59500]" />
                                </div>
                                <p className="text-[11px] text-zinc-400 mt-1">
                                  {useCase.desc}
                                </p>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Engati-style Spotlight Callout Card */}
                        <div className="mt-4 p-3 rounded-xl bg-gradient-to-br from-[#E59500]/10 to-transparent border border-[#E59500]/20 text-xs">
                          <div className="font-semibold text-white flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-[#E59500]" />
                            <span>14-Day Proof-of-Concept</span>
                          </div>
                          <p className="text-zinc-400 text-[11px] mt-1">
                            Deploy a working prototype on your business data before commitment.
                          </p>
                          <button
                            onClick={() => {
                              setActiveDropdown(null);
                              onOpenConsultation('14-Day Pilot Prototype');
                            }}
                            className="mt-2 text-[11px] text-[#E59500] font-bold flex items-center gap-1 hover:underline cursor-pointer"
                          >
                            <span>Request Pilot Access</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Platform Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('platform')}
            >
              <button
                onClick={() => handleMouseEnter(activeDropdown === 'platform' ? null : 'platform')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                  activeDropdown === 'platform'
                    ? 'text-[#E59500] bg-white/[0.05]'
                    : 'text-zinc-300 hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                <span>Platform</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === 'platform' ? 'rotate-180 text-[#E59500]' : 'text-zinc-400'
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === 'platform' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.16 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] rounded-2xl bg-[#0B0E14] border border-white/[0.1] shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl p-4 z-50"
                  >
                    <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider px-2 mb-2">
                      Enterprise AI Engine & Infrastructure
                    </div>
                    <div className="grid grid-cols-1 gap-1">
                      {platformFeatures.map((item) => {
                        const Icon = item.icon;
                        const isCockpit = item.targetId === 'cockpit-switch';
                        return (
                          <button
                            key={item.title}
                            onClick={() => {
                              setActiveDropdown(null);
                              if (isCockpit) {
                                onToggleView('cockpit');
                              } else {
                                scrollToTarget(item.targetId, item.interest);
                              }
                            }}
                            className="flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-white/[0.04] transition-all text-left group cursor-pointer"
                          >
                            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors shrink-0 mt-0.5">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-white group-hover:text-[#E59500] flex items-center gap-1.5 transition-colors">
                                <span>{item.title}</span>
                                {isCockpit && (
                                  <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded">
                                    LIVE
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-zinc-400 leading-relaxed line-clamp-1 mt-0.5">
                                {item.desc}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Pricing / ROI Direct Link */}
            <button
              onClick={() => scrollToTarget('calculator')}
              className="px-3 py-2 rounded-lg text-sm text-zinc-300 hover:text-white hover:bg-white/[0.03] transition-colors cursor-pointer"
            >
              Pricing & ROI
            </button>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('resources')}
            >
              <button
                onClick={() => handleMouseEnter(activeDropdown === 'resources' ? null : 'resources')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                  activeDropdown === 'resources'
                    ? 'text-[#E59500] bg-white/[0.05]'
                    : 'text-zinc-300 hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                <span>Resources</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === 'resources' ? 'rotate-180 text-[#E59500]' : 'text-zinc-400'
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === 'resources' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.16 }}
                    className="absolute top-full right-0 mt-2 w-[460px] rounded-2xl bg-[#0B0E14] border border-white/[0.1] shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl p-4 z-50"
                  >
                    <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider px-2 mb-2">
                      Engineering Knowledge & Tools
                    </div>
                    <div className="grid grid-cols-1 gap-1">
                      {resources.map((item) => {
                        const Icon = item.icon;
                        return (
                          <button
                            key={item.title}
                            onClick={() => scrollToTarget(item.targetId)}
                            className="flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-white/[0.04] transition-all text-left group cursor-pointer"
                          >
                            <div className="p-2 rounded-lg bg-white/[0.05] text-[#E59500] group-hover:bg-[#E59500] group-hover:text-black transition-colors shrink-0 mt-0.5">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-white group-hover:text-[#E59500] transition-colors">
                                {item.title}
                              </div>
                              <p className="text-xs text-zinc-400 line-clamp-1 mt-0.5">
                                {item.desc}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* 3. Right Action Area (Engati-Style: Cockpit switch + WhatsApp + "Book a Demo" CTA) */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Live Cockpit Toggle Button */}
            <button
              onClick={() => onToggleView(currentView === 'website' ? 'cockpit' : 'website')}
              className={`hidden md:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                currentView === 'cockpit'
                  ? 'bg-amber-500/20 text-[#E59500] border-[#E59500] shadow-[0_0_20px_rgba(229,149,0,0.3)]'
                  : 'bg-white/[0.04] text-zinc-300 border-white/[0.08] hover:bg-white/[0.08] hover:text-white'
              }`}
              title="Switch between Website and Live Interactive Cockpit"
              id="view-toggle-btn"
            >
              <Terminal className="w-3.5 h-3.5 text-[#E59500]" />
              <span>{currentView === 'website' ? 'Client Cockpit' : 'Public Site'}</span>
            </button>

            {/* WhatsApp Quick Icon */}
            <a
              href={COMPANY_DETAILS.whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center justify-center p-2 sm:p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 hover:scale-105 active:scale-95 transition-all"
              title="Chat directly with Lead Architect on WhatsApp"
              id="header-whatsapp-link"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            {/* Engati-Style Primary High-Impact CTA: "Book a Demo" */}
            <button
              onClick={() => onOpenConsultation('Executive Demo & Feasibility Audit')}
              className="relative group overflow-hidden px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-xl font-display font-semibold text-xs sm:text-sm text-black bg-gradient-to-r from-[#E59500] via-[#F4A81E] to-[#CC7A00] shadow-[0_0_25px_rgba(229,149,0,0.35)] hover:shadow-[0_0_35px_rgba(229,149,0,0.55)] transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 whitespace-nowrap"
              id="header-consultation-btn"
            >
              <Sparkles className="w-3.5 h-3.5 fill-black/20" />
              <span>Book a Demo</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/[0.05] border border-white/[0.08] transition-colors cursor-pointer min-w-[38px] min-h-[38px] flex items-center justify-center"
              id="mobile-nav-toggle"
              aria-label="Toggle Mobile Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Engati-Style Accordion Menu) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#07090D]/98 border-b border-white/[0.1] backdrop-blur-2xl px-4 py-5 shadow-2xl overflow-hidden max-h-[85vh] overflow-y-auto no-scrollbar"
            id="mobile-menu-drawer"
          >
            {/* Top Row: System Status & Cockpit Switch */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-mono text-emerald-400">24 Enterprise Nodes Live</span>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onToggleView(currentView === 'website' ? 'cockpit' : 'website');
                }}
                className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/[0.06] border border-white/[0.1] text-[#E59500] flex items-center gap-1.5 active:scale-95"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>{currentView === 'website' ? 'Open Cockpit' : 'Open Website'}</span>
              </button>
            </div>

            {/* Accordion Categories */}
            <div className="space-y-2">
              {/* Divisions Accordion */}
              <div className="border border-white/[0.08] rounded-xl overflow-hidden bg-white/[0.03]">
                <button
                  onClick={() =>
                    setMobileExpandedSection(
                      mobileExpandedSection === 'divisions' ? null : 'divisions'
                    )
                  }
                  className="w-full flex items-center justify-between p-3 text-sm font-semibold text-white cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[#E59500]">Divisions</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#E59500]/20 text-[#E59500]">
                      6 Practices
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 transition-transform ${
                      mobileExpandedSection === 'divisions' ? 'rotate-180 text-[#E59500]' : ''
                    }`}
                  />
                </button>
                {mobileExpandedSection === 'divisions' && (
                  <div className="p-2 pt-0 space-y-1 bg-black/20">
                    {divisionsMenu.map((item) => (
                      <button
                        key={item.code}
                        onClick={() => scrollToTarget('divisions', item.interest)}
                        className="w-full text-left p-2.5 rounded-lg text-xs text-zinc-300 hover:text-white hover:bg-white/[0.05] border border-transparent hover:border-white/[0.06]"
                      >
                        <div className="flex items-center gap-1.5 font-medium text-white">
                          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/[0.08] text-[#E59500]">
                            {item.code}
                          </span>
                          <span>{item.title}</span>
                        </div>
                        <div className="text-[11px] text-zinc-400 mt-1 line-clamp-1">
                          {item.desc}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Products Accordion */}
              <div className="border border-white/[0.05] rounded-xl overflow-hidden bg-white/[0.02]">
                <button
                  onClick={() =>
                    setMobileExpandedSection(
                      mobileExpandedSection === 'products' ? null : 'products'
                    )
                  }
                  className="w-full flex items-center justify-between p-3 text-sm font-semibold text-white cursor-pointer"
                >
                  <span>Products</span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 transition-transform ${
                      mobileExpandedSection === 'products' ? 'rotate-180 text-[#E59500]' : ''
                    }`}
                  />
                </button>
                {mobileExpandedSection === 'products' && (
                  <div className="p-2 pt-0 space-y-1 bg-black/20">
                    {products.map((item) => (
                      <button
                        key={item.title}
                        onClick={() => scrollToTarget(item.targetId, item.interest)}
                        className="w-full text-left p-2 rounded-lg text-xs text-zinc-300 hover:text-white hover:bg-white/[0.04]"
                      >
                        <div className="font-medium text-white">{item.title}</div>
                        <div className="text-[11px] text-zinc-400 mt-0.5 line-clamp-1">
                          {item.desc}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Solutions Accordion */}
              <div className="border border-white/[0.05] rounded-xl overflow-hidden bg-white/[0.02]">
                <button
                  onClick={() =>
                    setMobileExpandedSection(
                      mobileExpandedSection === 'solutions' ? null : 'solutions'
                    )
                  }
                  className="w-full flex items-center justify-between p-3 text-sm font-semibold text-white cursor-pointer"
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 transition-transform ${
                      mobileExpandedSection === 'solutions' ? 'rotate-180 text-[#E59500]' : ''
                    }`}
                  />
                </button>
                {mobileExpandedSection === 'solutions' && (
                  <div className="p-2 pt-0 space-y-1 bg-black/20">
                    <div className="text-[10px] font-mono text-[#E59500] px-2 py-1 uppercase">
                      Industries & Use Cases
                    </div>
                    {industrySolutions.slice(0, 4).map((item) => (
                      <button
                        key={item.title}
                        onClick={() => scrollToTarget(item.targetId, item.interest)}
                        className="w-full text-left p-2 rounded-lg text-xs text-zinc-300 hover:text-white hover:bg-white/[0.04]"
                      >
                        <div className="font-medium text-white">{item.title}</div>
                        <div className="text-[11px] text-zinc-400 mt-0.5 line-clamp-1">
                          {item.desc}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Platform Accordion */}
              <div className="border border-white/[0.05] rounded-xl overflow-hidden bg-white/[0.02]">
                <button
                  onClick={() =>
                    setMobileExpandedSection(
                      mobileExpandedSection === 'platform' ? null : 'platform'
                    )
                  }
                  className="w-full flex items-center justify-between p-3 text-sm font-semibold text-white cursor-pointer"
                >
                  <span>Platform</span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 transition-transform ${
                      mobileExpandedSection === 'platform' ? 'rotate-180 text-[#E59500]' : ''
                    }`}
                  />
                </button>
                {mobileExpandedSection === 'platform' && (
                  <div className="p-2 pt-0 space-y-1 bg-black/20">
                    {platformFeatures.map((item) => (
                      <button
                        key={item.title}
                        onClick={() => scrollToTarget(item.targetId, item.interest)}
                        className="w-full text-left p-2 rounded-lg text-xs text-zinc-300 hover:text-white hover:bg-white/[0.04]"
                      >
                        <div className="font-medium text-white">{item.title}</div>
                        <div className="text-[11px] text-zinc-400 mt-0.5 line-clamp-1">
                          {item.desc}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Direct Links */}
              <button
                onClick={() => scrollToTarget('calculator')}
                className="w-full text-left p-3 text-sm font-semibold text-white border border-white/[0.05] rounded-xl bg-white/[0.02] hover:bg-white/[0.04]"
              >
                Pricing & ROI Calculator
              </button>

              <button
                onClick={() => scrollToTarget('case-studies')}
                className="w-full text-left p-3 text-sm font-semibold text-white border border-white/[0.05] rounded-xl bg-white/[0.02] hover:bg-white/[0.04]"
              >
                Case Studies & Benchmarks
              </button>
            </div>

            {/* Bottom Actions */}
            <div className="mt-5 pt-4 border-t border-white/[0.08] space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation('Executive Demo & Feasibility Audit');
                }}
                className="w-full py-3.5 px-4 rounded-xl font-display font-bold text-sm text-black bg-[#E59500] hover:bg-[#CC7A00] flex items-center justify-center gap-2 shadow-lg shadow-[#E59500]/25 active:scale-98"
              >
                <Sparkles className="w-4 h-4 fill-black/20" />
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={COMPANY_DETAILS.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl font-medium text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center gap-2 hover:bg-emerald-500/20 active:scale-98"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Direct on WhatsApp ({COMPANY_DETAILS.whatsappNumber})</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
