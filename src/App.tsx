import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import AnalysisPage from "./pages/AnalysisPage";
import NotFound from "./pages/errorPages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Beranda" replace />} />
        <Route path="/Beranda" element={<HomePage />} />
        {/* <Route path="/Analysis-data" element={<AnalysisPage />} /> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
