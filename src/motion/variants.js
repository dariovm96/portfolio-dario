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
