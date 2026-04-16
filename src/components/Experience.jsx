import SectionShell from "./ui/SectionShell";
import CardShell from "./ui/CardShell";
import MetaLabel from "./ui/MetaLabel";

function Experience({ data }) {
  const experiences = Array.isArray(data) ? data : [];

  return (
    <SectionShell id="experience" title="Experiencia" tone="section">
      <div className="mt-8 space-y-5" data-testid="experience-timeline">
        {experiences.map((item) => (
          <div key={`${item.company}-${item.period}`} className="grid grid-cols-[16px_1fr] gap-4 md:gap-5">
            <div className="flex flex-col items-center pt-2" aria-hidden="true">
              <span className="h-2 w-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(193,128,255,0.7)]" />
              <span className="mt-2 h-full w-px bg-outline-variant/30" />
            </div>
            <CardShell as="article" className="space-y-3.5" richness="nested">
              <h3 className="text-xl">{item.role}</h3>
              <div className="flex flex-wrap items-center gap-2">
                <MetaLabel as="p" className="text-primary">
                  {item.company}
                </MetaLabel>
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
              <ul className="list-disc space-y-1 pl-5 text-on-surface-variant">
                {(item?.achievements ?? []).map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </CardShell>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

export default Experience;
