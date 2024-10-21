import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { VariantProps, cva, cx } from "class-variance-authority";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type SearchProps = VariantProps<typeof inputVariants> &
  React.ComponentPropsWithRef<"input"> & {
    inputClass?: string;
    iconSize?: string;
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
    iconSize,
    ref,
    ...props
  }: SearchProps) => {
    return (
      <div
        className={twMerge(
          cx([inputVariants({ variant }), "w-full sm:w-80", className]),
        )}
      >
        <input
          ref={ref}
          type="text"
          className={twMerge(
            "flex-1 border-0 p-0 text-sm/none placeholder:text-gray-400 focus:ring-transparent",
            inputClass,
          )}
          placeholder="검색어를 입력하세요."
          {...props}
        />
        <MagnifyingGlassIcon className={twMerge("size-5", iconSize)} />
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
