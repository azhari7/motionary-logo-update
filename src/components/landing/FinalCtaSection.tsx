import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BUY_URL = "https://lynk.id/motionary";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.4 } }),
};

const FinalCtaSection = () => (
  <section className="py-24 border-t border-border">
    <div className="container mx-auto px-4 max-w-2xl text-center">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-bold mb-6">
          Siap mengubah ide pertamamu jadi <span className="gradient-text">motion versi penuh</span>?
        </motion.h2>
        <motion.div variants={fadeUp} custom={1}>
          <Button size="lg" className="gradient-bg border-0 text-primary-foreground text-lg px-12 h-14 glow" asChild>
            <a href={BUY_URL} target="_blank" rel="noopener noreferrer">
              Beli Motionary Sekarang <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
        <motion.p variants={fadeUp} custom={2} className="text-sm text-muted-foreground mt-4">
          Instal di komputermu. Render tanpa batas. Tanpa ribet.
        </motion.p>
      </motion.div>
    </div>
  </section>
);

export default FinalCtaSection;
