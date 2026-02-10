import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Apakah Motionary ini web app?", a: "Bukan. Motionary adalah aplikasi yang dijalankan di komputer lokal." },
  { q: "Kenapa preview di web dibatasi?", a: "Preview hanya untuk mencoba ide. Produksi penuh dilakukan di aplikasi lokal." },
  { q: "Apakah preview sama dengan hasil final?", a: "Preview menggambarkan konsep motion. Versi lokal memberi kontrol penuh atas resolusi, durasi, dan detail." },
  { q: "Apakah perlu login?", a: "Tidak. Motionary berjalan langsung di komputer tanpa perlu akun." },
  { q: "Sekali beli atau berlangganan?", a: "Motionary tersedia dalam beberapa paket. Detail lengkap tersedia di halaman pembelian." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const FaqSection = () => (
  <section id="faq" className="py-24 border-t border-border">
    <div className="container mx-auto px-4 max-w-2xl">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-10 text-center">
          FAQ
        </motion.h2>
        <motion.div variants={fadeUp}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default FaqSection;
