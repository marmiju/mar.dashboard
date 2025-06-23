import { RiMenuFold4Fill } from "react-icons/ri";
import { Sidebardata } from "../../Data/Sidebardata";
import { useState } from "react";
import { SidebarButton } from "../../Components/Button/sidebarButton";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePath, setactivePath] = useState(window.location.pathname); // Store the active item index

  const click = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const activeClick = (link: string) => {
    setactivePath(link);
    window.location.pathname = link;
    console.log(link);
  };

  return (
    <div className="px-2  h-screen justify-center bg-gradient-to-br from-[#e7e7e7] to-slate-300 shadow-lg border border-gray-200 rounded-lg items-start mx-2">
      {/* Menu Button */}
      <div onClick={click} className="border-b-2 border-[#f8f8f8ea] mb-4">
        <SidebarButton
          key="menu"
          item={{ icon: <RiMenuFold4Fill />, title: "Menu" }}
          isOpen={isOpen}
        />
      </div>

      {/* Sidebar Items */}
      <div>
        {Sidebardata.map((data, index) => (
          <div
            key={index}
            onClick={() => activeClick(data.link)}
            className={`hover:bg-[#ffff] hover:text-gray-700 font-bold rounded-md ${
              activePath === data.link ? "bg-black text-white" : ""
            }`} // Change color based on activeIndex
          >
            <SidebarButton item={data} isOpen={isOpen} />
          </div>
        ))}
      </div>
    </div>
  );
};
