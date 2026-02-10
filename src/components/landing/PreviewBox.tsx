import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Loader2, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const BUY_URL = "https://lynk.id/motionary";

const mockShapes = [
  { type: "circle", color: "hsl(262 83% 58%)", delay: 0 },
  { type: "rect", color: "hsl(330 80% 60%)", delay: 0.3 },
  { type: "circle", color: "hsl(262 83% 75%)", delay: 0.6 },
];

const PreviewBox = () => {
  const [prompt, setPrompt] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "preview">("idle");

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setState("loading");
    setTimeout(() => setState("preview"), 2000);
  };

  return (
    <section id="preview" className="pb-24 pt-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-muted-foreground mb-4 text-center">Coba idemu di sini 👇</p>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-xl">
            <Textarea
              placeholder={'Contoh:\n"Penjelasan luas segitiga untuk anak SD"\n"Intro video edukasi 10 detik"\n"Highlight fakta unik tentang luar angkasa"'}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="mb-4 min-h-[100px] bg-muted/50 border-border resize-none"
              disabled={state === "loading"}
            />
            <Button
              onClick={handleGenerate}
              disabled={!prompt.trim() || state === "loading"}
              className="gradient-bg border-0 text-primary-foreground w-full h-11"
            >
              {state === "loading" ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...</>
              ) : (
                <><Play className="mr-2 h-4 w-4" /> Generate Preview</>
              )}
            </Button>

            {/* Preview area */}
            <AnimatePresence>
              {(state === "loading" || state === "preview") && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-6"
                >
                  <div className="relative rounded-xl bg-muted aspect-video overflow-hidden border border-border">
                    {/* Mock animation */}
                    {state === "preview" && (
                      <div className="absolute inset-0 flex items-center justify-center gap-6">
                        {mockShapes.map((s, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                              scale: [0, 1.2, 1],
                              opacity: [0, 1, 0.8],
                              y: [20, -10, 0],
                            }}
                            transition={{
                              delay: s.delay,
                              duration: 0.8,
                              repeat: Infinity,
                              repeatType: "reverse",
                              repeatDelay: 1.5,
                            }}
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
                      <div className="absolute bottom-3 right-3 text-xs text-muted-foreground/50 font-medium">
                        Preview – Motionary
                      </div>
                    )}

                    {/* Overlay */}
                    {state === "preview" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.5 }}
                        className="absolute inset-0 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center"
                      >
                        <Lock className="h-8 w-8 text-primary mb-4" />
                        <p className="font-semibold mb-2">Render versi penuh hanya tersedia setelah membeli Motionary</p>
                        <Button className="gradient-bg border-0 text-primary-foreground mt-2 glow" asChild>
                          <a href={BUY_URL} target="_blank" rel="noopener noreferrer">
                            Beli Motionary
                          </a>
                        </Button>
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
