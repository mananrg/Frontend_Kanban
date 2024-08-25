import React, { useState } from "react";
import { Icon } from "@iconify/react";
import menuIcon from "@iconify-icons/mdi/menu";
import closeIcon from "@iconify-icons/mdi/close";
import homeIcon from "@iconify-icons/mdi/home";
import appsIcon from "@iconify-icons/mdi/apps";
import calendarIcon from "@iconify-icons/mdi/calendar";
import messageIcon from "@iconify-icons/mdi/message";
import chartBoxIcon from "@iconify-icons/mdi/chart-box";
import peopleIcon from "@iconify-icons/mdi/people";
import accountIcon from "@iconify-icons/mdi/account-circle";
import questionIcon from "@iconify-icons/mdi/help-circle";

const SideBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseEnter = () => {
    if (!isClicked) {
      setIsExpanded(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isClicked) {
      setIsExpanded(false);
    }
  };

  const handleClick = () => {
    if (isExpanded && isClicked) {
      // Close the sidebar if it's expanded and was previously clicked to stay open
      setIsExpanded(false);
      setIsClicked(false);
    } else {
      // Expand the sidebar and set it to stay open
      setIsExpanded(true);
      setIsClicked(true);
    }
  };

  return (
    <div
      className={`flex flex-col h-screen bg-black text-white ${
        isExpanded ? "w-64" : "w-20"
      } transition-width duration-300 ease-in-out rounded-tr-3xl rounded-br-3xl`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ position: "fixed", left: 0, top: 0 }}
    >
      <div className="flex items-center justify-between p-4 cursor-pointer">
        <button>
          <Icon
            icon={isExpanded ? closeIcon : menuIcon}
            width="24"
            height="24"
          />
        </button>
        {isExpanded && (
          <span className="font-semibold">Bear Brown and Company</span>
        )}
      </div>

      <div className="flex flex-col mt-10 space-y-4">
        <MenuItem icon={homeIcon} label="Home" isExpanded={isExpanded} />
        <MenuItem icon={appsIcon} label="Projects" isExpanded={isExpanded} />
        <MenuItem
          icon={calendarIcon}
          label="Calendar"
          isExpanded={isExpanded}
        />
        <MenuItem icon={messageIcon} label="Messages" isExpanded={isExpanded} />
        <MenuItem icon={peopleIcon} label="People" isExpanded={isExpanded} />
        <MenuItem icon={chartBoxIcon} label="Reports" isExpanded={isExpanded} />
        <MenuItem icon={accountIcon} label="Account" isExpanded={isExpanded} />
      </div>

      <div className="mt-auto mb-6">
        <button className="flex items-center justify-center w-full">
          <div className="flex items-center space-x-2 bg-gray-800 p-2 rounded-full mx-4">
            <Icon icon={questionIcon} width="24" height="24" />
            {isExpanded && <span>Help</span>}
          </div>
        </button>
      </div>
    </div>
  );
};

const MenuItem = ({ icon, label, isExpanded }) => (
  <div
    className={`flex items-center space-x-4 p-4 ${
      isExpanded ? "justify-start" : "justify-center"
    }`}
  >
    <Icon icon={icon} width="24" height="24" />
    {isExpanded && <span>{label}</span>}
  </div>
);

export default SideBar;
