import { IconButton } from "../../Components/Button/IconButton";
import { RiMenuFold4Fill } from "react-icons/ri";
import { Sidebardata } from "../../Data/Sidebardata";
import { SetStateAction, useState } from "react";

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0); // Store the active item index

    const click = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    };

    const activeClick = (index: number) => {
        setActiveIndex(index);
        console.log(index);
    }

    return (
        <div className="px-2 justify-center h-screen bg-gradient-to-br from-[#e7e7e7] to-slate-300 shadow-lg border border-gray-200 rounded-lg items-start mx-2">

            {/* Menu Button */}
            <div onClick={click} className="border-b-2 border-[#ffffff] mb-4">
                <IconButton key="menu" item={{ icon: <RiMenuFold4Fill />, title: 'Menu' }} isOpen={isOpen} />
            </div>

            {/* Sidebar Items */}
            <div>
                {
                    Sidebardata.map((data, index) => (
                        <div
                            key={index}
                            onClick={() => activeClick(index)}
                            className={`hover:bg-[#ffff] hover:text-black rounded-md ${activeIndex === index ? 'bg-black text-white' : ''}`} // Change color based on activeIndex
                        >
                            <IconButton item={data} isOpen={isOpen} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
