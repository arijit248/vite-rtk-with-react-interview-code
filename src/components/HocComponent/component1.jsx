import HOC from "../../utils/HOC/hoc";

const Component1 = ({ counthoc, click }) => {
  return (
    <>
      <p>CountHoc: {counthoc}</p>
      <button onClick={click}>Click Count</button>
    </>
  );
};

export default HOC(Component1);
