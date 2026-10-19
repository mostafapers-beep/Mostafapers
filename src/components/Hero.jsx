import { Link } from 'react-router-dom'
import { ArrowRight, Search } from './Icons.jsx'
import useSectionNav from '../hooks/useSectionNav.js'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=2000&q=80'

export default function Hero() {
  const goToSection = useSectionNav()

  return (
    <section className="hero" style={{ '--hero-image': `url(${HERO_IMAGE})` }}>
      <div className="hero__overlay" aria-hidden="true" />
      <div className="container hero__inner">
        <p className="hero__eyebrow">
          <span className="hero__eyebrow-line" aria-hidden="true" />
          Luxury Real Estate &amp; Investment
        </p>
        <h1 className="hero__title">Discover Exceptional Homes &amp; Investments</h1>
        <p className="hero__subtitle">
          Premium properties in prime locations. Find your dream home or the perfect investment with
          confidence.
        </p>
        <div className="hero__actions">
          <Link className="btn btn--gold" to="/properties">
            <Search width={18} height={18} />
            Browse Properties
          </Link>
          <button type="button" className="btn btn--ghost-light" onClick={() => goToSection('about')}>
            Learn More
            <ArrowRight width={18} height={18} />
          </button>
        </div>

        <dl className="hero__stats">
          <div>
            <dt>Properties sold</dt>
            <dd>1,240+</dd>
          </div>
          <div>
            <dt>Markets covered</dt>
            <dd>18</dd>
          </div>
          <div>
            <dt>Client rating</dt>
            <dd>4.9/5</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
