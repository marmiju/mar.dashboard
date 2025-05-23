export type skillType = {
  _id: string;
  title: string;
  description?: string;
  url: string;
  cetagory: string;
}[];

export const fetchSkills = async (): Promise<skillType> => {
  const response = await fetch(`${import.meta.env.VITE_END_POINT}/skills`);
  if (!response.ok) {
    console.error("Something went wrong!");
    return [];
  }
  return await response.json();
};
