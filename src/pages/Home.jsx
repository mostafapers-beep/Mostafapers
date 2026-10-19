import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import FeaturedProperties from '../components/FeaturedProperties.jsx'
import Services from '../components/Services.jsx'
import Team from '../components/Team.jsx'
import CtaBlock from '../components/CtaBlock.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProperties />
      <Services />
      <Team />
      <CtaBlock />
    </>
  )
}
