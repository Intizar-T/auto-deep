import { Routes, Route } from "react-router-dom";
import Header from "./Layout/Header";
import Main from "./Pages/Main";
import Competitions from "./Pages/Competitions";
import Footer from "./Layout/Footer";

function App() {
  return (
    <div className="flex flex-col justify-center">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/competitions" element={<Competitions />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
