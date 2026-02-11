import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
const rows = [
  { feature: "Cara mulai", web: "Prompt teks", desktop: "Prompt teks", manual: "Blank canvas", webOk: true, desktopOk: true, manualOk: false },
  { feature: "Kontrol struktur", web: "Rendah", desktop: "Tinggi", manual: "Sangat tinggi", webOk: false, desktopOk: true, manualOk: true },
  { feature: "Konsistensi visual", web: "Tidak konsisten", desktop: "Konsisten", manual: "Konsisten", webOk: false, desktopOk: true, manualOk: true },
  { feature: "Cocok untuk edukasi", web: "Kurang", desktop: "Sangat cocok", manual: "Cocok", webOk: false, desktopOk: true, manualOk: true },
  { feature: "Waktu produksi", web: "Cepat", desktop: "Cepat & terarah", manual: "Lama", webOk: true, desktopOk: true, manualOk: false },
  { feature: "Kurva belajar", web: "Rendah", desktop: "Rendah–sedang", manual: "Tinggi", webOk: true, desktopOk: true, manualOk: false },
  { feature: "Fleksibilitas edit", web: "Terbatas", desktop: "Bisa dikembangkan", manual: "Bebas", webOk: false, desktopOk: true, manualOk: true },
  { feature: "Revisi kecil", web: "Sulit", desktop: "Mudah", manual: "Mudah", webOk: false, desktopOk: true, manualOk: true },
  { feature: "Skalabilitas konten", web: "Rendah", desktop: "Tinggi", manual: "Rendah", webOk: false, desktopOk: true, manualOk: false },
  { feature: "Kualitas motion", web: "Acak", desktop: "Terstruktur", manual: "Presisi tinggi", webOk: false, desktopOk: true, manualOk: true },
  { feature: "Kualitas output", web: "Rendah (Low-Res)", desktop: "ULTRA HD (4K Ready)", manual: "Tergantung skill", webOk: false, desktopOk: true, manualOk: false },
  { feature: "Watermark", web: "Ada watermark", desktop: "Bersih / tanpa watermark", manual: "Tanpa watermark", webOk: false, desktopOk: true, manualOk: true },
  { feature: "Proses rendering", web: "Antre server", desktop: "Instan di hardware Anda", manual: "Lama (berjam-jam)", webOk: false, desktopOk: true, manualOk: false },
  { feature: "Jumlah render per bulan", web: "Sangat terbatas / dibatasi paket", desktop: "Tidak dibatasi (sesuai hardware)", manual: "Tidak dibatasi", webOk: false, desktopOk: true, manualOk: true },
  { feature: "Akses penggunaan", web: "Harus internet", desktop: "100% offline mode", manual: "Offline (software berat)", webOk: false, desktopOk: true, manualOk: false },
  { feature: "Ketergantungan internet", web: "Tinggi", desktop: "Rendah", manual: "Tidak", webOk: false, desktopOk: true, manualOk: true },
  { feature: "Privasi file", web: "Cloud", desktop: "Lokal", manual: "Lokal", webOk: false, desktopOk: true, manualOk: true },
  { feature: "Workflow jangka panjang", web: "Tidak stabil", desktop: "Stabil", manual: "Stabil tapi berat", webOk: false, desktopOk: true, manualOk: false },
  { feature: "Cocok untuk produksi rutin", web: "Tidak", desktop: "Ya", manual: "Tidak", webOk: false, desktopOk: true, manualOk: false },
  { feature: "Cocok untuk pemula", web: "Ya", desktop: "Ya", manual: "Tidak", webOk: true, desktopOk: true, manualOk: false },
  { feature: "Cocok untuk profesional", web: "Kurang", desktop: "Ya", manual: "Ya", webOk: false, desktopOk: true, manualOk: true },
  { feature: "Bisa dikustom", web: "Terbatas", desktop: "Ya", manual: "Ya", webOk: false, desktopOk: true, manualOk: true },
  { feature: "Output siap pakai", web: "Kadang", desktop: "Ya", manual: "Ya", webOk: false, desktopOk: true, manualOk: true },
  { feature: "Repeatable workflow", web: "Tidak", desktop: "Ya", manual: "Sulit", webOk: false, desktopOk: true, manualOk: false },
  { feature: "Model biaya", web: "Gratis coba / subscription", desktop: "Sekali beli (lifetime)", manual: "Langganan mahal", webOk: true, desktopOk: true, manualOk: false },
  { feature: "Biaya jangka panjang", web: "Tinggi", desktop: "Rendah", manual: "Tinggi (waktu & tenaga)", webOk: false, desktopOk: true, manualOk: false },
  { feature: "Mental load", web: "Rendah", desktop: "Rendah", manual: "Tinggi", webOk: true, desktopOk: true, manualOk: false },
];
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};
const ComparisonSection = () => <section className="py-32">
    <div className="container mx-auto px-4">
      <motion.div initial="hidden" whileInView="visible" viewport={{
      once: true
    }}>
        <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl lg:text-6xl font-bold mb-16 text-center">AI Generator vs <span className="neon-text">Motionary</span> vs Edit manual</motion.h2>

        <motion.div variants={fadeUp} className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="py-4 px-4 text-base font-semibold text-muted-foreground uppercase tracking-wider">Aspek Perbandingan</th>
                <th className="py-4 px-4 text-base font-semibold text-muted-foreground uppercase tracking-wider">AI Generator Umum</th>
                <th className="py-4 px-4 text-base font-semibold uppercase tracking-wider neon-text">Motionary Desktop (Full)</th>
                <th className="py-4 px-4 text-base font-semibold text-muted-foreground uppercase tracking-wider">Edit Manual</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => <tr key={i} className="border-b border-border/50">
                  <td className="py-5 px-4 font-bold text-foreground text-base">{r.feature}</td>
                  <td className="py-5 px-4 text-muted-foreground">
                    <span className="inline-flex items-center gap-2">
                      {r.webOk ? <Check className="h-5 w-5 text-primary shrink-0" /> : <X className="h-5 w-5 text-destructive shrink-0" />}
                      {r.web}
                    </span>
                  </td>
                  <td className="py-5 px-4 font-semibold text-foreground">
                    <span className="inline-flex items-center gap-2">
                      <Check className="h-5 w-5 neon-text shrink-0" />
                      {r.desktop}
                    </span>
                  </td>
                  <td className="py-5 px-4 text-muted-foreground">
                    <span className="inline-flex items-center gap-2">
                      {r.manualOk ? <Check className="h-5 w-5 text-primary shrink-0" /> : <X className="h-5 w-5 text-destructive shrink-0" />}
                      {r.manual}
                    </span>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </motion.div>
      </motion.div>
    </div>
  </section>;
export default ComparisonSection;