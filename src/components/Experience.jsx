import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getItemReveal, getStaggerContainer } from "../motion/variants";
import { useMotionPrefs } from "../motion/useMotionPrefs";
import { motionTokens } from "../motion/tokens";
import SectionShell from "./ui/SectionShell";
import CardShell from "./ui/CardShell";
import MetaLabel from "./ui/MetaLabel";
import { useLanguage } from "../contexts/LanguageContext";

function ExperienceCard({ item, reduce, ui }) {
  const { canHoverMotion } = useMotionPrefs();
  const [open, setOpen] = useState(false);
  const achievementsCount = item?.achievements?.length ?? 0;
  const showLabel = (ui?.showAchievements ?? "Ver {n} logros").replace("{n}", achievementsCount);
  const hideLabel = ui?.hideAchievements ?? "Ocultar logros";

  return (
    <motion.div
      whileHover={canHoverMotion && !reduce ? { boxShadow: "0 0 28px rgba(193,128,255,0.10)" } : undefined}
      transition={{ duration: motionTokens.duration.fast, ease: "easeOut" }}
      style={{ borderRadius: "var(--radius-card, 1rem)" }}
    >
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
            <motion.span
              key={stackItem}
              className="rounded-full bg-surface-container-high px-3 py-1 font-label text-xs uppercase text-on-surface-variant"
              whileHover={canHoverMotion && !reduce ? { scale: 1.04, backgroundColor: "rgba(193,128,255,0.08)" } : undefined}
              transition={{ duration: motionTokens.duration.fast, ease: "easeOut" }}
            >
              {stackItem}
            </motion.span>
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
              {(item?.achievements ?? []).map((achievement, achievementIndex) => (
                <motion.li
                  key={achievement}
                  initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                  animate={reduce ? undefined : { opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.28,
                    delay: achievementIndex * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {achievement}
                </motion.li>
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
          {open ? hideLabel : showLabel}
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
    </motion.div>
  );
}

function Experience({ data }) {
  const { reduce } = useMotionPrefs();
  const { content } = useLanguage();
  const ui = content?.ui?.experience ?? {};
  const experiences = Array.isArray(data) ? data : [];
  const containerMotion = getStaggerContainer(reduce);

  return (
    <SectionShell id="experience" title={ui.sectionTitle ?? "Experiencia"} tone="section">
      <motion.div className="mt-8 space-y-5" data-testid="experience-timeline" {...containerMotion}>
        {experiences.map((item, index) => (
          <motion.div
            key={index}
            className="grid grid-cols-[16px_1fr] gap-4 md:gap-5"
            {...getItemReveal(reduce, index * 0.025)}
          >
            <div className="flex flex-col items-center pt-2" aria-hidden="true">
              <motion.span
                className="h-2 w-2 shrink-0 rounded-full bg-secondary shadow-[0_0_8px_rgba(193,128,255,0.7)]"
                initial={reduce ? { scale: 1 } : { scale: 0 }}
                whileInView={reduce ? undefined : { scale: [0, 1.4, 1] }}
                viewport={{ once: true }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 15,
                  delay: index * 0.1,
                }}
              />
              <motion.span
                className="mt-2 w-px bg-outline-variant/30"
                initial={reduce ? { scaleY: 1 } : { scaleY: 0 }}
                whileInView={reduce ? undefined : { scaleY: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.8,
                  ease: 'easeOut',
                  delay: index * 0.1,
                }}
                style={{ transformOrigin: "top", display: "block", height: "100%" }}
              />
            </div>
            <ExperienceCard item={item} reduce={reduce} ui={ui} />
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}

export default Experience;
