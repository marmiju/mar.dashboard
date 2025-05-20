import { useState, useEffect } from "react";
import axios from "axios";

export type skillType = {
  _id: string;
  title: string;
  description?: string;
  url: string;
  cetagory: string;
}[];

const API_URL = `${import.meta.env.VITE_END_POINT}/skills`;

export const useSkills = () => {
  const [skills, setSkills] = useState<skillType | null>(null);
  const [skillsloading, setSkillsLoading] = useState<boolean>(true);
  const [skillserror, setSkillsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkillsData = async () => {
      setSkillsLoading(true);
      try {
        const response = await axios.get<skillType>(API_URL);
        setSkills(response.data);
      } catch (err) {
        setSkillsError("Failed to fetch Skills data.");
      } finally {
        setSkillsLoading(false);
      }
    };
    fetchSkillsData();
  }, []);

  return { skills, skillsloading, skillserror };
};
