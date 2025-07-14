export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="container mx-auto max-w-4xl p-8 mt-16 text-center text-muted-foreground">
      <p>© {currentYear} Anil Karaca. All Rights Reserved.</p>
    </footer>
  );
} 