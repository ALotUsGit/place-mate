import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/main/Main";
import { Route, Routes } from "react-router-dom";
import Place from "./pages/place/Place";
import Notice from "./pages/notice/Notice";
import NoticeDetail from "./pages/notice/NoticeDetail";
import Faq from "./pages/inquiry/faq/Faq";
import SignIn from "./pages/auth/SignIn";
import FindPassword from "./pages/auth/FindPassword";
import Signup from "./pages/auth/Signup";
import Qna from "./pages/inquiry/qna/Qna";
import Inquiry from "./pages/inquiry/Inquiry";
import QnaDetail from "./pages/inquiry/qna/QnaDetail";
import QnaEnroll from "./pages/inquiry/qna/QnaEnroll";
import MyPage from "./pages/mypage/MyPage";
import PlaceList from "./pages/mypage/host/PlaceList";
import PlaceEnroll from "./pages/mypage/host/PlaceEnroll";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/place/*" element={<Place />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/notice/:id" element={<NoticeDetail />} />

        <Route element={<Inquiry />}>
          <Route path="/faq" element={<Faq />} />
          <Route path="/qna" element={<Qna />} />
        </Route>
        <Route path="/qna/:id" element={<QnaDetail />} />
        <Route path="/qnaEnroll" element={<QnaEnroll />} />

        <Route element={<MyPage />}>
          <Route path="/host/placeList" element={<PlaceList />} />
          <Route path="/host/placeEnroll" element={<PlaceEnroll />} />
        </Route>

        <Route path="/signin" element={<SignIn />} />
        <Route path="/findPassword" element={<FindPassword />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
