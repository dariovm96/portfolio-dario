function Projects({ data }) {
  return (
    <section id="projects" aria-label="Proyectos" className="surface-section px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-headline font-semibold">Proyectos</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data?.map((project) => (
            <article key={project.name} className="surface-card rounded-2xl p-5">
              <h3>{project.name}</h3>
              <p className="mt-2 text-on-surface-variant">{project.description}</p>
              <p className="mt-3 font-label text-xs uppercase text-outline">{project.tech.join(" · ")}</p>
              {project.status ? (
                <span className="mt-3 inline-block rounded-full bg-surface-container-high px-3 py-1 font-label text-xs uppercase text-secondary">
                  {project.status}
                </span>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
