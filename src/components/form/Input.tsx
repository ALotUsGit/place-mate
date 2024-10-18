import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { VariantProps, cva, cx } from "class-variance-authority";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type TInputProps = VariantProps<typeof inputVariants> &
  Omit<React.ComponentPropsWithRef<"input">, "type"> & {
    type: "text" | "email" | "password" | "date" | "number";
    inputClass?: string;
  };

type InputProps = VariantProps<typeof inputVariants> &
  Omit<React.ComponentPropsWithRef<"input">, "type"> & {
    type?: "text" | "email" | "password" | "date" | "number";
    placeholder: string;
    variant?: "default" | "error" | "success";
    msg?: string;
    inputClass?: string;
  };

const inputVariants = cva(
  "flex items-center gap-2 rounded-lg leading-none border border-gray-400 px-6 py-3 focus:ring-transparent placeholder:text-gray-400",
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

const SearchInput = forwardRef(
  ({
    variant,
    inputClass,
    className,
    children,
    ref,
    ...props
  }: TInputProps) => {
    return (
      <div className={twMerge(cx([inputVariants({ variant }), className]))}>
        <input
          ref={ref}
          className={twMerge(
            "flex-1 border-0 p-0 placeholder:text-gray-400 focus:ring-transparent",
            inputClass,
          )}
          {...props}
        />
        {children}
      </div>
    );
  },
);

const Input = ({
  type = "text",
  variant = "default",
  msg = "",
  inputClass,
  ...props
}: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <input
        className={twMerge(cx([inputVariants({ variant }), inputClass]))}
        {...props}
      />

      {msg.length > 0 && (
        <p
          className={twMerge(
            "flex items-center gap-2 text-xs/none text-gray-600",
            variant === "error" && "text-rose-600",
            variant === "success" && "text-indigo-600",
          )}
        >
          {variant === "error" ? (
            <ExclamationCircleIcon className="size-4" />
          ) : variant === "success" ? (
            <CheckCircleIcon className="size-4" />
          ) : (
            <InformationCircleIcon className="size-4" />
          )}
          {msg}
        </p>
      )}
    </div>
  );
};

export { SearchInput, Input };
