import React from 'react';
import { MURU_BRAND } from '../data/muruData';
import { MuruLogo } from './MuruLogo';

interface FooterProps {
  onNavClick: (href: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onOpenConsultation }) => {
  return (
    <footer className="border-t border-white/[0.08] bg-[#050608] pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Branding Bar with Huge Typography */}
        <div className="pb-16 border-b border-white/[0.08]">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center">
                <MuruLogo
                  variant="white"
                  size="lg"
                  showAiBadge={true}
                  showTagline={true}
                  taglineText="TECHNOLOGY SOLUTIONS GROUP"
                />
              </div>
              <p className="text-xl sm:text-2xl font-bold text-zinc-300">
                {MURU_BRAND.tagline}
              </p>
              <p className="text-sm text-zinc-400 leading-relaxed max-w-xl">
                {MURU_BRAND.missionStatement}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3 rounded-full font-semibold text-xs sm:text-sm text-black bg-[#E59500] hover:bg-[#F5A31A] transition-colors"
              >
                Start an AI Project
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-14 border-b border-white/[0.06]">
          
          {/* Company */}
          <div className="space-y-3">
            <div className="text-xs uppercase font-mono tracking-wider text-zinc-400 font-bold">
              Company
            </div>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); onNavClick('#about'); }} className="hover:text-white transition-colors">
                  About Muru AI
                </a>
              </li>
              <li>
                <a href="#why-us" onClick={(e) => { e.preventDefault(); onNavClick('#why-us'); }} className="hover:text-white transition-colors">
                  Why Muru AI
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); onNavClick('#contact'); }} className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <span className="text-zinc-600">Careers (We're hiring engineers)</span>
              </li>
            </ul>
          </div>

          {/* AI Services */}
          <div className="space-y-3">
            <div className="text-xs uppercase font-mono tracking-wider text-[#E59500] font-bold">
              AI Solutions
            </div>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <a href="#agents" onClick={(e) => { e.preventDefault(); onNavClick('#agents'); }} className="hover:text-white transition-colors">
                  AI Agents
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); onNavClick('#services'); }} className="hover:text-white transition-colors">
                  AI Automation
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); onNavClick('#services'); }} className="hover:text-white transition-colors">
                  AI Chatbots & WhatsApp
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); onNavClick('#services'); }} className="hover:text-white transition-colors">
                  Custom AI Applications
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); onNavClick('#services'); }} className="hover:text-white transition-colors">
                  AI Analytics & Dashboards
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <div className="text-xs uppercase font-mono tracking-wider text-zinc-400 font-bold">
              Resources
            </div>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <a href="#case-studies" onClick={(e) => { e.preventDefault(); onNavClick('#case-studies'); }} className="hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#solutions" onClick={(e) => { e.preventDefault(); onNavClick('#solutions'); }} className="hover:text-white transition-colors">
                  Problem & Solution Matrix
                </a>
              </li>
              <li>
                <a href="#technology" onClick={(e) => { e.preventDefault(); onNavClick('#technology'); }} className="hover:text-white transition-colors">
                  Technology Ecosystem
                </a>
              </li>
              <li>
                <a href="#process" onClick={(e) => { e.preventDefault(); onNavClick('#process'); }} className="hover:text-white transition-colors">
                  Delivery Framework
                </a>
              </li>
            </ul>
          </div>

          {/* Muru Technology Parent Info */}
          <div className="space-y-3">
            <div className="text-xs uppercase font-mono tracking-wider text-zinc-400 font-bold">
              Muru Technology
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Muru AI is the dedicated artificial intelligence and intelligent automation division of <strong className="text-zinc-200">Muru Technology</strong>.
            </p>
            <div className="pt-2 text-[11px] text-zinc-500 font-mono">
              Empowering enterprise scale through deep technology.
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Social Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} MURU AI. All rights reserved. Built for business.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E59500] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E59500] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E59500] transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E59500] transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
