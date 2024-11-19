const MOCK_DATA = {
  id: "1",
  userId: "aryeon",
  title: "대여 가능한 장소에 대한 문의",
  createdAt: "2024-08-01T00:00:00Z",
  private: true,
  content:
    "안녕하세요, 저는 다음 주에 친구들의 생일 파티를 계획하고 있습니다. \n\n저희는 약 15명 정도의 인원이 참석할 예정이며, 바비큐를 할 수 있는 야외 장소를 찾고 있습니다. \n제가 알고 있는 바로는 귀사에서 여러 가지 장소를 대여해주신다고 들었습니다. \n혹시 대여 가능한 장소 목록을 제공해 주실 수 있나요? \n또한, 해당 장소의 크기, 시설(바비큐 그릴, 테이블, 의자 등) 및 가격 정보를 알고 싶습니다. 가능하다면, 장소에 대한 사진도 함께 공유해 주시면 감사하겠습니다.",
  answer:
    "안녕하세요, aryeon님! 문의해 주셔서 감사합니다. \n원하시는 장소는 PLACE 페이지에서 인원, 장소타입, 기간 등을 필터링하시면 쉽게 찾을 수 있습니다. \n저희 플랫폼을 이용해주셔서 감사합니다.",
};

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
  return { data: MOCK_DATA as Response };
};
