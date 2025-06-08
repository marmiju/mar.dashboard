import { useLocation } from "react-router";
import React, { useState } from "react";
import { blog } from "../../Data/GetBlogs";
import Editor from "../RichTextEditor/RichTextEditor";

export const BlogDetails = () => {
  const location = useLocation();
  const blog: blog = location.state?.blog;

  const [title, setTitle] = useState(blog?.title || "");
  const [description, setDescription] = useState(blog?.description || "");
  const [cover, setCover] = useState(blog?.cover || "");
  const [newImage, setNewImage] = useState<File | null>(null);

  if (!blog) return <p>Blog not found!</p>;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setNewImage(file);
      setCover(URL.createObjectURL(file)); // Preview
    }
  };

  const handleUpdate = () => {
    const updatedBlog = {
      ...blog,
      title,
      description,
      cover: newImage || blog.cover,
    };

    console.log("✅ Updated Blog:", updatedBlog);

    // Send `updatedBlog` to your backend here if needed
  };

  return (
    <div className="p-4 space-y-4  mx-auto">
      <div className="flex justify-between">
        <h2 className="text-2xl text-slate-700 font-bold">Edit Blog</h2>
        <button
          onClick={handleUpdate}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-black"
        >
          Save Changes
        </button>
      </div>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Blog Title"
        className="w-full border p-2 rounded"
      />

      <div className="grid grid-cols-12">
        <div className="col-span-10">
          <Editor />
        </div>
        <div className="col-span-2">
          <img
            src={cover}
            alt="Cover Preview"
            className="w-64 object-cover rounded mb-2"
          />
          <input
            className="text-center"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
      </div>
    </div>
  );
};
