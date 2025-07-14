'use client';

import Link from 'next/link';
import { ThemeToggleButton } from './ThemeToggleButton';

export default function Navbar() {
  return (
    <header className="container mx-auto max-w-4xl p-8 flex justify-between items-center">
      <Link href="/" className="font-bold text-2xl hover:text-primary transition-colors">
        Anil Karaca
      </Link>
      <nav className="flex gap-6 text-lg items-center">
        <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
          Work
        </Link>
        <Link href="/articles" className="text-muted-foreground hover:text-foreground transition-colors">
          Articles
        </Link>
        <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
          About
        </Link>
        <ThemeToggleButton />
      </nav>
    </header>
  );
} 