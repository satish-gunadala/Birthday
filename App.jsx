import { useState, useEffect } from 'react'
import './App.css'

const images = [
  'IMG_0463.JPG',
  'IMG_0939.jpg',
  'IMG_0942.jpg',
  'IMG_1982.jpg',
  'IMG_1987.jpg',
  'IMG_2002.JPG',
  'IMG_2173.JPG',
  'IMG_2632.jpg',
  'IMG_2651.JPG',
  'IMG_2765.JPG',
  'IMG_2791.JPG',
  'IMG_3694.JPG',
  'IMG_3697.JPG',
  'IMG_3891.jpg',
  'IMG_4780.JPG',
  'IMG_5059.JPG',
  'IMG_5061.jpg',
  'IMG_5219.JPG',
  'IMG_5284.jpg',
  'IMG_5287.jpg',
  'IMG_5288.jpg',
  'IMG_5292.jpg',
  'IMG_5363.jpg',
]

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [carouselIndex, setCarouselIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCarouselIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCarouselIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <div className="app-container">
      {/* Hero Section with Rotating Image */}
      <header className="app-header">
        <div className="hero-section">
          <img 
            src={`/Images/${images[currentImageIndex]}`}
            alt="Memory"
            className="hero-image"
          />
          <div className="hero-overlay">
            <h1>💕 Happy Birthday to You! 💕</h1>
            <p>A collection of our beautiful memories together</p>
          </div>
        </div>
      </header>

      <main className="app-main">
        {/* Carousel Section */}
        <section className="carousel-section">
          <h2>✨ Our Story in Pictures ✨</h2>
          <div className="carousel-container">
            <button className="carousel-btn prev" onClick={goToPrevious}>
              ❮
            </button>
            <div className="carousel-image-wrapper">
              <img 
                src={`/Images/${images[carouselIndex]}`}
                alt={`Memory ${carouselIndex + 1}`}
                className="carousel-image"
              />
              <div className="image-counter">
                {carouselIndex + 1} / {images.length}
              </div>
            </div>
            <button className="carousel-btn next" onClick={goToNext}>
              ❯
            </button>
          </div>
        </section>

        {/* Message Section */}
        <section className="message-section">
          <h2>💌 A Special Message</h2>
          <p>
            Every moment with you is precious. These photos capture the joy, 
            laughter, and love we share. Here's to many more beautiful memories! 🎉
          </p>
        </section>

        {/* Gallery Grid */}
        <section className="gallery-section">
          <h2>📸 Memory Gallery 📸</h2>
          <div className="gallery-grid">
            {images.map((image, index) => (
              <div key={index} className="gallery-item">
                <img 
                  src={`/Images/${image}`}
                  alt={`Gallery ${index + 1}`}
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <span>{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Celebration Section */}
        <section className="celebration-section">
          <h2>🎂 Let's Celebrate! 🎂</h2>
          <div className="celebration-content">
            <p>You deserve all the happiness in the world!</p>
            <div className="emoji-celebration">
              🎉 🎈 🎁 🌹 💝 ✨ 🎊
            </div>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p>Made with 💕 for someone special</p>
        <p>&copy; 2026 Birthday App</p>
      </footer>
    </div>
  )
}

export default App
