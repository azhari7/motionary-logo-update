import { Button } from "@/components/ui/button";

const BUY_URL = "https://lynk.id/motionary";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg gradient-bg" />
          <span className="text-xl font-bold tracking-tight">Motionary</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          <a href="#tentang" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Tentang</a>
          <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
        </div>
        <Button size="sm" className="gradient-bg border-0 text-primary-foreground" asChild>
          <a href={BUY_URL} target="_blank" rel="noopener noreferrer">Beli Motionary</a>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
