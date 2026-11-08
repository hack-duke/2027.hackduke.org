import './Panel.css'

// Placeholder panel. Swap for real content as the design lands.
function Panel({ label, color }) {
  return (
    <section className="panel placeholder-panel" style={{ background: color }}>
      <h2>{label}</h2>
    </section>
  )
}

export default Panel
