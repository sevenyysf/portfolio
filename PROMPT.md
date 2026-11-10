# Prompt deploy portofolio Pretri ke GitHub Pages

Ekstrak ZIP terlebih dahulu, buka folder `pretri-portfolio` di coding agent, lalu salin prompt di bawah ini. Login ke GitHub menggunakan akun **sevenyysf** jika diminta.

---

Saya Pretri Seveny Yasyaf, pemilik akun GitHub **sevenyysf**. Tolong deploy website portofolio yang sudah tersedia dalam folder ini ke GitHub Pages sampai benar-benar dapat diakses publik.

## Tujuan

- Gunakan repository **sevenyysf/portfolio** dengan branch `main`.
- Alamat yang ditargetkan setelah deployment: **https://sevenyysf.github.io/portfolio/**. Jangan menganggap alamat ini sudah aktif sebelum deployment diverifikasi.
- Saya mengizinkan pembuatan repository publik `portfolio` di akun saya, push kode portofolio, konfigurasi GitHub Pages, dan publikasi website beserta CV dan foto yang sudah ada dalam folder `site/assets/`.
- Jika repository tersebut sudah ada, periksa isinya terlebih dahulu dan pertahankan pekerjaan yang ada. Jangan melakukan force-push atau menghapus file yang tidak berkaitan. Jika repository berisi proyek lain, tanyakan sebelum menggantinya.

## Kerjakan sampai selesai

1. Baca `README.md`, `PANDUAN.txt`, `package.json`, dan `.github/workflows/pages.yml`. Website ini statis; sumber yang dipublikasikan berada di folder `site/`.
2. Periksa akun GitHub yang sedang login. Pastikan akses tujuan adalah akun `sevenyysf`, bukan akun orang lain. Jika belum login atau izin belum cukup, pandu saya melakukan login melalui mekanisme resmi. Jangan meminta password atau token ditempelkan ke chat atau file.
3. Gunakan Node.js 22. Jalankan `npm ci`, `npm run check`, dan `npm run quality`. Perbaiki masalah yang ditemukan tanpa menonaktifkan pemeriksaan atau menurunkan ambang kualitas hanya agar lolos.
4. Pertahankan desain, isi, foto, CV, dan interaksi yang sudah dibuat. Jangan menggantinya dengan template generik, menambahkan klaim yang tidak ada sumbernya, atau membuat link project palsu.
5. Pastikan semua path aset tetap relatif agar berfungsi di subpath `/portfolio/`. Sertakan semua file di `site/assets/`, termasuk PDF CV dan foto kegiatan.
6. Buat atau gunakan repository tujuan. Upload **isi folder proyek ke root repository**, bukan ZIP dan bukan folder pembungkus tambahan. Sertakan `.github/`, `.aislop/`, `scripts/`, `site/`, `knip.json`, `package.json`, dan `package-lock.json` beserta dokumentasinya.
7. Jangan upload `node_modules/`, `.openai/`, arsip chat WhatsApp, folder `pretri-media-private/`, kredensial, atau file lokal di luar proyek.
8. Aktifkan GitHub Pages dengan sumber **GitHub Actions**. Gunakan workflow yang sudah tersedia: `.github/workflows/pages.yml`. Workflow mengunggah folder `site/` sebagai artifact Pages.
9. Push ke `main`, jalankan workflow bila diperlukan, dan pantau sampai deployment berhasil. Jika workflow gagal, baca log, perbaiki penyebabnya, dan jalankan kembali. Jangan berhenti setelah sekadar push kode.
10. Buka URL deployment yang benar-benar dilaporkan GitHub. Verifikasi halaman utama, CSS, JavaScript, semua gambar, tombol unduh CV, filter project, catatan project, serta pembuka dan penutup foto. Cek tampilan desktop dan mobile, termasuk tidak ada horizontal overflow.
11. Laporkan URL website yang aktif, URL repository, hasil pemeriksaan, dan langkah sederhana untuk mengubah konten serta menerbitkan pembaruan berikutnya. Jika ada hambatan, jelaskan tepatnya tanpa mengklaim deployment berhasil.

## Informasi konten

- Nama: Pretri Seveny Yasyaf.
- GitHub: https://github.com/sevenyysf
- Email dan LinkedIn sudah tercantum di website berdasarkan CV.
- Foto, poster, screenshot FOKASI, dan CV sudah disertakan sebagai file lokal. Tidak diperlukan hotlink gambar dari WhatsApp.
- Jangan menambahkan tautan repository project sebelum repository tersebut benar-benar ada dan isinya sesuai.
- Publikasi yang diminta adalah **GitHub Pages**, bukan layanan hosting lain. Tidak perlu membeli domain atau layanan berbayar.
