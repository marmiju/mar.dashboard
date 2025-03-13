import React from 'react'
type skillstype = {

    id: string,
    title: string,
    description?: string,
    url: string,
}

type propt = {
    items: skillstype
}


export const Skillsitems: React.FC<propt> = ({ items }) => {
    return (
        <div className='flex bg-[#ffffff3b] my-1 rounded truncate-md shadow-sm p-2'>
            <img className='w-10 p-2 ' src={items.url} />
            <h1 className='flex flex-[30%] truncate text-sm items-center border'>{items.title}</h1>
            <h1 className=' flex flex-[50%] line-clamp-2 truncate text-sm items-center  border'>{items.description}</h1>

        </div>
    );
};