import React from "react";
import { FiBell } from "react-icons/fi";
import { BsChatDots } from "react-icons/bs";

interface TopBarProps {
  pageTitle: string;
  pageIcon: React.ReactNode;
  userName: string;
  userImageUrl: string;
  notificationCount?: number;
}

function TopBar({
  pageTitle,
  pageIcon,
  userName,
  userImageUrl,
  notificationCount = 0,
}: TopBarProps) {
  return (
    <header className="w-full bg-white py-2 px-4 border-b-1 border-gray-200 flex items-center justify-between">
      <div className="flex items-center gap-x-3">
        <span className="text-gray-600">{pageIcon}</span>
        <h1
          className="m-1 text-xl font-bold text-gray-800"
          style={{ margin: "0" }}
        >
          {pageTitle}
        </h1>
      </div>

      <div className="flex items-center gap-x-5">
        <IconButton icon={<BsChatDots size={20} />} />

        <div className="relative">
          <IconButton icon={<FiBell size={20} />} />
          {notificationCount > 0 && (
            <span
              className="absolute top-0 right-0 -mt-1 -mr-1 flex items-center justify-center bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5"
              aria-label={`${notificationCount} notifications`}
            >
              {notificationCount}
            </span>
          )}
        </div>

        <img
          src={userImageUrl}
          alt={`Profile picture of ${userName}`}
          className="w-9 h-9 rounded-full object-cover cursor-pointer"
        />
      </div>
    </header>
  );
}

interface IconButtonProps {
  icon: React.ReactNode;
}

function IconButton({ icon }: IconButtonProps) {
  return (
    <button className="text-gray-600 hover:text-gray-900 p-1.5 rounded-full hover:bg-gray-100 transition-colors">
      {icon}
    </button>
  );
}

export default TopBar;
