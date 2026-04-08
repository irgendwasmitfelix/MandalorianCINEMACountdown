import './Characters.css'

const characters = [
  {
    name: 'Din Djarin',
    subtitle: 'Der Mandalorianer',
    img: 'https://img.youtube.com/vi/_pa1KLXuW0Y/maxresdefault.jpg',
    quote: '"I can bring you in warm, or I can bring you in cold."',
    desc:
      'Ein einsamer Kopfgeldjäger aus dem äußeren Rand der Galaxis. Gepanzert mit Beskar-Stahl, loyal bis zum Tod – und Vater einer Legende.',
  },
  {
    name: 'Grogu',
    subtitle: 'Das Kind',
    img: 'https://img.youtube.com/vi/IHWlvwu8t1w/maxresdefault.jpg',
    quote: '"…" (spricht für sich selbst)',
    desc:
      'Ein rätselhaftes Wesen gleicher Spezies wie Meister Yoda. Mächtig in der Macht, zerbrechlich im Herz – und der Grund, warum Mando noch lebt.',
  },
]

export default function Characters() {
  return (
    <section className="characters-section">
      <h2 className="section-title">Die Charaktere</h2>
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
