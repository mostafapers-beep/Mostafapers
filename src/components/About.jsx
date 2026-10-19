import { useState } from 'react'
import { Link } from 'react-router-dom'
import Img from './Img.jsx'
import SectionLabel from './SectionLabel.jsx'
import { ArrowRight, ArrowLeft } from './Icons.jsx'

const SLIDES = [
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
    alt: 'Contemporary white villa with a landscaped garden',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
    alt: 'Light-filled modern living room overlooking a terrace',
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=80',
    alt: 'Minimal architectural staircase in a luxury home',
  },
]

export default function About() {
  const [index, setIndex] = useState(0)
  const slide = SLIDES[index]
  const next = () => setIndex((i) => (i + 1) % SLIDES.length)
  const prev = () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length)

  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <div className="about__copy">
          <SectionLabel>About Us</SectionLabel>
          <h2 className="section-title">Who We Are</h2>
          <p className="lead">
            At Horizon Properties, we connect people with extraordinary homes and smart investments.
            Integrity, transparency, and client satisfaction are at the heart of everything we do.
          </p>
          <p>
            For over two decades our advisors have guided families, founders and funds through the
            most important purchases of their lives — pairing deep local knowledge with discreet,
            data-led advice.
          </p>
          <ul className="about__points">
            <li>Bespoke search across off-market and private listings</li>
            <li>Independent valuation and investment analysis</li>
            <li>End-to-end support from first viewing to handover</li>
          </ul>
          <Link className="btn btn--navy" to="/properties">
            Learn More
            <ArrowRight width={18} height={18} />
          </Link>
        </div>

        <div className="about__media">
          <div className="about__frame">
            <Img key={slide.src} src={slide.src} alt={slide.alt} className="about__image" />
            <button
              type="button"
              className="about__arrow about__arrow--prev"
              onClick={prev}
              aria-label="Previous image"
            >
              <ArrowLeft width={18} height={18} />
            </button>
            <button
              type="button"
              className="about__arrow about__arrow--next"
              onClick={next}
              aria-label="Next image"
            >
              <ArrowRight width={18} height={18} />
            </button>
          </div>
          <div className="about__badge">
            <strong>20+</strong>
            <span>Years of trusted advice</span>
          </div>
        </div>
      </div>
    </section>
  )
}
