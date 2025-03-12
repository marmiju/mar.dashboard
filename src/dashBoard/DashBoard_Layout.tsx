import { Sidebar } from "./sidebar/Sidebar"


export const DashBoard_Layout = () => {
    return (
        <div className="flex">
            <div className=" relative transition-all duration-300 my-4 h-screen">
                <Sidebar></Sidebar>

            </div>
            <div className="w-full">Content</div>
        </div>


    )
}
