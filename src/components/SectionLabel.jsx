export default function SectionLabel({ children, align = 'left', tone = 'gold' }) {
  return (
    <p className={`section-label section-label--${align} section-label--${tone}`}>
      <span className="section-label__rule" aria-hidden="true" />
      {children}
    </p>
  )
}
