import { motion } from "framer-motion";
import { getSectionReveal } from "../motion/variants";
import { useMotionPrefs } from "../motion/useMotionPrefs";
import SectionShell from "./ui/SectionShell";
import CTAButton from "./ui/CTAButton";
import BinaryBackground from "./BinaryBackground";
import profilePhoto from "../assets/foto_perfil.png";

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
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <BinaryBackground />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, rgba(10,22,40,0.93) 40%, rgba(10,22,40,0.15) 100%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />
      <motion.div className="space-y-5" data-testid="hero-reveal-block" style={{ position: 'relative', zIndex: 2 }} {...reveal}>
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

      <motion.aside className="lg:justify-self-end w-full max-w-lg" aria-label="Zona visual del hero" style={{ position: 'relative', zIndex: 3 }} {...reveal}>
        <motion.div
          data-testid="hero-visual-slot"
          aria-hidden="true"
          className="mx-auto flex h-[280px] w-[280px] items-center justify-center rounded-full bg-surface-container-low tonal-layer-1 ring-1 ring-outline-variant/25 shadow-ambient-secondary hero-visual-depth overflow-hidden"
          style={{ position: 'relative', zIndex: 3 }}
        >
          <img
            src={profilePhoto}
            alt="Foto de perfil"
            className="h-full w-full object-cover object-top"
          />
        </motion.div>
      </motion.aside>

      <p className="sr-only" aria-live="polite">
        Sección hero cargada
      </p>
    </SectionShell>
  );
}

export default Hero;
