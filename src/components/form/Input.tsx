import { VariantProps, cva, cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

type TInputProps = VariantProps<typeof inputVariants> &
  Omit<React.ComponentPropsWithRef<"input">, "type"> & {
    type: "text" | "email" | "password" | "date" | "number";
    inputClass?: string;
  };

const inputVariants = cva(
  "flex items-center gap-2 rounded-lg leading-none border border-gray-400 px-6 py-3",
  {
    variants: {
      variant: {
        default: "border-gray-400",
        success: "border-indigo-600",
        error: "border-rose-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Input = ({
  variant,
  inputClass,
  className,
  children,
  ...props
}: TInputProps) => {
  return (
    <div className={twMerge(cx([inputVariants({ variant }), className]))}>
      <input
        className={twMerge(
          "flex-1 border-0 p-0 placeholder:text-gray-400 focus:ring-transparent",
          inputClass,
        )}
        {...props}
      />
      {children}
    </div>
  );
};

export default Input;
