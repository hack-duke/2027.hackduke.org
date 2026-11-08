import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Panel from '../../components/Panel.jsx'
import './HorizontalShowcase.css'

gsap.registerPlugin(ScrollTrigger, useGSAP)

// Horizontal scrolling is only used on wide screens with motion allowed.
// Keep in sync with the media query in HorizontalShowcase.css.
// Everywhere else the panels simply stack vertically.
export const HORIZONTAL_QUERY =
  '(min-width: 768px) and (prefers-reduced-motion: no-preference)'

// Three screen widths of content, scrolled sideways while the section is
// pinned. Vertical scroll progress drives the track's translateX.
function HorizontalShowcase() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add(HORIZONTAL_QUERY, () => {
        const track = trackRef.current
        const distance = () => track.scrollWidth - window.innerWidth

        gsap.to(track, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: true,
            start: 'top top',
            end: () => `+=${distance()}`,
            invalidateOnRefresh: true,
          },
        })
      })

      return () => mm.revert()
    },
    { scope: sectionRef },
  )

  return (
    <div className="hscroll" ref={sectionRef}>
      <div className="hscroll-track" ref={trackRef}>
        <Panel label="Horizontal 1" color="#0a7a5a" />
        <Panel label="Horizontal 2" color="#12946d" />
        <Panel label="Horizontal 3" color="#22ad82" />
      </div>
    </div>
  )
}

export default HorizontalShowcase
