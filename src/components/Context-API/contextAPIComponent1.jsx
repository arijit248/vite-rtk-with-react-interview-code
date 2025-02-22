import { createContext } from "react";
import Component2 from "./contextAPIComponent2";

export const UserContext = createContext();

function Component1() {
  return (
    <UserContext.Provider value="Hall">
      <h1>Hello Hall!</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

export default Component1;
