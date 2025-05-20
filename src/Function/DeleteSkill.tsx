import axios from "axios";
import React from "react";

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

    alert("Skill deleted successfully");
  } catch (error) {
    console.error("Delete error:", error);
    alert("Error deleting skill");
  }
  return null;
};
