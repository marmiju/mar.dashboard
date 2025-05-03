import { useState, useEffect } from "react";
import axios from "axios";

export interface Root {
  _id: string;
  url: string;
  name: string; // Change `any` to `string` if possible
  designation: string[];
  description: string;
  bio: string; // Change `any` to `string` if possible
  resume: string;
  quats: string[];
}

const API_URL = `${import.meta.env.VITE_END_POINT}/profile`;

export const useProfileData = () => {
  const [profileData, setProfileData] = useState<Root | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get<Root>(API_URL);
        setProfileData(response.data);
      } catch (err) {
        setError("Failed to fetch profile data.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  return { profileData, loading, error };
};
