import SectionShell from "./ui/SectionShell";
import CardShell from "./ui/CardShell";
import MetaLabel from "./ui/MetaLabel";
import CTAButton from "./ui/CTAButton";

function Projects({ data }) {
  const projects = Array.isArray(data) ? data : [];

  return (
    <SectionShell id="projects" title="Proyectos" tone="section">
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <CardShell
            key={project.name}
            as="article"
            className="flex flex-col gap-4 tonal-layer-2"
            tone="high"
            borderStyle="emphasis"
            richness="nested"
          >
            <div
              data-testid="project-media-slot"
              className="h-32 rounded-xl bg-surface-container-low tonal-layer-2 ring-1 ring-outline-variant/25"
              aria-label={`Media ${project.name}`}
            />
            <h3 className="font-semibold text-on-surface">{project.name}</h3>
            <p className="text-on-surface-variant">{project.description}</p>

            <div data-testid="project-meta-group" className="flex flex-wrap gap-2">
              {(project?.tech ?? []).map((tech) => (
                <span
                  key={`${project.name}-${tech}`}
                  className="rounded-full bg-surface-container-low tonal-layer-2 px-3 py-1 font-label text-xs uppercase text-outline"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div data-testid="project-cta-group" className="mt-auto flex flex-wrap gap-2">
              <CTAButton
                href={project.githubUrl || "#"}
                label="GitHub"
                ariaLabel={`GitHub de ${project.name}`}
                variant="secondary"
              />
              <CTAButton
                href={project.demoUrl || "#"}
                label="Demo"
                ariaLabel={`Demo de ${project.name}`}
                variant="ghost"
              />
              {project.status ? <MetaLabel className="text-secondary">{project.status}</MetaLabel> : null}
            </div>
          </CardShell>
        ))}
      </div>
    </SectionShell>
  );
}

export default Projects;
