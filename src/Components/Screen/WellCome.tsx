import { useProfileData } from "../../Data/ProfileData";
import { ExperiencesData } from "../../Data/ExperiencesData";

import { DashProfile } from "../shared/DashProfile";
import { Skillsitems } from "../shared/Skillsitems";
import { Skills } from "./Skills";

export const WellCome = () => {
  const { profileData, loading, error } = useProfileData();
  const { experiences, experiencesErr } = ExperiencesData();

  return (
    <div className=" grid gap-4">
      <div className="grid grid-cols-1   md:grid-cols-10 gap-4 rounded-lg">
        {/* for Profiles */}
        <div
          className={` md:col-span-5 drop-shadow-xl bg-br border-[#f8f8f8ea] border rounded-xl animate-slide-in p-4`}
        >
          {/* conditions */}
          {loading && "Loading"}
          {error && error}
          {profileData && <DashProfile profileData={profileData} />}
        </div>
        {/* for Skills */}
        <Skills></Skills>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-10  gap-2">
        <div className="col-span-4 shadow-md">
          {/* conditions */}
          {experiencesErr && error}
          {experiences && (
            <div className="w-full">
              <h1 className="bg-r p-2 rounded-t-md ">EXPERIENCES</h1>
              {experiences.map((data, index) => {
                return (
                  <h1 key={index} className="poppins ">
                    {data.designation}
                  </h1>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
