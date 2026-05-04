import { useState, useEffect } from 'react'
import { scrollToSection } from '../utils/smoothScroll'

function Navbar({ data = [], brand = null }) {
  const hasBrand = Boolean(brand?.label && brand?.href);
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const sectionIds = data.map((item) => item.href.replace('#', ''))

    const observers = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      )

      io.observe(el)
      observers.push(io)
    })

    return () => {
      observers.forEach((io) => io.disconnect())
    }
  }, [data])

  return (
    <header className="sticky top-0 z-50 surface-glass nav-ghost-separator">
      <nav aria-label="Navegación principal" className="mx-auto max-w-6xl px-6 py-3">
        <ul className="flex flex-wrap items-center font-label" style={{ gap: '2rem' }}>
          {hasBrand ? (
            <li>
              <a
                href={brand.href}
                aria-label={`Ir a sección ${brand.label}`}
                data-testid="navbar-brand-link"
                className="inline-flex rounded-lg px-3 py-1.5 text-primary tonal-layer-1 transition-colors hover:tonal-layer-2"
              >
                {brand.label}
              </a>
            </li>
          ) : null}
          {data.map((item) => {
            const sectionId = item.href.replace('#', '')
            const isActive = activeSection === sectionId
            return (
              <li key={item.href}>
                <button
                  type="button"
                  onClick={() => scrollToSection(sectionId)}
                  aria-label={`Ir a sección ${item.label}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`nav-link${isActive ? ' is-active' : ''}`}
                >
                  {item.label}
                  <span className="nav-underline" aria-hidden="true" />
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
