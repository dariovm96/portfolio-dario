import { motion } from "framer-motion";
import { getCtaInteract } from "../../motion/variants";
import { useMotionPrefs } from "../../motion/useMotionPrefs";

const variantClasses = {
  primary:
    "bg-primary text-surface shadow-ambient-primary hover:bg-primary/90 hover:shadow-[0_0_28px_rgba(107,255,143,0.28)]",
  secondary:
    "bg-surface-container-high text-on-surface ring-1 ring-outline-variant/30 hover:bg-surface-container-highest",
  ghost:
    "bg-transparent text-on-surface card-ghost-edge hover:bg-surface-container-high/45",
};

function CTAButton({ href, label, variant = "primary", ariaLabel, className = "" }) {
  const { reduce, canHoverMotion } = useMotionPrefs();

  if (!href || !label) {
    return null;
  }

  const interaction = getCtaInteract(reduce, canHoverMotion);

  return (
    <motion.a
      href={href}
      aria-label={ariaLabel ?? label}
      data-cta-variant={variant}
      data-motion-onset-ms="140"
      className={`${variantClasses[variant] ?? variantClasses.primary} inline-flex items-center justify-center rounded-xl px-5 py-3 font-label text-xs uppercase tracking-[0.05em] transition-colors ${className}`.trim()}
      whileHover={interaction.whileHover}
      whileTap={interaction.whileTap}
      whileFocus={interaction.whileFocus}
      transition={interaction.transition}
    >
      {label}
    </motion.a>
  );
}

export default CTAButton;
