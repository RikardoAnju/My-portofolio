import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <>
      {/* Navbar untuk Desktop - selalu terlihat */}
      <nav className="hidden md:block px-4 md:px-6">
        <div className="navbar py-4 md:py-7 flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo - hanya untuk desktop */}
          <div className="logo">
            <h1 className="text-2xl md:text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white">
              Portofolio
            </h1>
          </div>
          
          {/* Menu Desktop */}
          <ul className="menu flex items-center gap-6 md:gap-10">
            <li>
              <a 
                href="#home" 
                className="text-base md:text-lg font-medium pb-1 border-b-2 border-transparent hover:border-violet-500 transition duration-300 whitespace-nowrap text-white"
              >
                Beranda
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="text-base md:text-lg font-medium pb-1 border-b-2 border-transparent hover:border-violet-500 transition duration-300 whitespace-nowrap text-white"
              >
                Tentang
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className="text-base md:text-lg font-medium pb-1 border-b-2 border-transparent hover:border-violet-500 transition duration-300 whitespace-nowrap text-white"
              >
                Proyek
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="text-base md:text-lg font-medium pb-1 border-b-2 border-transparent hover:border-violet-500 transition duration-300 whitespace-nowrap text-white"
              >
                Kontak
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Navbar untuk Mobile - hanya muncul saat scroll */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 px-4">
        <ul
          className={`menu flex items-center gap-3 justify-center text-center
          max-w-[95%] w-full mx-auto
          bg-white/20 backdrop-blur-lg border border-white/10
          p-3 rounded-br-2xl rounded-bl-2xl
          transition-all duration-300 ease-in-out
          ${active ? "opacity-100 translate-y-0" : "-translate-y-full opacity-0"}`}
        >
          <li>
            <a 
              href="#home" 
              className="text-sm font-medium pb-1 border-b-2 border-transparent hover:border-violet-500 transition duration-300 whitespace-nowrap text-white"
            >
              Beranda
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className="text-sm font-medium pb-1 border-b-2 border-transparent hover:border-violet-500 transition duration-300 whitespace-nowrap text-white"
            >
              Tentang
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className="text-sm font-medium pb-1 border-b-2 border-transparent hover:border-violet-500 transition duration-300 whitespace-nowrap text-white"
            >
              Proyek
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="text-sm font-medium pb-1 border-b-2 border-transparent hover:border-violet-500 transition duration-300 whitespace-nowrap text-white"
            >
              Kontak
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;