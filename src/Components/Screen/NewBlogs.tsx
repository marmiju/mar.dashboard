import React, { useState } from "react";
import { InputBox } from "../InputBox/InputBox";
import Editor from "../../utils/RichTextEditor/RichTextEditor";
import { toast, ToastContainer } from "react-toastify";
import { VscLoading } from "react-icons/vsc";

export const NewBlogs = () => {
  const [isloading, setisloading] = useState(false);
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState<File | null>(null);
  const [title, setTitle] = useState<string>("");
  const [preview, setPreview] = useState<string>(
    "https://i.ibb.co/5xCrNvNZ/Untitled-design.png"
  );

  const handleAddDAta = async () => {
    setisloading(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (cover instanceof File) {
      formData.append("cover", cover);
    }

    const response = await fetch(`${import.meta.env.VITE_END_POINT}/addblog`, {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    setisloading(false);
    toast(result.message);
  };

  const handleCover = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCover(file); //set file as cover

      const reader = new FileReader(); //generate preview Url
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value } = e.target;
    setTitle(value);
  };

  return (
    <>
      <ToastContainer />
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="relative text-2xl text-gray-700 font-bold">
            Add New Blog №
          </h1>
          {isloading ? (
            <VscLoading />
          ) : (
            <button
              onClick={handleAddDAta}
              className="
              relative rounded bg-white text-black px-6 py-1
              hover:bg-black hover:text-white
              after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-0 after:h-0.5
              after:bg-black after:scale-x-0 after:origin-left
              after:transition-transform after:duration-300
              hover:after:scale-x-100
            "
            >
              Submit
            </button>
          )}
        </div>

        <InputBox
          name="title"
          onchenge={handleChange}
          placeholder="Enter Title"
          title="Title"
          type="text"
        />

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-10">
            <Editor value={description} onContentChange={setDescription} />
          </div>
          <div className="col-span-2 space-y-2">
            {preview && (
              <img
                src={preview}
                alt="Cover Preview"
                className="w-full h-auto rounded shadow"
              />
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleCover}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-white hover:file:text-black"
            />
          </div>
        </div>
      </div>
    </>
  );
};
