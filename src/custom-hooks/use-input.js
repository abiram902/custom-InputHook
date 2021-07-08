import { useState } from "react";

const useInput = (validationFunc) => {
  const [enteredValue, setEnteredvalue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = enteredValue && validationFunc(enteredValue);
  const hasError = isTouched && !isValid;

  const handleInputChange = (e) => {
    setEnteredvalue(e.target.value);
  };
  const handleBlur = (e) => {
    setIsTouched(true);
  };
  const reset = () => {
    setIsTouched(false);
    setEnteredvalue("");
  };

  return {
    value: enteredValue,
    handleChange: handleInputChange,
    handleBlur,
    hasError,
    isValid,
    isTouched,
    reset,
  };
};

export default useInput;
