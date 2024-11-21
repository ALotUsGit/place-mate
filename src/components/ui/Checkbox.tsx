import { useId } from "react";
import { twMerge } from "tailwind-merge";

type checkboxProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "type" | "id"
> & {
  className?: string;
  children: React.ReactNode;
};

const Checkbox = ({ className, children, ...props }: checkboxProps) => {
  const id = useId();

  return (
    <label htmlFor={id} className="flex cursor-pointer gap-2">
      <input
        type="checkbox"
        id={id}
        className="mt-0.5 cursor-pointer rounded-sm border-gray-400 checked:bg-indigo-600 checked:hover:bg-indigo-700 focus:ring-transparent checked:focus:bg-indigo-700"
        {...props}
      />
      <span className={twMerge("text-sm text-gray-600", className)}>
        {children}
      </span>
    </label>
  );
};
export default Checkbox;
