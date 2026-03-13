import { motion } from "framer-motion";

const SectionDivider = () => (
  <div className="flex justify-center py-2">
    <motion.div
      className="w-px h-16"
      style={{
        background: "linear-gradient(to bottom, transparent, hsl(155 80% 45% / 0.5), transparent)",
      }}
      initial={{ scaleY: 0, opacity: 0 }}
      whileInView={{ scaleY: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    />
  </div>
);

export default SectionDivider;
