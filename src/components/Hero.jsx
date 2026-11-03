import { useState } from 'react'
import { Copy, Check, Download, MapPin, GraduationCap, Code2, Sparkles } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { GithubIcon, LinkedinIcon, DiscordIcon } from './Icons'

export default function Hero() {
  const { personal } = portfolioData
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="tentang" className="pt-20 sm:pt-28 pb-2">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left / Main Profile Area */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between gap-4">
            {personal.avatarUrl ? (
              <img
                src={personal.avatarUrl}
                alt={personal.nickname}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border border-zinc-800 object-cover shadow-md flex-shrink-0"
              />
            ) : (
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xl sm:text-2xl font-bold font-mono text-zinc-100 shadow-md flex-shrink-0">
                {personal.nickname.slice(0, 2).toUpperCase()}
              </div>
            )}

            <div className="flex flex-col items-end gap-1.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-zinc-300 bg-zinc-900/90 border border-zinc-800">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>{personal.statusText}</span>
              </span>
              <div className="flex items-center gap-1 text-xs text-zinc-500 font-mono">
                <MapPin className="w-3 h-3" />
                <span>{personal.location}</span>
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-100 leading-tight">
              {personal.name}
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 font-mono">
              {personal.role} • {personal.school}
            </p>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
            {personal.bio.map((text, idx) => (
              <p key={idx} className="text-zinc-400">
                {text}
              </p>
            ))}
          </div>

          {/* Action Bar: Email, Discord, CV, Github, Linkedin */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-zinc-800/80">
            {/* Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-medium text-zinc-200 transition-all hover:border-zinc-700 active:scale-95"
              title="Salin alamat email"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-mono">Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Salin Email</span>
                </>
              )}
            </button>

            {/* Discord Button */}
            <a
              href={personal.discordUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 text-xs font-medium transition-all active:scale-95"
            >
              <DiscordIcon className="w-3.5 h-3.5" />
              <span>Discord</span>
            </a>

            {/* CV Download */}
            <a
              href={personal.cvLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-medium text-zinc-200 transition-all hover:border-zinc-700 active:scale-95"
            >
              <Download className="w-3.5 h-3.5 text-zinc-400" />
              <span>Unduh CV</span>
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-1.5 ml-auto">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Desktop Summary Card */}
        <div className="hidden lg:block lg:col-span-5">
          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-5 shadow-xl backdrop-blur-sm">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Ringkasan Profil</span>
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Online
              </span>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-zinc-500 font-mono text-[11px]">Asal Sekolah & Jurusan</p>
                  <p className="font-semibold text-zinc-200 mt-0.5">{personal.school}</p>
                  <p className="text-zinc-400 text-[11px]">Rekayasa Perangkat Lunak (RPL)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Code2 className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-zinc-500 font-mono text-[11px]">Fokus Bidang</p>
                  <p className="font-semibold text-zinc-200 mt-0.5">Frontend & Junior Web Developer</p>
                  <p className="text-zinc-400 text-[11px]">React.js, Tailwind CSS, JavaScript</p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-zinc-800/80">
              <a
                href="#contact"
                className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-100 text-xs font-semibold transition-colors"
              >
                <span>Hubungi Saya</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
