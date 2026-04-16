import SectionShell from "./ui/SectionShell";
import CTAButton from "./ui/CTAButton";

function Hero({ data }) {
  const ctas = Array.isArray(data?.ctas) ? data.ctas : [];

  return (
    <SectionShell
      id="hero"
      title={null}
      labelledBy="hero-heading"
      headingLevel={1}
      tone="base"
      className="grid-pattern"
      containerClassName="space-y-4"
    >
      <p className="font-label text-xs uppercase text-primary">{data?.location}</p>
      <h1 id="hero-heading" className="text-4xl font-headline font-bold md:text-6xl">
        {data?.fullName}
      </h1>
      <p className="text-xl text-on-surface-variant">{data?.title}</p>
      <p className="max-w-3xl text-on-surface-variant">{data?.tagline}</p>

      <div
        data-testid="hero-visual-slot"
        aria-hidden="true"
        className="mt-6 h-48 w-full rounded-3xl bg-surface-container-low shadow-ambient-secondary md:max-w-xl"
      />

      <div className="mt-8 flex flex-wrap gap-3">
        {ctas.map((cta) => (
          <CTAButton
            key={cta.label}
            href={cta.href}
            label={cta.label}
            ariaLabel={`CTA ${cta.label}`}
            variant={cta.variant}
          />
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        Sección hero cargada
      </p>
    </SectionShell>
  );
}

export default Hero;
