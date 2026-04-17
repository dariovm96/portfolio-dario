import { motion } from "framer-motion";
import { getCardInteract, getSectionReveal } from "../motion/variants";
import { useMotionPrefs } from "../motion/useMotionPrefs";
import SectionShell from "./ui/SectionShell";
import CardShell from "./ui/CardShell";
import MetaLabel from "./ui/MetaLabel";
import CTAButton from "./ui/CTAButton";

function Projects({ data }) {
  const { reduce, canHoverMotion } = useMotionPrefs();
  const projects = Array.isArray(data) ? data : [];
  const sectionReveal = getSectionReveal(reduce);

  return (
    <SectionShell id="projects" title="Proyectos" tone="section">
      <motion.div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3" {...sectionReveal}>
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            data-testid="project-card-interactive"
            tabIndex={0}
            {...getCardInteract(reduce, canHoverMotion)}
          >
            <CardShell
              as="article"
              className="flex flex-col gap-4 tonal-layer-2"
              tone="high"
              borderStyle="emphasis"
              richness="nested"
            >
              <ProjectMedia project={project} index={index} />
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
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}

function ProjectMedia({ project, index }) {
  const normalizedImageUrl = typeof project?.imageUrl === "string" ? project.imageUrl.trim() : "";
  const hasImage = normalizedImageUrl.length > 0;
  const fallbackAccentClass = index % 2 === 0 ? "project-fallback-accent-primary" : "project-fallback-accent-secondary";
  const fallbackTech = Array.isArray(project?.tech) && project.tech.length > 0 ? project.tech[0] : "Proyecto";

  if (hasImage) {
    return (
      <img
        data-testid="project-media-slot"
        src={normalizedImageUrl}
        alt={`Vista previa de ${project.name}`}
        className="h-32 w-full rounded-xl object-cover ring-1 ring-outline-variant/25"
      />
    );
  }

  return (
    <div
      data-testid="project-media-slot"
      className={`project-fallback-media h-32 rounded-xl ring-1 ring-outline-variant/25 ${fallbackAccentClass}`}
      aria-label={`Fallback visual ${project.name}`}
    >
      <p className="project-fallback-title">{project.name}</p>
      <span className="project-fallback-chip">{fallbackTech}</span>
    </div>
  );
}

export default Projects;
