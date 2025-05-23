import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

type deleteprops = {
  id: string;
};
export const DeleteSkill: React.FC<deleteprops> = async ({ id }) => {
  console.log(id);
  try {
    const res = await axios.delete(`${import.meta.env.VITE_END_POINT}/skills`, {
      data: { id },
    });
    if (!res.data) {
      throw new Error("Failed to delete skill");
    }

    toast.success("Item Deleted Succesfully");
  } catch (error) {
    toast.error(JSON.stringify(error));
  }
  return null;
};
