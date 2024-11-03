# QuickCare

One Stop Solution untuk Akses Kesehatan Lebih Mudah dengan Rujukan Online dan Pengelolaan Obat yang Efisien

## Product Description

QuickCare adalah solusi kesehatan digital yang mempermudah proses rujukan online dan manajemen obat secara terintegrasi, sehingga pasien dan keluarga dapat mengakses layanan kesehatan dengan cepat dan efektif.

## Features

### 1. Rujukan Online

**Fitur Rujukan Online memungkinkan pasien untuk mengajukan dan memperpanjang rujukan secara digital**

Fitur ini memungkinkan pasien untuk melakukan rujukan secara online dengan mengirimkan video dan keterangan langsung kepada puskesmas, yang dapat berkoordinasi dengan rumah sakit. Pasien juga dapat memperpanjang rujukan secara otomatis melalui integrasi dengan rekam medis, sehingga proses rujukan menjadi lebih cepat dan efisien.

### 2. Manajemen Obat

**Fitur manajemen obat untuk mengelola informasi obat dan memudahkan pengingat konsumsi obat secara digital**

Fitur ini terintegrasi dengan rekam medis dan memungkinkan keluarga untuk memantau jadwal konsumsi obat pasien. Sistem akan mencatat inventaris obat, memberi pengingat otomatis sesuai jadwal, dan memungkinkan pasien untuk mengaktifkan atau menonaktifkan obat yang dikonsumsi, membantu memastikan kepatuhan dan kontrol yang lebih baik terhadap pengobatan.

## Team PIJAR

* Michael Sihotang - Institut Teknologi Bandung
* Erensi Ratu Chelsia - Institut Teknologi Bandung
* Abraham Megantoro Samudra - Institut Teknologi Bandung

## Getting Started

### Prerequisites

* Node.js (versi 14 atau lebih baru)
* Expo CLI
* Expo Go (untuk emulator dari handphone)
* Android Studio (untuk emulator Android)
* Xcode (untuk emulator iOS, hanya di macOS)
* Git

### Installation & Running the App

1. Clone repository
```bash
git clone https://github.com/abrahammegantoro/quickcare-bpjs-fe
cd quickcare-bpjs-fe
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npx expo start
```

4. Running on different platforms:
* Press `a` - untuk menjalankan pada Android emulator
* Press `i` - untuk menjalankan pada iOS simulator
* Scan QR code dengan Expo Go app pada perangkat mobile untuk menjalankan pada perangkat fisik

## Project Structure

```
.
├── README.md
├── app
│   ├── (auth)
│   │   ├── _layout.tsx
│   │   ├── login
│   │   │   └── index.tsx
│   │   └── register
│   │       └── index.tsx
│   ├── (plain)
│   │   ├── obat
│   │   │   ├── keluarga
│   │   │   │   ├── [id]
│   │   │   │   │   └── index.tsx
│   │   │   │   └── index.tsx
│   │   │   └── list
│   │   │       ├── [id]
│   │   │       │   └── index.tsx
│   │   │       ├── add
│   │   │       │   └── index.tsx
│   │   │       └── index.tsx
│   │   ├── pemberitahuan
│   │   │   └── index.tsx
│   │   └── rujukan
│   │       ├── pengajuan
│   │       │   └── index.tsx
│   │       └── perpanjangan
│   │           └── index.tsx
│   ├── (tabs)
│   │   ├── _layout.tsx
│   │   ├── index.tsx
│   │   ├── obat
│   │   │   └── index.tsx
│   │   ├── profile
│   │   │   └── index.tsx
│   │   ├── riwayat
│   │   │   └── index.tsx
│   │   └── rujukan
│   │       └── index.tsx
│   ├── +html.tsx
│   ├── +not-found.tsx
│   └── _layout.tsx
├── app.json
├── assets
│   ├── fonts
│   │   ├── AbrilFatface-Regular.ttf
│   │   ├── Inter-Regular.ttf
│   │   ├── Manrope-Regular.ttf
│   │   ├── Poppins-Bold.ttf
│   │   ├── Poppins-Regular.ttf
│   │   └── SpaceMono-Regular.ttf
│   ├── icon.png
│   └── images
│       ├── adaptive-icon.png
│       ├── background-detail.png
│       ├── background.png
│       ├── favicon.png
│       ├── logo.png
│       └── splash.png
├── babel.config.js
├── components
│   ├── Collapsible.tsx
│   ├── ExternalLink.tsx
│   ├── HelloWave.tsx
│   ├── InfoBox.tsx
│   ├── JadwalKunjungan.tsx
│   ├── JadwalObat.tsx
│   ├── ParallaxScrollView.tsx
│   ├── PemberitahuanBox.tsx
│   ├── RiwayatBox.tsx
│   ├── ThemedText.tsx
│   ├── ThemedView.tsx
│   └── navigation
│       └── TabBarIcon.tsx
├── constants
│   └── Colors.ts
├── eas.json
├── expo-env.d.ts
├── global.css
├── hooks
│   ├── useColorScheme.ts
│   ├── useColorScheme.web.ts
│   └── useThemeColor.ts
├── metro.config.js
├── nativewind-env.d.ts
├── package-lock.json
├── package.json
├── scripts
│   └── reset-project.js
├── tailwind.config.js
└── tsconfig.json
```

## Deployment

[**Android**](https://expo.dev/accounts/abrahamsamudra/projects/quickcare-bpjs-fe/builds/5f34a6ab-dfad-4871-aca2-ad9af7755177)

## Related Repositories

[**Backend Repository**](https://github.com/abrahammegantoro/quickcare-bpjs-be)