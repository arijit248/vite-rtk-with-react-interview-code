import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, getData } from "./countSlice";
import { useEffect, useState } from "react";
import CustomFetchMethod from "../../utils/CustomFetchMetod/customFetchMethod";
const Count = () => {
  const count = useSelector((state) => state.count.count);
  //   const data = useSelector((state) => state.count.data);
  const { data } = CustomFetchMethod(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const dispatch = useDispatch();
  //   useEffect(() => {
  //     // fetch("https://jsonplaceholder.typicode.com/posts")
  //     //   .then((response) => response.json())
  //     //   .then((result) => dispatch(getData(result)));

  //   }, []);

  const limitPerPage = 5;
  const pageNum = Math.ceil(data?.length / limitPerPage);

  let pageNew = [];
  for (let i = 0; i < pageNum; i++) {
    pageNew.push(i);
  }

  const [page, setPage] = useState(0);

  const handlePageClick = (e) => {
    const num = Number(e.target.textContent) - 1;
    setPage(num * limitPerPage);
  };

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px",
        }}
      >
        {data?.slice(page, page + limitPerPage)?.map((el) => {
          return (
            <div
              key={el.id}
              style={{
                width: "250px",
                height: "350px",
                color: "#333",
                backgroundColor: "#fff",
                margin: "10px",
              }}
            >
              <h3>{el.title}</h3>
              <p>{el.body}</p>
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px",
        }}
      >
        {pageNew?.map((el) => {
          return (
            <div
              key={el + 1}
              style={{
                margin: "10px",
              }}
            >
              <button
                style={{
                  color: "#333",
                  backgroundColor: "#fff",
                }}
                onClick={handlePageClick}
              >
                {el + 1}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Count;
