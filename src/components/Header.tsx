import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Cpu,
  Menu,
  X,
  PhoneCall,
  Terminal,
  ArrowRight,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/siteData';

interface HeaderProps {
  currentView: 'website' | 'cockpit';
  onToggleView: (view: 'website' | 'cockpit') => void;
  onOpenConsultation: (initialInterest?: string) => void;
}

export default function Header({
  currentView,
  onToggleView,
  onOpenConsultation,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        'hero',
        'solutions',
        'services',
        'agents',
        'calculator',
        'case-studies',
        'process',
        'industries',
        'technology',
        'about',
      ];

      const scrollPosition = window.scrollY + 120;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Solutions', href: '#solutions', id: 'solutions' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'AI Agents', href: '#agents', id: 'agents' },
    { label: 'ROI Estimator', href: '#calculator', id: 'calculator' },
    { label: 'Case Studies', href: '#case-studies', id: 'case-studies' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Industries', href: '#industries', id: 'industries' },
    { label: 'Tech & Security', href: '#technology', id: 'technology' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (currentView !== 'website') {
      onToggleView('website');
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090D]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/60 py-3'
          : 'bg-transparent border-b border-white/[0.04] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo Area */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (currentView !== 'website') onToggleView('website');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center text-left group cursor-pointer focus:outline-none"
              id="brand-logo-btn"
              aria-label="Muru IT - Technology Solutions Group"
            >
              <div className="bg-white hover:bg-white/95 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl transition-all shadow-sm flex items-center justify-center border border-white/20">
                <img
                  src="/Logo-Navy-Blue-No-Bg.webp"
                  alt="Muru IT - Technology Solutions Group"
                  className="h-6 sm:h-7.5 w-auto max-w-[140px] sm:max-w-[170px] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </button>
          </div>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden xl:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = currentView === 'website' && activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#E59500]/15 text-[#E59500] font-semibold shadow-sm'
                      : 'text-zinc-300 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Tools */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Live System Status Pill */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>24 Nodes Live</span>
            </div>

            {/* View Mode Toggle: Website vs Live Cockpit */}
            <button
              onClick={() => onToggleView(currentView === 'website' ? 'cockpit' : 'website')}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                currentView === 'cockpit'
                  ? 'bg-amber-500/20 text-[#E59500] border-[#E59500] shadow-[0_0_20px_rgba(229,149,0,0.3)]'
                  : 'bg-white/[0.04] text-zinc-300 border-white/[0.1] hover:bg-white/[0.08] hover:text-white'
              }`}
              title={
                currentView === 'website'
                  ? 'Switch to Enterprise Command Center'
                  : 'Return to Public Website'
              }
              id="view-toggle-btn"
            >
              <Terminal className="w-3.5 h-3.5 text-[#E59500]" />
              <span className="hidden md:inline">
                {currentView === 'website' ? 'Live Cockpit' : 'Public Site'}
              </span>
            </button>

            {/* WhatsApp Direct Link */}
            <a
              href={COMPANY_DETAILS.whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center justify-center p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-all hover:scale-105"
              title="Chat with Lead Architect on WhatsApp"
              id="header-whatsapp-link"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            {/* Book Consultation CTA Button */}
            <button
              onClick={() => onOpenConsultation()}
              className="relative group overflow-hidden px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-display font-semibold text-xs sm:text-sm text-black bg-gradient-to-r from-[#E59500] via-[#F4A81E] to-[#CC7A00] shadow-[0_0_25px_rgba(229,149,0,0.3)] hover:shadow-[0_0_35px_rgba(229,149,0,0.5)] transition-all cursor-pointer flex items-center gap-1.5 active:scale-95"
              id="header-consultation-btn"
            >
              <Sparkles className="w-3.5 h-3.5 fill-black/20" />
              <span>Book Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/[0.05] border border-white/[0.08] transition-colors cursor-pointer"
              id="mobile-nav-toggle"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay & Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden bg-[#090B0F]/95 border-b border-white/[0.1] backdrop-blur-2xl px-5 py-6 shadow-2xl max-h-[85vh] overflow-y-auto"
            id="mobile-menu-drawer"
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
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
                className="text-xs font-mono px-3 py-1 rounded-lg bg-white/[0.06] border border-white/[0.1] text-[#E59500] flex items-center gap-1.5"
              >
                <Terminal className="w-3 h-3" />
                {currentView === 'website' ? 'Open Cockpit' : 'Open Website'}
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.href)}
                  className="p-3 text-left rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-[#E59500]/40 text-xs font-medium text-zinc-300 hover:text-white transition-all cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 px-4 rounded-xl font-display font-bold text-sm text-black bg-[#E59500] hover:bg-[#CC7A00] flex items-center justify-center gap-2 shadow-lg shadow-[#E59500]/20"
              >
                <span>Book Solution Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={COMPANY_DETAILS.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl font-medium text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center gap-2 hover:bg-emerald-500/20"
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
