import { motion } from "framer-motion";
import { Layers, Target, Sparkles, Repeat } from "lucide-react";

const highlights = [
  { icon: Target, text: "Fokus ke alur visual" },
  { icon: Sparkles, text: "Dibuat khusus untuk motion" },
  { icon: Layers, text: "Bukan AI generik teks ke video" },
  { icon: Repeat, text: "Cocok untuk produksi konten berulang" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.4 } }),
};

const SolutionSection = () => (
  <section id="tentang" className="py-24 border-t border-border">
    <div className="container mx-auto px-4 max-w-3xl">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
        <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-bold mb-6">
          Motionary adalah AI khusus untuk <span className="gradient-text">motion</span>
        </motion.h2>
        <motion.p variants={fadeUp} custom={1} className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
          Motionary membantu mengubah ide teks menjadi struktur motion yang jelas dan terarah.
          Bukan sekadar video acak, tapi motion yang siap dikembangkan dan diproduksi.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((h, i) => (
            <motion.div key={i} variants={fadeUp} custom={i + 2} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
              <div className="h-10 w-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                <h.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-medium text-sm">{h.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default SolutionSection;
