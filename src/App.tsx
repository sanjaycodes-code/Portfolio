import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import { FeaturedProjects } from './components/sections/FeaturedProjects'
import { TechMatrix } from './components/sections/TechMatrix'
import { ExperienceJourney } from './components/sections/ExperienceJourney'
import { InteractivePlayground } from './components/sections/InteractivePlayground'

export default function App() {
  return (
    <div className="min-h-screen bg-[#080809] text-[#EDEDED] flex flex-col selection:bg-[#F97316]/20 selection:text-white">
      {/* Global Floating Glassmorphism Navbar */}
      <Navbar />

      {/* Main Content Shell */}
      <main className="flex-1 flex flex-col">
        {/* Editorial Hero Section */}
        <Hero />

        {/* Phase 3 Featured Projects: Agency Case-Study Layout with 3D Tilt Cards */}
        <FeaturedProjects />

        {/* Phase 4 Technical Skill Matrix (Verified Real Stacks) */}
        <TechMatrix />

        {/* Phase 4 Experience & Academic Journey (Honest Timeline) */}
        <ExperienceJourney />

        {/* Phase 5 Interactive Laboratory & Playground (ATS Engine + TLS Post-Mortem) */}
        <InteractivePlayground />

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
