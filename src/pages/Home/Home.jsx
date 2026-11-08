import SmoothScroll from '../../components/SmoothScroll.jsx'
import Intro from '../../sections/Intro/Intro.jsx'
import HorizontalShowcase from '../../sections/HorizontalShowcase/HorizontalShowcase.jsx'
import Outro from '../../sections/Outro/Outro.jsx'

// Page order: vertical (3 screens) -> horizontal (3 screens) -> vertical (3 screens)
function Home() {
  return (
    <SmoothScroll>
      <Intro />
      <HorizontalShowcase />
      <Outro />
    </SmoothScroll>
  )
}

export default Home
