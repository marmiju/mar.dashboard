import { useState } from "react";
import { useProfileData } from "../../Data/ProfileData";
import { NavLink } from "react-router";

export const WellCome = () => {
    const { profileData, loading, error } = useProfileData();
    const [index, setindex] = useState<number>(2)


    function timeout() {
        // Check if profileData and designation exist and index is the last one
        if (profileData && profileData.designation && index === profileData.designation.length - 1) {
            setindex(0);

        } else {
            setindex(index + 1);

        }
    }

    setTimeout(timeout, 2000);


    return (
        <div className="h-screen">
            <div className="grid grid-cols-10 h-1/2 gap-4">
                <div className="col-span-6 shadow-md">60</div>
                <div className={`col-span-4 drop-shadow-lg bg-br border-[#f8f8f8ea] border rounded-md animate-slide-in p-4`}>
                    {/* conditions */}
                    {loading && 'Loading'}
                    {error && error}
                    {profileData && <div>
                        {
                            <div className="w-full grid items-center   text-center rounded-lg">
                                <div className="flex w-full justify-center"><img className="w-64" src={profileData.url} alt="" /></div>
                                <h1 className="text-2xl text-[#333333] font-bold">{profileData.name}</h1>
                                <h1 className={`text-xl  text-[#4b4b4b] animate-slide-in`}>{profileData.designation[index]}</h1>
                                <p className=" text-[#4b4b4b] line-clamp-2">{profileData.description}</p>
                                <NavLink className={'text-sm p-4'} to={'/profile'}>See advance</NavLink>
                            </div>
                        }
                    </div>
                    }
                </div>
            </div>
            <div className="grid grid-cols-10 h-1/2 gap-2">
                <div className="col-span-4 shadow-md">40</div>
                <div className="col-span-6 shadow-md">60</div>
            </div>
        </div>
    );
};
