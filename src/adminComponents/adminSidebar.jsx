import { useState } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import menuIcon from "@iconify-icons/mdi/menu";
import closeIcon from "@iconify-icons/mdi/close";
import homeIcon from "@iconify-icons/mdi/home";
import appsIcon from "@iconify-icons/mdi/apps";
import calendarIcon from "@iconify-icons/mdi/calendar";
import messageIcon from "@iconify-icons/mdi/message";
import peopleIcon from "@iconify-icons/mdi/people";
import accountIcon from "@iconify-icons/mdi/account-circle";
import questionIcon from "@iconify-icons/mdi/help-circle";

const AdminSideBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate for navigation

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
      setIsExpanded(false);
      setIsClicked(false);
    } else {
      setIsExpanded(true);
      setIsClicked(true);
    }
  };

  const handleNavigation = (path) => {
    navigate(path); // Perform navigation
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
        <MenuItem
          icon={homeIcon}
          label="Home"
          isExpanded={isExpanded}
          onClick={() => handleNavigation("/admin/home")}
        />
        <MenuItem
          icon={appsIcon}
          label="Projects"
          isExpanded={isExpanded}
          onClick={() => handleNavigation("/admin/projects")}
        />
        <MenuItem
          icon={calendarIcon}
          label="Calendar"
          isExpanded={isExpanded}
          onClick={() => handleNavigation("/admin/calendar")}
        />
        <MenuItem
          icon={messageIcon}
          label="Messages"
          isExpanded={isExpanded}
          onClick={() => handleNavigation("/admin/messages")}
        />
        <MenuItem
          icon={peopleIcon}
          label="People"
          isExpanded={isExpanded}
          onClick={() => handleNavigation("/admin/people")}
        />
        {/* <MenuItem
          icon={chartBoxIcon}
          label="Reports"
          isExpanded={isExpanded}
          onClick={() => handleNavigation("/admin/reports")}
        /> */}
        <MenuItem
          icon={accountIcon}
          label="Account"
          isExpanded={isExpanded}
          onClick={() => handleNavigation("/admin/account")}
        />
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

// eslint-disable-next-line react/prop-types
const MenuItem = ({ icon, label, isExpanded, onClick }) => (
  <div
    className={`flex items-center space-x-4 p-4 cursor-pointer ${
      isExpanded ? "justify-start" : "justify-center"
    }`}
    onClick={onClick} // Handle click event
  >
    <Icon icon={icon} width="24" height="24" />
    {isExpanded && <span>{label}</span>}
  </div>
);

export default AdminSideBar;
