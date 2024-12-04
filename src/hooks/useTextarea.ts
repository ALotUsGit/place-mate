import { useState } from "react";

type HookReturn = [string, (e: React.ChangeEvent<HTMLTextAreaElement>) => void];

const useTextarea = (initial: string): HookReturn => {
  const [value, setValue] = useState(initial);

  const onChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return [value, onChangeValue];
};

export default useTextarea;
