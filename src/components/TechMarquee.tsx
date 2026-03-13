import { motion } from "framer-motion";

const techs = [
  "Python", "Java", "JavaScript", "PHP", "SQL", "HTML5", "CSS3", "React.js",
  "Flask", "Node.js", "Tailwind CSS", "Bootstrap", "REST APIs", "MySQL", "MongoDB",
  "Docker", "Git", "OpenCV", "TensorFlow", "Keras", "Scikit-learn", "NumPy",
  "Pandas", "Power BI", "NLP", "Deep Learning", "Postman", "Linux", "Agile",
];

const TechMarquee = () => (
  <div className="py-12 overflow-hidden border-y border-border/50 relative">
    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
    <motion.div
      className="flex gap-8 whitespace-nowrap"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    >
      {[...techs, ...techs].map((tech, i) => (
        <span
          key={i}
          className="text-lg font-mono text-muted-foreground/40 hover:text-primary transition-colors duration-300 cursor-default select-none"
        >
          {tech}
        </span>
      ))}
    </motion.div>
  </div>
);

export default TechMarquee;
