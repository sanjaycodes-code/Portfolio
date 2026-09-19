import { motion, type Variants } from 'framer-motion'
import { ArrowUpRight, ExternalLink, BookOpen } from 'lucide-react'
import { PROJECTS } from '../../data/projects'
import { ProjectCard } from '../ui/ProjectCard'
import { useReducedMotion } from '../../hooks/useReducedMotion'


export function FeaturedProjects() {
  const prefersReducedMotion = useReducedMotion()

  const entryVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section id="work" className="py-24 sm:py-32 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full">
      {/* Section Editorial Header */}
      <div className="mb-20 sm:mb-28 border-b border-white/[0.08] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-mono text-xs text-[#52525B] tracking-widest uppercase block mb-2">
            // 01 SELECTED WORKS
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-['Syne'] text-[#EDEDED] tracking-tight leading-[1.05]">
            ARCHITECTURAL{' '}
            <span className="font-['Instrument_Serif'] italic font-normal text-white lowercase tracking-normal">
              case studies
            </span>{' '}
            &amp; SYSTEMS.
          </h2>
        </div>

        <p className="font-['Space_Grotesk'] text-sm text-[#A1A1AA] max-w-sm leading-relaxed">
          Four authentic software engineering builds highlighting full-stack resiliency, 
          applied machine learning, and data intelligence.
        </p>
      </div>

      {/* Asymmetric Editorial Project Entries */}
      <div className="space-y-24 sm:space-y-32 md:space-y-40">
        {PROJECTS.map((project, index) => {
          const isEven = index % 2 === 0
          const primaryMetric = project.metrics[0]

          return (
            <motion.article
              key={project.id}
              variants={entryVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className={`flex flex-col ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-10 lg:gap-16`}
            >
              {/* Visual Card Half (54% width on desktop) */}
              <div className="w-full lg:w-[54%]">
                <ProjectCard project={project} />
              </div>

              {/* Narrative & Technical Specs Half (46% width on desktop) */}
              <div className="w-full lg:w-[46%] flex flex-col justify-center text-left">
                {/* Numbered Project Index Label & Category */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs text-[#F97316] font-semibold tracking-wider">
                    {project.index}
                  </span>
                  <span className="text-white/20 text-xs">|</span>
                  <span className="font-mono text-[11px] text-[#A1A1AA] uppercase tracking-wider">
                    {project.category.toUpperCase()}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-['Syne'] text-[#EDEDED] tracking-tight leading-snug">
                  {project.title}
                </h3>

                {/* Editorial Serif Italic Accent Phrase */}
                <p className="font-['Instrument_Serif'] italic text-lg sm:text-xl text-white/80 mt-1 mb-4">
                  "{project.italicAccent}"
                </p>

                {/* Summary */}
                <p className="font-['Space_Grotesk'] text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Key Technical Achievement / Metric Box */}
                {primaryMetric && (
                  <div className="mb-6 p-3.5 rounded-xl bg-[#121215] border border-white/[0.07] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F97316] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F97316]"></span>
                      </span>
                      <span className="font-mono text-xs text-[#A1A1AA] uppercase tracking-wider">
                        {primaryMetric.label}
                      </span>
                    </div>
                    <span className="font-mono text-xs font-bold text-[#EDEDED] bg-white/[0.04] px-2.5 py-0.5 rounded border border-white/[0.05]">
                      {primaryMetric.value}
                    </span>
                  </div>
                )}

                {/* Tech Stack Tags (JetBrains Mono) */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] text-[#A1A1AA] bg-white/[0.03] hover:bg-white/[0.06] hover:text-[#EDEDED] px-2.5 py-1 rounded border border-white/[0.06] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links & Case Study Stub Trigger */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.06]">
                  {/* Live Demo (Priority CTA with orange micro-accent border) */}
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open live demo for ${project.title}`}
                      className="font-mono text-xs text-white hover:text-white flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#F97316]/10 hover:bg-[#F97316]/20 border border-[#F97316]/30 hover:border-[#F97316]/60 transition-all shadow-sm group"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-[#F97316]" />
                      <span className="font-semibold">LIVE DEMO</span>
                      <ArrowUpRight className="w-3 h-3 text-[#F97316] opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  )}

                  {/* GitHub Repo */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      className="font-mono text-xs text-[#A1A1AA] hover:text-white flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.2] transition-all group"
                    >
                      <svg className="w-3.5 h-3.5 fill-current opacity-70 group-hover:opacity-100" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      <span>SOURCE CODE</span>
                      <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  )}

                  {/* Future Case Study Route Stub (Phase 4/5 integration) */}
                  <a
                    href={`#/case-study/${project.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      alert(`Case Study for "${project.title}" will expand in Phase 4/5. Route stub: /case-study/${project.id}`)
                    }}
                    className="font-mono text-xs text-[#A1A1AA] hover:text-[#EDEDED] flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.08] hover:border-white/[0.2] bg-white/[0.02] hover:bg-white/[0.05] transition-all sm:ml-auto"
                  >
                    <BookOpen className="w-3 h-3 text-white/50" />
                    <span>CASE STUDY</span>
                    <span className="text-[10px] text-[#F97316]">STUB</span>
                  </a>
                </div>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
