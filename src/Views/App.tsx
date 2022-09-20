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
  const { width, ref } = useResizeDetector();
  const mobileMode = width && width < WindowSizeData["sm"];
  return (
    <div ref={ref} className="flex flex-col justify-center relative">
      <Header />
      <div
        className={`w-full h-full ${mobileMode ? "" : "p-16 pt-0"} bg-gray-50`}
      >
        <Routes>
          <Route index element={<Main />} />
          <Route path="/" element={<Main />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route
            path="/competitions/:competitionId"
            element={<Competition />}
          />
        </Routes>
        {width && width < WindowSizeData["md"] && <MobileMenu />}
        <Footer />
        {width && width < WindowSizeData["md"] && (
          <div className="h-16 w-full"></div>
        )}
        <Outlet />
      </div>
    </div>
  );
}

export default App;
