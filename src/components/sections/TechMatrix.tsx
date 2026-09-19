import { motion, type Variants } from 'framer-motion'
import { SKILL_CATEGORIES } from '../../data/skills'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { Bot, Server, Layout, Terminal, Sparkles } from 'lucide-react'

export function TechMatrix() {
  const prefersReducedMotion = useReducedMotion()

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'ai-ml':
        return <Bot className="w-4 h-4 text-[#F97316]" />
      case 'systems-backend':
        return <Server className="w-4 h-4 text-[#F97316]" />
      case 'frontend-architecture':
        return <Layout className="w-4 h-4 text-[#F97316]" />
      case 'tools-environments':
        return <Terminal className="w-4 h-4 text-[#F97316]" />
      default:
        return <Sparkles className="w-4 h-4 text-[#F97316]" />
    }
  }

  return (
    <section id="stack" className="py-24 sm:py-32 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full border-t border-white/[0.08]">
      {/* Section Editorial Header */}
      <div className="mb-16 sm:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
        <div>
          <span className="font-mono text-xs text-[#8E8E98] tracking-widest uppercase block mb-2">
            // 02 TECHNICAL MATRIX
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-['Syne'] text-[#EDEDED] tracking-tight leading-[1.05]">
            VERIFIED{' '}
            <span className="font-['Instrument_Serif'] italic font-normal text-white lowercase tracking-normal">
              stack
            </span>{' '}
            &amp; TOOLING.
          </h2>
        </div>

        <p className="font-['Space_Grotesk'] text-sm text-[#A1A1AA] max-w-md leading-relaxed">
          Zero arbitrary percentages or synthetic skill bars. A transparent index of technologies 
          and frameworks deployed across real hackathon builds and active projects.
        </p>
      </div>

      {/* Categorized 2x2 Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {SKILL_CATEGORIES.map((cat) => (
          <motion.div
            key={cat.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="p-7 sm:p-8 rounded-2xl bg-[#121215] border border-white/[0.07] hover:border-white/[0.18] transition-all duration-300 shadow-xl group flex flex-col justify-between"
          >
            <div>
              {/* Category Index & Icon */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2.5">
                  {getCategoryIcon(cat.id)}
                  <h3 className="font-['Syne'] text-xl font-bold text-[#EDEDED] group-hover:text-white transition-colors">
                    {cat.categoryName}
                  </h3>
                </div>
                <span className="font-mono text-xs text-[#52525B] group-hover:text-[#A1A1AA] transition-colors">
                  {cat.index}
                </span>
              </div>

              {/* Context Note & Scope */}
              <div className="mb-6 space-y-2">
                <p className="font-['Space_Grotesk'] text-sm text-[#A1A1AA] leading-relaxed">
                  {cat.description}
                </p>
                <div className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#A1A1AA] bg-white/[0.03] px-2.5 py-1 rounded border border-white/[0.05]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]/80" />
                  <span>{cat.projectContext}</span>
                </div>
              </div>
            </div>

            {/* Monospace Tag Matrix */}
            <div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.05]">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`inline-flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded-lg border transition-all ${
                      skill.isCore
                        ? 'bg-white/[0.04] text-[#EDEDED] border-white/[0.1] hover:border-[#F97316]/40 hover:text-white'
                        : 'bg-white/[0.02] text-[#A1A1AA] border-white/[0.05] hover:border-white/[0.15] hover:text-[#EDEDED]'
                    }`}
                  >
                    {skill.isCore && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
                    )}
                    <span>{skill.name}</span>
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
