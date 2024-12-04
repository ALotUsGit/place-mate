import { useNavigate } from "react-router-dom";
import MainComponent from "../../../components/MainComponent";
import Button from "../../../components/ui/Button";
import { Input, InputLabel, InputWrap } from "../../../components/ui/Input";
import {
  DocumentIcon,
  DocumentTextIcon,
  LockClosedIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import Radio from "../../../components/ui/Radio";
import { Textarea, TextareaLabel } from "../../../components/ui/Textarea";
import UploadImg from "../../../components/ui/UploadImg";
import useInput from "../../../hooks/useInput";
import useTextarea from "../../../hooks/useTextarea";
import { useState } from "react";
import AlertModal from "../../../components/ui/AlertModal";

const QnaEnroll = () => {
  const [title, onChangeTitle] = useInput("");
  const [contents, onChangeContents] = useTextarea("");
  const [cancleAlert, setCancleAlert] = useState(false);

  const navigate = useNavigate();

  const onNavHandler = () => {
    if (title || contents) {
      setCancleAlert(true);
      return;
    }
    navigate("/qna");
  };

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
                <span className="font-normal text-rose-600"> *</span>
              </p>
            </div>
            <InputWrap>
              <Input
                placeholder="제목을 입력하세요."
                maxLength={100}
                value={title}
                onChange={onChangeTitle}
              />
              <InputLabel icon={false}>{title.length} / 최대 100자</InputLabel>
            </InputWrap>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-2">
              <DocumentTextIcon className="size-6" />
              <p className="text-lg/none font-bold">
                문의 내용
                <span className="font-normal text-rose-600"> *</span>
              </p>
            </div>
            <Textarea
              placeholder="내용을 입력하세요"
              minLength={10}
              value={contents}
              onChange={onChangeContents}
            >
              <TextareaLabel icon={false}>
                {contents.length} / 최소 10자
              </TextareaLabel>
            </Textarea>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-2">
              <PhotoIcon className="size-6" />
              <p className="text-lg/none font-bold">
                이미지 업로드 <span className="font-semibold">(최대 5장)</span>
              </p>
            </div>
            <UploadImg max={5} />
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
            <Button
              size="md"
              variant="primary"
              disabled={!title || contents.length < 10}
            >
              등록
            </Button>
            <Button size="md" onClick={onNavHandler}>
              취소
            </Button>
          </div>
        </form>
      </section>

      {cancleAlert && (
        <AlertModal
          title=""
          content="작성 중이던 내용이 있습니다. 정말로 취소하시겠습니까?"
          cancle={true}
          setModalOpen={setCancleAlert}
          onClickConfirm={() => navigate("/qna")}
        />
      )}
    </MainComponent>
  );
};
export default QnaEnroll;
