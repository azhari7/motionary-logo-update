import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play, Layers, Download, Zap, Film, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  { icon: Wand2, title: "Tulis Prompt", desc: "Deskripsikan animasi yang kamu inginkan dalam bahasa alami" },
  { icon: Sparkles, title: "AI Generate", desc: "AI mengubah teksmu menjadi kode animasi secara otomatis" },
  { icon: Play, title: "Preview & Edit", desc: "Lihat hasilnya secara real-time, edit sampai sempurna" },
  { icon: Download, title: "Export Video", desc: "Download animasimu dalam format video berkualitas tinggi" },
];

const features = [
  { icon: Zap, title: "Lightning Fast", desc: "Generate animasi dalam hitungan detik, bukan jam" },
  { icon: Layers, title: "Multi Resolution", desc: "Export dalam 720p, 1080p, hingga 4K" },
  { icon: Film, title: "Custom FPS", desc: "Pilih 30fps atau 60fps sesuai kebutuhan" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg gradient-bg" />
            <span className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Motionary
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/gallery" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Gallery</Link>
            <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button size="sm" className="gradient-bg border-0 text-primary-foreground" asChild>
              <Link to="/register">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(262_83%_58%/0.08),transparent_60%)]" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm text-muted-foreground mb-8">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              AI-Powered Animation Generator
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Text to{" "}
              <span className="gradient-text">Animated Video</span>
              {" "}in Seconds
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Ubah ide-idemu menjadi animasi memukau hanya dengan mengetik. Tidak perlu skill desain — cukup tuliskan, dan Motionary yang bekerja.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-bg border-0 text-primary-foreground text-base px-8 h-12 glow" asChild>
                <Link to="/register">
                  Mulai Buat Animasi <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 h-12" asChild>
                <Link to="/gallery">Lihat Contoh</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Preview mockup */}
          <motion.div
            variants={fadeUp}
            custom={5}
            initial="hidden"
            animate="visible"
            className="mt-20 max-w-4xl mx-auto"
          >
            <div className="rounded-2xl border border-border bg-card p-2 shadow-2xl glow">
              <div className="rounded-xl bg-muted aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="h-16 w-16 mx-auto rounded-full gradient-bg flex items-center justify-center mb-4">
                    <Play className="h-7 w-7 text-primary-foreground ml-1" />
                  </div>
                  <p className="text-muted-foreground text-sm">Animation Preview</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Cara Kerja
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground text-lg max-w-xl mx-auto">
              4 langkah sederhana dari teks ke video animasi
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-colors group"
              >
                <div className="h-12 w-12 rounded-lg gradient-bg flex items-center justify-center mb-4 group-hover:glow transition-shadow">
                  <step.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="text-xs font-medium text-muted-foreground mb-2">Step {i + 1}</div>
                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Powerful Features
            </motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="h-12 w-12 mx-auto rounded-lg bg-accent flex items-center justify-center mb-4">
                  <f.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Siap Membuat Animasi?
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground text-lg mb-8">
              Daftar gratis dan mulai buat animasi pertamamu sekarang.
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <Button size="lg" className="gradient-bg border-0 text-primary-foreground text-base px-10 h-12 glow" asChild>
                <Link to="/register">
                  Mulai Gratis <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded gradient-bg" />
            <span className="font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Motionary</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 Motionary. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
