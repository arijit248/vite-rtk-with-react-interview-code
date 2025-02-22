import "./App.css";
import Count from "./containers/count/count";
import Component1 from "./components/HocComponent/component1";
import Parent from "./containers/Parent/Parent";
import ContextAPIComponent1 from "./components/Context-API/contextAPIComponent1";
import UseRefFocusInputField from "./components/REF/UseRefFocusInputField";
import PreviousRefInputValue from "./components/REF/PreviousRefInputValue";
import RefInputValue from "./components/REF/RefInputValue";

function App() {
  return (
    <>
      <Count />
      <Component1 />
      <Parent />
      <ContextAPIComponent1 />
      <PreviousRefInputValue />
      <UseRefFocusInputField />
      <RefInputValue />
    </>
  );
}

export default App;
