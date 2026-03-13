import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";

const certificates = [
  { title: "Cyber Security Essentials", issuer: "Coursera", year: "2024" },
  { title: "Generative AI for Everyone", issuer: "Google", year: "2024" },
  { title: "Python Essentials", issuer: "Cisco", year: "2024" },
  { title: "Introduction to AI", issuer: "SkillUp", year: "2024" },
  { title: "Foundations of Cybersecurity", issuer: "Google", year: "2024" },
  { title: "Intro to Generative AI", issuer: "Microsoft", year: "2024" },
  { title: "Data Manipulation in Python", issuer: "Udemy", year: "2025" },
  { title: "JSP & MySQL Foundation", issuer: "CRC Training", year: "2025" },
];

const achievements = [
  "SIH Finalist – AI Forensic Evidence Analyser",
  "Google Cloud Arcade Legend",
  "IGNETION Hackathon – Eye Disease Detector",
  "Solutions Challenge – Online Voting System",
  "Hacknovate 5.0 – HealthTrackM",
];

const CertificatesSection = () => (
  <section id="certificates" className="py-24 cosmic-bg">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Interstellar <span className="text-gradient">Achievements</span>
        </h2>
        <div className="w-20 h-1 bg-primary rounded mb-10" />
      </motion.div>

      {/* Hackathons */}
      <div className="mb-14">
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Trophy className="h-5 w-5 text-primary" /> Hackathons & Awards
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-4 flex items-center gap-3 card-hover"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Trophy className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm font-medium">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificates */}
      <div>
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Award className="h-5 w-5 text-cosmic" /> Certifications
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-card border border-border rounded-xl p-5 card-hover"
            >
              <Award className="h-6 w-6 text-cosmic mb-3" />
              <h4 className="text-sm font-semibold mb-1">{cert.title}</h4>
              <p className="text-xs text-muted-foreground">{cert.issuer} • {cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CertificatesSection;
