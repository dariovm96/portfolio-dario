import { useMotionValue, useTransform, useSpring } from "framer-motion";

export function usePhotoTilt(reduce, canHoverMotion) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-140, 140], [6, -6]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-140, 140], [-6, 6]), { stiffness: 200, damping: 30 });

  function onMouseMove(e) {
    if (reduce || !canHoverMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  function onMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return { rotateX, rotateY, onMouseMove, onMouseLeave };
}
