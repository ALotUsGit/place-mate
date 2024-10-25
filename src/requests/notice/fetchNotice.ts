const MOCK_DATA = [
  {
    id: "1",
    type: "일반",
    title: "개인정보처리방침 변경 안내",
    createdAt: "2024-08-01T00:00:00Z",
    content:
      "PLACE MATE를 이용해 주셔서 감사합니다. \n아래와 같이 개인정보처리방침을 개정하여 안내 드립니다. \n\n가. 주요 개정 내용 \n- 개인정보의 파기절차 및 파기방법 \n - 정보주체와 법정대리인의 권리 의무 및 그 행사방법에 관한 사항 \n\n 개인정보처리방침의 변경에 관한 사항 \n이 개인정보 처리방침은 2024년 10월 31일부터 적용됩니다.",
  },
];

export type Response = {
  id: string;
  type: string;
  title: string;
  createdAt: string;
  content: string;
};

export const fetchNotice = () => {
  return { data: MOCK_DATA as Response[] };
};
