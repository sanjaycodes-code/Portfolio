import { lazy, Suspense } from 'react'
import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { FeaturedProjects } from './components/sections/FeaturedProjects'
import { TechMatrix } from './components/sections/TechMatrix'
import { ExperienceJourney } from './components/sections/ExperienceJourney'
import { Footer } from './components/sections/Footer'

// Performance: Code-split heavy interactive laboratory & terminal script
const InteractivePlayground = lazy(() =>
  import('./components/sections/InteractivePlayground').then((m) => ({
    default: m.InteractivePlayground,
  }))
)

export default function App() {
  return (
    <div className="min-h-screen bg-[#080809] text-[#EDEDED] flex flex-col selection:bg-[#F97316]/20 selection:text-white">
      {/* Global Floating Glassmorphism Navbar */}
      <Navbar />

      {/* Main Content Shell */}
      <main className="flex-1 flex flex-col">
        {/* Editorial Hero Section */}
        <Hero />

        {/* Editorial About & Profile Section */}
        <About />

        {/* Phase 3 Featured Projects: Agency Case-Study Layout with 3D Tilt Cards */}
        <FeaturedProjects />

        {/* Phase 4 Technical Skill Matrix (Verified Real Stacks) */}
        <TechMatrix />

        {/* Phase 4 Experience & Academic Journey (Honest Timeline) */}
        <ExperienceJourney />

        {/* Phase 5 Interactive Laboratory & Playground (Code Split & Deferred) */}
        <Suspense
          fallback={
            <div className="py-24 max-w-6xl mx-auto px-4 w-full flex items-center justify-center min-h-[420px]">
              <div className="font-mono text-xs text-[#8E8E98] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" />
                <span>INITIALIZING TELEMETRY ENGINE...</span>
              </div>
            </div>
          }
        >
          <InteractivePlayground />
        </Suspense>

        {/* Phase 6 Editorial Contact Section & Footer */}
        <Footer />
      </main>
    </div>
  )
}

