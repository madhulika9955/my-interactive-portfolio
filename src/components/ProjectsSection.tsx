import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Cpu, Eye, Vote, Car, Activity, Leaf } from "lucide-react";

const projects = [
  {
    title: "AI Carbon Footprint Tracker",
    desc: "AI-based web app for carbon emission analysis and prediction.",
    tech: ["Python", "Flask", "ML", "HTML", "CSS", "JS"],
    icon: Leaf,
    color: "text-primary",
    gradient: "from-primary/20 to-nebula/10",
  },
  {
    title: "AI Forensic Evidence Analyzer",
    desc: "Crime data analysis using image and text processing with automated reports. SIH Finalist.",
    tech: ["Python", "OpenCV", "NLP", "ML", "Flask"],
    icon: Cpu,
    color: "text-cosmic",
    gradient: "from-cosmic/20 to-primary/10",
  },
  {
    title: "Eye Disease Detector",
    desc: "AI-powered system for early eye disease detection using image processing.",
    tech: ["Python", "OpenCV", "Flask", "HTML", "CSS"],
    icon: Eye,
    color: "text-nebula",
    gradient: "from-nebula/20 to-cosmic/10",
  },
  {
    title: "ASHA Digital Assistance",
    desc: "Health record management and monitoring platform for ASHA workers.",
    tech: ["Python", "Flask", "MySQL", "HTML", "CSS", "JS"],
    icon: Activity,
    color: "text-primary",
    gradient: "from-primary/20 to-cosmic/10",
  },
  {
    title: "Online Voting System",
    desc: "Secure online voting platform with authentication and real-time voting.",
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    icon: Vote,
    color: "text-cosmic",
    gradient: "from-cosmic/20 to-nebula/10",
  },
  {
    title: "Car Rental Service App",
    desc: "Console-based rental booking & management system.",
    tech: ["Java", "OOP"],
    icon: Car,
    color: "text-nebula",
    gradient: "from-nebula/20 to-primary/10",
  },
];

const TiltCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className="group bg-card border border-border rounded-xl p-6 relative overflow-hidden cursor-default"
    >
      {/* Gradient hover backdrop */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Spotlight effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useTransform(
            [x, y],
            ([latestX, latestY]) =>
              `radial-gradient(circle at ${((latestX as number) + 0.5) * 100}% ${((latestY as number) + 0.5) * 100}%, hsl(var(--primary) / 0.1) 0%, transparent 60%)`
          ),
        }}
      />

      <div className="relative z-10" style={{ transform: "translateZ(20px)" }}>
        <motion.div whileHover={{ rotate: 12, scale: 1.1 }} transition={{ type: "spring" }}>
          <project.icon className={`h-10 w-10 ${project.color} mb-4`} />
        </motion.div>
        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.desc}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="text-xs bg-secondary/80 text-muted-foreground px-2.5 py-1 rounded-md font-mono border border-border/50 group-hover:border-primary/20 transition-colors">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => (
  <section id="projects" className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Cosmic <span className="text-gradient">Creations</span>
        </h2>
        <div className="w-20 h-1 bg-primary rounded mb-10" />
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: "1000px" }}>
        {projects.map((project, i) => (
          <TiltCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
