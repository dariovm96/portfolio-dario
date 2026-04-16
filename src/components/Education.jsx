import SectionShell from "./ui/SectionShell";
import CardShell from "./ui/CardShell";
import MetaLabel from "./ui/MetaLabel";

function Education({ data }) {
  const educationItems = Array.isArray(data) ? data : [];

  return (
    <SectionShell id="education" title="Educación" tone="base">
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {educationItems.map((item) => (
          <CardShell key={`${item.title}-${item.period}`} as="article" className="space-y-2" ghostOutline>
            <h3>{item.title}</h3>
            <p className="text-on-surface-variant">{item.institution}</p>
            <MetaLabel className="text-outline">{item.period}</MetaLabel>
          </CardShell>
        ))}
      </div>
    </SectionShell>
  );
}

export default Education;
