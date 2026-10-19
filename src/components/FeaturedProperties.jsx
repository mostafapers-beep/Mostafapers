import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PropertyCard from './PropertyCard.jsx'
import SectionLabel from './SectionLabel.jsx'
import { ArrowLeft, ArrowRight } from './Icons.jsx'
import { properties } from '../data/properties.js'

export default function FeaturedProperties() {
  const trackRef = useRef(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const featured = properties.filter((p) => p.featured).slice(0, 4)

  const updateEdges = () => {
    const el = trackRef.current
    if (!el) return
    setAtStart(el.scrollLeft <= 4)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4)
  }

  useEffect(() => {
    updateEdges()
    const el = trackRef.current
    if (!el) return
    el.addEventListener('scroll', updateEdges, { passive: true })
    window.addEventListener('resize', updateEdges)
    return () => {
      el.removeEventListener('scroll', updateEdges)
      window.removeEventListener('resize', updateEdges)
    }
  }, [])

  const scrollBy = (dir) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('.property-card')
    const amount = card ? card.getBoundingClientRect().width + 24 : el.clientWidth * 0.8
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <section className="section featured" id="featured">
      <div className="container">
        <div className="featured__head">
          <div>
            <SectionLabel>Featured</SectionLabel>
            <h2 className="section-title">Featured Properties</h2>
          </div>
          <div className="featured__controls">
            <button
              type="button"
              className="carousel-arrow"
              onClick={() => scrollBy(-1)}
              disabled={atStart}
              aria-label="Previous properties"
            >
              <ArrowLeft width={20} height={20} />
            </button>
            <button
              type="button"
              className="carousel-arrow"
              onClick={() => scrollBy(1)}
              disabled={atEnd}
              aria-label="Next properties"
            >
              <ArrowRight width={20} height={20} />
            </button>
          </div>
        </div>

        <div className="featured__viewport">
          <div className="featured__track" ref={trackRef} tabIndex={0} aria-label="Featured properties carousel">
            {featured.map((property) => (
              <PropertyCard key={property.id} property={property} variant="featured" />
            ))}
          </div>
        </div>

        <div className="featured__cta">
          <Link className="btn btn--navy" to="/properties">
            View All Properties
            <ArrowRight width={18} height={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
