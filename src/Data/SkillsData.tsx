import { useState, useEffect } from "react";
import axios from "axios";

export type Root = [
    {
        id: string,
        title: string,
        description?: string,
        url: string,
    }
]


const API_URL = "http://localhost:5000/api/skills";

export const useSkills = () => {
    const [skills, setSkills] = useState<Root | null>(null);
    const [skillsloading, setskillsLoading] = useState<boolean>(true);
    const [skillserror, setskillsError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSkillsData = async () => {
            try {
                const response = await axios.get<Root>(API_URL);
                setSkills(response.data);
            } catch (err) {
                setskillsError("Failed to fetch Skills data.");
            } finally {
                setskillsLoading(false);
            }
        };
        fetchSkillsData();
    }, []);

    return { skills, skillsloading, skillserror };
};
