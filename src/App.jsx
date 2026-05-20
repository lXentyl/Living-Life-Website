import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Collection from './components/Collection'
import ModelsShowcase from './components/ModelsShowcase'
import Philosophy from './components/Philosophy'
import Lookbook from './components/Lookbook'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import ProductModal from './components/ProductModal'

export default function App() {
  const [activeProduct, setActiveProduct] = useState(null)

  return (
    <>
      <a href="#main-content" className="skip-link">Saltar al contenido principal</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Marquee />
        <Collection onOpenDetails={setActiveProduct} />
        <ModelsShowcase onOpenDetails={setActiveProduct} />
        <Philosophy />
        <Lookbook />
        <Newsletter />
      </main>
      <Footer />

      <AnimatePresence>
        {activeProduct && (
          <ProductModal product={activeProduct} onClose={() => setActiveProduct(null)} />
        )}
      </AnimatePresence>
    </>
  )
}
