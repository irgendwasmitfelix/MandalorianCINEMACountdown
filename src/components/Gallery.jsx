import { useState } from 'react'
import './Gallery.css'

// Landscape wallpaper-style Mandalorian promotional images
const images = [
  {
    src: 'https://lumiere-a.akamaihd.net/v1/images/wbw_dlp_mandalorian_rmt_09_c1ac93f8.jpeg',
    alt: 'The Mandalorian – Beskar Armor',
    label: 'The Mandalorian',
  },
  {
    src: 'https://lumiere-a.akamaihd.net/v1/images/grogu_main_6b6f8e20.jpeg',
    alt: 'Grogu – Das Kind',
    label: 'Grogu',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/en/2/26/The_Mandalorian_Season_2.jpg',
    alt: 'The Mandalorian Staffel 2',
    label: 'Staffel 2',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/en/1/1d/The_Mandalorian_Season_3_poster.jpg',
    alt: 'The Mandalorian Staffel 3',
    label: 'Staffel 3',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/en/1/15/The_Mandalorian_and_Grogu_logo.jpg',
    alt: 'The Mandalorian & Grogu – Der Film',
    label: 'Der Film 2026',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/en/8/8d/The_Mandalorian_Season_1.jpg',
    alt: 'The Mandalorian Staffel 1',
    label: 'Staffel 1',
  },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)
  const [failed, setFailed] = useState(new Set())

  const handleError = (i) => {
    setFailed(prev => new Set([...prev, i]))
  }

  return (
    <section className="gallery-section">
      <h2 className="section-title">Galerie</h2>
      <div className="section-divider" />

      <div className="gallery-grid">
        {images.map((img, i) => (
          <button
            key={i}
            className={`gallery-item${failed.has(i) ? ' gallery-item--hidden' : ''}`}
            onClick={() => !failed.has(i) && setLightbox(img)}
            aria-label={`Bild vergrößern: ${img.alt}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              onError={() => handleError(i)}
            />
            <div className="gallery-overlay">
              <span className="gallery-label">{img.label}</span>
            </div>
          </button>
        ))}
      </div>

      {lightbox && (
        <div
          className="lightbox"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Bild-Vorschau"
        >
          <button
            className="lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label="Schließen"
          >
            ✕
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="lightbox-img"
            onClick={e => e.stopPropagation()}
          />
          <p className="lightbox-caption">{lightbox.alt}</p>
        </div>
      )}
    </section>
  )
}
