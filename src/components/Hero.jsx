import { useState, useEffect } from 'react'
import './Hero.css'

const RELEASE = new Date('2026-05-22T00:00:00')

function getTimeLeft() {
  const now = new Date()
  const diff = RELEASE - now
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, released: true }
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

export default function Hero() {
  const [time, setTime] = useState(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="hero">
      <div className="hero-overlay" />

      <img
        className="hero-bg"
        src="https://upload.wikimedia.org/wikipedia/en/1/15/The_Mandalorian_and_Grogu_logo.jpg"
        alt="The Mandalorian and Grogu"
        onError={e => { e.target.style.display = 'none' }}
      />

      <div className="hero-content">
        <p className="hero-pre">A long time ago in a galaxy far, far away…</p>

        <div className="hero-logo-wrap">
          <div className="crawl-line" />
          <h1 className="hero-title">
            <span className="title-the">The</span>
            <span className="title-main">Mandalorian</span>
            <span className="title-amp">&amp;</span>
            <span className="title-main">Grogu</span>
          </h1>
          <div className="crawl-line" />
        </div>

        {time.released ? (
          <div className="countdown-released">
            <p className="released-text">Jetzt in den Kinos!</p>
            <p className="released-sub">This is The Way.</p>
          </div>
        ) : (
          <div className="countdown-inner">
            {/* Removed 'Ab in die Kinos in' as requested */}
            <div className="countdown-timer">
              <Digit value={time.days} label="Tage" />
              <span className="countdown-sep">:</span>
              <Digit value={time.hours} label="Stunden" />
              <span className="countdown-sep">:</span>
              <Digit value={time.minutes} label="Minuten" />
              <span className="countdown-sep">:</span>
              <Digit value={time.seconds} label="Sekunden" />
            </div>
            <p className="countdown-date" style={{textAlign: 'center', fontWeight: 'bold', fontSize: '1.3em', marginTop: '1em'}}>22. Mai 2026</p>
            <p className="countdown-tagline">„This is The Way.“</p>
          </div>
        )}
      </div>
    </section>
  )
}
