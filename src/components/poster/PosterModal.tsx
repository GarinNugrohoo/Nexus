interface PosterModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  isMobile?: boolean;
}

const PosterModal: React.FC<PosterModalProps> = ({
  isOpen,
  onClose,
  image,
  isMobile = false,
}) => {
  if (!isOpen) return null;

  const modalStyle = isMobile
    ? {
        container: "fixed inset-0 z-50 flex items-center justify-center p-4",
        image: "w-auto h-auto max-w-[92vw] max-h-[85vh] object-contain",
        closeButton:
          "fixed top-4 right-4 z-50 bg-black/80 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm",
        caption: "fixed bottom-4 left-0 right-0 text-center z-50",
      }
    : {
        container:
          "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90",
        image:
          "w-auto h-auto max-w-[90vw] max-h-[90vh] object-contain bg-black",
        closeButton:
          "absolute top-4 right-4 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-all duration-300",
        caption: null,
      };

  return (
    <div className={modalStyle.container} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        <div
          className="relative overflow-hidden rounded-xl"
          style={{
            border: "3px solid #a855f7",
            boxShadow:
              "0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)",
            backgroundColor: isMobile ? "#000" : "transparent",
          }}
        >
          <img
            src={image}
            alt="Poster Preview"
            className={modalStyle.image}
            style={{ display: "block" }}
          />

          <button className={modalStyle.closeButton} onClick={onClose}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {isMobile && modalStyle.caption && (
          <div className={modalStyle.caption}>
            <p className="text-purple-300/70 text-xs bg-black/50 inline-block px-3 py-1 rounded-full backdrop-blur-sm">
              Poster Analisis Dampak Pengunaan Gawai Terhadap Kesehatan dan Gaya
              Hidup Digital
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PosterModal;
