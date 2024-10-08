import { useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  children: any;
};

const MainComponent = ({ className, children }: Props) => {
  const currentPath = useLocation();

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
