import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/main/Main";
import { Route, Routes, useLocation } from "react-router-dom";
import Place from "./pages/place/Place";
import Notice from "./pages/notice/Notice";
import Faq from "./pages/inquiry/faq/Faq";
import { twMerge } from "tailwind-merge";

function App() {
  const currentPath = useLocation();

  return (
    <>
      <Header />

      <main
        className={twMerge(
          `flex-1 max-w-full tracking-tight ${
            currentPath.pathname !== "/" && "max-w-screen-2xl mx-auto"
          }`
        )}
      >
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/place" element={<Place />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
