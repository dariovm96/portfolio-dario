function Navbar({ data = [] }) {
  return (
    <header className="sticky top-0 z-50 bg-surface-bright/60 backdrop-blur-md">
      <nav aria-label="Navegación principal" className="mx-auto max-w-6xl px-6 py-4">
        <ul className="flex flex-wrap items-center gap-4 font-label text-xs uppercase text-on-surface-variant">
          {data.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-label={`Ir a sección ${item.label}`}
                className="inline-flex rounded-md px-2 py-1 transition-colors hover:text-primary"
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
