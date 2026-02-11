import { motion } from "framer-motion";
import { Lock, Sparkles } from "lucide-react";

const BUY_URL = "https://lynk.id/motionary";

const PreviewBox = () => {
  return (
    <section id="sandbox" className="py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Ubah Ide Jadi Motion. <span className="neon-text">Coba Sekarang.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto"
          >
            Lihat bagaimana sebuah prompt berubah jadi motion video — langsung di browser.
            <br />
            <span className="text-sm">Preview ini gratis. Render HD tersedia setelah beli.</span>
          </motion.p>

          {/* Demo Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-border bg-card overflow-hidden shadow-2xl"
            style={{ boxShadow: '0 0 40px -10px hsl(262 83% 65% / 0.15)' }}
          >
            <div className="aspect-video bg-muted flex items-center justify-center relative">
              <div className="text-center p-6">
                <div className="text-5xl mb-4">🎬</div>
                <p className="text-lg font-semibold text-foreground">Demo: Prompt → Motion Video</p>
                <p className="text-sm text-muted-foreground mt-2">Video demo loop — segera hadir</p>
              </div>

              {/* Watermark */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-foreground/5 uppercase tracking-widest pointer-events-none select-none">
                DEMO PREVIEW
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={BUY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-bold uppercase neon-bg text-[hsl(var(--neon-foreground))] neon-glow transition-transform hover:scale-105"
            >
              <Lock className="h-4 w-4" />
              Render & Download Video (Pro)
            </a>
            <a
              href={BUY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-bold border border-border bg-card hover:bg-muted transition-colors"
            >
              <Sparkles className="h-4 w-4 neon-text" />
              Install Motionary & Mulai Produksi
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PreviewBox;
