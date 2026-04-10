import { useState } from 'react'
import './Gallery.css'

const images = [
  {
    src: 'https://wallpapercave.com/wp/wp14136007.png',
    alt: 'Mandalorian and Grogu HD Wallpaper',
    label: 'Mando & Grogu',
    res: '2912×1632',
  },
  {
    src: 'https://wallpapercave.com/wp/wp14136194.jpg',
    alt: 'The Mandalorian And Grogu Wallpaper HD',
    label: 'The Mandalorian',
    res: '3840×2214',
  },
  {
    src: 'https://wallpapercave.com/wp/wp14136174.jpg',
    alt: 'The Mandalorian & Grogu Movie Completes',
    label: 'The Movie 2026',
    res: '2000×1000',
  },
  {
    src: 'https://wallpapercave.com/wp/wp14136160.jpg',
    alt: 'Download 4K The Mandalorian Grogu',
    label: 'Mando & Grogu 4K',
    res: '1920×1080',
  },
  {
    src: 'https://wallpapercave.com/wp/wp14136026.jpg',
    alt: 'Tv 4K The Mandalorian',
    label: 'The Mandalorian 4K',
    res: '1920×1920',
  },
  {
    src: 'https://wallpapercave.com/wp/wp14136179.jpg',
    alt: 'Mandalorian and Baby Yoda Wallpaper HD',
    label: 'Mando & Grogu Mobile',
    res: '1183×2560',
  },
  // Alphacoders
  {
    src: 'https://images3.alphacoders.com/110/thumb-1920-1108129.jpg',
    alt: 'Grogu Baby Yoda – The Mandalorian 4K',
    label: 'Grogu 4K',
    res: '3840×2160',
  },
  {
    src: 'https://images.alphacoders.com/135/thumb-1920-1353795.png',
    alt: 'Mandalorian and Grogu – Desert Planet',
    label: 'Mando & Grogu Desert',
    res: '2912×1632',
  },
  {
    src: 'https://images.alphacoders.com/129/thumb-1920-1298487.jpg',
    alt: 'Grogu in Mando\'s arms – green sky',
    label: 'Grogu & Mando',
    res: '2500×1406',
  },
  {
    src: 'https://images.alphacoders.com/140/thumb-1920-1403422.jpg',
    alt: 'Mando holds Grogu – fiery sky',
    label: 'Fiery Sky',
    res: '3840×2160',
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
      <h2 className="section-title">Gallery</h2>
      <div className="section-divider" />

      <div className="gallery-grid">
        {images.map((img, i) => (
          <button
            key={i}
            className={`gallery-item${failed.has(i) ? ' gallery-item--hidden' : ''}`}
            onClick={() => !failed.has(i) && setLightbox(img)}
            aria-label={`Enlarge image: ${img.alt}`}
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
          aria-label="Image preview"
        >
          <button
            className="lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            ✕
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="lightbox-img"
            onClick={e => e.stopPropagation()}
          />
          <p className="lightbox-caption">
            {lightbox.alt}
            {lightbox.res && <span className="lightbox-res"> · {lightbox.res}</span>}
          </p>
          <a
            href={lightbox.src}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="lightbox-download"
            onClick={e => e.stopPropagation()}
          >
            ↓ Herunterladen
          </a>
        </div>
      )}
    </section>
  )
}
