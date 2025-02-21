import { useCallback, useState } from "react";
import Children from "../../components/Children/Children";

const Parent = () => {
  const [parentCont, setParentCount] = useState(0);
  const handleParentChanges = () => {
    setParentCount(parentCont + 1);
  };

  const [childrenCont, setChildrenCount] = useState(0);

  const handleChildrenChanges = useCallback(() => {
    setChildrenCount(childrenCont + 1);
  }, [childrenCont]);
  console.log("Parent");
  return (
    <>
      <div>Parent: {parentCont}</div>
      <button onClick={handleParentChanges}>Parent Click</button>
      <Children childrenCont={childrenCont} click={handleChildrenChanges} />
    </>
  );
};

export default Parent;
