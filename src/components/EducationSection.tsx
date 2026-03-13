import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "ABES Institute of Technology, Ghaziabad",
    degree: "B.Tech in Computer Science & Artificial Intelligence",
    period: "2023 – 2027",
    grade: "In Progress",
  },
  {
    school: "Vanasthali Public School",
    degree: "Senior Secondary (CBSE) — PCM",
    period: "2022 – 2023",
    grade: "80%",
  },
  {
    school: "Vanasthali Public School",
    degree: "Secondary (CBSE)",
    period: "2020 – 2021",
    grade: "95.6%",
  },
];

const EducationSection = () => (
  <section id="education" className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Academic <span className="text-gradient">Trajectory</span>
        </h2>
        <div className="w-20 h-1 bg-primary rounded mb-10" />
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />

        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`relative flex items-start mb-12 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Dot */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

            <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
              <div className="bg-card border border-border rounded-xl p-6 card-hover">
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span className="text-xs font-mono text-primary">{edu.period}</span>
                </div>
                <h3 className="font-semibold text-lg mb-1">{edu.school}</h3>
                <p className="text-sm text-muted-foreground mb-2">{edu.degree}</p>
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-mono">
                  {edu.grade}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
