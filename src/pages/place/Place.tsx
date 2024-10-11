import { useEffect, useState } from "react";
import { Response, fetchPlaces } from "../../requests/place/fetchPlaces";

import MainComponent from "../../components/MainComponent";
import PlaceItem from "../../components/PlaceItem";
import LoadPlaceItem from "../../components/loading/LoadPlceItem";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import {
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Button from "../../components/form/Button";

const Tabs = ["popular", "new"];

const Place = () => {
  const [loading, setLoding] = useState(true);
  const [placeData, setPlaceData] = useState<Response[]>([]);

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
    <MainComponent className="mt-10 mb-20">
      <section>
        <div className="flex items-center gap-4 mb-6">
          {Tabs.map((tab) => (
            <NavLink
              key={tab}
              to={`/place?tab=${tab}`}
              className={twMerge(
                "pr-4 text-gray-400 text-2xl/none font-light border-r border-gray-400 last:padding last:border-none"
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
            placeData.map((data) => <PlaceItem key={data.id} data={data} />)
          )}
        </ul>
      </section>

      <div className="flex items-center gap-4 my-20 mx-auto py-5 px-10 w-4/5 border border-gray-400 rounded-full">
        <input
          type="text"
          placeholder="어떤 공간을 찾고 계신가요?"
          className="flex-1 p-0 text-xl/none border-0 focus:ring-transparent placeholder:text-gray-400"
        />
        <MagnifyingGlassIcon className="size-6" />
      </div>

      <section className="mb-20">
        <div className="flex gap-3">
          <Button>사용목적</Button>
          <Button>필터</Button>
          <Button className="ml-auto">추천순</Button>
        </div>

        <ul className="grid grid-cols-5 gap-x-10 gap-y-14 mt-10 mb-16">
          {loading ? (
            <LoadPlaceItem />
          ) : (
            placeData.map((data) => <PlaceItem key={data.id} data={data} />)
          )}
        </ul>

        <Button className="mx-auto">더보기</Button>
      </section>

      <section>
        <h2 className="text-4xl text-center font-bold">
          장소 등록을 원하시나요?
        </h2>

        <div className="overflow-hidden flex justify-center items-center h-80 mt-10 bg-gray-200 rounded-2xl">
          <Button>
            장소 등록 바로가기 <ChevronRightIcon className="size-4" />
          </Button>
        </div>
      </section>
    </MainComponent>
  );
};
export default Place;
