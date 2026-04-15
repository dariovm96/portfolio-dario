function Experience({ data }) {
  return (
    <section id="experience" aria-label="Experiencia" className="surface-section px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-headline font-semibold">Experiencia</h2>
        <div className="mt-8 space-y-4">
          {data?.map((item) => (
            <article key={`${item.company}-${item.period}`} className="surface-card rounded-2xl p-5">
              <h3 className="text-xl">{item.role}</h3>
              <p className="font-label text-xs uppercase text-primary">{item.company}</p>
              <p className="text-sm text-on-surface-variant">
                {item.location} · {item.mode} · {item.period}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
