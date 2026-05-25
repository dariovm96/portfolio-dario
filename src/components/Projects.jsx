import { motion } from "framer-motion";
import { getCardInteract, getSectionReveal } from "../motion/variants";
import { useMotionPrefs } from "../motion/useMotionPrefs";
import { motionTokens } from "../motion/tokens";
import SectionShell from "./ui/SectionShell";
import CardShell from "./ui/CardShell";
import MetaLabel from "./ui/MetaLabel";
import CTAButton from "./ui/CTAButton";
import { useLanguage } from "../contexts/LanguageContext";

function Projects({ data }) {
  const { reduce, canHoverMotion } = useMotionPrefs();
  const { content } = useLanguage();
  const ui = content?.ui?.projects ?? {};
  const projects = Array.isArray(data) ? data : [];
  const sectionReveal = getSectionReveal(reduce);

  return (
    <SectionShell id="projects" title={ui.sectionTitle ?? "Proyectos"} tone="section">
      <motion.div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3" {...sectionReveal}>
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            className="self-start"
            data-testid="project-card-interactive"
            tabIndex={0}
            {...getCardInteract(reduce, canHoverMotion)}
            initial={{ boxShadow: "0 2px 8px rgba(0,0,0,0.24)" }}
            whileHover={canHoverMotion && !reduce ? { scale: 1.02, y: -4, boxShadow: "0 8px 32px rgba(107,255,143,0.10), 0 2px 8px rgba(0,0,0,0.32)" } : undefined}
          >
            <CardShell
              as="article"
              className="flex flex-col gap-4 tonal-layer-2"
              tone="high"
              borderStyle="emphasis"
              richness="nested"
            >
              <ProjectMedia project={project} index={index} ui={ui} />

              <div className="flex items-baseline justify-between gap-2">
                <h3 className="font-semibold text-on-surface">{project.name}</h3>
                {project.year && (
                  <MetaLabel className="shrink-0 text-outline">{project.year}</MetaLabel>
                )}
              </div>

              <p className="text-sm text-on-surface-variant">{project.description}</p>

              {Array.isArray(project.highlights) && project.highlights.length > 0 && (
                <ul className="space-y-1.5">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-on-surface-variant">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              <div data-testid="project-meta-group" className="flex flex-wrap gap-2">
                {(project?.tech ?? []).map((tech) => (
                  <motion.span
                    key={`${project.name}-${tech}`}
                    className="rounded-full bg-surface-container-low tonal-layer-2 px-3 py-1 font-label text-xs uppercase text-outline"
                    whileHover={canHoverMotion && !reduce ? { scale: 1.04, backgroundColor: "rgba(107,255,143,0.08)" } : undefined}
                    transition={{ duration: motionTokens.duration.fast, ease: "easeOut" }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <div data-testid="project-cta-group" className="mt-auto flex flex-wrap items-center gap-2">
                {project.githubUrl && project.githubUrl !== "#" && (
                  <CTAButton
                    href={project.githubUrl}
                    label={ui.githubLabel ?? "GitHub"}
                    ariaLabel={(ui.githubAriaLabel ?? "GitHub de {name}").replace("{name}", project.name)}
                    variant="secondary"
                  />
                )}
                {project.demoUrl && project.demoUrl !== "#" && (
                  <CTAButton
                    href={project.demoUrl}
                    label={ui.demoLabel ?? "Demo"}
                    ariaLabel={(ui.demoAriaLabel ?? "Demo de {name}").replace("{name}", project.name)}
                    variant="ghost"
                  />
                )}
                {project.isCurrentSite && (
                  <MetaLabel className="text-secondary">{ui.thisSite ?? "✦ Este sitio"}</MetaLabel>
                )}
                {project.status && (
                  <MetaLabel className="text-outline">{project.status}</MetaLabel>
                )}
              </div>
            </CardShell>
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}

function ProjectMedia({ project, index, ui }) {
  const normalizedImageUrl = typeof project?.imageUrl === "string" ? project.imageUrl.trim() : "";
  const hasImage = normalizedImageUrl.length > 0;
  const fallbackAccentClass = index % 2 === 0 ? "project-fallback-accent-primary" : "project-fallback-accent-secondary";
  const fallbackTech = Array.isArray(project?.tech) && project.tech.length > 0 ? project.tech[0] : "Proyecto";

  if (hasImage) {
    return (
      <img
        data-testid="project-media-slot"
        src={normalizedImageUrl}
        alt={(ui?.imageAlt ?? "Vista previa de {name}").replace("{name}", project.name)}
        className="h-48 w-full rounded-xl object-cover object-top ring-1 ring-outline-variant/25"
        loading="lazy"
      />
    );
  }

  return (
    <div
      data-testid="project-media-slot"
      className={`project-fallback-media h-48 rounded-xl ring-1 ring-outline-variant/25 ${fallbackAccentClass}`}
      aria-label={(ui?.fallbackAlt ?? "Fallback visual {name}").replace("{name}", project.name)}
    >
      <p className="project-fallback-title">{project.name}</p>
      <span className="project-fallback-chip">{fallbackTech}</span>
    </div>
  );
}

export default Projects;
