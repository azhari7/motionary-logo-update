import { useState } from "react";
import { Menu, X } from "lucide-react";

const BUY_URL = "https://lynk.id/motionary";

const navLinks = [
  { label: "Portofolio", href: "#portofolio" },
  { label: "Tutorial Instalasi", href: "#tutorial" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-border/30 bg-background/60 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="/" className="text-xl font-bold tracking-widest uppercase text-foreground">
          MOTIONARY
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={BUY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-lg text-sm font-bold uppercase neon-bg neon-glow transition-transform hover:scale-105"
        >
          Beli Sekali, Miliki Selamanya
        </a>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border/30 bg-background/95 backdrop-blur-xl px-4 pb-4 pt-2 space-y-3">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground">
              {l.label}
            </a>
          ))}
          <a
            href={BUY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center px-5 py-2 rounded-lg text-sm font-bold uppercase neon-bg neon-glow"
          >
            Beli Sekali, Miliki Selamanya
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
