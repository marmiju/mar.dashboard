import { fetchSkills, skillType } from "../../Data/SkillsData";
import { Skillsitems } from "../shared/Skillsitems";
import AddSkill from "../adskills/AddSkill";
import { useEffect, useState } from "react";

export const Skills = () => {
  const [skills, setSkills] = useState<skillType>([]);

  const loadSkills = async () => {
    const result = await fetchSkills();
    setSkills(result);
  };

  useEffect(() => {
    loadSkills();
  }, []);

  const pathname = window.location.pathname;
  return (
    <div className="md:col-span-5 rounded-xl shadow-xl border p-1">
      {skills && (
        <div className="w-full max-h-svh overflow-scroll">
          <h1 className="bg-r p-2 rounded-t-md ">SkillS</h1>
          <div className="flex w-full justify-end ">
            <AddSkill />
          </div>

          {pathname == "/skills"
            ? skills.map((data, index) => {
                return <Skillsitems key={index} items={data} />;
              })
            : skills.slice(0, 6).map((data, index) => {
                return <Skillsitems key={index} items={data} />;
              })}

          {pathname == "/skills" || (
            <button
              className="bg-l p-2 rounded-t-md w-full"
              onClick={() => (window.location.pathname = "/skills")}
            >
              See All
            </button>
          )}
        </div>
      )}
    </div>
  );
};
