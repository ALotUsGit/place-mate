import { MapPinIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const PlaceItem = ({ data }: any) => {
  return (
    <li>
      <Link to="/place">
        <div className="mb-4 overflow-hidden rounded-2xl">
          <img src={data.img} />
        </div>
        <div>
          <h3 className="truncate font-bold leading-none">{data.title}</h3>
          <p className="mb-4 mt-2 flex items-center gap-2">
            <MapPinIcon className="size-4 text-gray-800" />
            <span className="truncate text-sm/none">{data.loc}</span>
          </p>
          <div className="flex items-center gap-2">
            <p className="text-lg/none font-semibold">
              {data.price.toLocaleString()}원
            </p>
            <p className="text-sm/none font-light text-gray-600">
              <span>
                {data.standardHour}
                {data.standard === "hour" ? "시간" : "박"}
              </span>
              {data.standardPeople > 0 && (
                <span> / {data.standardPeople}명</span>
              )}
              {data.maxPeople > 0 && <span> / {data.maxPeople}명</span>}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
};
export default PlaceItem;
