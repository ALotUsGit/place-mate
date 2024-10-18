import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const FAQ_LISTS = [
  {
    question: "호스트로 공간을 등록하려면 어떻게 하나요?",
    anwers:
      "로그인 후 '장소 등록' 메뉴를 선택하고 필요한 정보를 입력하면 됩니다. 공간의 사진, 설명, 가격 등을 자세히 기재할 수록 상단에 노출될 확률이 높습니다.",
  },
  {
    question: "예약 가능한 공간을 어떻게 찾을 수 있나요?",
    anwers:
      "'PLACE' 페이지에서 검색 바를 사용하거나 필터를 설정하여 지역, 목적, 크기, 가격 등을 기준으로 원하는 공간을 쉽게 찾을 수 있습니다.",
  },
  {
    question: "예약 후 취소는 어떻게 하나요?",
    anwers:
      "마이페이지 예약 내역에서 취소하고자 하는 예약을 선택한 후, '예약 취소' 버튼을 클릭하면 됩니다. 취소 정책에 따라 일부 수수료가 발생할 수 있습니다.",
  },
  {
    question: "리뷰는 어떻게 남기나요?",
    anwers:
      "이용이 완료된 후, 내 예약 내역에서 해당 공간을 선택하고 리뷰를 작성할 수 있는 옵션이 나타납니다. 별점과 함께 의견을 남겨주세요.",
  },
  {
    question: "결제는 어떻게 이루어지나요?",
    anwers:
      " 예약 시 결제 정보를 입력하고 신용카드 또는 기타 결제 수단을 통해 결제할 수 있습니다. 모든 결제는 안전하게 처리됩니다.",
  },
  {
    question: "공간 이용 중 문제가 발생하면 어떻게 해야 하나요?",
    anwers:
      "고객 지원 메뉴에서 Q&A를 통해 질문을 남기거나, 제공된 연락처로 직접 문의하시면 신속하게 도와드리겠습니다.",
  },
  {
    question: "게스트와 호스트 역할을 동시에 가질 수 있나요?",
    anwers:
      "네, 하나의 계정으로 게스트와 호스트 역할을 모두 가질 수 있습니다. 프로필 관리에서 장소를 등록하는 것 만으로도 호스트가 될 수 있습니다.",
  },
  {
    question: "특정 시설이 있는 공간을 찾으려면 어떻게 해야 하나요?",
    anwers:
      "검색 시 필터 옵션에서 원하는 시설(예: 주차, 와이파이, 에어컨 등)을 선택하면 해당 시설이 있는 공간만 검색됩니다.",
  },
];

const Faq = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const onClcikHandler = (idx: number) => {
    activeIdx === idx ? setActiveIdx(null) : setActiveIdx(idx);
  };

  return (
    <section>
      <ul>
        {FAQ_LISTS.map((list, idx) => (
          <li
            key={idx}
            className="border-b border-gray-300 px-6 py-8 first:border-t"
          >
            <h3
              className="flex cursor-pointer items-center justify-between text-lg/none font-semibold"
              onClick={() => onClcikHandler(idx)}
            >
              {list.question}
              <ChevronDownIcon
                className={twMerge(
                  "size-8 text-gray-600",
                  activeIdx === idx && "rotate-180",
                )}
              />
            </h3>
            <div
              className={twMerge("mt-4 hidden", activeIdx === idx && "block")}
            >
              {list.anwers}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Faq;
