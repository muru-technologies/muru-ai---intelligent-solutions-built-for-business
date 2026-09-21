import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AiForBusiness } from './components/AiForBusiness';
import { AiServices } from './components/AiServices';
import { ProblemSolutionFinder } from './components/ProblemSolutionFinder';
import { AiAgentsShowcase } from './components/AiAgentsShowcase';
import { ProcessFlow } from './components/ProcessFlow';
import { IndustriesSection } from './components/IndustriesSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { TechnologySection } from './components/TechnologySection';
import { WhyMuruAi } from './components/WhyMuruAi';
import { AboutSection } from './components/AboutSection';
import { ConsultationBanner } from './components/ConsultationBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { AIService, ProblemSolution, AIAgent, IndustryItem } from './types';
import { CommandCenterDashboard } from './components/command/CommandCenterDashboard';
import { CoreBootSequence } from './components/command/CoreBootSequence';
import { Terminal, Globe } from 'lucide-react';

export default function App() {
  const [viewMode, setViewMode] = useState<'command-center' | 'portal'>('command-center');
  const [showBootSequence, setShowBootSequence] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalInterest, setModalInterest] = useState<string>('AI Agent');

  // Track scroll position to update active navbar section in portal mode
  useEffect(() => {
    if (viewMode !== 'portal') return;

    const handleScroll = () => {
      const sections = ['hero', 'services', 'solutions', 'agents', 'industries', 'case-studies', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewMode]);

  // Handlers for interactive actions across sections
  const handleOpenConsultation = (interest?: string) => {
    if (interest) {
      setModalInterest(interest);
    }
    setIsModalOpen(true);
  };

  const handleSelectService = (service: AIService) => {
    handleOpenConsultation(service.title);
  };

  const handleSelectSolution = (solution: ProblemSolution) => {
    handleOpenConsultation(solution.solutionTitle);
  };

  const handleDeployAgent = (agent: AIAgent) => {
    handleOpenConsultation(agent.name);
  };

  const handleIndustryInquire = (industry: IndustryItem) => {
    handleOpenConsultation(`AI for ${industry.name}`);
  };

  const scrollToSection = (sectionId: string) => {
    const target = document.querySelector(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // If in Command Center mode, render the futuristic AI Control Room
  if (viewMode === 'command-center') {
    return (
      <>
        {showBootSequence && (
          <CoreBootSequence onComplete={() => setShowBootSequence(false)} />
        )}
        <CommandCenterDashboard
          onExitToPortal={() => setViewMode('portal')}
        />
      </>
    );
  }

  // Otherwise, render the Enterprise Public Solutions Portal
  return (
    <div className="min-h-screen bg-[#08090B] text-[#EDEDED] flex flex-col selection:bg-[#E59500]/30 selection:text-white relative">
      {/* Floating Fast-Switch to AI Command Center */}
      <aside aria-label="Portal Mode Switcher" className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-2">
        <button
          onClick={() => {
            setShowBootSequence(true);
            setViewMode('command-center');
          }}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full glass-panel-dark border border-[#E59500]/40 text-xs font-mono font-bold text-white shadow-2xl hover:border-[#E59500] hover:scale-105 transition-all"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Launch AI Command Center</span>
        </button>
      </aside>

      {/* Top Fixed Navigation */}
      <Navbar
        onOpenConsultation={() => handleOpenConsultation()}
        activeSection={activeSection}
        onEnterCommandCenter={() => {
          setShowBootSequence(true);
          setViewMode('command-center');
        }}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        
        {/* 1. Hero Section with Interactive AI Network Flow */}
        <Hero
          onStartProject={() => handleOpenConsultation()}
          onExploreServices={() => scrollToSection('#services')}
        />

        {/* 2. "AI for Business" Section (Automate, Assist, Understand) */}
        <AiForBusiness
          onLearnMore={(pillarId) => {
            if (pillarId === 'automate') scrollToSection('#services');
            else if (pillarId === 'assist') scrollToSection('#agents');
            else scrollToSection('#solutions');
          }}
        />

        {/* 3. AI Services (6 Visual Cards) */}
        <AiServices
          onSelectService={handleSelectService}
        />

        {/* 4. "What Can AI Do For My Business?" (Clickable Problem Cards) */}
        <ProblemSolutionFinder
          onSelectSolution={handleSelectSolution}
        />

        {/* 5. Muru AI Agents Dedicated Section (Central Glowing Core + 5 Agents) */}
        <AiAgentsShowcase
          onDeployAgent={handleDeployAgent}
        />

        {/* 6. How Muru AI Works (6 Steps: Discover -> Design -> Build -> Integrate -> Launch -> Improve) */}
        <ProcessFlow
          onStartConsultation={() => handleOpenConsultation('Discovery Phase Consultation')}
        />

        {/* 7. Industries (8 Industry Cards & Solutions) */}
        <IndustriesSection
          onIndustryInquire={handleIndustryInquire}
        />

        {/* 8. Case Studies (Storytelling Format with Commercial Metrics) */}
        <CaseStudiesSection
          onStartProject={() => handleOpenConsultation()}
        />

        {/* 9. Technology Ecosystem (Pragmatic Tech Selection) */}
        <TechnologySection />

        {/* 10. Why Muru AI (4 Pillars: Business First, Practical AI, Integrated, Built to Scale) */}
        <WhyMuruAi />

        {/* 11. About Muru AI (African Business Future, Mission & Vision) */}
        <AboutSection
          onStartConsultation={() => handleOpenConsultation()}
        />

        {/* 12. Major AI Consultation Conversion Banner */}
        <ConsultationBanner
          onTalkToAi={() => scrollToSection('#contact')}
          onBookConsultation={() => handleOpenConsultation('Executive Consultation')}
        />

        {/* 13. Contact Page / Interactive Request Desk */}
        <ContactSection
          prefilledInterest={modalInterest}
        />

      </main>

      {/* 14. Enterprise Footer */}
      <Footer
        onNavClick={scrollToSection}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Interactive Project Scoping / Consultation Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialInterest={modalInterest}
      />

      {/* Floating WhatsApp Quick Action */}
      <WhatsAppFloatingButton />
    </div>
  );
}
