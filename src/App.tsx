import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/errorPages/NotFound";
import { useDisableInspect } from "./hooks/useDisableInspect";

function App() {
  useDisableInspect();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Beranda" replace />} />
        <Route path="/Beranda" element={<HomePage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
