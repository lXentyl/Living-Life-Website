import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SunIcon = () => (
  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
)

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light')
  }

  const navLinks = [
    { href: '#coleccion', label: 'Colección' },
    { href: '#modelos', label: 'Modelos' },
    { href: '#filosofia', label: 'Filosofía' },
    { href: '#lookbook', label: 'Lookbook' },
    { href: '#contacto', label: 'Contacto' },
  ]

  return (
    <>
      <motion.nav
        className={scrolled ? 'scrolled' : ''}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <a href="#" className="nav-logo">Living Life</a>

        <ul className="nav-links">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Cambiar tema">
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            className={`nav-hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Abrir menú"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="nav-mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="nav-mobile-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="nav-mobile-header">
                <span className="nav-logo">Living Life</span>
                <button
                  className="nav-mobile-close"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Cerrar menú"
                >✕</button>
              </div>

              <ul className="nav-mobile-links">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                  >
                    <a href={link.href} onClick={() => setMenuOpen(false)}>
                      <span className="nav-mobile-num">0{i + 1}</span>
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="nav-mobile-footer">
                <button className="theme-toggle" onClick={toggleTheme} aria-label="Cambiar tema">
                  {dark ? <SunIcon /> : <MoonIcon />}
                </button>
                <p>© 2025 Living Life</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
