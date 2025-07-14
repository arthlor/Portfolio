import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GoogleAnalytics from './components/GoogleAnalytics';
import { ThemeProvider } from './components/ThemeProvider';
import { BackToTopButton } from './components/BackToTopButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Anil Karaca | Data Journalist',
  description: 'Portfolio of Anil Karaca, a data journalist specializing in data stories, AI, and social media.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
          <Navbar />
          <main className="container mx-auto max-w-4xl">
            {children}
          </main>
          <Footer />
          <BackToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
