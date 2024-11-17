const MOCK_DATA = [
  {
    id: "1",
    userId: "user1",
    createdAt: "2024-08-01T00:00:00Z",
    question:
      "주차 공간이 따로 있나요? 차량 두 대 정도 이용할 예정인데, 주차 가능 여부를 알고 싶습니다.",
    answer:
      "안녕하세요, OOO님! 한옥 스튜디오 근처에 유료 주차장이 있지만, 공간 내 전용 주차장은 없습니다.\n주변 공영 주차장을 이용해주시면 감사하겠습니다.",
  },
  {
    id: "2",
    userId: "user2",
    createdAt: "2024-08-02T00:00:00Z",
    question:
      "장소 이용 시 음식물 반입이 가능한가요?\n아니면 간단한 다과 정도는 허용이 되나요?",
    answer: "",
  },
  {
    id: "3",
    userId: "user3",
    createdAt: "2024-08-02T00:00:00Z",
    question:
      "인원 수가 최대 몇 명까지 수용 가능한가요? 저희는 15명 정도 모임을 계획 중인데, 공간이 넉넉할까요?",
    answer: "",
  },
];

export type QnARes = {
  id: string;
  userId: string;
  createdAt: string;
  question: string;
  answer: string;
};

type Props = {
  placeId: string | undefined;
};

export const fetchPlaceQnA = ({ placeId }: Props) => {
  return { data: MOCK_DATA as QnARes[] };
};
