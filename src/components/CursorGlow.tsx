import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[9999]"
      animate={{ opacity: visible ? 1 : 0 }}
    >
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(155 80% 45% / 0.07) 0%, hsl(270 60% 55% / 0.04) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{ x: pos.x - 250, y: pos.y - 250 }}
        transition={{ type: "spring", damping: 25, stiffness: 150, mass: 0.5 }}
      />
    </motion.div>
  );
};

export default CursorGlow;
