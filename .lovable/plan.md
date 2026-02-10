

# Tambah Space di Hero Section agar Full Viewport

## Tujuan
Membuat Hero Section memenuhi layar penuh (full viewport height), sehingga yang terlihat pertama kali oleh user hanya: headline, sub-headline, dan tombol "Coba Preview Gratis" — tanpa perlu scroll.

## Perubahan

### File: `src/components/landing/HeroSection.tsx`
- Tambahkan `min-h-screen` pada section agar tingginya minimal setinggi layar
- Ubah layout menjadi `flex items-center justify-center` agar konten ter-center secara vertikal
- Tambah spacing (margin-bottom) yang lebih besar setelah sub-headline "Sekali Beli, Miliki Selamanya"
- Sembunyikan mockup monitor dari area above-the-fold (pindahkan ke bawah tombol CTA, atau tetap ada tapi user harus scroll untuk melihatnya)
- Pastikan tombol "Coba Preview Gratis" menjadi elemen terakhir yang terlihat di viewport

### Hasil Akhir
Saat landing page pertama kali dibuka, user hanya melihat:
1. Headline "BIKIN MOTION GRAPHIC SECEPAT MENGETIK."
2. "Sekali Beli, Miliki Selamanya."
3. Paragraf deskripsi
4. Tombol "COBA PREVIEW GRATIS"

Mockup monitor dan konten lainnya baru terlihat setelah scroll ke bawah.
