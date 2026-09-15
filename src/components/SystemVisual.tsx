import { Users, Monitor, BookOpen, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { System } from '../data/systems';

// ── Visual placeholder patterns for each system ──────────────────────────────
// Each system gets a unique SVG illustration style.
// Replace <img src={sys.imageSrc} alt={sys.imageAlt} /> once real images are ready.
// Images should go in /public/images/ (center.jpg, online.jpg, books.jpg, club.jpg)

interface VisualProps {
  sys: System;
}

const iconMap: Record<string, LucideIcon> = {
  center: Users,
  'online-live': Monitor,
  books: BookOpen,
  club: Zap,
};

// Unique decorative patterns per system
const patterns: Record<string, React.FC<{ accent: System['accent'] }>> = {
  center: ({ accent }) => (
    <svg viewBox="0 0 320 240" className="w-full h-full" aria-hidden="true">
      {/* Classroom scene */}
      <rect x="20" y="30" width="280" height="160" rx="12" fill="white" fillOpacity="0.5" />
      {/* Whiteboard */}
      <rect x="40" y="50" width="240" height="80" rx="6" fill="white" />
      <rect x="52" y="62" width="120" height="8" rx="3" fill="currentColor" opacity="0.2" className={accent.text} />
      <rect x="52" y="78" width="90" height="8" rx="3" fill="currentColor" opacity="0.15" className={accent.text} />
      <rect x="52" y="94" width="140" height="8" rx="3" fill="currentColor" opacity="0.1" className={accent.text} />
      {/* Teacher */}
      <circle cx="270" cy="75" r="10" fill="currentColor" opacity="0.3" className={accent.text} />
      <rect x="263" y="88" width="14" height="22" rx="4" fill="currentColor" opacity="0.25" className={accent.text} />
      {/* Student desks */}
      {[60, 110, 160, 210].map((x) => (
        <g key={x}>
          <rect x={x} y="152" width="36" height="22" rx="4" fill="white" />
          <circle cx={x + 18} cy="145" r="7" fill="currentColor" opacity="0.2" className={accent.text} />
        </g>
      ))}
    </svg>
  ),
  'online-live': ({ accent }) => (
    <svg viewBox="0 0 320 240" className="w-full h-full" aria-hidden="true">
      {/* Laptop */}
      <rect x="60" y="60" width="200" height="130" rx="8" fill="white" fillOpacity="0.6" />
      <rect x="72" y="72" width="176" height="100" rx="5" fill="white" />
      {/* Video call grid */}
      <rect x="82" y="82" width="74" height="50" rx="4" fill="currentColor" opacity="0.12" className={accent.text} />
      <rect x="164" y="82" width="74" height="50" rx="4" fill="currentColor" opacity="0.18" className={accent.text} />
      <rect x="82" y="138" width="74" height="26" rx="4" fill="currentColor" opacity="0.08" className={accent.text} />
      <rect x="164" y="138" width="74" height="26" rx="4" fill="currentColor" opacity="0.08" className={accent.text} />
      {/* Laptop base */}
      <rect x="40" y="192" width="240" height="12" rx="6" fill="white" fillOpacity="0.4" />
      {/* Live dot */}
      <circle cx="228" cy="96" r="5" fill="#ef4444" />
      <text x="218" y="100" fontSize="8" fill="#ef4444" fontFamily="sans-serif">LIVE</text>
    </svg>
  ),
  books: ({ accent }) => (
    <svg viewBox="0 0 320 240" className="w-full h-full" aria-hidden="true">
      {/* Three stacked books */}
      {/* Book 3 (bottom) */}
      <rect x="55" y="160" width="210" height="40" rx="5" fill="currentColor" opacity="0.15" className={accent.text} />
      <rect x="55" y="160" width="18" height="40" rx="3" fill="currentColor" opacity="0.3" className={accent.text} />
      {/* Book 2 (mid) */}
      <rect x="65" y="114" width="190" height="42" rx="5" fill="white" fillOpacity="0.7" />
      <rect x="65" y="114" width="16" height="42" rx="3" fill="currentColor" opacity="0.25" className={accent.text} />
      <rect x="90" y="124" width="110" height="6" rx="3" fill="currentColor" opacity="0.15" className={accent.text} />
      <rect x="90" y="136" width="80" height="6" rx="3" fill="currentColor" opacity="0.1" className={accent.text} />
      {/* Book 1 (top) */}
      <rect x="75" y="66" width="170" height="44" rx="5" fill="white" />
      <rect x="75" y="66" width="16" height="44" rx="3" fill="currentColor" opacity="0.35" className={accent.text} />
      <rect x="102" y="78" width="100" height="7" rx="3" fill="currentColor" opacity="0.2" className={accent.text} />
      <rect x="102" y="91" width="70" height="7" rx="3" fill="currentColor" opacity="0.12" className={accent.text} />
      {/* Badge "3 كتب" */}
      <rect x="200" y="54" width="52" height="22" rx="11" fill="currentColor" opacity="0.15" className={accent.text} />
      <text x="226" y="70" fontSize="10" textAnchor="middle" fill="currentColor" className={accent.text} opacity="0.8" fontFamily="sans-serif">3 كتب</text>
    </svg>
  ),
  club: ({ accent }) => (
    <svg viewBox="0 0 320 240" className="w-full h-full" aria-hidden="true">
      {/* Dashboard screen */}
      <rect x="30" y="30" width="260" height="180" rx="12" fill="white" fillOpacity="0.5" />
      <rect x="30" y="30" width="260" height="36" rx="12" fill="currentColor" opacity="0.12" className={accent.text} />
      {/* Dots */}
      {[52, 68, 84].map((x) => <circle key={x} cx={x} cy="48" r="5" fill="white" opacity="0.5" />)}
      {/* Stat cards */}
      <rect x="46" y="82" width="68" height="44" rx="6" fill="white" />
      <rect x="126" y="82" width="68" height="44" rx="6" fill="white" />
      <rect x="206" y="82" width="68" height="44" rx="6" fill="white" />
      {/* Bar chart */}
      <rect x="46" y="142" width="228" height="50" rx="6" fill="white" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={62 + i * 44}
          y={152 + (i % 3) * 8}
          width="22"
          height={36 - (i % 3) * 8}
          rx="3"
          fill="currentColor"
          opacity={0.15 + i * 0.05}
          className={accent.text}
        />
      ))}
      {/* Check badge */}
      <circle cx="253" cy="104" r="14" fill="currentColor" opacity="0.15" className={accent.text} />
      <text x="253" y="109" fontSize="14" textAnchor="middle" fill="currentColor" className={accent.text} opacity="0.7">✓</text>
    </svg>
  ),
};

