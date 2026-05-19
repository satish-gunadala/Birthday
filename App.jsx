import { useState, useEffect } from 'react'
import './App.css'

const images = [
  'IMG_0463.JPG',
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
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showBirthdayGreeting, setShowBirthdayGreeting] = useState(false)
  const [showProposal, setShowProposal] = useState(false)
  const [answer, setAnswer] = useState(null)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (showBirthdayGreeting || showProposal) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % images.length
        if (next === 0) {
          // After all images shown once, show birthday greeting
          setTimeout(() => setShowBirthdayGreeting(true), 1000)
          return prev
        }
        return next
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [showBirthdayGreeting, showProposal])

  const handleYes = () => {
    setAnswer('yes')
  }

  const handleNo = () => {
    setAnswer('no')
  }

  const imagePath = `/Images/${images[currentIndex]}`

  // Birthday Greeting Page
  if (showBirthdayGreeting && !showProposal) {
    return (
      <div className="birthday-container">
        <div className="birthday-content">
          <h2 className="birthday-wish">🎂 Happy Birthday, Babe! 🎂</h2>
          <p className="birthday-full-message">
            This is your last birthday as my girlfriend.
            <br />
            <span className="birthday-highlight">Next year, Let's celebrate as husband and wife! 💍</span>
          </p>
          <button 
            className="btn btn-proceed"
            onClick={() => setShowProposal(true)}
          >
            Continue to the Special Moment ➜
          </button>
        </div>
      </div>
    )
  }

  // Proposal Page
  if (showProposal) {
    return (
      <div className="proposal-container" style={{
        backgroundImage: 'url(/Images/propose.png)',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}>
        {answer === null && (
          <>
            <div className="proposal-content">
              <h1 className="proposal-title">💍 Will You Marry Me? 💍</h1>
              <p className="proposal-text">
                Every moment with you has been the most beautiful journey of my life.
                You make me smile, you make me laugh, and you make me believe in forever.
                I want to spend the rest of my days with you.
              </p>
              <div className="proposal-buttons">
                <button className="btn btn-yes" onClick={handleYes}>
                  YES! 💕
                </button>
                <button className="btn btn-no" onClick={handleNo}>
                  Maybe Later
                </button>
              </div>
            </div>
            <div className="floating-hearts">
              {[...Array(15)].map((_, i) => (
                <div key={i} className="heart">💕</div>
              ))}
            </div>
          </>
        )}

        {answer === 'yes' && (
          <div className="celebration">
            <div className="celebration-inner">
              <h1>🎉 YES! YES! YES! 🎉</h1>
              <p className="celebration-thank">Thank you for saying YES! 💕</p>
              
              <div className="love-quotes">
                <p className="quote">
                  "I love you more than any words could ever express. 
                  You are my today and all my tomorrows." 💑
                </p>
                <p className="quote-separator">✨ 💍 ✨</p>
                <p className="quote">
                  "Together, we will create beautiful memories and 
                  build a love story that lasts forever." 🌹
                </p>
                <p className="quote-separator">💫 💕 💫</p>
                <p className="quote">
                  "In this life, I want to grow old with you. 
                  I want to witness all your beautiful tomorrows. - With Love "Satish"" 🥰
                </p>
              </div>

              <p className="celebration-final">You've made me the happiest person alive! 💕✨</p>
            </div>
            <div className="confetti">
              {[...Array(30)].map((_, i) => (
                <div key={i} className="confetti-piece">🎊</div>
              ))}
            </div>
          </div>
        )}

        {answer === 'no' && (
          <div className="try-again">
            <h1>🥺 Are you sure?</h1>
            <button className="btn btn-yes" onClick={() => setAnswer(null)}>
              Let me reconsider 💭
            </button>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="slideshow-container">
      <div className="slideshow-wrapper">
        <img
          src={imagePath}
          alt={`Memory ${currentIndex + 1}`}
          className="slideshow-image"
          key={currentIndex}
        />
        <div className="image-counter">
          {currentIndex + 1} / {images.length}
        </div>
        
        <div className="image-controls">
          <button
            className="control-btn"
            onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
          >
            ❮ Previous
          </button>
          <button
            className="control-btn"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? '⏸ Pause' : '▶ Play'}
          </button>
          <button
            className="control-btn"
            onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
          >
            Next ❯
          </button>
        </div>
      </div>

      <audio autoPlay loop>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
      </audio>

      <div className="slideshow-footer">
        <p>💕 A Journey Through Our Love 💕</p>
      </div>
    </div>
  )
}

export default App
