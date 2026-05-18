import { motion } from 'framer-motion'
import { useMemo } from 'react'
import HeroVideo from './HeroVideo'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay) => ({
    opacity: 1, y: 0,
    transition: { delay, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }
  })
}

export default function Hero() {
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100 + '%',
      top: Math.random() * 100 + '%',
      delay: Math.random() * 5 + 's',
      duration: 6 + Math.random() * 6 + 's',
      size: 1 + Math.random() * 2 + 'px'
    }))
  }, [])

  return (
    <section className="hero">
      <HeroVideo />

      <div className="hero-particles">
        {particles.map(p => (
          <div
            key={p.id}
            className="hero-particle"
            style={{
              left: p.left, top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
              width: p.size, height: p.size
            }}
          />
        ))}
      </div>

      {/* Giant animated brand name */}
      <div className="hero-brand">
        <motion.div
          className="hero-brand-line"
          initial={{ opacity: 0, y: 80, skewY: 4 }}
          animate={{ opacity: 1, y: 0, skewY: 0 }}
          transition={{ delay: 0.3, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {'LIVING'.split('').map((char, i) => (
            <motion.span
              key={`living-${i}`}
              className="hero-brand-char"
              initial={{ opacity: 0, y: 100, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
        <motion.div
          className="hero-brand-line"
          initial={{ opacity: 0, y: 80, skewY: -4 }}
          animate={{ opacity: 1, y: 0, skewY: 0 }}
          transition={{ delay: 0.6, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {'LIFE'.split('').map((char, i) => (
            <motion.span
              key={`life-${i}`}
              className="hero-brand-char hero-brand-char-outline"
              initial={{ opacity: 0, y: 100, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* Animated decorative line through the brand */}
        <motion.div
          className="hero-brand-divider"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.4, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>

      <motion.p
        className="hero-eyebrow"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1.6}
      >
        Nueva Colección — 2025
      </motion.p>

      <motion.p
        className="hero-tagline"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1.8}
      >
        Viste tu <em>esencia.</em>
      </motion.p>

      <motion.div className="hero-bottom" variants={fadeUp} initial="hidden" animate="visible" custom={2.0}>
        <p className="hero-sub">Ropa diseñada para quienes viven sin disculpas. Cada pieza, una declaración.</p>
        <div className="hero-cta">
          <a href="#coleccion" className="btn-primary"><span>Ver Colección</span></a>
          <span className="hero-scroll">Descubrir</span>
        </div>
      </motion.div>

      <motion.div
        className="hero-line"
        initial={{ height: 0 }}
        animate={{ height: 120 }}
        transition={{ delay: 2.2, duration: 1.2, ease: 'easeOut' }}
      />
    </section>
  )
}
