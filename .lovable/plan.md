

## Update FAQ Section

Mengganti seluruh konten FAQ dari 3 pertanyaan menjadi 20 pertanyaan lengkap sesuai konten yang diberikan, plus menambahkan CTA di bawah FAQ.

### Perubahan

**File: `src/components/landing/FaqSection.tsx`**

- Ganti array `faqs` dari 3 item menjadi 20 item dengan pertanyaan dan jawaban lengkap
- Jawaban yang berisi list/poin akan diformat menggunakan elemen HTML (paragraf dan list) agar rapi
- Tambahkan CTA section di bawah accordion FAQ dengan teks "Siap ubah ide jadi motion tanpa ribet?" dan tombol beli yang mengarah ke link Lynk.id

### Detail Teknis

- Struktur data `faqs` diubah agar field `a` (answer) berupa JSX/ReactNode, bukan string biasa, supaya bisa menampilkan list dan paragraf dengan format yang benar
- Menggunakan `<ul>` dengan styling Tailwind untuk list items
- CTA button menggunakan style yang konsisten dengan tombol CTA lain di landing page (gradient neon, link ke BUY_URL)
- Semua 20 FAQ ditampilkan dalam satu Accordion collapsible

