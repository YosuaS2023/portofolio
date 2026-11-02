import { useState } from 'react'
import {
  Home,
  User,
  Clock,
  Cpu,
  FolderGit2,
  Award,
  Mail,
  Menu,
  X,
  Sun,
} from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { GithubIcon, LinkedinIcon } from './Icons'

export default function Sidebar({ activeSection = 'home' }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { personal } = portfolioData

  const navItems = [
    { id: 'home', name: 'Home', href: '#home', icon: Home },
    { id: 'about', name: 'About', href: '#about', icon: User },
    { id: 'right-now', name: 'Right now', href: '#right-now', icon: Clock },
    { id: 'tech-stack', name: 'Tech stack', href: '#tech-stack', icon: Cpu },
    { id: 'projects', name: 'Projects', href: '#projects', icon: FolderGit2 },
    { id: 'certificates', name: 'Certificates', href: '#certificates', icon: Award },
    { id: 'contact', name: 'Contact', href: '#contact', icon: Mail },
  ]

  const SidebarContent = () => (
    <div className="flex flex-col h-full justify-between p-6">
      <div className="space-y-8">
        {/* Profile Header (matches screenshot) */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            {/* Avatar with indicator */}
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700/80 flex items-center justify-center text-lg font-bold font-mono text-zinc-100 shadow-sm overflow-hidden">
                {personal.nickname.slice(0, 2).toUpperCase()}
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[#09090b]"></span>
              </span>
            </div>

            <div>
              <p className="text-[10px] uppercase font-mono tracking-wider text-zinc-500">
                HI, I'M
              </p>
              <h2 className="text-base font-bold text-zinc-100 leading-tight">
                {personal.nickname}
              </h2>
              <p className="text-xs text-zinc-400 font-mono mt-0.5">
                {personal.role}
              </p>
            </div>
          </div>

          {/* Theme button icon (aesthetic) */}
          <button
            type="button"
            className="p-1.5 rounded-lg border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 transition-colors"
            aria-label="Theme toggle"
            title="Theme: Dark Mode"
          >
            <Sun className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation list */}
        <div className="space-y-1">
          <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 px-3 pb-2 font-semibold">
            Navigate
          </p>
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.id
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-zinc-900/90 text-zinc-100 border border-zinc-800/90 shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Icon
                      className={`w-4 h-4 ${
                        isActive ? 'text-zinc-200' : 'text-zinc-500'
                      }`}
                    />
                    <span>{item.name}</span>
                  </span>

                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-sm shadow-blue-500" />
                  )}
                </a>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Bottom Footer Area */}
      <div className="pt-6 border-t border-zinc-800/80 space-y-4">
        {/* Status Pill */}
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>{personal.statusText}</span>
        </div>

        {/* Social Icons row */}
        <div className="flex items-center gap-2 text-zinc-400">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-1.5 rounded-lg hover:text-zinc-100 hover:bg-zinc-900 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-1.5 rounded-lg hover:text-zinc-100 hover:bg-zinc-900 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="p-1.5 rounded-lg hover:text-zinc-100 hover:bg-zinc-900 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile Top Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-[#09090b]/95 backdrop-blur-md border-b border-zinc-800 z-50 flex items-center justify-between px-4">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-bold text-zinc-200">
            {personal.nickname.slice(0, 2).toUpperCase()}
          </div>
          <span className="text-sm font-bold text-zinc-100">
            {personal.nickname}
          </span>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 border border-zinc-800 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* Mobile Dropdown Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-14 bg-[#09090b]/98 backdrop-blur-xl z-40 overflow-y-auto">
          <SidebarContent />
        </div>
      )}

      {/* Desktop Fixed Left Sidebar */}
      <aside className="hidden lg:block fixed top-0 bottom-0 left-0 w-64 xl:w-72 bg-[#09090b] border-r border-zinc-800/80 z-40 overflow-y-auto">
        <SidebarContent />
      </aside>
    </>
  )
}
