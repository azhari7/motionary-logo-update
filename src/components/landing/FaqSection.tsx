import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const BUY_URL = "https://lynk.id/motionary";

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "Apa itu Motionary?",
    a: (
      <p>Motionary adalah workflow tool untuk mengubah ide atau prompt menjadi motion video berbasis code (Remotion). Dirancang untuk produksi video yang cepat, konsisten, dan repeatable, tanpa harus edit manual dari nol setiap kali.</p>
    ),
  },
  {
    q: "Motionary ini AI generator atau software?",
    a: (
      <>
        <p>Motionary bukan AI video generator cloud. Motionary adalah tool lokal / desktop workflow:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>AI dipakai untuk generate code animasi</li>
          <li>Preview dan render dilakukan di komputer kamu sendiri</li>
          <li>Tanpa antre server, tanpa watermark</li>
        </ul>
      </>
    ),
  },
  {
    q: "Motionary cocok untuk siapa?",
    a: (
      <>
        <p>Motionary cocok untuk:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Creator edukasi</li>
          <li>Guru & pengajar</li>
          <li>Content creator penjelasan konsep</li>
          <li>Tim kecil & solo creator</li>
          <li>Profesional yang butuh produksi rutin & konsisten</li>
        </ul>
        <p className="mt-2">Kalau kamu sering bikin video penjelasan → ini relevan banget.</p>
      </>
    ),
  },
  {
    q: "Motionary bisa dipakai untuk konten apa saja?",
    a: (
      <>
        <p>Motionary cocok untuk:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Video edukasi</li>
          <li>Penjelasan rumus & konsep</li>
          <li>Konten belajar singkat</li>
          <li>Reels / Shorts edukatif</li>
          <li>Video explainer sistem & workflow</li>
        </ul>
        <p className="mt-2">Fokusnya: visual yang jelas, terstruktur, dan repeatable.</p>
      </>
    ),
  },
  {
    q: "Apakah Motionary cocok untuk pemula?",
    a: (
      <>
        <p>Ya. Kamu tidak perlu:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Jago animasi</li>
          <li>Paham timeline rumit</li>
          <li>Menguasai software berat</li>
        </ul>
        <p className="mt-2">Cukup pahami alur prompt → preview → render.</p>
      </>
    ),
  },
  {
    q: "Apakah saya perlu skill coding?",
    a: (
      <>
        <p>Tidak wajib. Untuk mulai:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Copy–paste code</li>
          <li>Edit teks atau angka sederhana</li>
        </ul>
        <p className="mt-2">Kalau kamu bisa coding → Motionary jadi lebih powerful. Kalau tidak → tetap bisa dipakai.</p>
      </>
    ),
  },
  {
    q: "Bagaimana workflow kerja Motionary?",
    a: (
      <>
        <p>Workflow Motionary sederhana:</p>
        <ol className="list-decimal pl-5 mt-2 space-y-1">
          <li>Generate code TSX menggunakan AI (prompt)</li>
          <li>Paste code ke Motionary Studio</li>
          <li>Preview di Remotion Studio</li>
          <li>Render video</li>
        </ol>
        <p className="mt-2">Cepat, konsisten, dan bisa diulang kapan saja.</p>
      </>
    ),
  },
  {
    q: "Kalau saya stuck atau bingung, gimana?",
    a: (
      <>
        <p>Motionary dirancang dengan struktur yang jelas dan repeatable. Kamu bisa:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Mengulang prompt</li>
          <li>Mengedit bagian kecil</li>
          <li>Mengembangkan secara bertahap</li>
        </ul>
        <p className="mt-2">Dokumentasi dan panduan disediakan untuk bantu kamu mulai.</p>
      </>
    ),
  },
  {
    q: "Kenapa tidak pakai AI video generator biasa?",
    a: (
      <>
        <p>Karena AI video generator:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Hasilnya sering tidak konsisten</li>
          <li>Terbatas kontrol</li>
          <li>Antre server</li>
          <li>Biasanya ada watermark atau limit</li>
        </ul>
        <p className="mt-2">Motionary memberi kontrol struktur + kecepatan lokal.</p>
      </>
    ),
  },
  {
    q: "Apakah Motionary menggantikan editor video manual?",
    a: (
      <p>Tidak sepenuhnya. Motionary mengganti pekerjaan repetitif, bukan kreativitas. Untuk produksi rutin dan edukasi → jauh lebih efisien. Untuk cinematic berat → tetap bisa pakai editor manual.</p>
    ),
  },
  {
    q: "Apa keunggulan utama Motionary dibanding edit manual?",
    a: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Lebih cepat</li>
        <li>Struktur konsisten</li>
        <li>Mudah direvisi</li>
        <li>Cocok untuk produksi jangka panjang</li>
        <li>Tidak melelahkan secara mental</li>
      </ul>
    ),
  },
  {
    q: "Apakah hasil videonya ada watermark?",
    a: (
      <>
        <p>Tidak. Semua hasil render Motionary:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Bersih</li>
          <li>Tanpa watermark</li>
          <li>Siap dipakai langsung</li>
        </ul>
      </>
    ),
  },
  {
    q: "Resolusi output videonya sampai berapa?",
    a: (
      <>
        <p>Motionary mendukung:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Full HD (1080p)</li>
          <li>2K</li>
          <li>4K (Ultra HD)</li>
        </ul>
        <p className="mt-2">Tergantung setting render dan hardware kamu.</p>
      </>
    ),
  },
  {
    q: "Apakah Motionary perlu internet?",
    a: (
      <>
        <p>Tidak untuk produksi utama. Internet hanya dibutuhkan untuk:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Generate code via AI</li>
          <li>Download / update awal</li>
        </ul>
        <p className="mt-2">Preview & render berjalan 100% offline.</p>
      </>
    ),
  },
  {
    q: "Berapa kali bisa render dalam sebulan?",
    a: (
      <>
        <p>Tidak ada batasan. Kamu bisa render:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Sebanyak yang kamu mau</li>
          <li>Kapan saja</li>
          <li>Tanpa kuota bulanan</li>
        </ul>
        <p className="mt-2">Batasnya hanya hardware dan waktu kamu sendiri.</p>
      </>
    ),
  },
  {
    q: "Apakah file dan data saya aman?",
    a: (
      <>
        <p>Aman. Semua file, project, dan hasil render berada di komputer kamu sendiri, bukan di cloud pihak ketiga.</p>
      </>
    ),
  },
  {
    q: "Apakah Motionary sekali beli atau langganan?",
    a: (
      <>
        <p>Motionary menggunakan model sekali beli (lifetime). Tidak ada:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Biaya bulanan wajib</li>
          <li>Subscription tersembunyi</li>
        </ul>
      </>
    ),
  },
  {
    q: "Apakah Motionary bisa dipakai untuk konten komersial?",
    a: (
      <>
        <p>Bisa. Semua video hasil render:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Bebas dipakai</li>
          <li>Bebas dimonetisasi</li>
          <li>Bebas dijual</li>
        </ul>
      </>
    ),
  },
  {
    q: "Kenapa tidak bisa render langsung di website?",
    a: (
      <>
        <p>Karena rendering video:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Butuh resource besar</li>
          <li>Lebih cepat & stabil di hardware lokal</li>
          <li>Menghindari antre server & limit</li>
        </ul>
        <p className="mt-2">Motionary sengaja dirancang desktop-first.</p>
      </>
    ),
  },
  {
    q: "Saya bisa mulai dari mana setelah beli?",
    a: (
      <>
        <p>Setelah beli, kamu akan:</p>
        <ol className="list-decimal pl-5 mt-2 space-y-1">
          <li>Download Motionary</li>
          <li>Ikuti panduan setup singkat</li>
          <li>Generate prompt pertama</li>
          <li>Preview & render</li>
        </ol>
        <p className="mt-2">Dalam waktu singkat, kamu sudah bisa produksi.</p>
      </>
    ),
  },
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

      {/* CTA setelah FAQ */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-6">
          Siap ubah ide jadi motion tanpa ribet?
        </h3>
        <a
          href={BUY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-10 py-4 rounded-xl text-lg font-bold uppercase neon-bg neon-glow transition-transform hover:scale-105"
        >
          Beli Motionary — Sekali Beli, Tanpa Batas Render
        </a>
      </motion.div>
    </div>
  </section>
);

export default FaqSection;
