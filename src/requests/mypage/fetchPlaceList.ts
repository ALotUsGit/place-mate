const MOCK_DATA = [
  {
    id: "1",
    img: "/images/sample1.jpg",
    title: "샘플 공간",
    loc: "경기 성남시 분당구 판교역로 166",
    price: 56000,
    standard: "hour",
    standardHour: 1,
    standardPeople: 4,
    maxPeople: 8,
  },
];

export type Response = {
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

export const fetchPlaceList = () => {
  return { data: MOCK_DATA as Response[] };
};
