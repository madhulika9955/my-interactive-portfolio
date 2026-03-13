import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, hsl(155 80% 45%), hsl(200 80% 50%), hsl(270 60% 55%))",
      }}
    />
  );
};

export default ScrollProgress;
