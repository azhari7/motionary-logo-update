
# Redesign Landing Page Motionary — "The Ultimate Version"

Overhaul total landing page dengan pendekatan bold, high-contrast, dan conversion-focused. Semua section ditulis ulang dengan copy baru, visual lebih besar, dan struktur yang berbeda dari versi sebelumnya.

---

## Perubahan Utama

### Tone & Visual Shift
- Font size jauh lebih besar (headline 64-72px+, sub 24px, body 18px)
- Background default gelap (#0a0a0a / near-black), high contrast white text
- Neon green accent untuk CTA utama ("BELI SEKALI, MILIKI SELAMANYA")
- Spacing antar section lebih luas (py-32 atau lebih)
- Seluruh copy diganti sesuai brief baru (bahasa lebih tegas, CAPS di headline)

### Struktur Baru (10 Section)

1. **Navbar** — Glassmorphism sticky. Kiri: "MOTIONARY" bold caps. Tengah: Portofolio, Tutorial Instalasi, FAQ (anchor links). Kanan: tombol hijau neon "BELI SEKALI, MILIKI SELAMANYA"

2. **Hero Section** — Headline raksasa: "BIKIN MOTION GRAPHIC SECEPAT MENGETIK. SEKALI BELI, MILIKI SELAMANYA." Sub-headline 24px. CTA besar "COBA PREVIEW GRATIS". Visual mockup monitor/desktop (CSS-only stylized frame)

3. **Portfolio Showcase** (SECTION BARU) — Background gelap, heading "Hasil Nyata dari Motionary". Grid 2x2 berisi 4 YouTube embed placeholder (iframe). Caption: "Semua video di atas dirender 100% di komputer lokal."

4. **Interactive Sandbox** (upgrade dari PreviewBox) — Card gelap (#121212) dengan glowing border. Heading "Ubah Ide Jadi Motion. Coba Sekarang." Textarea monospaced. Prompt Library: 4 preset buttons (Ikan Koi Watercolor, Pondok Crayon, Jamur Ajaib, Awan Animasi). Preview area dengan watermark "WEB PREVIEW". Overlay setelah 5 detik: lock + CTA "DOWNLOAD & INSTAL VERSI DESKTOP"

5. **Comparison Table** (upgrade) — Tabel besar full-width dengan 5 baris (Kualitas, Watermark, Rendering, Akses, Biaya). Check/X icons besar dan tebal. Kolom Desktop di-highlight

6. **Value Proposition** (rewrite) — 4 kartu besar: Kecepatan GPU, Privasi Mutlak, One-Time Payment, Unlimited Render. Dengan ikon dan deskripsi detail

7. **Tutorial Section** (SECTION BARU, menggantikan HowItWorksSection) — Heading "Hanya 2 Menit Sampai Video Pertama Anda." YouTube embed tutorial. Caption di bawah

8. **Checklist Pembelian & Spek** (rewrite WhatYouGetSection) — Box navy/kontras. Checklist: Lisensi Permanen, Render Tanpa Batas, Akses Komunitas. Spek minimum: RAM 8GB, Windows 10/11, macOS Monterey+

9. **FAQ** (rewrite) — Copy baru lebih casual/tegas: "Ribet nggak instalnya?", "Beneran sekali bayar?", "Bisa dipakai tanpa internet?"

10. **Final CTA + Footer** — Headline: "BERHENTI BERLANGGANAN. MULAI MEMILIKI." Tombol raksasa hijau neon "AMANKAN LISENSI PERMANEN SAYA". Microcopy: "Download otomatis setelah pembayaran via Lynk.id." Footer di bawah

### Section yang Dihapus
- PainSection (tidak ada di brief baru)
- SolutionSection (diganti Portfolio Showcase)
- AudienceSection (tidak ada di brief baru)

---

## Detail Teknis

### CSS Changes (`src/index.css`)
- Ubah dark mode menjadi default (body class dark)
- Tambah CSS variable untuk neon green accent (`--neon: 120 100% 50%`)
- Tambah utility class `.neon-bg`, `.neon-text`
- Force dark background sebagai base

### File yang Diedit Total (rewrite)
- `src/components/landing/Navbar.tsx` — Glassmorphism, 3-column layout, green CTA
- `src/components/landing/HeroSection.tsx` — Giant headline, new copy, monitor mockup
- `src/components/landing/PreviewBox.tsx` — Rename logic ke "Sandbox", add prompt library buttons, glowing card, monospaced textarea, 5s overlay timer
- `src/components/landing/ComparisonSection.tsx` — Full table layout, 5 rows, bigger icons
- `src/components/landing/ValueSection.tsx` — 4 big cards with new copy (GPU, Privacy, One-Time, Unlimited)
- `src/components/landing/WhatYouGetSection.tsx` — Navy box, checklist + spek minimum
- `src/components/landing/FaqSection.tsx` — New FAQ copy
- `src/components/landing/FinalCtaSection.tsx` — "BERHENTI BERLANGGANAN. MULAI MEMILIKI." + green neon button
- `src/components/landing/Footer.tsx` — Updated links
- `src/pages/Index.tsx` — Reorder sections, remove deleted ones, add new ones

### File Baru
- `src/components/landing/PortfolioSection.tsx` — YouTube embed grid (4 videos)
- `src/components/landing/TutorialSection.tsx` — YouTube tutorial embed

### File yang Dihapus
- `src/components/landing/PainSection.tsx`
- `src/components/landing/SolutionSection.tsx`
- `src/components/landing/AudienceSection.tsx`
- `src/components/landing/HowItWorksSection.tsx` (replaced by TutorialSection)

### Dependencies
- Tidak ada dependency baru, semua menggunakan framer-motion, lucide-react, dan Radix yang sudah ada
