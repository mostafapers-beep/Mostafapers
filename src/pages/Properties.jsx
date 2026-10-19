import { useMemo, useState } from 'react'
import PropertyCard from '../components/PropertyCard.jsx'
import SectionLabel from '../components/SectionLabel.jsx'
import { Search } from '../components/Icons.jsx'
import { properties, propertyTypes } from '../data/properties.js'
import { useFavorites } from '../context/FavoritesContext.jsx'

const PRICE_RANGES = [
  { label: 'Any price', value: 'any', test: () => true },
  { label: 'Under $2M', value: 'under-2', test: (p) => p.price < 2000000 },
  { label: '$2M – $4M', value: '2-4', test: (p) => p.price >= 2000000 && p.price < 4000000 },
  { label: '$4M – $6M', value: '4-6', test: (p) => p.price >= 4000000 && p.price < 6000000 },
  { label: '$6M+', value: '6-plus', test: (p) => p.price >= 6000000 },
]

const BED_OPTIONS = [
  { label: 'Any beds', value: 'any', min: 0 },
  { label: '2+ beds', value: '2', min: 2 },
  { label: '3+ beds', value: '3', min: 3 },
  { label: '4+ beds', value: '4', min: 4 },
  { label: '5+ beds', value: '5', min: 5 },
]

const SORTS = [
  { label: 'Featured first', value: 'featured' },
  { label: 'Price: low to high', value: 'price-asc' },
  { label: 'Price: high to low', value: 'price-desc' },
  { label: 'Newest built', value: 'year-desc' },
  { label: 'Largest first', value: 'area-desc' },
]

const CITIES = [...new Set(properties.map((p) => p.location.city))].sort()

export default function Properties() {
  const [keyword, setKeyword] = useState('')
  const [city, setCity] = useState('any')
  const [type, setType] = useState('any')
  const [beds, setBeds] = useState('any')
  const [price, setPrice] = useState('any')
  const [sort, setSort] = useState('featured')
  const [savedOnly, setSavedOnly] = useState(false)
  const { favorites } = useFavorites()

  const results = useMemo(() => {
    const term = keyword.trim().toLowerCase()
    const priceRange = PRICE_RANGES.find((r) => r.value === price)
    const minBeds = BED_OPTIONS.find((b) => b.value === beds)?.min ?? 0

    const filtered = properties.filter((p) => {
      if (term) {
        const haystack = `${p.title} ${p.type} ${p.location.city} ${p.location.state} ${p.location.country} ${p.summary}`.toLowerCase()
        if (!haystack.includes(term)) return false
      }
      if (city !== 'any' && p.location.city !== city) return false
      if (type !== 'any' && p.type !== type) return false
      if (p.beds < minBeds) return false
      if (priceRange && !priceRange.test(p)) return false
      if (savedOnly && !favorites.includes(p.id)) return false
      return true
    })

    const sorted = [...filtered]
    switch (sort) {
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price)
        break
      case 'year-desc':
        sorted.sort((a, b) => b.year - a.year)
        break
      case 'area-desc':
        sorted.sort((a, b) => b.area - a.area)
        break
      default:
        sorted.sort((a, b) => Number(b.featured) - Number(a.featured))
    }
    return sorted
  }, [keyword, city, type, beds, price, sort, savedOnly, favorites])

  const reset = () => {
    setKeyword('')
    setCity('any')
    setType('any')
    setBeds('any')
    setPrice('any')
    setSort('featured')
    setSavedOnly(false)
  }

  return (
    <main className="page page--properties">
      <section className="page-hero">
        <div className="container">
          <SectionLabel>Property Discovery</SectionLabel>
          <h1 className="section-title">Find Your Next Address</h1>
          <p className="lead">
            Browse our curated collection of exceptional homes and investment opportunities.
          </p>
        </div>
      </section>

      <section className="container properties">
        <form className="filters" role="search" onSubmit={(e) => e.preventDefault()}>
          <div className="filters__row">
            <div className="field field--grow">
              <label htmlFor="filter-keyword">Search</label>
              <div className="field__control">
                <Search width={18} height={18} />
                <input
                  id="filter-keyword"
                  type="search"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="Search by name, type or keyword"
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="filter-location">Location</label>
              <select id="filter-location" value={city} onChange={(e) => setCity(e.target.value)}>
                <option value="any">All locations</option>
                {CITIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="filter-type">Property type</label>
              <select id="filter-type" value={type} onChange={(e) => setType(e.target.value)}>
                <option value="any">All types</option>
                {propertyTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="filter-beds">Bedrooms</label>
              <select id="filter-beds" value={beds} onChange={(e) => setBeds(e.target.value)}>
                {BED_OPTIONS.map((b) => (
                  <option key={b.value} value={b.value}>
                    {b.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="filter-price">Price</label>
              <select id="filter-price" value={price} onChange={(e) => setPrice(e.target.value)}>
                {PRICE_RANGES.map((r) => (
                  <option key={r.value} value={r.value}>
                    {r.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="filter-sort">Sort by</label>
              <select id="filter-sort" value={sort} onChange={(e) => setSort(e.target.value)}>
                {SORTS.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="filters__foot">
            <p className="filters__count" role="status" aria-live="polite">
              <strong>{results.length}</strong> {results.length === 1 ? 'property' : 'properties'} found
            </p>
            <div className="filters__actions">
              <button
                type="button"
                className={`chip${savedOnly ? ' is-active' : ''}`}
                aria-pressed={savedOnly}
                onClick={() => setSavedOnly((v) => !v)}
              >
                Saved only{favorites.length ? ` (${favorites.length})` : ''}
              </button>
              <button type="button" className="chip chip--ghost" onClick={reset}>
                Reset filters
              </button>
            </div>
          </div>
        </form>

        {results.length > 0 ? (
          <div className="property-grid">
            {results.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h2>No properties match your search</h2>
            <p>Try widening the price range or clearing a filter or two.</p>
            <button type="button" className="btn btn--navy" onClick={reset}>
              Reset filters
            </button>
          </div>
        )}
      </section>
    </main>
  )
}
