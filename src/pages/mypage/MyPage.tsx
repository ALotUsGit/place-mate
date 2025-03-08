import { Link, Outlet } from "react-router-dom";
import MainComponent from "../../components/MainComponent";

const NAV = [
  {
    title: "GUEST",
    list: [
      { value: "이용내역", url: "/host/placeList" },
      { value: "문의내역", url: "/host/placeList" },
    ],
  },
  {
    title: "HOST",
    list: [
      { value: "장소등록/관리", url: "/host/placeList" },
      { value: "문의내역", url: "/host/placeList" },
      { value: "후기관리", url: "/host/placeList" },
    ],
  },
];

const MyPage = () => {
  return (
    <MainComponent className="flex gap-8 lg:gap-16 2xl:gap-32">
      <aside className="min-w-72 2xl:min-w-96">
        <div className="mb-10 flex items-center gap-6">
          <div className="size-20 overflow-hidden rounded-full bg-gray-200"></div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl/none font-bold">User Name</h3>
            <Link
              to="/host/placeList"
              className="text-sm/none text-gray-600 transition-colors hover:text-gray-700"
            >
              내 정보 수정
            </Link>
          </div>
        </div>

        <nav className="ml-[6.625rem] flex flex-col gap-6">
          {NAV.map((nav) => (
            <div
              key={nav.title}
              className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0"
            >
              <h4 className="mb-6 text-lg/none font-semibold">{nav.title}</h4>
              <ul className="flex flex-col gap-4 px-4">
                {nav.list.map((item) => (
                  <li key={item.value}>
                    <Link
                      to={item.url}
                      className="text-gray-600 transition-colors hover:text-gray-700"
                    >
                      {item.value}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      <section className="flex-1">
        <Outlet />
      </section>
    </MainComponent>
  );
};
export default MyPage;
