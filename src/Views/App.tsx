import { BrowserRouter } from "react-router-dom";
import Header from "./Layout/Header";
import Main from "./Pages/Main";
import Footer from "./Layout/Footer";

function App() {
  return (
    <div className="flex flex-col justify-center">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
