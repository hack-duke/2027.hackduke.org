import mlhBadge from '../../assets/landing/mlh-badge.svg'
import symbol from '../../assets/graphics/hd-symbol.svg'
import rectangle from '../../assets/graphics/rectangle.svg'
import rectangleStar from '../../assets/graphics/rectangle_star.svg'
import blobSmall from '../../assets/graphics/blob_small.svg'
import plus from '../../assets/graphics/plus.svg'
import blob from '../../assets/graphics/blob.svg'
import hexagon from '../../assets/graphics/hexagon.svg'
import hexagonD from '../../assets/graphics/hexagon_d.svg'
import triangle from '../../assets/graphics/triangle.svg'
import asterisk from '../../assets/graphics/asterisk.svg'
import circle from '../../assets/graphics/circle.svg'
import squiggle from '../../assets/graphics/squiggle.svg'
import LinkButton from '../../components/LinkButton.jsx'
import { LINKS } from '../../config/links.js'
import './Landing.css'

// Decorative hero shapes, mirroring hackduke.org: [id, src, top vh, left vw, width px, hide on mobile]
const SHAPES = [
  ['blob', blob, 45, -5, 600, false],
  ['triangle', triangle, 35, 76, 450, true],
  ['hexagon', hexagon, 50, 75, 250, false],
  ['rectangle', rectangle, 20, 10, 130, false],
  ['blob-small', blobSmall, 30, 92, 160, true],
  ['rectangle-star', rectangleStar, 20, 10, 50, false],
  ['plus', plus, 15, 80, 50, false],
  ['hexagon-d', hexagonD, 70, 80, 50, false],
  ['asterisk', asterisk, 12, 45, 44, true],
  ['circle', circle, 80, 40, 80, true],
  ['squiggle', squiggle, 84, 62, 150, true],
]

// Edit each track's `color` (any hex) to recolor its card.
const TRACKS = [
  { name: 'Education', blurb: 'Make learning more accessible, engaging, and effective.', color: '#3a70dc' },
  { name: 'Finance', blurb: 'Build tools that improve financial access and literacy.', color: '#f7af1c' },
  { name: 'Health', blurb: 'Tackle challenges in care, wellness, and public health.', color: '#35c69b' },
  { name: 'Interactive Media', blurb: 'Create games, experiences, and stories that move people.', color: '#c86acb' },
  { name: 'Sustainability', blurb: 'Design solutions for a healthier planet.', color: '#e58153' },
]

const DATES = [
  { when: 'Dec 14', label: 'Priority deadline', note: 'Apply by this date for priority consideration.' },
  { when: 'Jan 4', label: 'Final deadline', note: 'Last day to submit your application.' },
  { when: 'Feb 6–7', label: 'HackDuke 2027', note: 'Two days of building, learning, and hacking for good.' },
]

function Page() {
  return (
    <div className="site">
      <img className="mlh-badge" src={mlhBadge} alt="MLH Official 2027 Season" />

      <section className="hero" id="top">
        <div className="hero-bg" aria-hidden="true">
          {SHAPES.map(([id, src, top, left, width, hideSmall]) => (
            <img
              key={id}
              className={`shape shape-${id}${hideSmall ? ' shape-hide-small' : ''}`}
              src={src}
              alt=""
              style={{ top: `${top}vh`, left: `${left}vw`, width }}
            />
          ))}
        </div>

        <header className="nav">
          <a className="nav-brand" href="#top" aria-label="HackDuke home">
            <img src={symbol} alt="" />
          </a>
          <nav className="nav-links" aria-label="Sections">
            <a href="#details">Tracks &amp; Dates</a>
          </nav>
          <LinkButton href={LINKS.portal} variant="primary">
            Apply Now
          </LinkButton>
        </header>

        <div className="hero-content">
          <p className="hero-kicker">Code for Good</p>
          <h1 className="hero-title">HackDuke 2027</h1>
          <p className="hero-date">February 6&ndash;7, 2027</p>
          <p className="hero-sub">
            HackDuke is Duke University&rsquo;s student-run hackathon. One weekend to build
            something new, meet people from every corner of campus, and learn by doing.
          </p>
          <div className="actions">
            <LinkButton href={LINKS.portal} variant="primary">
              Apply Now
            </LinkButton>
            <LinkButton href="#details">Learn more</LinkButton>
          </div>
        </div>
      </section>

      <main>
        <section className="block block--white" id="details">
          <div className="container">
            <h2 className="block-title">Key dates</h2>
            <ol className="scoreboard">
              {DATES.map(({ when, label, note }) => (
                <li className="score" key={label}>
                  <span className="score-label">{label}</span>
                  <span className="score-when">{when}</span>
                  <span className="score-note">{note}</span>
                </li>
              ))}
            </ol>

            <h2 className="block-title block-title--spaced">Five tracks</h2>
            <p className="block-lead">Choose the problem space you want to build in.</p>
            <ul className="tracks">
              {TRACKS.map(({ name, blurb, color }) => (
                <li className="track" key={name} style={{ '--track-color': color }}>
                  <h3>{name}</h3>
                  <p>{blurb}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="block block--orange block--center" id="apply">
          <div className="container">
            <h2 className="block-title">Ready to hack?</h2>
            <p className="block-lead">
              Apply through our application portal. Priority deadline is December 14; final
              deadline is January 4.
            </p>
            <LinkButton href={LINKS.portal} variant="primary">
              Apply on the portal
            </LinkButton>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <img className="footer-symbol" src={symbol} alt="" />
          <strong>HackDuke 2027</strong>
        </div>
        <div className="footer-links">
          <a href={LINKS.home}>hackduke.org</a>
          <a href={LINKS.newsletter} target="_blank" rel="noopener noreferrer">
            Newsletter
          </a>
          <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={LINKS.contact}>Contact</a>
          <a href={LINKS.codeOfConduct} target="_blank" rel="noopener noreferrer">
            MLH Code of Conduct
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Page
