const MOCK_DATA = [
  {
    id: "1",
    type: "일반",
    title: "개인정보처리방침 변경 안내",
    createdAt: "2024-08-01T00:00:00Z",
  },
];

export type Response = {
  id: string;
  type: "일반" | "서비스" | "이벤트";
  title: string;
  createdAt: string;
};

export const fetchNotices = () => {
  return { data: MOCK_DATA as Response[] };
};
