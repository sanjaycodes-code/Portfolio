import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useIsMobile } from '../../hooks/useIsMobile'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import type { Project } from '../../types'
import { AlertCircle, Terminal, ExternalLink, BarChart3, Bot, RefreshCw } from 'lucide-react'



interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile(768)
  const prefersReducedMotion = useReducedMotion()
  const [isTapped, setIsTapped] = useState(false)

  // Framer Motion spring physics for 60fps cursor tilt (scoped narrowly to avoid re-renders)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { stiffness: 160, damping: 18 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  // Subtly mapped rotation angles (-7deg to +7deg)
  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6])
  const scale = useSpring(1, { stiffness: 220, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || prefersReducedMotion) return
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseEnter = () => {
    if (isMobile || prefersReducedMotion) return
    scale.set(1.02)
  }

  const handleMouseLeave = () => {
    if (isMobile || prefersReducedMotion) return
    mouseX.set(0)
    mouseY.set(0)
    scale.set(1)
  }

  // Mobile tap-to-level toggle
  const handleMobileTap = () => {
    if (isMobile) {
      setIsTapped((prev) => !prev)
    }
  }

  // Render authentic project-specific technical visual artifact (zero fabricated numbers)
  const renderProjectVisual = () => {
    switch (project.id) {
      case 'ai-resume-analyzer':
        return (
          <div className="space-y-3 font-mono text-xs">
            {/* Tooling & Framework Banner */}
            <div className="p-3 rounded-lg bg-black/40 border border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="w-3.5 h-3.5 text-[#F97316]" />
                <span className="text-[#EDEDED] text-[11px]">BUILD ENGINE: GOOGLE ANTIGRAVITY</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-[10px] text-emerald-400 border border-emerald-500/20">
                DEPLOYED
              </span>
            </div>

            {/* Architecture Overview */}
            <div className="p-3.5 rounded-lg bg-black/40 border border-white/[0.06] text-[11px] text-[#A1A1AA] space-y-1.5 leading-relaxed">
              <div className="text-white/40">// Architectural Pipeline</div>
              <div><span className="text-[#EDEDED]">01. Pipeline:</span> 7 deterministic ATS rules + JD matching</div>
              <div><span className="text-[#EDEDED]">02. Architecture:</span> Provider-agnostic AI layer (swap LLMs)</div>
              <div><span className="text-[#EDEDED]">03. Features:</span> PDF report export + STAR bullet rewriting</div>
            </div>
          </div>
        )

      case 'assetflow':
        return (
          <div className="space-y-3 font-mono text-xs">
            {/* Hackathon Status Header */}
            <div className="p-3 rounded-lg bg-black/40 border border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-[#F97316]" />
                <span className="text-[#EDEDED] text-[11px]">HACKATHON BUILD (SOLO)</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-amber-500/10 text-[10px] text-amber-400 border border-amber-500/20">
                PAUSED MID-BUILD
              </span>
            </div>

            {/* Technical Debugging Log */}
            <div className="p-3.5 rounded-lg bg-black/50 border border-white/[0.06] space-y-2">
              <div className="flex items-center gap-1.5 text-[10px] text-red-400">
                <AlertCircle className="w-3 h-3 text-red-400" />
                <span>BLOCKED ON MONGO ATLAS TLS HANDSHAKE</span>
              </div>
              <div className="p-2 rounded bg-black/60 border border-white/[0.04] text-[10px] text-[#A1A1AA] leading-relaxed">
                <div><span className="text-white/40">$</span> MongoServerSelectionError: connection timeout</div>
                <div className="text-white/40">↳ Scaffold &amp; auth modules built; debugging network TLS timeout.</div>
              </div>
            </div>
          </div>
        )

      case 'campusloop':
        return (
          <div className="space-y-3 font-mono text-xs">
            {/* Solo Restart Banner */}
            <div className="p-3 rounded-lg bg-black/40 border border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <RefreshCw className="w-3.5 h-3.5 text-[#F97316]" />
                <span className="text-[#EDEDED] text-[11px]">SOLO REWRITE // FULL MERN STACK</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-[10px] text-emerald-400 border border-emerald-500/20">
                DEPLOYED
              </span>
            </div>

            {/* Architectural Modules */}
            <div className="p-3.5 rounded-lg bg-black/40 border border-white/[0.06] space-y-1.5 text-[11px] text-[#A1A1AA]">
              <div className="text-white/40">// Scope &amp; Implementation</div>
              <div><span className="text-[#EDEDED]">Auth:</span> Verified institute email JWT + route guards</div>
              <div><span className="text-[#EDEDED]">Real-Time:</span> Socket.io live availability broadcasts</div>
              <div><span className="text-[#EDEDED]">Concurrency:</span> Atomic MongoDB ops (no double-booking)</div>
            </div>
          </div>
        )

      case 'job-market-analytics':
        return (
          <div className="space-y-3 font-mono text-xs">
            {/* Pipeline Stage Header */}
            <div className="p-3 rounded-lg bg-black/40 border border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-3.5 h-3.5 text-[#F97316]" />
                <span className="text-[#EDEDED] text-[11px]">DATA PIPELINE STAGE</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-sky-500/10 text-[10px] text-sky-400 border border-sky-500/20">
                IN PROGRESS
              </span>
            </div>

            {/* Pipeline Roadmap */}
            <div className="p-3.5 rounded-lg bg-black/40 border border-white/[0.06] space-y-1.5 text-[10px] text-[#A1A1AA]">
              <div className="flex justify-between">
                <span>01. DATA INGESTION:</span>
                <span className="text-white">Kaggle + Hugging Face</span>
              </div>
              <div className="flex justify-between">
                <span>02. DATABASE TARGET:</span>
                <span className="text-white">PostgreSQL Schema</span>
              </div>
              <div className="flex justify-between">
                <span>03. ANALYTICS MODEL:</span>
                <span className="text-white">Power BI Star Schema</span>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  // Dynamic style calculation: desktop gets 3D spring values; mobile gets clean editorial tilt with tap-leveling
  const desktopStyle = {
    rotateX: prefersReducedMotion ? 0 : rotateX,
    rotateY: prefersReducedMotion ? 0 : rotateY,
    scale: prefersReducedMotion ? 1 : scale,
    transformStyle: 'preserve-3d' as const,
  }

  const mobileStyle = {
    transform: isTapped ? 'rotate(0deg)' : `rotate(${project.compositionTiltDeg || 0}deg)`,
  }

  return (
    <div
      style={{ perspective: 1200 }}
      className="w-full select-none"
      onClick={handleMobileTap}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={isMobile ? mobileStyle : desktopStyle}
        className={`relative w-full rounded-2xl bg-[#121215] border border-white/[0.08] hover:border-white/[0.22] p-6 sm:p-7 shadow-[0_16px_40px_rgba(0,0,0,0.6)] transition-colors duration-300 group overflow-hidden ${
          isMobile ? 'transition-transform duration-300' : ''
        }`}
      >
        {/* Subtle hover hairline glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] group-hover:bg-white/[0.04] blur-2xl pointer-events-none rounded-full transition-colors" />

        {/* Card Canvas Header Bar */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.06] text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-[#F97316] transition-colors" />
            <span className="text-[#52525B] group-hover:text-[#A1A1AA] transition-colors uppercase tracking-wider text-[11px]">
              {project.id.toUpperCase()}
            </span>
            <span
              className={`font-mono text-[9px] px-2 py-0.5 rounded-full border uppercase tracking-tight ${
                project.buildStatus === 'deployed'
                  ? 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20'
                  : project.buildStatus === 'paused'
                  ? 'text-amber-400 bg-amber-400/10 border-amber-400/20'
                  : 'text-[#38BDF8] bg-[#38BDF8]/10 border-[#38BDF8]/20'
              }`}
            >
              {project.buildStatus.replace('-', ' ')}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 font-mono text-[10px] text-[#F97316] bg-[#F97316]/10 hover:bg-[#F97316]/20 border border-[#F97316]/30 px-2 py-0.5 rounded transition-colors"
              >
                <span>LIVE DEMO</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            )}
            <span className="font-mono text-[10px] text-[#A1A1AA] px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.04] uppercase">
              {project.category}
            </span>
          </div>
        </div>

        {/* Project Specific Technical Visual Container */}
        <div className="relative py-2">
          {renderProjectVisual()}
        </div>

        {/* Card Footer Status Indicator */}
        <div className="mt-5 pt-4 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-[#52525B]">
          <span className="truncate max-w-[200px] sm:max-w-none text-[#A1A1AA]">
            {project.statusLabel}
          </span>
          {isMobile && (
            <span className="text-[#F97316] text-[10px] shrink-0 ml-2">
              {isTapped ? 'TAP TO TILT' : 'TAP TO LEVEL'}
            </span>
          )}
        </div>
      </motion.div>
    </div>
  )
}
