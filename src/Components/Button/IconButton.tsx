import React from "react";

interface props {
    title?: string,
    icon?: React.ReactNode,
    onclick?:()=> void
}

const IconButton = ({ title, icon, onclick }: props) => {
    return (
        <>
         <button
          className="flex p-2 hover:bg-slate-200 rounded" onClick={onclick}>
            {icon} <p>{title}</p>
         </button>
        </>
    );
};

export default IconButton;