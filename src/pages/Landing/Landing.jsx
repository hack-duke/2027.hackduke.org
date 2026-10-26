import tempLanding from '../../assets/temp-landing-page.svg'
import './Landing.css'

function Landing() {
  return (
    <main className="landing">
      <img
        className="landing-image"
        src={tempLanding}
        alt="HackDuke 2027"
      />
    </main>
  )
}

export default Landing
