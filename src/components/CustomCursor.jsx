import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })

  useEffect(() => {
    const cursor = cursorRef.current
    const ring = ringRef.current
    if (!cursor || !ring) return

    const onMove = (e) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    }

    const animRing = () => {
      pos.current.rx += (pos.current.mx - pos.current.rx) * 0.1
      pos.current.ry += (pos.current.my - pos.current.ry) * 0.1
      ring.style.left = pos.current.rx + 'px'
      ring.style.top = pos.current.ry + 'px'
      requestAnimationFrame(animRing)
    }

    const onEnter = () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(2.5)'
      ring.style.transform = 'translate(-50%,-50%) scale(1.6)'
      ring.style.borderColor = 'rgba(255,255,255,0.8)'
    }

    const onLeave = () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(1)'
      ring.style.transform = 'translate(-50%,-50%) scale(1)'
      ring.style.borderColor = 'rgba(255,255,255,0.4)'
    }

    document.addEventListener('mousemove', onMove)
    animRing()

    const interactives = document.querySelectorAll('a,button,[class*="card"],[class*="look-item"],[class*="model-card"]')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}
