import MainComponent from "../../components/MainComponent";
import PlaceItem from "../../components/PlaceItem";

import sample1 from "/images/sample1.jpg";

const MOCK_DATA: Response[] = [
  {
    id: "1",
    img: sample1,
    title: "샘플 공간",
    loc: "경기 성남시 분당구 판교역로 166",
    price: 56000,
    standard: "hour",
    standardHour: 1,
    standardPeople: 4,
    maxPeople: 8,
  },
];

type Response = {
  id: string;
  img: string;
  title: string;
  loc: string;
  price: number;
  standard: "hour" | "stay";
  standardHour: number;
  standardPeople: number;
  maxPeople: number;
};

const Place = () => {
  return (
    <MainComponent>
      <section>
        <ul className="grid grid-cols-5 gap-x-10">
          {MOCK_DATA.map((data) => (
            <PlaceItem key={data.id} data={data} />
          ))}
        </ul>
      </section>
    </MainComponent>
  );
};
export default Place;
