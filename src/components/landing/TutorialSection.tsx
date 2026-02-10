import { motion } from "framer-motion";

const TutorialSection = () => (
  <section id="tutorial" className="py-32">
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6"
      >
        Hanya <span className="neon-text">2 Menit</span> Sampai Video Pertama Anda.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 rounded-xl overflow-hidden border border-border bg-card"
      >
        {/* Replace with real YouTube embed */}
        <div className="aspect-video bg-muted flex items-center justify-center">
          <div className="text-center p-6">
            <div className="text-5xl mb-4">▶️</div>
            <p className="text-lg font-semibold text-foreground">Tutorial: Download → Install → Generate</p>
            <p className="text-sm text-muted-foreground mt-2">Video tutorial step-by-step</p>
          </div>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm text-muted-foreground mt-6"
      >
        Tinggal klik dua kali, dan Motionary siap bekerja untuk Anda.
      </motion.p>
    </div>
  </section>
);

export default TutorialSection;
