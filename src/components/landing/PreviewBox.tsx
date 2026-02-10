import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Loader2, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const BUY_URL = "https://lynk.id/motionary";

const presets = [
  { emoji: "🌊", label: "Ikan Koi Watercolor", prompt: "Animasi ikan koi berenang di kolam dengan gaya watercolor yang elegan" },
  { emoji: "🏠", label: "Pondok Crayon", prompt: "Pondok kecil di tengah hutan digambar dengan gaya crayon anak-anak" },
  { emoji: "🍄", label: "Jamur Ajaib", prompt: "Jamur-jamur bercahaya tumbuh di hutan gelap dengan efek magical" },
  { emoji: "☁️", label: "Awan Animasi", prompt: "Awan-awan lembut bergerak perlahan di langit senja berwarna pink" },
];

const mockShapes = [
  { type: "circle", color: "hsl(262 83% 65%)", delay: 0 },
  { type: "rect", color: "hsl(330 80% 65%)", delay: 0.3 },
  { type: "circle", color: "hsl(120 100% 50%)", delay: 0.6 },
];

const PreviewBox = () => {
  const [prompt, setPrompt] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "preview">("idle");
  const [showOverlay, setShowOverlay] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setState("loading");
    setShowOverlay(false);
    setTimeout(() => {
      setState("preview");
    }, 2000);
  };

  useEffect(() => {
    if (state === "preview") {
      timerRef.current = setTimeout(() => setShowOverlay(true), 5000);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [state]);

  return (
    <section id="sandbox" className="py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Ubah Ide Jadi Motion. <span className="neon-text">Coba Sekarang.</span>
          </h2>

          <div className="mt-10 rounded-2xl border border-border bg-[hsl(0_0%_7%)] p-6 md:p-8 shadow-2xl" style={{ boxShadow: '0 0 40px -10px hsl(262 83% 65% / 0.15)' }}>
            <Textarea
              placeholder={'Contoh:\n"Penjelasan luas segitiga untuk anak SD"\n"Intro video edukasi 10 detik"\n"Highlight fakta unik tentang luar angkasa"'}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="mb-4 min-h-[120px] bg-muted/50 border-border resize-none font-mono text-sm"
              disabled={state === "loading"}
            />

            {/* Prompt library */}
            <div className="flex flex-wrap gap-2 mb-4">
              {presets.map((p) => (
                <button
                  key={p.label}
                  onClick={() => { setPrompt(p.prompt); setState("idle"); setShowOverlay(false); }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-muted hover:bg-muted-foreground/10 text-muted-foreground hover:text-foreground transition-colors border border-border"
                >
                  {p.emoji} {p.label}
                </button>
              ))}
            </div>

            <Button
              onClick={handleGenerate}
              disabled={!prompt.trim() || state === "loading"}
              className="neon-bg text-[hsl(var(--neon-foreground))] border-0 w-full h-12 text-base font-bold uppercase hover:opacity-90"
            >
              {state === "loading" ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...</>
              ) : (
                <><Play className="mr-2 h-4 w-4" /> Generate Preview</>
              )}
            </Button>

            <AnimatePresence>
              {(state === "loading" || state === "preview") && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-6"
                >
                  <div className="relative rounded-xl bg-muted aspect-video overflow-hidden border border-border">
                    {state === "preview" && (
                      <div className="absolute inset-0 flex items-center justify-center gap-6">
                        {mockShapes.map((s, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.8], y: [20, -10, 0] }}
                            transition={{ delay: s.delay, duration: 0.8, repeat: Infinity, repeatType: "reverse", repeatDelay: 1.5 }}
                            className={`${s.type === "circle" ? "rounded-full" : "rounded-lg"} w-16 h-16 md:w-20 md:h-20`}
                            style={{ backgroundColor: s.color }}
                          />
                        ))}
                      </div>
                    )}

                    {state === "loading" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Loader2 className="h-10 w-10 animate-spin text-primary" />
                      </div>
                    )}

                    {/* Watermark */}
                    {state === "preview" && (
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-foreground/10 uppercase tracking-widest pointer-events-none select-none">
                        WEB PREVIEW
                      </div>
                    )}

                    {/* Overlay after 5s */}
                    {showOverlay && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-background/85 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center"
                      >
                        <Lock className="h-10 w-10 neon-text mb-4" />
                        <p className="font-bold text-lg mb-1">INGIN RENDER HD TANPA WATERMARK?</p>
                        <a
                          href={BUY_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center px-8 py-3 rounded-xl text-base font-bold uppercase neon-bg neon-glow transition-transform hover:scale-105"
                        >
                          Download & Instal Versi Desktop
                        </a>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <p className="text-xs text-muted-foreground/60 mt-4 text-center">
              Preview ini hanya contoh visual. Video tidak bisa di-download atau di-render penuh dari halaman ini.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviewBox;
