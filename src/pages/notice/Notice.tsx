import { Link, NavLink, useLocation } from "react-router-dom";
import MainComponent from "../../components/MainComponent";
import { SearchInput } from "../../components/ui/Input";
import Pagination from "../../components/ui/Pagination";
import { useEffect, useState } from "react";
import { fetchNotices, Response } from "../../requests/notice/fetchNoices";
import { dateFormat } from "../../utils/dateFormat";
import { twMerge } from "tailwind-merge";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const TABS = [
  { value: "전체", tab: "all" },
  { value: "일반", tab: "general" },
  { value: "서비스", tab: "service" },
  { value: "이벤트", tab: "event" },
];

const Notice = () => {
  const [noticeData, setNoticeData] = useState<Response[]>([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentTab = searchParams.get("tab") || "전체";
  const currentPage = 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await fetchNotices();
        console.log(data);
        setNoticeData(data);
      } catch (error) {
        console.error("데이터를 불러오는데 실패했습니다.", error);
      }
    };
    fetchData();
  }, []);

  const filterData =
    currentTab === "전체"
      ? noticeData
      : noticeData.filter((data) => data.type === searchParams.get("tab"));

  return (
    <MainComponent className="max-w-7xl">
      <h2 className="mb-10 text-4xl font-bold">공지사항</h2>

      <nav className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <ul className="flex gap-4">
          {TABS.map((tab) => (
            <li key={tab.value}>
              <NavLink
                to={`/notice?tab=${tab.value}`}
                className={twMerge(
                  "text-gray-600",
                  currentTab === tab.value && "font-medium text-gray-800",
                )}
              >
                {tab.value}
              </NavLink>
            </li>
          ))}
        </ul>

        {location.pathname === "/qna" && <SearchInput type="text" />}
      </nav>

      <section>
        <ul>
          {filterData.length === 0 ? (
            <li className="flex min-h-52 flex-col items-center justify-center gap-3 rounded-2xl bg-gray-100 px-20 py-10">
              <ExclamationTriangleIcon className="size-10 text-gray-600" />
              <span className="font-medium text-gray-600">
                등록된 항목이 없습니다.
              </span>
            </li>
          ) : (
            filterData.map((data: Response) => (
              <li
                key={data.id}
                className="border-b border-gray-300 py-6 transition-colors first:border-t hover:bg-gray-50"
              >
                <Link
                  to={`/notice/${data.id}`}
                  className="flex flex-col items-start gap-6 sm:flex-row sm:items-center"
                >
                  <span className="w-24 truncate text-gray-600 sm:text-center">
                    {data.type}
                  </span>
                  <p className="max-w-full flex-1 truncate font-bold">
                    {data.title}
                  </p>
                  <span className="w-32 text-gray-600 sm:text-center">
                    {dateFormat(data.createdAt, "yy . MM . dd")}
                  </span>
                </Link>
              </li>
            ))
          )}
        </ul>

        <div className="mt-10 flex items-center">
          <Pagination
            pages={Math.ceil(noticeData.length / 8)}
            currentPage={currentPage}
          />
        </div>
      </section>
    </MainComponent>
  );
};

export default Notice;
