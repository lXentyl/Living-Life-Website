import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const products = [
  { name: 'Essential Hoodie', price: 'RD$ 2,800', tag: 'Bestseller', img: '/images/col-hoodie.png', featured: true },
  { name: 'Oversized Tee', price: 'RD$ 1,500', tag: 'Nuevo', img: '/images/col-tee.png' },
  { name: 'Urban Joggers', price: 'RD$ 2,200', tag: null, img: '/images/col-joggers.png' },
  { name: 'Bomber Jacket', price: 'RD$ 3,500', tag: 'Premium', img: '/images/col-bomber.png' }
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: 0.2 + i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  })
}

export default function Collection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="collection" id="coleccion" ref={ref}>
      <div className="collection-header">
        <div>
          <motion.p
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Temporada 2025
          </motion.p>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            La Colección
          </motion.h2>
        </div>
        <motion.a
          href="#"
          className="btn-primary"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span>Ver Todo</span>
        </motion.a>
      </div>

      <div className="collection-grid">
        {products.map((product, i) => (
          <motion.div
            key={i}
            className={`product-card ${product.featured ? 'product-featured' : ''}`}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={i}
          >
            <div className="product-img">
              <img src={product.img} alt={product.name} loading="lazy" />
              <div className="product-overlay">
                <span>Ver Detalle</span>
              </div>
            </div>
            <div className="product-info">
              {product.tag && <span className="product-tag">{product.tag}</span>}
              <p className="product-name">{product.name}</p>
              <p className="product-price">{product.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
