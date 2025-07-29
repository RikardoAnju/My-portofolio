import TextType from "./TextType";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { listProyek, listTools, listkontak } from "./data";
import WelcomeScreen from "./components/WelcomeScreen";

const App = () => {
  // State untuk mengatur halaman detail
  const [selectedProyek, setSelectedProyek] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

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

    // Tambahkan ini untuk menyembunyikan welcome screen setelah 3 detik
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // Fungsi untuk menangani klik tombol "Lihat Detail"
  const handleLihatDetail = (id) => {
    const proyek = listProyek.find((p) => p.id === id);
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

  // Tampilkan welcome screen terlebih dahulu
  if (showWelcome) {
    return <WelcomeScreen />;
  }

  // Jika sedang menampilkan detail proyek
  if (showDetail && selectedProyek) {
    return (
      <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 text-white scrollbar-hide">
        <div className="w-full max-w-full px-4 sm:px-6">
          <style jsx>{`
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            html,
            body {
              overflow-x: hidden;
            }
          `}</style>
          <div className="max-w-4xl mx-auto py-8">
            {/* Back Button */}
            <button
              onClick={handleKembali}
              className="mb-6 p-3 rounded-lg relative overflow-hidden text-white transition-colors duration-300 group bg-zinc-700 hover:shadow-lg"
              data-aos="fade-down"
              data-aos-duration="800"
            >
              <span className="relative z-10 flex items-center">
                <i className="ri-arrow-left-line mr-2"></i>
                Kembali
              </span>
              <span className="absolute inset-0 bg-violet-600 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </button>

            {/* Project Images Gallery */}
            {selectedProyek.gambardetail &&
            selectedProyek.gambardetail.length > 0 ? (
              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                  Project Screenshots:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedProyek?.gambardetail?.map((gambar, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-lg bg-zinc-800 border border-zinc-700 hover:border-violet-500 transition-all duration-300 hover:shadow-xl"
                      data-aos="zoom-in"
                      data-aos-duration="800"
                      data-aos-delay={200 + index * 100}
                    >
                      <div className="aspect-video overflow-hidden relative">
                        <img
                          src={gambar} // ✅ Benar - menggunakan item individual
                          alt={`${selectedProyek.judul} - Screenshot ${
                            index + 1
                          }`}
                          className="w-full h-full object-cover cursor-pointer select-none transition-transform duration-300 group-hover:scale-105"
                          onClick={() => handleImageClick(gambar)} // ✅ Perbaikan: gambar bukan gambardetail
                          onContextMenu={(e) => {
                            e.preventDefault();
                            handleImageClick(gambar); // ✅ Perbaikan: gambar bukan gambardetail
                          }}
                          draggable="false"
                          onError={(e) => {
                            console.error(`Failed to load image: ${gambar}`); // ✅ Perbaikan: gambar bukan gambardetail
                            // Show error placeholder
                            e.target.style.display = "none";
                            const placeholder = e.target.nextElementSibling;
                            if (placeholder) placeholder.style.display = "flex";
                          }}
                          onLoad={() => {
                            console.log(`Successfully loaded: ${gambar}`); // ✅ Perbaikan: gambar bukan gambardetail
                          }}
                        />
                        {/* Error Placeholder */}
                        <div
                          className="absolute inset-0 bg-zinc-700 flex items-center justify-center text-gray-400"
                          style={{ display: "none" }}
                        >
                          <div className="text-center">
                            <i className="ri-image-line text-4xl mb-2"></i>
                            <p className="text-sm">Image not found</p>
                            <p className="text-xs mt-1">{gambar}</p>
                          </div>
                        </div>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <i className="ri-zoom-in-line text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                      </div>

                      {/* Image Counter */}
                      <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                        {index + 1}/{selectedProyek?.gambardetail?.length || 0}
                      </div>

                      {/* Project Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white text-xs font-medium">
                          {selectedProyek.nama}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              // Fallback untuk proyek tanpa gambardetail
              <div
                className="w-full mb-6"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <div className="aspect-video overflow-hidden rounded-lg bg-zinc-800 border border-zinc-700 hover:border-violet-500 transition-all duration-300">
                  <img
                    src={selectedProyek.gambardetail}
                    alt={selectedProyek.judul}
                    className="w-full h-full object-cover cursor-default select-none transition-transform duration-300 hover:scale-105"
                    onClick={handleImageClick}
                    onContextMenu={(e) => {
                      e.preventDefault();
                      handleImageClick();
                    }}
                    draggable="false"
                  />
                </div>
                <p className="text-center text-sm text-gray-400 mt-2">
                  Main project image
                </p>
              </div>
            )}

            {/* Project Title */}
            <h1
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 break-words bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              {selectedProyek.judul}
            </h1>

            {/* Project Description */}
            <p
              className="text-base sm:text-lg mb-6 opacity-75 break-words leading-relaxed"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              {selectedProyek.desk || "Deskripsi proyek tidak tersedia."}
            </p>

            {/* Tools & Technologies */}
            <div
              className="mb-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                <i className="ri-tools-line mr-2 text-violet-400"></i>
                Tools & Technologies:
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {selectedProyek.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="group relative overflow-hidden py-2 px-3 sm:px-4 border border-zinc-500 bg-zinc-700 rounded-md font-semibold text-sm sm:text-base text-white transition-all duration-300 break-words hover:shadow-lg"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay={600 + index * 100}
                  >
                    <span className="relative z-10">{tool}</span>
                    <span className="absolute inset-0 bg-violet-600 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                  </span>
                ))}
              </div>
            </div>

            {/* GitHub Link */}
            {selectedProyek.linkgit && (
              <div
                className="mb-6"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="700"
              >
                <a
                  href={selectedProyek.linkgit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-zinc-700 hover:bg-violet-600 border border-zinc-500 hover:border-violet-500 rounded-lg transition-all duration-300 group hover:shadow-lg hover:scale-105"
                >
                  <i className="ri-github-fill mr-2 text-xl"></i>
                  <span className="font-semibold">View on GitHub</span>
                  <i className="ri-external-link-line ml-2 text-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></i>
                </a>
              </div>
            )}

            {/* Additional Project Info */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="800"
            >
              {/* Project Type */}
              <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
                <h4 className="font-semibold text-violet-400 mb-2 flex items-center">
                  <i className="ri-folder-line mr-2"></i>
                  Project Type
                </h4>
                <p className="text-gray-300">{selectedProyek.nama}</p>
              </div>

              {/* Tech Stack Count */}
              <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
                <h4 className="font-semibold text-violet-400 mb-2 flex items-center">
                  <i className="ri-stack-line mr-2"></i>
                  Technologies Used
                </h4>
                <p className="text-gray-300">
                  {selectedProyek.tools.length} Technologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  // Halaman utama - Main Portfolio Page
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-zinc-900 text-white scrollbar-hide">
      <div className="w-full max-w-full px-4 sm:px-6">
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

          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }

          html,
          body {
            overflow-x: hidden;
          }
        `}</style>

        {/* Hero Section */}
        <div
          className="hero grid md:grid-cols-2 items-center pt-10 gap-6 grid-cols-1 max-w-7xl mx-auto"
          id="home"
        >
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="w-full"
          >
            <div
              className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl max-w-full"
              data-aos="zoom-in-right"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <div className="w-10 h-10 bg-violet-600 rounded-md overflow-hidden flex items-center justify-center flex-shrink-0">
                <img
                  src="/assets/Icon-removebg-preview.png"
                  alt="Rikardo Profile"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <q className="text-sm sm:text-base break-words">
                Hallo semuanya.😁
              </q>
            </div>

            <div
              className="mb-6 w-full"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <TextType
                text={[
                  "Hai, Saya Rikardo anju sinaga",
                  "Web Developer",
                  "Mobile App Developer",
                ]}
                as="h1"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight break-words"
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
              className="text-sm sm:text-base leading-relaxed mb-6 opacity-50 break-words"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              "Menggabungkan kreativitas frontend dengan kekuatan backend untuk
              menghadirkan aplikasi yang berdaya guna."
            </p>

            <div
              className="flex items-center gap-2 sm:gap-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="800"
            >
              <a
                href="https://drive.google.com/file/d/1MKBq3_ncSvzCGGlhFHzEGfwSLD-FS61u/view?usp=sharing"
                className="bg-violet-700 p-3 sm:p-4 rounded-2xl hover:bg-violet-600 transition-colors duration-300 text-sm sm:text-base break-words"
                data-aos="bounce"
                data-aos-duration="800"
                data-aos-delay="1000"
              >
                Download CV <i className="ri-download-line"></i>
              </a>
            </div>
          </div>

          <div
            className="w-full max-w-[500px] h-[400px] sm:h-[550px] md:ml-auto rounded-2xl overflow-hidden relative mx-auto"
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
            className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-4 sm:p-7 bg-zinc-800 rounded-lg"
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
              className="text-sm sm:text-base leading-relaxed mb-10 break-words"
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
                  src="/assets/Icon-removebg-preview.png"
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
                  <h1 className="text-3xl sm:text-4xl mb-1">
                    3 <span className="text-violet-500">+</span>
                  </h1>
                  <p className="text-sm sm:text-base">Proyek Selesai</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="tools mt-32 max-w-7xl mx-auto">
          <div
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 break-words">
              Tools yang saya gunakan
            </h1>
            <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-sm sm:text-base leading-loose opacity-50 break-words">
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
                data-aos-delay={200 + index * 100}
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-12 sm:w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900 flex-shrink-0"
                  loading="lazy"
                />
                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-sm sm:text-base break-words">
                    {tool.nama}
                  </h4>
                  <p className="opacity-50 text-xs sm:text-sm break-words">
                    {tool.ket}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="proyek mt-32 py-10 max-w-7xl mx-auto" id="proyek">
          <div
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <h1 className="text-center text-3xl sm:text-4xl font-bold mb-2">
              Proyek
            </h1>
            <p className="text-sm sm:text-base leading-loose text-center opacity-50">
              Berikut ini beberapa proyek yang telah saya buat
            </p>
          </div>

          <div className="proyek-box mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {listProyek.map((proyek, index) => (
              <div
                key={proyek.id}
                className="bg-zinc-800 rounded-md overflow-hidden flex flex-col"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={200 + index * 150}
              >
                <div className="relative">
                  <img
                    src={proyek.gambar}
                    alt="Proyek Image"
                    className="w-full h-auto object-contain cursor-default select-none"
                    loading="lazy"
                    style={{ maxHeight: "none" }}
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-delay={300 + index * 150}
                    onClick={handleImageClick}
                    onContextMenu={handleImageClick}
                    draggable="false"
                  />
                </div>
                <div className="p-4 flex-grow flex flex-col">
                  <h1
                    className="text-xl sm:text-2xl font-bold my-4 break-words"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay={400 + index * 150}
                  >
                    {proyek.nama}
                  </h1>

                  <div
                    className="flex flex-wrap gap-2 mb-6"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay={500 + index * 150}
                  >
                    {proyek.tools.map((tool, toolIndex) => (
                      <p
                        className="group relative overflow-hidden py-1 px-2 sm:px-3 border border-zinc-500 bg-zinc-700 rounded-md font-semibold text-xs sm:text-sm break-words text-white"
                        key={toolIndex}
                        data-aos="fade-left"
                        data-aos-duration="400"
                        data-aos-delay={600 + index * 150 + toolIndex * 50}
                      >
                        {/* Text di atas layer animasi */}
                        <span className="relative z-10">{tool}</span>

                        {/* Layer animasi background */}
                        <span className="absolute inset-0 bg-violet-600 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                      </p>
                    ))}
                  </div>
                  <div
                    className="text-center mt-auto"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay={700 + index * 150}
                  >
                    <button
                      onClick={() => handleLihatDetail(proyek.id)}
                      className="group relative overflow-hidden p-3 rounded-lg border border-zinc-600 bg-violet-700 w-full text-sm sm:text-base text-white"
                    >
                      {/* Text di atas background animasi */}
                      <span className="relative z-10">Lihat Detail</span>

                      {/* Layer animasi hover */}
                      <span className="absolute inset-0 bg-violet-600 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="kontak mt-32 p-4 sm:p-10 max-w-7xl mx-auto">
          <div
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <h1 className="text-3xl sm:text-4xl mb-2 font-bold text-center">
              Kontak
            </h1>
            <p className="text-sm sm:text-base leading-loose text-center mb-10 opacity-50">
              Mari terhubung dengan saya.
            </p>
          </div>

          <div
            className="w-full flex justify-center mt-10"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
              {listkontak.map((kontak, index) => (
                <a
                  href={kontak.link}
                  key={kontak.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 transition"
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-delay={300 + index * 100}
                >
                  <img
                    src={kontak.gambar}
                    alt={`Logo ${kontak.nama}`}
                    className="w-12 sm:w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900 flex-shrink-0"
                    loading="lazy"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-sm sm:text-base break-words">
                      {kontak.nama}
                    </h4>
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
