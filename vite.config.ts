import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // 1. Set the base path for GitHub Pages
  base: mode === 'production' ? '/motionary-logo-update/' : '/',

  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    // dedupe helps prevent multiple versions of React from loading
    dedupe: ["react", "react-dom", "react/jsx-runtime"],
  },
  optimizeDeps: {
    include: [
      "react", 
      "react-dom", 
      "react/jsx-runtime", 
      "@tanstack/react-query", 
      "framer-motion"
    ],
  },
  // 2. Ensure the build output goes to 'dist' (default for Vite)
  build: {
    outDir: 'dist',
  }
}));
