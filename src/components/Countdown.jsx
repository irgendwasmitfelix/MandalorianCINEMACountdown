import { useState, useEffect } from 'react'
import './Countdown.css'

const RELEASE = new Date('2026-05-22T00:00:00')

function getTimeLeft() {
  const now = new Date()
  const diff = RELEASE - now

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, released: true }
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    released: false,
  }
}

function Digit({ value, label }) {
  const display = String(value).padStart(2, '0')
  return (
    <div className="countdown-block">
      <div className="countdown-digits">
        <span className="digit">{display[0]}</span>
        <span className="digit">{display[1]}</span>
      </div>
      <span className="countdown-label">{label}</span>
    </div>
  )
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  if (time.released) {
    return (
      <section id="countdown" className="countdown-section">
        <div className="countdown-released">
          <p className="released-text">Der Film ist jetzt in den Kinos!</p>
          <p className="released-sub">This is The Way.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="countdown" className="countdown-section">
      <div className="countdown-inner">
        <p className="countdown-until">Ab in die Kinos in</p>
        <div className="countdown-timer">
          <Digit value={time.days} label="Tage" />
          <span className="countdown-sep">:</span>
          <Digit value={time.hours} label="Stunden" />
          <span className="countdown-sep">:</span>
          <Digit value={time.minutes} label="Minuten" />
          <span className="countdown-sep">:</span>
          <Digit value={time.seconds} label="Sekunden" />
        </div>
        <p className="countdown-date">22. Mai 2026 · Im Kino</p>
        <p className="countdown-tagline">"This is The Way."</p>
      </div>
    </section>
  )
}
