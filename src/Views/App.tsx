import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./Layout/Header";
import Main from "./Pages/Main";
import Competitions from "./Pages/Competition/Competitions";
import Competition from "./Pages/Competition/Competition";
import Footer from "./Layout/Footer";
import { useResizeDetector } from "react-resize-detector";
import { WindowSizeData } from "../Models/WindowSize/Data";
import MobileMenu from "./Layout/MobileMenu";

function App() {
  const { width, height, ref } = useResizeDetector();

  return (
    <div ref={ref} className="flex flex-col justify-center relative bg-gray-50">
      <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path="/" element={<Main />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/competitions/:competitionId" element={<Competition />} />
      </Routes>
      {width && width < WindowSizeData["md"] && <MobileMenu />}
      <Footer />
      {width && width < WindowSizeData["md"] && (
        <div className="h-16 w-full"></div>
      )}
      <Outlet />
    </div>
  );
}

export default App;
