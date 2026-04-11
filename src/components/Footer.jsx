import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <span className="footer-title">The Mandalorian &amp; Grogu</span>
              <span className="footer-sub">May 22, 2026 · In theaters</span>
        </div>

        <div className="footer-divider" />

        <div className="footer-links">
          <a
            href="https://www.starwars.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            StarWars.com
          </a>
          <a
            href="https://www.youtube.com/watch?v=IHWlvwu8t1w"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
                Official Trailer
          </a>
          <a
            href="https://www.disneyplus.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Disney+
          </a>
        </div>

        <p className="footer-disclaimer">
              This site is a fan project. Star Wars, The Mandalorian and all related characters and brand names are property of Lucasfilm Ltd. & Disney. All rights reserved.
        </p>

        <p className="footer-tagline">"This is The Way."</p>
        <p className="footer-challenge" style={{marginTop:'1.2em',color:'#ffe082',fontWeight:600}}>
          <span role="img" aria-label="rocket">🚀</span> <b>MISSION 100K:</b> Subscribe to <a href="https://youtube.com/@theefficientdev" target="_blank" rel="noopener noreferrer" style={{color:'#fff'}}>youtube.com/@theefficientdev</a> for a chance to win 1 of 5 Star Wars Outlaws keys if we reach 100,000 subs by the movie release!
        </p>

        <div className="footer-divider" style={{ marginTop: '2rem' }} />

        <a
          href="https://www.paypal.com/paypalme/Sparky512"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-coffee"
        >
          <span className="footer-coffee-icon">☕</span>
          Buy me a Kaff'a (Caf) for the Way
        </a>
      </div>
    </footer>
  )
}
