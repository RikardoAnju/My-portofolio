import TextType from "./TextType";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { listProyek, listTools, listkontak } from "./data";

const App = () => {
  // State untuk mengatur halaman detail
  const [selectedProyek, setSelectedProyek] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 120,
      easing: "ease-out-cubic",
      mirror: true,
      disable: "mobile",
    });

    AOS.refresh();
  }, []);

  // Fungsi untuk menangani klik tombol "Lihat Detail"
  const handleLihatDetail = (id) => {
    const proyek = listProyek.find(p => p.id === id);
    setSelectedProyek(proyek);
    setShowDetail(true);
  };

  // Fungsi untuk kembali ke halaman utama
  const handleKembali = () => {
    setShowDetail(false);
    setSelectedProyek(null);
  };

  // Fungsi untuk mencegah propagasi event pada gambar
  const handleImageClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Tidak melakukan apa-apa, hanya mencegah navigasi
  };

  // Jika sedang menampilkan detail proyek
  if (showDetail && selectedProyek) {
    return (
      <div className="min-h-screen bg-zinc-900 text-white">
        <div className="p-6">
          <div className="max-w-4xl mx-auto">
            <button 
              onClick={handleKembali}
              className="mb-6 bg-zinc-700 p-3 rounded-lg hover:bg-zinc-600 transition-colors duration-300"
              data-aos="fade-down"
              data-aos-duration="800"
            >
              <i className="ri-arrow-left-line mr-2"></i>
              Kembali
            </button>
            
            <div 
              className="w-full mb-6"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <img 
                src={selectedProyek.gambar} 
                alt={selectedProyek.nama} 
                className="w-full h-auto max-h-96 object-contain rounded-lg cursor-default select-none" 
                onClick={handleImageClick}
                onContextMenu={handleImageClick}
                draggable="false"
              />
            </div>
            
            <h1 
              className="text-4xl font-bold mb-4"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              {selectedProyek.judul}
            </h1>
            <p 
              className="text-lg mb-6 opacity-75"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              {selectedProyek.desk || "Deskripsi proyek tidak tersedia."}
            </p>
            
            <div 
              className="mb-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <h3 className="text-2xl font-semibold mb-4">Tools & Technologies:</h3>
              <div className="flex flex-wrap gap-3">
                {selectedProyek.tools.map((tool, index) => (
                  <span 
                    key={index} 
                    className="py-2 px-4 border border-zinc-500 bg-zinc-700 rounded-md font-semibold"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay={600 + (index * 100)}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Halaman utama
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Main content */}
      <div className="p-6">
        <style jsx>{`
          @keyframes blink {
            0%,
            50% {
              opacity: 1;
            }
            51%,
            100% {
              opacity: 0;
            }
          }
        `}</style>

        {/* Hero Section */}
        <div
          className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1"
          id="home"
        >
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <div
              className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl"
              data-aos="zoom-in-right"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <div className="w-10 h-10 bg-violet-600 rounded-md overflow-hidden flex items-center justify-center">
                <img
                  src="/assets/hero-img.webp"
                  alt="Rikardo Profile"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <q>Hallo semuanya.😁</q>
            </div>

            <div
              className="mb-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <TextType
                text={[
                  "Hi, Saya Rikardo anju sinaga",
                  "Web Developer",
                  "Mobile App Developer",
                ]}
                as="h1"
                className="text-5xl font-bold mb-6 leading-tight"
                typingSpeed={80}
                deletingSpeed={50}
                pauseDuration={3000}
                initialDelay={500}
                loop={true}
                showCursor={true}
                cursorCharacter="|"
                cursorClassName="text-violet-500"
                textColors={["#ffffff", "#a855f7", "#06b6d4", "#10b981"]}
                startOnVisible={true}
              />
            </div>

            <p
              className="text-base leading-relaxed mb-6 opacity-50"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              Saya adalah mahasiswa Politeknik Negeri Batam yang memiliki
              ketertarikan besar di bidang pemrograman, terutama dalam
              pengembangan website dan aplikasi mobile. Selain fokus pada aspek
              teknis pemrograman, saya juga memiliki kemampuan dalam desain
              UI/UX. Hal ini memungkinkan saya untuk tidak hanya membangun
              aplikasi yang berfungsi dengan baik, tetapi juga memiliki tampilan
              yang menarik dan pengalaman pengguna yang optimal. Saya percaya
              bahwa kombinasi antara logika pemrograman dan estetika desain
              merupakan kunci dalam menciptakan solusi digital yang berkualitas
              dan bernilai guna tinggi.
            </p>

            <div
              className="flex items-center sm:gap-4 gap-2"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="800"
            >
              <a
                href="https://drive.google.com/file/d/1MKBq3_ncSvzCGGlhFHzEGfwSLD-FS61u/view?usp=sharing"
                className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600 transition-colors duration-300"
                data-aos="bounce"
                data-aos-duration="800"
                data-aos-delay="1000"
              >
                Download CV <i className="ri-download-line"></i>
              </a>
              <a
                href="#proyek"
                className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600 transition-colors duration-300"
                data-aos="bounce"
                data-aos-duration="800"
                data-aos-delay="1100"
              >
                Lihat Proyek <i className="ri-arrow-down-line"></i>
              </a>
            </div>
          </div>

          <div
            className="w-[500px] h-[550px] md:ml-auto rounded-2xl overflow-hidden relative"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <img
              src="/assets/hero-img.webp"
              alt="Rikardo Anju Sinaga Profile"
              className="w-full h-full object-cover"
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-delay="500"
              loading="lazy"
            />
          </div>
        </div>

        {/* About Section */}
        <div className="tentang mt-32 py-10" id="about">
          <div
            className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <div
              className="w-12 h-12 bg-violet-600 rounded-md mb-10 sm:hidden flex items-center justify-center text-white font-bold"
              data-aos="flip-left"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <img
                src="/assets/hero-img.webp"
                alt="Rikardo Profile"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <p
              className="text-base leading-relaxed mb-10"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              "Saya adalah mahasiswa Politeknik Negeri Batam yang memiliki
              ketertarikan besar di bidang pemrograman, terutama dalam
              pengembangan website dan aplikasi mobile. Selain fokus pada aspek
              teknis pemrograman, saya juga memiliki kemampuan dalam desain
              UI/UX. Hal ini memungkinkan saya untuk tidak hanya membangun
              aplikasi yang berfungsi dengan baik, tetapi juga memiliki tampilan
              yang menarik dan pengalaman pengguna yang optimal. Saya percaya
              bahwa kombinasi antara logika pemrograman dan estetika desain
              merupakan kunci dalam menciptakan solusi digital yang berkualitas
              dan bernilai guna tinggi."
            </p>

            <div className="flex items-center justify-between">
              <div
                className="w-12 h-12 bg-violet-600 rounded-md sm:flex hidden items-center justify-center text-white font-bold"
                data-aos="flip-right"
                data-aos-duration="800"
                data-aos-delay="600"
              >
                <img
                  src="/assets/hero-img.webp"
                  alt="Rikardo Profile"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div
                className="flex items-center gap-6"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="700"
              >
                <div 
                  data-aos="slide-up" 
                  data-aos-delay="800"
                  data-aos-duration="800"
                >
                  <h1 className="text-4xl mb-1">
                    45 <span className="text-violet-500">+</span>
                  </h1>
                  <p>Proyek Selesai</p>
                </div>
                <div 
                  data-aos="slide-up" 
                  data-aos-delay="900"
                  data-aos-duration="800"
                >
                  <h1 className="text-4xl mb-1">
                    4 <span className="text-violet-500">+</span>
                  </h1>
                  <p>Tahun Pengalaman</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="tools mt-32">
          <div
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <h1 className="text-4xl/snug font-bold mb-4">
              Tools yang saya gunakan
            </h1>
            <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50">
              Berikut ini beberapa tools yang saya biasa saya gunakan
            </p>
          </div>
          
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool, index) => (
              <div
                className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 transition-colors duration-300"
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={200 + (index * 100)}
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="proyek mt-32 py-10" id="proyek">
          <div
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <h1 className="text-center text-4xl font-bold mb-2">Proyek</h1>
            <p className="text-base/loose text-center opacity-50">
              Berikut ini beberapa proyek yang telah saya buat
            </p>
          </div>
          
          <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listProyek.map((proyek, index) => (
              <div 
                key={proyek.id} 
                className="bg-zinc-800 rounded-md overflow-hidden flex flex-col"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={200 + (index * 150)}
              >
                <div className="relative">
                  <img 
                    src={proyek.gambar} 
                    alt="Proyek Image" 
                    className="w-full h-auto object-contain cursor-default select-none"
                    loading="lazy" 
                    style={{ maxHeight: 'none' }}
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-delay={300 + (index * 150)}
                    onClick={handleImageClick}
                    onContextMenu={handleImageClick}
                    draggable="false"
                  />
                </div>
                <div className="p-4 flex-grow flex flex-col">
                  <h1 
                    className="text-2xl font-bold my-4"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay={400 + (index * 150)}
                  >
                    {proyek.nama}
                  </h1>
                 
                  <div 
                    className="flex flex-wrap gap-2 mb-6"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay={500 + (index * 150)}
                  >
                    {proyek.tools.map((tool, toolIndex) => (
                      <p
                        className="py-1 px-3 border border-zinc-500 bg-zinc-700 rounded-md font-semibold text-sm"
                        key={toolIndex}
                        data-aos="fade-left"
                        data-aos-duration="400"
                        data-aos-delay={600 + (index * 150) + (toolIndex * 50)}
                      >
                        {tool}
                      </p>
                    ))}
                  </div>
                  <div 
                    className="text-center mt-auto"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay={700 + (index * 150)}
                  >
                    <button
                      onClick={() => handleLihatDetail(proyek.id)}
                      className="bg-violet-700 p-3 rounded-lg border border-zinc-600 hover:bg-violet-600 transition-colors duration-300 w-full"
                    >
                      Lihat Detail
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="kontak mt-32 p-10">
          <div
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <h1 className="text-4xl mb-2 font-bold text-center">Kontak</h1>
            <p className="text-base/loose text-center mb-10 opacity-50">
              Mari terhubung dengan saya.
            </p>
          </div>
          
          <div 
            className="w-full flex justify-center mt-10"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-fit">
              {listkontak.map((kontak, index) => (
                <a
                  href={kontak.link}
                  key={kontak.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 transition"
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-delay={300 + (index * 100)}
                >
                  <img
                    src={kontak.gambar}
                    alt={`Logo ${kontak.nama}`}
                    className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-bold">{kontak.nama}</h4>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;