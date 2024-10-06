import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 py-6 px-20 bg-white z-50">
      <div className="flex items-center gap-10 max-w-screen-2xl mx-auto">
        <Link to="/" className="text-2xl leading-none font-bold">
          PLACE MATE
        </Link>

        <nav className="flex-1 flex gap-6">
          <Link to="/place">PLACE</Link>
          <Link to="/notice">NOTICE</Link>
          <Link to="/faq">INQUIRY</Link>
        </nav>

        <div className="flex gap-4 text-gray-600">
          <Link to="/mypage">
            <UserIcon className="size-6" />
          </Link>
          <Link to="/login">
            <ArrowLeftStartOnRectangleIcon className="size-6 " />
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
