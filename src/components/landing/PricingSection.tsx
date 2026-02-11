import { motion } from "framer-motion";
import { Check, Flame, Gem, Monitor } from "lucide-react";

const BUY_URL = "https://lynk.id/motionary";

const highlights = [
  "Sekali beli (lifetime)",
  "Render tanpa batas",
  "Tanpa watermark",
  "Hingga 4K (Ultra HD)",
  "100% render lokal (offline)",
  "Tanpa antre server",
  "Bebas untuk penggunaan komersial",
];

const badges = [
  { icon: Flame, label: "Diskon Terbatas" },
  { icon: Gem, label: "Best Value for Creators" },
  { icon: Monitor, label: "Local Desktop Tool" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.45 },
  }),
};

const PricingSection = () => (
  <section className="py-32">
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Headline */}
        <motion.h2
          variants={fadeUp}
          custom={0}
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
        >
          Sekali Beli. <span className="neon-text">Miliki Selamanya.</span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          custom={1}
          className="text-lg text-muted-foreground mb-16 max-w-xl mx-auto"
        >
          Bukan langganan. Bukan cloud.
          <br />
          <span className="neon-text font-semibold">Motionary</span> berjalan di
          komputer kamu — render tanpa batas, tanpa biaya bulanan.
        </motion.p>

        {/* Price Card */}
        <motion.div
          variants={fadeUp}
          custom={2}
          className="relative max-w-lg mx-auto rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 p-8 md:p-10 shadow-lg shadow-primary/10"
        >
          {/* Card title */}
          <h3 className="text-xl md:text-2xl font-bold mb-6">
            Motionary — <span className="neon-text">Lifetime License</span>
          </h3>

          {/* Price */}
          <div className="flex items-baseline justify-center gap-3 mb-2">
            <span className="text-4xl md:text-5xl font-bold neon-text">
              Rp100.000
            </span>
            <span className="text-xl text-muted-foreground line-through">
              Rp200.000
            </span>
          </div>
          <p className="text-sm text-muted-foreground mb-8">
            Diskon waktu terbatas
          </p>

          {/* Checklist */}
          <ul className="space-y-3 text-left mb-8">
            {highlights.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full neon-bg flex items-center justify-center shrink-0">
                  <Check className="h-3 w-3 text-[hsl(var(--neon-foreground))]" />
                </div>
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA Utama */}
          <a
            href={BUY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-4 rounded-xl text-lg font-bold uppercase neon-bg text-[hsl(var(--neon-foreground))] neon-glow transition-transform hover:scale-105 text-center"
          >
            Beli Motionary Sekarang
          </a>
          <p className="text-xs text-muted-foreground mt-2">
            Transaksi & download melalui Lynk.id
          </p>

          {/* CTA Sekunder */}
          <a
            href="#"
            className="inline-block mt-4 text-sm font-medium text-primary hover:underline"
          >
            Tanya Dulu di Komunitas
          </a>

          {/* Trust copy */}
          <p className="text-xs text-muted-foreground mt-6">
            Ragu sebelum beli? Kamu bisa tanya dulu di Telegram atau Discord
            Motionary.
          </p>
        </motion.div>

        {/* Badges */}
        <motion.div
          variants={fadeUp}
          custom={3}
          className="flex flex-wrap justify-center gap-3 mt-8"
        >
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-foreground"
            >
              <Icon className="h-4 w-4 neon-text" />
              {label}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default PricingSection;
