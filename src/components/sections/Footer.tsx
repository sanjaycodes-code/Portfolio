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
    id: 'internship',
    label: 'Internship Opportunity',
    subject: 'Software / AI Engineering Internship Opportunity',
    bodyText:
      'Hi Sanjay,\n\nI came across your portfolio and would like to discuss an engineering internship opportunity with our team.\n\nRole: \nCompany: \nLocation / Mode: '
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
          <span className="font-mono text-xs text-[#A1A1AA] tracking-widest uppercase block mb-2">
            // 05 INITIATE CONNECTION &amp; FOOTER
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-['Syne'] text-[#EDEDED] tracking-[0.02em] leading-[1.02] sm:leading-[0.98]">
            AVAILABLE FOR{' '}
            <span className="font-['Instrument_Serif'] italic font-normal text-white lowercase tracking-normal">
              high-impact
            </span>{' '}
            ENGINEERING.
          </h2>
        </div>

        <p className="font-['Space_Grotesk'] text-sm text-[#A1A1AA] max-w-md leading-relaxed">
          Open to software engineering and applied AI internship roles for Summer / Fall 2026.
          Prepared to take end-to-end ownership from architecture to production deployment.
        </p>
      </div>

      {/* Main Connection Enclosure */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-start">
        {/* Left Column: Direct Interactive Email & Composer */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#121215] border border-white/[0.08] shadow-xl">
            {/* Header with Availability Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F97316] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F97316]"></span>
                </span>
                <span className="font-mono text-xs text-[#EDEDED] font-medium tracking-tight">
                  OPEN FOR INTERNSHIPS // 2026
                </span>
              </div>

              <span className="font-mono text-[11px] text-[#A1A1AA]">
                NIT DURGAPUR • THIRD YEAR
              </span>
            </div>

            {/* Email Address Display */}
            <div className="mb-6">
              <span className="font-mono text-xs text-[#A1A1AA] uppercase tracking-wider block mb-2">
                DIRECT INBOX
              </span>
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#080809] border border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#A1A1AA]" />
                  <span className="font-mono text-sm sm:text-base text-white font-medium select-all">
                    {emailAddress}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&to=${emailAddress}&su=${encodeURIComponent(
                      selectedTemplate.subject
                    )}&body=${encodeURIComponent(selectedTemplate.bodyText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => copyToClipboard(emailAddress)}
                    aria-label="Open pre-filled draft in Gmail web"
                    className="font-mono text-xs px-3.5 py-1.5 rounded-lg border border-white/[0.18] bg-white/[0.08] hover:bg-white/[0.14] text-white focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:outline-none transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
                  >
                    <span>OPEN GMAIL</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#F97316]" />
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    aria-label="Copy email address to clipboard"
                    className="font-mono text-xs px-3.5 py-1.5 rounded-lg border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.08] text-[#EDEDED] hover:text-white focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:outline-none transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
                  >
                    {emailCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">COPIED!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#A1A1AA]" />
                        <span>COPY EMAIL</span>
                      </>
                    )}
                  </button>

                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    aria-label="Schedule a call via Calendly (opens in a new tab)"
                    className="font-mono text-xs px-3.5 py-1.5 rounded-lg border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.08] text-[#EDEDED] hover:text-white focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:outline-none transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#A1A1AA]" />
                    <span>SCHEDULE CALL</span>
                    <ExternalLink className="w-3 h-3 text-[#A1A1AA] opacity-70" />
                  </a>

                  <button
                    onClick={handleLaunchMailApp}
                    type="button"
                    aria-label="Launch default system email client"
                    className="font-mono text-xs px-3 py-1.5 rounded-lg border border-white/[0.06] bg-transparent hover:bg-white/[0.04] text-[#A1A1AA] hover:text-white focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:outline-none transition-all hidden sm:flex items-center gap-1.5 cursor-pointer"
                  >
                    {mailAppLaunched ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-medium">TRIGGERING APP...</span>
                      </>
                    ) : (
                      <>
                        <span>SYSTEM APP</span>
                        <ExternalLink className="w-3 h-3 text-[#A1A1AA]" />
                      </>
                    )}
                  </button>
                </div>
              </div>

              {mailAppLaunched && (
                <div className="mt-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-[#EDEDED] flex items-center gap-2 animate-fadeIn">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    Invoked system mail client. If no desktop app opened on your device, <strong>{emailAddress}</strong> is already copied to your clipboard!
                  </span>
                </div>
              )}
            </div>

            {/* Subject Preset Picker & Pre-formatted Draft */}
            <div>
              <div className="flex items-center gap-1.5 mb-2.5">
                <MessageSquare className="w-3.5 h-3.5 text-[#A1A1AA]" />
                <span className="font-mono text-xs text-[#A1A1AA] uppercase tracking-wider">
                  PRE-FORMATTED INQUIRY TEMPLATES
                </span>
              </div>

              {/* Template Buttons */}
              <div className="flex flex-wrap gap-2 mb-4">
                {INQUIRY_TEMPLATES.map((tmpl) => (
                  <button
                    key={tmpl.id}
                    type="button"
                    onClick={() => {
                      setSelectedTemplate(tmpl)
                      setDraftCopied(false)
                    }}
                    className={`font-mono text-xs px-3 py-1.5 rounded border transition-all cursor-pointer ${
                      selectedTemplate.id === tmpl.id
                        ? 'border-[#F97316]/50 bg-white/[0.06] text-white font-medium shadow-sm'
                        : 'border-white/[0.06] bg-transparent text-[#A1A1AA] hover:text-white hover:border-white/[0.15]'
                    } focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:outline-none`}
                  >
                    {tmpl.label}
                  </button>
                ))}
              </div>

              {/* Live Draft Preview Box */}
              <div className="p-4 rounded-xl bg-[#080809] border border-white/[0.06] space-y-2">
                <div className="flex items-center justify-between gap-2 border-b border-white/[0.05] pb-2 flex-wrap">
                  <span className="font-mono text-[11px] text-[#A1A1AA]">
                    <span className="text-white/40">Subject:</span> {selectedTemplate.subject}
                  </span>

                  <div className="flex items-center gap-2">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&to=${emailAddress}&su=${encodeURIComponent(
                        selectedTemplate.subject
                      )}&body=${encodeURIComponent(selectedTemplate.bodyText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => copyToClipboard(emailAddress)}
                      className="font-mono text-[11px] px-2.5 py-1 rounded border border-white/[0.15] bg-white/[0.06] text-white hover:bg-white/[0.12] flex items-center gap-1 transition-all cursor-pointer shrink-0"
                    >
                      <span>OPEN IN GMAIL</span>
                      <ExternalLink className="w-3 h-3 text-[#F97316]" />
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyDraft}
                      className="font-mono text-[11px] px-2.5 py-1 rounded border border-white/[0.1] bg-white/[0.04] text-[#EDEDED] hover:text-white hover:bg-white/[0.08] flex items-center gap-1.5 transition-all cursor-pointer shrink-0"
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
                  </div>
                </div>

                <p className="font-mono text-xs text-[#A1A1AA] whitespace-pre-line leading-relaxed">
                  {selectedTemplate.bodyText}
                </p>
              </div>

              <p className="font-mono text-[11px] text-[#A1A1AA] mt-3">
                ✦ Zero blank pages. Click &ldquo;Copy Draft&rdquo; to paste directly into your email app, launch your system mail client, or{' '}
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

        {/* Right Column: Channels, Socials & Quick Specs */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#121215] border border-white/[0.08] shadow-xl space-y-6">
            <span className="font-mono text-xs text-[#A1A1AA] uppercase tracking-wider block border-b border-white/[0.06] pb-3">
              // VERIFIED PROFILES &amp; ARTIFACTS
            </span>

            {/* Links List */}
            <div className="space-y-3">
              {SOCIAL_LINKS.map((link) => {
                if (link.type === 'email') {
                  return (
                    <button
                      key={link.label}
                      type="button"
                      onClick={handleCopyEmail}
                      aria-label="Copy email to clipboard"
                      className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#080809] border border-white/[0.06] hover:border-white/[0.18] hover:bg-white/[0.02] text-[#EDEDED] hover:text-white transition-all group focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:outline-none text-left cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-[#A1A1AA] group-hover:text-[#F97316] transition-colors">
                          ✦
                        </span>
                        <div>
                          <span className="font-['Syne'] text-sm font-semibold block">
                            {link.label}
                          </span>
                          <span className="font-mono text-[11px] text-[#A1A1AA]">
                            {emailCopied ? 'COPIED TO CLIPBOARD' : link.username}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 font-mono text-xs text-[#A1A1AA] group-hover:text-white">
                        {emailCopied ? (
                          <Check className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Copy className="w-4 h-4 text-[#A1A1AA] group-hover:text-white transition-all" />
                        )}
                      </div>
                    </button>
                  )
                }

                return (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-[#080809] border border-white/[0.06] hover:border-white/[0.18] hover:bg-white/[0.02] text-[#EDEDED] hover:text-white transition-all group focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#A1A1AA] group-hover:text-[#F97316] transition-colors">
                        ✦
                      </span>
                      <div>
                        <span className="font-['Syne'] text-sm font-semibold block">
                          {link.label}
                        </span>
                        <span className="font-mono text-[11px] text-[#A1A1AA]">
                          {link.username}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#A1A1AA] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                )
              })}

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
                      calendly.com/sanjaykadivendi13
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
                Generally active during IST engineering hours. Fast response on email, LinkedIn, and X for internship screenings or technical discussions.
              </p>
            </div>
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
