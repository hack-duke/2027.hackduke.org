import logoMark from '../../assets/landing/logo-mark.svg'
import mlhBadge from '../../assets/landing/mlh-badge.svg'
import hackdukeText from '../../assets/landing/hackduke-text.svg'
import barrier from '../../assets/landing/barrier.svg'
import hole from '../../assets/landing/hole.svg'
import LinkButton from '../../components/LinkButton.jsx'
import { LINKS } from '../../config/links.js'
import './Landing.css'

// Decorative sparkles: [left %, top %, size px, twinkle delay s]
const SPARKLES = [
  [8, 18, 22, 0],
  [27, 9, 14, 1.2],
  [47, 7, 18, 0.6],
  [71, 14, 16, 1.8],
  [90, 40, 20, 0.3],
  [5, 50, 16, 2.1],
  [94, 60, 14, 0.9],
]

function Sparkle({ left, top, size, delay }) {
  return (
    <svg
      className="landing-sparkle"
      style={{ left: `${left}%`, top: `${top}%`, width: size, height: size, animationDelay: `${delay}s` }}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M12 0C12.8 7 17 11.2 24 12C17 12.8 12.8 17 12 24C11.2 17 7 12.8 0 12C7 11.2 11.2 7 12 0Z"
        fill="currentColor"
      />
    </svg>
  )
}

function Landing() {
  return (
    <main className="landing">
      <div className="landing-backdrop" aria-hidden="true">
        {SPARKLES.map(([left, top, size, delay]) => (
          <Sparkle key={`${left}-${top}`} left={left} top={top} size={size} delay={delay} />
        ))}
      </div>

      <a className="landing-logo" href={LINKS.home} aria-label="HackDuke home">
        <img src={logoMark} alt="" />
      </a>

      <img className="landing-badge" src={mlhBadge} alt="MLH Official 2027 Season" />

      <div className="landing-content">
        <img className="landing-title" src={hackdukeText} alt="HackDuke: Code for Good 2027" />
        <div className="landing-info">
          <h1 className="landing-heading">We&rsquo;re still building the site!</h1>
          <p className="landing-text">Join our newsletter to stay in the loop.</p>
          <div className="landing-actions">
            <LinkButton href={LINKS.newsletter} variant="primary">
              Join the newsletter
            </LinkButton>
            <LinkButton href={LINKS.instagram}>Instagram</LinkButton>
            <LinkButton href={LINKS.contact}>Contact us</LinkButton>
          </div>
        </div>
      </div>

      <img className="landing-barrier" src={barrier} alt="" />
      <img className="landing-hole" src={hole} alt="" />
      <div className="landing-ground" aria-hidden="true" />
    </main>
  )
}

export default Landing
