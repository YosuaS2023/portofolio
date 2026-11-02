import TopNav from './components/TopNav'
import TypewriterHero from './components/TypewriterHero'
import RightNowSection from './components/RightNowSection'
import TechStackSection from './components/TechStackSection'
import ProjectsSection from './components/ProjectsSection'
import CertificatesSection from './components/CertificatesSection'
import ContactSection from './components/ContactSection'
import { portfolioData } from './data/portfolioData'

export default function App() {
  const { personal } = portfolioData

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col selection:bg-zinc-800 selection:text-white">
      {/* 1. Header Tab Atas */}
      <TopNav />

      {/* 2. Konten Utama */}
      <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16 pb-20 flex-grow">
        <TypewriterHero />
        <RightNowSection />
        <TechStackSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />

        {/* Minimalist Footer */}
        <footer className="pt-10 border-t border-zinc-800/80 text-xs text-zinc-500 font-mono flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>© {new Date().getFullYear()} {personal.name}. All rights reserved.</span>
          </div>
          <span>Built with React & Tailwind CSS</span>
        </footer>
      </main>
    </div>
  )
}
