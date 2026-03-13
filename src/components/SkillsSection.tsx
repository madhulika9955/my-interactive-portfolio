import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: 85 },
      { name: "Java", level: 70 },
      { name: "C", level: 65 },
    ],
  },
  {
    title: "Web Technologies",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Bootstrap", level: 75 },
    ],
  },
  {
    title: "Tools & Frameworks",
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "Flask", level: 75 },
      { name: "Docker", level: 55 },
    ],
  },
  {
    title: "Database & Core",
    skills: [
      { name: "MySQL", level: 75 },
      { name: "OOP", level: 80 },
      { name: "Data Structures", level: 75 },
      { name: "AI / ML", level: 70 },
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 cosmic-bg">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Core <span className="text-gradient">Capacities</span>
        </h2>
        <div className="w-20 h-1 bg-primary rounded mb-10" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-card border border-border rounded-xl p-6 group hover:border-primary/30 transition-colors duration-300"
          >
            <h3 className="text-lg font-semibold mb-5 text-primary font-mono">{`// ${cat.title}`}</h3>
            <div className="space-y-4">
              {cat.skills.map((skill, si) => (
                <div key={skill.name} className="group/skill">
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="group-hover/skill:text-primary transition-colors">{skill.name}</span>
                    <span className="text-muted-foreground font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-2.5 bg-secondary rounded-full overflow-hidden relative">
                    <motion.div
                      className="h-full rounded-full relative"
                      style={{
                        background: `linear-gradient(90deg, hsl(var(--primary)), hsl(var(--nebula)))`,
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: si * 0.1, ease: "easeOut" }}
                    >
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)",
                          backgroundSize: "200% 100%",
                        }}
                        animate={{ backgroundPosition: ["200% 0%", "-200% 0%"] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 + si * 0.1 }}
                      />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
