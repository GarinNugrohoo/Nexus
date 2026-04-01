import { FaGithub, FaInstagram } from "react-icons/fa";
import { MdGavel } from "react-icons/md";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-black/50 backdrop-blur-sm border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-white mb-2">
              Digital
              <span className="text-purple-500">Well-Being</span>
            </h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              Analisis Hubungan Akses Gawai Dengan Kesehatan Remaja
            </p>
            <div className="flex justify-center md:justify-start gap-3 mt-3">
              <a
                href="https://github.com/GarinNugrohoo"
                className="text-gray-400 hover:text-cyan-400"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://instagram.com/garinnugroho44?igsh=aTMwYW5tZ3c1ZWUx"
                className="text-gray-400 hover:text-cyan-400"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          <div className="text-center">
            <h4 className="text-white font-semibold text-sm mb-3 flex items-center justify-center gap-2">
              <MdGavel /> Information
            </h4>
            <ul className="space-y-2">
              <li>
                <p className="text-gray-400 hover:text-cyan-400 text-xs">
                  Dibuat Oleh
                </p>
              </li>
              <li>
                <p className="text-gray-400 hover:text-cyan-400 text-xs">
                  Garin Nugroho
                </p>
              </li>
            </ul>
          </div>
          <div className="text-gray-400 font-semibold text-sm mb-3 flex items-center justify-center gap-2 ">
            <p>Tahun: </p>
            <span>{currentYear}</span>{" "}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
