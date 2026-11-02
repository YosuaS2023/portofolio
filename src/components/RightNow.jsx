import { CheckCircle2, Sparkles } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function RightNow() {
  const { rightNow } = portfolioData

  return (
    <section id="right-now" className="space-y-6">
      {/* Section Header with index badge */}
      <div className="flex items-center gap-3">
        <span className="w-7 h-7 rounded-full border border-zinc-800 font-mono text-xs text-zinc-400 flex items-center justify-center">
          01
        </span>
        <h2 className="text-xl font-bold text-zinc-100 tracking-tight">
          Right now
        </h2>
      </div>

      {/* Card Content */}
      <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 space-y-5">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 mt-0.5">
            <Sparkles className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-semibold text-zinc-100">
              {rightNow.status}
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {rightNow.description}
            </p>
          </div>
        </div>

        {/* Goals list */}
        <div className="pt-2 border-t border-zinc-800/60 space-y-2">
          <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
            Fokus & Target Saat Ini:
          </p>
          <div className="space-y-2">
            {rightNow.goals.map((goal, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                <span>{goal}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

