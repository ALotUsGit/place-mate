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
        "mx-auto my-20 w-full max-w-screen-2xl flex-1 px-20 tracking-tight 2xl:px-0",
        className,
      )}
    >
      {children}
    </main>
  );
};

export default MainComponent;