export default function SystemVisual({ sys }: VisualProps) {
  const Icon = iconMap[sys.id];
  const Pattern = patterns[sys.id];

  return (
    <div
      className={`relative w-full h-full min-h-[220px] sm:min-h-[280px] rounded-2xl overflow-hidden flex items-center justify-center ${sys.accent.bg} border ${sys.accent.border}`}
      role="img"
      aria-label={sys.imageAlt}
    >
      {/*
        ── REPLACE WITH REAL IMAGE ──────────────────────────────────────────
        When real images are ready, replace the SVG illustration below with:

        <img
          src={sys.imageSrc}
          alt={sys.imageAlt}
          className="w-full h-full object-cover"
          loading="lazy"
        />

        Image files go in:  /public/images/
          center.jpg   — classroom / teacher explaining
          online.jpg   — student on laptop at home
          books.jpg    — programming books / study material
          club.jpg     — laptop / online platform / dashboard
        ──────────────────────────────────────────────────────────────────── */}

      {/* Illustration placeholder */}
      <div className="w-full h-full p-6">
        <Pattern accent={sys.accent} />
      </div>

      {/* Icon badge overlay */}
      <div className={`absolute bottom-4 right-4 w-10 h-10 rounded-xl ${sys.accent.iconBg} border ${sys.accent.border} flex items-center justify-center shadow-sm`}>
        <Icon size={20} className={sys.accent.text} aria-hidden="true" />
      </div>

      {/* Image-replace hint (dev only — remove in production) */}
      <div className="absolute top-3 left-3 bg-black/10 text-xs text-white px-2 py-1 rounded-md font-mono pointer-events-none select-none opacity-50">
        {sys.imageSrc}
      </div>
    </div>
  );
}
