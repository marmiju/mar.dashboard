import React, { useState } from "react";
import { Modal } from "../modal/deleteModal"; // import your modal
import { DeleteSkill } from "../../Function/DeleteSkill";
import { BiEdit, BiEditAlt } from "react-icons/bi";
import { UpdateModal } from "../modal/Updatemodal";

export interface skilltype {
  _id: string;
  title: string;
  description?: string;
  url: string;
  cetagory: string;
}

type propt = {
  items: skilltype;
};

export const Skillsitems: React.FC<propt> = ({ items }) => {
  const [isModalOpendelete, setIsModalOpendelete] = useState(false);
  const [isModalOpenupdate, setIsModalOpenupdate] = useState(false);

  const openModaldelet = () => setIsModalOpendelete(true);
  const openModalUpdate = () => setIsModalOpenupdate(true);
  const closeModal = () => setIsModalOpenupdate(false);

  const confirmDelete = () => {
    DeleteSkill({ id: items._id });
    closeModal();
  };

  return (
    <>
      <UpdateModal
        isOpen={isModalOpenupdate}
        onClose={closeModal}
        title={"Update"}
        message={`Update Data Of : ${items.title}`}
        onConfirm={() => {}}
        item={items}
      />
      <Modal
        isOpen={isModalOpendelete}
        onClose={closeModal}
        onConfirm={confirmDelete}
        id={items._id}
        title="Confirm Deletion"
        message={`Are you sure you want to delete "${items.title}"?`}
      />
      <div className="flex bg-[#ffffff3b] my-1 rounded truncate-md shadow-sm p-2">
        <img className="w-10 p-2" src={items.url} alt="icon" />
        <h1 className="flex flex-[30%] truncate text-sm items-center">
          {items.title + "---" + items.description}
        </h1>
        <h1 className="flex flex-[50%] line-clamp-2 truncate text-sm items-center">
          {items.cetagory || "Undefind"}
        </h1>
        <div className="gap-2 flex text-gray-700">
          <button onClick={openModalUpdate} className="text-xl">
            <BiEditAlt />
          </button>
          <button className="text-red-500" onClick={openModaldelet}>
            del
          </button>
        </div>
      </div>
    </>
  );
};
