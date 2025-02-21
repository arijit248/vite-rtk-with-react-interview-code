import "./App.css";
import Count from "./containers/count/count";
import Component1 from "./components/HocComponent/component1";
import Parent from "./containers/Parent/Parent";

function App() {
  return (
    <>
      <Count />
      <Component1 />
      <Parent />
    </>
  );
}

export default App;
