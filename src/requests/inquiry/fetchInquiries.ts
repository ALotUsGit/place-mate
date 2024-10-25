const MOCK_DATA = [
  {
    id: "1",
    userId: "aryeon",
    title: "대여 가능한 장소에 대한 문의",
    createdAt: "2024-08-01T00:00:00Z",
    private: true,
  },
];

export type Response = {
  id: string;
  userId: string;
  title: string;
  createdAt: string;
  private: boolean;
};

export const fetchInquiries = () => {
  return { data: MOCK_DATA as Response[] };
};
