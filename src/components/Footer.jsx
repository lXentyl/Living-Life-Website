import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Footer() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">LIVING<span> LIFE</span></div>
          <p className="footer-tagline">Viste tu esencia. Desde Santo Domingo para el mundo.</p>
        </div>
        <div className="footer-columns">
          <div className="footer-col">
            <h4>Navegación</h4>
            <ul>
              <li><a href="#coleccion">Colección</a></li>
              <li><a href="#modelos">Modelos</a></li>
              <li><a href="#filosofia">Filosofía</a></li>
              <li><a href="#lookbook">Lookbook</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Social</h4>
            <ul>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Instagram</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>TikTok</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>WhatsApp</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Twitter / X</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Términos</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Privacidad</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Envíos</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Devoluciones</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copy">© {new Date().getFullYear()} Living Life. Todos los derechos reservados.</p>
        <p className="footer-credit">Santo Domingo, República Dominicana</p>
      </div>
    </motion.footer>
  )
}
