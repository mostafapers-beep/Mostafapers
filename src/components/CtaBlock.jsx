import { Link } from 'react-router-dom'
import { ArrowRight, Key } from './Icons.jsx'

export default function CtaBlock() {
  return (
    <section className="section cta-block-section">
      <div className="container">
        <div className="cta-block">
          <div className="cta-block__left">
            <span className="cta-block__icon">
              <Key width={24} height={24} />
            </span>
            <div>
              <h2>Ready to Find Your Perfect Property?</h2>
              <p>Let our experts guide you to the right home or investment.</p>
            </div>
          </div>
          <Link className="btn btn--navy" to="/properties">
            Get In Touch
            <ArrowRight width={18} height={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
