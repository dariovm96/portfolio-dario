function Skills({ data }) {
  return (
    <section id="skills" aria-label="Habilidades" className="surface-base px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-headline font-semibold">Habilidades</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {data?.categories?.map((category) => (
            <article key={category.name} className="surface-card rounded-2xl p-5">
              <h3 className="font-label text-xs uppercase text-primary">{category.name}</h3>
              <ul className="mt-3 space-y-2">
                {category.items.map((item) => (
                  <li key={item.name} className="text-on-surface-variant">
                    {item.name} — {item.level}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
