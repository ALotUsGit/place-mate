const MOCK_DATA = [
  {
    id: "1",
    userId: "user1",
    createdAt: "2024-08-01T00:00:00Z",
    review:
      "한옥에서 촬영한 웨딩 사진이 정말 멋졌습니다!\n전통적인 느낌과 현대적인 시설이 잘 어우러져 있어서 가족 모두 만족했어요. 친절한 호스트 덕분에 더 좋은 시간을 보냈습니다.",
    answer:
      "감사합니다, OOO 고객님!\n한옥의 전통적인 매력을 마음에 들어 하셔서 기쁩니다.\n다음에도 특별한 순간을 함께할 수 있길 기대합니다 ☺️",
    score: 4,
  },
];

export type ReviewsRes = {
  id: string;
  userId: string;
  createdAt: string;
  review: string;
  answer: string;
  score: number;
};

type Props = {
  placeId: string | undefined;
};

export const fetchPlaceReviews = ({ placeId }: Props) => {
  return { data: MOCK_DATA as ReviewsRes[] };
};
