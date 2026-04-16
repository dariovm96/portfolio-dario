import SectionShell from "./ui/SectionShell";
import CardShell from "./ui/CardShell";
import MetaLabel from "./ui/MetaLabel";

function About({ data }) {
  const interests = Array.isArray(data?.interests) ? data.interests : [];

  return (
    <SectionShell id="about" title="Sobre mí" tone="section" containerClassName="space-y-6">
      <CardShell as="article" tone="high" className="space-y-4">
        <MetaLabel as="p">Perfil profesional</MetaLabel>
        <p>{data?.professionalSummary}</p>
      </CardShell>

      <CardShell as="article" className="space-y-4">
        <MetaLabel as="p">Perfil personal</MetaLabel>
        <p className="text-on-surface-variant">{data?.personalSummary}</p>
      </CardShell>

      <div>
        <MetaLabel as="h3" className="mb-3 text-primary">
          Intereses
        </MetaLabel>
        <ul className="flex flex-wrap gap-2">
          {interests.map((item) => (
            <li
              key={item}
              className="rounded-full bg-surface-container-high px-3 py-1 font-label text-xs uppercase text-on-surface-variant"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}

export default About;
