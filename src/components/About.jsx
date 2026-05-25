import { motion } from "framer-motion";
import { getStaggerContainer, getItemReveal, getCardInteract } from "../motion/variants";
import { motionTokens } from "../motion/tokens";
import { useMotionPrefs } from "../motion/useMotionPrefs";
import SectionShell from "./ui/SectionShell";
import CardShell from "./ui/CardShell";
import MetaLabel from "./ui/MetaLabel";
import { useLanguage } from "../contexts/LanguageContext";

function About({ data }) {
  const { content } = useLanguage();
  const { reduce, canHoverMotion } = useMotionPrefs();
  const ui = content?.ui?.about ?? {};
  const interests = Array.isArray(data?.interests) ? data.interests : [];

  const containerMotion = getStaggerContainer(reduce);

  return (
    <SectionShell id="about" title={ui.sectionTitle ?? "Sobre mí"} tone="section" containerClassName="space-y-6">
      <motion.div className="space-y-6" {...containerMotion}>
        <motion.div {...getItemReveal(reduce)}>
          <motion.div {...getCardInteract(reduce, canHoverMotion)}>
            <CardShell
              as="article"
              tone="high"
              borderStyle="emphasis"
              className="space-y-4 p-5 md:!p-5 shadow-[0_14px_34px_rgba(0,0,0,0.28)]"
            >
              <MetaLabel as="p">{ui.professionalProfile ?? "Perfil profesional"}</MetaLabel>
              <p>{data?.professionalSummary}</p>
            </CardShell>
          </motion.div>
        </motion.div>

        <motion.div {...getItemReveal(reduce)}>
          <CardShell
            as="article"
            borderStyle="emphasis"
            className="space-y-4 p-5 md:!p-5 tonal-layer-2 ring-1 ring-outline-variant/15"
          >
            <MetaLabel as="p">{ui.personalProfile ?? "Perfil personal"}</MetaLabel>
            <p className="text-on-surface-variant">{data?.personalSummary}</p>
          </CardShell>
        </motion.div>

        <motion.div {...getItemReveal(reduce)}>
          <MetaLabel as="h3" className="mb-3 text-primary">
            {ui.interests ?? "Intereses"}
          </MetaLabel>
          <ul className="flex flex-wrap gap-2">
            {interests.map((item) => (
              <motion.li
                key={item}
                className="rounded-full bg-surface-container-high px-3 py-1 font-label text-xs uppercase text-on-surface-variant"
                whileHover={!reduce ? { scale: 1.05 } : undefined}
                transition={{ duration: motionTokens.duration.fast }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </SectionShell>
  );
}

export default About;
