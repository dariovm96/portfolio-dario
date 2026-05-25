import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getItemReveal, getStaggerContainer } from "../motion/variants";
import { useMotionPrefs } from "../motion/useMotionPrefs";
import SectionShell from "./ui/SectionShell";
import CardShell from "./ui/CardShell";
import MetaLabel from "./ui/MetaLabel";

function ExperienceCard({ item, reduce }) {
  const [open, setOpen] = useState(false);
  const achievementsCount = item?.achievements?.length ?? 0;

  return (
    <CardShell as="article" className="overflow-hidden" richness="nested">
      <div className="space-y-3.5 p-4 md:p-5">
        <h3 className="text-xl">{item.role}</h3>
        <div className="flex flex-wrap items-center gap-2">
          <MetaLabel as="span" className="text-primary">{item.company}</MetaLabel>
          <MetaLabel className="text-outline">{item.period}</MetaLabel>
        </div>
        <p className="text-sm text-on-surface-variant">
          {item.location} · {item.mode}
        </p>
        <div className="flex flex-wrap gap-2 tonal-layer-2 rounded-lg p-2">
          {(item?.stack ?? []).map((stackItem) => (
            <span
              key={stackItem}
              className="rounded-full bg-surface-container-high px-3 py-1 font-label text-xs uppercase text-on-surface-variant"
            >
              {stackItem}
            </span>
          ))}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="achievements"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <ul className="list-disc space-y-1.5 pl-5 text-on-surface-variant px-4 md:px-5 pb-2">
              {(item?.achievements ?? []).map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group flex w-full items-center justify-between gap-2 border-t border-outline-variant/20 px-4 py-3 md:px-5 transition-colors hover:bg-secondary/10"
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-secondary transition-colors group-hover:text-secondary">
          {open ? "Ocultar logros" : `Ver ${achievementsCount} logros`}
        </span>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-secondary"
        >
          <path d="M6 9l6 6 6-6" />
        </motion.svg>
      </button>
    </CardShell>
  );
}

function Experience({ data }) {
  const { reduce } = useMotionPrefs();
  const experiences = Array.isArray(data) ? data : [];
  const containerMotion = getStaggerContainer(reduce);

  return (
    <SectionShell id="experience" title="Experiencia" tone="section">
      <motion.div className="mt-8 space-y-5" data-testid="experience-timeline" {...containerMotion}>
        {experiences.map((item, index) => (
          <motion.div
            key={`${item.company}-${item.period}`}
            className="grid grid-cols-[16px_1fr] gap-4 md:gap-5"
            {...getItemReveal(reduce, index * 0.025)}
          >
            <div className="flex flex-col items-center pt-2" aria-hidden="true">
              <span className="h-2 w-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(193,128,255,0.7)]" />
              <span className="mt-2 h-full w-px bg-outline-variant/30" />
            </div>
            <ExperienceCard item={item} reduce={reduce} />
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}

export default Experience;
