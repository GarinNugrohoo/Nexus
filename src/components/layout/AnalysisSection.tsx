import { useState, forwardRef } from "react";
import {
  MdOutlineTimer,
  MdSportsEsports,
  MdWork,
  MdAnalytics,
  MdWarning,
  MdCheckCircle,
  MdInfo,
  MdChildCare,
  MdPerson,
} from "react-icons/md";
import {
  FaBrain,
  FaChartLine,
  FaMobile,
  FaLaptop,
  FaUsers,
} from "react-icons/fa";
import CountUp from "../animations/CountUp";
import Button from "../ui/Button";

interface AnalysisResult {
  totalMinutes: number;
  percentageVsIdeal: number;
  productivityRatio: number;
  riskLevel: string;
  recommendation: string;
  impact: string;
}

// Data berdasarkan artikel
const IDEAL_DATA = {
  // Untuk dewasa, berdasarkan data global
  adult: {
    averageMinutes: 6 * 60 + 57, // 6 jam 57 menit (rata-rata global)
    healthyMax: 7 * 60, // 7 jam batas sehat
    warning: 8 * 60, // >8 jam perlu perhatian
  },
  // Untuk anak 2-5 tahun
  toddler: {
    maxWeekday: 60, // 1 jam
    maxWeekend: 180, // 3 jam
  },
  // Untuk anak 5+ tahun
  child: {
    recommendation:
      "Tidak mengganggu waktu belajar, tidur, interaksi sosial, dan aktivitas fisik",
  },
};

