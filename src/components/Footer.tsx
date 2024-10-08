import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-10 px-20 text-gray-600 text-sm leading-none bg-gray-100">
      <div className="max-w-screen-2xl mx-auto">
        <nav className="flex gap-3 mb-10">
          <Link to="/">이용약관</Link>
          <Link to="/">개인정보처리방침</Link>
        </nav>

        <h1 className="text-2xl leading-none font-bold">PLACE MATE</h1>

        <div className="flex justify-between mt-3">
          <p>포트폴리오를 위해 제작된 사이트입니다.</p>
          <address className="not-italic">© alotus _ JEON A RYEON</address>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
