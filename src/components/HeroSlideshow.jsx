import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    src: '/images/hero-1.png',
    alt: 'Modelo vistiendo sudadera urbana oversize de la nueva colección Living Life',
    kenBurns: { scale: [1, 1.15], x: ['0%', '3%'], y: ['0%', '-2%'] },
  },
  {
    src: '/images/hero-2.png',
    alt: 'Estilo de vida urbano con prendas minimalistas de alta calidad de Living Life',
    kenBurns: { scale: [1.08, 1], x: ['2%', '-1%'], y: ['-1%', '2%'] },
  },
  {
    src: '/images/hero-3.png',
    alt: 'Diseño de ropa urbana premium de la colección 2025 de Living Life',
    kenBurns: { scale: [1, 1.12], x: ['-2%', '2%'], y: ['1%', '-1%'] },
  },
]

const SLIDE_DURATION = 5000 // ms each slide is visible
const TRANSITION_DURATION = 1.8 // seconds for crossfade

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const loadedCount = useRef(0)

  // Preload all images
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image()
      img.src = slide.src
      img.onload = () => {
        loadedCount.current++
        if (loadedCount.current >= slides.length) {
          setIsLoaded(true)
        }
      }
    })
  }, [])

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  useEffect(() => {
    if (!isLoaded) return
    const timer = setInterval(advance, SLIDE_DURATION)
    return () => clearInterval(timer)
  }, [advance, isLoaded])

  return (
    <div className="hero-video">
      {/* Cinematic grain overlay */}
      <div className="hero-video-grain" />

      {/* Vignette */}
      <div className="hero-video-vignette" />

      {/* Horizontal film lines */}
      <div className="hero-video-scanlines" />

      {/* Slide images with Ken Burns */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="hero-video-slide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: TRANSITION_DURATION, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.img
            src={slides[current].src}
            alt={slides[current].alt}
            draggable={false}
            initial={{
              scale: slides[current].kenBurns.scale[0],
              x: slides[current].kenBurns.x[0],
              y: slides[current].kenBurns.y[0],
            }}
            animate={{
              scale: slides[current].kenBurns.scale[1],
              x: slides[current].kenBurns.x[1],
              y: slides[current].kenBurns.y[1],
            }}
            transition={{
              duration: SLIDE_DURATION / 1000 + TRANSITION_DURATION,
              ease: 'linear',
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Bottom gradient fade into content */}
      <div className="hero-video-fade-bottom" />

      {/* Side gradient fades */}
      <div className="hero-video-fade-left" />
      <div className="hero-video-fade-right" />

      {/* Loading state */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            className="hero-video-loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-video-loader-bar" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slide indicators */}
      {isLoaded && (
        <div className="hero-video-indicators">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hero-video-dot${i === current ? ' active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
