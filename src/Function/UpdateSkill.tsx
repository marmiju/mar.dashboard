import axios from "axios";
import React from "react";
type skillprops = {
  item: {
    id: string;
    title: string;
    description: string;
    url: string;
    cetagory: string;
  };
};

export const UpdateSkill: React.FC<skillprops> = async ({ item }) => {
  const { id, title, description, url, cetagory } = item;
  console.log(id, title, description, url, cetagory);

  let updatingData: Record<string, string> = {};
  if (title) updatingData.title = title;
  if (description) updatingData.description = description;
  if (url) updatingData.url = url;
  if (cetagory) updatingData.url = cetagory;
  try {
    const res = await axios.put(
      `${import.meta.env.VITE_END_POINT}/skills/${id}`,
      updatingData
    );
    if (!res.data) throw new Error("Failed to update skill");
    alert("Skill updated successfully!");
  } catch (err) {
    alert(`error: ${err}`);
  }
  return null;
};
