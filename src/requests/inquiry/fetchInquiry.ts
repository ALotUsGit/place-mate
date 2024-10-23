const MOCK_DATA = [
  {
    id: "1",
    userId: "aryeon",
    title: "질문이있어요",
    createdAt: "2024-08-01T00:00:00Z",
    private: true,
    content: "",
    answer: "",
  },
];

export type Response = {
  id: string;
  userId: string;
  title: string;
  createdAt: string;
  private: boolean;
  content: string;
  answer: string;
};

export const fetchInquiry = () => {
  return { data: MOCK_DATA as Response[] };
};
