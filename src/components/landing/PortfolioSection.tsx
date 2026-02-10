import { motion } from "framer-motion";

const videos = [
  { title: "Edukasi Anak: Sistem Tata Surya", style: "Gaya Crayon", id: "dQw4w9WgXcQ" },
  { title: "Fakta Unik: Rahasia Ikan Koi", style: "Gaya Watercolor", id: "dQw4w9WgXcQ" },
  { title: "Short Story: Misteri Jamur Hutan", style: "Digital Art", id: "dQw4w9WgXcQ" },
  { title: "Promosi Produk: Gadget Review", style: "Clean Motion", id: "dQw4w9WgXcQ" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const PortfolioSection = () => (
  <section id="portofolio" className="py-32">
    <div className="container mx-auto px-4">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
        <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          Contoh Hasil <span className="neon-text">Motionary</span>
        </motion.h2>
        <motion.p variants={fadeUp} custom={1} className="text-lg text-muted-foreground">
          Lihat apa yang bisa Anda buat dalam hitungan detik.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
      >
        {videos.map((v, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            custom={i + 2}
            className="rounded-xl overflow-hidden border border-border bg-card"
          >
            <div className="aspect-video bg-muted flex items-center justify-center text-muted-foreground text-sm">
              {/* Replace with real YouTube embeds */}
              <div className="text-center p-6">
                <div className="text-4xl mb-3">▶️</div>
                <p className="font-semibold text-foreground">{v.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{v.style}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-sm text-muted-foreground mt-8"
      >
        Semua video di atas dirender 100% di komputer lokal.
      </motion.p>
    </div>
  </section>
);

export default PortfolioSection;
