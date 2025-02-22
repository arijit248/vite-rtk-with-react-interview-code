import { useRef } from "react";

function RefInputValue() {
  const inputValue = useRef("");
  const handleCheckValue = () => {
    console.log(inputValue.current.value, "inputValue.current.value");
  };
  return (
    <>
      <h2>inputValue Value: {inputValue.current.value}</h2>
      <input type="text" ref={inputValue} onChange={handleCheckValue} />
    </>
  );
}

export default RefInputValue;
