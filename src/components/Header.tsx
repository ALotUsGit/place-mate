import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="mx-auto flex max-w-screen-2xl items-center gap-10 px-20 py-6 2xl:px-0">
        <Link to="/" className="text-2xl font-bold leading-none">
          PLACE MATE
        </Link>

        <nav className="flex flex-1 gap-6">
          <Link to="/place">PLACE</Link>
          <Link to="/notice">NOTICE</Link>
          <Link to="/faq">INQUIRY</Link>
        </nav>

        <div className="flex gap-4 text-gray-600">
          <Link to="/host/placeList">
            <UserIcon className="size-6" />
          </Link>
          <Link to="/signin">
            <ArrowLeftStartOnRectangleIcon className="size-6" />
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
