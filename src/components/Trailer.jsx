import './Trailer.css'

// Official "The Mandalorian & Grogu" trailer – YouTube ID
const TRAILER_ID = 'IHWlvwu8t1w'

export default function Trailer() {
  return (
    <section className="trailer-section">
      <h2 className="section-title">Offizieller Trailer</h2>
      <div className="section-divider" />

      <div className="trailer-wrap">
        <div className="trailer-glow" />
        <div className="trailer-frame">
          <iframe
            src={`https://www.youtube.com/embed/${TRAILER_ID}?rel=0&modestbranding=1`}
            title="The Mandalorian & Grogu – Offizieller Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        {/* Removed German release caption as requested */}
      </div>
    </section>
  )
}
