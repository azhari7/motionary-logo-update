
# 🎬 Motionary — Text to Animated Video Platform

Membangun ulang aplikasi **Motionify** suamimu dengan branding baru **Motionary**, menggunakan logo yang sudah di-upload, dan menambahkan fitur-fitur baru.

---

## 1. 🎨 Rebranding ke Motionary
- Ganti semua referensi "Motionify" menjadi **Motionary**
- Pasang logo baru (gambar yang sudah di-upload) di header dan favicon
- Update judul halaman, meta tags, dan branding di seluruh aplikasi

## 2. 🏠 Landing Page
- Halaman utama yang menarik dengan hero section menampilkan tagline Motionary
- Penjelasan singkat cara kerja (Text → AI → Animated Video)
- Preview/demo animasi yang eye-catching
- Call-to-action untuk mulai membuat animasi atau daftar akun
- Responsif untuk mobile dan desktop

## 3. 🔐 Login & Register (Authentication)
- Halaman login dan register dengan email & password
- Menggunakan Lovable Cloud (Supabase Auth) untuk autentikasi
- Profil user untuk menyimpan project animasi mereka
- Proteksi halaman editor — hanya user yang login bisa akses

## 4. 🎥 Editor Animasi (Fitur Utama — dari project asli)
- **Sidebar project management** — buat, rename, hapus project
- **Prompt input** — ketik deskripsi untuk generate animasi via AI
- **Preview panel** — lihat animasi secara real-time
- **Code viewer** — lihat kode animasi yang dihasilkan
- **Render settings** — pilih resolusi (720p/1080p/4K), aspect ratio, FPS, durasi
- **System prompt dialog** — kustomisasi instruksi AI
- **Recording** — rekam animasi ke file video

## 5. 🖼️ Gallery / Showcase
- Halaman publik menampilkan contoh-contoh animasi yang sudah dibuat
- Card/grid layout dengan thumbnail preview
- Bisa diklik untuk lihat detail dan prompt yang digunakan
- Inspirasi bagi user baru

## 6. 💰 Pricing Page
- Halaman harga dengan paket-paket berlangganan (Free, Pro, Enterprise atau sesuai kebutuhan)
- Perbandingan fitur antar paket dalam tabel
- Call-to-action untuk upgrade/daftar
- Desain clean dan mudah dipahami

## 7. 🗄️ Backend (Lovable Cloud)
- **Database**: Tabel users/profiles, projects, gallery items
- **Authentication**: Email/password signup & login
- **Edge Function**: Generate animation via AI
- **Storage**: Untuk menyimpan hasil render video

---

### Urutan Implementasi
1. Setup backend (database, auth) dengan Lovable Cloud
2. Rebranding + Landing Page
3. Login/Register flow
4. Editor animasi (core feature)
5. Gallery/Showcase
6. Pricing Page
