import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

const HeroSection = () => (
  <section className="relative pt-28 pb-32 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(270_70%_55%/0.08),transparent_60%)]" />

    <div className="container mx-auto px-4 relative">
      <motion.div className="max-w-5xl mx-auto text-center" initial="hidden" animate="visible">
        <motion.h1
          variants={fadeUp}
          custom={0}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8 uppercase"
        >
          Bikin Motion Graphic{" "}
          <span className="gradient-text">Secepat Mengetik.</span>
          <br />
          <span className="text-muted-foreground">Sekali Beli, Miliki Selamanya.</span>
        </motion.h1>

        <motion.p variants={fadeUp} custom={1} className="text-lg md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Hasilkan animasi memukau dengan kekuatan hardware PC/Laptop Anda. Tanpa antrean server, tanpa batasan browser, dan{" "}
          <strong className="text-foreground">TANPA biaya langganan</strong>. Kendali penuh di tangan Anda.
        </motion.p>

        <motion.a
          variants={fadeUp}
          custom={2}
          href="#sandbox"
          className="inline-flex items-center px-10 py-4 rounded-xl text-lg font-bold uppercase neon-bg neon-glow transition-transform hover:scale-105"
        >
          Coba Preview Gratis
        </motion.a>

        {/* Monitor mockup */}
        <motion.div variants={fadeUp} custom={3} className="mt-16 mx-auto max-w-3xl">
          <div className="rounded-xl border-2 border-border bg-card p-2 shadow-2xl">
            <div className="rounded-lg bg-muted aspect-video flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(270_70%_55%/0.05),transparent_70%)]" />
              <div className="flex gap-4 items-center">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className={`${i % 2 === 0 ? "rounded-full" : "rounded-lg"} w-12 h-12 md:w-16 md:h-16`}
                    style={{ backgroundColor: i === 0 ? "hsl(270 70% 55%)" : i === 1 ? "hsl(220 80% 55%)" : "hsl(175 100% 50%)" }}
                    animate={{ y: [0, -12, 0], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                  />
                ))}
              </div>
              <span className="absolute bottom-3 right-4 text-xs text-muted-foreground/40 font-medium">Motionary UI Preview</span>
            </div>
          </div>
          <div className="mx-auto w-24 h-4 bg-border rounded-b-lg" />
          <div className="mx-auto w-40 h-2 bg-border/60 rounded-b-xl" />
        </motion.div>

        <motion.a
          variants={fadeUp}
          custom={4}
          href="#portofolio"
          className="inline-flex items-center gap-2 mt-10 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowDown className="h-4 w-4 animate-bounce" /> Scroll untuk lihat hasil nyata
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
