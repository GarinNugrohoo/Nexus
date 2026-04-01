import { MdOutlineTimer, MdTrendingUp } from "react-icons/md";
import { forwardRef } from "react";
import { HiOutlineUsers } from "react-icons/hi";
import CountUp from "../animations/CountUp";
import TitleText from "../ui/TitleText";

const CountDataSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section className="w-full pt-12 lg:pt-20" ref={ref}>
      <TitleText name="DATA INSIGHTS" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
        {/* Stat 1: Average Screen Time */}
        <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
          <MdOutlineTimer className="text-3xl lg:text-4xl text-cyan-400" />
          <div className="flex items-baseline gap-1">
            <CountUp
              from={0}
              to={7.5}
              direction="up"
              duration={2}
              className="text-3xl lg:text-4xl font-bold text-white"
            />
            <span className="text-xl lg:text-2xl text-gray-400">jam</span>
          </div>
          <p className="text-xs lg:text-sm text-gray-400">
            Rata-rata ScreenTime/hari
          </p>
          <p className="text-[10px] lg:text-xs text-cyan-400">
            Kemenkes-RI (2025)
          </p>
        </div>

        {/* Stat 2: Productivity Impact */}
        <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-300">
          <MdTrendingUp className="text-3xl lg:text-4xl text-purple-400" />
          <div className="flex items-baseline gap-1">
            <CountUp
              from={0}
              to={68.65}
              direction="up"
              duration={2}
              className="text-3xl lg:text-4xl font-bold text-white"
            />
            <span className="text-xl lg:text-2xl text-gray-400">%</span>
          </div>
          <p className="text-xs lg:text-sm text-gray-400">
            Peningkatan akses gawai
          </p>
          <p className="text-[10px] lg:text-xs text-purple-400">
            Dampak signifikan (2024)
          </p>
        </div>

        {/* Stat 3: Affected Teens */}
        <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
          <HiOutlineUsers className="text-3xl lg:text-4xl text-cyan-400" />
          <div className="flex items-baseline gap-1">
            <CountUp
              from={0}
              to={74.15}
              direction="up"
              duration={2}
              className="text-3xl lg:text-4xl font-bold text-white"
            />
            <span className="text-xl lg:text-2xl text-gray-400">%</span>
          </div>
          <p className="text-xs lg:text-sm text-gray-400">
            Akses Gawai di Perkotaan
          </p>
          <p className="text-[10px] lg:text-xs text-cyan-400">
            Cukup Tinggi (2024)
          </p>
        </div>
      </div>
      {/* Paragraph Explanation */}
      <div className="max-w-3xl mx-auto text-center mt-10 lg:mt-12 px-4">
        <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
          Laporan ini menyoroti korelasi kritis antara tingginya akses gawai di
          wilayah perkotaan (73,58%) dan perdesaan (60,18%) terhadap risiko
          kesehatan fisik serta mental pada{" "}
          <span className="text-cyan-400 font-semibold">
            44,07 juta generasi muda Indonesia.
          </span>{" "}
          Riset menunjukkan penggunaan media sosial yang mencapai{" "}
          <span className="text-purple-400 font-semibold">tiga kali lipat</span>{" "}
          dari batas aman 2 jam per hari dapat memicu masalah kesehatan gangguan
          mata minus dan depresi pada generasi muda. Laporan ini juga menekankan
          bahwa akses internet yang hampir sempurna disuatu wilayah tidak hanya
          membawa dampak positif / kemajuan digital melainkan juga dapat
          meningkatkan risiko kesehatan mental pada anak-anak generasi muda di
          Indonesia.{" "}
        </p>
        <p className="text-gray-400 text-xs lg:text-sm mt-3">
          Sumber: Badan Pusat Statistik & Kemenkes-RI
        </p>
      </div>
    </section>
  );
});

export default CountDataSection;
