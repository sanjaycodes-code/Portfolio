import { useState } from 'react'
import {
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  ExternalLink,
  ChevronUp,
  Sparkles,
  MessageSquare,
  Calendar,
  FileText
} from 'lucide-react'
import { SOCIAL_LINKS } from '../../data/socials'
import { useReducedMotion } from '../../hooks/useReducedMotion'

// Calendly direct booking link
const CALENDLY_URL = 'https://calendly.com/sanjaykadivendi13/15-min-intro-engineering-chat'

interface InquiryTemplate {
  id: string
  label: string
  subject: string
  bodyText: string
}

const INQUIRY_TEMPLATES: InquiryTemplate[] = [
  {
    id: 'engineering-role',
    label: 'Engineering Opportunity',
    subject: 'Software / AI Engineering Opportunity',
    bodyText:
      'Hi Sanjay,\n\nI came across your portfolio and would like to discuss a software/AI engineering opportunity with our team.\n\nRole: \nCompany: \nLocation / Mode: '
  },
  {
    id: 'tech-discussion',
    label: 'Technical Discussion',
    subject: 'Discussion on Systems & AI Architecture',
    bodyText:
      'Hi Sanjay,\n\nI reviewed your work on CampusLoop, AssetFlow, and the AI Resume Analyzer. I would like to connect to discuss...'
  },
  {
    id: 'general',
    label: 'General Connect',
    subject: 'Connecting via Developer Portfolio',
    bodyText:
      'Hi Sanjay,\n\nReaching out to connect after reviewing your portfolio and self-directed software and AI track.'
  }
]

