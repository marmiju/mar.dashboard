type SkillItem = {
  id: string;
  title: string;
  description: string;
  url: string;
  cetagory: string;
};

export const updateSkill = async (item: SkillItem) => {
  const { id, title, description, url, cetagory } = item;

  const updatingData = { title, description, url, cetagory };
  console.log({ title, description, url, cetagory });

  try {
    console.log(import.meta.env.VITE_END_POINT);
    const response = await fetch(
      `${import.meta.env.VITE_END_POINT}/skills/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatingData),
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to update skill: ${response.statusText}`);
    }

    const data = await response.json();
    alert("Skill updated successfully!");
    return data;
  } catch (err) {
    alert(`Error: ${err}`);
  }
};
