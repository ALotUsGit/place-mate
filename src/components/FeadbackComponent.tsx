import { StarIcon } from "@heroicons/react/24/outline";
import { QnARes } from "../requests/place/fetchPlaceQnA";
import { ReviewsRes } from "../requests/place/fetchPlaceReviews";
import { dateFormat } from "../utils/dateFormat";
import { twMerge } from "tailwind-merge";

type Props = {
  data: QnARes | ReviewsRes;
};

const FeadbackComponent = ({ data }: Props) => {
  return (
    <div className="flex flex-col gap-3 border-b border-gray-300 pb-6">
      <div className="flex items-center gap-2">
        <h4 className="font-medium">{data.userId}</h4>
        <span className="text-xs text-gray-600">
          {dateFormat(data.createdAt, "yy . MM . dd")}
        </span>
        <div className="ml-auto flex gap-1">
          {"score" in data &&
            new Array(5)
              .fill(null)
              .map((_, idx) => (
                <StarIcon
                  className={twMerge(
                    "size-4 text-yellow-400",
                    data.score > idx && "fill-yellow-400",
                  )}
                />
              ))}
        </div>
      </div>

      <p className="whitespace-break-spaces text-gray-600">
        {"question" in data ? data.question : data.review}
      </p>

      {data.answer && (
        <div className="flex flex-col gap-2 rounded-lg bg-gray-100 px-6 py-4">
          <h4 className="font-medium">호스트 답변</h4>
          <p className="whitespace-break-spaces text-gray-600">{data.answer}</p>
        </div>
      )}
    </div>
  );
};

export default FeadbackComponent;
