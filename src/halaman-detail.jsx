import React, { useState } from 'react';

// Data proyek (dari file Anda)
const listProyek = [
  {
    id: 1,
    gambar: "/assets/proyek/proyek1.webp",
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
    gambardetail: "/assets/proyek/Guide-me1.png",
    linkgit: "https://github.com/RikardoAnju/Guide-Me-v2.git",
    dad: "200",
  },
  {
    id: 2,
    gambar: "/assets/proyek/proyek2.webp",
    nama: "Aplikasi Mobile",
    judul: "Aplikasi Mobile Microlearning",
    desk: "Microlearning adalah aplikasi mobile yang dirancang sebagai sistem pembelajaran untuk siswa Ulil Albab agar proses belajar menjadi lebih efektif dan efisien. Melalui aplikasi ini, siswa dapat berinteraksi langsung dengan guru dalam satu halaman materi pembelajaran.",
    tools: ["Flutter", "Dart", "Firebase"],
    gambardetail: "/assets/proyek/proyek2.webp",
    linkgit: "https://github.com/RikardoAnju/Microlearning.git",
    dad: "300",
  },
  {
    id: 3,
    gambar: "/assets/proyek/proyek3.webp",
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
    gambardetail: "/assets/proyek/proyek3.webp",
    dad: "400",
  },
];

// Komponen untuk menampilkan daftar proyek
const ProyekList = ({ onDetailClick }) => {
  return (
    <div className="grid gap-6 p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Daftar Proyek</h2>
      {listProyek.map((proyek) => (
        <div key={proyek.id} className="border rounded-lg p-4 shadow-md bg-white">
          <img 
            src={proyek.gambar} 
            alt={proyek.nama} 
            className="w-full h-48 object-cover rounded bg-gray-200" 
            onError={(e) => {
              e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23f3f4f6'/%3E%3Ctext x='200' y='100' text-anchor='middle' dy='.3em' fill='%23374151'%3EImage%3C/text%3E%3C/svg%3E";
            }}
          />
          <h3 className="text-xl font-bold mt-4">{proyek.judul}</h3>
          <p className="text-gray-600 mt-2">{proyek.desk}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {proyek.tools.map((tool, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                {tool}
              </span>
            ))}
          </div>
          <button 
            onClick={() => onDetailClick(proyek.id)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Lihat Detail
          </button>
        </div>
      ))}
    </div>
  );
};

// Komponen untuk halaman detail proyek dengan link GitHub
const ProyekDetail = ({ proyekId, onBack }) => {
  // Cari proyek berdasarkan ID
  const proyek = listProyek.find(p => p.id === proyekId);
  
  if (!proyek) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold text-red-600">Proyek tidak ditemukan</h2>
        <button 
          onClick={onBack}
          className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
        >
          Kembali
        </button>
      </div>
    );
  }

  const handleGitHubClick = () => {
    window.open(proyek.linkgit, '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img 
        src={proyek.gambardetail || proyek.gambar} 
        alt={proyek.nama} 
        className="w-full h-64 object-cover rounded-lg bg-gray-200" 
        onError={(e) => {
          e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='300' viewBox='0 0 800 300'%3E%3Crect width='800' height='300' fill='%23f3f4f6'/%3E%3Ctext x='400' y='150' text-anchor='middle' dy='.3em' fill='%23374151' font-size='20'%3EProject Image%3C/text%3E%3C/svg%3E";
        }}
      />
      
      <h1 className="text-3xl font-bold mt-6">{proyek.judul}</h1>
      <p className="text-gray-600 text-lg mt-4">{proyek.desk}</p>
      
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-3">Tools & Technologies:</h3>
        <div className="flex flex-wrap gap-3">
          {proyek.tools.map((tool, index) => (
            <span key={index} className="bg-green-100 text-green-800 px-3 py-2 rounded-lg">
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Tombol GitHub */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-3">Source Code:</h3>
        <button 
          onClick={handleGitHubClick}
          className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
          </svg>
          Lihat di GitHub
        </button>
      </div>
      
      <div className="flex gap-4 mt-8">
        <button 
          onClick={onBack}
          className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition-colors"
        >
          ← Kembali
        </button>
      </div>
    </div>
  );
};

// Komponen utama dengan state management
const App = () => {
  const [selectedProyek, setSelectedProyek] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  const handleLihatDetail = (id) => {
    setSelectedProyek(id);
    setShowDetail(true);
  };

  const handleKembali = () => {
    setShowDetail(false);
    setSelectedProyek(null);
  };

  if (showDetail && selectedProyek) {
    return (
      <ProyekDetail 
        proyekId={selectedProyek} 
        onBack={handleKembali} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ProyekList onDetailClick={handleLihatDetail} />
    </div>
  );
};

export default App;