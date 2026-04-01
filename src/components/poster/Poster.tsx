interface PosterProps {
  image: string;
  onClick: () => void;
  maxHeight?: string;
}

const Poster: React.FC<PosterProps> = ({
  image,
  onClick,
  maxHeight = "400px",
}) => {
  return (
    <div className="relative w-auto inline-block">
      <div
        className="relative overflow-hidden rounded-xl cursor-pointer group"
        style={{
          border: "3px solid #a855f7",
          boxShadow:
            "0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)",
        }}
        onClick={onClick}
      >
        <img
          src={image}
          alt="Poster"
          className="cursor-pointer object-contain transition-all duration-300"
          style={{
            maxHeight: maxHeight,
            width: "auto",
            height: "auto",
            display: "block",
          }}
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center pointer-events-none">
          <span className="opacity-0 group-hover:opacity-100 bg-black/80 text-white px-3 py-1 rounded-full text-sm transition-all duration-300">
            Klik untuk preview
          </span>
        </div>
      </div>
    </div>
  );
};

export default Poster;
