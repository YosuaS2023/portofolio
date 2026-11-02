import { ArrowUpRight, Lock } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { GithubIcon } from './Icons'

export default function ProjectsSection() {
  const { projects } = portfolioData

  return (
    <section id="projects" className="space-y-6 pt-4">
      {/* Section Header with Line Divider */}
      <div className="flex items-center gap-3">
        <span className="w-6 h-6 rounded-full border border-zinc-800 text-[11px] font-mono text-zinc-400 flex items-center justify-center flex-shrink-0">
          03
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-100 tracking-tight whitespace-nowrap">
          Projects
        </h2>
        <div className="h-[1px] bg-zinc-800/80 flex-grow ml-2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {projects.map((project) => {
          const isClosedSource = project.isPrivate || !project.githubUrl

          return (
            <div
              key={project.id}
              className="p-5 sm:p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-4 group shadow-sm"
            >
              <div className="space-y-2.5">
                {/* Header: Title, Category & Closed Source Badge */}
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base font-bold text-zinc-100 group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      {isClosedSource && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400/90 border border-amber-500/20">
                          <Lock className="w-2.5 h-2.5" />
                          <span>Closed code</span>
                        </span>
                      )}
                    </div>

                    <span className="text-[11px] font-mono text-zinc-500">
                      {project.category}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-zinc-500 flex-shrink-0">
                    {project.year}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Links & Closed Source Indicator */}
                <div className="flex items-center justify-between pt-3 border-t border-zinc-800/60 text-xs">
                  {/* Live Demo Link (jika ada demo) */}
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-zinc-200 hover:text-white transition-colors font-medium"
                    >
                      <span>Live demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" />
                    </a>
                  ) : (
                    <span className="text-zinc-500 font-mono text-[11px]">
                      Internal Tool
                    </span>
                  )}

                  {/* Source Code Link / Private Code Indicator */}
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-zinc-200 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Source code</span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-zinc-500 font-mono text-[11px] cursor-default" title="Kode sumber bersifat privat / rahasia">
                      <Lock className="w-3 h-3 text-zinc-500" />
                      <span>Private code</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
