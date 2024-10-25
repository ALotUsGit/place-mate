import { TrashIcon } from "@heroicons/react/24/outline";

type Props = {
  children?: string;
};

const UploadImg = ({ children }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <label
        htmlFor="upload"
        className="flex h-9 w-max cursor-pointer items-center justify-center rounded-lg border border-gray-400 px-3 text-sm/none text-gray-600 transition-colors hover:bg-gray-50"
      >
        사진 업로드
      </label>
      <input type="file" id="upload" className="hidden" multiple />
      <div className="flex flex-wrap gap-4 rounded-lg border border-dashed border-gray-400 px-6 py-3">
        {/* <p className="flex-1 text-center text-sm text-gray-400">{children}</p> */}
        <div className="relative h-[7.5rem] w-[7.5rem] overflow-hidden rounded-lg">
          <img
            src="../../../images/sample1.jpg"
            className="h-full w-full object-cover"
          />
          <button className="absolute right-2 top-2 flex items-center justify-center rounded-full bg-black/50 p-1 transition-opacity hover:opacity-80">
            <TrashIcon className="size-3 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadImg;
