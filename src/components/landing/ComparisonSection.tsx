import { motion } from "framer-motion";
import { Globe, Monitor, Check, X } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.4 } }),
};

const previewItems = [
  { text: "Untuk mencoba ide", ok: true },
  { text: "Durasi pendek", ok: true },
  { text: "Tidak bisa download", ok: false },
  { text: "Tanpa render full", ok: false },
];

const localItems = [
  { text: "Render video penuh", ok: true },
  { text: "Tanpa watermark", ok: true },
  { text: "Kontrol resolusi & durasi", ok: true },
  { text: "Semua berjalan di komputer lokal", ok: true },
];

const ComparisonSection = () => (
  <section className="py-24 border-t border-border">
    <div className="container mx-auto px-4 max-w-4xl">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Preview online. Produksi penuh di <span className="gradient-text">komputermu</span>.
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Preview column */}
          <motion.div variants={fadeUp} custom={1} className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
                <Globe className="h-5 w-5 text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-lg">Preview di Landing Page</h3>
            </div>
            <div className="space-y-3">
              {previewItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  {item.ok ? <Check className="h-4 w-4 text-primary" /> : <X className="h-4 w-4 text-destructive" />}
                  <span className="text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Local column */}
          <motion.div variants={fadeUp} custom={2} className="rounded-xl border-2 border-primary/30 bg-card p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(262_83%_58%/0.04),transparent_70%)]" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg gradient-bg flex items-center justify-center">
                  <Monitor className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg">Motionary Versi Lokal</h3>
              </div>
              <div className="space-y-3">
                {localItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ComparisonSection;
