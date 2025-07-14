'use client';

import Link from 'next/link';
import { ThemeToggleButton } from './ThemeToggleButton';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { title: 'Work', href: '/projects' },
  { title: 'Articles', href: '/articles' },
  { title: 'About', href: '/about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="container mx-auto max-w-4xl p-8 flex justify-between items-center">
        <Link href="/" className="font-bold text-2xl hover:text-primary transition-colors">
          Anil Karaca
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-lg items-center">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.title}
            </Link>
          ))}
          <ThemeToggleButton />
        </nav>
        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggleButton />
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-background z-50 p-8 flex flex-col"
          >
            <div className="flex justify-between items-center">
              <Link
                href="/"
                className="font-bold text-2xl"
                onClick={() => setIsOpen(false)}
              >
                Anil Karaca
              </Link>
              <button onClick={toggleMenu} aria-label="Close Menu">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center flex-grow gap-8 text-2xl">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 