import React, { useState, useEffect } from 'react';
import {
  Search,
  Bell,
  CheckCircle2,
  Menu,
  Activity,
  Globe,
  Radio,
  Sliders,
  Sparkles
} from 'lucide-react';
import { CommandNavSection } from '../../types';
import { MuruLogo } from '../MuruLogo';

interface CommandTopBarProps {
  currentSection: CommandNavSection;
  onOpenCommandPalette: () => void;
  onToggleMobileMenu: () => void;
  onExitToPortal: () => void;
}

export const CommandTopBar: React.FC<CommandTopBarProps> = ({
  currentSection,
  onOpenCommandPalette,
  onToggleMobileMenu,
  onExitToPortal
}) => {
  const [showNotifications, setShowNotifications] = useState<boolean>(false);
  const [clock, setClock] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setClock(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const notifications = [
    { id: 1, title: 'Sales Agent Qualified Lead', desc: 'Apex Holdings scored 94/100', time: '2m ago' },
    { id: 2, title: 'Workflow #204 Triggered', desc: '14 documents processed via OCR', time: '12m ago' },
    { id: 3, title: 'Security Audit Verified', desc: 'Zero data leakage across VPC nodes', time: '1h ago' }
  ];

  return (
    <header className="h-16 border-b border-white/[0.07] bg-[#07090C]/90 backdrop-blur-md sticky top-0 z-30 px-4 sm:px-6 flex items-center justify-between">
      
      {/* Left: Branding & Breadcrumb */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleMobileMenu}
          className="p-1.5 rounded-lg text-zinc-400 hover:text-white lg:hidden"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 text-xs font-mono">
          <MuruLogo
            variant="command"
            size="sm"
            showAiBadge={true}
            showTagline={false}
          />
          <span className="text-zinc-600 hidden sm:inline">/</span>
          <span className="text-[#E59500] font-semibold uppercase tracking-wider hidden sm:inline">
            {currentSection.replace('-', ' ')}
          </span>
        </div>
      </div>

      {/* Center: Command Palette Trigger */}
      <div className="hidden md:flex items-center">
        <button
          onClick={onOpenCommandPalette}
          className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-[#E59500]/40 text-xs text-zinc-400 hover:text-zinc-200 transition-all w-72 justify-between group"
        >
          <div className="flex items-center gap-2">
            <Search className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#E59500] transition-colors" />
            <span>Search agents, workflows...</span>
          </div>
          <kbd className="px-2 py-0.5 rounded bg-white/[0.06] border border-white/[0.1] text-[10px] font-mono text-zinc-400">
            ⌘ K
          </kbd>
        </button>
      </div>

      {/* Right: Operational Status, Time & User */}
      <div className="flex items-center gap-3 sm:gap-4">
        
        {/* System Online Badge */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-semibold tracking-wider">ALL SYSTEMS OPERATIONAL</span>
        </div>

        {/* Real-time Clock */}
        <div className="hidden lg:flex items-center text-xs font-mono text-zinc-400 bg-white/[0.03] px-2.5 py-1.5 rounded-lg border border-white/[0.06]">
          <span>{clock || '09:42:18'}</span>
        </div>

        {/* Return to Public Website */}
        <button
          onClick={onExitToPortal}
          className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.2] transition-colors"
        >
          <Globe className="w-3.5 h-3.5 text-[#E59500]" />
          <span>Public Portal</span>
        </button>

        {/* Notifications Popover */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/[0.05] relative transition-colors"
            aria-label="Notifications"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#E59500]" />
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 rounded-2xl glass-panel-dark border border-white/[0.1] shadow-2xl p-4 z-50 animate-fade-in">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-3">
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  System Alerts
                </span>
                <span className="text-[10px] font-mono text-[#E59500]">3 New</span>
              </div>
              <div className="space-y-2.5">
                {notifications.map((n) => (
                  <div key={n.id} className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] text-left">
                    <div className="flex items-center justify-between text-xs font-semibold text-zinc-200 mb-0.5">
                      <span>{n.title}</span>
                      <span className="text-[10px] font-mono text-zinc-500">{n.time}</span>
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-snug">{n.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* User Operator Avatar */}
        <div className="flex items-center gap-2 pl-2 border-l border-white/[0.08]">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#E59500]/30 to-white/10 border border-[#E59500]/40 flex items-center justify-center text-xs font-mono font-bold text-white">
            MU
          </div>
          <div className="hidden xl:flex flex-col text-left">
            <span className="text-xs font-semibold text-white leading-tight">Muru Operator</span>
            <span className="text-[10px] font-mono text-[#E59500]">Chief AI Architect</span>
          </div>
        </div>

      </div>
    </header>
  );
};
