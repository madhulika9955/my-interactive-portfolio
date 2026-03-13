import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground flex items-center gap-1">
        Made with <Heart className="h-4 w-4 text-primary fill-primary" /> by Madhulika Singh
      </p>
      <div className="flex gap-4">
        <a href="https://github.com/madhulika9955" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Github className="h-5 w-5" />
        </a>
        <a href="https://www.linkedin.com/in/madhulika-singh-a34b9a28b" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin className="h-5 w-5" />
        </a>
        <a href="mailto:smadhulika946@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
          <Mail className="h-5 w-5" />
        </a>
      </div>
      <p className="text-xs text-muted-foreground">© 2025 All rights reserved</p>
    </div>
  </footer>
);

export default Footer;
