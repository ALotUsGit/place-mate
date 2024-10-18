import { NavLink, Outlet } from "react-router-dom";
import MainComponent from "../../components/MainComponent";

const TABS = [
  { value: "자주 묻는 질문", url: "/faq" },
  { value: "Q&A", url: "/qna" },
];

const Inquiry = () => {
  return (
    <MainComponent className="my-20 max-w-7xl">
      <h2 className="mb-10 text-4xl font-bold">문의사항</h2>

      <nav className="mb-6">
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
      </nav>

      <Outlet />
    </MainComponent>
  );
};

export default Inquiry;
