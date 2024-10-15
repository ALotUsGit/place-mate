import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/main/Main";
import { Route, Routes } from "react-router-dom";
import Place from "./pages/place/Place";
import Notice from "./pages/notice/Notice";
import Faq from "./pages/inquiry/faq/Faq";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/place" element={<Place />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
