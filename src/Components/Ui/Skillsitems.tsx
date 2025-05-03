import React, { useState } from "react";
import { Modal } from "../modal/modal"; // import your modal

type skillstype = {
  id: string;
  title: string;
  description?: string;
  url: string;
};

type propt = {
  items: skillstype;
};

export const Skillsitems: React.FC<propt> = ({ items }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const confirmDelete = () => {
    closeModal();
  };

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmDelete}
        title="Confirm Deletion"
        message={`Are you sure you want to delete "${items.title}"?`}
      />
      <div className="flex bg-[#ffffff3b] my-1 rounded truncate-md shadow-sm p-2">
        <img className="w-10 p-2" src={items.url} alt="icon" />
        <h1 className="flex flex-[30%] truncate text-sm items-center">
          {items.title}
        </h1>
        <h1 className="flex flex-[50%] line-clamp-2 truncate text-sm items-center">
          {items.description}
        </h1>
        <div className="gap-2 flex text-gray-700">
          <button>Edit</button>
          <button className="text-red-500" onClick={openModal}>
            del
          </button>
        </div>
      </div>
    </>
  );
};
