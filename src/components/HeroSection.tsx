import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.jpeg";

const roles = ["Data Engineer", "AI/ML Engineer", "Web Developer", "Full Stack Developer"];

const CountUp = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let frame: number;
    const duration = 1500;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [started, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  const imgRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center cosmic-bg overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      {/* Floating particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            backgroundColor: i % 3 === 0 ? 'hsl(var(--primary) / 0.4)' : i % 3 === 1 ? 'hsl(var(--cosmic) / 0.3)' : 'hsl(var(--nebula) / 0.3)',
          }}
          animate={{
            y: [0, -40 - Math.random() * 40, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.1, 0.7, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center pt-20">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-mono text-primary">Available for opportunities</span>
          </motion.div>

          <p className="text-primary font-mono text-sm mb-4">{"// Hello World, I'm"}</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Madhulika{" "}
            <span className="text-gradient">Singh</span>
          </h1>
          <div className="h-10 mb-6">
            <span className="text-2xl md:text-3xl text-muted-foreground">
              {text}
              <motion.span
                className="text-primary inline-block"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              >|</motion.span>
            </span>
          </div>
          <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed">
            Navigating the path with code and creativity. Building modern web apps, exploring AI/ML, and creating impactful solutions.
          </p>

          <div className="flex gap-4 mb-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="relative overflow-hidden group" asChild>
                <a href="#contact">
                  <span className="relative z-10">Connect with me</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary via-nebula to-primary"
                    style={{ backgroundSize: "200% 100%" }}
                    animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </motion.div>
          </div>

          <div className="flex gap-5">
            {[
              { href: "https://github.com/madhulika9955", icon: Github },
              { href: "https://www.linkedin.com/in/madhulika-singh-a34b9a28b", icon: Linkedin },
              { href: "mailto:smadhulika946@gmail.com", icon: Mail },
            ].map(({ href, icon: Icon }, i) => (
              <motion.a
                key={href}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="w-10 h-10 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
              >
                <Icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <motion.div
            ref={imgRef}
            className="relative"
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Orbiting ring */}
            <motion.div
              className="absolute inset-[-20px] rounded-full border border-primary/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
            </motion.div>
            <motion.div
              className="absolute inset-[-40px] rounded-full border border-cosmic/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-cosmic shadow-[0_0_8px_hsl(var(--cosmic))]" />
            </motion.div>

            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 glow-border relative">
              <img src={profileImg} alt="Madhulika Singh" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
            </div>

            <motion.div
              className="absolute -bottom-4 -right-4 bg-card border border-border rounded-2xl px-4 py-3 backdrop-blur-sm"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ transform: "translateZ(40px)" }}
              whileHover={{ scale: 1.1 }}
            >
              <p className="text-sm font-mono"><span className="text-primary"><CountUp target={5} suffix="+" /></span> Projects</p>
            </motion.div>
            <motion.div
              className="absolute -top-4 -left-4 bg-card border border-border rounded-2xl px-4 py-3 backdrop-blur-sm"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              style={{ transform: "translateZ(40px)" }}
              whileHover={{ scale: 1.1 }}
            >
              <p className="text-sm font-mono"><span className="text-cosmic"><CountUp target={5} suffix="+" /></span> Hackathons</p>
            </motion.div>
            <motion.div
              className="absolute top-1/2 -right-16 bg-card border border-border rounded-2xl px-4 py-3 backdrop-blur-sm"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{ transform: "translateZ(30px)" }}
              whileHover={{ scale: 1.1 }}
            >
              <p className="text-sm font-mono"><span className="text-nebula"><CountUp target={8} suffix="+" /></span> Certs</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
