import { useState } from "react";

type UseCheckbox = { initialValue: boolean } & [
  boolean,
  () => void,
  () => void,
];

const useCheckbox = ({ initialValue }: UseCheckbox) => {
  const [checked, setChecked] = useState(initialValue);

  const handleChange = () => {
    setChecked((checked) => !checked);
  };

  const reset = () => {
    setChecked(false);
  };

  return [checked, handleChange, reset];
};

export default useCheckbox;
