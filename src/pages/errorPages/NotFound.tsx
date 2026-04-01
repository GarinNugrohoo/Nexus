import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaArrowLeft } from "react-icons/fa";
import Button from "../../components/ui/Button";

const NotFound: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-950 via-purple-950/20 to-gray-950 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          404
        </h1>

        <h2 className="text-2xl font-bold text-white mb-2">
          Halaman Tidak Ditemukan
        </h2>

        <p className="text-purple-300/60 mb-8">
          Maaf, halaman yang kamu cari tidak ada atau telah dipindahkan.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            name="Beranda"
            onClick={() => navigate("/")}
            className="group rounded-full"
            variant="primary"
            icon={
              <FaHome className="group-hover:-translate-y-2 transition-transform text-xs" />
            }
            iconPosition="right"
          />

          <Button
            name="Kembali"
            onClick={() => navigate(-1)}
            className="group rounded-full"
            variant="outline"
            icon={
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform text-xs" />
            }
            iconPosition="right"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
