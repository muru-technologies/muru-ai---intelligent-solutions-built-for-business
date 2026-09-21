import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { MURU_BRAND } from '../data/muruData';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState<boolean>(true);

  const whatsappUrl = `https://wa.me/${MURU_BRAND.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    MURU_BRAND.whatsappMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {showTooltip && (
        <div className="relative p-3 rounded-xl bg-[#0E121A] border border-white/[0.1] shadow-2xl shadow-black/80 max-w-[220px] text-left animate-fade-in hidden sm:block">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-zinc-500 hover:text-zinc-300 p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="text-[11px] font-bold text-white mb-0.5">
            Talk to Muru AI on WhatsApp
          </div>
          <p className="text-[10px] text-zinc-400 leading-tight">
            Have a quick question about automation or AI agents?
          </p>
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-[0_4px_25px_rgba(16,185,129,0.4)] transition-all transform hover:scale-110 active:scale-95"
        aria-label="Chat on WhatsApp with Muru AI"
      >
        <MessageCircle className="w-6 h-6 fill-current text-white" />
      </a>
    </div>
  );
};
