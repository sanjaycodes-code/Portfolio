import { motion, type Variants } from 'framer-motion'
import { EXPERIENCES } from '../../data/experience'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import type { ExperienceItem } from '../../types'

function getStatusBadgeClass(statusType: ExperienceItem['statusType']) {
  switch (statusType) {
    case 'active':
      return 'bg-amber-500/10 text-amber-300 border-amber-500/20'
    case 'solo-restart':
      return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
    case 'paused':
      return 'bg-amber-500/10 text-amber-400 border-amber-500/20'
    case 'academic':
      return 'bg-white/[0.04] text-[#A1A1AA] border-white/[0.08]'
    default:
      return 'bg-white/[0.04] text-[#A1A1AA] border-white/[0.08]'
  }
}

export function ExperienceJourney() {
  const prefersReducedMotion = useReducedMotion()

  const nodeVariants: Variants = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section id="journey" className="py-24 sm:py-32 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full border-t border-white/[0.08]">
      {/* Section Editorial Header */}
      <div className="mb-16 sm:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
        <div>
          <span className="font-mono text-xs text-[#8E8E98] tracking-widest uppercase block mb-2">
            // 03 EXPERIENCE &amp; JOURNEY
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-['Syne'] text-[#EDEDED] tracking-tight leading-[1.05]">
            ACADEMIC{' '}
            <span className="font-['Instrument_Serif'] italic font-normal text-white lowercase tracking-normal">
              foundations
            </span>{' '}
            &amp; SPRINTS.
          </h2>
        </div>

        <p className="font-['Space_Grotesk'] text-sm text-[#A1A1AA] max-w-md leading-relaxed">
          An honest developmental trajectory: balancing engineering rigor at NIT Durgapur with an 
          independent, self-directed curriculum and practical hackathon building.
        </p>
      </div>

      {/* Minimal Editorial Vertical Timeline */}
      <div className="relative border-l border-white/[0.08] ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12 sm:space-y-16">
        {EXPERIENCES.map((item) => (
          <motion.div
            key={item.id}
            variants={nodeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="relative group"
          >
            {/* Timeline Node Indicator Marker */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3 h-3 rounded-full bg-[#080809] border-2 border-white/[0.3] group-hover:border-[#F97316] transition-colors flex items-center justify-center">
              {item.statusType === 'active' && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-ping" />
              )}
            </div>

            {/* Node Content Container */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#121215] border border-white/[0.06] hover:border-white/[0.16] transition-all duration-300 shadow-xl">
              {/* Node Header Info */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-white/[0.05]">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="font-mono text-xs text-[#F97316] font-semibold">
                    {item.index}
                  </span>
                  <span className="text-white/20 text-xs">|</span>
                  <span className="font-mono text-xs text-[#A1A1AA]">
                    {item.period}
                  </span>
                  <span className="text-white/20 text-xs hidden sm:inline">|</span>
                  <span className="font-mono text-xs text-white/60 hidden sm:inline">
                    {item.organization}
                  </span>
                </div>

                <span
                  className={`font-mono text-[10px] px-2.5 py-0.5 rounded-full border tracking-wide uppercase ${getStatusBadgeClass(
                    item.statusType
                  )}`}
                >
                  {item.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold font-['Syne'] text-[#EDEDED] group-hover:text-white transition-colors mb-4">
                {item.title}
              </h3>

              {/* Bullet Points */}
              <ul className="space-y-2.5 mb-6 text-sm text-[#A1A1AA] font-['Space_Grotesk'] leading-relaxed">
                {item.description.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <span className="text-[#F97316]/70 mt-1.5 text-xs">✦</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.05]">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] text-[#A1A1AA] bg-white/[0.02] px-2.5 py-1 rounded border border-white/[0.05]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
