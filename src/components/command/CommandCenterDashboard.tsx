import React, { useState } from 'react';
import { CommandSidebar } from './CommandSidebar';
import { CommandTopBar } from './CommandTopBar';
import { CommandCenterHeroCore } from './CommandCenterHeroCore';
import { CommandMetricsCards } from './CommandMetricsCards';
import { LiveActivityFeed } from './LiveActivityFeed';
import { AgentControlView } from './AgentControlView';
import { AutomationHubView } from './AutomationHubView';
import { KnowledgeCenterView } from './KnowledgeCenterView';
import { AnalyticsIntelligenceView } from './AnalyticsIntelligenceView';
import { SystemHealthPanel } from './SystemHealthPanel';
import { CommandPaletteModal } from './CommandPaletteModal';
import { CommandNavSection } from '../../types';
import { Sparkles, Terminal, Activity, ArrowRight, ShieldCheck, Database, Bot } from 'lucide-react';

interface CommandCenterDashboardProps {
  onExitToPortal: () => void;
}

export const CommandCenterDashboard: React.FC<CommandCenterDashboardProps> = ({
  onExitToPortal
}) => {
  const [currentSection, setCurrentSection] = useState<CommandNavSection>('overview');
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#050608] text-[#F5F7FA] flex flex-col selection:bg-[#E59500]/30 selection:text-white">
      {/* Sci-Fi Global Background Grid */}
      <div className="fixed inset-0 tech-grid-pattern pointer-events-none opacity-40 z-0" />
      <div className="fixed top-0 right-1/4 w-96 h-96 bg-[#E59500]/5 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Sidebar Navigation */}
      <CommandSidebar
        currentSection={currentSection}
        onSelectSection={(sec) => setCurrentSection(sec)}
        onExitToPortal={onExitToPortal}
        isMobileOpen={isMobileMenuOpen}
        onCloseMobile={() => setIsMobileMenuOpen(false)}
      />

      {/* Main Content Area (Offset by sidebar width on desktop) */}
      <div className="lg:pl-64 flex flex-col flex-1 min-w-0 z-10">
        
        {/* Top Header */}
        <CommandTopBar
          currentSection={currentSection}
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
          onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          onExitToPortal={onExitToPortal}
        />

        {/* Dynamic Main Workspace Container */}
        <main className="p-4 sm:p-6 lg:p-8 space-y-8 flex-1">
          
          {/* 1. OVERVIEW VIEW */}
          {currentSection === 'overview' && (
            <div className="space-y-8 animate-fade-in">
              {/* Greeting Bar as requested:
                  GOOD MORNING, MURU
                  Your intelligent systems are operational. */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">
                <div>
                  <div className="text-xs font-mono text-[#E59500] uppercase tracking-widest font-semibold flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Control Room Active</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1 font-display">
                    GOOD MORNING, MURU
                  </h1>
                  <p className="text-sm text-zinc-400 mt-1">
                    Your intelligent systems are operational. All 24 autonomic agent nodes are executing scheduled pipelines.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setCurrentSection('agents')}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-black bg-[#E59500] hover:bg-[#F5A31A] transition-colors"
                  >
                    <Bot className="w-3.5 h-3.5" />
                    <span>Manage Agents</span>
                  </button>
                </div>
              </div>

              {/* Four Futuristic Metric Cards (24 AGENTS, 1,842 TASKS, 87 AUTOMATIONS, 98.7% UPTIME) */}
              <CommandMetricsCards />

              {/* Centerpiece Hero AI Visualization Core */}
              <CommandCenterHeroCore
                onNavigateSection={(sec) => setCurrentSection(sec)}
              />

              {/* 2-Column Split: System Activity Graph / Telemetry & Live AI Activity Feed */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                <div className="lg:col-span-7">
                  <AnalyticsIntelligenceView />
                </div>
                <div className="lg:col-span-5">
                  <LiveActivityFeed />
                </div>
              </div>

              {/* Futuristic System Status & Health Panel */}
              <SystemHealthPanel />
            </div>
          )}

          {/* 2. AI AGENTS VIEW */}
          {(currentSection === 'agents') && (
            <div className="animate-fade-in">
              <AgentControlView />
            </div>
          )}

          {/* 3. AUTOMATION & WORKFLOWS VIEW */}
          {(currentSection === 'automations' || currentSection === 'workflows') && (
            <div className="animate-fade-in">
              <AutomationHubView />
            </div>
          )}

          {/* 4. KNOWLEDGE VIEW */}
          {currentSection === 'knowledge' && (
            <div className="animate-fade-in">
              <KnowledgeCenterView />
            </div>
          )}

          {/* 5. ANALYTICS & INSIGHTS VIEW */}
          {(currentSection === 'analytics' || currentSection === 'insights') && (
            <div className="animate-fade-in space-y-8">
              <AnalyticsIntelligenceView />
              <SystemHealthPanel />
            </div>
          )}

          {/* 6. BUSINESS & CUSTOMERS VIEW */}
          {(currentSection === 'customers' || currentSection === 'conversations' || currentSection === 'projects') && (
            <div className="space-y-6 text-left animate-fade-in">
              <div className="pb-4 border-b border-white/[0.07]">
                <h2 className="text-2xl font-bold text-white uppercase font-display">
                  {currentSection.toUpperCase()} INTELLIGENCE
                </h2>
                <p className="text-xs text-zinc-400">
                  Real-time synchronization across connected business channels (WhatsApp, HubSpot, CRM).
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl glass-card border border-white/[0.08]">
                  <div className="text-xs font-mono text-zinc-500 uppercase">Active Conversations</div>
                  <div className="text-2xl font-bold font-mono text-white mt-1">1,482</div>
                  <div className="text-[11px] text-emerald-400 mt-1">94% Handled Autonomously</div>
                </div>
                <div className="p-5 rounded-2xl glass-card border border-white/[0.08]">
                  <div className="text-xs font-mono text-zinc-500 uppercase">Qualified Pipeline</div>
                  <div className="text-2xl font-bold font-mono text-[#E59500] mt-1">$428,000</div>
                  <div className="text-[11px] text-zinc-400 mt-1">Generated this quarter</div>
                </div>
                <div className="p-5 rounded-2xl glass-card border border-white/[0.08]">
                  <div className="text-xs font-mono text-zinc-500 uppercase">Active Client Projects</div>
                  <div className="text-2xl font-bold font-mono text-white mt-1">18 Enterprise Deployments</div>
                  <div className="text-[11px] text-emerald-400 mt-1">100% on delivery schedule</div>
                </div>
              </div>

              <LiveActivityFeed />
            </div>
          )}

          {/* 7. INTEGRATIONS, API & SETTINGS VIEW */}
          {(currentSection === 'integrations' || currentSection === 'api' || currentSection === 'settings') && (
            <div className="space-y-6 text-left animate-fade-in">
              <SystemHealthPanel />
            </div>
          )}

        </main>

        {/* Global Bottom Status Bar as shown in layout ascii:
            MURU AI CORE                         SYSTEMS OPERATIONAL ● */}
        <footer className="h-10 border-t border-white/[0.06] bg-[#040507] px-6 flex items-center justify-between text-[11px] font-mono text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="text-zinc-300 font-bold">MURU AI CORE</span>
            <span>•</span>
            <span>Dedicated Enterprise VPC (eu-west-2)</span>
          </div>

          <div className="flex items-center gap-2 text-emerald-400 font-semibold">
            <span>SYSTEMS OPERATIONAL</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </footer>

      </div>

      {/* Global ⌘ K Command Palette Modal */}
      <CommandPaletteModal
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onNavigateSection={(sec) => {
          setCurrentSection(sec);
          setIsCommandPaletteOpen(false);
        }}
      />
    </div>
  );
};
