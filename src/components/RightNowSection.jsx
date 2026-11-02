import { useState, useEffect } from 'react'
import { Code2, Disc } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function RightNowSection() {
  const { personal } = portfolioData
  const [lanyardData, setLanyardData] = useState(null)
  const [elapsed, setElapsed] = useState('1h 8m')

  // Real Lanyard API fetch
  useEffect(() => {
    if (!personal.discordId) return

    const fetchLanyard = async () => {
      try {
        const res = await fetch(`https://api.lanyard.rest/v1/users/${personal.discordId}`)
        const json = await res.json()
        if (json.success && json.data) {
          setLanyardData(json.data)
        }
      } catch (err) {
        // Fallback to default state if offline or not monitored
      }
    }

    fetchLanyard()
    const interval = setInterval(fetchLanyard, 10000)
    return () => clearInterval(interval)
  }, [personal.discordId])

  // Extract Discord details from Lanyard or use authentic fallback (matches user's screenshot)
  const username = lanyardData?.discord_user?.username || personal.discordUsername || personal.nickname
  const discordStatus = lanyardData?.discord_status || 'online' // 'online' | 'idle' | 'dnd' | 'offline'

  const statusColors = {
    online: 'bg-emerald-500',
    idle: 'bg-amber-500',
    dnd: 'bg-rose-500',
    offline: 'bg-zinc-500',
  }

  const statusLabels = {
    online: 'Online',
    idle: 'Idle',
    dnd: 'Do Not Disturb',
    offline: 'Offline',
  }

  // Get current activity (e.g. VS Code, Game, Spotify)
  const activity = lanyardData?.activities?.find((a) => a.type === 0) || null
  const spotify = lanyardData?.spotify || null

  const avatarUrl = lanyardData?.discord_user?.avatar
    ? `https://cdn.discordapp.com/avatars/${lanyardData.discord_user.id}/${lanyardData.discord_user.avatar}.png`
    : null

  return (
    <section id="right-now" className="space-y-6 pt-2">
      {/* Section Header with Line Divider (Matches screenshot) */}
      <div className="flex items-center gap-3">
        <span className="w-6 h-6 rounded-full border border-zinc-800 text-[11px] font-mono text-zinc-400 flex items-center justify-center flex-shrink-0">
          01
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-100 tracking-tight whitespace-nowrap">
          Right now
        </h2>
        <div className="h-[1px] bg-zinc-800/80 flex-grow ml-2" />
      </div>

      {/* DISCORD STATUS CARD (Matches screenshot 1:1) */}
      <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-4 shadow-sm">
        <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-semibold">
          DISCORD STATUS
        </p>

        {/* User Profile Row */}
        <div className="flex items-center gap-3">
          <div className="relative">
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt={username}
                className="w-10 h-10 rounded-full border border-zinc-700 object-cover"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-bold font-mono text-zinc-200">
                {username.slice(0, 2).toUpperCase()}
              </div>
            )}
            <span
              className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-zinc-900 ${
                statusColors[discordStatus] || 'bg-emerald-500'
              }`}
            />
          </div>

          <div>
            <h3 className="text-sm font-bold text-zinc-100 leading-tight">
              {username}
            </h3>
            <p className="text-xs text-zinc-400 capitalize">
              {statusLabels[discordStatus] || 'Online'}
            </p>
          </div>
        </div>

        {/* Activity Row (Editing / Playing / Spotify) */}
        <div className="pt-3 border-t border-zinc-800/70 flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            {/* Activity Icon */}
            <div className="w-10 h-10 rounded-xl bg-teal-950/50 border border-teal-800/30 text-teal-400 flex items-center justify-center flex-shrink-0 mt-0.5">
              {spotify ? (
                <Disc className="w-5 h-5 text-emerald-400 animate-spin" />
              ) : (
                <Code2 className="w-5 h-5 text-cyan-400" />
              )}
            </div>

            {/* Details */}
            <div className="space-y-0.5">
              <p className="text-[10px] font-mono uppercase font-bold tracking-wider text-cyan-400">
                {spotify ? 'LISTENING TO SPOTIFY' : 'PLAYING'}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-zinc-200">
                {activity?.details || spotify?.song || 'Editing RegressionAnalysis.jsx'}
              </p>
              <p className="text-xs text-zinc-400 font-mono">
                {activity?.state || spotify?.artist || 'Workspace: ml-training-web'}
              </p>
            </div>
          </div>

          {/* Elapsed Time */}
          <span className="text-[11px] font-mono text-zinc-500 whitespace-nowrap">
            {elapsed}
          </span>
        </div>
      </div>
    </section>
  )
}
