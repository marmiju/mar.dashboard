import { Outlet } from "react-router"
import { Sidebar } from "./sidebar/Sidebar"


export const DashBoard_Layout = () => {
    return (
        <div className="flex my-4 mx-2 ">
            <div className=" relative  transition-all duration-300 ">
                <Sidebar></Sidebar>
            </div>
            <div className="w-full rounded-lg">
                <Outlet />
            </div>
        </div>


    )
}
