

## Update Comparison Table Data

Replace the current 5-row comparison table with the full 26-row benchmarking data provided.

### Changes

**File: `src/components/landing/ComparisonSection.tsx`**

- Replace the `rows` array with 26 new rows covering all aspects: Cara mulai, Kontrol struktur, Konsistensi visual, Cocok untuk edukasi, Waktu produksi, Kurva belajar, Fleksibilitas edit, Revisi kecil, Skalabilitas konten, Kualitas motion, Kualitas output, Watermark, Proses rendering, Jumlah render per bulan, Akses penggunaan, Ketergantungan internet, Privasi file, Workflow jangka panjang, Cocok untuk produksi rutin, Cocok untuk pemula, Cocok untuk profesional, Bisa dikustom, Output siap pakai, Repeatable workflow, Model biaya, Biaya jangka panjang, and Mental load.
- Each row maps to 3 columns: AI Generator Umum, Motionary, Edit Manual
- Boolean flags (webOk, desktopOk, manualOk) will be set based on whether each value is positive/negative for the check/x icon display
- Column headers updated: "AI Generator" becomes "AI Generator Umum", and "Aspek Perbandingan" replaces "Benchmarking"

### Technical Details

- The `rows` array structure stays the same: `{ feature, web, desktop, manual, webOk, desktopOk, manualOk }`
- Positive values get `true` (green check), negative values get `false` (red X)
- No structural changes to the table JSX, only data and header text updates

