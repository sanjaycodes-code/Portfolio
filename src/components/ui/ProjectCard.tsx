import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useIsMobile } from '../../hooks/useIsMobile'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import type { Project } from '../../types'
import { Network, ShieldCheck, Sparkles, BarChart3 } from 'lucide-react'



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

  // Render project-specific technical visual artifact
  const renderProjectVisual = () => {
    switch (project.id) {
      case 'ai-resume-analyzer':
        return (
          <div className="space-y-4 font-mono text-xs">
            {/* Semantic Cosine Similarity Gauge */}
            <div className="p-3.5 rounded-lg bg-black/40 border border-white/[0.06]">
              <div className="flex items-center justify-between text-[#A1A1AA] text-[11px] mb-2">
                <span className="flex items-center gap-1.5 text-[#EDEDED]">
                  <Sparkles className="w-3 h-3 text-[#F97316]" />
                  SEMANTIC COSINE MATCH
                </span>
                <span className="text-[#F97316] font-bold">92.4%</span>
              </div>
              <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-white/40 to-[#F97316] w-[92%] rounded-full" />
              </div>
            </div>

            {/* Extracted Schema Tree snippet */}
            <div className="p-3.5 rounded-lg bg-black/40 border border-white/[0.06] text-[11px] text-[#A1A1AA] leading-relaxed">
              <div className="text-white/40 mb-1">// Extracted AST JSON Schema</div>
              <div><span className="text-emerald-400">"candidate"</span>: <span className="text-white">"Sanjay"</span>,</div>
              <div><span className="text-emerald-400">"verified_domains"</span>: [<span className="text-amber-200">"Distributed Systems"</span>, <span className="text-amber-200">"LLMs"</span>],</div>
              <div><span className="text-emerald-400">"ats_gap_diagnostics"</span>: <span className="text-white">0 warnings</span></div>
            </div>
          </div>
        )

      case 'assetflow':
        return (
          <div className="space-y-3 font-mono text-xs">
            {/* RBAC & Status Transition Matrix */}
            <div className="p-3.5 rounded-lg bg-black/40 border border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F97316]" />
                <span className="text-[#EDEDED] text-[11px]">ROLE-BASED ACCESS (RBAC)</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-white/[0.05] text-[10px] text-[#A1A1AA] border border-white/[0.06]">
                JWT VERIFIED
              </span>
            </div>

            {/* Asset Lifecycle Progression */}
            <div className="p-3.5 rounded-lg bg-black/40 border border-white/[0.06] space-y-2">
              <div className="text-[10px] text-white/40 uppercase tracking-widest">// Lifecycle State Machine</div>
              <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                <div className="py-1 rounded bg-white/[0.03] border border-white/[0.04] text-white/60">01. INGEST</div>
                <div className="py-1 rounded bg-white/[0.07] border border-white/[0.12] text-white font-bold">02. ALLOCATED</div>
                <div className="py-1 rounded bg-white/[0.03] border border-white/[0.04] text-white/60">03. AUDITED</div>
              </div>
            </div>
          </div>
        )

      case 'campusloop':
        return (
          <div className="space-y-3 font-mono text-xs">
            {/* Peer-to-Peer Reservation Status */}
            <div className="p-3.5 rounded-lg bg-black/40 border border-white/[0.06]">
              <div className="flex items-center justify-between text-[11px] mb-2">
                <span className="flex items-center gap-2 text-[#EDEDED]">
                  <Network className="w-3.5 h-3.5 text-[#F97316]" />
                  CONFLICT-FREE SCHEDULER
                </span>
                <span className="text-emerald-400 font-bold text-[10px]">ACTIVE</span>
              </div>
              <p className="text-[10px] text-[#A1A1AA] leading-tight">
                Zero double-booking guarantee via transactional locks on shared campus lab equipment.
              </p>
            </div>

            {/* University Verified Domain Gateway */}
            <div className="p-3 rounded-lg bg-black/40 border border-white/[0.06] flex items-center justify-between text-[11px]">
              <span className="text-[#A1A1AA]">DOMAIN GATEWAY:</span>
              <span className="text-[#EDEDED] bg-white/[0.05] px-2 py-0.5 rounded text-[10px]">
                @edu.campus.in
              </span>
            </div>
          </div>
        )

      case 'job-market-analytics':
        return (
          <div className="space-y-3 font-mono text-xs">
            {/* Query Optimization & Pipeline Metrics */}
            <div className="p-3.5 rounded-lg bg-black/40 border border-white/[0.06]">
              <div className="flex items-center justify-between text-[11px] mb-2">
                <span className="flex items-center gap-2 text-[#EDEDED]">
                  <BarChart3 className="w-3.5 h-3.5 text-[#F97316]" />
                  SQL CTE &amp; WINDOW AGGREGATIONS
                </span>
                <span className="text-[#F97316] font-bold text-[10px]">-38% RUNTIME</span>
              </div>
              <div className="space-y-1 text-[10px] text-[#A1A1AA]">
                <div className="flex justify-between">
                  <span>POSTINGS PROCESSED:</span>
                  <span className="text-white font-semibold">50,000+ Records</span>
                </div>
                <div className="flex justify-between">
                  <span>SALARY PERCENTILE BANDS:</span>
                  <span className="text-white font-semibold">p25 / p50 / p90</span>
                </div>
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
              {project.id.toUpperCase()} // SYS.ENGINE
            </span>
          </div>

          <span className="font-mono text-[10px] text-[#A1A1AA] px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.04] uppercase">
            {project.category}
          </span>
        </div>

        {/* Project Specific Technical Visual Container */}
        <div className="relative py-2">
          {renderProjectVisual()}
        </div>

        {/* Card Footer Status Indicator */}
        <div className="mt-5 pt-4 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-[#52525B]">
          <span>PERSPECTIVE: 3D SPRING</span>
          {isMobile && (
            <span className="text-[#F97316] text-[10px]">
              {isTapped ? 'TAP TO TILT' : 'TAP TO LEVEL'}
            </span>
          )}
        </div>
      </motion.div>
    </div>
  )
}
