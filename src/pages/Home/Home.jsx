import SmoothScroll from '../../components/SmoothScroll.jsx'
import Intro from '../../sections/Intro/Intro.jsx'
import Showcase from '../../sections/Showcase/Showcase.jsx'
import Outro from '../../sections/Outro/Outro.jsx'

// Page order: Intro (3 screens) -> Showcase (3 screens) -> Outro (3 screens), all vertical
function Home() {
  return (
    <SmoothScroll>
      <Intro />
      <Showcase />
      <Outro />
    </SmoothScroll>
  )
}

export default Home
