import { useState, useEffect } from 'react'
import { Code2, Disc, Gamepad2, Laptop, AlertCircle } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function RightNowSection() {
  const { personal } = portfolioData
  const [lanyardData, setLanyardData] = useState(null)
  const [elapsedTime, setElapsedTime] = useState('')

  // 1. Fetch & Listen to Lanyard API
  useEffect(() => {
    if (!personal.discordId) return

    let socket
    let heartbeatTimer

    // REST initial fetch
    const fetchLanyard = async () => {
      try {
        const res = await fetch(`https://api.lanyard.rest/v1/users/${personal.discordId}`)
        const json = await res.json()
        if (json.success && json.data) {
          setLanyardData(json.data)
        }
      } catch (err) {
        // silent fallback
      }
    }
    fetchLanyard()

    // Real-time WebSocket connection
    try {
      socket = new WebSocket('wss://api.lanyard.rest/socket')

      socket.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data)
          if (data.op === 1) {
            // Hello opcode -> send heartbeat
            heartbeatTimer = setInterval(() => {
              if (socket.readyState === WebSocket.OPEN) {
                socket.send(JSON.stringify({ op: 3 }))
              }
            }, data.d.heartbeat_interval)

            // Subscribe to user
            socket.send(
              JSON.stringify({
                op: 2,
                d: { subscribe_to_id: personal.discordId },
              })
            )
          } else if (data.t === 'INIT_STATE' || data.t === 'PRESENCE_UPDATE') {
            setLanyardData(data.d)
          }
        } catch (e) { }
      }

      socket.onerror = () => {
        // fallback to polling if websocket fails
        const pollTimer = setInterval(fetchLanyard, 6000)
        return () => clearInterval(pollTimer)
      }
    } catch (e) {
      const pollTimer = setInterval(fetchLanyard, 6000)
      return () => clearInterval(pollTimer)
    }

    return () => {
      if (heartbeatTimer) clearInterval(heartbeatTimer)
      if (socket) socket.close()
    }
  }, [personal.discordId])

  // Extract Discord details
  const isConnected = !!lanyardData
  const discordUser = lanyardData?.discord_user
  const discordStatus = lanyardData?.discord_status || 'offline'

  const statusColors = {
    online: 'bg-emerald-500',
    idle: 'bg-amber-500',
    dnd: 'bg-rose-500',
    offline: 'bg-zinc-500',
  }

  const statusLabels = {
    online: 'Online',
    idle: 'Idle (AFK)',
    dnd: 'Do Not Disturb',
    offline: 'Offline',
  }

  // Find active rich presence (exclude custom status type 4)
  const activities = lanyardData?.activities?.filter((a) => a.type !== 4) || []
  const primaryActivity = activities[0] || null
  const spotify = lanyardData?.listening_to_spotify ? lanyardData.spotify : null

  // Elapsed time counter
  useEffect(() => {
    const startTime = spotify?.timestamps?.start || primaryActivity?.timestamps?.start
    if (!startTime) {
      setElapsedTime('')
      return
    }

    const updateTimer = () => {
      const now = Date.now()
      const diffMs = Math.max(0, now - startTime)
      const diffMins = Math.floor(diffMs / 60000)
      const hours = Math.floor(diffMins / 60)
      const mins = diffMins % 60
      setElapsedTime(hours > 0 ? `${hours}h ${mins}m` : `${mins}m`)
    }

    updateTimer()
    const interval = setInterval(updateTimer, 10000)
    return () => clearInterval(interval)
  }, [primaryActivity, spotify])

  // Resolve Asset Image (e.g. VS Code logo, game artwork)
  const getAssetImage = (activity) => {
    if (!activity?.assets?.large_image) return null
    const { large_image } = activity.assets
    if (large_image.startsWith('mp:external/')) {
      return `https://media.discordapp.net/external/${large_image.replace('mp:external/', '')}`
    }
    return `https://cdn.discordapp.com/app-assets/${activity.application_id}/${large_image}.png`
  }

  const assetImgUrl = primaryActivity ? getAssetImage(primaryActivity) : null
  const avatarUrl = discordUser?.avatar
    ? `https://cdn.discordapp.com/avatars/${discordUser.id}/${discordUser.avatar}.png`
    : null

  return (
    <section id="right-now" className="space-y-6 pt-2">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <span className="w-6 h-6 rounded-full border border-zinc-800 text-[11px] font-mono text-zinc-400 flex items-center justify-center flex-shrink-0">
          01
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-100 tracking-tight whitespace-nowrap">
          Right now
        </h2>
        <div className="h-[1px] bg-zinc-800/80 flex-grow ml-2" />
      </div>

      {/* DISCORD STATUS CARD */}
      <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-4 shadow-sm">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-semibold">
            DISCORD STATUS
          </p>

          {/* Connection Status indicator */}
          {personal.discordId && isConnected ? (
            <span className="text-[10px] font-mono text-emerald-400/90 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Live Sync</span>
            </span>
          ) : (
            <span className="text-[10px] font-mono text-zinc-500">
              {personal.discordId ? 'Connecting...' : 'Preview Mode'}
            </span>
          )}
        </div>

        {/* User Profile Row */}
        <div className="flex items-center gap-3">
          <div className="relative">
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt={discordUser?.username}
                className="w-10 h-10 rounded-full border border-zinc-700 object-cover"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-bold font-mono text-zinc-200">
                {(discordUser?.username || personal.nickname).slice(0, 2).toUpperCase()}
              </div>
            )}
            <span
              className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-zinc-900 ${statusColors[discordStatus] || 'bg-emerald-500'
                }`}
            />
          </div>

          <div>
            <h3 className="text-sm font-bold text-zinc-100 leading-tight">
              {discordUser?.global_name || discordUser?.username || personal.discordUsername || personal.nickname}
            </h3>
            <p className="text-xs text-zinc-400 capitalize">
              {statusLabels[discordStatus] || 'Online'}
            </p>
          </div>
        </div>

        {/* Activity Row: Live Discord Presence / Fallback */}
        <div className="pt-3 border-t border-zinc-800/70">
          {spotify ? (
            /* 1. SPOTIFY ACTIVITY */
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3 min-w-0">
                <img
                  src={spotify.album_art_url}
                  alt={spotify.song}
                  className="w-10 h-10 rounded-xl object-cover border border-zinc-700 flex-shrink-0"
                />
                <div className="space-y-0.5 min-w-0">
                  <p className="text-[10px] font-mono uppercase font-bold tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <Disc className="w-3 h-3 animate-spin" />
                    <span>LISTENING TO SPOTIFY</span>
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-zinc-200 truncate">
                    {spotify.song}
                  </p>
                  <p className="text-xs text-zinc-400 font-mono truncate">
                    by {spotify.artist}
                  </p>
                </div>
              </div>
              {elapsedTime && (
                <span className="text-[11px] font-mono text-zinc-500 whitespace-nowrap">
                  {elapsedTime}
                </span>
              )}
            </div>
          ) : primaryActivity ? (
            /* 2. REAL APP / VS CODE / GAME ACTIVITY */
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3 min-w-0">
                {assetImgUrl ? (
                  <img
                    src={assetImgUrl}
                    alt={primaryActivity.name}
                    className="w-10 h-10 rounded-xl object-cover border border-zinc-700 flex-shrink-0"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-xl bg-teal-950/60 border border-teal-800/40 text-teal-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {primaryActivity.name.toLowerCase().includes('code') ? (
                      <Code2 className="w-5 h-5 text-cyan-400" />
                    ) : (
                      <Gamepad2 className="w-5 h-5 text-indigo-400" />
                    )}
                  </div>
                )}

                <div className="space-y-0.5 min-w-0">
                  <p className="text-[10px] font-mono uppercase font-bold tracking-wider text-cyan-400">
                    {primaryActivity.name.toUpperCase()}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-zinc-200 truncate">
                    {primaryActivity.details || primaryActivity.name}
                  </p>
                  {primaryActivity.state && (
                    <p className="text-xs text-zinc-400 font-mono truncate">
                      {primaryActivity.state}
                    </p>
                  )}
                </div>
              </div>

              {elapsedTime && (
                <span className="text-[11px] font-mono text-zinc-500 whitespace-nowrap">
                  {elapsedTime}
                </span>
              )}
            </div>
          ) : isConnected && discordStatus !== 'offline' ? (
            /* 3. ONLINE BUT NO GAME/CODE RUNNING */
            <div className="flex items-center gap-3 text-xs text-zinc-400 py-1">
              <Laptop className="w-4 h-4 text-emerald-400" />
              <span>Active on Discord, not running any game or code editor.</span>
            </div>
          ) : (
            /* 4. DEFAULT PREVIEW (Matches screenshot when Discord ID is not yet connected) */
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-teal-950/50 border border-teal-800/30 text-teal-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Code2 className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <p className="text-[10px] font-mono uppercase font-bold tracking-wider text-cyan-400">
                    PLAYING
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-zinc-200 truncate">
                    Editing RegressionAnalysis.jsx
                  </p>
                  <p className="text-xs text-zinc-400 font-mono truncate">
                    Workspace: ml-training-web
                  </p>
                </div>
              </div>

              <span className="text-[11px] font-mono text-zinc-500 whitespace-nowrap">
                1h 8m
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
