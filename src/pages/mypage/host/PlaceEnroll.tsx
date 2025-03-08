import {
  ArrowsPointingOutIcon,
  CurrencyDollarIcon,
  DocumentCheckIcon,
  DocumentIcon,
  DocumentTextIcon,
  MapPinIcon,
  PhotoIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Button from "../../../components/ui/Button";
import UploadImg from "../../../components/ui/UploadImg";
import { Select } from "../../../components/ui/Select";
import { Textarea, TextareaLabel } from "../../../components/ui/Textarea";
import { Input, InputLabel, InputWrap } from "../../../components/ui/Input";
import Radio from "../../../components/ui/Radio";
import Checkbox from "../../../components/ui/Checkbox";
import useInput from "../../../hooks/useInput";
import useTextarea from "../../../hooks/useTextarea";

const placeKeyword = [
  { value: "filming", label: "촬영" },
  { value: "party", label: "파티" },
  { value: "performance", label: "공연" },
  { value: "meeting", label: "회의" },
  { value: "lodging", label: "숙박" },
  { value: "park", label: "주차" },
  { value: "animal", label: "애완동물" },
  { value: "naturalLight", label: "자연광" },
  { value: "classroom", label: "교실" },
  { value: "gym", label: "체육관" },
  { value: "hanok", label: "한옥" },
  { value: "horror", label: "호러" },
  { value: "wedding", label: "웨딩" },
  { value: "loop", label: "루프탑" },
  { value: "bbq", label: "바베큐" },
];

const PlaceEnroll = () => {
  const [title, onChangeTitle] = useInput("");
  const [introduce, onChangeIntroduce] = useTextarea("");

  return (
    <>
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-4xl/none font-semibold">
          장소 등록<span className="font-normal">/</span>관리
        </h2>
        <Button size="md">임시저장 (0)</Button>
      </div>

      <form action="" className="flex flex-col gap-10">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <DocumentIcon className="size-6" />
            <p className="text-lg/none font-bold">
              장소 제목
              <span className="font-normal text-rose-600"> *</span>
            </p>
          </div>
          <InputWrap>
            <Input
              placeholder="제목을 입력하세요."
              maxLength={100}
              value={title}
              onChange={onChangeTitle}
            />
            <InputLabel icon={false}>{title.length} / 최대 100자</InputLabel>
          </InputWrap>
        </div>

        <div>
          <div className="mb-4 flex items-center gap-2">
            <TagIcon className="size-6" />
            <p className="text-lg/none font-bold">장소 키워드</p>
          </div>

          <Select
            lists={placeKeyword}
            checkbox={true}
            className="max-w-3xl"
            ulClass="flex-row flex-wrap gap-4 px-6 py-4 w-full"
            listClass="w-fit hover:bg-transparent p-0"
          >
            해당하는 값들을 선택하세요.
          </Select>
        </div>

        <div>
          <div className="mb-4 flex items-center gap-2">
            <ArrowsPointingOutIcon className="size-6" />
            <p className="text-lg/none font-bold">면적 및 층수</p>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-gray-600">지상</p>
              <div className="flex items-center gap-2">
                <Input placeholder="0" inputClass="w-32" />
                <span className="text-gray-600">층</span>
                <Input placeholder="0" inputClass="w-32" />
                <span className="text-gray-600">m²</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-gray-600">지하</p>
              <div className="flex items-center gap-2">
                <Input placeholder="0" inputClass="w-32" />
                <span className="text-gray-600">층</span>
                <Input placeholder="0" inputClass="w-32" />
                <span className="text-gray-600">m²</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-4 flex items-center gap-2">
            <DocumentTextIcon className="size-6" />
            <p className="text-lg/none font-bold">
              장소 소개
              <span className="font-normal text-rose-600"> *</span>
            </p>
          </div>
          <Textarea
            placeholder="장소에 대해 소개 해주세요."
            value={introduce}
            onChange={onChangeIntroduce}
          >
            <TextareaLabel icon={false}>
              {introduce.length} / 최소 10자
            </TextareaLabel>
          </Textarea>
        </div>

        <div>
          <div className="mb-4 flex items-center gap-2">
            <PhotoIcon className="size-6" />
            <p className="text-lg/none font-bold">
              장소 사진 <span className="font-semibold">(최대 20장)</span>
              <span className="font-normal text-rose-600"> *</span>
            </p>
          </div>
          <UploadImg max={20}>최소 1장 이상 업로드 해주세요.</UploadImg>
        </div>

        <div>
          <div className="mb-4 flex items-center gap-2">
            <MapPinIcon className="size-6" />
            <p className="text-lg/none font-bold">
              위치 안내
              <span className="font-normal text-rose-600"> *</span>
            </p>
          </div>

          <div className="flex gap-3">
            <Button className="h-auto">주소검색</Button>
            <Input placeholder="" disabled inputClass="w-96" />
            <Input placeholder="상세 주소를 입력 해주세요." inputClass="w-96" />
          </div>
        </div>

        <div>
          <div className="mb-4 flex items-center gap-2">
            <DocumentCheckIcon className="size-6" />
            <p className="text-lg/none font-bold">이용 규칙</p>
          </div>
          <Textarea placeholder="게스트에게 전달할 이용 규칙을 입력하세요." />
        </div>

        <div>
          <div className="mb-4 flex items-center gap-2">
            <UserGroupIcon className="size-6" />
            <p className="text-lg/none font-bold">인원</p>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-gray-600">기준인원</p>
              <div className="flex items-center gap-2">
                <Input placeholder="0" inputClass="w-32" />
                <span className="text-gray-600">명</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-gray-600">최대인원</p>
              <div className="flex items-center gap-2">
                <Input placeholder="0" inputClass="w-32" />
                <span className="text-gray-600">명</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-4 flex items-center gap-2">
            <CurrencyDollarIcon className="size-6" />
            <p className="text-lg/none font-bold">
              이용금액
              <span className="font-normal text-rose-600"> *</span>
            </p>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 pr-6">
                <p className="mr-auto font-semibold text-gray-600">기본금액</p>
                <Radio>시간당</Radio>
                <Radio>1박당</Radio>
              </div>
              <div className="flex items-center gap-2">
                <Input placeholder="0" inputClass="w-60" />
                <span className="text-gray-600">원</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 pr-6">
                <p className="mr-auto font-semibold text-gray-600">주말 금액</p>
                <Checkbox>평일과 동일</Checkbox>
              </div>
              <div className="flex items-center gap-2">
                <Input placeholder="0" inputClass="w-60" />
                <span className="text-gray-600">원</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="mr-auto font-semibold text-gray-600">
                인원 추가 금액
              </p>
              <div className="flex items-center gap-2">
                <Input placeholder="0" inputClass="w-60" />
                <span className="text-gray-600">원 (인당)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2">
          <Button variant="primary" size="md">
            등록
          </Button>
          <Button size="md">임시저장</Button>
          <Button size="md">취소</Button>
        </div>
      </form>
    </>
  );
};
export default PlaceEnroll;
