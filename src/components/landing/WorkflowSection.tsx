import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    num: 1,
    title: "Generate kode TSX dengan AI",
    desc: "Tulis prompt sesuai kebutuhanmu. Motionary menggunakan AI (seperti Claude) untuk menghasilkan kode TSX motion yang terstruktur dan siap pakai.",
    bullets: ["Output berupa kode, bukan video mentah."],
  },
  {
    num: 2,
    title: "Paste kode ke Studio Editor",
    desc: "Salin hasil kode TSX dan tempelkan ke Motionary Studio Editor di komputermu. Di sini kamu bisa:",
    bullets: ["Mengganti teks", "Menyesuaikan timing", "Mengedit struktur motion"],
  },
  {
    num: 3,
    title: "Preview & render di Remotion Studio",
    desc: "Lihat hasil animasi secara real-time di Remotion Studio. Jika sudah sesuai, render video dengan:",
    bullets: ["Resolusi tinggi (hingga 4K)", "Tanpa watermark", "Menggunakan hardware lokal"],
  },
];

const benefits = [
  "Motion berbasis kode = konsisten & scalable",
  "Preview real-time tanpa upload",
  "Render cepat, tanpa batas bulanan",
  "Cocok untuk produksi konten serius",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.45 },
  }),
};

const WorkflowSection = () => (
  <section className="py-32">
    <div className="container mx-auto px-4 max-w-3xl">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          variants={fadeUp}
          custom={0}
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-center"
        >
          Cara Pakai <span className="neon-text">Motionary</span> di Komputer Lokal
        </motion.h2>
        <motion.p
          variants={fadeUp}
          custom={1}
          className="text-lg text-muted-foreground mb-16"
        >
          <span className="neon-text font-semibold">Motionary</span> dirancang untuk bekerja di workflow profesional berbasis Remotion—tanpa cloud, tanpa antre server.
        </motion.p>

        {/* Timeline */}
        <div className="relative border-l-2 border-primary/30 ml-4 md:ml-6 space-y-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              variants={fadeUp}
              custom={i + 2}
              className="relative pl-10 md:pl-14"
            >
              {/* Number circle */}
              <div className="absolute -left-[17px] top-0 h-8 w-8 rounded-full neon-bg flex items-center justify-center text-sm font-bold">
                {step.num}
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground mb-3">{step.desc}</p>
              <ul className="space-y-1.5">
                {step.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2 text-foreground">
                    <Check className="h-4 w-4 mt-1 shrink-0 text-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Highlight box */}
        <motion.div
          variants={fadeUp}
          custom={6}
          className="mt-16 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <Zap className="h-6 w-6 neon-text" />
            <h3 className="text-xl md:text-2xl font-bold">Kenapa workflow ini powerful?</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full neon-bg flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5 text-[hsl(var(--neon-foreground))]" />
                </div>
                <span className="text-foreground">{b}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeUp} custom={7} className="mt-10 text-center">
          <p className="text-muted-foreground text-lg mb-6 max-w-xl mx-auto">
            Jangan biarkan ide menguap. Ubah prompt jadi video tanpa antre—Mulai render di Motionary sekarang!
          </p>
          <a
            href="https://lynk.id/motionary"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-4 rounded-xl text-lg font-bold uppercase neon-bg text-[hsl(var(--neon-foreground))] neon-glow transition-transform hover:scale-105"
          >
            MULAI RENDER SEKARANG
          </a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default WorkflowSection;
