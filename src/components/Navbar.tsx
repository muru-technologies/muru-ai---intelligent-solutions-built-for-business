import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { NAV_ITEMS } from '../data/muruData';
import { MuruLogo } from './MuruLogo';

interface NavbarProps {
  onOpenConsultation: (initialInterest?: string) => void;
  activeSection: string;
  onEnterCommandCenter?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConsultation,
  activeSection,
  onEnterCommandCenter
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08090B]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/60 py-3.5'
          : 'bg-transparent border-b border-white/[0.03] py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center group focus:outline-none transition-transform hover:opacity-95"
          aria-label="Muru AI - Intelligent Solutions. Built for Business."
        >
          <MuruLogo
            variant="white"
            size="md"
            showAiBadge={true}
            showTagline={true}
            taglineText="TECHNOLOGY SOLUTIONS GROUP"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.sectionId;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all ${
                  isActive
                    ? 'text-white bg-white/[0.08] shadow-inner'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {onEnterCommandCenter && (
            <button
              onClick={onEnterCommandCenter}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-mono font-semibold text-zinc-200 bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.1] hover:border-[#E59500]/50 transition-all group"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>AI Command Center</span>
            </button>
          )}

          <button
            id="nav-consultation-btn"
            onClick={() => onOpenConsultation()}
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#E59500] to-[#CC7A00] hover:from-[#F5A31A] hover:to-[#E59500] shadow-[0_0_20px_rgba(229,149,0,0.25)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Book a Consultation</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-black" />
          </button>
        </div>

        {/* Mobile Menu Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            id="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/[0.08] bg-[#08090B]/98 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-2">
          <div className="px-2 py-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            Navigation
          </div>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/[0.08] space-y-2">
            {onEnterCommandCenter && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onEnterCommandCenter();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-mono text-xs font-semibold text-white bg-white/[0.05] border border-white/[0.1]"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Enter AI Command Center</span>
              </button>
            )}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#E59500] to-[#CC7A00] shadow-lg shadow-[#E59500]/20"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
