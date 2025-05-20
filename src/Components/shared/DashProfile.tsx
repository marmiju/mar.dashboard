
import React, { useState } from 'react';
import { NavLink } from 'react-router'
type profileType = {
    _id: string;
    url: string;
    name: string; // Change `any` to `string` if possible
    designation: string[];
    description: string;
    bio: string; // Change `any` to `string` if possible
    resume: string;
    quats: string[];
}

type propt = {
    profileData: profileType
}

export const DashProfile: React.FC<propt> = ({ profileData }) => {
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
        <div>
            {
                <div className="w-full grid items-center   text-center rounded-lg">
                    <div className="flex w-full justify-center"><img className="w-64" src={profileData.url} alt="" /></div>
                    <h1 className="text-2xl text-[#333333] font-bold">{profileData.name}</h1>
                    <h1 className={`text-xl  text-[#4b4b4b] animate-slide-in font-semibold`}>{profileData.designation[index]}</h1>
                    <p className=" text-[#4b4b4b] line-clamp-2">{profileData.description}</p>
                    <NavLink className={'text-sm p-4 '} to={'/profile'}>See advance</NavLink>
                </div>
            }
        </div>
    )
}
