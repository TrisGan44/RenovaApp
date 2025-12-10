# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Base API URL

`http://192.168.1.3:5000` (set in `app.json` under `extra.apiBaseUrl`). Ubah ke IP lokal backend Anda jika berbeda.

## Quick API checklist (coba di Postman)

Semua request `Content-Type: application/json`.

### User
- **Login**: `POST /api/users/login`
  ```json
  {
    "email": "user@mail.com",
    "password": "plaintextPassword"
  }
  ```
- **Register**: `POST /api/users`
  ```json
  {
    "Nama_Lengkap": "Nama User",
    "password": "plaintextPassword",
    "alamat": "Alamat user",
    "no_telp": 82123456789,
    "email": "user@mail.com",
    "id_role": 1
  }
  ```
  `id_role`: 1=user, 2=admin, 3=arsitek, 4=mandor, 5=ceo (lihat tabel role di DB Anda).

### Janji (buat janji konsultasi)
- **Create**: `POST /api/janji/buat`
  ```json
  {
    "keperluan": "Diskusi renovasi dapur",
    "id_user": 1
  }
  ```
- **List semua**: `GET /api/janji/all`
- **List per user**: `GET /api/janji/user/{id_user}`
- **Update status**: `PUT /api/janji/{id_janji}/status`
  ```json
  { "status": "Diterima" }
  ```

### Proyek
- **List**: `GET /api/projects`
- **Detail**: `GET /api/projects/{id}`
- **Create**: `POST /api/projects`
  ```json
  {
    "nama_proyek": "Renovasi Rumah Bi",
    "tgl_proyek": "2025-12-01",
    "status": "Proses",
    "id_user": 1,
    "id_mandor": 1,
    "id_arsitek": 1
  }
  ```

### Laporan & Desain
- **Laporan Mandor**: `GET /api/laporan-project` (lihat `api/laporanProject.ts` untuk pola detail/payload).
- **Desain**: `GET /api/laporan-design` (lihat `api/laporanDesign.ts`).
- **Revisi Renovasi**: endpoint mengikuti `revisi_renovasi` (tidak ada wrapper di FE; sesuaikan dengan backend Anda).

### Transaksi
- **List**: `GET /api/transaksi`
- **Create**: `POST /api/transaksi`
  ```json
  {
    "total_project": 75000000,
    "bayar": 25000000,
    "keterangan": "DP 33%",
    "status": "Nyicil",
    "id_user": 1,
    "id_proyek": 1
  }
  ```

### Notifikasi & History
- **Notifikasi**: `GET /api/notifikasi` (periksa implementasi backend untuk path detail).
- **History project**: `GET /api/history-project` (sesuaikan dengan backend).

> Jika ada 404/500, cek kembali IP/port dan tabel wajib di DB sesuai ERD. Pastikan service RenovaAPI jalan dan device/emulator dapat mengakses `http://192.168.1.3:5000`.
