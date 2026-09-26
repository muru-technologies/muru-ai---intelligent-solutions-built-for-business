/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
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
import DivisionPage from './components/DivisionPage';
import ProductPage from './components/ProductPage';
import SolutionPage from './components/SolutionPage';
import PlatformPage from './components/PlatformPage';
import ResourcePage from './components/ResourcePage';
import ConsultationModal from './components/ConsultationModal';
import Footer from './components/Footer';
import { COMPANY_DETAILS } from './data/siteData';
import { MessageSquare, Sparkles } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<
    'website' | 'cockpit' | 'division' | 'product' | 'solution' | 'platform' | 'resource'
  >('website');
  const [activeDivisionId, setActiveDivisionId] = useState<string>('ai');
  const [activeProductId, setActiveProductId] = useState<string>('ai-agents');
  const [activeSolutionId, setActiveSolutionId] = useState<string>('retail-ecommerce');
  const [activePlatformId, setActivePlatformId] = useState<string>('hybrid-llm-routing');
  const [activeResourceId, setActiveResourceId] = useState<string>('roi-calculator');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationInterest, setConsultationInterest] = useState('Enterprise AI Strategy & Audit');

  useEffect(() => {
    const syncRouteFromHash = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (hash.startsWith('division/')) {
        const divId = hash.split('/')[1];
        if (divId) {
          setActiveDivisionId(divId);
          setCurrentView('division');
          return;
        }
      } else if (hash.startsWith('product/')) {
        const prodId = hash.split('/')[1];
        if (prodId) {
          setActiveProductId(prodId);
          setCurrentView('product');
          return;
        }
      } else if (hash.startsWith('solution/')) {
        const solId = hash.split('/')[1];
        if (solId) {
          setActiveSolutionId(solId);
          setCurrentView('solution');
          return;
        }
      } else if (hash.startsWith('platform/')) {
        const platId = hash.split('/')[1];
        if (platId) {
          setActivePlatformId(platId);
          setCurrentView('platform');
          return;
        }
      } else if (hash.startsWith('resource/')) {
        const resId = hash.split('/')[1];
        if (resId) {
          setActiveResourceId(resId);
          setCurrentView('resource');
          return;
        }
      } else if (hash === 'cockpit') {
        setCurrentView('cockpit');
        return;
      }
    };

    syncRouteFromHash();
    window.addEventListener('popstate', syncRouteFromHash);
    window.addEventListener('hashchange', syncRouteFromHash);
    return () => {
      window.removeEventListener('popstate', syncRouteFromHash);
      window.removeEventListener('hashchange', syncRouteFromHash);
    };
  }, []);

  const handleOpenConsultation = (interest?: string) => {
    if (interest) {
      setConsultationInterest(interest);
    }
    setIsConsultationOpen(true);
  };

  const handleToggleView = (view: 'website' | 'cockpit') => {
    setCurrentView(view);
    if (view === 'cockpit') {
      window.history.pushState(null, '', '#cockpit');
    } else {
      window.history.pushState(null, '', window.location.pathname);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToDivision = (divisionId: string) => {
    setActiveDivisionId(divisionId);
    setCurrentView('division');
    window.history.pushState(null, '', `#division/${divisionId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToProduct = (productId: string) => {
    setActiveProductId(productId);
    setCurrentView('product');
    window.history.pushState(null, '', `#product/${productId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToSolution = (solutionId: string) => {
    setActiveSolutionId(solutionId);
    setCurrentView('solution');
    window.history.pushState(null, '', `#solution/${solutionId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToPlatform = (platformId: string) => {
    setActivePlatformId(platformId);
    setCurrentView('platform');
    window.history.pushState(null, '', `#platform/${platformId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToResource = (resourceId: string) => {
    setActiveResourceId(resourceId);
    setCurrentView('resource');
    window.history.pushState(null, '', `#resource/${resourceId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    if (currentView !== 'website') {
      setCurrentView('website');
      window.history.pushState(null, '', window.location.pathname);
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
        activeDivisionId={activeDivisionId}
        activeProductId={activeProductId}
        activeSolutionId={activeSolutionId}
        activePlatformId={activePlatformId}
        activeResourceId={activeResourceId}
        onToggleView={handleToggleView}
        onNavigateToDivision={handleNavigateToDivision}
        onNavigateToProduct={handleNavigateToProduct}
        onNavigateToSolution={handleNavigateToSolution}
        onNavigateToPlatform={handleNavigateToPlatform}
        onNavigateToResource={handleNavigateToResource}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Main View Transition */}
      <main>
        <AnimatePresence mode="wait">
          {currentView === 'website' && (
            <motion.div
              key="website"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Hero with Live Pipeline Simulator */}
              <Hero
                onOpenConsultation={handleOpenConsultation}
                onExploreSolutions={() => scrollToSection('divisions')}
              />

              {/* Muru Tech 6 Enterprise Divisions: AI, CONSULT, SMS, ROBOTICS, APP & LICENCES, ERP */}
              <DivisionsSection
                onSelectDivision={handleOpenConsultation}
                onNavigateToDivision={handleNavigateToDivision}
              />

              {/* Interactive Problem Matcher */}
              <ProblemMatcher
                onSelectSolution={handleOpenConsultation}
                onNavigateToProduct={handleNavigateToProduct}
                onNavigateToSolution={handleNavigateToSolution}
              />

              {/* 8 Enterprise AI Products & Services */}
              <ServicesSection
                onSelectService={handleOpenConsultation}
                onNavigateToProduct={handleNavigateToProduct}
              />

              {/* Autonomous AI Agents Fleet with Reasoning Traces */}
              <AutonomousAgents
                onDeployAgent={handleOpenConsultation}
                onNavigateToProduct={handleNavigateToProduct}
              />

              {/* Interactive ROI & Hours-Saved Estimator */}
              <RoiCalculator onBookAuditWithMetrics={handleOpenConsultation} />

              {/* Case Studies with Verified Metrics */}
              <CaseStudiesSection onDiscussProject={handleOpenConsultation} />

              {/* 6-Stage Disciplined Delivery Process */}
              <ProcessSection onStartAudit={() => handleOpenConsultation('Stage 01 AI Feasibility Audit')} />

              {/* 8 Specialized Vertical Blueprints */}
              <IndustriesSection
                onSelectIndustry={handleOpenConsultation}
                onNavigateToSolution={handleNavigateToSolution}
              />

              {/* Technology Stack & Live System Matrix */}
              <TechnologySection onNavigateToPlatform={handleNavigateToPlatform} />

              {/* 4 Core Pillars, About Muru Group & Direct Contact */}
              <WhyUsAndAbout
                onOpenConsultation={() => handleOpenConsultation('Muru AI Strategic Consultation')}
                onNavigateToDivision={handleNavigateToDivision}
              />
            </motion.div>
          )}

          {currentView === 'division' && (
            <motion.div
              key={`division-${activeDivisionId}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <DivisionPage
                divisionId={activeDivisionId}
                onBackToHome={() => handleToggleView('website')}
                onNavigateToDivision={handleNavigateToDivision}
                onOpenConsultation={handleOpenConsultation}
              />
            </motion.div>
          )}

          {currentView === 'product' && (
            <motion.div
              key={`product-${activeProductId}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ProductPage
                productId={activeProductId}
                onBackToHome={() => handleToggleView('website')}
                onNavigateToProduct={handleNavigateToProduct}
                onOpenConsultation={handleOpenConsultation}
              />
            </motion.div>
          )}

          {currentView === 'solution' && (
            <motion.div
              key={`solution-${activeSolutionId}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <SolutionPage
                solutionId={activeSolutionId}
                onBackToHome={() => handleToggleView('website')}
                onNavigateToSolution={handleNavigateToSolution}
                onNavigateToProduct={handleNavigateToProduct}
                onOpenConsultation={handleOpenConsultation}
              />
            </motion.div>
          )}

          {currentView === 'platform' && (
            <motion.div
              key={`platform-${activePlatformId}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <PlatformPage
                platformId={activePlatformId}
                onBackToHome={() => handleToggleView('website')}
                onNavigateToPlatform={handleNavigateToPlatform}
                onOpenCockpit={() => handleToggleView('cockpit')}
                onOpenConsultation={handleOpenConsultation}
              />
            </motion.div>
          )}

          {currentView === 'resource' && (
            <motion.div
              key={`resource-${activeResourceId}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ResourcePage
                resourceId={activeResourceId}
                onBackToHome={() => handleToggleView('website')}
                onNavigateToResource={handleNavigateToResource}
                onNavigateToProduct={handleNavigateToProduct}
                onOpenConsultation={handleOpenConsultation}
              />
            </motion.div>
          )}

          {currentView === 'cockpit' && (
            <motion.div
              key="cockpit"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
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
        onNavigateToDivision={handleNavigateToDivision}
        onNavigateToProduct={handleNavigateToProduct}
        onNavigateToSolution={handleNavigateToSolution}
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
