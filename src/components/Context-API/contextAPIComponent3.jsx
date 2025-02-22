import { useContext } from "react";
import { UserContext } from "../Context-API/contextAPIComponent1";
function Component3() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 3</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

export default Component3;
