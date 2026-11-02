import { useState, useEffect } from 'react'
import {
  Menu,
  X,
  Clock,
  Copy,
  Check,
  Download,
} from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { DiscordIcon } from './Icons'

export default function TopNav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [currentTime, setCurrentTime] = useState('')
  const { personal } = portfolioData

  // Live Local Time (WIB)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeStr = now.toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Jakarta',
      })
      setCurrentTime(`${timeStr} WIB`)
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Right now', href: '#right-now' },
    { name: 'Stack', href: '#tech-stack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[#09090b]/90 backdrop-blur-md border-b border-zinc-800/80 transition-all">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-3">
          {/* Left Brand: Avatar + Name */}
          <a href="#home" className="flex items-center gap-2.5 flex-shrink-0 group">
            <div className="relative">
              <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700/80 flex items-center justify-center text-xs font-bold font-mono text-zinc-100 group-hover:border-zinc-500 transition-colors">
                {personal.nickname.slice(0, 2).toUpperCase()}
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 border border-zinc-950"></span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-bold text-zinc-100 tracking-tight group-hover:text-white transition-colors whitespace-nowrap">
                {personal.nickname}
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-zinc-800/80 text-zinc-300 border border-zinc-700/60 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Online</span>
              </span>
            </div>
          </a>

          {/* Center: Clean Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-900/80 border border-zinc-800/80 px-1.5 py-1 rounded-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2.5 py-1 rounded-lg text-xs font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions: Jam WIB, Salin Email & Discord */}
          <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
            {/* Live Clock */}
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900/60 border border-zinc-800/80 text-[11px] font-mono text-zinc-400 whitespace-nowrap">
              <Clock className="w-3 h-3 text-emerald-400 flex-shrink-0" />
              <span>{currentTime || 'WIB'}</span>
            </div>

            {/* Salin Email Button */}
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-medium text-zinc-300 transition-colors whitespace-nowrap active:scale-95"
              title="Salin alamat email"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-mono text-[11px]">Tersalin</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Email</span>
                </>
              )}
            </button>

            {/* Discord Button */}
            <a
              href={personal.discordUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 text-xs font-medium transition-colors whitespace-nowrap active:scale-95"
            >
              <DiscordIcon className="w-3.5 h-3.5" />
              <span>Discord</span>
            </a>
          </div>

          {/* Mobile Actions: Discord Icon + Hamburger Menu */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={personal.discordUrl}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-indigo-400"
              aria-label="Discord"
            >
              <DiscordIcon className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 border border-zinc-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-[#09090b]/98 border-b border-zinc-800 px-4 pt-3 pb-5 space-y-3.5 shadow-2xl">
          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between gap-2 text-xs font-mono">
            <div className="flex items-center gap-1.5 text-zinc-400 text-[11px]">
              <Clock className="w-3 h-3 text-emerald-400" />
              <span>{currentTime || 'WIB'}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyEmail}
                className="px-2.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300"
              >
                {copied ? 'Tersalin' : 'Salin Email'}
              </button>

              <a
                href={personal.cvLink}
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300 flex items-center gap-1"
              >
                <Download className="w-3 h-3" />
                <span>CV</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
