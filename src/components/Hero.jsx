import { motion } from "framer-motion";
import { getSectionReveal } from "../motion/variants";
import { useMotionPrefs } from "../motion/useMotionPrefs";
import SectionShell from "./ui/SectionShell";
import CTAButton from "./ui/CTAButton";

function Hero({ data }) {
  const { reduce } = useMotionPrefs();
  const ctas = Array.isArray(data?.ctas) ? data.ctas : [];
  const fullName = typeof data?.fullName === "string" ? data.fullName.trim() : "";
  const nameParts = fullName ? fullName.split(/\s+/) : [];
  const surname = nameParts.length > 1 ? nameParts[nameParts.length - 1] : fullName;
  const givenNames = nameParts.length > 1 ? nameParts.slice(0, -1).join(" ") : "";
  const reveal = getSectionReveal(reduce);

  return (
    <SectionShell
      id="hero"
      title={null}
      labelledBy="hero-heading"
      headingLevel={1}
      tone="base"
      className="grid-pattern hero-halo"
      containerClassName="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.9fr)] lg:items-center"
    >
      <motion.div className="space-y-5" data-testid="hero-reveal-block" {...reveal}>
        <p className="font-label text-xs uppercase text-primary">{data?.location}</p>
        <h1 id="hero-heading" className="text-4xl font-headline font-bold md:text-6xl">
          {givenNames ? `${givenNames} ` : ""}
          <span className="text-gradient-surname">{surname}</span>
        </h1>
        <p className="text-xl text-on-surface-variant">{data?.title}</p>
        <p className="max-w-2xl text-on-surface-variant">{data?.tagline}</p>

        <div className="pt-2 flex flex-wrap gap-3">
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
      </motion.div>

      <motion.aside className="lg:justify-self-end w-full max-w-lg" aria-label="Zona visual del hero" {...reveal}>
        <motion.div
          data-testid="hero-visual-slot"
          aria-hidden="true"
          className="h-64 w-full rounded-3xl bg-surface-container-low tonal-layer-1 ring-1 ring-outline-variant/25 shadow-ambient-secondary hero-visual-depth md:h-72"
        />
      </motion.aside>

      <p className="sr-only" aria-live="polite">
        Sección hero cargada
      </p>
    </SectionShell>
  );
}

export default Hero;
