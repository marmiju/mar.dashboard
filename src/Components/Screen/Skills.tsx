import React from "react";
import { useSkills } from "../../Data/SkillsData";
import { Skillsitems } from "../Ui/Skillsitems";
import { NavLink } from "react-router";

export const Skills = () => {
  const { skills, skillsloading, skillserror } = useSkills();
  const pathname = window.location.pathname;
  return (
    <div className="md:col-span-5 rounded-xl shadow-xl border p-1">
      {/* conditions */}
      {skillsloading && "Loading"}

      {skills && (
        <div className="w-full">
          <h1 className="bg-r p-2 rounded-t-md ">Skill sets</h1>
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
