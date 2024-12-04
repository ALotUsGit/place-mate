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

type cmProps = {
  variant?: "default" | "error" | "success";
  className?: string;
  children?: React.ReactNode;
};

type InputProps = VariantProps<typeof inputVariants> &
  Omit<React.ComponentPropsWithRef<"input">, "type"> &
  cmProps & {
    type?: "text" | "email" | "password" | "date" | "number";
  };

type LabelProps = cmProps & {
  icon?: boolean;
};

const inputVariants = cva(
  "flex items-center gap-2 rounded-lg border border-gray-400 px-6 py-3 text-sm/none placeholder:text-gray-400 focus:ring-transparent disabled:bg-gray-200 read-only:cursor-default",
  {
    variants: {
      variant: {
        default: "border-gray-400",
        success: "border-indigo-600",
        error: "border-rose-600 focus:border-rose-700",
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
  className,
  children,
  ...props
}: InputProps) => {
  return (
    <div className="flex gap-2">
      <input
        type={type}
        className={twMerge(
          "flex-1",
          cx([inputVariants({ variant }), className]),
        )}
        {...props}
      />
      {children}
    </div>
  );
};

const InputLabel = ({
  icon = true,
  variant,
  className,
  children,
}: LabelProps) => {
  return (
    <label
      className={twMerge(
        "flex items-center gap-2 text-xs/none text-gray-600",
        variant === "error" && "text-rose-600",
        variant === "success" && "text-indigo-600",
        !icon && "ml-auto",
        className,
      )}
    >
      {icon &&
        (variant === "error" ? (
          <ExclamationCircleIcon className="size-4" />
        ) : variant === "success" ? (
          <CheckCircleIcon className="size-4" />
        ) : (
          <InformationCircleIcon className="size-4" />
        ))}
      {children}
    </label>
  );
};

const InputWrap = ({ children }: cmProps) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};

export { SearchInput, InputWrap, Input, InputLabel };
