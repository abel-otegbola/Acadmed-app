import { useState } from "react"
import { FiDatabase, FiUserCheck, FiCalendar, FiSettings, FiLogOut } from "react-icons/fi"
import { FaBars, FaTimes } from "react-icons/fa"
import { useLocation } from "react-router-dom"

export default function SideNav() {
    const pathname = useLocation().pathname
    const [open, setOpen] = useState(false)

    const generalLinks = [
        { id: 0, text: "dashboard", to: "/dashboard", icon: <FiDatabase /> },
        { id: 1, text: "checkup" , to: "/dashboard/checkup", icon: <FiUserCheck />},
        { id: 2, text: "Planner", to: "/dashboard/planner" , icon: <FiCalendar />},
    ]
    
    const otherLinks = [
        { id: 0, text: "settings", to: "/dashboard/settings", icon: <FiSettings /> },
        { id: 1, text: "logout" , to: "", icon: <FiLogOut />},
    ]

    return (
        <div 
            className={`w-[250px] h-screen md:bg-[#F7F7F9]/[0.7] bg-white text-[#606EA0]
            md:static fixed top-0 right-0 border border-[#F7F0FB] transition-all duration-700
            ${open ? "translate-x-[0px]" : "md:translate-x-0 translate-x-[250px]"}
        `}>

            <button 
                className={`p-4 ml-auto md:hidden relative bg-white border border-[#F7F0FB]
                transition-all duration-700
                ${open ? "translate-x-[0px]" : "translate-x-[-48px]"}`} 
                onClick={() => setOpen(!open)}
            >
                {open ? <FaTimes /> : <FaBars />}
            </button>

            <p className="text-[#C1B4C7] p-4 px-7">General</p>
            {
                generalLinks.map(links => ( 
                    <a key={links.id} href={links.to} className={`flex mb-1 mx-1 capitalize items-center gap-4 p-4 px-7 hover:shadow-sm hover:bg-white rounded ${pathname === links.to ? "bg-white border border-[#F7F0FB] shadow-sm text-[#422862]" : ""}`}>
                        {links.icon}
                        {links.text}
                    </a>
                ))
            }

            <p className="text-[#C1B4C7] p-4 px-7">Others</p>
            {
                otherLinks.map(links => ( 
                    <a key={links.id} href={links.to} className={`flex mb-1 mx-1 capitalize items-center gap-4 p-4 px-7 hover:shadow-sm hover:bg-white rounded ${pathname === links.to ? "bg-white shadow-sm text-[#422862]" : ""}`}>
                        {links.icon}
                        {links.text}
                    </a>
                ))
            }
        </div>
    )
} 