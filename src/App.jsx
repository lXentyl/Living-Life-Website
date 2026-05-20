import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Collection from './components/Collection'
import ModelsShowcase from './components/ModelsShowcase'
import Philosophy from './components/Philosophy'
import Lookbook from './components/Lookbook'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Saltar al contenido principal</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Marquee />
        <Collection />
        <ModelsShowcase />
        <Philosophy />
        <Lookbook />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
