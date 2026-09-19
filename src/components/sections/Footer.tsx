import { useState } from 'react'
import {
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  ExternalLink,
  ChevronUp,
  Sparkles,
  MessageSquare
} from 'lucide-react'
import { SOCIAL_LINKS } from '../../data/socials'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const INQUIRY_TEMPLATES = [
  {
    id: 'internship',
    label: 'Internship Opportunity',
    subject: 'Software / AI Internship Opportunity',
    body: 'Hi Sanjay,%0D%0A%0D%0AI came across your portfolio and would like to discuss an engineering internship opportunity with our team.%0D%0A%0D%0ARole:%20%0D%0ACompany:%20'
  },
  {
    id: 'tech-discussion',
    label: 'Technical Discussion',
    subject: 'Question on Architecture / Projects',
    body: 'Hi Sanjay,%0D%0A%0D%0AI saw your work on CampusLoop / AI Resume Analyzer and wanted to connect regarding...'
  },
  {
    id: 'general',
    label: 'General Connect',
    subject: 'Connecting via Portfolio',
    body: 'Hi Sanjay,%0D%0A%0D%0AWanted to reach out and connect after reviewing your projects and self-directed engineering track.'
  }
]

export function Footer() {
  const prefersReducedMotion = useReducedMotion()
  const [copied, setCopied] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState(INQUIRY_TEMPLATES[0])

  const emailSocial = SOCIAL_LINKS.find((s) => s.type === 'email')
  const emailAddress = emailSocial ? emailSocial.username : 'sanjaykadivendi13@gmail.com'

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(emailAddress)
      } else {
        // Fallback for non-https / testing environments
        const textArea = document.createElement('textarea')
        textArea.value = emailAddress
        textArea.style.position = 'fixed'
        textArea.style.left = '-999999px'
        textArea.style.top = '-999999px'
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        document.execCommand('copy')
        textArea.remove()
      }
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    } catch {
      setCopied(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    })
  }

  const mailtoHref = `mailto:${emailAddress}?subject=${encodeURIComponent(
    selectedTemplate.subject
  )}&body=${selectedTemplate.body}`

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
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-['Syne'] text-[#EDEDED] tracking-tight leading-[1.05]">
            AVAILABLE FOR{' '}
            <span className="font-['Instrument_Serif'] italic font-normal text-white lowercase tracking-normal">
              high-impact
            </span>{' '}
            ENGINEERING.
          </h2>
        </div>

        <p className="font-['Space_Grotesk'] text-sm text-[#A1A1AA] max-w-md leading-relaxed">
          Open to software engineering and applied AI internship roles for Summer / Fall 2025.
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
                  OPEN FOR INTERNSHIPS // 2025
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

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    aria-label="Copy email address to clipboard"
                    className="font-mono text-xs px-3 py-1.5 rounded-lg border border-white/[0.1] bg-white/[0.04] text-[#EDEDED] hover:text-white hover:bg-white/[0.08] focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:outline-none transition-all flex items-center gap-1.5"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-medium">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#A1A1AA]" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>

                  <a
                    href={mailtoHref}
                    className="font-mono text-xs px-3.5 py-1.5 rounded-lg border border-white/[0.15] bg-white/[0.06] hover:bg-white/[0.12] text-white focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:outline-none transition-all flex items-center gap-1.5 shadow-sm"
                  >
                    <span>COMPOSE</span>
                    <ExternalLink className="w-3 h-3 text-[#A1A1AA]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Subject Preset Picker */}
            <div>
              <div className="flex items-center gap-1.5 mb-2.5">
                <MessageSquare className="w-3.5 h-3.5 text-[#A1A1AA]" />
                <span className="font-mono text-xs text-[#A1A1AA] uppercase tracking-wider">
                  MAILTO INTENT PRESETS (OPENS DEFAULT EMAIL CLIENT)
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {INQUIRY_TEMPLATES.map((tmpl) => (
                  <button
                    key={tmpl.id}
                    type="button"
                    onClick={() => setSelectedTemplate(tmpl)}
                    className={`font-mono text-xs px-3 py-1.5 rounded border transition-all ${
                      selectedTemplate.id === tmpl.id
                        ? 'border-[#F97316]/50 bg-white/[0.05] text-white font-medium'
                        : 'border-white/[0.06] bg-transparent text-[#A1A1AA] hover:text-white hover:border-white/[0.15]'
                    } focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:outline-none`}
                  >
                    {tmpl.label}
                  </button>
                ))}
              </div>

              <p className="font-mono text-[11px] text-[#A1A1AA] mt-3">
                ✦ No silent backend forms. Pre-formats your inquiry directly into your native email client.
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
              {SOCIAL_LINKS.map((link) => (
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
              ))}
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
                Generally active during IST engineering hours. Fast response on email and LinkedIn for internship screenings or technical code discussions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Small Meta Footer Row */}
      <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3 text-center sm:text-left">
          <span className="font-mono text-xs text-[#EDEDED] font-semibold">
            © 2025 SANJAY
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
