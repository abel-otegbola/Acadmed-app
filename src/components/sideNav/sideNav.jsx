import { FiDatabase, FiUserCheck, FiCalendar, FiSettings, FiLogOut } from "react-icons/fi"
import { useLocation } from "react-router-dom"

export default function SideNav() {
    const pathname = useLocation().pathname

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
        <div className="w-[250px] h-screen bg-[#F7F4F9]/[0.7] text-[#606EA0]">
            <p className="text-[#C1B4C7] p-4">General</p>
            {
                generalLinks.map(links => ( 
                    <a key={links.id} href={links.to} className={`flex mb-1 mx-1 capitalize items-center gap-4 p-4 hover:shadow-sm hover:bg-white rounded ${pathname === links.to ? "bg-white shadow-sm text-[#422862]" : ""}`}>
                        {links.icon}
                        {links.text}
                    </a>
                ))
            }

            <p className="text-[#C1B4C7] p-4">Others</p>
            {
                otherLinks.map(links => ( 
                    <a key={links.id} href={links.to} className={`flex mb-1 mx-1 capitalize items-center gap-4 p-4 hover:shadow-sm hover:bg-white rounded ${pathname === links.to ? "bg-white shadow-sm text-[#422862]" : ""}`}>
                        {links.icon}
                        {links.text}
                    </a>
                ))
            }
        </div>
    )
} 