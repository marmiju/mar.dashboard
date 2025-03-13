
import { useProfileData } from "../../Data/ProfileData";
import { useSkills } from "../../Data/SkillsData";
import { DashProfile } from "../Ui/DashProfile";
import { Skillsitems } from "../Ui/Skillsitems";

export const WellCome = () => {
    const { profileData, loading, error } = useProfileData();
    const { skills, skillsloading, skillserror } = useSkills();




    return (
        <div className="">
            <div className="grid grid-cols-1 bg-bl  md:grid-cols-10 gap-4 rounded-lg">
                {/* for Skills */}
                <div className="md:col-span-5 rounded-xl shadow-xl border p-1">
                    {/* conditions */}
                    {skillsloading && 'Loading'}
                    {skillserror && error}
                    {skills &&
                        <div className="w-full">
                            <h1 className="bg-r p-2 rounded-t-md ">Skill sets</h1>
                            {
                                skills.map((data, index) => {
                                    return <Skillsitems key={index} items={data} />
                                })
                            }
                        </div>
                    }
                </div>

                {/* for Profiles */}
                <div className={` md:col-span-5 drop-shadow-xl bg-br border-[#f8f8f8ea] border rounded-md animate-slide-in p-4`}>
                    {/* conditions */}
                    {loading && 'Loading'}
                    {error && error}
                    {profileData && <DashProfile profileData={profileData} />}
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-10  gap-2">
                <div className="col-span-4 shadow-md">40</div>
                <div className="col-span-6 shadow-md">60</div>
            </div>
        </div>
    );
};
