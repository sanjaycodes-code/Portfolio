import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#stack' },
  { label: 'Projects', href: '#work' },
  { label: 'Experience', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header
        className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2.5rem)] max-w-5xl transition-all duration-300"
      >
        <div
          className={`px-4 sm:px-6 py-2.5 rounded-full border transition-all duration-300 flex items-center justify-between ${
            isScrolled
              ? 'bg-[#121215]/90 backdrop-blur-xl border-white/[0.12] shadow-[0_12px_32px_rgba(0,0,0,0.6)]'
              : 'bg-[#121215]/70 backdrop-blur-lg border-white/[0.08] shadow-xl'
          }`}
        >
          {/* Brand Identity / Monogram Badge */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group text-[#EDEDED] hover:text-white transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-[#18181D] border border-white/[0.1] group-hover:border-[#F97316]/50 flex items-center justify-center transition-colors shadow-sm relative">
              <span className="font-['Syne'] font-bold text-sm text-[#EDEDED]">S</span>
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-[#F97316]" />
            </div>
            <div className="flex flex-col">
              <span className="font-['Syne'] font-bold text-sm tracking-[0.02em] leading-tight">
                Sanjay
              </span>
              <span className="font-mono text-[10px] text-[#8E8E98] tracking-wider leading-tight">
                Software &amp; AI
              </span>
            </div>
          </a>

          {/* Center Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-['Space_Grotesk'] text-xs font-medium text-[#A1A1AA] hover:text-[#EDEDED] transition-colors duration-200 tracking-wider relative py-1 group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/40 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="/resume-sanjay-viswanath.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Resume (opens in a new tab)"
              className="group font-mono text-xs text-[#EDEDED] hover:text-white px-4 py-1.5 rounded-full border border-white/[0.12] hover:border-white/[0.25] bg-white/[0.04] hover:bg-white/[0.08] transition-all flex items-center gap-1.5 shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-[#A1A1AA] group-hover:text-[#F97316] transition-colors" />
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>

            {/* Mobile Hamburger Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile navigation menu"
              className="md:hidden p-1.5 rounded-full text-[#A1A1AA] hover:text-white hover:bg-white/[0.05] transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-[#080809]/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 md:hidden"
          >
            {/* Top Bar inside Drawer */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#18181D] border border-white/[0.1] flex items-center justify-center relative">
                  <span className="font-['Syne'] font-bold text-sm text-[#EDEDED]">S</span>
                  <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-[#F97316]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-['Syne'] font-bold text-sm text-[#EDEDED]">
                    Sanjay
                  </span>
                  <span className="font-mono text-[10px] text-[#8E8E98]">
                    Software &amp; AI
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close mobile navigation menu"
                className="p-2 rounded-full border border-white/[0.1] text-[#A1A1AA] hover:text-white bg-white/[0.03]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Staggered Navigation Links */}
            <div className="flex flex-col gap-5 my-auto">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.04, duration: 0.25 }}
                  className="font-['Space_Grotesk'] text-xl sm:text-2xl text-[#A1A1AA] hover:text-white transition-colors flex items-center justify-between border-b border-white/[0.05] pb-3"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-40" />
                </motion.a>
              ))}
            </div>

            {/* Drawer Bottom Status & CTA */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-col gap-4">
              <div className="flex items-center gap-2 font-mono text-xs text-[#A1A1AA]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F97316] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F97316]"></span>
                </span>
                <span>OPEN TO SOFTWARE &amp; AI ROLES</span>
              </div>

              <a
                href="/resume-sanjay-viswanath.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Resume"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl border border-white/[0.15] bg-white/[0.05] hover:bg-white/[0.1] text-center font-mono text-xs text-white tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                <FileText className="w-4 h-4 text-[#A1A1AA]" />
                <span>DOWNLOAD RESUME / CV</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
