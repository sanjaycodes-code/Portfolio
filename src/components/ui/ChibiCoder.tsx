import { useReducedMotion } from '../../hooks/useReducedMotion'

interface ChibiCoderProps {
  className?: string
  /**
   * If true, enables the gentle idle floating animation.
   * Defaults to false during design review per user request.
   */
  animate?: boolean
}

/**
 * ChibiCoder
 * An original minimal monochrome line-art chibi figure (hoodie silhouette, laptop)
 * with a single #F97316 glowing terminal prompt micro-accent.
 */
export function ChibiCoder({ className = '', animate = false }: ChibiCoderProps) {
  const prefersReducedMotion = useReducedMotion()
  const shouldAnimate = animate && !prefersReducedMotion

  return (
    <div
      className={`relative select-none pointer-events-none flex items-center justify-center ${className} ${
        shouldAnimate ? 'animate-chibi-float' : ''
      }`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]"
      >
        <defs>
          {/* Subtle Orange Glow for Screen Micro-Accent */}
          <filter id="chibi-orange-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Ambient Background Aura */}
          <radialGradient id="chibi-ambient-aura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F97316" stopOpacity="0.09" />
            <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Subtle Warmth Aura */}
        <circle cx="80" cy="84" r="54" fill="url(#chibi-ambient-aura)" />

        {/* Floating Telemetry Micro-Accents */}
        <path
          d="M 122 36 Q 124 39 126 39 Q 124 39 124 42 Q 124 39 122 39 Q 124 39 124 36 Z"
          fill="#F97316"
          opacity="0.85"
          filter="url(#chibi-orange-glow)"
        />
        <circle cx="34" cy="62" r="1.5" fill="#71717A" opacity="0.6" />
        <circle cx="128" cy="88" r="1.2" fill="#71717A" opacity="0.5" />

        {/* Crossed Legs / Bottom Silhouette Cushion */}
        <path
          d="M 52 120 C 44 126 48 136 60 137 C 72 138 88 138 100 137 C 112 136 116 126 108 120 C 100 125 60 125 52 120 Z"
          fill="#0C0C0E"
          stroke="#52525B"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        {/* Sneaker Soles / Ankle Details */}
        <path
          d="M 54 133 Q 60 136 67 134"
          stroke="#A1A1AA"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M 93 134 Q 100 136 106 133"
          stroke="#A1A1AA"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Oversized Hoodie Body */}
        <path
          d="M 50 84 C 42 94 42 112 54 120 C 64 126 96 126 106 120 C 118 112 118 94 110 84 C 104 88 56 88 50 84 Z"
          fill="#141418"
          stroke="#EDEDED"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />

        {/* Hoodie Pocket Subtle Seam */}
        <path
          d="M 64 116 Q 80 120 96 116"
          stroke="#3F3F46"
          strokeWidth="1.4"
          fill="none"
        />

        {/* Outer Hood Silhouette */}
        <path
          d="M 52 78 C 47 58 50 36 66 26 C 72 21 88 21 94 26 C 110 36 113 58 108 78 C 104 87 96 90 80 90 C 64 90 56 87 52 78 Z"
          fill="#18181D"
          stroke="#EDEDED"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />

        {/* Inner Hood Depth Cavity */}
        <path
          d="M 56 75 C 52 59 56 38 80 38 C 104 38 108 59 104 75 C 99 82 89 84 80 84 C 71 84 61 82 56 75 Z"
          fill="#0C0C0E"
          stroke="#3F3F46"
          strokeWidth="1.5"
        />

        {/* Chibi Face Base */}
        <path
          d="M 62 52 Q 80 50 98 52 Q 101 70 80 77 Q 59 70 62 52 Z"
          fill="#18181B"
        />

        {/* Soft Hair Bangs Silhouette */}
        <path
          d="M 63 53 Q 70 61 74 53 Q 80 63 86 52 Q 91 60 97 53"
          stroke="#EDEDED"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Wireframe Glasses (Lo-Fi Coder Focus) */}
        {/* Left Frame */}
        <rect
          x="66"
          y="58"
          width="11"
          height="9"
          rx="2.5"
          stroke="#EDEDED"
          strokeWidth="1.5"
          fill="#121215"
        />
        {/* Right Frame */}
        <rect
          x="83"
          y="58"
          width="11"
          height="9"
          rx="2.5"
          stroke="#EDEDED"
          strokeWidth="1.5"
          fill="#121215"
        />
        {/* Bridge */}
        <path
          d="M 77 62.5 Q 80 61 83 62.5"
          stroke="#EDEDED"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Focused Pupils / Reflection Highlights */}
        <circle cx="71.5" cy="62.5" r="1.5" fill="#EDEDED" />
        <circle cx="88.5" cy="62.5" r="1.5" fill="#EDEDED" />
        <circle cx="73" cy="61" r="0.6" fill="#FFFFFF" />
        <circle cx="90" cy="61" r="0.6" fill="#FFFFFF" />

        {/* Subtle Calm Smile */}
        <path
          d="M 78 71 Q 80 72.5 82 71"
          stroke="#A1A1AA"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* Hoodie Drawstring Cords */}
        <path
          d="M 68 84 Q 67 93 65 97"
          stroke="#EDEDED"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M 92 84 Q 93 93 95 97"
          stroke="#EDEDED"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="65" cy="98" r="1.5" fill="#71717A" />
        <circle cx="95" cy="98" r="1.5" fill="#71717A" />

        {/* Sleeves / Arms Reaching to Keyboard */}
        <path
          d="M 51 86 C 46 98 52 110 66 112"
          stroke="#EDEDED"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 109 86 C 114 98 108 110 94 112"
          stroke="#EDEDED"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Hands Resting on Laptop */}
        <path
          d="M 66 111 Q 70 109 73 112"
          stroke="#EDEDED"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M 87 112 Q 90 109 94 111"
          stroke="#EDEDED"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Laptop Assembly */}
        {/* Laptop Base / Chassis */}
        <polygon
          points="58,118 102,118 97,126 63,126"
          fill="#1C1C22"
          stroke="#EDEDED"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        {/* Keyboard Texture */}
        <line
          x1="66"
          y1="121"
          x2="94"
          y2="121"
          stroke="#52525B"
          strokeWidth="1.4"
          strokeDasharray="2.5 1.5"
        />
        {/* Trackpad */}
        <rect
          x="76"
          y="122.5"
          width="8"
          height="2.5"
          rx="0.6"
          stroke="#52525B"
          strokeWidth="0.9"
          fill="none"
        />

        {/* Laptop Display Screen (Tilted open toward developer) */}
        <polygon
          points="62,118 66,99 94,99 98,118"
          fill="#0A0A0D"
          stroke="#EDEDED"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        {/* Screen Bezel Inset */}
        <polygon
          points="67,102 93,102 91,115 69,115"
          fill="#111116"
          stroke="#27272A"
          strokeWidth="0.8"
        />

        {/* The Signature Orange Micro-Accent: Glowing Terminal Prompt >_ */}
        <g filter="url(#chibi-orange-glow)">
          {/* Terminal prompt '>' */}
          <path
            d="M 73 107.5 L 76.5 109.5 L 73 111.5"
            stroke="#F97316"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Blinking Cursor '_' */}
          <line
            x1="79"
            y1="111.5"
            x2="84"
            y2="111.5"
            stroke="#F97316"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Micro telemetry spark */}
          <circle cx="89" cy="106" r="0.8" fill="#F97316" />
        </g>
      </svg>
    </div>
  )
}
