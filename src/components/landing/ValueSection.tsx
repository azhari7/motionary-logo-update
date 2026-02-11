import { motion } from "framer-motion";
import gpuImg from "@/assets/value-gpu.png";
import privacyImg from "@/assets/value-privacy.png";
import paymentImg from "@/assets/value-payment.png";
import unlimitedImg from "@/assets/value-unlimited.png";

const cards = [
  {
    img: gpuImg,
    title: "KECEPATAN GPU",
    desc: "Gunakan tenaga asli kartu grafis Anda. Rendering 10x lebih cepat dibanding cloud.",
  },
  {
    img: privacyImg,
    title: "PRIVASI MUTLAK",
    desc: "Proyek Anda rahasia. Tidak ada data yang keluar dari komputer Anda.",
  },
  {
    img: paymentImg,
    title: "ONE-TIME PAYMENT",
    desc: "Stop langganan bulanan. Bayar sekali, pakai sampai kiamat.",
  },
  {
    img: unlimitedImg,
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
            <img src={c.img} alt={c.title} className="h-16 w-16 object-contain mb-5" />
            <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">{c.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{c.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ValueSection;
