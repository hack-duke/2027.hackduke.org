import './LinkButton.css'

// Anchor styled as a button. Without an href it renders disabled so an
// unfilled link in src/config/links.js can't ship as a dead link.
function LinkButton({ href, variant = 'secondary', children }) {
  const className = `link-button link-button--${variant}`
  const external = href && !href.startsWith('mailto:')

  if (!href) {
    return (
      <span className={className} aria-disabled="true">
        {children}
      </span>
    )
  }

  return (
    <a
      className={className}
      href={href}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {children}
    </a>
  )
}

export default LinkButton
