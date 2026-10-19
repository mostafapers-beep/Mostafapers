import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

/**
 * Smooth-scrolls to a section on the home page, navigating home first when
 * the user is on another route.
 */
export default function useSectionNav() {
  const navigate = useNavigate()
  const location = useLocation()

  return useCallback(
    (id) => {
      const scroll = () => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      if (location.pathname === '/') {
        scroll()
      } else {
        navigate('/')
        window.requestAnimationFrame(() => window.requestAnimationFrame(scroll))
      }
    },
    [location.pathname, navigate],
  )
}
