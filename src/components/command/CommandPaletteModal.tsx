import React, { useState, useEffect } from 'react';
import { Search, Bot, GitFork, BookOpen, Activity, ArrowRight, X, Terminal } from 'lucide-react';
import { CommandNavSection } from '../../types';

interface CommandPaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateSection: (section: CommandNavSection) => void;
}

export const CommandPaletteModal: React.FC<CommandPaletteModalProps> = ({
  isOpen,
  onClose,
  onNavigateSection
}) => {
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent handles toggling
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickItems = [
    { id: '1', title: 'Sales Agent (Lead qualification)', category: 'Agent', icon: Bot, action: () => onNavigateSection('agents') },
    { id: '2', title: 'Support Agent (WhatsApp resolution)', category: 'Agent', icon: Bot, action: () => onNavigateSection('agents') },
    { id: '3', title: 'Workflow #204: New Customer Qualification', category: 'Workflow', icon: GitFork, action: () => onNavigateSection('workflows') },
    { id: '4', title: 'Workflow #118: Multimodal Invoice OCR', category: 'Workflow', icon: GitFork, action: () => onNavigateSection('workflows') },
    { id: '5', title: 'Search Corporate Master Services SLA Terms', category: 'Knowledge', icon: BookOpen, action: () => onNavigateSection('knowledge') },
    { id: '6', title: 'System Diagnostics & Latency Matrix', category: 'System', icon: Activity, action: () => onNavigateSection('api') }
  ];

  const filteredItems = quickItems.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-xl rounded-2xl glass-panel-dark border border-white/[0.12] shadow-2xl p-4 bg-[#0A0D14] animate-fade-in text-left">
        
        {/* Search Input */}
        <div className="relative flex items-center border-b border-white/[0.08] pb-3 mb-3">
          <Search className="w-4 h-4 text-[#E59500] ml-2 mr-3" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search agents, workflows..."
            className="w-full bg-transparent text-sm text-white placeholder:text-zinc-500 focus:outline-none font-sans"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-zinc-500 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="space-y-1 max-h-72 overflow-y-auto">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    item.action();
                    onClose();
                  }}
                  className="w-full p-2.5 rounded-xl hover:bg-white/[0.05] border border-transparent hover:border-white/[0.07] flex items-center justify-between transition-colors group text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-zinc-400 group-hover:text-[#E59500]">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-zinc-200 group-hover:text-white">
                        {item.title}
                      </div>
                      <div className="text-[10px] font-mono text-zinc-500">
                        {item.category}
                      </div>
                    </div>
                  </div>

                  <ArrowRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-[#E59500] transition-colors" />
                </button>
              );
            })
          ) : (
            <div className="py-8 text-center text-xs text-zinc-500 font-mono">
              No matching agents, workflows, or knowledge files found.
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="pt-3 border-t border-white/[0.06] mt-2 flex items-center justify-between text-[10px] font-mono text-zinc-500">
          <span>Navigate: ↑↓ • Select: Enter</span>
          <span>Close: ESC</span>
        </div>

      </div>
    </div>
  );
};
