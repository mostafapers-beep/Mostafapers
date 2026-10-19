import SectionLabel from './SectionLabel.jsx'
import { Home, Chart, Shield, Key, ArrowRight } from './Icons.jsx'

const SERVICES = [
  {
    icon: Home,
    title: 'Buying a Home',
    text: 'Curated shortlists, private viewings and negotiation handled end to end by a dedicated advisor.',
  },
  {
    icon: Chart,
    title: 'Investment Advisory',
    text: 'Yield modelling, market analysis and portfolio structuring for private and institutional buyers.',
  },
  {
    icon: Shield,
    title: 'Selling a Home',
    text: 'Editorial photography, targeted campaigns and a global buyer network to realise the best price.',
  },
  {
    icon: Key,
    title: 'Property Management',
    text: 'Discreet, full-service management for owners who want their asset cared for year-round.',
  },
]

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="services__head">
          <SectionLabel align="center">What We Do</SectionLabel>
          <h2 className="section-title section-title--center">Our Services</h2>
          <p className="lead lead--center">
            A single team for every stage of the journey — from first search to long-term ownership.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map(({ icon: Icon, title, text }) => (
            <article className="service-card" key={title}>
              <span className="service-card__icon">
                <Icon width={22} height={22} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="service-card__more">
                Learn more <ArrowRight width={16} height={16} />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
