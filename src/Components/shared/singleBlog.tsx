import { Link } from "react-router";
import { blog } from "../../Data/Blogs/type";
import ReadOnlyEditor from "../../utils/RichTextEditor/ReadOnlyEditor";


export const SingleBlog = ({ blog }: { blog: blog }) => {
  console.log("is:", blog._id);
  const date = new Date(blog.date!).toString().slice(3, 15);
  return (
    <Link to={`/blog/${blog._id}`} state={{ blog }}>
      <div className="border reletive p-2 border-slate-200 bg-white rounded group">
        {blog.cover && (
          <img
            className="w-full h-44 object-cover"
            src={
              typeof blog.cover === "string"
                ? blog.cover
                : blog.cover == null
                ? "https://i.ibb.co/Z64hDbgD/Untitled-design-4.png"
                : URL.createObjectURL(blog.cover)
            }
            alt="Blog Cover"
          />
        )}
        
        <p className="text-sm text-gray-400">{date}</p>
        <p className="text-xl font-semibold mb-2">{blog.title}</p>
        <div className="line-clamp-3  overflow-hidden  truncate">
          <ReadOnlyEditor content={blog.description!} />
        </div>
       
      </div>
    </Link>
  );
};
