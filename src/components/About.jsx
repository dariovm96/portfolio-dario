function About({ data }) {
  return (
    <section id="about" aria-label="Sobre mí" className="surface-section px-6 py-20">
      <div className="mx-auto max-w-6xl space-y-6">
        <h2 className="text-3xl font-headline font-semibold">Sobre mí</h2>
        <p>{data?.professionalSummary}</p>
        <p className="text-on-surface-variant">{data?.personalSummary}</p>
        <ul className="flex flex-wrap gap-2 font-label text-xs uppercase text-on-surface-variant">
          {data?.interests?.map((item) => (
            <li key={item} className="rounded-full bg-surface-container-high px-3 py-1">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;
