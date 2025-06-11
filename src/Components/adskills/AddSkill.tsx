import React, { useState } from "react";
import { InputModal } from "../modal/InputModal";
import { SubmitAddSkill } from "../../Function/SubmitAddSkill";
import { ToastContainer } from "react-toastify";

const AddSkill = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cetagory, setCetagory] = useState("AI/ML/GEN AI");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    url: "",
  });

  const handleClose = () => setIsOpen(false); //handle Close close
  const HandleOpen = () => setIsOpen(true); //handle Close close

  const handleCetagory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //handle cetagory
    setCetagory(e.currentTarget.value);
  };

  //handle fordmData
  const handlechenge = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // handleConfirm
  const onConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    SubmitAddSkill(
      formData.title,
      formData.description,
      formData.url,
      cetagory
    );
  };

  return (
    <>
      <InputModal
        title="Add Skills"
        message="Add new Skill"
        isOpen={isOpen}
        onClose={handleClose}
        handleCetagory={handleCetagory}
        formData={formData}
        handleChenge={handlechenge}
        Cetagory={cetagory}
        onConfirm={onConfirm}
      />
      <div className="border m-0.5 w-full">
        <button
          onClick={HandleOpen}
          className="bg-bl  p-1 w-full text-black/70"
        >
          + Add New Skill
        </button>
      </div>
      <ToastContainer />
    </>
  );
};

export default AddSkill;
