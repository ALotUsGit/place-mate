import { useEffect, useState } from "react";
import {
  Response,
  fetchInquiries,
} from "../../../requests/inquiry/fetchInquiries";
import { dateFormat } from "../../../utils/dateFormat";
import Pagination from "../../../components/ui/pagination";
import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";
import { LockClosedIcon } from "@heroicons/react/24/outline";

const Qna = () => {
  const [qnaData, setQnaData] = useState<Response[]>([]);
  const currentPage = 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await fetchInquiries();
        console.log(data);
        setQnaData(data);
      } catch (error) {
        console.error("데이터를 불러오는데 실패했습니다.", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <ul>
        {qnaData.map((data) => (
          <li
            key={data.id}
            className="flex flex-col items-start gap-6 border-b border-gray-300 py-6 first:border-t sm:flex-row sm:items-center"
          >
            <span className="w-24 truncate text-gray-600 sm:text-center">
              {data.userId}
            </span>
            <p className="max-w-full flex-1 truncate font-bold">
              {data.private && (
                <LockClosedIcon className="mr-3 inline-block size-5" />
              )}
              {data.title}
            </p>
            <span className="w-32 text-gray-600 sm:text-center">
              {dateFormat(data.createdAt, "yy . MM . dd")}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex items-center">
        <Pagination
          pages={Math.ceil(qnaData.length / 8)}
          currentPage={currentPage}
        />
        <Link to="/QnaDetail" className="min-w-fit">
          <Button>문의하기</Button>
        </Link>
      </div>
    </section>
  );
};
export default Qna;
