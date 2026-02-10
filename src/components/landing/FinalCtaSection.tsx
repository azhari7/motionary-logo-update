import { motion } from "framer-motion";

const BUY_URL = "https://lynk.id/motionary";

const FinalCtaSection = () => (
  <section className="py-32">
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-tight mb-4">
          Berhenti Berlangganan.
        </h2>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-tight neon-text mb-12">
          Mulai Memiliki.
        </h2>

        <a
          href={BUY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-12 py-5 rounded-xl text-xl font-bold uppercase neon-bg neon-glow transition-transform hover:scale-105"
        >
          Amankan Lisensi Permanen Saya
        </a>

        <p className="text-sm text-muted-foreground mt-6">
          Download otomatis setelah pembayaran via Lynk.id.
        </p>
      </motion.div>
    </div>
  </section>
);

export default FinalCtaSection;
