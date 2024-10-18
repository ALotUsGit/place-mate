import { VariantProps, cva, cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

type TButtonProps = VariantProps<typeof buttonVariants> &
  React.ComponentPropsWithoutRef<"button">;

const buttonVariants = cva(
  "flex justify-center items-center gap-2 rounded-lg bg-white leading-none transition-colors",
  {
    variants: {
      variant: {
        default: "border border-gray-400 text-gray-600 hover:bg-gray-50",
        primary: "border border-indigo-400 text-indigo-600 hover:bg-indigo-50",
        secondary: "text-white bg-indigo-600 hover:bg-indigo-700",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-12 px-8 text-lg font-medium",
        lg: "w-full h-16 px-8 text-xl/none font-medium",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  },
);

const Button = ({
  variant,
  size,
  className,
  children,
  ...props
}: TButtonProps) => {
  return (
    <button
      className={twMerge(
        cx([
          buttonVariants({ variant, size }),
          "disabled:cursor-not-allowed disabled:opacity-50",
          className,
        ]),
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
