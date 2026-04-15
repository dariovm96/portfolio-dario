function Education({ data }) {
  return (
    <section id="education" aria-label="Educación" className="surface-base px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-headline font-semibold">Educación</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {data?.map((item) => (
            <article key={`${item.title}-${item.period}`} className="surface-card rounded-2xl p-5">
              <h3>{item.title}</h3>
              <p className="text-on-surface-variant">{item.institution}</p>
              <p className="font-label text-xs uppercase text-outline">{item.period}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
