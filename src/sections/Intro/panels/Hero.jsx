import tempLanding from '../../../assets/temp-landing-page.svg'
import './Hero.css'

function Hero() {
  return (
    <section className="panel hero">
      <img className="hero-image" src={tempLanding} alt="HackDuke 2027" />
    </section>
  )
}

export default Hero
