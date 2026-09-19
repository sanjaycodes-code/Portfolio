import { useState, useMemo, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ROLE_PRESETS,
  RESUME_PRESETS,
  TLS_DIAGNOSTIC_STEPS,
  analyzeResumeText,
  type RolePreset,
  type ResumePreset,
  type DiagnosticStep
} from '../../data/playground'
import { useReducedMotion } from '../../hooks/useReducedMotion'

type PlaygroundMode = 'ats' | 'tls'

export function InteractivePlayground() {
  const prefersReducedMotion = useReducedMotion()
  const [mode, setMode] = useState<PlaygroundMode>('ats')

  // --- ATS Engine State ---
  const [selectedRole, setSelectedRole] = useState<RolePreset>(ROLE_PRESETS[0])
  const [inputText, setInputText] = useState<string>(RESUME_PRESETS[0].text)
  const [activePresetId, setActivePresetId] = useState<string>(RESUME_PRESETS[0].id)

  const analysis = useMemo(() => {
    return analyzeResumeText(inputText, selectedRole)
  }, [inputText, selectedRole])

  const handleSelectPreset = (preset: ResumePreset) => {
    setActivePresetId(preset.id)
    setInputText(preset.text)
  }

  // --- TLS Terminal State ---
  const [diagnosticHistory, setDiagnosticHistory] = useState<DiagnosticStep[]>([
    TLS_DIAGNOSTIC_STEPS[0]
  ])
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0)
  const [commandInput, setCommandInput] = useState<string>('')
  const terminalEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' })
    }
  }, [diagnosticHistory, prefersReducedMotion])

  const handleStepForward = () => {
    if (currentStepIndex < TLS_DIAGNOSTIC_STEPS.length - 1) {
      const nextIdx = currentStepIndex + 1
      setCurrentStepIndex(nextIdx)
      setDiagnosticHistory((prev) => [...prev, TLS_DIAGNOSTIC_STEPS[nextIdx]])
    }
  }

  const handleRunFullDiagnostic = () => {
    setDiagnosticHistory(TLS_DIAGNOSTIC_STEPS)
    setCurrentStepIndex(TLS_DIAGNOSTIC_STEPS.length - 1)
  }

  const handleResetDiagnostic = () => {
    setDiagnosticHistory([TLS_DIAGNOSTIC_STEPS[0]])
    setCurrentStepIndex(0)
  }

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const cmd = commandInput.trim().toLowerCase()
    if (!cmd) return

    setCommandInput('')

    if (cmd === 'clear') {
      setDiagnosticHistory([])
      return
    }

    if (cmd === 'help') {
      setDiagnosticHistory((prev) => [
        ...prev,
        {
          step: prev.length + 1,
          command: 'help',
          status: 'info',
          output: [
            'Available investigative commands:',
            '  verify-dns        Run DNS SRV record resolution check',
            '  verify-tcp        Check Layer 4 TCP port 27017 reachability',
            '  verify-auth       Inspect URI formatting and authentication syntax',
            '  trace-handshake   Trace TLS 1.2/1.3 socket negotiation',
            '  summary           Print post-mortem isolation verdict',
            '  step              Advance to the next recorded investigative step',
            '  all               Run full recorded diagnostic sequence',
            '  clear             Clear terminal screen'
          ]
        }
      ])
      return
    }

    if (cmd === 'verify-dns') {
      setDiagnosticHistory((prev) => [...prev, TLS_DIAGNOSTIC_STEPS[1]])
      return
    }
    if (cmd === 'verify-tcp') {
      setDiagnosticHistory((prev) => [...prev, TLS_DIAGNOSTIC_STEPS[2]])
      return
    }
    if (cmd === 'verify-auth') {
      setDiagnosticHistory((prev) => [...prev, TLS_DIAGNOSTIC_STEPS[3]])
      return
    }
    if (cmd === 'trace-handshake') {
      setDiagnosticHistory((prev) => [...prev, TLS_DIAGNOSTIC_STEPS[4]])
      return
    }
    if (cmd === 'summary') {
      setDiagnosticHistory((prev) => [...prev, TLS_DIAGNOSTIC_STEPS[5]])
      return
    }
    if (cmd === 'step') {
      handleStepForward()
      return
    }
    if (cmd === 'all') {
      handleRunFullDiagnostic()
      return
    }

    setDiagnosticHistory((prev) => [
      ...prev,
      {
        step: prev.length + 1,
        command: cmd,
        status: 'fail',
        output: [`command not found: ${cmd}. Type "help" for valid diagnostic commands.`]
      }
    ])
  }

  return (
    <section
      id="terminal"
      className="py-24 sm:py-32 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full border-t border-white/[0.08]"
    >
      {/* Section Editorial Header */}
      <div className="mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
        <div>
          <span className="font-mono text-xs text-[#52525B] tracking-widest uppercase block mb-2">
            // 04 INTERACTIVE LABORATORY
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-['Syne'] text-[#EDEDED] tracking-tight leading-[1.05]">
            ALGORITHMIC{' '}
            <span className="font-['Instrument_Serif'] italic font-normal text-white lowercase tracking-normal">
              telemetry
            </span>{' '}
            &amp; SYSTEMS.
          </h2>
        </div>

        <p className="font-['Space_Grotesk'] text-sm text-[#A1A1AA] max-w-md leading-relaxed">
          Zero simulated fluff. Live client-side token budgeting and ATS keyword matching, paired
          with the actual network post-mortem that isolated the AssetFlow TLS timeout.
        </p>
      </div>

      {/* Main Agency Console Container */}
      <div className="rounded-2xl bg-[#0D0D10] border border-white/[0.08] shadow-2xl overflow-hidden backdrop-blur-md">
        {/* Terminal Chrome Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-4 sm:px-6 py-3.5 bg-[#121215] border-b border-white/[0.06]">
          {/* Window dots & shell identifier */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/40 border border-red-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/40 border border-amber-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/40 border border-emerald-500/60" />
            </div>
            <span className="font-mono text-xs text-[#52525B] hidden sm:inline">
              sanjaycodes@nit-dgp: ~/telemetry-lab
            </span>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center gap-1 bg-[#080809] p-1 rounded-lg border border-white/[0.06]">
            <button
              onClick={() => setMode('ats')}
              className={`font-mono text-xs px-3 py-1.5 rounded-md transition-all flex items-center gap-2 ${
                mode === 'ats'
                  ? 'bg-white/[0.08] text-white font-semibold shadow-sm'
                  : 'text-[#A1A1AA] hover:text-white'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  mode === 'ats' ? 'bg-[#F97316]' : 'bg-transparent border border-white/20'
                }`}
              />
              <span>// 04.1 ATS TOKEN ENGINE</span>
            </button>

            <button
              onClick={() => setMode('tls')}
              className={`font-mono text-xs px-3 py-1.5 rounded-md transition-all flex items-center gap-2 ${
                mode === 'tls'
                  ? 'bg-white/[0.08] text-white font-semibold shadow-sm'
                  : 'text-[#A1A1AA] hover:text-white'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  mode === 'tls' ? 'bg-[#F97316]' : 'bg-transparent border border-white/20'
                }`}
              />
              <span>// 04.2 TLS DIAGNOSTIC SHELL</span>
            </button>
          </div>
        </div>

        {/* Console Body: Animate Mode Transitions */}
        <AnimatePresence mode="wait">
          {mode === 'ats' ? (
            <motion.div
              key="ats-engine"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -6 }}
              transition={{ duration: 0.2 }}
              className="p-4 sm:p-6 lg:p-8"
            >
              {/* Preset Selectors & Role Selection */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/[0.06]">
                {/* Presets */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs text-[#52525B] mr-1 uppercase">
                    INPUT PRESET:
                  </span>
                  {RESUME_PRESETS.map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => handleSelectPreset(preset)}
                      className={`font-mono text-xs px-3 py-1.5 rounded border transition-all ${
                        activePresetId === preset.id
                          ? 'border-[#F97316]/50 bg-white/[0.04] text-white font-medium'
                          : 'border-white/[0.06] bg-transparent text-[#A1A1AA] hover:text-white hover:border-white/[0.15]'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>

                {/* Target Role Selector */}
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-[#52525B] uppercase">TARGET ROLE:</span>
                  <select
                    value={selectedRole.id}
                    onChange={(e) => {
                      const found = ROLE_PRESETS.find((r) => r.id === e.target.value)
                      if (found) setSelectedRole(found)
                    }}
                    className="font-mono text-xs bg-[#121215] text-[#EDEDED] px-3 py-1.5 rounded border border-white/[0.1] focus:border-[#F97316]/60 focus:outline-none cursor-pointer"
                  >
                    {ROLE_PRESETS.map((role) => (
                      <option key={role.id} value={role.id}>
                        {role.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Two-Column Interactive Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left Column: Interactive Text Sandbox */}
                <div className="lg:col-span-7 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs font-mono text-[#52525B]">
                    <span>DOCUMENT PAYLOAD (EDITABLE)</span>
                    <span>
                      {analysis.wordCount} words | {inputText.length} chars
                    </span>
                  </div>

                  <textarea
                    value={inputText}
                    onChange={(e) => {
                      setInputText(e.target.value)
                      setActivePresetId('custom')
                    }}
                    aria-label="Resume document payload"
                    placeholder="Paste resume text or job description to run client-side extraction..."
                    rows={15}
                    className="w-full font-mono text-xs sm:text-[13px] leading-relaxed bg-[#080809] text-[#EDEDED] p-4 rounded-xl border border-white/[0.06] focus:border-white/[0.2] focus:outline-none resize-y min-h-[380px] selection:bg-[#F97316]/20"
                    spellCheck={false}
                  />

                  <p className="font-mono text-[11px] text-[#52525B] mt-1">
                    ✦ Fully computed in-browser. Zero external API calls or telemetry logging.
                  </p>
                </div>

                {/* Right Column: Real-Time Computational Telemetry */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  {/* Card 1: ATS Match Score */}
                  <div className="p-5 rounded-xl bg-[#121215] border border-white/[0.06]">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs text-[#52525B] tracking-wider uppercase">
                        // ATS MATCH COEFFICIENT
                      </span>
                      <span className="font-mono text-[11px] px-2 py-0.5 rounded border border-white/[0.08] text-[#A1A1AA]">
                        {analysis.matchedKeywords.length} / {selectedRole.targetKeywords.length} HIT
                      </span>
                    </div>

                    <div className="flex items-baseline gap-3 mb-3">
                      <span className="text-4xl sm:text-5xl font-extrabold font-['Syne'] text-white">
                        {analysis.matchScore}%
                      </span>
                      <span className="font-mono text-xs text-[#A1A1AA]">
                        {analysis.matchScore >= 80
                          ? 'High Signal Alignment'
                          : analysis.matchScore >= 50
                          ? 'Moderate Skill Overlap'
                          : 'Significant Skill Gap'}
                      </span>
                    </div>

                    {/* Score Bar */}
                    <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-amber-500 via-[#F97316] to-emerald-400"
                        initial={{ width: 0 }}
                        animate={{ width: `${analysis.matchScore}%` }}
                        transition={{ duration: prefersReducedMotion ? 0.01 : 0.4 }}
                      />
                    </div>
                  </div>

                  {/* Card 2: Token Budget & Context Window */}
                  <div className="p-5 rounded-xl bg-[#121215] border border-white/[0.06]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs text-[#52525B] tracking-wider uppercase">
                        // LLM TOKEN BUDGET (8K CONTEXT)
                      </span>
                      <span className="font-mono text-[11px] text-[#A1A1AA]">
                        {analysis.contextUtilizationPct}% OF WINDOW
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div>
                        <span className="font-mono text-[10px] text-[#52525B] block">
                          DOCUMENT TOKENS
                        </span>
                        <span className="font-mono text-xl font-bold text-[#EDEDED]">
                          ~{analysis.tokenCount.toLocaleString()}
                        </span>
                      </div>
                      <div>
                        <span className="font-mono text-[10px] text-[#52525B] block">
                          EST. PROMPT FOOTPRINT
                        </span>
                        <span className="font-mono text-xl font-bold text-[#EDEDED]">
                          ~{analysis.estimatedPromptTokens.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* Context Bar */}
                    <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-emerald-400/80"
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.max(2, analysis.contextUtilizationPct)}%` }}
                        transition={{ duration: prefersReducedMotion ? 0.01 : 0.4 }}
                      />
                    </div>
                    <span className="font-mono text-[10px] text-[#52525B] mt-1.5 block">
                      Budgeted with ~350 token system instruction overhead
                    </span>
                  </div>

                  {/* Card 3: Skill Vector Diagnostics */}
                  <div className="p-5 rounded-xl bg-[#121215] border border-white/[0.06]">
                    <span className="font-mono text-xs text-[#52525B] tracking-wider uppercase block mb-3">
                      // KEYWORD VECTOR EXTRACTION
                    </span>

                    {/* Matched Keywords */}
                    <div className="mb-4">
                      <span className="font-mono text-[10px] text-emerald-400/80 uppercase block mb-1.5">
                        MATCHED KEYWORDS ({analysis.matchedKeywords.length})
                      </span>
                      {analysis.matchedKeywords.length > 0 ? (
                        <div className="flex flex-wrap gap-1.5">
                          {analysis.matchedKeywords.map((kw) => (
                            <span
                              key={kw}
                              className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                            >
                              ✓ {kw}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="font-mono text-xs text-[#52525B]">
                          No target keywords matched yet.
                        </span>
                      )}
                    </div>

                    {/* Missing Keywords */}
                    <div>
                      <span className="font-mono text-[10px] text-amber-400/80 uppercase block mb-1.5">
                        MISSING TARGET SKILLS ({analysis.missingKeywords.length})
                      </span>
                      {analysis.missingKeywords.length > 0 ? (
                        <div className="flex flex-wrap gap-1.5">
                          {analysis.missingKeywords.map((kw) => (
                            <span
                              key={kw}
                              className="font-mono text-[11px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20"
                            >
                              + {kw}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="font-mono text-xs text-emerald-400/80 font-mono">
                          ✦ 100% target keyword coverage achieved.
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="tls-shell"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -6 }}
              transition={{ duration: 0.2 }}
              className="p-4 sm:p-6 lg:p-8"
            >
              {/* Terminal Sub-header & Controls */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500/80 animate-pulse" />
                  <span className="font-mono text-xs text-[#EDEDED] font-semibold">
                    INVESTIGATION: AssetFlow MongoDB Atlas TLS Handshake Timeout
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={handleStepForward}
                    disabled={currentStepIndex >= TLS_DIAGNOSTIC_STEPS.length - 1}
                    className="font-mono text-xs px-3 py-1.5 rounded border border-white/[0.1] bg-white/[0.04] text-white hover:bg-white/[0.08] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  >
                    // STEP DIAGNOSIS ({currentStepIndex + 1}/{TLS_DIAGNOSTIC_STEPS.length})
                  </button>

                  <button
                    onClick={handleRunFullDiagnostic}
                    className="font-mono text-xs px-3 py-1.5 rounded border border-white/[0.1] bg-white/[0.04] text-[#A1A1AA] hover:text-white hover:bg-white/[0.08] transition-all"
                  >
                    // FULL SEQUENCE
                  </button>

                  <button
                    onClick={handleResetDiagnostic}
                    className="font-mono text-xs px-2.5 py-1.5 rounded border border-white/[0.06] text-[#52525B] hover:text-white transition-all"
                  >
                    RESET
                  </button>
                </div>
              </div>

              {/* Terminal Screen Output Area */}
              <div className="p-4 sm:p-6 rounded-xl bg-[#080809] border border-white/[0.06] font-mono text-xs sm:text-[13px] min-h-[420px] max-h-[560px] overflow-y-auto space-y-4 selection:bg-[#F97316]/20">
                {diagnosticHistory.map((entry, idx) => (
                  <div key={idx} className="space-y-1.5">
                    {/* Command Prompt */}
                    <div className="flex items-center gap-2 text-[#EDEDED]">
                      <span className="text-[#F97316] font-semibold">sanjaycodes@assetflow:~$</span>
                      <span className="font-bold">{entry.command}</span>
                      {entry.status === 'pass' && (
                        <span className="ml-auto text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          PASS
                        </span>
                      )}
                      {entry.status === 'fail' && (
                        <span className="ml-auto text-[10px] px-1.5 py-0.2 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">
                          FAIL
                        </span>
                      )}
                      {entry.status === 'summary' && (
                        <span className="ml-auto text-[10px] px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                          ISOLATED
                        </span>
                      )}
                    </div>

                    {/* Output Lines */}
                    <div className="pl-4 space-y-0.5 text-[#A1A1AA] leading-relaxed">
                      {entry.output.map((line, lIdx) => {
                        let lineStyle = 'text-[#A1A1AA]'
                        if (line.includes('[error]') || line.includes('error:')) {
                          lineStyle = 'text-rose-400 font-medium'
                        } else if (line.includes('[status]') || line.includes('[PASS]')) {
                          lineStyle = 'text-emerald-400/90'
                        } else if (line.includes('DIAGNOSIS SUMMARY') || line.includes('ISOLATION STATUS:')) {
                          lineStyle = 'text-white font-bold'
                        } else if (line.includes('CURRENT STATE:')) {
                          lineStyle = 'text-amber-300 font-semibold'
                        } else if (line.startsWith(';') || line.startsWith('>>>') || line.startsWith('<<<')) {
                          lineStyle = 'text-[#52525B]'
                        }

                        return (
                          <div key={lIdx} className={lineStyle}>
                            {line}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}

                <div ref={terminalEndRef} />
              </div>

              {/* Interactive Terminal Prompt Input Form */}
              <form onSubmit={handleCommandSubmit} className="mt-4 flex items-center gap-3">
                <span className="font-mono text-xs text-[#F97316] font-semibold hidden sm:inline">
                  sanjaycodes@assetflow:~$
                </span>
                <input
                  type="text"
                  value={commandInput}
                  onChange={(e) => setCommandInput(e.target.value)}
                  placeholder="Type 'help', 'verify-dns', 'verify-tcp', 'verify-auth', 'trace-handshake', 'summary', or 'clear'..."
                  aria-label="Terminal diagnostic command input"
                  className="flex-1 font-mono text-xs sm:text-[13px] bg-[#080809] text-[#EDEDED] px-4 py-2.5 rounded-lg border border-white/[0.08] focus:border-white/[0.25] focus:outline-none"
                  spellCheck={false}
                />
                <button
                  type="submit"
                  className="font-mono text-xs px-4 py-2.5 rounded-lg border border-white/[0.1] bg-white/[0.04] text-white hover:bg-white/[0.08] transition-all"
                >
                  EXECUTE
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
