import React, { useState, useEffect } from 'react';
import { Cpu, CheckCircle2 } from 'lucide-react';
import { MuruLogo } from '../MuruLogo';

interface CoreBootSequenceProps {
  onComplete: () => void;
}

export const CoreBootSequence: React.FC<CoreBootSequenceProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<number>(0);
  // Stages:
  // 0: "MURU AI CORE INITIALIZING..."
  // 1: "CONNECTING..."
  // 2: "SYNCHRONIZING..."
  // 3: "READY"

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 400);
    const t2 = setTimeout(() => setStage(2), 900);
    const t3 = setTimeout(() => setStage(3), 1400);
    const t4 = setTimeout(() => onComplete(), 1900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050608] text-white select-none">
      <div className="text-center space-y-6 max-w-md px-4">
        
        {/* Official Muru Logo */}
        <div className="flex justify-center mb-2">
          <MuruLogo
            variant="command"
            size="lg"
            showAiBadge={true}
            showTagline={true}
            taglineText="TECHNOLOGY SOLUTIONS GROUP"
          />
        </div>

        {/* Glowing Orb */}
        <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-[#E59500]/20 blur-xl animate-pulse" />
          <div className="w-16 h-16 rounded-full border border-[#E59500]/50 bg-black flex items-center justify-center relative z-10">
            <Cpu className="w-7 h-7 text-[#E59500] animate-pulse" />
          </div>
        </div>

        {/* Title as specified in prompt: MURU AI CORE INITIALIZING... */}
        <div>
          <div className="text-sm sm:text-base font-mono font-bold tracking-widest text-[#E59500] uppercase mb-1">
            MURU AI CORE INITIALIZING...
          </div>
          <div className="text-xs text-zinc-500 font-mono">
            VPC Neural Mesh • Quantum Safe Protocols
          </div>
        </div>

        {/* Progress Pipeline: CONNECTING → SYNCHRONIZING → READY */}
        <div className="flex items-center justify-center gap-2 text-xs font-mono">
          <span className={stage >= 1 ? 'text-white font-bold' : 'text-zinc-600'}>
            CONNECTING
          </span>
          <span className="text-zinc-600">→</span>
          <span className={stage >= 2 ? 'text-white font-bold' : 'text-zinc-600'}>
            SYNCHRONIZING
          </span>
          <span className="text-zinc-600">→</span>
          <span className={stage >= 3 ? 'text-emerald-400 font-bold' : 'text-zinc-600'}>
            READY
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-white/[0.08] rounded-full mx-auto overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#E59500] to-emerald-400 transition-all duration-500"
            style={{ width: `${(stage / 3) * 100}%` }}
          />
        </div>

        <button
          onClick={onComplete}
          className="text-[11px] font-mono text-zinc-500 hover:text-zinc-300 transition-colors pt-2 block mx-auto"
        >
          [Press anywhere to skip]
        </button>

      </div>
    </div>
  );
};
