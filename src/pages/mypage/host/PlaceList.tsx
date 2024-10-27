import {
  CalendarIcon,
  ExclamationTriangleIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Button from "../../../components/ui/Button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  fetchPlaceList,
  Response,
} from "../../../requests/mypage/fetchPlaceList";
import PlaceItem from "../../../components/PlaceItem";

const PlaceList = () => {
  const [placeData, setPlaceData] = useState<Response[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await fetchPlaceList();
        console.log(data);
        setPlaceData(data);
      } catch (error) {
        console.error("데이터를 불러오는데 실패했습니다.", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-4xl/none font-semibold">
          장소 등록<span className="font-normal">/</span>관리
        </h2>
        <Link to="/host/placeEnroll">
          <Button size="md">신규 등록</Button>
        </Link>
      </div>
      <ul className="grid grid-cols-4 gap-6">
        {placeData.length === 0 ? (
          <li className="col-span-full flex min-h-52 flex-col items-center justify-center gap-3 rounded-2xl bg-gray-100 px-20 py-10">
            <ExclamationTriangleIcon className="size-10 text-gray-600" />
            <span className="font-medium text-gray-600">
              등록된 항목이 없습니다.
            </span>
          </li>
        ) : (
          placeData.map((data) => (
            <li>
              <PlaceItem key={data.id} data={data} />
              <div className="mt-6 flex gap-2">
                <button>
                  <CalendarIcon className="size-6" />
                </button>
                <button>
                  <PencilSquareIcon className="size-6" />
                </button>
                <button>
                  <TrashIcon className="size-6" />
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default PlaceList;
