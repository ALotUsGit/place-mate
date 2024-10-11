import { useEffect, useState } from "react";
import { Response, fetchPlaces } from "../../requests/place/fetchPlaces";

import MainComponent from "../../components/MainComponent";
import PlaceItem from "../../components/PlaceItem";
import LoadPlaceItem from "../../components/loading/LoadPlceItem";

const Place = () => {
  const [loading, setLoding] = useState(true);
  const [placeData, setPlaceData] = useState<Response[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await fetchPlaces();
        console.log(data);
        setPlaceData(data);
      } catch (error) {
        console.error("데이터를 불러오는데 실패했습니다.", error);
      } finally {
        setLoding(false);
      }
    };
    fetchData();
  }, []);

  return (
    <MainComponent>
      <section>
        <ul className="grid grid-cols-5 gap-x-10">
          {loading ? (
            <LoadPlaceItem />
          ) : (
            placeData.map((data) => <PlaceItem key={data.id} data={data} />)
          )}
        </ul>
      </section>
    </MainComponent>
  );
};
export default Place;
