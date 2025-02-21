import { useEffect, useState } from "react";
const CustomFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    };
    window.addEventListener("fetchData", fetchData);
    fetchData();
    return () => {
      window.removeEventListener("fetchData", fetchData);
    };
  }, [url]);
  return { data };
};

export default CustomFetch;
