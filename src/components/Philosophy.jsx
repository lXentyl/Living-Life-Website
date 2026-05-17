import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const stats = [
  { number: '100%', label: 'Algodón Premium' },
  { number: '2023', label: 'Fundada en SD' },
  { number: '∞', label: 'Sin Límites' }
]

export default function Philosophy() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section className="philosophy" id="filosofia" ref={ref}>
      <div className="philosophy-text">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Nuestra Filosofía
        </motion.p>
        <motion.blockquote
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.9 }}
        >
          "La ropa no es vanidad.<br />Es identidad."
        </motion.blockquote>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Living Life nace de la convicción de que lo que vistes habla antes de que abras la boca.
          Cada corte, cada textura, cada detalle — pensado para quien sabe exactamente quién es.
        </motion.p>

        <div className="philosophy-stats">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="philosophy-stat"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.15, duration: 0.7 }}
            >
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="philosophy-visual">
        {/* Main background image */}
        <motion.img
          className="philosophy-img"
          src="/images/philosophy-model.png"
          alt="Living Life Fashion"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 1.2, ease: 'easeOut' }}
        />

        {/* Overlay gradient */}
        <div className="philosophy-overlay" />

        {/* Floating brand text */}
        <motion.div
          className="big-letters"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5, duration: 1.2, ease: 'easeOut' }}
        >
          LL
        </motion.div>

        {/* Animated concentric circles */}
        {[1, 2, 3].map((ring) => (
          <motion.div
            key={ring}
            className={`philosophy-ring philosophy-ring-${ring}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4 + ring * 0.2, duration: 1 }}
          />
        ))}

        {/* Badge */}
        <div className="philosophy-badge">
          <span>Desde</span>
          <strong>2023</strong>
          <span>Santo Domingo</span>
        </div>

        {/* Vertical text */}
        <motion.div
          className="philosophy-vertical-text"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          LIVING LIFE ™
        </motion.div>
      </div>
    </section>
  )
}
