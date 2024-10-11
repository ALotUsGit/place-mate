import { MapPinIcon } from "@heroicons/react/24/outline";

const PlaceItem = ({ data }: any) => {
  return (
    <li>
      <div className="overflow-hidden rounded-2xl mb-4">
        <img src={data.img} />
      </div>
      <div>
        <h3 className="font-bold leading-none truncate">{data.title}</h3>
        <p className="flex items-center gap-2 mt-2 mb-4">
          <MapPinIcon className="size-4 text-gray-800" />
          <span className="text-sm/none truncate">{data.loc}</span>
        </p>
        <div className="flex items-center gap-2">
          <p className="text-lg/none font-semibold">
            {data.price.toLocaleString()}원
          </p>
          <p className="text-gray-600 text-sm/none font-light">
            <span>
              {data.standardHour}
              {data.standard === "hour" ? "시간" : "박"}
            </span>
            {data.standardPeople > 0 && <span> / {data.standardPeople}명</span>}
            {data.maxPeople > 0 && <span> / {data.maxPeople}명</span>}
          </p>
        </div>
      </div>
    </li>
  );
};
export default PlaceItem;
