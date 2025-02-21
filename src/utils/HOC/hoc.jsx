import { useState } from "react";

const HOC = (Component) => {
  const NewComponent = () => {
    const [counthoc, setCounthoc] = useState(0);
    const handleChangeCount = () => {
      setCounthoc(counthoc + 1);
    };
    return (
      <>
        <Component counthoc={counthoc} click={handleChangeCount} />
      </>
    );
  };
  return NewComponent;
};

export default HOC;
