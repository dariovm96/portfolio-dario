import { useMemo } from "react";
import { useReducedMotion } from "framer-motion";

export function useMotionPrefs() {
  const prefersReducedMotion = useReducedMotion();

  return useMemo(() => {
    const reduce = Boolean(prefersReducedMotion);
    const canHover =
      typeof window !== "undefined" && typeof window.matchMedia === "function"
        ? window.matchMedia("(hover: hover)").matches
        : true;

    return {
      reduce,
      allowTransform: !reduce,
      canHoverMotion: !reduce && canHover,
    };
  }, [prefersReducedMotion]);
}
