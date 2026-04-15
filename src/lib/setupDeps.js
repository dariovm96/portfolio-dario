import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export function getSetupDeps() {
  return {
    motion: typeof motion,
    emailjs: typeof emailjs,
  };
}
