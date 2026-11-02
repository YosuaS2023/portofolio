import { portfolioData } from '../data/portfolioData'

export default function Skills() {
  const { toolbox } = portfolioData

  return (
    <section id="keahlian" className="space-y-6 pt-4">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-bold text-zinc-100 tracking-tight">
          Keahlian & Teknologi
        </h2>
        <span className="text-[11px] font-mono text-zinc-500">Tech Stack</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {toolbox.map((group, index) => (
          <div
            key={index}
            className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/80 space-y-3"
          >
            <p className="text-xs font-mono text-zinc-400 font-semibold uppercase tracking-wider">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
