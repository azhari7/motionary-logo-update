import { motion } from "framer-motion";
import { Check } from "lucide-react";

const values = [
  "Lebih cepat dari workflow manual",
  "Struktur motion rapi & konsisten",
  "Tidak tergantung web app",
  "Aman & private (jalan di lokal)",
  "Cocok untuk skala kecil sampai besar",
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.4 } }),
};

const ValueSection = () => (
  <section className="py-24 border-t border-border">
    <div className="container mx-auto px-4 max-w-2xl">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Kenapa banyak orang memilih <span className="gradient-text">Motionary</span>?
        </motion.h2>
        <div className="space-y-4">
          {values.map((v, i) => (
            <motion.div key={i} variants={fadeUp} custom={i + 1} className="flex items-center gap-3">
              <div className="h-6 w-6 rounded-full gradient-bg flex items-center justify-center shrink-0">
                <Check className="h-3.5 w-3.5 text-primary-foreground" />
              </div>
              <span className="text-foreground">{v}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ValueSection;
