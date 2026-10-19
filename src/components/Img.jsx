import { useState } from 'react'

/**
 * Image with a graceful gradient fallback so the layout never collapses
 * if a remote photograph fails to load.
 */
export default function Img({ src, alt = '', className = '', loading = 'lazy', ...rest }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={`img-fallback ${className}`.trim()}
        role="img"
        aria-label={alt}
        {...rest}
      />
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      onError={() => setFailed(true)}
      {...rest}
    />
  )
}
