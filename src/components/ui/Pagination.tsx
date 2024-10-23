import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type Props = {
  pages: number;
  currentPage: number;
};

const Pagination = ({ pages, currentPage }: Props) => {
  return (
    <div className="flex w-full items-center justify-center gap-2">
      <ChevronLeftIcon className="size-5 text-gray-300" />

      <div className="flex gap-2 text-gray-600">
        {Array.from({ length: pages }, (_, idx) => (
          <Link
            to=""
            key={idx}
            className={twMerge(
              "flex size-6 items-center justify-center rounded text-sm/none transition-colors hover:bg-gray-50",
              currentPage === idx + 1 &&
                "bg-indigo-50 text-indigo-600 hover:bg-indigo-100 hover:text-indigo-700",
            )}
          >
            {idx + 1}
          </Link>
        ))}
      </div>

      <ChevronRightIcon className="size-5 text-gray-300" />
    </div>
  );
};
export default Pagination;
