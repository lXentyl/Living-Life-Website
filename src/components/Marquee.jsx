export default function Marquee() {
  const items = [
    'Living Life', 'Nueva Colección 2025', 'Diseño Sin Límites',
    'Viste Tu Esencia', 'Santo Domingo', 'Moda Consciente'
  ]
  const repeated = [...items, ...items]

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {repeated.map((text, i) => (
          <span key={i}>
            {text}
            <span className="dot" style={{ marginLeft: '2rem' }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
