import FloatingIcons from "../animations/FloatingIcons";

interface PosterMobileProps {
  image: string;
  onClick: () => void;
  maxHeight?: string;
}

const PosterMobile: React.FC<PosterMobileProps> = ({
  image,
  onClick,
  maxHeight = "220px",
}) => {
  return (
    <div className="lg:hidden flex justify-center items-center py-4 relative mt-15">
      <FloatingIcons />

      <div className="relative z-10 inline-block mx-auto">
        <div
          className="relative overflow-hidden rounded-xl cursor-pointer group"
          style={{
            border: "2px solid #a855f7",
            boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)",
            width: "fit-content",
          }}
          onClick={onClick}
        >
          <img
            src={image}
            alt="Poster"
            className="h-auto object-contain mx-auto"
            style={{
              maxHeight: maxHeight,
              width: "auto",
            }}
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-active:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
            <span className="bg-purple-600/90 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
              TAP TO VIEW
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-3 opacity-60">
          <div className="w-8 h-\[1px] bg-purple-500"></div>
          <p className="text-purple-300 text-[10px] uppercase tracking-tighter">
            Click to Expand
          </p>
          <div className="w-8 h-\[1px] bg-purple-500"></div>
        </div>
      </div>
    </div>
  );
};

export default PosterMobile;
