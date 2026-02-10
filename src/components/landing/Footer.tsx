const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="text-lg font-bold tracking-widest uppercase">MOTIONARY</span>
      <div className="flex items-center gap-6 text-sm text-muted-foreground">
        <a href="#portofolio" className="hover:text-foreground transition-colors">Portofolio</a>
        <a href="#tutorial" className="hover:text-foreground transition-colors">Tutorial</a>
        <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
      </div>
      <p className="text-sm text-muted-foreground">© 2026 Motionary. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
