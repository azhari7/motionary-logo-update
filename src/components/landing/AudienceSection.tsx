import { motion } from "framer-motion";
import { Video, GraduationCap, Wand2, Rocket, Code } from "lucide-react";

const audiences = [
  { icon: Video, label: "Content Creator" },
  { icon: GraduationCap, label: "Edukator" },
  { icon: Wand2, label: "Motion Designer" },
  { icon: Rocket, label: "Indie Maker" },
  { icon: Code, label: "Developer Remotion" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.4 } }),
};

const AudienceSection = () => (
  <section className="py-24 border-t border-border">
    <div className="container mx-auto px-4 max-w-3xl">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Motionary cocok untuk
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {audiences.map((a, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i + 1}
              className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 hover:border-primary/30 transition-colors"
            >
              <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center">
                <a.icon className="h-5 w-5 text-accent-foreground" />
              </div>
              <span className="text-sm font-medium text-center">{a.label}</span>
            </motion.div>
          ))}
        </div>
        <motion.p variants={fadeUp} custom={7} className="text-center text-muted-foreground mt-8 italic">
          Kalau kamu sering mengubah ide jadi visual, Motionary dibuat untukmu.
        </motion.p>
      </motion.div>
    </div>
  </section>
);

export default AudienceSection;