export function Footer() {
  const prefersReducedMotion = useReducedMotion()
  const [emailCopied, setEmailCopied] = useState(false)
  const [draftCopied, setDraftCopied] = useState(false)
  const [mailAppLaunched, setMailAppLaunched] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState<InquiryTemplate>(INQUIRY_TEMPLATES[0])

  const emailSocial = SOCIAL_LINKS.find((s) => s.type === 'email')
  const emailAddress = emailSocial ? emailSocial.username : 'sanjaykadivendi13@gmail.com'

  const copyToClipboard = async (text: string): Promise<boolean> => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text)
        return true
      } else {
        const textArea = document.createElement('textarea')
        textArea.value = text
        textArea.style.position = 'fixed'
        textArea.style.left = '-999999px'
        textArea.style.top = '-999999px'
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        const successful = document.execCommand('copy')
        textArea.remove()
        return successful
      }
    } catch {
      return false
    }
  }

  const handleCopyEmail = async () => {
    const success = await copyToClipboard(emailAddress)
    if (success) {
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 3000)
    }
  }

  const handleCopyDraft = async () => {
    const fullDraft = `To: ${emailAddress}\nSubject: ${selectedTemplate.subject}\n\n${selectedTemplate.bodyText}`
    const success = await copyToClipboard(fullDraft)
    if (success) {
      setDraftCopied(true)
      setTimeout(() => setDraftCopied(false), 3000)
    }
  }

  const handleLaunchMailApp = async () => {
    // 1. Copy email as immediate safety net in case OS has no desktop mail app
    await copyToClipboard(emailAddress)
    setMailAppLaunched(true)
    setTimeout(() => setMailAppLaunched(false), 5000)

    // 2. RFC 6068 CRLF encoding for Windows mailto compatibility
    const safeBody = selectedTemplate.bodyText.replace(/\r?\n/g, '\r\n')
    const mailUri = `mailto:${emailAddress}?subject=${encodeURIComponent(
      selectedTemplate.subject
    )}&body=${encodeURIComponent(safeBody)}`

    // 3. Trigger without unloading current page
    const tempLink = document.createElement('a')
    tempLink.href = mailUri
    document.body.appendChild(tempLink)
    tempLink.click()
    tempLink.remove()
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    })
  }

  return (
    <footer
      id="contact"
      className="py-24 sm:py-32 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full border-t border-white/[0.08]"
    >
      {/* Editorial Contact Header */}
      <div className="mb-16 sm:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
        <div>
          <span className="font-mono text-xs text-[#8E8E98] tracking-widest uppercase block mb-2">
            05 / CONTACT
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-['Syne'] text-[#EDEDED] tracking-[0.02em] leading-[1.02] sm:leading-[0.98]">
            LET&apos;S{' '}
            <span className="font-['Instrument_Serif'] italic font-normal text-white lowercase tracking-normal">
              connect
            </span>{' '}
            &amp; BUILD.
          </h2>
        </div>

        <p className="font-['Space_Grotesk'] text-sm text-[#A1A1AA] max-w-md leading-relaxed">
          Open to software engineering and applied AI opportunities. Reach out directly through any channel below or book a conversation.
        </p>
      </div>

      {/* Main Connection Enclosure: Clearly Separated Blocks */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-start">
        {/* Block 1: Individual Contact Channels (Distinct Rows/Cards) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#121215] border border-white/[0.08] shadow-xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <span className="font-mono text-xs text-[#8E8E98] uppercase tracking-wider">
                // DIRECT CHANNELS &amp; PROFILES
              </span>
              <span className="font-mono text-[10px] text-[#A1A1AA] uppercase tracking-widest">
                VERIFIED
              </span>
            </div>

            {/* Distinct Channel Rows */}
            <div className="space-y-3">
              {/* Email Channel with Copy Button */}
              <div className="p-3.5 rounded-xl bg-[#080809] border border-white/[0.06] hover:border-white/[0.16] transition-all">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#F97316]" />
                    <span className="font-['Syne'] text-sm font-semibold text-[#EDEDED]">
                      Email (Direct Inbox)
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&to=${emailAddress}&su=${encodeURIComponent(
                        selectedTemplate.subject
                      )}&body=${encodeURIComponent(selectedTemplate.bodyText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => copyToClipboard(emailAddress)}
                      aria-label="Open pre-filled draft in Gmail web"
                      className="font-mono text-[10px] px-2 py-0.5 rounded border border-white/[0.12] bg-white/[0.05] hover:bg-white/[0.1] text-white transition-colors inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>GMAIL</span>
                      <ExternalLink className="w-2.5 h-2.5 text-[#F97316]" />
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      type="button"
                      aria-label="Copy email address"
                      className="font-mono text-[10px] px-2 py-0.5 rounded border border-white/[0.12] bg-white/[0.05] hover:bg-white/[0.1] text-white transition-colors inline-flex items-center gap-1 cursor-pointer"
                    >
                      {emailCopied ? (
                        <>
                          <Check className="w-2.5 h-2.5 text-emerald-400" />
                          <span className="text-emerald-400 font-semibold">COPIED</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-2.5 h-2.5 text-[#A1A1AA]" />
                          <span>COPY</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
                <div className="font-mono text-xs text-[#A1A1AA] select-all">
                  {emailAddress}
                </div>
              </div>

              {/* Schedule a Call (Calendly Direct Booking) */}
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label="Schedule a call via Calendly (opens in a new tab)"
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#080809] border border-white/[0.06] hover:border-white/[0.18] hover:bg-white/[0.02] text-[#EDEDED] hover:text-white transition-all group focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:outline-none"
              >
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-[#A1A1AA] group-hover:text-[#F97316] transition-colors" />
                  <div>
                    <span className="font-['Syne'] text-sm font-semibold block">
                      Schedule a Call
                    </span>
                    <span className="font-mono text-[11px] text-[#A1A1AA]">
                      15-min intro / engineering chat
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-[#A1A1AA] group-hover:text-white">
                  <span className="text-[10px] uppercase px-2 py-0.5 rounded bg-white/[0.04] text-[#A1A1AA] border border-white/[0.05] hidden sm:inline-block">
                    Direct Booking
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#A1A1AA] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </a>

              {/* LinkedIn Profile */}
              <a
                href="https://www.linkedin.com/in/sanjay-kadivendi-271986303"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile (opens in a new tab)"
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#080809] border border-white/[0.06] hover:border-white/[0.18] hover:bg-white/[0.02] text-[#EDEDED] hover:text-white transition-all group focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:outline-none"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 fill-current text-[#A1A1AA] group-hover:text-[#F97316] transition-colors" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                  <div>
                    <span className="font-['Syne'] text-sm font-semibold block">
                      LinkedIn
                    </span>
                    <span className="font-mono text-[11px] text-[#A1A1AA]">
                      in/sanjay-kadivendi-271986303
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#A1A1AA] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* GitHub Profile */}
              <a
                href="https://github.com/sanjaycodes-code"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile (opens in a new tab)"
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#080809] border border-white/[0.06] hover:border-white/[0.18] hover:bg-white/[0.02] text-[#EDEDED] hover:text-white transition-all group focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:outline-none"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 fill-current text-[#A1A1AA] group-hover:text-[#F97316] transition-colors" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <div>
                    <span className="font-['Syne'] text-sm font-semibold block">
                      GitHub
                    </span>
                    <span className="font-mono text-[11px] text-[#A1A1AA]">
                      github.com/sanjaycodes-code
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#A1A1AA] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* Resume / Curriculum Vitae */}
              <a
                href="/resume-sanjay-viswanath.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Resume (opens in a new tab)"
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#080809] border border-white/[0.06] hover:border-white/[0.18] hover:bg-white/[0.02] text-[#EDEDED] hover:text-white transition-all group focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:outline-none"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-[#A1A1AA] group-hover:text-[#F97316] transition-colors" />
                  <div>
                    <span className="font-['Syne'] text-sm font-semibold block">
                      Resume / CV
                    </span>
                    <span className="font-mono text-[11px] text-[#A1A1AA]">
                      resume-sanjay-viswanath.pdf
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-[#A1A1AA] group-hover:text-white">
                  <span className="text-[10px] uppercase px-2 py-0.5 rounded bg-white/[0.04] text-[#A1A1AA] border border-white/[0.05] hidden sm:inline-block">
                    PDF Document
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#A1A1AA] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </a>
            </div>

            {/* Quick Context Card */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <div className="flex items-center gap-2 mb-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
                <span className="font-mono text-xs font-semibold text-[#EDEDED]">
                  Response Window
                </span>
              </div>
              <p className="font-['Space_Grotesk'] text-xs text-[#A1A1AA] leading-relaxed">
                Generally active during IST engineering hours. Rapid response for engineering opportunities, technical discussions, or code screenings.
              </p>
            </div>
          </div>
        </div>

        {/* Block 2: Quick Message Generator (Intent Presets + Live Draft Preview) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#121215] border border-white/[0.08] shadow-xl">
            {/* Header with Availability Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6 border-b border-white/[0.06]">
              <div>
                <span className="font-mono text-xs text-[#8E8E98] uppercase tracking-wider block mb-1">
                  // QUICK MESSAGE GENERATOR
                </span>
                <span className="font-['Space_Grotesk'] text-xs text-[#A1A1AA]">
                  Select an inquiry intent to generate a pre-formatted draft ready to dispatch.
                </span>
              </div>

              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F97316] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F97316]"></span>
                </span>
                <span className="font-mono text-[11px] text-[#EDEDED] font-medium tracking-tight">
                  OPEN TO ROLES // 2026
                </span>
              </div>
            </div>

            {/* Template Presets Picker */}
            <div className="mb-4">
              <div className="flex items-center gap-1.5 mb-2.5">
                <MessageSquare className="w-3.5 h-3.5 text-[#A1A1AA]" />
                <span className="font-mono text-xs text-[#A1A1AA] uppercase tracking-wider">
                  SELECT INQUIRY INTENT:
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {INQUIRY_TEMPLATES.map((tmpl) => (
                  <button
                    key={tmpl.id}
                    type="button"
                    onClick={() => {
                      setSelectedTemplate(tmpl)
                      setDraftCopied(false)
                    }}
                    className={`font-mono text-xs px-3.5 py-1.5 rounded-lg border transition-all cursor-pointer ${
                      selectedTemplate.id === tmpl.id
                        ? 'border-[#F97316]/50 bg-white/[0.06] text-white font-medium shadow-sm'
                        : 'border-white/[0.06] bg-transparent text-[#A1A1AA] hover:text-white hover:border-white/[0.15]'
                    } focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:outline-none`}
                  >
                    {tmpl.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Draft Preview Box */}
            <div className="p-4 rounded-xl bg-[#080809] border border-white/[0.06] space-y-3">
              <div className="flex items-center justify-between gap-2 border-b border-white/[0.05] pb-3 flex-wrap">
                <div className="font-mono text-xs text-[#A1A1AA]">
                  <span className="text-white/40">Subject:</span>{' '}
                  <span className="text-[#EDEDED] font-medium">{selectedTemplate.subject}</span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&to=${emailAddress}&su=${encodeURIComponent(
                      selectedTemplate.subject
                    )}&body=${encodeURIComponent(selectedTemplate.bodyText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => copyToClipboard(emailAddress)}
                    className="font-mono text-[11px] px-2.5 py-1.5 rounded border border-white/[0.15] bg-white/[0.06] text-white hover:bg-white/[0.12] flex items-center gap-1.5 transition-all cursor-pointer shrink-0"
                  >
                    <span>OPEN IN GMAIL</span>
                    <ExternalLink className="w-3 h-3 text-[#F97316]" />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyDraft}
                    className="font-mono text-[11px] px-2.5 py-1.5 rounded border border-white/[0.1] bg-white/[0.04] text-[#EDEDED] hover:text-white hover:bg-white/[0.08] flex items-center gap-1.5 transition-all cursor-pointer shrink-0"
                  >
                    {draftCopied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400 font-medium">COPIED DRAFT!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#A1A1AA]" />
                        <span>COPY DRAFT</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleLaunchMailApp}
                    type="button"
                    aria-label="Launch default system email client"
                    className="font-mono text-[11px] px-2.5 py-1.5 rounded border border-white/[0.06] bg-transparent hover:bg-white/[0.04] text-[#A1A1AA] hover:text-white transition-all hidden sm:flex items-center gap-1 cursor-pointer"
                  >
                    {mailAppLaunched ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400 font-medium">LAUNCHED</span>
                      </>
                    ) : (
                      <>
                        <span>SYSTEM APP</span>
                        <ExternalLink className="w-2.5 h-2.5 text-[#A1A1AA]" />
                      </>
                    )}
                  </button>
                </div>
              </div>

              <p className="font-mono text-xs text-[#A1A1AA] whitespace-pre-line leading-relaxed p-2.5 rounded bg-black/30 border border-white/[0.03]">
                {selectedTemplate.bodyText}
              </p>
            </div>

            {mailAppLaunched && (
              <div className="mt-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-[#EDEDED] flex items-center gap-2 animate-fadeIn">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  Invoked system mail client. If no desktop app opened on your device, <strong>{emailAddress}</strong> is already copied to your clipboard!
                </span>
              </div>
            )}

            <p className="font-mono text-[11px] text-[#A1A1AA] mt-4">
              ✦ Zero blank pages. Click &ldquo;Copy Draft&rdquo; to paste directly into your preferred email client, open in Gmail web, or{' '}
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F97316] underline underline-offset-2 transition-colors inline-flex items-center gap-0.5"
              >
                <span>schedule a call directly</span>
                <ExternalLink className="w-2.5 h-2.5 inline" />
              </a>.
            </p>
          </div>
        </div>
      </div>

      {/* Small Meta Footer Row */}
      <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3 text-center sm:text-left">
          <span className="font-mono text-xs text-[#EDEDED] font-semibold">
            © {new Date().getFullYear()} SANJAY
          </span>
          <span className="text-white/20 text-xs hidden sm:inline">|</span>
          <span className="font-mono text-xs text-[#A1A1AA]">
            B.Tech @ NIT Durgapur
          </span>
          <span className="text-white/20 text-xs hidden sm:inline">|</span>
          <span className="font-mono text-xs text-[#A1A1AA]">
            React 19 • TypeScript • Tailwind v4
          </span>
        </div>

        <button
          onClick={scrollToTop}
          type="button"
          aria-label="Scroll back to top of the page"
          className="font-mono text-xs text-[#A1A1AA] hover:text-white flex items-center gap-1.5 py-1 px-3 rounded-full hover:bg-white/[0.04] transition-colors focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:outline-none"
        >
          <span>BACK TO TOP</span>
          <ChevronUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  )
}
