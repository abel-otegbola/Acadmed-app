export default function Topbar() {
    return (
        <header className="flex justify-between items-center py-5 w-[1200px] mx-auto">
            <h1 className="text-[#807185] text-[18px]">Acad <span className="text-[#AC42C7]">Med</span></h1>
            <nav className="">
                <ul className="flex items-center justify-between gap-[60px]">
                    <li className="flex items-center justify-center gap-2"><img src="/src/assets/Home.png" alt="home image" width="32px" height="32px" className="object-cover" /><p>Home</p></li>
                    <li className="flex items-center justify-center gap-2"><img src="/src/assets/about.png" alt="about image" width="32px" height="32px" /><p>About</p></li>
                    <li className="flex items-center justify-center gap-2"><img src="/src/assets/Dashboard.png" alt="platform image" width="32px" height="32px" /><p>Platform</p></li>
                </ul>
            </nav>
            <img src="/src/assets/profile-pic.png" alt="profile picture" width="42px" height="auto" />
        </header>
    )
} 