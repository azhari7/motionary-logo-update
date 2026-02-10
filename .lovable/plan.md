

# Redesign Landing Page Motionary

Membangun ulang halaman landing page sesuai brief lengkap yang diberikan — fokus pada konversi: user coba preview, lalu tertarik beli.

---

## Struktur Halaman (12 Section)

### 1. Navbar (Fixed Top)
- Logo Motionary + nama
- Link: Tentang, Kontak
- CTA kecil: "Beli Motionary"

### 2. Hero Section
- Headline: "Ubah ide jadi motion. Coba langsung."
- Subheadline menjelaskan preview online vs render lokal
- CTA utama: "Coba Preview Sekarang" (scroll ke preview box)
- CTA sekunder: "Lihat Contoh Output" (scroll ke bawah)

### 3. Interactive Preview Box
- Judul kecil: "Coba idemu di sini"
- Textarea input dengan placeholder contoh prompt
- Tombol "Generate Preview"
- Area preview output (mock animasi loop dengan watermark "Preview - Motionary")
- Overlay setelah generate: lock icon + "Render versi penuh hanya tersedia setelah membeli Motionary" + tombol "Beli Motionary"
- Microcopy di bawah preview

### 4. Section: Masalah User (Pain Points)
- Headline: "Kenapa bikin motion sering terasa ribet?"
- 4 bullet points relatable
- Closing line italic

### 5. Section: Solusi - Apa itu Motionary
- Headline: "Motionary adalah AI khusus untuk motion"
- Body copy + 4 highlight bullets dengan icon

### 6. Section: Preview vs Produksi Lokal
- Headline: "Preview online. Produksi penuh di komputermu."
- Two-column comparison cards

### 7. Section: Cara Kerja
- 3 steps dengan icon dan penjelasan singkat

### 8. Section: Untuk Siapa Motionary
- Cards: Content Creator, Edukator, Motion Designer, Indie Maker, Developer Remotion
- Closing line

### 9. Section: Value Proposition
- Headline: "Kenapa banyak orang memilih Motionary?"
- 5 bullets dengan checkmark icons

### 10. Section: Apa yang Didapat Setelah Beli
- Checklist items dengan icon
- CTA: "Beli Motionary Sekarang"
- Microcopy tentang lynk.id

### 11. Section: FAQ
- 5 pertanyaan dalam accordion/collapsible format

### 12. Final CTA + Footer
- Headline besar + tombol CTA besar
- Footer: Motionary, Tentang, Kontak, Sosial, Copyright

---

## Detail Teknis

### File yang diubah
- **`src/pages/Index.tsx`** — rewrite total sesuai 12 section di atas

### File baru
- **`src/components/landing/HeroSection.tsx`** — Hero + CTA
- **`src/components/landing/PreviewBox.tsx`** — Interactive preview dengan textarea, generate button, mock output, overlay
- **`src/components/landing/PainSection.tsx`** — Pain points
- **`src/components/landing/SolutionSection.tsx`** — Apa itu Motionary
- **`src/components/landing/ComparisonSection.tsx`** — Preview vs Lokal (two-column)
- **`src/components/landing/HowItWorksSection.tsx`** — 3 steps
- **`src/components/landing/AudienceSection.tsx`** — Untuk siapa
- **`src/components/landing/ValueSection.tsx`** — Value proposition
- **`src/components/landing/WhatYouGetSection.tsx`** — Checklist + CTA
- **`src/components/landing/FaqSection.tsx`** — FAQ accordion
- **`src/components/landing/FinalCtaSection.tsx`** — Final CTA
- **`src/components/landing/Footer.tsx`** — Footer
- **`src/components/landing/Navbar.tsx`** — Fixed navbar

### Interactive Preview Box (Mock)
- Preview box akan menampilkan animasi mock (bukan AI sebenarnya) — animasi sederhana menggunakan framer-motion sebagai simulasi
- Setelah user klik "Generate Preview", tampilkan loading state lalu mock preview dengan watermark
- Overlay muncul dengan lock dan CTA beli
- Link "Beli Motionary" akan diarahkan ke URL lynk.id (placeholder dulu, bisa diganti nanti)

### Styling
- Menggunakan design system yang sudah ada (gradient-text, gradient-bg, glow, Space Grotesk, Inter)
- Semua section menggunakan framer-motion untuk scroll animations
- Responsive mobile-first
- Dark mode support via CSS variables yang sudah ada

### Dependencies
- Tidak ada dependency baru — menggunakan framer-motion, lucide-react, dan radix accordion yang sudah terinstall
