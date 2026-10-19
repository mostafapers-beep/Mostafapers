import { Link } from 'react-router-dom'
import Img from './Img.jsx'
import { ArrowRight, Heart, Pin } from './Icons.jsx'
import { formatPrice } from '../data/properties.js'
import { useFavorites } from '../context/FavoritesContext.jsx'

export function FavoriteButton({ propertyId, label = 'property' }) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const active = isFavorite(propertyId)

  return (
    <button
      type="button"
      className={`favorite-btn${active ? ' is-active' : ''}`}
      aria-pressed={active}
      aria-label={active ? `Remove ${label} from saved` : `Save ${label}`}
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        toggleFavorite(propertyId)
      }}
    >
      <Heart filled={active} width={18} height={18} />
    </button>
  )
}

export default function PropertyCard({ property, variant = 'default' }) {
  const { city, state, country } = property.location

  return (
    <article className={`property-card property-card--${variant}`}>
      <Link to={`/properties/${property.id}`} className="property-card__media">
        <Img src={property.images[0]} alt={property.title} />
        <span className="property-card__badge">{property.type}</span>
        <FavoriteButton propertyId={property.id} label={property.title} />
      </Link>
      <div className="property-card__body">
        <h3 className="property-card__title">
          <Link to={`/properties/${property.id}`}>{property.title}</Link>
        </h3>
        <p className="property-card__location">
          <Pin width={15} height={15} />
          {city}, {state}, {country}
        </p>
        <div className="property-card__footer">
          <span className="property-card__price">{formatPrice(property.price)}</span>
          <span className="property-card__link">
            View <ArrowRight width={16} height={16} />
          </span>
        </div>
      </div>
    </article>
  )
}
