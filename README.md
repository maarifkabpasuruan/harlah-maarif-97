# Landing Page Harlah LP Maarif NU ke-97

Landing page statis siap di-deploy ke Vercel/GitHub.

## Struktur
```text
harlah-maarif-97/
├── index.html
├── style.css
├── script.js
└── media/
    └── logo.png   ← letakkan logo resmi di sini
```

## Deploy ke Vercel
1. Upload/push folder ini ke repository GitHub.
2. Di Vercel pilih **Add New → Project**.
3. Import repository GitHub tersebut.
4. Karena ini static HTML/CSS/JS, **Framework Preset** dapat dibiarkan kosong/Other.
5. Build Command dikosongkan.
6. Output Directory dikosongkan.
7. Klik Deploy.

## Catatan
- Semua data kegiatan diatur di `script.js` pada array `events`, sehingga mudah diperbarui tanpa mengubah struktur HTML.
- Tombol pendaftaran, juknis, grup WhatsApp, dan kontak WhatsApp dibuat sebagai link.
- Jika `media/logo.png` tersedia, logo otomatis tampil di header.
- Desain responsif untuk desktop, tablet, dan mobile.
- Menggunakan Google Sans dari Google Fonts.
