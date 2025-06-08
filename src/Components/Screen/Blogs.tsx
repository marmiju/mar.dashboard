import { blog, GetBlogs } from "../../Data/GetBlogs";
import { SingleBlog } from "../shared/singleBlog";

export const Blogs = () => {
  const blogs: blog[] = GetBlogs();

  return (
    <div>
      <h2 className="">All Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        {blogs.map((blog, index) => {
          return <SingleBlog key={index} blog={blog} />;
        })}
      </div>
    </div>
  );
};
