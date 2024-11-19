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
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";
import Button from "../../components/ui/Button";
import FeadbackComponent from "../../components/FeadbackComponent";
import Pagination from "../../components/ui/Pagination";
import {
  ReviewsRes,
  fetchPlaceReviews,
} from "../../requests/place/fetchPlaceReviews";
import { QnARes, fetchPlaceQnA } from "../../requests/place/fetchPlaceQnA";

type Params = {
  id: string | undefined;
};

const PlaceDetail = () => {
  const { id } = useParams<Params>();
  const [placeDetail, setPlaceDetail] = useState<Response>();
  const [reviews, setReviews] = useState<ReviewsRes[]>();
  const [qnas, setQnas] = useState<QnARes[]>();

  const tagId = useId();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await fetchPlace({ placeId: id });
        const { data: Reviews } = await fetchPlaceReviews({ placeId: id });
        const { data: Qnas } = await fetchPlaceQnA({ placeId: id });
        setPlaceDetail(data);
        setReviews(Reviews);
        setQnas(Qnas);
      } catch (error) {
        console.error("데이터를 불러오는데 실패했습니다.", error);
      }
    };
    fetchData();
  }, []);

  return (
    <MainComponent className="mb-20 mt-10">
      <h2 className="text-4xl/none font-bold">{placeDetail?.title}</h2>

      <div className="mt-10 flex gap-10 2xl:gap-20">
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
              <Map
                center={{ lat: 33.450701, lng: 126.570667 }}
                className="h-96 rounded-lg"
                level={3}
              >
                <CustomOverlayMap
                  position={{ lat: 33.450701, lng: 126.570667 }}
                >
                  <span className="absolute bottom-[160%] left-1/2 -translate-x-1/2 rounded bg-gray-900 px-2 py-1 text-xs text-gray-100">
                    {placeDetail?.title}
                  </span>
                  <div className="size-3 rounded-full border-2 border-gray-900 bg-white" />
                </CustomOverlayMap>
              </Map>
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
            <div className="flex flex-col gap-6">
              {reviews?.map((review) => (
                <FeadbackComponent key={review.id} data={review} />
              ))}
              <Pagination pages={1} currentPage={1} />
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between gap-4">
              <h3 className="mb-6 flex items-center gap-2 text-lg/none font-bold">
                <QuestionMarkCircleIcon className="size-6" />
                Q&A
              </h3>
              <Button>문의하기</Button>
            </div>
            <div className="flex flex-col gap-6">
              {qnas?.map((qna) => (
                <FeadbackComponent key={qna.id} data={qna} />
              ))}
              <Pagination pages={1} currentPage={1} />
            </div>
          </section>
        </article>

        <aside className="sticky top-28 flex h-fit w-2/5 max-w-md flex-col gap-6 rounded-xl border border-gray-400 px-8 py-10">
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

          <PlaceDetailForm
            standardPeople={placeDetail?.standardPeople}
            maxPeople={placeDetail?.maxPeople}
          />
        </aside>
      </div>
    </MainComponent>
  );
};

export default PlaceDetail;
