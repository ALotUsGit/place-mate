import { useId } from "react";
import { twMerge } from "tailwind-merge";

type checkboxProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "type" | "id"
> & {
  className?: string;
  children: React.ReactNode;
};

const Radio = ({ className, children, ...props }: checkboxProps) => {
  const id = useId();
  return (
    <label htmlFor={id} className="flex cursor-pointer items-center gap-2">
      <input
        type="radio"
        id={id}
        className="cursor-pointer border-2 border-gray-400 checked:border-indigo-600 checked:bg-transparent checked:hover:border-indigo-600 checked:hover:bg-transparent focus:ring-transparent checked:focus:border-indigo-600 checked:focus:bg-transparent"
        {...props}
      />
      <span className={twMerge("text-sm/none text-gray-600", className)}>
        {children}
      </span>
    </label>
  );
};
export default Radio;
