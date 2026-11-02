import { useState, useEffect } from 'react'
import { portfolioData } from '../data/portfolioData'

export default function Navbar() {
  const { personal } = portfolioData
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-2.5 sm:p-4 transition-all">
      <nav
        className={`w-full max-w-2xl lg:max-w-5xl mx-auto px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'bg-zinc-900/90 backdrop-blur-md border border-zinc-800 shadow-lg shadow-black/40'
            : 'bg-zinc-950/70 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none border border-zinc-850 sm:border-transparent'
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group text-xs font-mono font-semibold text-zinc-300 hover:text-white transition-colors"
        >
          <span className="w-6 h-6 rounded-md bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[10px] text-zinc-200">
            {personal.nickname.slice(0, 2).toUpperCase()}
          </span>
          <span>{personal.nickname}</span>
          <span className="hidden sm:inline text-zinc-500 font-normal">/ porto</span>
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-1 sm:gap-4 text-xs font-medium text-zinc-400">
          <a
            href="#tentang"
            className="px-2 py-1 rounded-md hover:text-zinc-100 hover:bg-zinc-800/60 transition-colors"
          >
            Tentang
          </a>
          <a
            href="#proyek"
            className="px-2 py-1 rounded-md hover:text-zinc-100 hover:bg-zinc-800/60 transition-colors"
          >
            Proyek
          </a>
          <a
            href="#keahlian"
            className="px-2 py-1 rounded-md hover:text-zinc-100 hover:bg-zinc-800/60 transition-colors"
          >
            Keahlian
          </a>
          <a
            href="#kontak"
            className="px-2 py-1 rounded-md hover:text-zinc-100 hover:bg-zinc-800/60 transition-colors"
          >
            Kontak
          </a>
        </div>

        {/* Status indicator */}
        <a
          href="#kontak"
          className="hidden xs:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-800/80 border border-zinc-700/60 text-[11px] font-mono text-zinc-300 hover:border-zinc-500 transition-colors"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Siap PKL</span>
        </a>
      </nav>
    </header>
  )
}
