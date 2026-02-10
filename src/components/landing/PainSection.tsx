import { motion } from "framer-motion";
import { X } from "lucide-react";

const pains = [
  "Ide sudah ada, tapi bingung mulai animasinya",
  "Nulis script → mikir visual → makan waktu",
  "Tool banyak, workflow nggak jelas",
  "Mau cepat, tapi hasilnya berantakan",
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.4 } }),
};

const PainSection = () => (
  <section className="py-24 border-t border-border">
    <div className="container mx-auto px-4 max-w-2xl">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Kenapa bikin motion sering terasa <span className="gradient-text">ribet</span>?
        </motion.h2>
        <div className="space-y-4 mb-8">
          {pains.map((p, i) => (
            <motion.div key={i} variants={fadeUp} custom={i + 1} className="flex items-start gap-3">
              <X className="h-5 w-5 text-destructive mt-0.5 shrink-0" />
              <p className="text-muted-foreground">{p}</p>
            </motion.div>
          ))}
        </div>
        <motion.p variants={fadeUp} custom={5} className="text-center italic text-muted-foreground">
          Motion seharusnya mempercepat ide, bukan memperlambatnya.
        </motion.p>
      </motion.div>
    </div>
  </section>
);

export default PainSection;