const AnalysisSection = forwardRef<HTMLElement>((_, ref) => {
  const [ageGroup, setAgeGroup] = useState<string>("adult");
  const [totalScreenTime, setTotalScreenTime] = useState({
    value: 0,
    unit: "hours",
  });
  const [entertainmentTime, setEntertainmentTime] = useState({
    value: 0,
    unit: "hours",
  });
  const [productivityTime, setProductivityTime] = useState({
    value: 0,
    unit: "hours",
  });
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(
    null,
  );
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showTips, setShowTips] = useState(false);

  // Konversi ke menit
  const convertToMinutes = (value: number, unit: string): number => {
    if (unit === "hours") return value * 60;
    return value;
  };

  // Format menit ke jam dan menit
  const formatMinutes = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (mins === 0) return `${hours} jam`;
    if (hours === 0) return `${mins} menit`;
    return `${hours} jam ${mins} menit`;
  };

  // Analisis berdasarkan usia
  const getRecommendationByAge = (
    totalMinutes: number,
    productivityRatio: number,
    ageGroup: string,
  ) => {
    if (ageGroup === "adult") {
      if (totalMinutes <= IDEAL_DATA.adult.healthyMax) {
        return {
          message:
            "✅ Penggunaan gadget Anda masih dalam batas sehat! Fokus pada kualitas konten yang dikonsumsi. Seperti yang disarankan peneliti UCLA, menonton dokumenter lebih baik daripada scrolling media sosial tanpa tujuan.",
          riskLevel: "Sehat",
          color: "text-green-400",
          impact: "Baik",
        };
      } else if (totalMinutes <= IDEAL_DATA.adult.warning) {
        return {
          message:
            "⚠️ Penggunaan gadget Anda di atas rata-rata global (6 jam 57 menit). Coba kurangi waktu penggunaan dan fokus pada konten berkualitas. Ingat, kualitas lebih penting daripada kuantitas!",
          riskLevel: "Perlu Perhatian",
          color: "text-orange-400",
          impact: "Waspada",
        };
      } else {
        return {
          message:
            "🔴 Penggunaan gadget Anda sangat tinggi! Risiko gangguan tidur, nyeri leher & punggung, hingga depresi meningkat. Segera lakukan digital detox dan konsultasikan dengan profesional jika diperlukan.",
          riskLevel: "Berisiko Tinggi",
          color: "text-red-400",
          impact: "Kritis",
        };
      }
    } else if (ageGroup === "toddler") {
      if (totalMinutes <= IDEAL_DATA.toddler.maxWeekday) {
        return {
          message:
            "✅ Bagus! Screen time anak Anda sesuai rekomendasi WHO. Pastikan konten yang ditonton adalah konten edukatif dan tetap didampingi orang tua.",
          riskLevel: "Sesuai Rekomendasi",
          color: "text-green-400",
          impact: "Baik",
        };
      } else {
        return {
          message:
            "⚠️ Screen time anak Anda melebihi rekomendasi WHO. Untuk anak usia 2-5 tahun, maksimal 1 jam per hari. Kurangi waktu layar dan ajak anak bermain aktif di luar ruangan.",
          riskLevel: "Perlu Perhatian",
          color: "text-orange-400",
          impact: "Waspada",
        };
      }
    } else {
      // Usia 5+ tahun
      if (productivityRatio >= 0.6) {
        return {
          message:
            "✅ Screen time anak Anda didominasi aktivitas produktif. Pastikan tetap ada keseimbangan dengan waktu tidur, interaksi sosial, dan aktivitas fisik.",
          riskLevel: "Seimbang",
          color: "text-green-400",
          impact: "Baik",
        };
      } else {
        return {
          message:
            "⚠️ Perhatikan keseimbangan screen time anak. Rekomendasi: screen time tidak boleh mengganggu waktu belajar, tidur (minimal 8-10 jam), interaksi sosial, dan aktivitas fisik.",
          riskLevel: "Perlu Perhatian",
          color: "text-orange-400",
          impact: "Waspada",
        };
      }
    }
  };

  const handleAnalysis = () => {
    setIsAnalyzing(true);

    const totalMinutes = convertToMinutes(
      totalScreenTime.value,
      totalScreenTime.unit,
    );
    const entertainmentMinutes = convertToMinutes(
      entertainmentTime.value,
      entertainmentTime.unit,
    );
    const productivityMinutes = convertToMinutes(
      productivityTime.value,
      productivityTime.unit,
    );

    // Validasi
    if (
      totalMinutes === 0 &&
      entertainmentMinutes === 0 &&
      productivityMinutes === 0
    ) {
      alert("Masukkan data penggunaan gadget Anda terlebih dahulu!");
      setIsAnalyzing(false);
      return;
    }

    if (
      Math.abs(totalMinutes - (entertainmentMinutes + productivityMinutes)) >
        5 &&
      totalMinutes > 0
    ) {
      alert(
        "Total screen time harus sama dengan jumlah hiburan dan produktivitas!",
      );
      setIsAnalyzing(false);
      return;
    }

    const validTotalMinutes =
      totalMinutes > 0
        ? totalMinutes
        : entertainmentMinutes + productivityMinutes;
    const finalTotalMinutes = validTotalMinutes;
    const finalProductivityMinutes =
      productivityMinutes > 0 ? productivityMinutes : validTotalMinutes * 0.4;
    const finalProductivityRatio = finalProductivityMinutes / finalTotalMinutes;

    let percentageVsIdeal = 0;
    if (ageGroup === "adult") {
      percentageVsIdeal =
        ((finalTotalMinutes - IDEAL_DATA.adult.averageMinutes) /
          IDEAL_DATA.adult.averageMinutes) *
        100;
    } else if (ageGroup === "toddler") {
      percentageVsIdeal =
        ((finalTotalMinutes - IDEAL_DATA.toddler.maxWeekday) /
          IDEAL_DATA.toddler.maxWeekday) *
        100;
    }

    const recommendation = getRecommendationByAge(
      finalTotalMinutes,
      finalProductivityRatio,
      ageGroup,
    );

    setTimeout(() => {
      setAnalysisResult({
        totalMinutes: finalTotalMinutes,
        percentageVsIdeal,
        productivityRatio: finalProductivityRatio,
        riskLevel: recommendation.riskLevel,
        recommendation: recommendation.message,
        impact: recommendation.impact,
      });
      setIsAnalyzing(false);
      setShowTips(true);
    }, 500);
  };

  const handleReset = () => {
    setTotalScreenTime({ value: 0, unit: "hours" });
    setEntertainmentTime({ value: 0, unit: "hours" });
    setProductivityTime({ value: 0, unit: "hours" });
    setAnalysisResult(null);
    setShowTips(false);
  };

  return (
    <section className="w-full py-8 lg:py-12" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Age Group Selector */}
        <div className="mb-8 lg:mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <MdChildCare className="text-2xl text-cyan-400" />
              <h3 className="text-white font-semibold text-lg">
                Pilih Kelompok Usia
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                onClick={() => setAgeGroup("adult")}
                className={`px-4 py-3 rounded-xl transition-all duration-300 ${
                  ageGroup === "adult"
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                <MdPerson className="inline mr-2 text-lg" />
                Dewasa (18+ tahun)
              </button>
              <button
                onClick={() => setAgeGroup("toddler")}
                className={`px-4 py-3 rounded-xl transition-all duration-300 ${
                  ageGroup === "toddler"
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                <MdChildCare className="inline mr-2 text-lg" />
                Anak (2-5 tahun)
              </button>
              <button
                onClick={() => setAgeGroup("child")}
                className={`px-4 py-3 rounded-xl transition-all duration-300 ${
                  ageGroup === "child"
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                <MdChildCare className="inline mr-2 text-lg" />
                Anak & Remaja (5+ tahun)
              </button>
            </div>
          </div>
        </div>

        {/* Input Section */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 mb-8">
          <div className="text-center mb-6">
            <FaMobile className="text-4xl text-cyan-400 mx-auto mb-3" />
            <h3 className="text-xl lg:text-2xl font-bold text-white">
              Analisis Penggunaan Gadget
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Masukkan estimasi penggunaan gadget Anda dalam sehari
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-cyan-400 text-sm font-mono">
                <MdOutlineTimer /> TOTAL HARIAN SCREEN TIME
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={
                    totalScreenTime.value === 0 ? "" : totalScreenTime.value
                  }
                  onChange={(e) =>
                    setTotalScreenTime({
                      ...totalScreenTime,
                      value: parseFloat(e.target.value) || 0,
                    })
                  }
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-400 placeholder:text-gray-500"
                  placeholder="Contoh: 6"
                />
                <select
                  value={totalScreenTime.unit}
                  onChange={(e) =>
                    setTotalScreenTime({
                      ...totalScreenTime,
                      unit: e.target.value,
                    })
                  }
                  className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="hours">Jam</option>
                  <option value="minutes">Menit</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-purple-400 text-sm font-mono">
                <MdSportsEsports /> WAKTU HIBURAN
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={
                    entertainmentTime.value === 0 ? "" : entertainmentTime.value
                  }
                  onChange={(e) =>
                    setEntertainmentTime({
                      ...entertainmentTime,
                      value: parseFloat(e.target.value) || 0,
                    })
                  }
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-purple-400 placeholder:text-gray-500"
                  placeholder="Games, sosmed, streaming"
                />
                <select
                  value={entertainmentTime.unit}
                  onChange={(e) =>
                    setEntertainmentTime({
                      ...entertainmentTime,
                      unit: e.target.value,
                    })
                  }
                  className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-purple-400"
                >
                  <option value="hours">Jam</option>
                  <option value="minutes">Menit</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-green-400 text-sm font-mono">
                <MdWork /> WAKTU PRODUKTIF
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={
                    productivityTime.value === 0 ? "" : productivityTime.value
                  }
                  onChange={(e) =>
                    setProductivityTime({
                      ...productivityTime,
                      value: parseFloat(e.target.value) || 0,
                    })
                  }
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-green-400 placeholder:text-gray-500"
                  placeholder="Belajar, kerja, riset"
                />
                <select
                  value={productivityTime.unit}
                  onChange={(e) =>
                    setProductivityTime({
                      ...productivityTime,
                      unit: e.target.value,
                    })
                  }
                  className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-green-400"
                >
                  <option value="hours">Jam</option>
                  <option value="minutes">Menit</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Button
              name={isAnalyzing ? "Menganalisis..." : "Analisis Sekarang"}
              onClick={handleAnalysis}
              variant="primary"
              className="group rounded-full px-8 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
              icon={<FaChartLine className="text-sm" />}
              iconPosition="right"
            />
            {analysisResult && (
              <Button
                name="Reset"
                onClick={handleReset}
                variant="outline"
                className="rounded-full px-8"
              />
            )}
          </div>
        </div>

        {/* Result Section */}
        {analysisResult && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <MdOutlineTimer className="text-3xl text-cyan-400 mx-auto mb-3" />
                <p className="text-gray-400 text-sm mb-2">Total Penggunaan</p>
                <p className="text-2xl lg:text-3xl font-bold text-white">
                  {formatMinutes(analysisResult.totalMinutes)}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  {ageGroup === "adult" &&
                    `Rata-rata global: ${formatMinutes(IDEAL_DATA.adult.averageMinutes)}`}
                  {ageGroup === "toddler" &&
                    `Rekomendasi WHO: ${formatMinutes(IDEAL_DATA.toddler.maxWeekday)}`}
                  {ageGroup === "child" && "Prioritaskan keseimbangan"}
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <FaChartLine className="text-3xl text-purple-400 mx-auto mb-3" />
                <p className="text-gray-400 text-sm mb-2">
                  Rasio Produktivitas
                </p>
                <p className="text-2xl lg:text-3xl font-bold text-white">
                  {(analysisResult.productivityRatio * 100).toFixed(1)}%
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Produktif vs Hiburan
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <MdWarning
                  className={`text-3xl mx-auto mb-3 ${
                    analysisResult.riskLevel === "Sehat" ||
                    analysisResult.riskLevel === "Sesuai Rekomendasi" ||
                    analysisResult.riskLevel === "Seimbang"
                      ? "text-green-400"
                      : analysisResult.riskLevel === "Perlu Perhatian" ||
                          analysisResult.riskLevel === "Waspada"
                        ? "text-orange-400"
                        : "text-red-400"
                  }`}
                />
                <p className="text-gray-400 text-sm mb-2">
                  Status Kesehatan Digital
                </p>
                <p
                  className={`text-xl lg:text-2xl font-bold ${
                    analysisResult.riskLevel === "Sehat" ||
                    analysisResult.riskLevel === "Sesuai Rekomendasi" ||
                    analysisResult.riskLevel === "Seimbang"
                      ? "text-green-400"
                      : analysisResult.riskLevel === "Perlu Perhatian" ||
                          analysisResult.riskLevel === "Waspada"
                        ? "text-orange-400"
                        : "text-red-400"
                  }`}
                >
                  {analysisResult.riskLevel}
                </p>
              </div>
            </div>

            {/* AI Recommendation */}
            <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 lg:p-8">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500/20 p-3 rounded-full flex-shrink-0">
                  <FaBrain className="text-3xl text-purple-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                    <h4 className="text-lg lg:text-xl font-bold text-white">
                      Analisis & Rekomendasi
                    </h4>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        analysisResult.impact === "Baik"
                          ? "bg-green-500/20 text-green-400"
                          : analysisResult.impact === "Waspada"
                            ? "bg-orange-500/20 text-orange-400"
                            : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {analysisResult.impact}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {analysisResult.recommendation}
                  </p>
                </div>
              </div>
            </div>

            {/* Tips Section */}
            {showTips && (
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MdInfo className="text-2xl text-cyan-400" />
                  <h4 className="text-white font-semibold text-lg">
                    Tips dari Pakar
                  </h4>
                </div>
                <div className="space-y-3 text-gray-300 text-sm lg:text-base">
                  <p>
                    💡{" "}
                    <span className="text-cyan-400">Kualitas Kuantitas:</span>{" "}
                    Menurut peneliti UCLA, menonton dokumenter selama 1 jam
                    tidak berdampak sama seperti scrolling media sosial tanpa
                    tujuan.
                  </p>
                  <p>
                    💡{" "}
                    <span className="text-cyan-400">Batasi sebelum tidur:</span>{" "}
                    Hindari penggunaan gadget minimal 1 jam sebelum tidur untuk
                    menjaga kualitas istirahat.
                  </p>
                  <p>
                    💡 <span className="text-cyan-400">Aktivitas fisik:</span>{" "}
                    Pastikan ada waktu untuk bergerak aktif, terutama untuk
                    anak-anak.
                  </p>
                  <p>
                    💡 <span className="text-cyan-400">Digital detox:</span>{" "}
                    Luangkan waktu tanpa gadget, misalnya saat makan bersama
                    keluarga atau di akhir pekan.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
});

export default AnalysisSection;
