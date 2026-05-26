import { motionTokens } from "./tokens";

const VIEWPORT_REVEAL = { once: true, amount: 0.25 };

export function getSectionReveal(reduce) {
  return {
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: motionTokens.amplitude.liftY },
    whileInView: { opacity: 1, y: 0 },
    viewport: VIEWPORT_REVEAL,
    transition: {
      duration: reduce ? motionTokens.duration.fast : motionTokens.duration.reveal,
      ease: motionTokens.easing.standard,
    },
  };
}

export function getStaggerContainer(reduce) {
  return {
    initial: "hidden",
    whileInView: "visible",
    viewport: VIEWPORT_REVEAL,
    variants: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: reduce ? 0 : motionTokens.stagger.list,
          delayChildren: reduce ? 0 : 0.04,
        },
      },
    },
  };
}

export function getItemReveal(reduce, delay = 0) {
  return {
    variants: {
      hidden: reduce ? { opacity: 0 } : { opacity: 0, y: motionTokens.amplitude.microY },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: reduce ? motionTokens.duration.fast : motionTokens.duration.base,
          ease: motionTokens.easing.standard,
          delay: reduce ? 0 : Math.min(delay, motionTokens.stagger.max),
        },
      },
    },
  };
}

export function getCardInteract(reduce, canHover) {
  return {
    whileHover: !reduce && canHover ? { scale: motionTokens.amplitude.hoverScale, y: -motionTokens.amplitude.microY } : undefined,
    whileTap: !reduce ? { scale: motionTokens.amplitude.tapScale } : { opacity: 0.96 },
    whileFocus: !reduce ? { scale: 1.01 } : { opacity: 0.98 },
    transition: {
      duration: motionTokens.duration.fast,
      ease: motionTokens.easing.standard,
    },
  };
}

export function getCtaInteract(reduce, canHover) {
  return {
    whileHover: !reduce && canHover ? { y: -motionTokens.amplitude.microY, scale: 1.01 } : undefined,
    whileTap: !reduce ? { scale: motionTokens.amplitude.tapScale } : { opacity: 0.94 },
    whileFocus: !reduce ? { scale: 1.01 } : { opacity: 0.98 },
    transition: {
      duration: motionTokens.duration.fast,
      ease: motionTokens.easing.standard,
    },
  };
}

// Tiered hero text reveal — each text element enters with its own lift/delay/duration
export function getHeroTextReveal(reduce, tier = 0) {
  const lifts     = [8, 24, 12, 8, 6];
  const delays    = [0, 0.06, 0.18, 0.28, 0.38];
  const durations = [0.3, 0.55, 0.4, 0.38, 0.32];
  return {
    initial:  reduce ? { opacity: 0 } : { opacity: 0, y: lifts[tier] },
    animate:  { opacity: 1, y: 0 },
    transition: {
      duration: reduce ? 0.01 : durations[tier],
      delay:    reduce ? 0    : delays[tier],
      ease: [0.22, 1, 0.36, 1],
    },
  };
}

// Directional entrance — cards entering from different directions
export function getDirectionalReveal(reduce, direction = 'up', delay = 0) {
  const from = {
    left:  { x: -24, opacity: 0 },
    right: { x: 24, opacity: 0 },
    up:    { y: 16, opacity: 0 },
    down:  { y: -16, opacity: 0 },
  };
  return {
    initial:     reduce ? { opacity: 0 } : from[direction],
    whileInView: { x: 0, y: 0, opacity: 1 },
    viewport:    { once: true, amount: 0.3 },
    transition:  { duration: 0.45, delay: reduce ? 0 : delay, ease: [0.22, 1, 0.36, 1] },
  };
}

// Spring stagger container for chips
export function getStaggerChips(reduce) {
  return {
    variants: {
      hidden:   { opacity: 0 },
      visible:  { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
    },
    initial:     'hidden',
    whileInView: 'visible',
    viewport:    { once: true, amount: 0.3 },
  };
}

// Individual chip item variant (used as child of getStaggerChips)
export const chipItemVariant = {
  hidden:   { scale: 0.5, opacity: 0 },
  visible:  { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 400, damping: 20 } },
};

// Cascading grid stagger container for project cards
export function getCascadingGrid(reduce) {
  return {
    variants: {
      hidden:  { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
    },
    initial:     'hidden',
    whileInView: 'visible',
    viewport:    { once: true, amount: 0.15 },
  };
}

// Per-card cascading variant (pass index for offset)
export function getCascadingCard(reduce, index = 0) {
  const yOffset = reduce ? 0 : 20 + (index % 3) * 8;
  return {
    variants: {
      hidden:  { opacity: 0, y: yOffset },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    },
  };
}
