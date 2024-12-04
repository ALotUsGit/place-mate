import { ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";
import Button from "./ui/Button";
import { Input } from "./ui/Input";
import Calendar from "./ui/Calendar";

type Props = {
  standardPeople?: number;
  maxPeople?: number;
};
const PlaceDetailForm = ({ standardPeople, maxPeople }: Props) => {
  return (
    <form action="" className="flex flex-col gap-6">
      <div>
        <p className="mb-4 font-bold">이용일시</p>
        <Calendar />
      </div>
      <div>
        <p className="mb-4 font-bold">총인원</p>
        <Input
          placeholder="총인원 수를 입력하세요."
          type="number"
          defaultValue={standardPeople}
          min={standardPeople}
          max={maxPeople}
        />
      </div>
      <div className="flex gap-3">
        <Button variant="secondary" size="lg" disabled>
          예약
        </Button>
        <Button className="size-16 flex-shrink-0">
          <ArrowUpOnSquareIcon className="size-6 h-full" />
        </Button>
      </div>
    </form>
  );
};
export default PlaceDetailForm;
