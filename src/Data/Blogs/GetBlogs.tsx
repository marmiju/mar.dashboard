import { useEffect, useState } from "react";


export const GetBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const url = `${import.meta.env.VITE_END_POINT}/blogs`;
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setBlogs(result);
    };
    fetchData();
  }, []);
  return blogs;
};
