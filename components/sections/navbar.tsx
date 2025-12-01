import Link from 'next/link';

const links = [
  { href: '#projects', label: 'Proyectos' },
  { href: '#architecture', label: 'Arquitectura' },
  { href: '#contact', label: 'Contacto' }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-base-bg/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="#hero" className="text-base-text font-semibold font-display">
          Jedabero
        </Link>
        <nav className="flex items-center gap-4 text-sm text-base-muted">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-base-text transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
