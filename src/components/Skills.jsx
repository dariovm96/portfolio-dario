import { motion } from "framer-motion";
import { getCardInteract, getItemReveal, getStaggerContainer } from "../motion/variants";
import { useMotionPrefs } from "../motion/useMotionPrefs";
import { motionTokens } from "../motion/tokens";
import SectionShell from "./ui/SectionShell";
import CardShell from "./ui/CardShell";
import MetaLabel from "./ui/MetaLabel";
import { useLanguage } from "../contexts/LanguageContext";

function SkillChip({ name, icon, color, iconUrl }) {
  const { reduce, canHoverMotion } = useMotionPrefs();
  const resolvedSrc = iconUrl
    ? iconUrl
    : icon
      ? `https://cdn.simpleicons.org/${icon}/${color ?? 'a8abb3'}`
      : null;

  const chipMotion = {
    whileHover: canHoverMotion && !reduce ? { scale: 1.06, y: -2 } : undefined,
    transition: { duration: motionTokens.duration.fast, ease: "easeOut" },
  };

  if (!resolvedSrc) {
    return (
      <motion.li
        className="flex items-center justify-center rounded-lg bg-surface-container-high/60 px-2 py-2.5 w-[76px] sm:w-[84px] ring-1 ring-outline-variant/15 transition-colors hover:bg-surface-container-highest/80 hover:ring-outline-variant/30"
        {...chipMotion}
      >
        <span className="text-xs font-medium text-on-surface-variant text-center leading-tight">{name}</span>
      </motion.li>
    );
  }

  return (
    <motion.li
      title={name}
      className="flex flex-col items-center gap-1.5 rounded-lg bg-surface-container-high/60 px-2 py-2.5 w-[76px] sm:w-[84px] ring-1 ring-outline-variant/15 transition-colors hover:bg-surface-container-highest/80 hover:ring-outline-variant/30"
      {...chipMotion}
    >
      <img
        src={resolvedSrc}
        alt=""
        aria-hidden="true"
        width={36}
        height={36}
        loading="lazy"
      />
      <span className="text-xs font-medium text-on-surface-variant text-center leading-tight">{name}</span>
    </motion.li>
  );
}

function Skills({ data }) {
  const { reduce, canHoverMotion } = useMotionPrefs();
  const { content } = useLanguage();
  const ui = content?.ui?.skills ?? {};
  const categories = Array.isArray(data?.categories) ? data.categories : [];
  const containerMotion = getStaggerContainer(reduce);

  return (
    <SectionShell id="skills" title={ui.sectionTitle ?? "Habilidades"} tone="base">
      <motion.div
        className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        data-testid="skills-reveal-container"
        {...containerMotion}
      >
        {categories.map((category, index) => (
          <motion.div
            key={index}
            {...getItemReveal(reduce, index * 0.03)}
            {...getCardInteract(reduce, canHoverMotion)}
            whileHover={canHoverMotion && !reduce ? { scale: 1.02, y: -4, boxShadow: "0 0 24px rgba(193,128,255,0.10)" } : undefined}
          >
            <CardShell as="article" className="space-y-3 p-4 md:p-5 h-full" richness="nested">
              <MetaLabel as="h3" className="text-primary">
                {category.name}
              </MetaLabel>
              <ul className="flex flex-wrap gap-2">
                {(category?.items ?? []).map((item) => (
                  <SkillChip
                    key={item.name}
                    name={item.name}
                    icon={item.icon}
                    color={item.color}
                    iconUrl={item.iconUrl}
                  />
                ))}
              </ul>
            </CardShell>
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}

export default Skills;
