import Panel from '../../components/Panel.jsx'
import './Showcase.css'

// Three screen heights of normal vertical scrolling.
function Showcase() {
  return (
    <div className="showcase">
      <Panel label="Showcase 1" color="#0a7a5a" />
      <Panel label="Showcase 2" color="#12946d" />
      <Panel label="Showcase 3" color="#22ad82" />
    </div>
  )
}

export default Showcase
