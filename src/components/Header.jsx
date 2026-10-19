import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LogoMark, Menu, Phone, Close, Heart } from './Icons.jsx'
import useSectionNav from '../hooks/useSectionNav.js'
import { useFavorites } from '../context/FavoritesContext.jsx'

const NAV = [
  { label: 'Home', to: '/', type: 'route' },
  { label: 'Properties', to: '/properties', type: 'route' },
  { label: 'About Us', to: 'about', type: 'section' },
  { label: 'Services', to: 'services', type: 'section' },
  { label: 'Team', to: 'team', type: 'section' },
  { label: 'Contact', to: 'contact', type: 'section' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const goToSection = useSectionNav()
  const { favorites } = useFavorites()

  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleNav = (item) => {
    setOpen(false)
    if (item.type === 'section') goToSection(item.to)
  }

  const isActive = (item) =>
    item.type === 'route' && (item.to === '/' ? isHome : location.pathname.startsWith(item.to))

  return (
    <header className={`site-header${transparent ? ' is-transparent' : ' is-solid'}`}>
      <div className="container site-header__inner">
        <Link to="/" className="brand" aria-label="Horizon Properties — home">
          <span className="brand__mark">
            <LogoMark size={30} />
          </span>
          <span className="brand__name">
            Horizon
            <em>Properties</em>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          <ul>
            {NAV.map((item) => (
              <li key={item.label}>
                {item.type === 'route' ? (
                  <Link to={item.to} className={isActive(item) ? 'is-active' : ''}>
                    {item.label}
                  </Link>
                ) : (
                  <button type="button" onClick={() => handleNav(item)}>
                    {item.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <Link to="/properties" className="favorites-link" aria-label="Saved properties">
            <Heart filled={favorites.length > 0} />
            {favorites.length > 0 && <span className="favorites-link__count">{favorites.length}</span>}
          </Link>
          <a className="btn btn--pill btn--outline-light" href="tel:+15552467890">
            <Phone width={16} height={16} />
            <span>(555) 246-7890</span>
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      <div id="mobile-nav" className={`mobile-nav${open ? ' is-open' : ''}`} hidden={!open}>
        <ul>
          {NAV.map((item) => (
            <li key={item.label}>
              {item.type === 'route' ? (
                <Link to={item.to} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              ) : (
                <button type="button" onClick={() => handleNav(item)}>
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </ul>
        <a className="btn btn--pill btn--navy mobile-nav__cta" href="tel:+15552467890">
          <Phone width={16} height={16} />
          (555) 246-7890
        </a>
      </div>
    </header>
  )
}
