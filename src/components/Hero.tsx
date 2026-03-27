import { useEffect, useState } from 'react'
import './Hero.css'

const LINES = [
  { prompt: '~', cmd: 'whoami', delay: 400 },
  { prompt: '~', cmd: null, out: 'westwater-studio', delay: 200 },
  { prompt: '~', cmd: 'cat mission.txt', delay: 600 },
  { prompt: '~', cmd: null, out: 'Building tools for real problems.', delay: 200 },
  { prompt: '~', cmd: 'ls projects/', delay: 700 },
  { prompt: '~', cmd: null, out: 'weeksee/   retroation/   stitch-n-row/   tendy/', delay: 200 },
]

type LineState = {
  prompt: string
  cmd: string | null
  out?: string
  typed: string
  done: boolean
}

export default function Hero() {
  const [lines, setLines] = useState<LineState[]>([])
  const [phase, setPhase] = useState(0) // which LINES entry we're on
  const [charIndex, setCharIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (phase >= LINES.length) return
    const entry = LINES[phase]

    // Delay before starting this line
    const startTimer = setTimeout(() => {
      const target = entry.cmd ?? entry.out ?? ''

      if (charIndex < target.length) {
        const typingTimer = setTimeout(() => {
          setLines(prev => {
            const next = [...prev]
            if (charIndex === 0) {
              next.push({ ...entry, typed: target[0], done: false })
            } else {
              next[next.length - 1] = {
                ...next[next.length - 1],
                typed: target.slice(0, charIndex + 1),
              }
            }
            return next
          })
          setCharIndex(i => i + 1)
        }, entry.cmd ? 55 : 18) // commands type slower, output faster
        return () => clearTimeout(typingTimer)
      } else {
        // Line complete
        setLines(prev => {
          const next = [...prev]
          next[next.length - 1] = { ...next[next.length - 1], done: true }
          return next
        })
        setPhase(p => p + 1)
        setCharIndex(0)
      }
    }, charIndex === 0 ? entry.delay : 0)

    return () => clearTimeout(startTimer)
  }, [phase, charIndex])

  // Blinking cursor
  useEffect(() => {
    const t = setInterval(() => setShowCursor(v => !v), 530)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="hero">
      <div className="hero-terminal">
        <div className="terminal-bar">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
          <span className="terminal-title">westwater-studio — zsh</span>
        </div>
        <div className="terminal-body">
          {lines.map((line, i) => (
            <div key={i} className="terminal-line">
              {line.cmd !== null ? (
                <>
                  <span className="prompt">
                    <span className="prompt-user">grady</span>
                    <span className="prompt-at">@</span>
                    <span className="prompt-host">westwater</span>
                    <span className="prompt-sep"> {line.prompt} % </span>
                  </span>
                  <span className="cmd">{line.typed}</span>
                  {!line.done && i === lines.length - 1 && (
                    <span className={`cursor ${showCursor ? 'cursor-on' : 'cursor-off'}`}>█</span>
                  )}
                </>
              ) : (
                <span className="output">{line.typed}</span>
              )}
            </div>
          ))}
          {phase >= LINES.length && (
            <div className="terminal-line">
              <span className="prompt">
                <span className="prompt-user">grady</span>
                <span className="prompt-at">@</span>
                <span className="prompt-host">westwater</span>
                <span className="prompt-sep"> ~ % </span>
              </span>
              <span className={`cursor ${showCursor ? 'cursor-on' : 'cursor-off'}`}>█</span>
            </div>
          )}
        </div>
      </div>

      <div className="hero-tagline">
        <h1>Westwater Studio</h1>
        <p>Independent software. Small tools. Real problems.</p>
      </div>
    </section>
  )
}
