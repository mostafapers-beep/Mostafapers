import { Link, Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import Properties from './pages/Properties.jsx'
import PropertyDetail from './pages/PropertyDetail.jsx'
import { ArrowRight } from './components/Icons.jsx'

function NotFound() {
  return (
    <main className="page page--center">
      <div className="container not-found">
        <p className="section-label section-label--center">404</p>
        <h1 className="section-title">This page could not be found</h1>
        <p className="lead">The link may be broken, or the property is no longer listed.</p>
        <Link className="btn btn--navy" to="/properties">
          Browse Properties
          <ArrowRight width={18} height={18} />
        </Link>
      </div>
    </main>
  )
}

export default function App() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <div id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:id" element={<PropertyDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
