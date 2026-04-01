import { useRef } from "react";
import DotGrid from "../components/background/DotGrid";
import AnalysisSection from "../components/layout/AnalysisSection";

function AnalysisPage() {
  const AnalysisRef = useRef<HTMLElement>(null);

  return (
    <div className="relative w-full min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#271E37"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full min-h-screen">
        <div className="container mx-auto px-4 py-6 lg:py-12">
          {/* Header Section */}
          <div className="text-center mb-8 lg:mb-12">
            <p className="text-cyan-400 font-mono text-xs lg:text-sm tracking-widest uppercase opacity-80 mb-2">
              DIGITAL WELL-BEING Analysis
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tighter">
              Screen Time <span className="text-purple-500">Analyzer</span>
            </h1>
            <p className="text-gray-400 text-sm lg:text-base max-w-2xl mx-auto mt-4 px-4">
              Analysis pola penggunaan gadget Anda dan dapatkan rekomendasi
              personal untuk meningkatkan digital well-being
            </p>
          </div>

          {/* Analysis Section */}
          <div className="max-w-5xl mx-auto">
            <AnalysisSection ref={AnalysisRef} />
          </div>

          {/* Footer Note */}
          <div className="text-center mt-12 lg:mt-16 pt-8 border-t border-white/10">
            <p className="text-gray-500 text-xs lg:text-sm">
              Data dianalysis berdasarkan standar kesehatan digital Indonesia
              2024
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Gunakan data yang akurat untuk hasil analysis yang lebih tepat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalysisPage;
