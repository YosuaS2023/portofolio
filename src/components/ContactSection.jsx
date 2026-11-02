import { useState } from 'react'
import { Mail, Copy, Check, ArrowUpRight, Send } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { DiscordIcon } from './Icons'

export default function ContactSection() {
  const { personal } = portfolioData
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedDiscord, setCopiedDiscord] = useState(false)
  const [senderName, setSenderName] = useState('')
  const [message, setMessage] = useState('')

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText(personal.discordUsername)
    setCopiedDiscord(true)
    setTimeout(() => setCopiedDiscord(false), 2000)
  }

  const handleSendEmail = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Pesan dari ${senderName || 'Pengunjung Portofolio'}`)
    const body = encodeURIComponent(message)
    window.open(`mailto:${personal.email}?subject=${subject}&body=${body}`, '_blank')
  }

  return (
    <section id="contact" className="space-y-6 pt-4">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <span className="w-6 h-6 rounded-full border border-zinc-800 text-[11px] font-mono text-zinc-400 flex items-center justify-center flex-shrink-0">
          05
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-100 tracking-tight whitespace-nowrap">
          Contact
        </h2>
        <div className="h-[1px] bg-zinc-800/80 flex-grow ml-2" />
      </div>

      <div className="p-5 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-6 shadow-sm">
        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-xl">
          Tertarik untuk berdiskusi seputar web development, kolaborasi proyek, atau ingin menyapa? Akses pesan saya tersedia melalui <strong>Discord</strong> dan <strong>Gmail</strong>:
        </p>

        {/* 2 Channel Kontak: Discord & Gmail */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Discord Card */}
          <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col justify-between space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                  <DiscordIcon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-200">Discord</p>
                  <p className="text-[11px] font-mono text-zinc-400">@{personal.discordUsername}</p>
                </div>
              </div>

              <a
                href={personal.discordUrl}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                title="Buka Discord"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={handleCopyDiscord}
              className="w-full flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-800 text-[11px] font-mono text-zinc-300 transition-colors"
            >
              {copiedDiscord ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-zinc-400" />}
              <span>{copiedDiscord ? 'Username Tersalin' : 'Salin Username Discord'}</span>
            </button>
          </div>

          {/* Gmail Card */}
          <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col justify-between space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-200">Email (Gmail)</p>
                  <p className="text-[11px] font-mono text-zinc-400 truncate max-w-[150px] sm:max-w-none">{personal.email}</p>
                </div>
              </div>

              <a
                href={`mailto:${personal.email}`}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                title="Kirim Email"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={handleCopyEmail}
              className="w-full flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-800 text-[11px] font-mono text-zinc-300 transition-colors"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-zinc-400" />}
              <span>{copiedEmail ? 'Email Tersalin' : 'Salin Alamat Email'}</span>
            </button>
          </div>
        </div>

        {/* Kirim Pesan Cepat via Email */}
        <form onSubmit={handleSendEmail} className="space-y-3 pt-4 border-t border-zinc-800/60">
          <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
            Tulis Pesan ke Gmail:
          </p>
          <input
            type="text"
            required
            placeholder="Nama Anda atau nama Pengirim..."
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors"
          />
          <textarea
            rows={3}
            required
            placeholder="Tuliskan pesan atau ide kolaborasi di sini..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-bold transition-all flex items-center justify-center gap-2"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Buka di Gmail</span>
          </button>
        </form>
      </div>
    </section>
  )
}
