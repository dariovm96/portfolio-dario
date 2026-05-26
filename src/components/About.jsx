import { motion } from "framer-motion";
import { getStaggerContainer, getCardInteract, getDirectionalReveal } from "../motion/variants";
import { motionTokens } from "../motion/tokens";
import { useMotionPrefs } from "../motion/useMotionPrefs";
import SectionShell from "./ui/SectionShell";
import CardShell from "./ui/CardShell";
import MetaLabel from "./ui/MetaLabel";
import { useLanguage } from "../contexts/LanguageContext";

const chipContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
};

const chipItemVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 400, damping: 20 },
  },
};

function About({ data }) {
  const { content } = useLanguage();
  const { reduce, canHoverMotion } = useMotionPrefs();
  const ui = content?.ui?.about ?? {};
  const interests = Array.isArray(data?.interests) ? data.interests : [];

  const containerMotion = getStaggerContainer(reduce);

  return (
    <SectionShell id="about" title={ui.sectionTitle ?? "Sobre mí"} tone="section" containerClassName="space-y-6">
      <motion.div className="space-y-6" {...containerMotion}>
        <motion.div {...getDirectionalReveal(reduce, "left", 0)}>
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

        <motion.div {...getDirectionalReveal(reduce, "right", 0.1)}>
          <CardShell
            as="article"
            borderStyle="emphasis"
            className="space-y-4 p-5 md:!p-5 tonal-layer-2 ring-1 ring-outline-variant/15"
          >
            <MetaLabel as="p">{ui.personalProfile ?? "Perfil personal"}</MetaLabel>
            <p className="text-on-surface-variant">{data?.personalSummary}</p>
          </CardShell>
        </motion.div>

        <motion.div {...getDirectionalReveal(reduce, "up", 0.2)}>
          <MetaLabel as="h3" className="mb-3 text-primary">
            {ui.interests ?? "Intereses"}
          </MetaLabel>
          <motion.ul
            className="flex flex-wrap gap-2"
            variants={chipContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {interests.map((item, index) => (
              <motion.li
                key={index}
                className="rounded-full bg-surface-container-high px-3 py-1 font-label text-xs uppercase text-on-surface-variant"
                variants={chipItemVariants}
                whileHover={!reduce ? { scale: 1.05 } : undefined}
                transition={{ duration: motionTokens.duration.fast }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </SectionShell>
  );
}

export default About;
