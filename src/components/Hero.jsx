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

      {/* --- MISSION 100K CHALLENGE BANNER --- */}
      <div className="mission100k-banner" style={{
        position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 10,
        background: 'linear-gradient(90deg, #c9a84c 0%, #fffbe6 100%)',
        color: '#1a2a44', textAlign: 'center', padding: '1.1em 0 0.7em 0',
        fontWeight: 900, fontSize: '1.15em', letterSpacing: '0.04em', boxShadow: '0 2px 16px rgba(201,168,76,0.13)'
      }}>
        <span role="img" aria-label="rocket">🚀</span> MISSION 100K: SUBSCRIBE ON YOUTUBE TO WIN 1 OF 5 STAR WARS OUTLAWS KEYS!
        <a
          href="https://youtube.com/@theefficientdev"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block', marginLeft: 18, padding: '0.5em 1.5em',
            background: '#cc0000', color: '#fff', borderRadius: 3, fontWeight: 700,
            textDecoration: 'none', fontSize: '1em', boxShadow: '0 2px 8px rgba(204,0,0,0.13)',
            verticalAlign: 'middle', transition: 'background 0.2s',
          }}
          className="subscribe-btn"
        >SUBSCRIBE</a>
      </div>

      <img
        className="hero-bg"
        src="https://upload.wikimedia.org/wikipedia/en/1/15/The_Mandalorian_and_Grogu_logo.jpg"
        alt="The Mandalorian and Grogu"
        onError={e => { e.target.style.display = 'none' }}
      />

      <div className="hero-content">
        <p className="hero-pre">A long time ago in a galaxy far, far away…</p>

        {/* --- SEO/Challenge Section --- */}
        <div className="mission100k-seo" style={{
          margin: '1.5em auto 0 auto', maxWidth: 600, background: 'rgba(32,32,32,0.7)',
          border: '1.5px solid #c9a84c', borderRadius: 6, padding: '1.1em 1.5em',
          color: '#ffe082', fontSize: '1.08em', fontWeight: 500, boxShadow: '0 2px 16px rgba(201,168,76,0.09)'
        }}>
          <strong>Help us reach 100,000 subscribers on <a href="https://youtube.com/@theefficientdev" target="_blank" rel="noopener noreferrer" style={{color:'#fff'}}>YouTube</a> before the movie release!</strong><br />
          If we hit the goal, we’ll give away <b>5 Star Wars Outlaws keys</b> to our subscribers.<br />
          Watch daily shorts, join the hype, and don’t miss your chance to win!<br />
          <span style={{color:'#c9a84c'}}>#Mission100K #StarWarsOutlaws #Giveaway</span>
        </div>

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
