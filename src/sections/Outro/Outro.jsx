import Panel from '../../components/Panel.jsx'
import './Outro.css'

// Three screen heights of normal vertical scrolling.
function Outro() {
  return (
    <div className="outro">
      <Panel label="Outro 1" color="#5b3bc2" />
      <Panel label="Outro 2" color="#7a4fd6" />
      <Panel label="Outro 3" color="#9a6ae8" />
    </div>
  )
}

export default Outro
