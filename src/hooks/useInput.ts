import { useCallback, useState } from "react";

type HookReturn = [
  string,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  () => void,
];

const useInput = (initial: string): HookReturn => {
  const [value, setValue] = useState(initial);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value.trim());

  const reset = useCallback(() => setValue(""), [initial]);

  return [value, onChangeValue, reset];
};

export default useInput;
