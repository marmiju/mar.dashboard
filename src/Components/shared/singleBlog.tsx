import { Link } from "react-router";
import { blog } from "../../Data/GetBlogs";

export const SingleBlog = ({ blog }: { blog: blog }) => {
  console.log("is:", blog._id);
  const date = new Date(blog.date!).toString().slice(3, 15);
  return (
    <Link to={`/blog/${blog._id}`} state={{ blog }}>
      <div className=" border p-2 broder-slate-200 bg-white rounded">
        <img
          className="w-full h-44 object-cover"
          src={blog.cover}
          alt="Blog Cover"
        />
        <p>{date}</p>
        <p>{blog.title}</p>
        <p className="text-sm text-slate-700 truncate ">{blog.description}</p>
      </div>
    </Link>
  );
};
