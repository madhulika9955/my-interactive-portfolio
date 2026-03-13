import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    role: "Software Development Engineer Intern",
    company: "Bluestock Fintech",
    period: "Mar 2025 – Apr 2025",
    description: [
      "Developed and integrated RESTful APIs for fintech features including IPO listings, stock data, and user portfolio management using Python and Flask.",
      "Built responsive front-end components for the Bluestock web platform using HTML, CSS, JavaScript, and Bootstrap, improving UI consistency across modules.",
      "Collaborated with a cross-functional team to implement and test new product features following agile development practices.",
    ],
    tech: ["Python", "Flask", "REST APIs", "HTML", "CSS", "JavaScript", "Bootstrap", "Agile"],
    color: "primary",
  },
  {
    role: "Frontend Developer Intern",
    company: "Happieloop Technologies",
    period: "Dec 2025 – Mar 2026",
    description: [
      "Developed responsive and user-friendly web interfaces using HTML, CSS, JavaScript, and Tailwind CSS.",
      "Optimized website performance and ensured cross-browser compatibility across major browsers.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    color: "cosmic",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Professional <span className="text-gradient">Experience</span>
        </h2>
        <div className="w-20 h-1 bg-primary rounded mb-10" />
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="relative pl-16 md:pl-20 mb-12 last:mb-0"
          >
            {/* Timeline dot */}
            <motion.div
              className={`absolute left-6 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-${exp.color} border-4 border-background z-10`}
              whileInView={{ scale: [0, 1.3, 1] }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 + 0.1, type: "spring" }}
            />

            {/* Pulse ring */}
            <motion.div
              className={`absolute left-6 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-${exp.color}/30`}
              animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
            />

            <motion.div
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
              whileHover={{ y: -4, boxShadow: "0 10px 40px -15px hsl(var(--primary) / 0.15)" }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                <div className="flex items-center gap-2">
                  <Briefcase className={`h-5 w-5 text-${exp.color}`} />
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{exp.role}</h3>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`text-sm font-semibold text-${exp.color}`}>{exp.company}</span>
                <span className="text-muted-foreground text-xs">•</span>
                <span className="text-xs text-muted-foreground flex items-center gap-1 font-mono">
                  <Calendar className="h-3 w-3" />
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2 mb-5">
                {exp.description.map((point, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + j * 0.1 }}
                    className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                  >
                    <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-secondary/80 text-muted-foreground px-2.5 py-1 rounded-md font-mono border border-border/50 group-hover:border-primary/20 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
