// Modal.tsx
import React, { useState } from "react";
import { skilltype } from "../shared/Skillsitems";
import { skillsCetagory } from "../../Data/skillsCetagory";
import { InputBox } from "../InputBox/InputBox";
import { ImCross } from "react-icons/im";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  item: skilltype;
  handleCetagory: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleChenge: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  formData: {
    title: string;
    description: string;
    url: string;
  };
};

export const InputModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  item,
  handleCetagory,
  handleChenge,
  formData,
}) => {
  if (!isOpen) return null;
  const cetagory: string[] = skillsCetagory();

  return (
    <div className="fixed inset-0 transition-all bg-wite/50 duration-300 z-50 flex items-center justify-center  ">
      <div className=" bg-white/50 backdrop-blur-[10px] border bg-opacity-100 rounded-lg p-6 shadow-lg max-w-sm w-full">
        <button
          className="bg-[#ff1010] p-1 text-[5px] rounded-full duration-300 text-red-600 hover:text-white fixed hover:text-[10px] top-2 left-2"
          onClick={onClose}
        >
          <ImCross />
        </button>
        <div className="flex justify-between">
          <div>
            <h1 className="text-xl font-semibold">{title}</h1>
            <h1 className="text-sm text-black/70">{message}</h1>
          </div>
          <img className="w-16" src={formData.url} alt={item.title} />
        </div>

        <div className="mt-5">
          <form onSubmit={onConfirm}>
            <InputBox
              onchenge={handleChenge}
              initialVal={item.title}
              title={"tilte"}
              placeholder="Enter title"
              name="title"
              type="text"
            />
            <InputBox
              onchenge={handleChenge}
              initialVal={item.description ?? ""}
              title={"Description"}
              placeholder={`Enter Description`}
              name="description"
              type="text"
            />
            <InputBox
              onchenge={handleChenge}
              initialVal={item.url}
              title={"URL"}
              name="url"
              placeholder="Enter UrL"
              type="text"
            />
            <div className="flex gap-2">
              <select
                className="text- bg-slate-200 px-3 py-1.5"
                name="cetagory"
                id="cetagory"
                defaultValue={item.cetagory}
                onChange={handleCetagory}
              >
                {cetagory.map((cetagory, index) => {
                  return (
                    <option
                      className="text-black bg-slate-200"
                      key={index}
                      value={cetagory}
                    >
                      {cetagory}
                    </option>
                  );
                })}
              </select>
              {/* buttons  */}
              <input
                type="submit"
                className="text-white bg-green-600 w-full hover:bg-white hover:text-green-500 duration-300 hover:cursor-pointer"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
