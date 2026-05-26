import { useState, useEffect, useRef } from 'react'
import { scrollToSection } from '../utils/smoothScroll'
import LanguageToggle from './ui/LanguageToggle'

function Navbar({ data = [], brand = null }) {
  const hasBrand = Boolean(brand?.label && brand?.href);
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const navListRef = useRef(null)
  const pillRef = useRef(null)

  useEffect(() => {
    const sectionIds = data.map((item) => item.href.replace('#', ''))
    const observers = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      )

      io.observe(el)
      observers.push(io)
    })

    return () => observers.forEach((io) => io.disconnect())
  }, [data])

  // Cierra el menú al hacer scroll o resize
  useEffect(() => {
    if (!menuOpen) return
    const close = () => setMenuOpen(false)
    window.addEventListener('scroll', close, { passive: true })
    window.addEventListener('resize', close)
    return () => {
      window.removeEventListener('scroll', close)
      window.removeEventListener('resize', close)
    }
  }, [menuOpen])

  // Slides the active pill indicator to the active nav link
  useEffect(() => {
    if (!pillRef.current || !navListRef.current) return

    const positionPill = () => {
      if (!pillRef.current || !navListRef.current) return
      const activeLink = navListRef.current.querySelector('a.is-active')
      if (!activeLink) {
        pillRef.current.style.opacity = '0'
        return
      }
      pillRef.current.style.left = `${activeLink.offsetLeft}px`
      pillRef.current.style.width = `${activeLink.offsetWidth}px`
      pillRef.current.style.opacity = '1'
    }

    // RAF ensures we read dimensions after the browser has reflowed
    // (critical after language toggle — text changes width before reflow)
    const rafId = requestAnimationFrame(positionPill)

    // ResizeObserver repositions the pill when the nav container resizes
    // (covers both language toggle text-width changes and window resize)
    const ro = new ResizeObserver(() => {
      requestAnimationFrame(positionPill)
    })
    ro.observe(navListRef.current)

    return () => {
      cancelAnimationFrame(rafId)
      ro.disconnect()
    }
  }, [activeSection, data])

  function handleNavClick(sectionId) {
    scrollToSection(sectionId)
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 surface-glass nav-ghost-separator">
      <nav aria-label="Navegación principal" className="mx-auto max-w-7xl px-6 py-3">

        {/* ── Row: brand + hamburger ── */}
        <div className="flex items-center justify-between">
          {hasBrand ? (
            <a
              href={brand.href}
              aria-label={`Ir a sección ${brand.label}`}
              data-testid="navbar-brand-link"
              className="inline-flex rounded-lg px-3 py-1.5 text-primary tonal-layer-1 transition-colors hover:tonal-layer-2 font-label text-xs uppercase"
            >
              {brand.label}
            </a>
          ) : <span />}

          {/* Hamburger — solo visible en mobile */}
          <button
            type="button"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center items-center gap-[5px] p-2 rounded-lg tonal-layer-1 hover:tonal-layer-2 transition-colors transition-transform duration-200 bg-transparent border-0 cursor-pointer"
          >
            <span
              style={{
                display: 'block', width: 20, height: 2,
                background: menuOpen ? 'var(--primary)' : 'var(--on-surface-variant)',
                borderRadius: 2,
                transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
              }}
              className="transition-transform duration-200"
            />
            <span
              style={{
                display: 'block', width: 20, height: 2,
                background: menuOpen ? 'var(--primary)' : 'var(--on-surface-variant)',
                borderRadius: 2,
                opacity: menuOpen ? 0 : 1,
              }}
              className="transition-opacity duration-150"
            />
            <span
              style={{
                display: 'block', width: 20, height: 2,
                background: menuOpen ? 'var(--primary)' : 'var(--on-surface-variant)',
                borderRadius: 2,
                transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
              }}
              className="transition-transform duration-200"
            />
          </button>

          {/* Links desktop — ocultos en mobile */}
          <ul ref={navListRef} className="hidden md:flex items-center font-label" style={{ gap: '2rem', position: 'relative' }}>
            {data.map((item) => {
              const sectionId = item.href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(sectionId) }}
                    aria-label={`Ir a sección ${item.label}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`nav-link${isActive ? ' is-active' : ''}`}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
            <span ref={pillRef} className="nav-active-pill" aria-hidden="true" />
          </ul>
          <LanguageToggle />
        </div>

        {/* ── Menú mobile desplegable ── */}
        <div
          id="mobile-menu"
          aria-hidden={!menuOpen}
          className="overflow-hidden transition-[max-height] ease-in-out duration-300"
          style={{
            maxHeight: menuOpen ? `${data.length * 52 + 52}px` : '0',
          }}
        >
          <ul className="flex flex-col py-2 font-label" style={{ gap: '0.25rem' }}>
            {data.map((item) => {
              const sectionId = item.href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(sectionId) }}
                    aria-label={`Ir a sección ${item.label}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`nav-link w-full text-left py-3${isActive ? ' is-active' : ''}`}
                  >
                    {item.label}
                    <span className="nav-underline" aria-hidden="true" />
                  </a>
                </li>
              )
            })}
            <li className="pt-1"><LanguageToggle /></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
