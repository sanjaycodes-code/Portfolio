import { useReducedMotion } from '../../hooks/useReducedMotion'

interface AboutProps {
  /**
   * If true, enables the gentle idle floating animation.
   * Defaults to true, but respects prefers-reduced-motion automatically.
   */
  animateMascot?: boolean
}

export function About({ animateMascot = true }: AboutProps) {
  const prefersReducedMotion = useReducedMotion()
  const shouldAnimate = animateMascot && !prefersReducedMotion

  return (
    <section
      id="about"
      className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full border-t border-white/[0.08] relative overflow-hidden"
    >
      {/* Section Eyebrow Header */}
      <div className="mb-10 sm:mb-14 pb-6 border-b border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-[#8E8E98] tracking-widest uppercase">
            // ABOUT / PROFILE &amp; PHILOSOPHY
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-[#71717A]">
          <span>NIT DURGAPUR</span>
          <span>•</span>
          <span>AUTONOMOUS BUILDER</span>
        </div>
      </div>

      {/* Main Bio & Visual Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-14 items-center">
        {/* Left Column: Typography-Focused Bio Copy */}
        <div className="lg:col-span-7 space-y-6">
          {/* Primary Editorial Headline: Syne structure + Instrument Serif italic accent */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-bold font-['Syne'] text-[#EDEDED] tracking-[0.02em] leading-[1.15] sm:leading-[1.12]">
            Hi I&apos;m Sanjay — I turn curiosity into code, building full-stack
            products and{' '}
            <span className="font-['Instrument_Serif'] italic font-normal text-white lowercase tracking-normal px-1 inline-block">
              AI-powered experiences
            </span>{' '}
            that actually do something.
          </h2>

          {/* 3 Tight Supporting Lines: Space Grotesk */}
          <div className="space-y-3.5 pt-2 text-[#A1A1AA] font-['Space_Grotesk'] text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
            <p>
              <span className="text-[#EDEDED] font-medium font-mono text-xs uppercase tracking-wider block sm:inline sm:mr-2">
                [WHAT I BUILD]
              </span>
              Full-stack web architectures and applied LLM pipelines — from
              real-time campus networks like CampusLoop to heuristic ATS resume
              optimizers with deterministic scoring.
            </p>

            <p>
              <span className="text-[#EDEDED] font-medium font-mono text-xs uppercase tracking-wider block sm:inline sm:mr-2">
                [CURRENT FOCUS]
              </span>
              Diving deep into distributed systems, agentic workflow
              orchestration, and sub-100ms real-time state synchronization.
            </p>

            <p>
              <span className="text-[#EDEDED] font-medium font-mono text-xs uppercase tracking-wider block sm:inline sm:mr-2">
                [MY APPROACH]
              </span>
              Write deterministic code, strip away superfluous abstractions, and
              design resilient systems that solve tangible, real-world problems.
            </p>
          </div>
        </div>

        {/* Right Column: Floating Visual Art Card (Substantially Enlarged) */}
        <div className="lg:col-span-5 flex items-center justify-center lg:justify-end relative">
          {/* Ambient electric lightning aura */}
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-cyan-500/[0.09] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute w-56 h-56 bg-[#F97316]/[0.06] rounded-full blur-2xl pointer-events-none -bottom-6 -right-6" />

          {/* Floating Card Frame */}
          <div
            className={`w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] relative group rounded-2xl p-1 bg-gradient-to-b from-white/[0.16] via-white/[0.05] to-transparent border border-white/[0.1] shadow-[0_24px_56px_rgba(0,0,0,0.75)] backdrop-blur-sm transition-all duration-300 ${
              shouldAnimate ? 'animate-subtle-drift' : ''
            }`}
          >
            {/* Visual Media Container */}
            <div className="w-full aspect-[16/10] sm:aspect-[16/10] rounded-xl overflow-hidden relative bg-[#0C0C0E]">
              <img
                src="/about-visual.png"
                alt="Editorial Visual Accent"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Subtle Film Grain & Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080809]/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.14] rounded-xl pointer-events-none" />

              {/* Editorial Micro-Tag */}
              <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-[11px] font-mono text-[#EDEDED] pointer-events-none">
                <span className="px-2.5 py-0.5 rounded bg-[#080809]/85 backdrop-blur-md border border-white/[0.12] text-white/90 tracking-wider">
                  // FOCUS_STATE
                </span>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse shadow-[0_0_10px_#38BDF8]" />
                  <span className="text-[10px] text-[#A1A1AA] tracking-widest uppercase hidden sm:inline">
                    SYNCED
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
