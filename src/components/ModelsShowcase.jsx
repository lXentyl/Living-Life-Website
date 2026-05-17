import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useRef } from 'react'

const models = [
  { name: 'Hoodie Oversized', category: 'Outerwear', desc: 'Corte amplio, tela premium 380gsm. El statement piece definitivo.', price: 'RD$ 3,200', img: '/images/hoodie.png' },
  { name: 'Camiseta Essential', category: 'Basics', desc: 'Algodón orgánico, fit relajado. La base de todo guardarropa.', price: 'RD$ 1,500', img: '/images/tshirt.png' },
  { name: 'Joggers Urban', category: 'Bottoms', desc: 'Tejido técnico, silueta moderna. Del gym a la calle sin parar.', price: 'RD$ 2,800', img: '/images/joggers.png' },
  { name: 'Chaqueta Bomber', category: 'Outerwear', desc: 'Nylon militar, forro satinado. Actitud en cada puntada.', price: 'RD$ 5,800', img: '/images/bomber.png' },
  { name: 'Tank Top Minimal', category: 'Basics', desc: 'Ribbed cotton, corte ajustado. Simplicidad que habla fuerte.', price: 'RD$ 950', img: '/images/tanktop.png' },
  { name: 'Shorts Cargo', category: 'Bottoms', desc: 'Utility pockets, tela ripstop. Para los que no se quedan quietos.', price: 'RD$ 2,200', img: '/images/shorts.png' }
]

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  })
}

function ModelCard({ model, index, inView }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-8px)`
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0px)'
  }

  return (
    <motion.div
      className="model-card"
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      custom={index}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform 0.3s ease, border-color 0.5s ease' }}
    >
      <div className="model-card-img">
        <img src={model.img} alt={model.name} loading="lazy" />
        <div className="model-card-overlay">
          <span>Ver Detalles</span>
        </div>
      </div>
      <div className="model-card-info">
        <p className="model-card-category">{model.category}</p>
        <h3 className="model-card-name">{model.name}</h3>
        <p className="model-card-desc">{model.desc}</p>
        <p className="model-card-price">{model.price}</p>
      </div>
    </motion.div>
  )
}

export default function ModelsShowcase() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section className="models" id="modelos" ref={ref}>
      <div className="models-header">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Prendas Destacadas
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          Modelos de Ropa
        </motion.h2>
        <motion.p
          className="models-subtitle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Cada prenda diseñada con intención. Sin excesos, sin compromisos — solo lo esencial elevado al máximo.
        </motion.p>
      </div>

      <div className="models-grid">
        {models.map((model, i) => (
          <ModelCard key={i} model={model} index={i} inView={inView} />
        ))}
      </div>
    </section>
  )
}
