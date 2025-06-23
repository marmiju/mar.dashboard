import React from 'react'

type buttonType = {
    icon: React.ReactNode,
    title?: string,
    link?: string
}

type propt = {
    item: buttonType,
    isOpen?: boolean
    color?:string

}

export const SidebarButton: React.FC<propt> = ({ item, isOpen,color }) => {
    console.log(color)
    return (
        <div
            className={`h-full flex  items-center ${isOpen ? 'pr-8' : ''} hover:cursor-pointer`}>
            <div className={`flex items-center flex-[30%] justify-center text-xl p-2.5 font-semibold text-[${color}]`}>{item.icon}</div>
            <h1 className={`flex flex-[70%] transition-all duration-500 relative  items-center
                 ${isOpen ? " md:left-0 text-gray-700 " : " w-0 -left-96  opacity-0"}`}> {item.title}</h1>
        </div>
    )
}
