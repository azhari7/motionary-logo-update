import { motion } from "framer-motion";
import { Check, Monitor } from "lucide-react";

const checklist = [
  "Lisensi Permanen Motionary (Windows & Mac)",
  "Render Video Tanpa Batas Selamanya",
  "Akses Komunitas Eksklusif & Update Fitur",
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.4 } }),
};

const WhatYouGetSection = () => (
  <section className="py-32">
    <div className="container mx-auto px-4 max-w-3xl">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 p-8 md:p-12"
      >
        <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-8">
          <Monitor className="h-8 w-8 neon-text" />
          <h2 className="text-2xl md:text-4xl font-bold uppercase">Apa yang Anda Dapat?</h2>
        </motion.div>

        <div className="space-y-4 mb-10">
          {checklist.map((item, i) => (
            <motion.div key={i} variants={fadeUp} custom={i + 1} className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-full neon-bg flex items-center justify-center shrink-0 mt-0.5">
                <Check className="h-3.5 w-3.5 text-[hsl(var(--neon-foreground))]" />
              </div>
              <span className="text-lg text-foreground">{item}</span>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeUp} custom={4} className="pt-6 border-t border-primary/20">
          <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-2">Spek Minimum</p>
          <p className="text-muted-foreground">RAM 8GB &nbsp;|&nbsp; Windows 10/11 atau macOS Monterey+</p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default WhatYouGetSection;
