import { portfolioData } from '../data/portfolioData'
import { TechIcon } from './TechIcons'

export default function TechStackSection() {
  const { skills } = portfolioData

  return (
    <section id="tech-stack" className="space-y-6 pt-4">
      {/* Section Header with Line Divider */}
      <div className="flex items-center gap-3">
        <span className="w-6 h-6 rounded-full border border-zinc-800 text-[11px] font-mono text-zinc-400 flex items-center justify-center flex-shrink-0">
          02
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-100 tracking-tight whitespace-nowrap">
          Tech stack
        </h2>
        <div className="h-[1px] bg-zinc-800/80 flex-grow ml-2" />
      </div>

      <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-4 shadow-sm">
        <p className="text-xs sm:text-sm text-zinc-400">
          Teknologi dan tools yang sering saya gunakan dalam pengerjaan proyek:
        </p>

        {/* Grid Skills dengan Logo Vektor Bersih */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-3 pt-1">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900/70 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-800/50 transition-all group cursor-default shadow-sm"
            >
              <div className="w-6 h-6 rounded-lg bg-zinc-800/60 border border-zinc-700/60 flex items-center justify-center flex-shrink-0 group-hover:border-zinc-600 transition-colors">
                <TechIcon
                  name={skill}
                  className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors"
                />
              </div>

              <span className="text-xs font-mono text-zinc-300 group-hover:text-white transition-colors truncate">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
