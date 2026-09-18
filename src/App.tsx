import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import { PROJECTS } from './data/projects'
import { ArrowUpRight, Terminal, Layers } from 'lucide-react'

export default function App() {
  return (
    <div className="min-h-screen bg-[#080809] text-[#EDEDED] flex flex-col selection:bg-[#F97316]/20 selection:text-white">
      {/* Global Floating Glassmorphism Navbar */}
      <Navbar />

      {/* Main Content Shell */}
      <main className="flex-1 flex flex-col">
        {/* Editorial Hero Section */}
        <Hero />

        {/* Phase 3 Target Anchor: Featured Projects Preview */}
        <section id="work" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-white/[0.08] gap-4">
            <div>
              <span className="font-mono text-xs text-[#52525B] tracking-widest uppercase block mb-1">
                // 01 ARCHITECTURE &amp; WORK
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-['Syne'] text-[#EDEDED] tracking-tight">
                FEATURED{' '}
                <span className="font-['Instrument_Serif'] italic font-normal text-white lowercase">
                  engineering
                </span>{' '}
                PROJECTS
              </h2>
            </div>
            <p className="font-mono text-xs text-[#A1A1AA] max-w-xs">
              Phase 2 Shell active. Phase 3 will introduce interactive 3D tilt
              physics and deep technical case studies.
            </p>
          </div>

          {/* Preliminary Card Grid connecting authentic data to the layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="bg-[#121215]/90 border border-white/[0.06] hover:border-white/[0.16] rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-xl group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-[#52525B] group-hover:text-[#A1A1AA] transition-colors">
                      {project.index}
                    </span>
                    <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-white/[0.04] text-[#A1A1AA] border border-white/[0.05] uppercase">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-['Syne'] text-[#EDEDED] group-hover:text-white mb-2">
                    {project.title}
                  </h3>

                  <p className="font-['Instrument_Serif'] italic text-base text-[#A1A1AA] mb-4">
                    "{project.italicAccent}"
                  </p>

                  <p className="font-['Space_Grotesk'] text-sm text-[#A1A1AA] line-clamp-2 mb-6 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.05] mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] text-[#A1A1AA] bg-white/[0.02] px-2 py-0.5 rounded border border-white/[0.04]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]"></span>
                      <span className="font-mono text-[11px] text-[#A1A1AA]">
                        {project.metrics[0].label}: {project.metrics[0].value}
                      </span>
                    </div>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View code for ${project.title}`}
                      className="font-mono text-xs text-[#EDEDED] hover:text-white flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>VIEW REPO</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Phase 4 Target Anchors */}
        <section id="stack" className="py-16 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full border-t border-white/[0.05]">
          <div className="flex items-center gap-2 font-mono text-xs text-[#52525B] tracking-widest uppercase mb-4">
            <Layers className="w-4 h-4 text-[#F97316]" />
            <span>// 02 TECHNICAL MATRIX (COMING IN PHASE 4)</span>
          </div>
        </section>

        <section id="journey" className="py-16 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full border-t border-white/[0.05]">
          <div className="flex items-center gap-2 font-mono text-xs text-[#52525B] tracking-widest uppercase mb-4">
            <Terminal className="w-4 h-4 text-[#F97316]" />
            <span>// 03 EXPERIENCE &amp; ACADEMIC JOURNEY (COMING IN PHASE 4)</span>
          </div>
        </section>

        {/* Phase 5 Target Anchor */}
        <section id="terminal" className="py-16 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full border-t border-white/[0.05]">
          <div className="flex items-center gap-2 font-mono text-xs text-[#52525B] tracking-widest uppercase mb-4">
            <Terminal className="w-4 h-4 text-[#F97316]" />
            <span>// 04 INTERACTIVE AI TERMINAL (COMING IN PHASE 5)</span>
          </div>
        </section>

        {/* Phase 6 Target Anchor */}
        <section id="contact" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full border-t border-white/[0.05]">
          <div className="flex items-center gap-2 font-mono text-xs text-[#52525B] tracking-widest uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-[#F97316]" />
            <span>// 05 EDITORIAL FOOTER &amp; CONTACT (COMING IN PHASE 6)</span>
          </div>
        </section>
      </main>
    </div>
  )
}
