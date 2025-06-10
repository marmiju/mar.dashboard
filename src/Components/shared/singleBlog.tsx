import { Link } from "react-router";
import { blog } from "../../Data/Blogs/type";
import ReadOnlyEditor from "../../utils/RichTextEditor/ReadOnlyEditor";

export const SingleBlog = ({ blog }: { blog: blog }) => {
  console.log("is:", blog._id);
  const date = new Date(blog.date!).toString().slice(3, 15);
  return (
    <Link to={`/blog/${blog._id}`} state={{ blog }}>
      <div className="border p-2 border-slate-200 bg-white rounded">
        <img
          className="w-full h-44 object-cover"
          src={
            typeof blog.cover === "string"
              ? blog.cover
              : URL.createObjectURL(blog.cover)
          }
          alt="Blog Cover"
        />
        <p>{date}</p>
        <p className="text-xl font-semibold">{blog.title}</p>
        <div className="line-clamp-3 max-h-32 overflow-hidden">
          <ReadOnlyEditor content={blog.description!} />
        </div>
      </div>
    </Link>
  );
};
