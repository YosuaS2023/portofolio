import { Sparkles } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function MainHero() {
  const { personal, stats } = portfolioData

  return (
    <section id="home" className="space-y-6 pt-4">
      {/* Eyebrow */}
      <div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-zinc-300 bg-zinc-900 border border-zinc-800">
          <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
          <span>{personal.currentFocus}</span>
        </span>
      </div>

      {/* Main Heading */}
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-100 tracking-tight flex items-center gap-2">
          Hi, I'm {personal.fullName}
          <span className="text-zinc-500 font-light animate-pulse">|</span>
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 font-mono">
          {personal.role}, {personal.school} · {personal.location}
        </p>
      </div>

      {/* Bio Paragraphs */}
      <div id="about" className="space-y-3 pt-2 text-sm text-zinc-400 leading-relaxed max-w-2xl">
        {personal.bio.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>

      {/* Minimal Stat Blocks (Like TsumuX) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-1"
          >
            <div className="text-xl sm:text-2xl font-bold font-mono text-zinc-100">
              {stat.value}
            </div>
            <div className="text-[11px] text-zinc-500 font-mono">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

