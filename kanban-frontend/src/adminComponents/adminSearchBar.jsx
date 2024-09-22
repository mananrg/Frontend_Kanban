import { useState } from "react";
import { Icon } from "@iconify/react";
import searchIcon from "@iconify-icons/mdi/magnify";
import menuIcon from "@iconify-icons/mdi/menu";
import CreateProject from "./createProject";

const AdminSearchBar = () => {
  const [showCreateProject, setShowCreateProject] = useState(false);

  const handleAddProject = () => {
    setShowCreateProject(true);
  };

  const handleCloseCreateProject = () => {
    setShowCreateProject(false);
  };

  return (
    <div
      className="p-6 bg-transparent h-screen overflow-y-scroll pb-6"
      style={{ scrollBehavior: "smooth" }} // Added smooth scroll behavior here
    >
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-semibold text-white">Welcome, Admin!</h1>
          <p className="text-lg text-white">Here is your agenda for today</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="px-6 py-3 rounded-full bg-white border border-gray-300 w-96 shadow-md"
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

      {/* Main Section - Tasks, Slack, and Reminder */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        {/* Tasks Section */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-semibold text-white">My Tasks</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-4 shadow-md">
              <span className="text-4xl font-bold text-white">2/4</span>
              <p className="text-xl text-white">Priority Tasks</p>
            </div>
            <div className="flex flex-col items-center bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-4 shadow-md">
              <span className="text-4xl font-bold text-white">2/4</span>
              <p className="text-xl text-white">Overdue Tasks</p>
            </div>
            <div className="flex flex-col items-center bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-4 shadow-md">
              <span className="text-4xl font-bold text-white">2/4</span>
              <p className="text-xl text-white">Pending Tasks</p>
            </div>
          </div>
        </div>

        {/* Slack Section */}
        <div className="flex justify-center">
          <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-6 shadow-md w-full">
            <h2 className="text-xl font-semibold text-white mb-4">Slack</h2>
            <div className="text-white">
              <p className="text-sm">Reports progress</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-green-400">12/30</span>
                <span className="text-yellow-400">Medium Priority</span>
              </div>
              <p className="text-sm mt-4">Due date: 20 JUN</p>
            </div>
          </div>
        </div>

        {/* Reminder Section */}
        <div className="flex justify-end">
          <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-6 shadow-md w-full">
            <h2 className="text-xl font-semibold text-white mb-4">Reminder!</h2>
            <div className="text-white">
              <p className="text-sm">Meeting with Nik Brown</p>
              <p className="text-sm">12:30 PM - 04:30 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Task Details with Images */}
      <div className="mb-8">
        <div className="grid grid-cols-4 gap-6">
          <div className="flex flex-col bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-4 shadow-md">
            <img
              src="https://via.placeholder.com/150"
              alt="Modern"
              className="rounded-lg mb-4"
            />
            <h3 className="text-white font-semibold text-xl">Modern</h3>
            <p className="text-white">Project details</p>
            <button className="mt-4 px-4 py-2 bg-white text-black rounded-full">
              View All
            </button>
          </div>

          <div className="flex flex-col bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-4 shadow-md">
            <img
              src="https://via.placeholder.com/150"
              alt="Kanban Board"
              className="rounded-lg mb-4"
            />
            <h3 className="text-white font-semibold text-xl">Kanban Board</h3>
            <p className="text-white">Project details</p>
            <button className="mt-4 px-4 py-2 bg-white text-black rounded-full">
              View All
            </button>
          </div>

          <div className="flex flex-col bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-4 shadow-md">
            <img
              src="https://via.placeholder.com/150"
              alt="OPT Board"
              className="rounded-lg mb-4"
            />
            <h3 className="text-white font-semibold text-xl">OPT Board</h3>
            <p className="text-white">Project details</p>
            <button className="mt-4 px-4 py-2 bg-white text-black rounded-full">
              View All
            </button>
          </div>

          <div className="flex flex-col bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-4 shadow-md">
            <div className="flex justify-center items-center h-full">
              <button
                onClick={handleAddProject}
                className="px-4 py-2 bg-transparent border border-white text-white rounded-full"
              >
                + Add New Project
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Projects Section */}
      <div className="overflow-y-auto max-h-96 mb-6">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Recent Projects
        </h2>
        <div className="space-y-4">
          <div className="grid grid-cols-5 gap-6 bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-4 shadow-md">
            <span className="text-lg text-white font-bold">KANBAN BOARD</span>
            <span className="text-sm text-white">25 May, 2020</span>
            <span className="text-sm text-white">Rahul</span>
            <span className="text-sm text-white">10 July, 2020</span>
            <span className="text-sm text-white">In Process</span>
          </div>
          <div className="grid grid-cols-5 gap-6 bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-4 shadow-md">
            <span className="text-lg text-white font-bold">Target</span>
            <span className="text-sm text-white">12 May, 2020</span>
            <span className="text-sm text-white">Leo Resim</span>
            <span className="text-sm text-white">28 June, 2020</span>
            <span className="text-sm text-white">Completed</span>
          </div>
          <div className="grid grid-cols-5 gap-6 bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-4 shadow-md">
            <span className="text-lg text-white font-bold">RE/MAX</span>
            <span className="text-sm text-white">21 April, 2020</span>
            <span className="text-sm text-white">Tamim Iqbal</span>
            <span className="text-sm text-white">11 June, 2020</span>
            <span className="text-sm text-white">Open</span>
          </div>
        </div>
      </div>

      {/* Show CreateProject modal */}
      {showCreateProject && (
        <CreateProject onClose={handleCloseCreateProject} />
      )}

      {/* Empty Footer */}
      <footer className="h-16">{/* Empty footer, space provided */}</footer>
    </div>
  );
};

export default AdminSearchBar;
