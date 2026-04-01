import { useState, useRef } from "react";
import DotGrid from "../components/background/DotGrid";
import Poster from "../components/poster/Poster";
import PosterMobile from "../components/poster/PosterMobile";
import PosterModal from "../components/poster/PosterModal";
import ContentSection from "../components/layout/ContentSection";
import Nexus from "../assets/images/nexus.png";
import ResearchLinksSection from "../components/layout/ResearchLinksSection";
import CountDataSection from "../components/layout/CountDataSection";
// import AnalysisSection from "../components/layout/AnalysisSection";
import { useScrollToSection } from "../hooks/useScrollToSection";
import FooterSection from "../components/layout/FooterSection";

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isPosterExpanded, setIsPosterExpanded] = useState<boolean>(false);

  const handlePosterClick = (): void => {
    if (window.innerWidth < 1024) {
      setIsPosterExpanded(!isPosterExpanded);
    } else {
      setIsModalOpen(true);
    }
  };

  const closeExpanded = (): void => setIsPosterExpanded(false);
  const closeModal = (): void => setIsModalOpen(false);
  const countDataRef = useRef<HTMLElement>(null);
  const sourcesLinkRef = useRef<HTMLElement>(null);
  const { scrollToSection } = useScrollToSection();

  return (
    <div className="relative w-full min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <DotGrid
          dotSize={4}
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
        <div className="py-6 px-4 lg:py-8">
          <div className="flex flex-col w-full max-w-5xl mx-auto">
            {/* Grid 2 kolom untuk Poster dan Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Kolom Kiri: Poster */}
              <div>
                {/* Mobile Poster */}
                <PosterMobile
                  image={Nexus}
                  onClick={handlePosterClick}
                  maxHeight="220px"
                />
                {/* Desktop Poster */}
                <div className="hidden lg:flex justify-center lg:justify-start items-cente lg:mt-40">
                  <Poster
                    image={Nexus}
                    onClick={handlePosterClick}
                    maxHeight="400px"
                  />
                </div>
              </div>

              {/* Kolom Kanan: ContentSection */}
              <div className="flex flex-col justify-center lg:mt-40">
                <ContentSection
                  scrollToSection={scrollToSection}
                  countDataRef={countDataRef}
                  sourcesLinktRef={sourcesLinkRef}
                />
              </div>
            </div>

            {/* CountDataSection - Full width, centered below */}
            <div className="w-full flex justify-center mt-8 lg:mt-30">
              <CountDataSection ref={countDataRef} />
            </div>

            {/* <div className="w-full mt-12 lg:mt-20">
              <AnalysisSection ref={sourcesLinkRef} />
            </div> */}

            {/* ResearchLinksSection - Full width */}
            <div className="w-full mt-12 lg:mt-20">
              <ResearchLinksSection ref={sourcesLinkRef} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-12 lg:mt-20">
        <FooterSection />
      </div>

      {/* Mobile Expanded Modal */}
      <PosterModal
        isOpen={isPosterExpanded}
        onClose={closeExpanded}
        image={Nexus}
        isMobile={true}
      />

      {/* Desktop Modal */}
      <PosterModal
        isOpen={isModalOpen}
        onClose={closeModal}
        image={Nexus}
        isMobile={false}
      />
    </div>
  );
}

export default HomePage;
