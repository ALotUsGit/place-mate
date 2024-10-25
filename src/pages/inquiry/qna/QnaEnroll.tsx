import { Link } from "react-router-dom";
import MainComponent from "../../../components/MainComponent";
import Button from "../../../components/ui/Button";
import { Input } from "../../../components/ui/Input";
import {
  DocumentIcon,
  DocumentTextIcon,
  LockClosedIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import Radio from "../../../components/ui/Radio";
import { Textarea } from "../../../components/ui/Textarea";
import UploadImg from "../../../components/ui/UploadImg";

const QnaEnroll = () => {
  return (
    <MainComponent className="max-w-7xl">
      <h2 className="mb-10 text-4xl/none font-bold">Q&A</h2>

      <section>
        <form action="" className="flex flex-col gap-10">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <DocumentIcon className="size-6" />
              <p className="text-lg/none font-bold">
                문의 제목
                <span className="font-normal text-rose-600">*</span>
              </p>
            </div>
            <Input
              placeholder="제목을 입력하세요."
              msg=""
              maxLength={100}
              lenghtMsg="최대 100자"
            />
          </div>

          <div>
            <div className="mb-4 flex items-center gap-2">
              <DocumentTextIcon className="size-6" />
              <p className="text-lg/none font-bold">
                문의 내용
                <span className="font-normal text-rose-600">*</span>
              </p>
            </div>
            <Textarea
              placeholder="내용을 입력하세요"
              minLength={10}
              lenghtMsg="최소 10자"
            />
          </div>

          <div>
            <div className="mb-4 flex items-center gap-2">
              <PhotoIcon className="size-6" />
              <p className="text-lg/none font-bold">이미지 업로드 (최대 5장)</p>
            </div>
            <UploadImg>참고할 이미지를 업로드 해주세요.</UploadImg>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-2">
              <LockClosedIcon className="size-6" />
              <p className="text-lg/none font-bold">공개여부</p>
            </div>
            <div className="flex gap-4">
              <Radio name="private" checked>
                공개
              </Radio>
              <Radio name="private">비공개</Radio>
            </div>
          </div>

          <div className="flex justify-center gap-2">
            <Button size="md" variant="primary">
              등록
            </Button>
            <Link to="/qna">
              <Button size="md">취소</Button>
            </Link>
          </div>
        </form>
      </section>
    </MainComponent>
  );
};
export default QnaEnroll;
