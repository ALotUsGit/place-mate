import MainComponent from "../../components/MainComponent";

const PlaceDetail = () => {
  return (
    <MainComponent className="mb-20 mt-10">
      <h2 className="text-4xl/none font-bold">SPACE NAME</h2>

      <div className="mt-10 flex gap-20">
        <div className="h-screen flex-auto">내용</div>

        <aside className="sticky top-28 h-fit">예약</aside>
      </div>
    </MainComponent>
  );
};

export default PlaceDetail;
