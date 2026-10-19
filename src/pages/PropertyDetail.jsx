import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Img from '../components/Img.jsx'
import PropertyCard from '../components/PropertyCard.jsx'
import SectionLabel from '../components/SectionLabel.jsx'
import { FavoriteButton } from '../components/PropertyCard.jsx'
import {
  Area,
  ArrowLeft,
  ArrowRight,
  Bath,
  Bed,
  Calendar,
  Check,
  Close,
  Expand,
  Home as HomeIcon,
  Mail,
  Phone,
  Pin,
} from '../components/Icons.jsx'
import { advisors, formatPrice, getProperty, similarProperties } from '../data/properties.js'

export default function PropertyDetail() {
  const { id } = useParams()
  const property = getProperty(id)
  const [active, setActive] = useState(0)
  const [lightbox, setLightbox] = useState(false)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    setActive(0)
    setLightbox(false)
    setSent(false)
  }, [id])

  const imageCount = property?.images.length ?? 0

  useEffect(() => {
    if (!lightbox) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(false)
      if (e.key === 'ArrowRight') setActive((i) => (i + 1) % imageCount)
      if (e.key === 'ArrowLeft') setActive((i) => (i - 1 + imageCount) % imageCount)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox, imageCount])

  if (!property) {
    return (
      <main className="page page--center">
        <div className="container not-found">
          <p className="section-label section-label--center">Not found</p>
          <h1 className="section-title">We couldn't find that property</h1>
          <p className="lead">It may have been sold or removed from the collection.</p>
          <Link className="btn btn--navy" to="/properties">
            Browse Properties
            <ArrowRight width={18} height={18} />
          </Link>
        </div>
      </main>
    )
  }

  const advisor = advisors[property.advisor]
  const similar = similarProperties(property)
  const { city, state, country } = property.location

  const specs = [
    { icon: Bed, label: 'Bedrooms', value: property.beds },
    { icon: Bath, label: 'Bathrooms', value: property.baths },
    { icon: Area, label: 'Interior', value: `${property.area.toLocaleString('en-US')} sq ft` },
    { icon: Calendar, label: 'Year built', value: property.year },
    { icon: HomeIcon, label: 'Type', value: property.type },
  ]

  const step = (dir) => setActive((i) => (i + dir + imageCount) % imageCount)

  return (
    <main className="page page--detail">
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/properties">Properties</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{property.title}</span>
        </nav>

        <div className="detail__gallery">
          <div className="detail__stage">
            <Img src={property.images[active]} alt={`${property.title} — view ${active + 1}`} loading="eager" />
            <button
              type="button"
              className="detail__arrow detail__arrow--prev"
              onClick={() => step(-1)}
              aria-label="Previous image"
            >
              <ArrowLeft width={20} height={20} />
            </button>
            <button
              type="button"
              className="detail__arrow detail__arrow--next"
              onClick={() => step(1)}
              aria-label="Next image"
            >
              <ArrowRight width={20} height={20} />
            </button>
            <button
              type="button"
              className="detail__expand"
              onClick={() => setLightbox(true)}
              aria-label="View fullscreen"
            >
              <Expand width={18} height={18} />
              <span>Fullscreen</span>
            </button>
            <span className="detail__counter">
              {active + 1} / {imageCount}
            </span>
          </div>

          <div className="detail__thumbs">
            {property.images.map((src, i) => (
              <button
                key={src}
                type="button"
                className={`detail__thumb${i === active ? ' is-active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Show image ${i + 1}`}
                aria-current={i === active}
              >
                <Img src={src} alt="" />
              </button>
            ))}
          </div>
        </div>

        <div className="detail__layout">
          <div className="detail__main">
            <div className="detail__heading">
              <div>
                <span className="detail__badge">{property.type}</span>
                <h1 className="section-title">{property.title}</h1>
                <p className="detail__location">
                  <Pin width={16} height={16} />
                  {city}, {state}, {country}
                </p>
              </div>
              <div className="detail__heading-side">
                <p className="detail__price">{formatPrice(property.price)}</p>
                <FavoriteButton propertyId={property.id} label={property.title} />
              </div>
            </div>

            <p className="detail__summary">{property.summary}</p>

            <ul className="spec-grid">
              {specs.map(({ icon: Icon, label, value }) => (
                <li key={label}>
                  <Icon width={20} height={20} />
                  <span className="spec-grid__value">{value}</span>
                  <span className="spec-grid__label">{label}</span>
                </li>
              ))}
            </ul>

            <section className="detail__section">
              <h2>About this property</h2>
              <p>{property.description}</p>
            </section>

            <div className="detail__columns">
              <section className="detail__section">
                <h2>Highlights</h2>
                <ul className="tick-list">
                  {property.features.map((f) => (
                    <li key={f}>
                      <Check width={16} height={16} />
                      {f}
                    </li>
                  ))}
                </ul>
              </section>
              <section className="detail__section">
                <h2>Amenities</h2>
                <ul className="tick-list">
                  {property.amenities.map((a) => (
                    <li key={a}>
                      <Check width={16} height={16} />
                      {a}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          <aside className="advisor-card" aria-label="Contact your advisor">
            <div className="advisor-card__top">
              <Img className="advisor-card__avatar" src={advisor.avatar} alt={advisor.name} />
              <div>
                <p className="advisor-card__name">{advisor.name}</p>
                <p className="advisor-card__title">{advisor.title}</p>
              </div>
            </div>
            <div className="advisor-card__contact">
              <a href={`tel:${advisor.phone.replace(/[^0-9+]/g, '')}`}>
                <Phone width={16} height={16} /> {advisor.phone}
              </a>
              <a href={`mailto:${advisor.email}`}>
                <Mail width={16} height={16} /> {advisor.email}
              </a>
            </div>

            <form
              className="advisor-form"
              onSubmit={(e) => {
                e.preventDefault()
                e.currentTarget.reset()
                setSent(true)
              }}
            >
              <label htmlFor="inquiry-name">Your name</label>
              <input id="inquiry-name" name="name" type="text" placeholder="Jane Cooper" required />

              <label htmlFor="inquiry-email">Email</label>
              <input id="inquiry-email" name="email" type="email" placeholder="jane@email.com" required />

              <label htmlFor="inquiry-message">Message</label>
              <textarea
                id="inquiry-message"
                name="message"
                rows="3"
                placeholder={`I'd like to arrange a viewing of ${property.title}.`}
                required
              />

              <button type="submit" className="btn btn--navy btn--block">
                Request a Viewing
                <ArrowRight width={18} height={18} />
              </button>
              <p className="advisor-form__note" role="status" aria-live="polite">
                {sent ? `Thanks — ${advisor.name.split(' ')[0]} will be in touch shortly.` : ''}
              </p>
            </form>
          </aside>
        </div>

        <section className="section similar">
          <div className="similar__head">
            <SectionLabel>You may also like</SectionLabel>
            <h2 className="section-title">Similar Properties</h2>
          </div>
          <div className="property-grid property-grid--three">
            {similar.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </section>
      </div>

      {lightbox && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${property.title} gallery`}>
          <button
            type="button"
            className="lightbox__close"
            onClick={() => setLightbox(false)}
            aria-label="Close fullscreen"
          >
            <Close width={22} height={22} />
          </button>
          <button
            type="button"
            className="lightbox__arrow lightbox__arrow--prev"
            onClick={() => step(-1)}
            aria-label="Previous image"
          >
            <ArrowLeft width={24} height={24} />
          </button>
          <figure className="lightbox__figure">
            <Img src={property.images[active]} alt={`${property.title} — view ${active + 1}`} />
            <figcaption>
              {property.title} — {active + 1} of {imageCount}
            </figcaption>
          </figure>
          <button
            type="button"
            className="lightbox__arrow lightbox__arrow--next"
            onClick={() => step(1)}
            aria-label="Next image"
          >
            <ArrowRight width={24} height={24} />
          </button>
        </div>
      )}
    </main>
  )
}
