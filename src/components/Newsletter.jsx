import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const perks = [
  { icon: '◆', text: 'Acceso anticipado a drops' },
  { icon: '◆', text: 'Descuentos exclusivos' },
  { icon: '◆', text: 'Contenido detrás de cámara' }
]

export default function Newsletter() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section className="newsletter" id="contacto" ref={ref}>
      <div>
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Mantente al día
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.8 }}
        >
          Sé el primero en <em>vivirlo.</em>
        </motion.h2>
        <div className="newsletter-perks">
          {perks.map((perk, i) => (
            <motion.div
              key={i}
              className="newsletter-perk"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
            >
              <span className="perk-icon">{perk.icon}</span>
              <span className="perk-text">{perk.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        className="newsletter-form"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="form-group">
          <input type="email" placeholder="Tu correo electrónico" />
          <button type="button">Unirme</button>
        </div>
        <p className="form-note">Sin spam. Solo lo que importa.</p>
      </motion.div>
    </section>
  )
}
