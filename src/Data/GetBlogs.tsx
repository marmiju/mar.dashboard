import { useEffect, useState } from "react";
export interface blog {
  _id: any;
  id: string;
  title: string;
  cover: string;
  description: string;
  date?: Date;
}

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
