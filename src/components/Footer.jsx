import { Link } from 'react-router-dom'
import { LogoMark, ArrowRight, Mail, Pin, Phone } from './Icons.jsx'
import useSectionNav from '../hooks/useSectionNav.js'

export default function Footer() {
  const goToSection = useSectionNav()

  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Link to="/" className="brand brand--light" aria-label="Horizon Properties — home">
              <span className="brand__mark">
                <LogoMark size={30} />
              </span>
              <span className="brand__name">
                Horizon
                <em>Properties</em>
              </span>
            </Link>
            <p>
              Connecting people with extraordinary homes and smart investments in the world's most
              desirable locations.
            </p>
            <div className="site-footer__contact">
              <a href="tel:+15552467890">
                <Phone width={16} height={16} /> (555) 246-7890
              </a>
              <a href="mailto:hello@horizonproperties.com">
                <Mail width={16} height={16} /> hello@horizonproperties.com
              </a>
              <span>
                <Pin width={16} height={16} /> 120 Lakeshore Drive, Austin, TX
              </span>
            </div>
          </div>

          <nav className="site-footer__col" aria-label="Explore">
            <h3>Explore</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/properties">All Properties</Link>
              </li>
              <li>
                <button type="button" onClick={() => goToSection('about')}>
                  About Us
                </button>
              </li>
              <li>
                <button type="button" onClick={() => goToSection('services')}>
                  Services
                </button>
              </li>
              <li>
                <button type="button" onClick={() => goToSection('team')}>
                  Team
                </button>
              </li>
            </ul>
          </nav>

          <nav className="site-footer__col" aria-label="Services">
            <h3>Services</h3>
            <ul>
              <li>
                <button type="button" onClick={() => goToSection('services')}>
                  Buying a Home
                </button>
              </li>
              <li>
                <button type="button" onClick={() => goToSection('services')}>
                  Selling a Home
                </button>
              </li>
              <li>
                <button type="button" onClick={() => goToSection('services')}>
                  Investment Advisory
                </button>
              </li>
              <li>
                <button type="button" onClick={() => goToSection('services')}>
                  Property Management
                </button>
              </li>
            </ul>
          </nav>

          <div className="site-footer__col site-footer__newsletter">
            <h3>Newsletter</h3>
            <p>Market insight and new listings, once a month. No noise.</p>
            <form
              className="newsletter-form"
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.currentTarget
                form.reset()
                form.querySelector('[data-note]').textContent = "You're on the list — welcome."
              }}
            >
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <div className="newsletter-form__row">
                <input
                  id="newsletter-email"
                  type="email"
                  name="email"
                  placeholder="Your email"
                  autoComplete="email"
                  required
                />
                <button type="submit" aria-label="Subscribe">
                  <ArrowRight width={18} height={18} />
                </button>
              </div>
              <p className="newsletter-form__note" data-note role="status" aria-live="polite" />
            </form>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© {new Date().getFullYear()} Horizon Properties. All rights reserved.</p>
          <p className="site-footer__legal">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Fair Housing</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
