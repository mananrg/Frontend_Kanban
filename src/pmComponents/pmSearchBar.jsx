import { useState } from "react";
import { Icon } from "@iconify/react";
import searchIcon from "@iconify-icons/mdi/magnify";
import menuIcon from "@iconify-icons/mdi/menu";
import CreateProject from "./pmCreateProject"; // Import CreateProject component
import ProjectCard from "./pmProjectCard"; // Import ProjectCard component

const PMSearchBar = () => {
  const [showCreateProject, setShowCreateProject] = useState(false);

  const handleAddProject = () => {
    setShowCreateProject(true);
  };

  const handleCloseCreateProject = () => {
    setShowCreateProject(false);
  };

  return (
    <div
      className="p-6 bg-[#1C1D1E] h-screen overflow-y-scroll scrollbar-hide pb-6"
      style={{ scrollBehavior: "smooth" }}
    >
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-semibold text-white">
            Welcome, Project Manager!
          </h1>
          <p className="text-lg text-gray-400">Here is your agenda for today</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="px-6 py-3 rounded-full bg-white border border-gray-300 w-80 shadow-md"
            />
            <Icon
              icon={searchIcon}
              className="absolute right-5 top-3 text-gray-500"
              width="24"
              height="24"
            />
          </div>
          <p className="text-white font-medium">First Name</p>
          <Icon
            icon={menuIcon}
            className="text-white cursor-pointer"
            width="30"
            height="30"
          />
        </div>
      </div>

      {/* Main Section - Tasks and Reminders */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        {/* Tasks Section */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-semibold text-white">My Tasks</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center bg-[#D9D9D9] rounded-xl p-4 shadow-md">
              <span className="text-4xl font-bold text-white">2/4</span>
              <p className="text-xl text-[#B3261E]">Priority Tasks</p>
            </div>
            <div className="flex flex-col items-center bg-[#D9D9D9] rounded-xl p-4 shadow-md">
              <span className="text-4xl font-bold text-white">2/4</span>
              <p className="text-xl text-[#B3261E]">Overdue Tasks</p>
            </div>
            <div className="flex flex-col items-center bg-[#D9D9D9] rounded-xl p-4 shadow-md">
              <span className="text-4xl font-bold text-white">2/4</span>
              <p className="text-xl text-[#B3261E]">Pending Tasks</p>
            </div>
          </div>
        </div>

        {/* Reminder Section */}
        <div className="flex justify-end">
          <div className="bg-[#2B2C2D] rounded-xl p-6 shadow-md w-full">
            <h2 className="text-xl font-semibold text-white mb-4">Reminder!</h2>
            <div className="text-white">
              <p className="text-sm">Meeting with Nik Brown</p>
              <p className="text-sm">12:30 PM - 04:30 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Cards Section */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {/* Use ProjectCard component */}
        <ProjectCard
          imageUrl="https://images.unsplash.com/photo-1580983561371-7f4b242d8ec0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Kanban Board"
          description="A collaborative Kanban board for task management."
          avatars={[1, 2, 3]}
        />
        <ProjectCard
          imageUrl="https://cdn.pixabay.com/photo/2024/03/09/16/59/typewriter-8622984_1280.jpg"
          title="OPT Board"
          description="Optimizing board for project tracking."
          avatars={[1, 2, 3]}
        />
        {/* Add New Project Card */}
        <div className="flex flex-col bg-[#2B2C2D] rounded-lg p-6 shadow-lg border border-[#A1E3D8]">
          <div className="flex justify-center items-center h-full">
            <button
              onClick={handleAddProject}
              className="px-6 py-3 text-white text-lg border border-[#A1E3D8] rounded-full"
            >
              + Add New Project
            </button>
          </div>
        </div>
      </div>

      {/* Recent Projects Section */}
      <div className="overflow-y-auto max-h-96 scrollbar-hide mb-6">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Recent Projects
        </h2>
        <div className="space-y-4">
          <div className="grid grid-cols-5 gap-6 bg-[#2B2C2D] rounded-lg p-4 shadow-md">
            <span className="text-lg text-white font-bold">KANBAN BOARD</span>
            <span className="text-sm text-gray-400">25 May, 2020</span>
            <span className="text-sm text-gray-400">Rahul</span>
            <span className="text-sm text-gray-400">10 July, 2020</span>
            <span className="text-sm text-gray-400">In Process</span>
          </div>
        </div>
      </div>

      {/* Show CreateProject modal */}
      {showCreateProject && (
        <CreateProject onClose={handleCloseCreateProject} />
      )}

      {/* Empty Footer */}
      <footer className="h-16"></footer>
    </div>
  );
};

export default PMSearchBar;
