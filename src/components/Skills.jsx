import { motion } from "framer-motion";
import { getItemReveal, getStaggerContainer } from "../motion/variants";
import { useMotionPrefs } from "../motion/useMotionPrefs";
import SectionShell from "./ui/SectionShell";
import CardShell from "./ui/CardShell";
import MetaLabel from "./ui/MetaLabel";

const LEVEL_WEIGHT = {
  Aprendiendo: 3,
  Intermedio: 6,
  Avanzado: 9,
};

function LevelBlocks({ level }) {
  const activeBlocks = LEVEL_WEIGHT[level] ?? 5;

  return (
    <div className="mt-1.5 flex flex-wrap gap-1" data-testid="skills-level-indicator" aria-label={`Nivel ${level}`}>
      {Array.from({ length: 10 }).map((_, index) => (
        <span
          key={`level-${index}`}
          className={`h-1.5 w-3.5 rounded-[2px] ${index < activeBlocks ? "bg-primary" : "bg-outline-variant/30"}`}
        />
      ))}
    </div>
  );
}

function Skills({ data }) {
  const { reduce } = useMotionPrefs();
  const categories = Array.isArray(data?.categories) ? data.categories : [];
  const containerMotion = getStaggerContainer(reduce);

  return (
    <SectionShell id="skills" title="Habilidades" tone="base">
      <motion.div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3" data-testid="skills-reveal-container" {...containerMotion}>
        {categories.map((category, index) => (
          <motion.div key={category.name} {...getItemReveal(reduce, index * 0.03)}>
            <CardShell as="article" className="space-y-3 p-4 md:p-5" richness="nested">
            <MetaLabel as="h3" className="text-primary">
              {category.name}
            </MetaLabel>
            <ul className="space-y-2.5">
              {(category?.items ?? []).map((item) => (
                <li key={item.name} className="rounded-lg bg-surface-container-high/60 tonal-layer-2 p-2.5 ring-1 ring-outline-variant/15">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-medium text-on-surface">{item.name}</p>
                    <MetaLabel className="text-[10px] text-outline">{item.badge || item.level}</MetaLabel>
                  </div>
                  <LevelBlocks level={item.level} />
                </li>
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
