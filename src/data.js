import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

//tools

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/firebase.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/postman.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/flutter.png";
import Tools10 from "/assets/tools/dart.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/vite.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Flutter",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "PostMan",
    ket: "API Testing Tool",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Firebase",
    ket: "Data Base",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Dart",
    ket: "Language",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Vite",
    ket: "Build tool frontend ",
    dad: "1200",
  },
];

//kontak
import listkontak1 from "/assets/kontak/ig.png";
import listkontak2 from "/assets/kontak/facebook.png";
import listkontak3 from "/assets/kontak/Wa.png";
export const listkontak = [
  {
    id: 1,
    gambar: listkontak1,
    nama: "Instagram",
    dad: "100",
    link: "https://www.instagram.com/njuu_92?igsh=MWNja3dodGw1YWliZQ==",
  },
  {
    id: 2,
    gambar: listkontak2,
    nama: "Facebook",
    dad: "200",
    link: "https://www.facebook.com/share/1fP3iiZvwe/",
  },
  {
    id: 3,
    gambar: listkontak3,
    nama: "Whatsapp",
    dad: "300",
    link: "https://wa.me/6287742124885",
  },
];

//proyek
import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";
// Tambahkan import gambar detail untuk proyek 2 dan 3



export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Aplikasi Mobile",
    judul: "Aplikasi Mobile Guide-Me",
    desk: "Guide-Me adalah aplikasi mobile yang dirancang untuk menjadi panduan utama Anda menjelajahi Kota Batam. Aplikasi ini menyediakan informasi lengkap seputar destinasi wisata dan event lokal yang sedang berlangsung di Batam",
    tools: [
      "Flutter",
      "Dart",
      "Firebase",
      "Maliersend",
      "Ngrok",
      "Node.js",
      "Midtrans",
    ],
    gambardetail: [
      "/assets/proyek/Guide-me1.webp",
      "/assets/proyek/Guide-me2.webp",
      "/assets/proyek/Guide-me3.webp",
      "/assets/proyek/Guide-me4.webp",
      "/assets/proyek/Guide-me5.webp",
    ],
    linkgit: "https://github.com/RikardoAnju/Guide-Me-v2.git",
    dad: "200",
  },

  {
    id: 2,
    gambar: Proyek2,
    nama: "Aplikasi Mobile",
    judul: "Aplikasi Mobile Microlearning",
    desk: "Microlearning adalah aplikasi mobile yang dirancang sebagai sistem pembelajaran untuk siswa Ulil Albab agar proses belajar menjadi lebih efektif dan efisien. Melalui aplikasi ini, siswa dapat berinteraksi langsung dengan guru dalam satu halaman materi pembelajaran.",
    tools: ["Flutter", "Dart", "Firebase"],
    gambardetail: [
      "/assets/proyek/micro1.webp",
      "/assets/proyek/micro2.webp", 
      "/assets/proyek/micro3.webp",
      "/assets/proyek/micro4.webp",
      "/assets/proyek/micro5.webp",
    ], // Tambahkan ini
    linkgit: "https://github.com/RikardoAnju/Microlearning.git",
    dad: "300",
  },

  {
    id: 3,
    gambar: Proyek3,
    nama: "Ecommers-Skincare",
    judul: "Aplikasi Web Ecommers-Skincare",
    linkgit: "https://github.com/RikardoAnju/Glowink-v.git",
    desk: "Sebuah aplikasi platform khusus yang dirancang dan dikembangkan untuk memfasilitasi aktivitas jual beli produk skincare secara mudah, aman, dan terpercaya",
    tools: [
      "Laravel",
      "TailwindCSS",
      "JWTOKEN",
      "Raja Ongkir",
      "Midtrans",
      "Msql",
    ],
    gambardetail: [
      "/assets/proyek/ecom1.webp",
      "/assets/proyek/ecom2.webp",
      "/assets/proyek/ecom3.webp", 
      "/assets/proyek/ecom4.webp",
      "/assets/proyek/ecom5.webp",
    ],
  
    dad: "400",
  },
];
