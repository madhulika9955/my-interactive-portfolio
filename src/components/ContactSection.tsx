import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open Gmail compose with pre-filled data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=smadhulika946@gmail.com&su=${subject}&body=${body}`, "_blank");
    
    toast({
      title: "Opening Gmail ✨",
      description: "Gmail compose window is opening with your message!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Initiate <span className="text-gradient">Contact</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              Ready for a cosmic collaboration or just want to chat about tech? Reach out through any channel below!
            </p>

            <div className="space-y-4">
              <a
                href="mailto:smadhulika946@gmail.com"
                className="flex items-center gap-4 bg-card border border-border rounded-xl p-4 card-hover group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-sm">smadhulika946@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+919643085816"
                className="flex items-center gap-4 bg-card border border-border rounded-xl p-4 card-hover group"
              >
                <div className="w-12 h-12 rounded-lg bg-cosmic/10 flex items-center justify-center group-hover:bg-cosmic/20 transition-colors">
                  <Phone className="h-5 w-5 text-cosmic" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone / Call</p>
                  <p className="font-medium text-sm">+91 96430 85816</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/madhulika-singh-a34b9a28b"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 bg-card border border-border rounded-xl p-4 card-hover group"
              >
                <div className="w-12 h-12 rounded-lg bg-nebula/10 flex items-center justify-center group-hover:bg-nebula/20 transition-colors">
                  <Linkedin className="h-5 w-5 text-nebula" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-medium text-sm">madhulika-singh</p>
                </div>
              </a>

              <a
                href="https://github.com/madhulika9955"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 bg-card border border-border rounded-xl p-4 card-hover group"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Github className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <p className="font-medium text-sm">madhulika9955</p>
                </div>
              </a>

              <div className="flex items-center gap-4 bg-card border border-border rounded-xl p-4">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-sm">Ghaziabad, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form → Gmail */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-6 space-y-5">
              <h3 className="text-lg font-semibold mb-2">Send a Message via Gmail</h3>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Your Name</label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Your Email</label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Let's collaborate on something amazing..."
                  rows={5}
                />
              </div>
              <Button type="submit" className="w-full gap-2" size="lg">
                <Send className="h-4 w-4" /> Send via Gmail
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
