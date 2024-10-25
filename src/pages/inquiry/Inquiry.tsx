import { NavLink, Outlet, useLocation } from "react-router-dom";
import MainComponent from "../../components/MainComponent";
import { SearchInput } from "../../components/ui/Input";

const TABS = [
  { value: "자주 묻는 질문", url: "/faq" },
  { value: "Q&A", url: "/qna" },
];

const Inquiry = () => {
  const location = useLocation();

  return (
    <MainComponent className="max-w-7xl">
      <h2 className="mb-10 text-4xl font-bold">문의사항</h2>

      <nav className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <ul className="flex gap-4">
          {TABS.map((tab) => (
            <li key={tab.value}>
              <NavLink
                to={tab.url}
                className="text-gray-600 [&.active]:font-medium [&.active]:text-gray-800"
              >
                {tab.value}
              </NavLink>
            </li>
          ))}
        </ul>

        {location.pathname === "/qna" && <SearchInput type="text" />}
      </nav>

      <Outlet />
    </MainComponent>
  );
};

export default Inquiry;
