import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { VariantProps, cva, cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

type cmProps = {
  variant?: "default" | "error" | "success";
  className?: string;
  children?: React.ReactNode;
};

type Props = VariantProps<typeof textareaVariants> &
  React.ComponentPropsWithRef<"textarea"> &
  cmProps & {
    placeholder: string;
  };

type LabelProps = cmProps & {
  icon?: boolean;
};

const textareaVariants = cva(
  "resize-none flex items-center gap-2 h-[18.75rem] rounded-lg leading-none border border-gray-400 px-6 py-5 focus:ring-transparent placeholder:text-gray-400",
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

const Textarea = ({
  variant = "default",
  className,
  children,
  ...props
}: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <textarea
        className={twMerge(cx([textareaVariants({ variant }), className]))}
        {...props}
      />
      {children}
    </div>
  );
};

const TextareaLabel = ({
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

export { Textarea, TextareaLabel };
