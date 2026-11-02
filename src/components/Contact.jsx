import { useState } from 'react'
import { MessageCircle, Mail, Send, ArrowUpRight } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function Contact() {
  const { personal } = portfolioData
  const [sender, setSender] = useState('')
  const [msg, setMsg] = useState('')

  const handleSendWA = (e) => {
    e.preventDefault()
    const content = encodeURIComponent(
      `Halo ${personal.nickname}, saya ${sender || 'Pengunjung Portofolio'}.\n\nPesan:\n${msg}`
    )
    window.open(`https://wa.me/${personal.whatsapp}?text=${content}`, '_blank')
  }

  return (
    <section id="kontak" className="space-y-4 sm:space-y-6 pt-2 sm:pt-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm sm:text-base lg:text-lg font-bold text-zinc-100 tracking-tight">
          Kontak & Tawaran PKL
        </h2>
        <span className="text-[11px] font-mono text-emerald-400">
          Respon Aktif
        </span>
      </div>

      <div className="p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Direct info */}
          <div className="lg:col-span-5 space-y-3.5">
            <h3 className="text-xs sm:text-sm font-semibold text-zinc-200">
              Terbuka untuk Kesempatan Magang
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Saya siap belajar langsung di lingkungan kerja industri dan berkontribusi dalam tim. Silakan hubungi saya melalui:
            </p>

            <div className="space-y-2 pt-1">
              <a
                href={`https://wa.me/${personal.whatsapp}?text=Halo%20${personal.nickname}%2C%20saya%20tertarik%20dengan%20portofolio%20kamu`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <div>
                    <p className="text-xs font-semibold text-zinc-200">WhatsApp</p>
                    <p className="text-[11px] font-mono text-zinc-500">Respon langsung</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-200 transition-colors" />
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-zinc-300" />
                  <div>
                    <p className="text-xs font-semibold text-zinc-200">Email Pribadi</p>
                    <p className="text-[11px] font-mono text-zinc-500 truncate max-w-[170px] sm:max-w-none">
                      {personal.email}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-200 transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSendWA} className="space-y-3 bg-zinc-900/60 p-4 sm:p-5 rounded-xl border border-zinc-800/80">
              <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                Kirim Pesan via WhatsApp:
              </p>
              <input
                type="text"
                required
                placeholder="Nama Anda atau nama Perusahaan..."
                value={sender}
                onChange={(e) => setSender(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors"
              />
              <textarea
                rows={3}
                required
                placeholder="Tuliskan pesan atau jadwal interview PKL..."
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-4 py-2 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-bold transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Kirim via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
