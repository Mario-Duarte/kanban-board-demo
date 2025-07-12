import { BsBookmarks } from "react-icons/bs";
import { FiCalendar, FiHome, FiSearch } from "react-icons/fi";
import { IoSparkles, IoStatsChart } from "react-icons/io5";
import { RiCoupon3Line } from "react-icons/ri";

function SideBar() {
  return (
    <div className="h-screen w-16 flex flex-col items-center bg-slate-900 text-white shadow-lg">
      <div className="flex flex-col items-center space-y-4 mt-4">
        <div className="bg-slate-800 p-2 rounded-lg cursor-pointer hover:bg-slate-700 transition-colors">
          <IoSparkles size="28" />
        </div>

        <SideBarIcon icon={<FiHome size="24" />} tooltip="Home" />

        <div className="bg-slate-700 p-3 rounded-xl cursor-pointer">
          <SideBarIcon
            icon={<RiCoupon3Line size="24" className="transform -rotate-45" />}
            tooltip="Tickets"
          />
        </div>

        <SideBarIcon icon={<FiCalendar size="24" />} tooltip="Calendar view" />
        <SideBarIcon icon={<IoStatsChart size="24" />} tooltip="Insights" />

        <hr className="w-10 border-slate-700" />

        <SideBarIcon icon={<FiSearch size="24" />} tooltip="Search" />
        <SideBarIcon icon={<BsBookmarks size="24" />} tooltip="Bookmarks" />
      </div>

      {/* <div className="mt-auto mb-4 cursor-pointer">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
          alt="User Profile"
          className="w-10 h-10 rounded-full"
        />
      </div> */}
    </div>
  );
}

interface SideBarIconProps {
  icon: React.ReactNode;
  tooltip?: string;
}

const SideBarIcon = ({ icon, tooltip = "tooltip" }: SideBarIconProps) => (
  <div className="relative flex items-center justify-center p-2 text-slate-400 hover:bg-slate-800 hover:text-white rounded-lg cursor-pointer transition-colors group">
    {icon}
    <span className="absolute w-auto p-2 m-2 min-w-max left-16 rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100 z-50">
      {tooltip}
    </span>
  </div>
);

export default SideBar;
