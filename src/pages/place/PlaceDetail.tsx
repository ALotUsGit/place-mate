import {
  ChatBubbleBottomCenterTextIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DocumentCheckIcon,
  DocumentTextIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import MainComponent from "../../components/MainComponent";
import { useParams } from "react-router-dom";
import { useEffect, useId, useState } from "react";
import { Response, fetchPlace } from "../../requests/place/fetchPlace";
import PlaceDetailForm from "../../components/PlaceDetailForm";

type Params = {
  id: string | undefined;
};

const PlaceDetail = () => {
  const { id } = useParams<Params>();
  const [placeDetail, setPlaceDetail] = useState<Response>();

  const tagId = useId();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await fetchPlace({ placeId: id });
        setPlaceDetail(data);
      } catch (error) {
        console.error("데이터를 불러오는데 실패했습니다.", error);
      }
    };
    fetchData();
  }, []);

  return (
    <MainComponent className="mb-20 mt-10">
      <h2 className="text-4xl/none font-bold">{placeDetail?.title}</h2>

      <div className="mt-10 flex gap-20">
        <article className="flex flex-auto flex-col gap-10">
          <section className="flex flex-col gap-6">
            <div className="h-[30rem] overflow-hidden rounded-xl">
              <img
                src={placeDetail?.img}
                alt=""
                className="size-full object-cover object-center"
              />
            </div>
            <div>
              <button>
                <ChevronLeftIcon />
              </button>
              <ul className="flex gap-6">
                <li className="size-40 overflow-hidden rounded-xl">
                  <img
                    src={placeDetail?.img}
                    alt=""
                    className="size-full object-cover object-center"
                  />
                </li>
              </ul>
              <button>
                <ChevronRightIcon />
              </button>
            </div>
          </section>

          <section className="flex items-center gap-6">
            <div className="size-20 overflow-hidden rounded-full bg-gray-100">
              <img
                src={placeDetail?.hostProfile}
                alt={placeDetail?.hostId}
                className="size-full object-cover object-center"
              />
            </div>
            <div>
              <h3 className="mb-2 font-bold">{placeDetail?.hostId}</h3>
              <span className="flex items-center text-sm/none text-gray-600">
                호스트의 정보 <ChevronRightIcon className="size-4" />
              </span>
            </div>
          </section>

          <section className="flex flex-col gap-10">
            <ul className="flex gap-2">
              {placeDetail?.tags.map((tag) => (
                <li
                  key={tagId}
                  className="rounded bg-gray-200 px-3 py-2 text-sm/none text-gray-600"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <div>
              <h3 className="mb-6 flex items-center gap-2 text-lg/none font-bold">
                <DocumentTextIcon className="size-6" />
                장소 소개
              </h3>
              <p className="whitespace-break-spaces">
                {placeDetail?.placeInfo}
              </p>
            </div>

            <div>
              <h3 className="mb-6 flex items-center gap-2 text-lg/none font-bold">
                <MapPinIcon className="size-6" />
                위치 안내
              </h3>
            </div>

            <div>
              <h3 className="mb-6 flex items-center gap-2 text-lg/none font-bold">
                <DocumentCheckIcon className="size-6" />
                이용 규칙
              </h3>
              <p className="whitespace-break-spaces">{placeDetail?.rule}</p>
            </div>
          </section>

          <section>
            <h3 className="mb-6 flex items-center gap-2 text-lg/none font-bold">
              <ChatBubbleBottomCenterTextIcon className="size-6" />
              이용자 후기
            </h3>
          </section>

          <section>
            <h3 className="mb-6 flex items-center gap-2 text-lg/none font-bold">
              <QuestionMarkCircleIcon className="size-6" />
              Q&A
            </h3>
          </section>
        </article>

        <aside className="sticky top-28 flex h-fit w-2/5 flex-col gap-6 rounded-xl border border-gray-400 px-8 py-10">
          <div>
            <p className="mb-4">
              <span className="text-3xl">
                <strong className="font-bold">
                  {placeDetail?.price.toLocaleString()}
                </strong>
                원
              </span>
              {placeDetail?.weekendPrice && (
                <span className="text-2xl text-gray-600">
                  (주말{" "}
                  <strong className="font-semibold">
                    {placeDetail?.weekendPrice.toLocaleString()}
                  </strong>
                  원)
                </span>
              )}
            </p>
            <p className="leading-none text-gray-600">
              <span>
                최소 {placeDetail?.standardHour}
                {placeDetail?.standard === "hour" ? "시간" : "박"}
              </span>
              {placeDetail?.standardPeople && (
                <span> | 기준 인원 {placeDetail?.standardPeople}명</span>
              )}
              {placeDetail?.maxPeople && (
                <span> | 최대 인원 {placeDetail?.maxPeople}명</span>
              )}
            </p>
          </div>

          <PlaceDetailForm />
        </aside>
      </div>
    </MainComponent>
  );
};

export default PlaceDetail;
