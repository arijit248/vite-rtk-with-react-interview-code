import { memo } from "react";

const Children = ({ childrenCont, click }) => {
  console.log("Children");
  return (
    <>
      <div>Children: {childrenCont}</div>
      <button onClick={click}>Children Click</button>
    </>
  );
};

export default memo(Children);
