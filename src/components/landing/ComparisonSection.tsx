import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
const rows = [{
  feature: "KUALITAS",
  web: "Rendah (Low-Res)",
  desktop: "ULTRA HD (4K READY)",
  manual: "Tergantung Skill",
  webOk: false,
  desktopOk: true,
  manualOk: false
}, {
  feature: "WATERMARK",
  web: "Ada Watermark",
  desktop: "BERSIH / TANPA WATERMARK",
  manual: "Tanpa Watermark",
  webOk: false,
  desktopOk: true,
  manualOk: true
}, {
  feature: "RENDERING",
  web: "Antre Server",
  desktop: "INSTAN DI HARDWARE ANDA",
  manual: "Lama (Berjam-jam)",
  webOk: false,
  desktopOk: true,
  manualOk: false
}, {
  feature: "AKSES",
  web: "Harus Internet",
  desktop: "100% OFFLINE MODE",
  manual: "Offline (Software Berat)",
  webOk: false,
  desktopOk: true,
  manualOk: false
}, {
  feature: "BIAYA",
  web: "Gratis Coba",
  desktop: "SEKALI BELI (LIFETIME)",
  manual: "Langganan Mahal",
  webOk: true,
  desktopOk: true,
  manualOk: false
}];
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
                <th className="py-4 px-4 text-base font-semibold text-muted-foreground uppercase tracking-wider">Fitur</th>
                <th className="py-4 px-4 text-base font-semibold text-muted-foreground uppercase tracking-wider">Preview Web (Lite)</th>
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