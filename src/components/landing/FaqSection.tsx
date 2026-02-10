import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Ribet nggak instalnya?", a: "Sangat mudah, tinggal 'Next-Next' saja seperti instal game." },
  { q: "Beneran sekali bayar?", a: "Ya. Tidak ada tagihan bulan depan. Titik." },
  { q: "Bisa dipakai tanpa internet?", a: "Bisa. Internet hanya butuh sekali saat aktivasi lisensi." },
];

const FaqSection = () => (
  <section id="faq" className="py-32">
    <div className="container mx-auto px-4 max-w-2xl">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold mb-12 text-center"
      >
        FAQ
      </motion.h2>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-lg font-semibold">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FaqSection;
