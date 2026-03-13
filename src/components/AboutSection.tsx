import { motion } from "framer-motion";
import { Code, Brain, Globe, Shield } from "lucide-react";

const highlights = [
  { icon: Code, label: "Web Development", desc: "Building responsive, modern UIs" },
  { icon: Brain, label: "AI / ML", desc: "Image processing & NLP projects" },
  { icon: Globe, label: "Full Stack", desc: "Flask, MySQL, JavaScript" },
  { icon: Shield, label: "Cybersecurity", desc: "Certified in security essentials" },
];

const AboutSection = () => (
  <section id="about" className="py-24 cosmic-bg">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          About <span className="text-gradient">My Universe</span>
        </h2>
        <div className="w-20 h-1 bg-primary rounded mb-10" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5 text-muted-foreground leading-relaxed"
        >
          <p>
            I am a <span className="text-foreground font-semibold">B.Tech student in Computer Science & Artificial Intelligence (2023–2027)</span> at
            ABES Institute of Technology, Ghaziabad. I'm passionate about building modern web applications,
            exploring AI/ML models, and creating impactful solutions that solve real-world problems.
          </p>
          <p>
            Over the past years, I have worked on <span className="text-foreground font-semibold">AI-powered projects</span> such as
            an Eye Disease Detector and AI Carbon Footprint Tracker, participated in multiple hackathons including SIH,
            and developed web systems like Online Voting and HealthTrackM.
          </p>
          <p>
            Currently interning as a <span className="text-primary font-semibold">Frontend Developer at Happieloop Technologies</span>,
            building responsive interfaces with HTML, CSS, JavaScript, and Tailwind CSS.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-5 card-hover cursor-default"
            >
              <item.icon className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-sm mb-1">{item.label}</h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
