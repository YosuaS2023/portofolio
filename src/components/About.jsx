import { GraduationCap, Award, CheckCircle2, Clock, Target } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function About() {
  const { education, stats } = portfolioData

  const strengths = [
    {
      title: 'Kemauan Belajar Cepat',
      desc: 'Mudah beradaptasi dengan teknologi, framework, dan alur kerja baru di industri.',
    },
    {
      title: 'Clean & Readable Code',
      desc: 'Terbiasa menyusun struktur file yang rapi dan penamaan komponen yang jelas.',
    },
    {
      title: 'Kerja Sama Tim & Git',
      desc: 'Memahami dasar version control menggunakan Git, commit teratur, dan GitHub.',
    },
    {
      title: 'Tepat Waktu & Disiplin',
      desc: 'Terlatih menyelesaikan tugas praktikum sekolah sesuai tenggat waktu.',
    },
  ]

  return (
    <section id="tentang" className="py-20 bg-slate-900/40 border-y border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Title */}
        <div className="text-center space-y-3">
          <p className="text-xs uppercase font-mono tracking-widest text-cyan-400">
            Mengenal Saya
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Tentang & Pendidikan
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Latar belakang pendidikan dan komitmen saya sebagai siswa SMK jurusan Rekayasa Perangkat Lunak.
          </p>
        </div>

        {/* Education & Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Education Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  Riwayat Pendidikan
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {education.school}
                </h3>
                <p className="text-lg text-slate-300 font-medium">
                  {education.major}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>Periode: {education.period}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <Target className="w-4 h-4 text-emerald-400" />
                  <span>Status: <strong className="text-slate-200">{education.status}</strong></span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 text-xs text-slate-400">
              💡 <em>"Fokus utama saya saat ini adalah mengasah keterampilan praktis melalui project nyata agar siap terjun di tempat PKL."</em>
            </div>
          </div>

          {/* Strengths Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {strengths.map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 transition-all hover:-translate-y-0.5 space-y-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <h4 className="font-semibold text-white text-base">
                    {item.title}
                  </h4>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed pl-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 text-center space-y-1 hover:border-cyan-500/30 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-mono">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-400">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

