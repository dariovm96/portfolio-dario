import SectionShell from "./ui/SectionShell";
import CardShell from "./ui/CardShell";
import MetaLabel from "./ui/MetaLabel";

function About({ data }) {
  const interests = Array.isArray(data?.interests) ? data.interests : [];

  return (
    <SectionShell id="about" title="Sobre mí" tone="section" containerClassName="space-y-6">
      <CardShell
        as="article"
        tone="high"
        borderStyle="emphasis"
        className="space-y-4 p-5 md:!p-5 shadow-[0_14px_34px_rgba(0,0,0,0.28)]"
      >
        <MetaLabel as="p">Perfil profesional</MetaLabel>
        <p>{data?.professionalSummary}</p>
      </CardShell>

      <CardShell
        as="article"
        borderStyle="emphasis"
        className="space-y-4 p-5 md:!p-5 tonal-layer-2 ring-1 ring-outline-variant/15"
      >
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
