import Button from "./Button";

type Props = {
  title: string;
  content: string;
  variant?: "error" | "primary";
  cancle?: boolean;
  setModalOpen?: (value: boolean) => void;
  onClickConfirm: () => void;
};

const AlertModal = ({
  title,
  content,
  variant = "error",
  cancle = false,
  setModalOpen,
  onClickConfirm,
}: Props) => {
  return (
    <dialog className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black/50">
      <div className="flex w-[22.5rem] flex-col gap-4 rounded-2xl bg-white px-10 py-9">
        <h2>{title}</h2>
        <p className="text-gray-400">{content}</p>
        <div className="mt-6 flex justify-end gap-2">
          {cancle && setModalOpen && <Button onClick={() => setModalOpen(false)}>취소</Button>}
          <Button variant={variant} onClick={onClickConfirm}>
            확인
          </Button>
        </div>
      </div>
    </dialog>
  );
};

export default AlertModal;
