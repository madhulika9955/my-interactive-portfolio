import { motion } from "framer-motion";
import { ExternalLink, Cpu, Eye, Vote, Car, Activity, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI Carbon Footprint Tracker",
    desc: "AI-based web app for carbon emission analysis and prediction.",
    tech: ["Python", "Flask", "ML", "HTML", "CSS", "JS"],
    icon: Leaf,
    color: "text-primary",
  },
  {
    title: "AI Forensic Evidence Analyzer",
    desc: "Crime data analysis using image and text processing with automated reports. SIH Finalist.",
    tech: ["Python", "OpenCV", "NLP", "ML", "Flask"],
    icon: Cpu,
    color: "text-cosmic",
  },
  {
    title: "Eye Disease Detector",
    desc: "AI-powered system for early eye disease detection using image processing.",
    tech: ["Python", "OpenCV", "Flask", "HTML", "CSS"],
    icon: Eye,
    color: "text-nebula",
  },
  {
    title: "ASHA Digital Assistance",
    desc: "Health record management and monitoring platform for ASHA workers.",
    tech: ["Python", "Flask", "MySQL", "HTML", "CSS", "JS"],
    icon: Activity,
    color: "text-primary",
  },
  {
    title: "Online Voting System",
    desc: "Secure online voting platform with authentication and real-time voting.",
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    icon: Vote,
    color: "text-cosmic",
  },
  {
    title: "Car Rental Service App",
    desc: "Console-based rental booking & management system.",
    tech: ["Java", "OOP"],
    icon: Car,
    color: "text-nebula",
  },
];

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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-card border border-border rounded-xl p-6 card-hover relative overflow-hidden"
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-cosmic/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <project.icon className={`h-10 w-10 ${project.color} mb-4`} />
              <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs bg-secondary text-muted-foreground px-2.5 py-1 rounded-md font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
