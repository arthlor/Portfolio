import { Github, Linkedin, FileText } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="container mx-auto max-w-4xl p-8 mt-16 flex flex-col items-center gap-6">
      <div className="flex gap-6">
        <Link
          href="https://github.com/arthlor"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="h-6 w-6" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/anil-karaca/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Linkedin className="h-6 w-6" />
        </Link>
        <Link
          href="/Anil_Karaca_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download CV"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <FileText className="h-6 w-6" />
        </Link>
      </div>
      <p className="text-center text-muted-foreground">
        © {currentYear} Anil Karaca. All Rights Reserved.
      </p>
    </footer>
  );
} 