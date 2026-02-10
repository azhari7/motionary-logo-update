import { motion } from "framer-motion";
import { PenLine, Sparkles, MonitorPlay } from "lucide-react";

const steps = [
  { icon: PenLine, title: "Tulis ide", desc: "Gunakan prompt singkat sesuai kebutuhanmu." },
  { icon: Sparkles, title: "Generate motion", desc: "Motionary menyusun visual & timing otomatis." },
  { icon: MonitorPlay, title: "Edit & render", desc: "Produksi penuh dilakukan di aplikasi Motionary versi lokal." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.4 } }),
};

const HowItWorksSection = () => (
  <section id="cara-kerja" className="py-24 border-t border-border">
    <div className="container mx-auto px-4 max-w-3xl">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Cara kerja <span className="gradient-text">Motionary</span>
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div key={i} variants={fadeUp} custom={i + 1} className="text-center">
              <div className="h-14 w-14 mx-auto rounded-xl gradient-bg flex items-center justify-center mb-4">
                <step.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="text-xs font-bold text-primary mb-2">{i + 1}</div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default HowItWorksSection;
