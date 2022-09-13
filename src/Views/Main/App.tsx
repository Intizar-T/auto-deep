import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./Carousel";
import InfoBoard from "./InfoBoard";

function App() {
  return (
    <div className="flex flex-col justify-center">
      <Header />
      <Carousel />
      <InfoBoard />
      <Footer />
    </div>
  );
}

export default App;
