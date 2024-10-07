import { twMerge } from "tailwind-merge";

type TButtonProps = React.ComponentPropsWithRef<"button">;

const Button = (props: TButtonProps) => {
  const { className, children, ...rest } = props;
  return (
    <button
      className={twMerge(
        "flex items-center gap-1 py-4 px-8 text-gray-600 leading-none bg-white border border-gray-400 rounded-lg hover:bg-gray-50",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
