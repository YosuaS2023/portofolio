import { ExternalLink, Award } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function Certificates() {
  const { certificates } = portfolioData

  if (!certificates || certificates.length === 0) return null

  return (
    <section className="space-y-4 sm:space-y-6 pt-2 sm:pt-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm sm:text-base lg:text-lg font-bold text-zinc-100 tracking-tight">
          Sertifikasi & Kursus
        </h2>
        <span className="text-[11px] font-mono text-zinc-500">
          Verifikasi Skill
        </span>
      </div>

      <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 divide-y divide-zinc-800/60 overflow-hidden">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="p-3.5 sm:p-4 flex items-center justify-between gap-3 hover:bg-zinc-900/50 transition-colors"
          >
            <div className="flex items-center gap-3 min-w-0">
              <Award className="w-4 h-4 text-zinc-500 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs sm:text-sm font-medium text-zinc-200 truncate">
                  {cert.title}
                </p>
                <p className="text-[11px] font-mono text-zinc-500">
                  {cert.issuer} • {cert.year}
                </p>
              </div>
            </div>

            <a
              href={cert.url}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-zinc-400 hover:text-zinc-200 flex items-center gap-1 font-mono transition-colors flex-shrink-0"
            >
              <span className="hidden sm:inline">Lihat</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
