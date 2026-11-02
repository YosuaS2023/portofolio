import { ArrowUp } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function Footer() {
  const { personal } = portfolioData

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="pt-16 pb-12 border-t border-zinc-800/80 text-xs text-zinc-500 font-mono flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
        <span>
          © {new Date().getFullYear()} {personal.name} • Siswa SMK RPL
        </span>
      </div>

      <button
        onClick={scrollToTop}
        className="flex items-center gap-1.5 text-zinc-400 hover:text-zinc-200 transition-colors"
      >
        <span>Ke Atas</span>
        <ArrowUp className="w-3.5 h-3.5" />
      </button>
    </footer>
  )
}
