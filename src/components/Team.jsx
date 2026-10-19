import Img from './Img.jsx'
import SectionLabel from './SectionLabel.jsx'
import { Mail, Phone } from './Icons.jsx'

const TEAM = [
  {
    name: 'Amara Whitfield',
    role: 'Senior Property Advisor',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Daniel Okafor',
    role: 'Investment Specialist',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Sofia Marchetti',
    role: 'Luxury Home Advisor',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Elias Grant',
    role: 'Head of Management',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
  },
]

export default function Team() {
  return (
    <section className="section team" id="team">
      <div className="container">
        <div className="team__head">
          <SectionLabel>Our Team</SectionLabel>
          <h2 className="section-title">Meet the Experts</h2>
          <p className="lead">
            Advisors who know their markets street by street — and who will tell you plainly when a
            property isn't right.
          </p>
        </div>

        <div className="team__grid">
          {TEAM.map((member) => (
            <article className="team-card" key={member.name}>
              <div className="team-card__media">
                <Img src={member.image} alt={member.name} />
              </div>
              <div className="team-card__body">
                <h3>{member.name}</h3>
                <p className="team-card__role">{member.role}</p>
                <div className="team-card__links">
                  <a href="tel:+15552467890" aria-label={`Call ${member.name}`}>
                    <Phone width={16} height={16} />
                  </a>
                  <a href="mailto:hello@horizonproperties.com" aria-label={`Email ${member.name}`}>
                    <Mail width={16} height={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
