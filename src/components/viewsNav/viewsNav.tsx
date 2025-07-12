import { useState } from "react";

// Importing icons from various react-icons libraries
import { BsLayoutSidebarReverse } from "react-icons/bs";
import { HiOutlineUsers, HiOutlineUserGroup } from "react-icons/hi";
import {
  FiFolder,
  FiPlus,
  FiSearch,
  FiStar,
  FiMenu,
  FiChevronRight,
  FiChevronDown,
} from "react-icons/fi";

// data for the starred list
const starredViews = ["My open tickets", "My overdue tickets", "My tickets"];

// Data for the ticket list
const ticketViews = [
  "All tickets",
  "My open tickets",
  "My overdue tickets",
  "My teams open tickets",
  "My tickets",
  "Open tickets",
  "Overdue tickets",
  "Closed tickets",
];

const ViewsNav = () => {
  const [isStarredOpen, setIsStarredOpen] = useState(false);
  const [isAllViewsOpen, setIsAllViewsOpen] = useState(true);

  return (
    <div className="max-w-72 min-w-58 h-screen bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 flex-grow">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Views</h1>
          <button className="p-1.5 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-100">
            <BsLayoutSidebarReverse size={18} />
          </button>
        </header>

        <nav className="flex flex-col gap-y-2">
          <NavItem icon={<HiOutlineUsers size={20} />} text="Team feeds" />
          <NavItem
            icon={<FiFolder size={20} />}
            text="Views"
            isActive={true}
            extraIcon={<FiPlus size={16} />}
          />
        </nav>

        <div className="relative my-4">
          <FiSearch
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-white border border-gray-300 rounded-md py-2 pl-9 pr-4 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-y-1">
          <AccordionItem
            icon={<FiStar size={20} />}
            text="Starred views"
            isOpen={isStarredOpen}
            onClick={() => setIsStarredOpen(!isStarredOpen)}
          />

          {isStarredOpen && (
            <ul className="pl-9 pt-2 space-y-2.5">
              {starredViews.map((view, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-600 hover:text-black cursor-pointer"
                >
                  {view}
                </li>
              ))}
            </ul>
          )}

          <AccordionItem
            icon={<FiMenu size={20} />}
            text="All views"
            isOpen={isAllViewsOpen}
            onClick={() => setIsAllViewsOpen(!isAllViewsOpen)}
            isBold={true}
          />

          {isAllViewsOpen && (
            <ul className="pl-9 pt-2 space-y-2.5">
              {ticketViews.map((view, index) => (
                <li
                  key={index}
                  className={`text-sm ${
                    index === 0
                      ? "font-semibold text-gray-800"
                      : "text-gray-600"
                  } hover:text-black cursor-pointer`}
                >
                  {view}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="p-4 border-t border-gray-200">
        <nav className="flex flex-col gap-y-2">
          <NavItem icon={<HiOutlineUserGroup size={20} />} text="Teams queue" />
        </nav>
      </div>
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  isActive?: boolean;
  extraIcon?: React.ReactNode;
}

const NavItem = ({
  icon,
  text,
  isActive = false,
  extraIcon = null,
}: NavItemProps) => (
  <a
    href="#"
    className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${
      isActive ? "bg-gray-100" : "hover:bg-gray-100"
    }`}
  >
    <div className="flex items-center gap-x-3">
      <span className={isActive ? "text-gray-800" : "text-gray-500"}>
        {icon}
      </span>
      <span
        className={`text-sm ${
          isActive ? "font-semibold text-gray-800" : "text-gray-700"
        }`}
      >
        {text}
      </span>
    </div>
    {extraIcon && <span className="text-gray-500">{extraIcon}</span>}
  </a>
);

interface AccordionItemProps {
  icon: React.ReactNode;
  text: string;
  isOpen: boolean;
  onClick?: () => void;
  isBold?: boolean;
}

const AccordionItem = ({
  icon,
  text,
  isOpen,
  onClick,
  isBold = false,
}: AccordionItemProps) => (
  <div
    onClick={onClick}
    className="flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-gray-100"
  >
    <div className="flex items-center gap-x-3">
      <span className="text-gray-500">{icon}</span>
      <span
        className={`text-sm ${
          isBold ? "font-bold text-gray-800" : "text-gray-700"
        }`}
      >
        {text}
      </span>
    </div>
    {isOpen ? (
      <FiChevronDown size={16} className="text-gray-500" />
    ) : (
      <FiChevronRight size={16} className="text-gray-500" />
    )}
  </div>
);

export default ViewsNav;
