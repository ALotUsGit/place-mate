type DialogProps = {
  dialogId: string;
};

const Dialog = ({ dialogId }: DialogProps) => {
  return (
    <dialog id={dialogId}>
      <h1>Dialog Component</h1>
    </dialog>
  );
};
export default Dialog;
