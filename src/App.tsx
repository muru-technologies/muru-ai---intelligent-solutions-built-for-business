/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import DivisionsSection from './components/DivisionsSection';
import ProblemMatcher from './components/ProblemMatcher';
import ServicesSection from './components/ServicesSection';
import AutonomousAgents from './components/AutonomousAgents';
import RoiCalculator from './components/RoiCalculator';
import CaseStudiesSection from './components/CaseStudiesSection';
import ProcessSection from './components/ProcessSection';
import IndustriesSection from './components/IndustriesSection';
import TechnologySection from './components/TechnologySection';
import WhyUsAndAbout from './components/WhyUsAndAbout';
import EnterpriseCockpit from './components/EnterpriseCockpit';
import ConsultationModal from './components/ConsultationModal';
import Footer from './components/Footer';
import { COMPANY_DETAILS } from './data/siteData';
import { MessageSquare, Sparkles } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'website' | 'cockpit'>('website');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationInterest, setConsultationInterest] = useState('Enterprise AI Strategy & Audit');

  const handleOpenConsultation = (interest?: string) => {
    if (interest) {
      setConsultationInterest(interest);
    }
    setIsConsultationOpen(true);
  };

  const handleToggleView = (view: 'website' | 'cockpit') => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    if (currentView !== 'website') {
      setCurrentView('website');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07090D] text-[#ECEFF3] font-sans antialiased selection:bg-[#E59500] selection:text-black">
      {/* Global Header Navigation */}
      <Header
        currentView={currentView}
        onToggleView={handleToggleView}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Main View Transition */}
      <main>
        <AnimatePresence mode="wait">
          {currentView === 'website' ? (
            <motion.div
              key="website"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {/* Hero with Live Pipeline Simulator */}
              <Hero
                onOpenConsultation={handleOpenConsultation}
                onExploreSolutions={() => scrollToSection('divisions')}
              />

              {/* Muru Tech 6 Enterprise Divisions: AI, CONSULT, SMS, ROBOTICS, APP & LICENCES, ERP */}
              <DivisionsSection onSelectDivision={handleOpenConsultation} />

              {/* Interactive Problem Matcher */}
              <ProblemMatcher onSelectSolution={handleOpenConsultation} />

              {/* 6 Specialized Enterprise AI Services */}
              <ServicesSection onSelectService={handleOpenConsultation} />

              {/* Autonomous AI Agents Fleet with Reasoning Traces */}
              <AutonomousAgents onDeployAgent={handleOpenConsultation} />

              {/* Interactive ROI & Hours-Saved Estimator */}
              <RoiCalculator onBookAuditWithMetrics={handleOpenConsultation} />

              {/* Case Studies with Verified Metrics */}
              <CaseStudiesSection onDiscussProject={handleOpenConsultation} />

              {/* 6-Stage Disciplined Delivery Process */}
              <ProcessSection onStartAudit={() => handleOpenConsultation('Stage 01 AI Feasibility Audit')} />

              {/* 8 Specialized Vertical Blueprints */}
              <IndustriesSection onSelectIndustry={handleOpenConsultation} />

              {/* Technology Stack & Live System Matrix */}
              <TechnologySection />

              {/* 4 Core Pillars, About Muru Group & Nairobi Direct Contact */}
              <WhyUsAndAbout onOpenConsultation={() => handleOpenConsultation('Muru AI Strategic Consultation')} />
            </motion.div>
          ) : (
            <motion.div
              key="cockpit"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <EnterpriseCockpit
                onReturnToWebsite={() => handleToggleView('website')}
                onBookConsultation={() => handleOpenConsultation('Enterprise Fleet Provisioning')}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Floating Action Badge on Mobile/Desktop */}
      <aside
        aria-label="Quick Actions"
        className="fixed bottom-3.5 right-3 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        <a
          href={COMPANY_DETAILS.whatsappDirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-full bg-[#25D366] text-black font-semibold text-xs shadow-xl shadow-[#25D366]/25 hover:scale-105 active:scale-95 transition-all"
          title="Chat directly with Lead Architect on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 flex-shrink-0" />
          <span className="hidden sm:inline">WhatsApp Lead Desk</span>
        </a>

        <button
          onClick={() => handleOpenConsultation()}
          className="flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-gradient-to-r from-[#E59500] to-[#CC7A00] text-black font-display font-bold text-xs shadow-xl shadow-[#E59500]/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 fill-black/20 flex-shrink-0" />
          <span className="hidden sm:inline">Book Solution Audit</span>
          <span className="sm:hidden">Book Audit</span>
        </button>
      </aside>

      {/* Comprehensive Footer */}
      <Footer
        onOpenCockpit={() => handleToggleView('cockpit')}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Consultation Booking & Feasibility Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialInterest={consultationInterest}
      />
    </div>
  );
}

