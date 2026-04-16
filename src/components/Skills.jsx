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
    <div className="mt-2 flex gap-1" data-testid="skills-level-indicator" aria-label={`Nivel ${level}`}>
      {Array.from({ length: 10 }).map((_, index) => (
        <span
          key={`level-${index}`}
          className={`h-2 w-4 rounded-sm ${index < activeBlocks ? "bg-primary" : "bg-outline-variant/30"}`}
        />
      ))}
    </div>
  );
}

function Skills({ data }) {
  const categories = Array.isArray(data?.categories) ? data.categories : [];

  return (
    <SectionShell id="skills" title="Habilidades" tone="base">
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {categories.map((category) => (
          <CardShell key={category.name} as="article" className="space-y-3">
            <MetaLabel as="h3" className="text-primary">
              {category.name}
            </MetaLabel>
            <ul className="space-y-3">
              {(category?.items ?? []).map((item) => (
                <li key={item.name} className="rounded-xl bg-surface-container-high/60 p-3">
                  <p className="text-on-surface">{item.name}</p>
                  <MetaLabel>{item.badge || item.level}</MetaLabel>
                  <LevelBlocks level={item.level} />
                </li>
              ))}
            </ul>
          </CardShell>
        ))}
      </div>
    </SectionShell>
  );
}

export default Skills;
