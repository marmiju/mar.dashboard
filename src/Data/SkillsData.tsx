import { useState, useEffect } from "react";
import axios from "axios";

export type Root = {
  id: string;
  title: string;
  description?: string;
  url: string;
}[];

const API_URL = `${import.meta.env.VITE_END_POINT}/skills`;

export const useSkills = () => {
  const [skills, setSkills] = useState<Root | null>(null);
  const [skillsloading, setSkillsLoading] = useState<boolean>(true);
  const [skillserror, setSkillsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkillsData = async () => {
      try {
        const response = await axios.get<Root>(API_URL);
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
