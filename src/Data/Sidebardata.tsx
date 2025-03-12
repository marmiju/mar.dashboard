import { MdSpaceDashboard } from "react-icons/md";
import { RiAccountCircle2Fill } from "react-icons/ri";
import { FaLightbulb } from "react-icons/fa";
import { IoExtensionPuzzle } from "react-icons/io5";
import { TbLogs } from "react-icons/tb";





export const Sidebardata = [
    {
        title: 'Dashboard',
        icon: <MdSpaceDashboard />,
        link: '/dashboard'
    },
    {
        title: 'Profile',
        icon: <RiAccountCircle2Fill />,
        link: '/profile'
    },
    {
        title: 'Skills',
        icon: <FaLightbulb />,
        link: '/skills'
    },
    {
        title: 'Experiences',
        icon: <IoExtensionPuzzle />,
        link: '/experiences'
    },
    {
        title: 'Blogs',
        icon: <TbLogs />,
        link: '/blogs'
    }
]