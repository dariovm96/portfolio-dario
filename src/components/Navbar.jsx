function Navbar({ data = [] }) {
  return (
    <header className="sticky top-0 z-50 surface-glass nav-ghost-separator">
      <nav aria-label="Navegación principal" className="mx-auto max-w-6xl px-6 py-3">
        <ul className="flex flex-wrap items-center gap-2 font-label text-xs uppercase text-on-surface-variant md:gap-3">
          {data.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-label={`Ir a sección ${item.label}`}
                className="inline-flex rounded-lg px-3 py-1.5 tonal-layer-1 transition-colors hover:text-primary hover:tonal-layer-2"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
