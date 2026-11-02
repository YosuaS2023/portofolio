import { portfolioData } from '../data/portfolioData'

export default function TechStack() {
  const { skills } = portfolioData

  return (
    <section id="tech-stack" className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <span className="w-7 h-7 rounded-full border border-zinc-800 font-mono text-xs text-zinc-400 flex items-center justify-center">
          02
        </span>
        <h2 className="text-xl font-bold text-zinc-100 tracking-tight">
          Tech stack
        </h2>
      </div>

      <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 space-y-4">
        <p className="text-xs text-zinc-400">
          Tools, bahasa pemrograman, dan framework yang sering saya gunakan:
        </p>

        {/* Tech Pills Grid */}
        <div className="flex flex-wrap gap-2 pt-1">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 hover:border-zinc-700 hover:text-white transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

