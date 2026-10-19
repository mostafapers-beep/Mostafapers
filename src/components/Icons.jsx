const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
}

export const LogoMark = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
    <rect x="5" y="13" width="3.4" height="12" rx="1" fill="currentColor" />
    <rect x="14.3" y="7" width="3.4" height="18" rx="1" fill="currentColor" />
    <rect x="23.6" y="11" width="3.4" height="14" rx="1" fill="currentColor" />
    <path d="M4 28h24" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)

export const Phone = (p) => (
  <svg {...base} {...p}>
    <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />
  </svg>
)

export const Pin = (p) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
)

export const ArrowRight = (p) => (
  <svg {...base} {...p}>
    <path d="M4 12h15" />
    <path d="m13 6 6 6-6 6" />
  </svg>
)

export const ArrowLeft = (p) => (
  <svg {...base} {...p}>
    <path d="M20 12H5" />
    <path d="m11 6-6 6 6 6" />
  </svg>
)

export const ChevronDown = (p) => (
  <svg {...base} {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
)

export const Bed = (p) => (
  <svg {...base} {...p}>
    <path d="M3 18v-7h18v7" />
    <path d="M3 18v2M21 18v2" />
    <path d="M3 11V7h7a3 3 0 0 1 3 3" />
    <path d="M13 10h4a4 4 0 0 1 4 4" />
  </svg>
)

export const Bath = (p) => (
  <svg {...base} {...p}>
    <path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3Z" />
    <path d="M7 12V6.5A2.5 2.5 0 0 1 9.5 4c1.3 0 2.3 1 2.5 2.2" />
    <path d="M7 19l-1 2M17 19l1 2" />
  </svg>
)

export const Area = (p) => (
  <svg {...base} {...p}>
    <path d="M4 4h16v16H4z" />
    <path d="M9 4v16M4 9h16" opacity="0.5" />
  </svg>
)

export const Calendar = (p) => (
  <svg {...base} {...p}>
    <rect x="4" y="5" width="16" height="16" rx="2.5" />
    <path d="M4 10h16M9 3v4M15 3v4" />
  </svg>
)

export const Heart = ({ filled = false, ...p }) => (
  <svg {...base} fill={filled ? 'currentColor' : 'none'} {...p}>
    <path d="M12 20s-7.5-4.6-7.5-10A4.2 4.2 0 0 1 12 7.4 4.2 4.2 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10Z" />
  </svg>
)

export const Search = (p) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m16 16 4 4" />
  </svg>
)

export const Close = (p) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)

export const Expand = (p) => (
  <svg {...base} {...p}>
    <path d="M4 9V4h5M20 15v5h-5M20 9V4h-5M4 15v5h5" />
  </svg>
)

export const Menu = (p) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const Key = (p) => (
  <svg {...base} {...p}>
    <circle cx="8" cy="8" r="4" />
    <path d="m11 11 8 8M16 16l2-2M18.5 18.5l2-2" />
  </svg>
)

export const Check = (p) => (
  <svg {...base} {...p}>
    <path d="m5 12.5 4.5 4.5L19 7" />
  </svg>
)

export const Shield = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3l7 3v6c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6l7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

export const Chart = (p) => (
  <svg {...base} {...p}>
    <path d="M4 20V4M4 20h16" />
    <path d="M8 16v-5M12.5 16V8M17 16v-3" />
  </svg>
)

export const Home = (p) => (
  <svg {...base} {...p}>
    <path d="M4 11 12 4l8 7" />
    <path d="M6 10v9h12v-9" />
    <path d="M10 19v-5h4v5" />
  </svg>
)

export const Mail = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </svg>
)
