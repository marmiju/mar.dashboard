// Modal.tsx
import React from "react";
import { skilltype } from "../shared/Skillsitems";
import { InputBox } from "../InputBox/inputBox";
import { skillsCetagory } from "../../Data/skillsCetagory";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  item: skilltype;
};

export const UpdateModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  item,
}) => {
  if (!isOpen) return null;
  const cetagory: string[] = skillsCetagory();

  return (
    <div className="fixed inset-0 transition-all bg-wite/50 duration-300 z-50 flex items-center justify-center  ">
      <div className=" bg-white/50 backdrop-blur-[10px] border bg-opacity-100 rounded-lg p-6 shadow-lg max-w-sm w-full">
        <h1 className="text-xl font-semibold">{"⨀" + title}</h1>
        <h1 className="text-sm text-black/70">{message}</h1>
        <div className="mt-5">
          <form>
            <InputBox
              initialVal={item.title}
              title={"tilte"}
              placeholder="Enter title"
              type="text"
            />
            <InputBox
              initialVal={item.title}
              title={"Description"}
              placeholder={`Enter Description`}
              type="text"
            />
            <InputBox
              initialVal={item.title}
              title={"URL"}
              placeholder="Enter UrL"
              type="text"
            />
            <select name="cetagory" id="cetagory">
              {cetagory.map((cetagory, index) => {
                return (
                  <option key={index} value={cetagory}>
                    {cetagory}
                  </option>
                );
              })}
            </select>
          </form>
        </div>
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            No!
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Yes! I want to delete
          </button>
        </div>
      </div>
    </div>
  );
};
