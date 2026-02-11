import { motion } from "framer-motion";
import { MessageCircle, Hash, Check } from "lucide-react";

const benefits = [
  "Tanya sebelum beli (tanpa tekanan)",
  "Diskusi workflow & use case",
  "Sharing kendala teknis",
  "Lihat pengalaman pengguna lain",
  "Update fitur & pengembangan Motionary",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.45 },
  }),
};

const CommunitySection = () => (
  <section className="py-32">
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          variants={fadeUp}
          custom={0}
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
        >
          Punya Pertanyaan?{" "}
          <span className="neon-text">Ngobrol Dulu di Komunitas Motionary</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={1}
          className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto"
        >
          Sebelum beli, kamu bebas tanya apa saja.
          <br />
          Mulai dari workflow, kecocokan untuk kebutuhanmu, sampai kendala
          teknis.
        </motion.p>

        {/* Body */}
        <motion.div
          variants={fadeUp}
          custom={2}
          className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-8 md:p-10 text-left max-w-lg mx-auto"
        >
          <p className="text-foreground font-medium mb-5">
            <span className="neon-text font-semibold">Motionary</span> punya
            komunitas aktif di Telegram dan Discord tempat kamu bisa:
          </p>

          <ul className="space-y-3 mb-6">
            {benefits.map((b, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full neon-bg flex items-center justify-center shrink-0">
                  <Check className="h-3 w-3 text-[hsl(var(--neon-foreground))]" />
                </div>
                <span className="text-foreground">{b}</span>
              </li>
            ))}
          </ul>

          <p className="text-sm text-muted-foreground">
            Tidak perlu beli dulu.
            <br />
            Tidak perlu akun khusus.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          custom={3}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-bold uppercase neon-bg text-[hsl(var(--neon-foreground))] neon-glow transition-transform hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            Gabung Telegram Motionary
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-bold uppercase border border-primary/30 text-foreground hover:bg-primary/5 transition-transform hover:scale-105"
          >
            <Hash className="h-5 w-5 neon-text" />
            Gabung Discord Motionary
          </a>
        </motion.div>

        <motion.p
          variants={fadeUp}
          custom={4}
          className="text-sm text-muted-foreground mt-4"
        >
          Kamu bebas pilih platform yang paling nyaman buat kamu.
        </motion.p>
      </motion.div>
    </div>
  </section>
);

export default CommunitySection;
