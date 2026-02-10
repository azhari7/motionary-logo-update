const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="h-6 w-6 rounded gradient-bg" />
        <span className="font-semibold">Motionary</span>
      </div>
      <div className="flex items-center gap-6 text-sm text-muted-foreground">
        <a href="#tentang" className="hover:text-foreground transition-colors">Tentang</a>
        <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
      </div>
      <p className="text-sm text-muted-foreground">© 2026 Motionary. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
