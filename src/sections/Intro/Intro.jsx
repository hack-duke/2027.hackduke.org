import Panel from '../../components/Panel.jsx'
import Hero from './panels/Hero.jsx'

// Three screen heights of normal vertical scrolling.
function Intro() {
  return (
    <div className="intro">
      <Hero />
      <Panel label="Intro 2" color="#1f5fd6" />
      <Panel label="Intro 3" color="#3b7be8" />
    </div>
  )
}

export default Intro
