import { motion } from "framer-motion";
import { Zap, ShieldCheck, CreditCard, Infinity } from "lucide-react";

const cards = [
  {
    icon: Zap,
    title: "KECEPATAN GPU",
    desc: "Gunakan tenaga asli kartu grafis Anda. Rendering 10x lebih cepat dibanding cloud.",
  },
  {
    icon: ShieldCheck,
    title: "PRIVASI MUTLAK",
    desc: "Proyek Anda rahasia. Tidak ada data yang keluar dari komputer Anda.",
  },
  {
    icon: CreditCard,
    title: "ONE-TIME PAYMENT",
    desc: "Stop langganan bulanan. Bayar sekali, pakai sampai kiamat.",
  },
  {
    icon: Infinity,
    title: "UNLIMITED RENDER",
    desc: "Ekspor 1 atau 1.000 video per hari? Biayanya tetap Rp 0.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const ValueSection = () => (
  <section className="py-32">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl lg:text-6xl font-bold mb-16 text-center"
      >
        Kenapa Harus <span className="neon-text">Instal Lokal</span>?
      </motion.h2>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {cards.map((c, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            custom={i}
            className="rounded-2xl border border-border bg-card p-8 hover:border-primary/30 transition-colors"
          >
            <c.icon className="h-10 w-10 neon-text mb-5" />
            <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">{c.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{c.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ValueSection;
