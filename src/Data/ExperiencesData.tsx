import axios from "axios";
import { useEffect, useState } from "react";

export type Root = [
  {
    _id: string;
    designation: string;
    company: Company;
    description: string;
    start: string;
    end: string;
  }
];

export interface Company {
  name: string;
}

const URL = `${import.meta.env.VITE_END_POINT}/experience`;

export const ExperiencesData = () => {
  const [experiences, setExperiences] = useState<Root | null>(null);
  const [experiencesErr, setExperienceErr] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Root>(URL);
        setExperiences(response.data);
      } catch (err) {
        setExperienceErr(true);
      }
    };
    fetchData();
  }, []);

  return { experiences, experiencesErr };
};
