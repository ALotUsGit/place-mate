const MOCK_DATA = {
  id: "1",
  img: "/images/sample1.jpg",
  title: "샘플 공간",
  loc: "경기 성남시 분당구 판교역로 166",
  price: 56000,
  standard: "hour",
  standardHour: 1,
  standardPeople: 4,
  maxPeople: 8,
  hostId: "HOST NAME",
  hostProfile: "",
  tags: ["한국적인", "한옥", "소규모", "가족"],
  placeInfo:
    "서울 도심 속에서 전통적인 한옥의 매력을 느낄 수 있는 공간입니다.\n내부는 고급스럽고 아늑한 분위기를 자아내며, 가족 모임, 사진 촬영, 소규모 워크숍 등에 적합합니다.\n특히 천장이 높아 개방감이 크고, 따뜻한 조명과 전통적인 가구가 조화를 이룹니다.\n방문객들은 옛날의 한옥 문화를 체험하며 편안한 시간을 보낼 수 있습니다.",
  rule: "· 음식물 반입 금지\n· 실내 흡연 금지\n· 애완동물 동반 금지\n· 예약 시간 준수\n· 이용 후 정리 정돈 필수\n· 행사 소음 규제 (저녁 9시 이후 소음 금지)\n· 쓰레기 분리수거 필수\n· 화재 경보 장치 훼손 금지\n· 추가 시간 이용 시 사전 문의 필수\n· 주변 이웃 배려 필수",
};

export type Response = {
  id: string;
  img: string;
  title: string;
  loc: string;
  price: number;
  weekendPrice: number;
  standard: "hour" | "stay";
  standardHour: number;
  standardPeople: number;
  maxPeople: number;
  hostId: string;
  hostProfile: string;
  tags: string[];
  placeInfo: string;
  rule: string;
};

type Props = {
  placeId: string | undefined;
};

export const fetchPlace = ({ placeId }: Props) => {
  return { data: MOCK_DATA as Response };
};
