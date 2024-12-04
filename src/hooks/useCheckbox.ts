import { useState } from "react";

type UseCheckbox = [
  boolean,
  () => void,
  () => void,
  React.Dispatch<React.SetStateAction<boolean>>,
];

const useCheckbox = (initialValue: boolean): UseCheckbox => {
  const [checked, setChecked] = useState(initialValue);

  const handleChange = () => {
    setChecked((checked) => !checked);
  };

  const reset = () => {
    setChecked(false);
  };

  return [checked, handleChange, reset, setChecked];
};

export default useCheckbox;
