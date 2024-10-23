import { useEffect, useState } from "react";
import { dateFormat } from "../../../utils/dateFormat";
import { Link, useParams } from "react-router-dom";
import Button from "../../../components/ui/Button";
import {
  LockClosedIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import MainComponent from "../../../components/MainComponent";
import { Response, fetchInquiry } from "../../../requests/inquiry/fetchInquiry";

type Params = {
  id: string | undefined;
};

const QnaDetail = () => {
  const { id } = useParams<Params>();
  const [qnaData, setQnaData] = useState<Response>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await fetchInquiry();
        setQnaData(data.find((item) => item.id === id));
      } catch (error) {
        console.error("데이터를 불러오는데 실패했습니다.", error);
      }
    };
    fetchData();
  }, []);

  return (
    <MainComponent>
      <section className="mb-10">
        <div className="mb-10 border-b border-gray-300 pb-10">
          <span>{qnaData?.userId}</span>
          <h2 className="mb-9 mt-3 text-4xl/none font-bold">
            <LockClosedIcon className="mr-3 inline-block size-8" />
            {qnaData?.title}
          </h2>
          <div className="flex items-center gap-4">
            <span className="flex-1 text-gray-600">
              {qnaData?.createdAt &&
                dateFormat(qnaData.createdAt, "yy . MM . dd")}
            </span>
            <button>
              <PencilSquareIcon className="size-6" />
            </button>
            <button>
              <TrashIcon className="size-6" />
            </button>
          </div>
        </div>
        <div className="whitespace-pre-line">{qnaData?.content}</div>
      </section>

      <section className="mb-10 border-y border-gray-300 py-8">
        <h3 className="mb-5 text-lg font-medium">관리자 답변</h3>
        <p className="whitespace-pre-line">{qnaData?.answer}</p>
      </section>

      <div className="flex justify-center">
        <Link to="/Qna">
          <Button size="md">목록으로</Button>
        </Link>
      </div>
    </MainComponent>
  );
};
export default QnaDetail;
