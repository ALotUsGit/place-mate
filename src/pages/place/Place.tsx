import { useEffect, useState } from "react";
import { Response, fetchPlaces } from "../../requests/place/fetchPlaces";

import MainComponent from "../../components/MainComponent";
import PlaceItem from "../../components/PlaceItem";
import LoadPlaceItem from "../../components/loading/LoadPlceItem";
import { Link, NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import {
  AdjustmentsVerticalIcon,
  ArrowsUpDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import Button from "../../components/ui/Button";
import { SearchInput } from "../../components/ui/Input";
import { Select } from "../../components/ui/Select";

const Tabs = ["popular", "new"];

const Place = () => {
  const [loading, setLoding] = useState(true);
  const [placeData, setPlaceData] = useState<Response[]>([]);

  const purposeList = [
    {
      value: "filming",
      label: "촬영",
    },
    {
      value: "party",
      label: "파티",
    },
    {
      value: "performance",
      label: "공연",
    },
    {
      value: "meeting",
      label: "회의",
    },
    {
      value: "lodging",
      label: "숙박",
    },
  ];

  const sorting = [
    {
      value: "recommended",
      label: "추천순",
    },
    {
      value: "reviews",
      label: "리뷰 많은 순",
    },
    {
      value: "rated",
      label: "평점 높은 순",
    },
    {
      value: "newest",
      label: "최신순",
    },
    {
      value: "oldest",
      label: "오랜된순",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await fetchPlaces();
        console.log(data);
        setPlaceData(data);
      } catch (error) {
        console.error("데이터를 불러오는데 실패했습니다.", error);
      } finally {
        setLoding(false);
      }
    };
    fetchData();
  }, []);

  return (
    <MainComponent className="mb-20 mt-10">
      <section>
        <div className="mb-6 flex items-center gap-4">
          {Tabs.map((tab) => (
            <NavLink
              key={tab}
              to={`/place?tab=${tab}`}
              className={twMerge(
                "last:padding border-r border-gray-400 pr-4 text-2xl/none font-light text-gray-400 last:border-none",
              )}
            >
              {tab.toUpperCase()}
            </NavLink>
          ))}
        </div>
        <ul className="grid grid-cols-5 gap-x-10">
          {loading ? (
            <LoadPlaceItem />
          ) : (
            placeData.map((data) => (
              <li key={data.id}>
                <Link to="/place">
                  <PlaceItem data={data} />
                </Link>
              </li>
            ))
          )}
        </ul>
      </section>

      <SearchInput
        placeholder="어떤 공간을 찾고 계신가요?"
        className="mx-auto mt-20 gap-4 rounded-full px-10 py-5 text-xl sm:w-4/5"
        inputClass="text-xl/none"
        iconSize="size-8"
      />

      <section className="mb-20">
        <div className="sticky top-[2.8125rem] mb-6 mt-16 flex gap-3 bg-white py-4 2xl:top-[4.48rem]">
          <Select lists={purposeList} checkbox={true}>
            사용목적
          </Select>

          <Button>
            <AdjustmentsVerticalIcon className="size-4" />
            필터
          </Button>

          <Select
            lists={sorting}
            checkbox={false}
            dropdown={false}
            className="ml-auto"
          >
            <ArrowsUpDownIcon className="size-4" /> 추천순
          </Select>
        </div>

        <ul className="mb-16 grid grid-cols-5 gap-x-10 gap-y-14">
          {loading ? (
            <LoadPlaceItem />
          ) : (
            placeData.map((data) => (
              <li key={data.id}>
                <Link to="/place">
                  <PlaceItem data={data} />
                </Link>
              </li>
            ))
          )}
        </ul>

        <Button size="md" className="mx-auto">
          더보기
        </Button>
      </section>

      <section>
        <h2 className="text-center text-4xl font-bold">
          장소 등록을 원하시나요?
        </h2>

        <div className="mt-10 flex h-80 items-center justify-center overflow-hidden rounded-2xl bg-gray-200">
          <Link to="/mypage">
            <Button size="md">
              장소 등록 바로가기 <ChevronRightIcon className="size-4" />
            </Button>
          </Link>
        </div>
      </section>
    </MainComponent>
  );
};
export default Place;
