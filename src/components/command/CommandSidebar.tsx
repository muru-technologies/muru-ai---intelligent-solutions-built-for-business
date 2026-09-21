import React from 'react';
import {
  LayoutDashboard,
  Bot,
  Zap,
  GitFork,
  BookOpen,
  BarChart3,
  Sparkles,
  Users,
  MessageSquare,
  FolderKanban,
  Puzzle,
  Terminal,
  Settings,
  ArrowLeft,
  Activity,
  ShieldCheck
} from 'lucide-react';
import { CommandNavSection } from '../../types';
import { MuruLogo } from '../MuruLogo';

interface CommandSidebarProps {
  currentSection: CommandNavSection;
  onSelectSection: (section: CommandNavSection) => void;
  onExitToPortal: () => void;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
}

export const CommandSidebar: React.FC<CommandSidebarProps> = ({
  currentSection,
  onSelectSection,
  onExitToPortal,
  isMobileOpen,
  onCloseMobile
}) => {
  const navGroups = [
    {
      label: 'COMMAND',
      items: [
        { id: 'overview' as CommandNavSection, name: 'Overview', icon: LayoutDashboard },
        { id: 'agents' as CommandNavSection, name: 'AI Agents', icon: Bot, badge: '24' },
        { id: 'automations' as CommandNavSection, name: 'Automations', icon: Zap, badge: '87' },
        { id: 'workflows' as CommandNavSection, name: 'Workflows', icon: GitFork }
      ]
    },
    {
      label: 'INTELLIGENCE',
      items: [
        { id: 'knowledge' as CommandNavSection, name: 'Knowledge', icon: BookOpen },
        { id: 'analytics' as CommandNavSection, name: 'Analytics', icon: BarChart3 },
        { id: 'insights' as CommandNavSection, name: 'AI Insights', icon: Sparkles }
      ]
    },
    {
      label: 'BUSINESS',
      items: [
        { id: 'customers' as CommandNavSection, name: 'Customers', icon: Users },
        { id: 'conversations' as CommandNavSection, name: 'Conversations', icon: MessageSquare },
        { id: 'projects' as CommandNavSection, name: 'Projects', icon: FolderKanban }
      ]
    },
    {
      label: 'SYSTEM',
      items: [
        { id: 'integrations' as CommandNavSection, name: 'Integrations', icon: Puzzle },
        { id: 'api' as CommandNavSection, name: 'API & Health', icon: Terminal },
        { id: 'settings' as CommandNavSection, name: 'Settings', icon: Settings }
      ]
    }
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm lg:hidden"
        />
      )}

      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-[#080A0E] border-r border-white/[0.07] flex flex-col justify-between transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          {/* Top Brand Header */}
          <div className="h-16 px-4 border-b border-white/[0.07] flex items-center justify-between">
            <div className="flex items-center">
              <MuruLogo
                variant="white"
                size="sm"
                showAiBadge={true}
                showTagline={true}
                taglineText="COMMAND CENTER"
              />
            </div>

            {/* Exit to Public Portal button */}
            <button
              onClick={onExitToPortal}
              title="Return to Public Website"
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Groups */}
          <div className="px-3 py-4 space-y-5 overflow-y-auto max-h-[calc(100vh-140px)]">
            {navGroups.map((group) => (
              <div key={group.label} className="space-y-1">
                <div className="px-3 text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-semibold mb-1">
                  {group.label}
                </div>
                {group.items.map((item) => {
                  const isActive = currentSection === item.id;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onSelectSection(item.id);
                        onCloseMobile();
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all group ${
                        isActive
                          ? 'bg-[#E59500]/15 text-white border border-[#E59500]/30 shadow-sm shadow-[#E59500]/10'
                          : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.03] border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon
                          className={`w-4 h-4 transition-colors ${
                            isActive ? 'text-[#E59500]' : 'text-zinc-500 group-hover:text-zinc-300'
                          }`}
                        />
                        <span>{item.name}</span>
                      </div>
                      {item.badge && (
                        <span
                          className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-bold ${
                            isActive
                              ? 'bg-[#E59500] text-black'
                              : 'bg-white/[0.05] text-zinc-400'
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom System Status Badge */}
        <div className="p-3 border-t border-white/[0.07] bg-[#06070A]">
          <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <div className="flex flex-col">
                <span className="text-[11px] font-mono font-bold text-zinc-200">
                  MURU AI CORE
                </span>
                <span className="text-[9px] font-mono text-emerald-400">
                  SYSTEM ONLINE
                </span>
              </div>
            </div>

            <span className="text-[10px] font-mono text-zinc-500">v4.8</span>
          </div>
        </div>
      </aside>
    </>
  );
};
