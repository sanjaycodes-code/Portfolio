import { motion, type Variants } from 'framer-motion'
import { ArrowDown, FileText, Sparkles } from 'lucide-react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const MARQUEE_ITEMS = [
  'AI RESUME ANALYZER',
  'FULL-STACK MERN',
  'CAMPUSLOOP P2P NETWORK',
  'FASTAPI & PYTHON',
  'SQL JOB INTELLIGENCE',
  'REACT & TYPESCRIPT',
  'VECTOR EMBEDDINGS',
  'ROLE-BASED ACCESS CONTROL',
  'POSTGRESQL & MONGODB',
  'LANGCHAIN PIPELINES',
]

export function Hero() {
  const prefersReducedMotion = useReducedMotion()

  // Staggered container variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: prefersReducedMotion ? 0 : 0.12,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 sm:pt-36 overflow-hidden bg-grid-pattern"
    >
      {/* Subtle radial ambient backdrop */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-white/[0.018] blur-[100px] rounded-full pointer-events-none" />

      {/* Main Two-Column Editorial Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Core Narrative, CTAs & Real Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6 sm:space-y-8"
          >
            {/* Eyebrow Label: Numbered-index style consistent with site */}
            <motion.div variants={itemVariants}>
              <span className="font-mono text-xs text-[#8E8E98] tracking-widest uppercase block">
                // 00 PORTFOLIO / OVERVIEW
              </span>
            </motion.div>

            {/* Editorial Headline: Syne 700 + Instrument Serif italic pairing */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-5xl lg:text-[3.65rem] font-bold tracking-[0.02em] font-['Syne'] uppercase leading-[1.05] sm:leading-[1.02] text-[#EDEDED]"
            >
              SANJAY —{' '}
              <span className="font-['Instrument_Serif'] italic font-normal text-white lowercase tracking-normal px-1">
                engineering
              </span>{' '}
              FULL-STACK SYSTEMS &amp;{' '}
              <span className="font-['Instrument_Serif'] italic font-normal text-white lowercase tracking-normal px-1">
                applied
              </span>{' '}
              AI.
            </motion.h1>

            {/* Bio Line: Reflects Civil Engineering at NIT Durgapur + Self-directed SWE/AI */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg text-[#A1A1AA] font-['Space_Grotesk'] leading-relaxed max-w-xl"
            >
              B.Tech in Civil Engineering at NIT Durgapur, pursuing an intensive self-directed curriculum in full-stack web architecture, distributed systems, and applied AI pipelines.
            </motion.p>

            {/* Two Action CTAs: Existing Button System */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              <a
                href="#work"
                className="px-6 py-3 rounded-full bg-[#EDEDED] text-[#080809] font-mono text-xs font-semibold tracking-wider hover:bg-white transition-all shadow-[0_4px_20px_rgba(255,255,255,0.12)] flex items-center gap-2 group"
              >
                <span>EXPLORE PROJECTS</span>
                <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
              </a>

              <a
                href="/resume-sanjay-viswanath.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Resume (opens in a new tab)"
                className="px-6 py-3 rounded-full bg-[#121215] border border-white/[0.1] text-[#EDEDED] font-mono text-xs tracking-wider hover:border-white/[0.25] hover:bg-[#18181D] transition-all flex items-center gap-2 shadow-sm"
              >
                <FileText className="w-3.5 h-3.5 text-[#A1A1AA]" />
                <span>VIEW RESUME</span>
              </a>
            </motion.div>

            {/* Verified Real Stats Metric Row */}
            <motion.div
              variants={itemVariants}
              className="pt-6 sm:pt-8 grid grid-cols-3 gap-4 sm:gap-6 border-t border-white/[0.08] w-full max-w-lg"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#EDEDED] tracking-tight font-['Syne']">
                  7.09
                </div>
                <div className="text-[11px] font-mono text-[#8E8E98] uppercase tracking-wider mt-1">
                  CGPA
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-[#EDEDED] tracking-tight font-['Syne'] truncate">
                  Civil Engg.
                </div>
                <div className="text-[11px] font-mono text-[#8E8E98] uppercase tracking-wider mt-1">
                  B.Tech @ NIT DGP
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#EDEDED] tracking-tight font-['Syne']">
                  2028
                </div>
                <div className="text-[11px] font-mono text-[#8E8E98] uppercase tracking-wider mt-1">
                  Expected Grad
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Circular Avatar Frame & Availability Pill */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex flex-col items-center justify-center pt-8 lg:pt-0"
          >
            {/* Circular Frame with subtle white ring + faint orange glow */}
            <motion.div variants={itemVariants} className="relative group">
              {/* Subtle Orange Ambient Aura */}
              <div className="absolute inset-0 bg-[#F97316]/[0.06] rounded-full blur-3xl pointer-events-none" />

              {/* Circle Container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full border border-white/[0.14] bg-[#121215] shadow-[0_16px_48px_rgba(0,0,0,0.8),0_0_50px_rgba(249,115,22,0.08)] flex items-center justify-center overflow-hidden">
                {/* Concentric subtle hairline guide rings */}
                <div className="absolute inset-3 rounded-full border border-white/[0.04] pointer-events-none" />
                <div className="absolute inset-8 rounded-full border border-dashed border-white/[0.06] pointer-events-none" />

                {/* Graceful Editorial Placeholder / Monogram */}
                <div className="flex flex-col items-center justify-center text-center select-none z-10 px-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#18181D] border border-white/[0.1] flex items-center justify-center mb-3 shadow-lg group-hover:border-[#F97316]/50 transition-colors relative">
                    <span className="font-['Syne'] text-2xl font-bold text-[#EDEDED]">S</span>
                    <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#F97316]" />
                  </div>
                  <span className="font-['Syne'] text-sm font-bold text-[#EDEDED] tracking-wide uppercase">
                    SANJAY KADIVENDI
                  </span>
                  <span className="font-mono text-[10px] text-[#8E8E98] tracking-wider mt-1">
                    NIT DURGAPUR // SWE &amp; AI
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Availability Pill with Pulsing Orange Dot */}
            <motion.div variants={itemVariants} className="mt-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#121215] border border-white/[0.08] text-xs font-mono text-[#EDEDED] shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F97316] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F97316]"></span>
                </span>
                <span className="tracking-tight text-[#A1A1AA]">
                  OPEN TO SOFTWARE &amp; AI ROLES
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Signature Diagonal Ribbon Marquee Motif */}
      <div className="relative w-full overflow-hidden mt-16 sm:mt-24 pt-6 pb-12">
        <div className="w-[120%] -ml-[10%] transform ribbon-diagonal-left bg-[#101014] border-y border-white/[0.08] py-3.5 shadow-2xl backdrop-blur-md">
          <div className="animate-marquee-ribbon flex items-center gap-8">
            {/* Duplicated track for continuous, seamless looping */}
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
              <div
                key={`${item}-${idx}`}
                className="flex items-center gap-8 shrink-0 font-mono text-xs sm:text-sm tracking-widest text-[#A1A1AA] uppercase select-none"
              >
                <span className="hover:text-[#EDEDED] transition-colors">{item}</span>
                <Sparkles className="w-3 h-3 text-[#F97316]/70 shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
