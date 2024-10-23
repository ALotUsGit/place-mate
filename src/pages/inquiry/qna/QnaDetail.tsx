import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";
import {
  LockClosedIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import MainComponent from "../../../components/MainComponent";

const QnaDetail = () => {

  return (
    <MainComponent>
      <section className="mb-10">
        <div className="mb-10 border-b border-gray-300 pb-10">
          <span>userId</span>
          <h2 className="mb-9 mt-3 text-4xl/none font-bold">
            <LockClosedIcon className="mr-3 inline-block size-8" />
            질문제목
          </h2>
          <div className="flex items-center gap-4">
            <span className="flex-1 text-gray-600">2024 . 00 . 00</span>
            <button>
              <PencilSquareIcon className="size-6" />
            </button>
            <button>
              <TrashIcon className="size-6" />
            </button>
          </div>
        </div>
        <div>contents</div>
      </section>

      <section className="mb-10 border-y border-gray-300 py-8">
        <h3 className="mb-5 text-lg font-medium">관리자 답변</h3>
        <p>답변 짜잔</p>
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
