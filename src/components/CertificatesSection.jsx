import { ExternalLink, Award } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function CertificatesSection() {
  const { certificates } = portfolioData

  if (!certificates || certificates.length === 0) return null

  return (
    <section id="certificates" className="space-y-6 pt-4">
      {/* Section Header with Line Divider */}
      <div className="flex items-center gap-3">
        <span className="w-6 h-6 rounded-full border border-zinc-800 text-[11px] font-mono text-zinc-400 flex items-center justify-center flex-shrink-0">
          04
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-100 tracking-tight whitespace-nowrap">
          Certificates
        </h2>
        <div className="h-[1px] bg-zinc-800/80 flex-grow ml-2" />
      </div>

      <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 divide-y divide-zinc-800/60 overflow-hidden shadow-sm">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-zinc-900/60 transition-colors"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <Award className="w-4 h-4 text-zinc-500 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs sm:text-sm font-semibold text-zinc-200 truncate">
                  {cert.title}
                </p>
                <p className="text-[11px] font-mono text-zinc-500 mt-0.5">
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
