const MOCK_DATA = [
  {
    id: "0",
    title: "쉬는 공간",
    loc: "서울시 관악구 신림로 123길 123-11",
    price: 123678,
    minHour: 1,
    minDate: false,
    standardPerson: 4,
    maxPerson: 8,
  },
];

type Response = {
  id: string;
  title: string;
  loc: string;
  price: number;
  minHour: number;
  minDate: boolean;
  standardPerson: number;
  maxPerson: number;
};

export const fetchPlaces = () => {
  return { data: MOCK_DATA as Response[] };
};
