import { useEffect, useState } from "react";
import { fetchNotice, Response } from "../../requests/notice/fetchNotice";
import { Link, useParams } from "react-router-dom";
import MainComponent from "../../components/MainComponent";
import Button from "../../components/ui/Button";
import { dateFormat } from "../../utils/dateFormat";

type Params = {
  id: string | undefined;
};

const NoticeDetail = () => {
  const { id } = useParams<Params>();
  const [noticeData, setNoticeData] = useState<Response>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await fetchNotice();
        setNoticeData(data.find((item) => item.id === id));
      } catch (error) {
        console.error("데이터를 불러오는데 실패했습니다.", error);
      }
    };
    fetchData();
  }, []);

  return (
    <MainComponent className="max-w-7xl">
      <section className="mb-10">
        <div className="mb-10 border-b border-gray-300 pb-10">
          <Link to={`/notice?tab=${noticeData?.type}`}>{noticeData?.type}</Link>
          <h2 className="mb-9 mt-3 text-4xl/none font-bold">
            {noticeData?.title}
          </h2>
          <span className="flex-1 text-gray-600">
            {noticeData?.createdAt &&
              dateFormat(noticeData.createdAt, "yy . MM . dd")}
          </span>
        </div>
        <div className="whitespace-pre-line">{noticeData?.content}</div>
      </section>

      <div className="flex justify-center">
        <Link to="/notice">
          <Button size="md">목록으로</Button>
        </Link>
      </div>
    </MainComponent>
  );
};
export default NoticeDetail;
