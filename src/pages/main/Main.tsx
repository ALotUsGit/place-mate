import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

import Button from "../../components/form/Button";

import "../../css/animation.css";

// img
import Banner from "../../assets/images/banner.png";
import Search from "../../assets/images/search.png";
import Reservation from "../../assets/images/reservation.png";
import Review from "../../assets/images/review.png";
import sample1 from "/images/sample13.jpg";
import sample2 from "/images/sample20.jpg";
import sample3 from "/images/sample22.jpg";
import sample4 from "/images/sample17.jpg";
import sample5 from "/images/sample21.jpg";
import sample6 from "/images/sample6.jpg";
import sample7 from "/images/sample5.jpg";
import sample8 from "/images/sample23.jpg";
import MainComponent from "../../components/MainComponent";

const Main = () => {
  const marquee1 = [sample1, sample2, sample3, sample4, sample5, sample6];
  const marquee2 = [sample2, sample6, sample7, sample1, sample8, sample3];

  return (
    <MainComponent className="mx-0 mb-40 mt-[7.5rem] flex max-w-full flex-col gap-40 px-0">
      <section className="mx-auto w-full max-w-screen-2xl px-20 2xl:px-0">
        <h2 className="text-center text-4xl">
          언제 어디서나 <strong>완벽한 장소</strong>를 찾아보세요!
        </h2>
        <p className="mb-10 mt-3 text-center text-2xl tracking-tight text-gray-600">
          당신만의 특별한 공간을 찾아드립니다.
        </p>

        <div>
          <img src={Banner} alt="banner" className="w-full" />
        </div>
      </section>

      <section className="mx-auto w-full max-w-screen-2xl px-20 2xl:px-0">
        <h2 className="text-center text-4xl font-bold">
          PLACE MATE의 특별한 기능
        </h2>
        <p className="mb-20 mt-10 text-center text-gray-600">
          맞춤형 장소 검색, 실시간 예약 시스템, 사용자 리뷰 기반 추천 기능을{" "}
          <br />
          통해 사용자가 원하는 조건에 맞는 최적의 공간을 빠르게 찾고 예약하세요!
        </p>

        <div className="mx-auto flex w-4/5 flex-col gap-10 md:w-full">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-16">
            <div>
              <img src={Search} alt="맞춤형 장소 검색" className="w-full" />
            </div>

            <div>
              <p className="text-lg text-gray-600">Search</p>
              <h3 className="mb-8 mt-4 text-2xl font-bold">맞춤형 장소 검색</h3>
              <p className="text-gray-600">
                필요한 용도에 맞는 장소를 손쉽게 찾을 수 있도록 다양한 필터와
                검색 기능을 제공합니다. <br />
                지역, 목적, 크기, 가격 등 원하는 조건에 맞는 공간을 빠르게
                찾아보세요.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-16">
            <div className="md:order-1">
              <img
                src={Reservation}
                alt="실시간 예약 시스템"
                className="w-full"
              />
            </div>

            <div>
              <p className="text-lg text-gray-600">Reservation</p>
              <h3 className="mb-8 mt-4 text-2xl font-bold">
                실시간 예약 시스템
              </h3>
              <p className="text-gray-600">
                실시간 예약 확인 및 즉시 예약 가능! <br />
                장소의 사용 가능 여부를 실시간으로 확인하고, 원하는 시간에
                원하는 장소를 확보하세요.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-16">
            <div>
              <img
                src={Review}
                alt="사용자 리뷰 기반 추천"
                className="w-full"
              />
            </div>

            <div>
              <p className="text-lg text-gray-600">Review</p>
              <h3 className="mb-8 mt-4 text-2xl font-bold">
                사용자 리뷰 기반 추천
              </h3>
              <p className="text-gray-600">
                다른 사용자의 리뷰와 평점을 통해 신뢰할 수 있는 장소를
                선택하세요. <br />
                실제 이용자들이 남긴 솔직한 리뷰로 더 나은 선택을 할 수
                있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-100">
        <div className="mx-auto flex max-w-screen-2xl flex-col gap-12 overflow-hidden py-[7.5rem] md:h-[80vh] md:flex-row md:gap-32 md:px-20 md:py-0 2xl:px-0">
          <div className="flex min-w-fit flex-col gap-6 px-20 md:px-0 md:py-[7.5rem]">
            <h2 className="text-4xl font-bold leading-normal">
              다양한 장소, <br />
              무한한 가능성
            </h2>

            <p className="text-gray-600">
              촬영 스튜디오, 파티 공간, 공연장, 회의실, 숙박까지.
              <br />
              당신이 원하는 모든 장소를 PLACE MATE에서 한눈에 확인하세요!
              <br />
              사용 목적에 맞는 최적의 장소를 손쉽게 검색하고 예약하세요.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
            <div className="flex w-max translate-x-[-50%] gap-10 md:w-auto md:translate-x-0 md:translate-y-[-50%] md:flex-col">
              <div className="marquee flex w-max gap-10 md:w-auto md:flex-col">
                {marquee1.map((img) => (
                  <div
                    key={img}
                    className="h-60 flex-shrink-0 overflow-hidden rounded-2xl md:h-[30vh]"
                  >
                    <img
                      src={img}
                      alt="slide img"
                      className="aspect-video h-full w-full object-cover object-bottom"
                    />
                  </div>
                ))}
              </div>
              <div className="marquee flex w-max gap-10 md:w-auto md:flex-col">
                {marquee1.map((img) => (
                  <div
                    key={img}
                    className="h-60 flex-shrink-0 overflow-hidden rounded-2xl md:h-[30vh]"
                  >
                    <img
                      src={img}
                      alt="slide img"
                      className="aspect-video h-full w-full object-cover object-bottom"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex w-max translate-x-[-60%] gap-10 md:w-auto md:translate-x-0 md:translate-y-[-30%] md:flex-col">
              <div className="marquee_reverse flex w-max gap-10 md:w-auto md:flex-col">
                {marquee2.map((img) => (
                  <div
                    key={img}
                    className="h-60 flex-shrink-0 overflow-hidden rounded-2xl md:h-[30vh]"
                  >
                    <img
                      src={img}
                      alt="slide img"
                      className="aspect-video h-full w-full object-cover object-bottom"
                    />
                  </div>
                ))}
              </div>
              <div className="marquee_reverse flex w-max gap-10 md:w-auto md:flex-col">
                {marquee2.map((img) => (
                  <div
                    key={img}
                    className="h-60 flex-shrink-0 overflow-hidden rounded-2xl md:h-[30vh]"
                  >
                    <img
                      src={img}
                      alt="slide img"
                      className="aspect-video h-full w-full object-cover object-bottom"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-screen-2xl px-20 2xl:px-0">
        <h2 className="text-center text-4xl font-bold">
          하나의 계정으로 더 많은 자유를!
        </h2>

        <p className="mb-20 mt-10 text-center text-gray-600">
          누구든 게스트가 될 수도, 호스트가 될 수도 있습니다! <br />
          하나의 계정으로 원하는 장소를 예약하고, 또 당신의 공간을 사람들에게
          공유해보세요.
        </p>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div className="rounded-2xl bg-violet-50 px-20 py-10">
            <p className="text-gray-600">GUEST</p>
            <h3 className="mb-10 mt-3 text-2xl font-bold text-gray-600">
              장소 대여를 원하시나요?
            </h3>
            <Link to="/place">
              <Button size="md">
                장소 대여하기 <ChevronRightIcon className="size-4" />
              </Button>
            </Link>
          </div>

          <div className="rounded-2xl bg-indigo-50 px-20 py-10">
            <p className="text-gray-600">HOST</p>
            <h3 className="mb-10 mt-3 text-2xl font-bold text-gray-600">
              장소 등록을 원하시나요?
            </h3>
            <Link to="/mypage/enrollPlace">
              <Button size="md">
                장소 등록하기 <ChevronRightIcon className="size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainComponent>
  );
};

export default Main;
