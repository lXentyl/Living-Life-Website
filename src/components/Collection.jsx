import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.15, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  })
}

const products = [
  { name: 'Hoodie Oversized — Obsidian', price: 'RD$ 3,200', tag: 'Destacado', cls: 'p1' },
  { name: 'Chaqueta Structured — Noir', price: 'RD$ 5,800', cls: 'p2' },
  { name: 'Tee Minimal — Charcoal', price: 'RD$ 1,500', cls: 'p3' },
  { name: 'Cargo Pant — Slate', price: 'RD$ 4,200', cls: 'p4' }
]

export default function Collection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="collection" id="coleccion" ref={ref}>
      <motion.div
        className="collection-header"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div>
          <p className="section-label">Temporada 2025</p>
          <h2 className="section-title">La Colección</h2>
        </div>
        <a href="#" className="btn-primary"><span>Ver Todo</span></a>
      </motion.div>

      <div className="collection-grid">
        {products.map((p, i) => (
          <motion.div
            key={i}
            className="product-card"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={i}
            style={i === 0 ? {} : i < 3 ? { display: 'flex', flexDirection: 'column', gap: '1.5rem' } : undefined}
          >
            <div className={`product-img ${p.cls}`}>
              <div className="placeholder"><div className="cloth-shape" /></div>
            </div>
            <div className="product-info">
              {p.tag && <span className="product-tag">{p.tag}</span>}
              <p className="product-name">{p.name}</p>
              <p className="product-price">{p.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
