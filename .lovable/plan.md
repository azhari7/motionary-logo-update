

## Tambah Section Harga Motionary

Membuat section pricing baru (`PricingSection`) dan menempatkannya setelah WorkflowSection dan sebelum FaqSection.

### Perubahan

**File baru: `src/components/landing/PricingSection.tsx`**

- Section dengan headline "Sekali Beli. Miliki Selamanya." dan subheadline tentang bukan langganan
- Price card utama dengan:
  - Judul "Motionary -- Lifetime License"
  - Harga coret Rp200.000 dan harga aktif Rp100.000
  - Micro-copy "Diskon waktu terbatas"
  - 7 highlight checklist (lifetime, render tanpa batas, tanpa watermark, dll)
  - CTA utama "Beli Motionary Sekarang" (link ke lynk.id/motionary)
  - CTA sekunder "Tanya Dulu di Komunitas"
  - Trust copy: "Ragu sebelum beli? Kamu bisa tanya dulu di Telegram atau Discord Motionary."
- 3 badge kecil di bawah card: "Diskon Terbatas", "Best Value for Creators", "Local Desktop Tool"
- Animasi entrance menggunakan framer-motion (konsisten dengan section lain)
- Styling menggunakan neon-text, neon-bg, neon-glow yang sudah ada

**File diedit: `src/pages/Index.tsx`**

- Import PricingSection
- Sisipkan `<PricingSection />` setelah `<WorkflowSection />` dan sebelum `<WhatYouGetSection />`

### Detail Teknis

- Price card menggunakan border gradient dan shadow untuk tampilan premium
- Harga coret menggunakan `line-through` pada Rp200.000
- Checklist menggunakan icon Check dari lucide-react
- CTA utama menggunakan class neon-bg + neon-glow (sama seperti CTA di section lain)
- CTA sekunder menggunakan style outline/ghost
- Badge menggunakan komponen Badge atau div kecil dengan styling rounded-full
- Layout responsive: card centered di max-w-lg, badge grid di bawahnya

