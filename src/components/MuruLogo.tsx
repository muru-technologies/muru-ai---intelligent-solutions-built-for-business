import React from 'react';

export interface MuruLogoProps {
  /**
   * Visual style variant:
   * - 'white': Crisp light/white letters with vibrant green swoosh (best for dark UI backgrounds)
   * - 'navy': Original navy blue (#0B1354) as uploaded by user (best for light backgrounds or containers)
   * - 'pill': Original navy blue logo framed within a frosted white/glass pill badge
   * - 'command': Cybernetic futuristic variant with telemetry accents
   */
  variant?: 'white' | 'navy' | 'pill' | 'command';
  /**
   * Display the Muru AI Division badge next to the Muru IT mark
   */
  showAiBadge?: boolean;
  /**
   * Display the "TECHNOLOGY SOLUTIONS GROUP" tagline underneath
   */
  showTagline?: boolean;
  /**
   * Custom subtitle override (defaults to "TECHNOLOGY SOLUTIONS GROUP")
   */
  taglineText?: string;
  /**
   * Size presets
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /**
   * Additional className
   */
  className?: string;
}

export const MuruLogo: React.FC<MuruLogoProps> = ({
  variant = 'white',
  showAiBadge = true,
  showTagline = true,
  taglineText = 'TECHNOLOGY SOLUTIONS GROUP',
  size = 'md',
  className = ''
}) => {
  // Dimension scales
  const sizeStyles = {
    sm: {
      svgWidth: 140,
      svgHeight: 34,
      aiBadgeText: 'text-[9px] px-1 py-0.2',
      divisionText: 'text-[9px]'
    },
    md: {
      svgWidth: 185,
      svgHeight: 44,
      aiBadgeText: 'text-[10px] px-1.5 py-0.5',
      divisionText: 'text-[10px]'
    },
    lg: {
      svgWidth: 230,
      svgHeight: 54,
      aiBadgeText: 'text-xs px-2 py-0.5',
      divisionText: 'text-xs'
    },
    xl: {
      svgWidth: 290,
      svgHeight: 68,
      aiBadgeText: 'text-sm px-2.5 py-1',
      divisionText: 'text-sm'
    }
  }[size];

  // Colors based on variant
  const isNavy = variant === 'navy' || variant === 'pill';
  const textColor = isNavy ? '#0B1354' : '#FFFFFF';
  const subtextColor = isNavy ? '#0B1354' : '#A1A1AA';

  const logoSvg = (
    <svg
      viewBox="0 0 380 90"
      width={sizeStyles.svgWidth}
      height={showTagline ? sizeStyles.svgHeight : sizeStyles.svgHeight * 0.72}
      className="overflow-visible select-none"
      aria-label="Muru IT Technology Solutions Group"
    >
      <defs>
        {/* Signature Muru vibrant green swoosh gradient */}
        <linearGradient id="muruGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4ADE80" />
          <stop offset="50%" stopColor="#6EE7B7" />
          <stop offset="100%" stopColor="#2DD4BF" />
        </linearGradient>

        {/* Subtle glow filter for the dynamic swoosh */}
        <filter id="muruSwooshGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Main Wordmark: MuruIT */}
      <text
        x="6"
        y="50"
        fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontWeight="800"
        fontSize="48"
        letterSpacing="-0.5"
        fill={textColor}
      >
        Muru<tspan dx="2" fontWeight="800">IT</tspan>
      </text>

      {/* Signature Muru curved green swoosh curving across the IT */}
      <path
        d="M 148,34 C 154,16 182,10 220,15 C 230,16 233,21 228,24 C 208,21 178,21 156,33 C 150,36 146,36 148,34 Z"
        fill="url(#muruGreenGrad)"
        filter="url(#muruSwooshGlow)"
      />

      {/* Tagline: TECHNOLOGY SOLUTIONS GROUP */}
      {showTagline && (
        <text
          x="8"
          y="74"
          fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontWeight="800"
          fontSize="10.8"
          letterSpacing="4"
          fill={subtextColor}
        >
          {taglineText}
        </text>
      )}
    </svg>
  );

  // If pill variant, wrap in pristine white container
  if (variant === 'pill') {
    return (
      <div
        className={`inline-flex items-center gap-3 px-3 py-1.5 rounded-xl bg-white shadow-lg shadow-black/30 border border-white/60 transition-transform hover:scale-[1.02] ${className}`}
      >
        {logoSvg}
        {showAiBadge && (
          <div className="flex items-center gap-1.5 pl-2 border-l border-zinc-200">
            <span
              className={`font-mono font-black tracking-wider uppercase bg-[#0B1354] text-[#6EE7B7] rounded ${sizeStyles.aiBadgeText}`}
            >
              AI
            </span>
          </div>
        )}
      </div>
    );
  }

  // Standard or Command layout
  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 group ${className}`}>
      {logoSvg}

      {showAiBadge && (
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-mono font-black tracking-wider rounded-md uppercase transition-all shadow-sm ${
                variant === 'command'
                  ? 'bg-gradient-to-r from-[#E59500] to-[#B36B00] text-black shadow-[0_0_12px_rgba(229,149,0,0.4)]'
                  : 'bg-[#E59500]/15 text-[#E59500] border border-[#E59500]/30 shadow-[0_0_10px_rgba(229,149,0,0.2)]'
              } ${sizeStyles.aiBadgeText}`}
            >
              AI
            </span>
            <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-mono text-zinc-400 bg-white/[0.05] border border-white/[0.06] tracking-wide">
              DIVISION
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
