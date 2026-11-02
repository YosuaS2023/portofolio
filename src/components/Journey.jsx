import { GraduationCap, Briefcase } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function Journey() {
  const { journey } = portfolioData

  return (
    <section className="space-y-6 pt-4">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-bold text-zinc-100 tracking-tight flex items-center gap-2">
          <span>Pendidikan & Lintasan Belajar</span>
        </h2>
        <span className="text-[11px] font-mono text-zinc-500">Timeline RPL</span>
      </div>

      <div className="relative border-l border-zinc-800 ml-3 space-y-6 pl-6">
        {journey.map((item, index) => (
          <div key={index} className="relative group">
            {/* Timeline Dot */}
            <span
              className={`absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-[#09090b] ${
                item.current ? 'bg-emerald-400' : 'bg-zinc-600'
              }`}
            />

            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-mono text-zinc-400">
                  {item.period}
                </span>
                {item.current && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Sedang Berjalan
                  </span>
                )}
              </div>

              <h3 className="text-sm font-semibold text-zinc-200">
                {item.title}
              </h3>
              <p className="text-xs text-zinc-400 font-mono">
                {item.institution}
              </p>
              <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

