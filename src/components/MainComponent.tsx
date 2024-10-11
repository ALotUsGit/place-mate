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
        "flex-1 max-w-screen-2xl mx-auto px-20 tracking-tight 2xl:px-0",
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainComponent;
