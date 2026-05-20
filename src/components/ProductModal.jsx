import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function ProductModal({ product, onClose }) {
  const [selectedSize, setSelectedSize] = useState('M')

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!product) return null

  const defaultDesc = "Una pieza esencial para tu día a día, confeccionada con materiales seleccionados de la más alta calidad. Diseñada para ofrecer comodidad superior, durabilidad excepcional y un fit contemporáneo perfecto para complementar cualquier look urbano."

  const sizes = ['S', 'M', 'L', 'XL']

  return (
    <div className="modal-backdrop-wrapper">
      {/* Backdrop overlay */}
      <motion.div
        className="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Modal Content Drawer */}
      <motion.div
        className="modal-content"
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '100%', opacity: 0 }}
        transition={{ type: 'spring', damping: 28, stiffness: 220 }}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar detalles">
          ✕
        </button>

        <div className="modal-body">
          <div className="modal-image-sec">
            <img src={product.img} alt={product.name} />
            {product.tag && <span className="modal-tag">{product.tag}</span>}
          </div>

          <div className="modal-details-sec">
            <p className="modal-category">{product.category || 'Colección 2025'}</p>
            <h2 className="modal-title">{product.name}</h2>
            <p className="modal-price">{product.price}</p>

            <div className="modal-divider" />

            <p className="modal-desc">{product.desc || defaultDesc}</p>

            <div className="modal-size-selector">
              <span className="selector-label">Selecciona tu talla:</span>
              <div className="sizes-grid">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`size-btn${selectedSize === size ? ' active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="modal-cta-group">
              <button
                className="btn-modal-primary"
                onClick={() => {
                  alert(`Añadido: ${product.name} - Talla ${selectedSize}`)
                  onClose()
                }}
              >
                <span>Añadir al carrito</span>
              </button>
            </div>

            <div className="modal-shipping-info">
              <p>🚚 Envío express gratuito a todo Santo Domingo.</p>
              <p>🔄 Devoluciones gratis dentro de los primeros 14 días.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
