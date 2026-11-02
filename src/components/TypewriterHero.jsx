import { useState, useEffect } from 'react'
import { Sparkles } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function TypewriterHero() {
  const { personal, stats } = portfolioData
  const [displayText, setDisplayText] = useState('')
  const targetText = personal.nickname

  useEffect(() => {
    let index = 0
    let isDeleting = false
    let timer

    const typeLoop = () => {
      if (!isDeleting) {
        if (index <= targetText.length) {
          setDisplayText(targetText.slice(0, index))
          index++
          timer = setTimeout(typeLoop, 120)
        } else {
          // Pause before deleting or stay typed
          timer = setTimeout(() => {
            isDeleting = true
            typeLoop()
          }, 3500)
        }
      } else {
        if (index > 0) {
          setDisplayText(targetText.slice(0, index))
          index--
          timer = setTimeout(typeLoop, 70)
        } else {
          isDeleting = false
          timer = setTimeout(typeLoop, 500)
        }
      }
    }

    timer = setTimeout(typeLoop, 200)
    return () => clearTimeout(timer)
  }, [targetText])

  return (
    <section id="home" className="space-y-6 pt-2">
      {/* 1. Eyebrow Badge (Matches screenshot) */}
      <div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-zinc-300 bg-zinc-900/90 border border-zinc-800/90 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
          <span>{personal.currentBadge}</span>
        </span>
      </div>

      {/* 2. Main Heading with Animated Typewriter (Matches "Hi, I'm T|" in screenshot) */}
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white flex items-center gap-1 flex-wrap">
          <span>Hi, I'm</span>
          <span className="text-zinc-100">{displayText}</span>
          <span className="text-blue-500 font-light animate-pulse ml-0.5">|</span>
        </h1>

        <p className="text-xs sm:text-sm text-zinc-400 font-mono">
          {personal.role}, {personal.school} · {personal.location}
        </p>
      </div>

      {/* 3. Bio Paragraph with selective bold accents */}
      <div id="about" className="space-y-3 pt-1 text-sm sm:text-[15px] text-zinc-400 leading-relaxed max-w-2xl">
        {personal.bio.map((text, idx) => (
          <p key={idx}>{text}</p>
        ))}
      </div>

      {/* 4. Three Stat Cards (Matches 19 Years old / 16+ Tech tools used / 2025 in screenshot) */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-xl pt-2">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="p-4 sm:p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 text-center space-y-1 shadow-sm"
          >
            <p className="text-2xl sm:text-3xl font-bold font-mono text-zinc-100">
              {stat.value}
            </p>
            <p className="text-[11px] sm:text-xs text-zinc-400 font-mono">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

