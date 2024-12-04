import { TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import AlertModal from "./AlertModal";

type Props = {
  max: number;
  thumb?: boolean;
  children?: string;
};

const UploadImg = ({ max, thumb = false, children }: Props) => {
  const [imgs, setImgs] = useState<{ id: string; url: string }[]>([]);
  const [imgAlert, setImgAlert] = useState(false);

  const onHandlerFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files) return;

    for (let i = 0; i < files.length; i++) {
      const id = Math.random().toString(36).slice(2);
      if (imgs.length >= max || i >= max) {
        setImgAlert(true);
        return;
      }
      const imgurl = URL.createObjectURL(files[i]);
      setImgs((file) => [...file, { id: id, url: imgurl }]);
    }
  };

  const onClickDelete = (id: string) => {
    console.log(imgs);
    setImgs(imgs.filter((img) => img.id !== id));
  };

  return (
    <div className="flex flex-col gap-3">
      <label
        htmlFor="upload"
        className="flex h-9 w-max cursor-pointer items-center justify-center rounded-lg border border-gray-400 px-3 text-sm/none text-gray-600 transition-colors hover:bg-gray-50"
      >
        사진 업로드
      </label>
      <input
        type="file"
        id="upload"
        className="hidden"
        accept="image/*"
        multiple
        onChange={onHandlerFiles}
      />
      <div className="flex flex-wrap gap-4 rounded-lg border border-dashed border-gray-400 px-6 py-3">
        {imgs.length === 0 ? (
          <p className="flex-1 text-center text-sm text-gray-400">
            {children || "이미지를 업로드해 주세요."}
          </p>
        ) : (
          imgs.map((img) => (
            <div
              key={img.id}
              className="relative h-[7.5rem] w-[7.5rem] overflow-hidden rounded-lg"
            >
              <img src={img.url} className="h-full w-full object-cover" />
              {thumb && (
                <button className="absolute left-2 top-2 flex items-center justify-center rounded bg-black/50 p-1 text-[0.625rem]/none text-gray-200 transition-opacity hover:opacity-80">
                  대표
                </button>
              )}
              <button
                type="button"
                onClick={() => onClickDelete(img.id)}
                className="absolute right-2 top-2 flex items-center justify-center rounded-full bg-black/50 p-1 transition-opacity hover:opacity-80"
              >
                <TrashIcon className="size-3 text-white" />
              </button>
            </div>
          ))
        )}
      </div>

      {imgAlert && (
        <AlertModal
          title={`최대 ${max}장`}
          content={`이미지는 최대 ${max}장까지 업로드 가능합니다.`}
          onClickConfirm={() => setImgAlert(false)}
        />
      )}
    </div>
  );
};

export default UploadImg;
