import { useId } from "react";

type checkboxProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "type" | "id"
> & {
  children: React.ReactNode;
};

const Checkbox = ({ children, ...props }: checkboxProps) => {
  const id = useId();

  return (
    <label htmlFor={id} className="flex cursor-pointer items-center gap-2">
      <input
        type="checkbox"
        id={id}
        className="cursor-pointer rounded-sm border-gray-400 checked:bg-indigo-600 checked:hover:bg-indigo-700 focus:ring-transparent checked:focus:bg-indigo-700"
        {...props}
      />
      <span className="text-sm/none text-gray-600">{children}</span>
    </label>
  );
};
export default Checkbox;
