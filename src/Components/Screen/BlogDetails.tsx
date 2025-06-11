import { useLocation } from "react-router";
import React, { useState } from "react";
import { blog } from "../../Data/Blogs/type";
import Editor from "../../utils/RichTextEditor/RichTextEditor";
import { toast, ToastContainer } from "react-toastify";

export const BlogDetails = () => {
  const location = useLocation();
  const blog: blog = location.state?.blog;

  const [title, setTitle] = useState(blog?.title || "");
  const [description, setDescription] = useState(blog?.description || "");
  const [cover, setCover] = useState<string>(
    typeof blog.cover === "string" ? blog.cover : ""
  );
  const [newImage, setNewImage] = useState<File | null>(
    blog.cover instanceof File ? blog.cover : null
  );

  if (!blog) return <p>Blog not found!</p>;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setCover(previewUrl);
      setNewImage(file);
    }
  };

  const handleUpdate = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("id", blog._id);

    if (newImage instanceof File) {
      formData.append("cover", newImage);
    } else {
      formData.append("cover", blog.cover); // Fallback
    }

    const response = await fetch(
      `${import.meta.env.VITE_END_POINT}/blog/update`,
      {
        method: "POST",
        body: formData,
      }
    );
    const result = await response.json();
    toast.success(result.message);
  };

  return (
    <>
      <ToastContainer />
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
            <Editor
              value={description}
              onContentChange={(content: string) => setDescription(content)}
            />
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
    </>
  );
};
