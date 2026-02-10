import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5 } }),
};

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(262_83%_58%/0.08),transparent_60%)]" />
      <div className="container mx-auto px-4 relative">
        <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" animate="visible">
          <motion.h1 variants={fadeUp} custom={0} className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Ubah ide jadi <span className="gradient-text">motion</span>.<br />Coba langsung.
          </motion.h1>
          <motion.p variants={fadeUp} custom={1} className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Tulis ide singkat dan lihat bagaimana Motionary mengubahnya menjadi motion preview secara instan.
          </motion.p>
          <motion.p variants={fadeUp} custom={2} className="text-sm text-muted-foreground/70 mb-10">
            Render versi penuh tersedia di aplikasi Motionary versi lokal.
          </motion.p>
          <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-bg border-0 text-primary-foreground text-base px-8 h-12 glow" asChild>
              <a href="#preview">
                Coba Preview Sekarang <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 h-12" asChild>
              <a href="#cara-kerja">
                Lihat Contoh Output <ChevronDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
