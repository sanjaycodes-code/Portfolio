import { motion, type Variants } from 'framer-motion'
import { ArrowDown, Mail, Sparkles, Terminal } from 'lucide-react'
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
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
        delayChildren: prefersReducedMotion ? 0 : 0.15,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }


  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 sm:pt-40 overflow-hidden bg-grid-pattern">
      {/* Subtle radial ambient backdrop (dark graphite, zero orange bleed) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-white/[0.018] blur-[100px] rounded-full pointer-events-none" />

      {/* Main Editorial Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full z-10 my-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Top Identity Tagline with Micro-Orange Ping */}
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121215] border border-white/[0.08] text-xs font-mono text-[#A1A1AA] hover:border-white/[0.18] transition-colors shadow-lg">
              <Terminal className="w-3.5 h-3.5 text-[#F97316]" />
              <span className="text-[#EDEDED] font-medium tracking-wide">
                SANJAY // NIT DURGAPUR
              </span>
              <span className="text-white/20">|</span>
              <span className="text-[11px] text-[#A1A1AA] tracking-tight">
                SELF-DIRECTED SWE &amp; AI
              </span>
            </div>
          </motion.div>

          {/* Original Editorial Headline Pairing Syne & Instrument Serif */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-bold tracking-[0.02em] font-['Syne'] uppercase leading-[0.96] sm:leading-[0.92] text-[#EDEDED] max-w-5xl mx-auto"
          >
            ENGINEERING{' '}
            <span className="font-['Instrument_Serif'] italic font-normal text-white lowercase tracking-normal px-1">
              resilient
            </span>{' '}
            SYSTEMS &amp;{' '}
            <span className="font-['Instrument_Serif'] italic font-normal text-white lowercase tracking-normal px-1">
              intelligent
            </span>{' '}
            MODELS.
          </motion.h1>

          {/* Value Proposition Body Copy in Space Grotesk */}
          <motion.p
            variants={itemVariants}
            className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-[#A1A1AA] max-w-2xl mx-auto font-['Space_Grotesk'] leading-relaxed font-normal"
          >
            I’m an undergraduate at NIT Durgapur pursuing an intensive self-directed
            track in full-stack web engineering and applied AI. Creator of{' '}
            <span className="text-[#EDEDED] font-medium underline decoration-white/20 underline-offset-4">
              CampusLoop
            </span>
            ,{' '}
            <span className="text-[#EDEDED] font-medium underline decoration-white/20 underline-offset-4">
              AssetFlow
            </span>
            , and specialized LLM diagnostic tools.
          </motion.p>

          {/* Action Trigger Group */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#work"
              className="px-6 py-3 rounded-full bg-[#EDEDED] text-[#080809] font-mono text-xs font-semibold tracking-wider hover:bg-white transition-all shadow-[0_4px_20px_rgba(255,255,255,0.12)] flex items-center gap-2 group"
            >
              <span>EXPLORE SELECTED WORK</span>
              <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-[#121215] border border-white/[0.1] text-[#EDEDED] font-mono text-xs tracking-wider hover:border-white/[0.25] hover:bg-[#18181D] transition-all flex items-center gap-2"
            >
              <Mail className="w-3.5 h-3.5 text-[#A1A1AA]" />
              <span>GET IN TOUCH</span>
            </a>
          </motion.div>

          {/* Social Micro-links */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex items-center gap-5 text-[#A1A1AA]"
          >
            <a
              href="https://github.com/sanjaycodes-code"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hover:text-white transition-colors p-2 rounded-full hover:bg-white/[0.04]"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <a
              href="https://www.linkedin.com/in/sanjay-kadivendi-271986303"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-white transition-colors p-2 rounded-full hover:bg-white/[0.04]"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <a
              href="https://x.com/KadivendiSanjay"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter) Profile"
              className="hover:text-white transition-colors p-2 rounded-full hover:bg-white/[0.04]"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <a
              href="#contact"
              aria-label="Contact Sanjay"
              className="hover:text-white transition-colors p-2 rounded-full hover:bg-white/[0.04]"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
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
