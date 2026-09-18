import { Terminal, Sparkles } from 'lucide-react'
import { PROJECTS } from './data/projects'


export default function App() {
  return (
    <main className="min-h-screen bg-[#080809] text-[#EDEDED] flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting (subtle obsidian glow, not orange) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/[0.015] blur-3xl rounded-full pointer-events-none" />

      {/* Floating Status Pill testing the strict micro-orange accent rule */}
      <div className="mb-12 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#121215] border border-white/[0.08] shadow-2xl backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F97316] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F97316]"></span>
        </span>
        <span className="font-mono text-xs text-[#A1A1AA] tracking-tight">
          STATUS: <span className="text-[#EDEDED] font-medium">PHASE 1 ARCHITECTURE LOCKED</span>
        </span>
        <span className="text-white/20 text-xs">|</span>
        <span className="font-mono text-[11px] text-[#F97316]">SWE // AI INTERN</span>
      </div>

      {/* Hero Typography Demonstration */}
      <div className="max-w-4xl text-center space-y-6 z-10">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-['Syne'] leading-[1.08]">
          Engineering{' '}
          <span className="font-['Instrument_Serif'] italic font-normal text-white">
            intelligent architectures
          </span>{' '}
          at scale.
        </h1>

        <p className="text-base sm:text-lg text-[#A1A1AA] max-w-2xl mx-auto font-['Space_Grotesk'] leading-relaxed">
          Sanjay — BTech student focusing on distributed consensus, speculative LLM inference, 
          and high-performance backend systems.
        </p>

        {/* Diagonal Ribbon Motif Preview */}
        <div className="pt-4 pb-6 flex justify-center">
          <div className="inline-block transform -rotate-2 bg-[#121215] border border-white/[0.08] px-5 py-2 rounded-sm shadow-xl">
            <p className="font-mono text-xs tracking-widest text-[#A1A1AA] uppercase flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
              <span>DIAGONAL RIBBON MOTIF // TOKEN VERIFICATION</span>
            </p>
          </div>
        </div>

        {/* 3D Tilted Card Preview Composition (Static baseline with hover straightener) */}
        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
          {PROJECTS.slice(0, 2).map((proj) => (
            <div
              key={proj.id}
              style={{ transform: `rotate(${proj.compositionTiltDeg || 0}deg)` }}
              className="group bg-[#121215] border border-white/[0.06] hover:border-white/[0.15] p-6 rounded-xl transition-all duration-300 hover:rotate-0 hover:-translate-y-1.5 shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#52525B] group-hover:text-[#A1A1AA] transition-colors">
                  {proj.index}
                </span>
                <span className="inline-flex items-center gap-1 font-mono text-[11px] px-2 py-0.5 rounded bg-white/[0.04] text-[#A1A1AA] border border-white/[0.04]">
                  {proj.category}
                </span>
              </div>

              <h3 className="text-xl font-bold font-['Syne'] text-[#EDEDED] group-hover:text-white mb-1">
                {proj.title}
              </h3>
              
              <p className="font-['Instrument_Serif'] italic text-sm text-[#A1A1AA] mb-4">
                "{proj.italicAccent}"
              </p>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.05]">
                {proj.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] text-[#A1A1AA] bg-white/[0.02] px-2 py-0.5 rounded border border-white/[0.04]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Phase 1 Verification Checklist Box */}
        <div className="mt-12 p-6 rounded-xl bg-[#121215]/60 border border-white/[0.06] text-left max-w-xl mx-auto backdrop-blur-sm">
          <div className="flex items-center gap-2 font-mono text-xs text-[#EDEDED] font-semibold mb-3">
            <Terminal className="w-4 h-4 text-[#F97316]" />
            <span>PHASE 1 FOUNDATION AUDIT</span>
          </div>
          <ul className="space-y-2 font-mono text-xs text-[#A1A1AA]">
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> React 19 + Vite 8 + TypeScript configured
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> Tailwind CSS v4 with custom @theme variables
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> Google Fonts: Syne + Instrument Serif + JetBrains Mono
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> Typed data models & schemas initialized
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> Orange strictly confined to micro-accents
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}

