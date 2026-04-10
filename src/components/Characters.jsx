import './Characters.css'

const characters = [
  {
    name: 'Din Djarin',
    subtitle: 'The Mandalorian',
    img: 'https://img.youtube.com/vi/_pa1KLXuW0Y/maxresdefault.jpg',
    quote: '"I can bring you in warm, or I can bring you in cold."',
    desc:
      'A lone bounty hunter from the Outer Rim of the galaxy. Armored with Beskar steel, loyal to the end – and father of a legend.',
  },
  {
    name: 'Grogu',
    subtitle: 'The Child',
    img: 'https://img.youtube.com/vi/IHWlvwu8t1w/maxresdefault.jpg',
    quote: '"…" (speaks for himself)',
    desc:
      'A mysterious being of the same species as Master Yoda. Powerful in the Force, fragile at heart – and the reason Mando is still alive.',
  },
]

export default function Characters() {
  return (
    <section className="characters-section">
      <h2 className="section-title">Characters</h2>
      <div className="section-divider" />

      <div className="characters-grid">
        {characters.map(c => (
          <div key={c.name} className="char-card">
            <div className="char-img-wrap">
              <img
                src={c.img}
                alt={c.name}
                className="char-img"
              />
              <div className="char-img-overlay" />
            </div>
            <div className="char-info">
              <h3 className="char-name">{c.name}</h3>
              <p className="char-subtitle">{c.subtitle}</p>
              <p className="char-quote">{c.quote}</p>
              <p className="char-desc">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
