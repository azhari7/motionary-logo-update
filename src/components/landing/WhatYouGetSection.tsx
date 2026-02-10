import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BUY_URL = "https://lynk.id/motionary";

const items = [
  "Akses penuh aplikasi Motionary versi lokal",
  "Render video tanpa watermark",
  "Kontrol penuh durasi & resolusi",
  "Panduan instalasi & penggunaan",
  "Update (sesuai paket)",
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.4 } }),
};

const WhatYouGetSection = () => (
  <section className="py-24 border-t border-border">
    <div className="container mx-auto px-4 max-w-2xl">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
        <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-bold mb-10">
          Apa yang kamu dapat setelah membeli <span className="gradient-text">Motionary</span>?
        </motion.h2>
        <div className="space-y-4 mb-10 text-left max-w-md mx-auto">
          {items.map((item, i) => (
            <motion.div key={i} variants={fadeUp} custom={i + 1} className="flex items-center gap-3">
              <div className="h-6 w-6 rounded-full gradient-bg flex items-center justify-center shrink-0">
                <Check className="h-3.5 w-3.5 text-primary-foreground" />
              </div>
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
        <motion.div variants={fadeUp} custom={6}>
          <Button size="lg" className="gradient-bg border-0 text-primary-foreground text-base px-10 h-12 glow" asChild>
            <a href={BUY_URL} target="_blank" rel="noopener noreferrer">
              Beli Motionary Sekarang <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <p className="text-xs text-muted-foreground mt-3">Pembelian & download aman melalui lynk.id</p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default WhatYouGetSection;
