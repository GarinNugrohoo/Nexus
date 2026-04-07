import { FaExternalLinkAlt, FaUniversity } from "react-icons/fa";
import { motion } from "framer-motion";
import TitleText from "../ui/TitleText";
import { forwardRef } from "react";

const links = [
  {
    title: "Badan Pusat Statistik",
    desc: "Data penggunaan internet di ibukota (2022)",
    url: "https://jakarta.bps.go.id/id/statistics-table/2/MTI4OCMy/persentase-penduduk-yang-menggunakan-internet-melalui-media-hp-ponsel-menurut-jenis-kelamin-dan-kabupaten-kota-di-dki-jakarta.html",
    icon: <FaUniversity className="text-emerald-400 text-base lg:text-lg" />,
    label: "Official",
  },
  {
    title: "Badan Pusat Statistik",
    desc: "Data kepemilikan gawai (2024)",
    url: "https://www.bps.go.id/id/publication/2025/08/29/beaa2be400eda6ce6c636ef8/statistik-telekomunikasi-indonesia-2024.html",
    icon: <FaUniversity className="text-emerald-400 text-base lg:text-lg" />,
    label: "Official",
  },
  {
    title: "Badan Pusat Statistik",
    desc: "Data penggunaan gawai kota vs desa (2024)",
    url: "https://www.bps.go.id/id/statistics-table/2/Mzk1IzI=/persentase-penduduk-yang-memiliki-menguasai-telepon-seluler-menurut-provinsi-dan-klasifikasi-daerah.html",
    icon: <FaUniversity className="text-emerald-400 text-base lg:text-lg" />,
    label: "Official",
  },
  {
    title: "Badan Pusat Statistik",
    desc: "Data total anak range umur 10-19 tahun (2026)",
    url: "https://www.bps.go.id/id/statistics-table/3/WVc0%20MGEyMXBkVFUxY25KeE9HdDZkbTQzWkVkb1p6MDkjMw==/jumlah-penduduk-menurut-kelompok-umur-dan-jenis-kelamin--2023.html?year=2026",
    icon: <FaUniversity className="text-emerald-400 text-base lg:text-lg" />,
    label: "Official",
  },
  {
    title: "Kemenkes RI (Data Pendukung)",
    desc: "Data riset penggunaan medsos berlebih dapat meningkatkan risiko depresi & beberapa tips kesehatan (2024)",
    url: "https://keslan.kemkes.go.id/view_artikel/3549/kesehatan-mental-anak-di-era-digital",
    icon: <FaUniversity className="text-emerald-400 text-base lg:text-lg" />,
    label: "Official",
  },
  {
    title: "Kemenkes RI (Data Pendukung)",
    desc: "Data tips menjaga kesehatan mata dari gawai (2022)",
    url: "https://keslan.kemkes.go.id/view_artikel/1333/bagaimana-menjaga-kesehatan-mata-dari-gawai",
    icon: <FaUniversity className="text-emerald-400 text-base lg:text-lg" />,
    label: "Official",
  },
  {
    title: "Kemenkes RI (Data Pendukung)",
    desc: "Sumber bacaan kesehatan sebagai pendukung dampak penggunaan gawai berlebih",
    url: "https://keslan.kemkes.go.id/view_artikel/970/bahaya-penggunaan-gadget-pada-era-revolusi-industri-40",
    icon: <FaUniversity className="text-emerald-400 text-base lg:text-lg" />,
    label: "Official",
  },
];

const ResearchLinks = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section className="w-full" ref={ref}>
      <TitleText name="Source Poster" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 w-full">
        {links.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="group relative flex items-center justify-between p-4 lg:p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-linear-to-r from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-purple-500/5 blur-xl"></div>
            </div>

            <div className="flex items-center gap-4 z-10 relative">
              <div className="p-2.5 lg:p-3 bg-black/40 rounded-xl group-hover:bg-purple-500/20 group-hover:scale-110 transition-all duration-300">
                {link.icon}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="text-white font-bold text-sm lg:text-base group-hover:text-purple-300 transition-colors">
                    {link.title}
                  </h4>
                  <span className="text-[9px] lg:text-[10px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 uppercase font-mono">
                    {link.label}
                  </span>
                </div>
                <p className="text-gray-400 text-xs lg:text-sm mt-1 font-medium group-hover:text-gray-300 transition-colors">
                  {link.desc}
                </p>
              </div>
            </div>

            <FaExternalLinkAlt className="text-white/30 group-hover:text-cyan-400 text-sm lg:text-base transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 z-10" />
          </motion.a>
        ))}
      </div>
    </section>
  );
});

export default ResearchLinks;
