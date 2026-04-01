import { FaArrowRight } from "react-icons/fa";
import { type RefObject } from "react";
import RotatingText from "../animations/RotatingText";
import Button from "../ui/Button";

interface ContentSectionProps {
  scrollToSection: (ref: RefObject<HTMLElement | null>) => void;
  sourcesLinktRef: RefObject<HTMLElement | null>;
  countDataRef: RefObject<HTMLElement | null>;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  scrollToSection,
  sourcesLinktRef,
}) => {
  const rotatingTexts: string[] = [
    "VS PRODUKTIVITAS",
    "NAIK ~23% DARI 2024",
    "7.5 JAM / HARI",
    "WELL-BEING TIPS",
  ];

  return (
    <div className="flex flex-col justify-center lg:justify-center items-center lg:items-start text-center lg:text-left space-y-4 lg:space-y-5 py-6 lg:py-0">
      <p className="text-cyan-400 font-mono text-[10px] lg:text-xs tracking-widest uppercase opacity-80">
        Digital Well-being Analysis
      </p>

      <div className="space-y-1 lg:space-y-2">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-black text-white tracking-tighter leading-tight">
          SCREEN <span className="text-purple-500">TIME</span>
        </h1>

        <div className="flex items-center justify-center lg:justify-start">
          <RotatingText
            texts={rotatingTexts}
            mainClassName="px-3 sm:px-4 py-1 sm:py-1.5 bg-cyan-300 text-black font-black text-xs sm:text-lg lg:text-2xl xl:text-3xl rounded-xl shadow-[0_0_20px_rgba(103,232,249,0.5)]"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.03}
            splitLevelClassName="overflow-hidden pb-1"
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            rotationInterval={2500}
          />
        </div>
      </div>

      <p className="text-gray-400 max-w-sm lg:max-w-md text-xs sm:text-sm lg:text-base leading-relaxed px-2 lg:px-0">
        Analisis Mendalam Mengenai Hubungan Akses Gawai Dengan Kesehatan Remaja
        Indonesia.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-4 w-full">
        <Button
          name="Check Source Poster"
          onClick={() => scrollToSection(sourcesLinktRef)}
          variant="outline"
          className="group rounded-full"
          icon={
            <FaArrowRight className="group-hover:translate-x-1 transition-transform text-xs" />
          }
          iconPosition="right"
        />
      </div>
    </div>
  );
};

export default ContentSection;
