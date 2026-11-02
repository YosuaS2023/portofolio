import { ArrowUpRight } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { GithubIcon } from './Icons'

export default function Projects() {
  const { projects } = portfolioData

  return (
    <section id="proyek" className="space-y-4 sm:space-y-6 pt-2 sm:pt-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm sm:text-base lg:text-lg font-bold text-zinc-100 tracking-tight">
          Proyek Unggulan
        </h2>
        <span className="text-[11px] font-mono text-zinc-500">
          {projects.length} Proyek
        </span>
      </div>

      {/* Grid: 1 col on mobile (lega), 2 cols on tablet & laptop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-3.5 group"
          >
            <div className="space-y-2.5">
              {/* Header info */}
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-sm sm:text-base font-bold text-zinc-100 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-400 font-mono">
                    {project.subtitle}
                  </p>
                </div>

                <span className="text-xs font-mono text-zinc-500 flex-shrink-0">
                  {project.year}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed">
                {project.description}
              </p>

              {/* Feature Bullets */}
              {project.features && (
                <div className="space-y-1 pt-0.5">
                  {project.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-zinc-400"
                    >
                      <span className="w-1 h-1 rounded-full bg-zinc-500 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-3 pt-1">
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800/80"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-2.5 border-t border-zinc-800/60 text-xs">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-zinc-200 hover:text-white transition-colors font-medium"
                >
                  <span>Live demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Source code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
