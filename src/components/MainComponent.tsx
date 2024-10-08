import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  children: ReactNode;
};

const MainComponent = ({ className, children }: Props) => {
  return (
    <main
      className={twMerge(
        "flex-1 max-w-screen-2xl mx-auto tracking-tight",
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainComponent;
