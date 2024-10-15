import { MapPinIcon } from "@heroicons/react/24/outline";

const LoadPlaceItem = () => {
  return (
    <li className="animate-pulse">
      <div className="h-48 mb-4 bg-gray-300 rounded-2xl"></div>
      <div>
        <div className="h-4 font-bold leading-none bg-gray-300 rounded-md"></div>
        <div className="h-4 mt-2 mb-4 bg-gray-300 rounded-md"></div>
        <div className="flex items-center gap-2 h-[1.125rem]">
          <p className="w-2/5 h-full bg-gray-300 rounded-md"></p>
          <p className="w-3/5 h-full bg-gray-300 rounded-md"></p>
        </div>
      </div>
    </li>
  );
};
export default LoadPlaceItem;
