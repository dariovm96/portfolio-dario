function Hero({ data }) {
  return (
    <section id="hero" aria-label="Hero" className="surface-base grid-pattern px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="font-label text-xs uppercase text-primary">{data?.location}</p>
        <h1 className="mt-4 text-4xl font-headline font-bold md:text-6xl">{data?.fullName}</h1>
        <p className="mt-4 text-xl text-on-surface-variant">{data?.title}</p>
        <p className="mt-4 max-w-3xl text-on-surface-variant">{data?.tagline}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {data?.ctas?.map((cta) => (
            <a key={cta.label} href={cta.href} className="rounded-xl px-5 py-3 font-label text-xs uppercase">
              {cta.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
