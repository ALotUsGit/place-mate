import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { VariantProps, cva, cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

type Props = VariantProps<typeof textareaVariants> &
  React.ComponentPropsWithRef<"textarea"> & {
    placeholder: string;
    variant?: "default" | "error" | "success";
    className?: string;
    msg?: string;
    lenghtMsg?: string;
    children?: string;
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
  msg = "",
  lenghtMsg = "",
  className,
  children,
  ...props
}: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <textarea
        name=""
        id=""
        className={twMerge(cx([textareaVariants({ variant }), className]))}
        {...props}
      >
        {children}
      </textarea>

      <div className="flex items-center">
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
        {lenghtMsg.length > 0 && (
          <p className="ml-auto text-xs/none text-gray-600">0 / {lenghtMsg}</p>
        )}
      </div>
    </div>
  );
};

export { Textarea };
