import { Link } from "react-router";
import { GetBlogs } from "../../Data/Blogs/GetBlogs";
import { blog } from "../../Data/Blogs/type";
import { SingleBlog } from "../shared/singleBlog";

export const Blogs = () => {
  const blogs: blog[] = GetBlogs();

  return (
    <div className="space-y-2">
      <div className="flex justify-between px-4 ">
        <h2 className="text-2xl font-bold hover:shadow">All Blogs</h2>
        <Link
          to={"/addblogs"}
          className="bg-black px-4 py-1 text-white rounded hover:bg-slate-600"
        >
          ➕ Add New
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        {blogs.map((blog, index) => {
          return <SingleBlog key={index} blog={blog} />;
        })}
      </div>
    </div>
  );
};
