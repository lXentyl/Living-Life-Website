import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const looks = [
  { num: '01', label: 'Urban', desc: 'Estilo callejero sin compromiso', img: '/images/look-urban.png' },
  { num: '02', label: 'Night', desc: 'Para las noches que no se olvidan', img: '/images/look-night.png' },
  { num: '03', label: 'Raw', desc: 'Sin filtros, sin pretensiones', img: '/images/look-raw.png' },
  { num: '04', label: 'Edge', desc: 'Donde el límite no existe', img: '/images/look-edge.png' },
  { num: '05', label: 'Soul', desc: 'Lo que vistes desde el alma', img: '/images/look-soul.png' }
]

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: 0.15 + i * 0.12, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  })
}

export default function Lookbook() {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true })

  return (
    <section className="lookbook" id="lookbook" ref={ref}>
      <motion.p
        className="section-label"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Editorial
      </motion.p>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.8 }}
      >
        Lookbook
      </motion.h2>
      <motion.p
        className="lookbook-desc"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Cinco looks curados para cada momento de tu vida. Sin reglas, sin límites.
      </motion.p>

      <div className="lookbook-bento">
        {looks.map((look, i) => (
          <motion.div
            key={i}
            className={`bento-item bento-item-${i + 1}`}
            variants={itemVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={i}
          >
            <img src={look.img} alt={`Look ${look.label}`} loading="lazy" />
            <div className="bento-overlay">
              <span className="bento-num">{look.num}</span>
              <h3 className="bento-label">{look.label}</h3>
              <p className="bento-desc">{look.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="lookbook-cta"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <a href="#" className="btn-primary"><span>Ver Lookbook Completo</span></a>
      </motion.div>
    </section>
  )
}
