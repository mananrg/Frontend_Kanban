import { useState } from "react";
import AdminNewTask from "./adminNewTask";

const AdminProjects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNewTask = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-[#1C1D1E] text-white min-h-screen h-screen overflow-y-auto flex flex-col">
      {/* Header Section */}
      <div className="flex justify-between items-center p-6">
        <div>
          <h1 className="text-3xl font-bold">Kanban Board Project</h1>
          <p className="text-sm text-gray-400">Last Update: 30 March 2024</p>
        </div>
        <div className="flex items-center space-x-4">
          {/* User Avatars */}
          <div className="flex -space-x-2">
            <img
              src="https://via.placeholder.com/40"
              alt="user"
              className="w-10 h-10 rounded-full border-2 border-gray-800"
            />
            <img
              src="https://via.placeholder.com/40"
              alt="user"
              className="w-10 h-10 rounded-full border-2 border-gray-800"
            />
            <img
              src="https://via.placeholder.com/40"
              alt="user"
              className="w-10 h-10 rounded-full border-2 border-gray-800"
            />
            <span className="w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center">
              +7
            </span>
          </div>
          {/* Search Bar */}
          <input
            type="text"
            placeholder="What are you looking for?"
            className="px-4 py-2 rounded-full bg-gray-800 border-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Kanban Board Section */}
      <div className="grid grid-cols-4 gap-6 p-6">
        {/* TODO Column */}
        <div className="bg-[#292B2F] p-4 rounded-lg max-h-screen overflow-y-auto scrollbar-hide">
          <div className="flex justify-between items-center mb-4 border-b-2 border-[#7D7BFF]">
            <h2 className="text-lg font-semibold">TODO</h2>
            <span className="text-sm bg-gray-700 px-2 py-1 rounded-full">2</span>
          </div>
          {/* Task Cards */}
          {[...Array(5)].map((_, index) => (
            <div key={index} className="bg-white text-black p-4 mb-4 rounded-lg shadow-lg">
              <h3 className="font-semibold mb-2">UX Adjustments</h3>
              <p className="text-sm mb-2">It just needs to adapt the UI from what you did before.</p>
              <span className="text-xs bg-purple-200 text-purple-600 px-2 py-1 rounded-lg">Research</span>
              <div className="flex justify-between items-center text-xs text-gray-500 mt-2">
                <span>3 comments</span>
                <span>Yesterday</span>
              </div>
            </div>
          ))}
        </div>

        {/* In Work Column */}
        <div className="bg-[#292B2F] p-4 rounded-lg max-h-screen overflow-y-auto scrollbar-hide">
          <div className="flex justify-between items-center mb-4 border-b-2 border-[#368FFF]">
            <h2 className="text-lg font-semibold">In Work</h2>
            <span className="text-sm bg-gray-700 px-2 py-1 rounded-full">4</span>
          </div>
          {/* Task Cards */}
          {[...Array(4)].map((_, index) => (
            <div key={index} className="bg-white text-black p-4 mb-4 rounded-lg shadow-lg">
              <h3 className="font-semibold mb-2">Slack Integration</h3>
              <p className="text-sm mb-2">Add a field in the portal to let the user connect their Slack account.</p>
              <span className="text-xs bg-blue-200 text-blue-600 px-2 py-1 rounded-lg">Development</span>
              <div className="flex justify-between items-center text-xs text-gray-500 mt-2">
                <span>5 comments</span>
                <span>Tomorrow</span>
              </div>
            </div>
          ))}
        </div>

        {/* QA Column */}
        <div className="bg-[#292B2F] p-4 rounded-lg max-h-screen overflow-y-auto scrollbar-hide">
          <div className="flex justify-between items-center mb-4 border-b-2 border-[#FF8C42]">
            <h2 className="text-lg font-semibold">QA</h2>
            <span className="text-sm bg-gray-700 px-2 py-1 rounded-full">8</span>
          </div>
          {/* Task Cards */}
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-white text-black p-4 mb-4 rounded-lg shadow-lg">
              <h3 className="font-semibold mb-2">Design System</h3>
              <p className="text-sm mb-2">Create a consistent look and feel for both web and mobile.</p>
              <span className="text-xs bg-blue-200 text-blue-600 px-2 py-1 rounded-lg">Development</span>
            </div>
          ))}
        </div>

        {/* Completed Column */}
        <div className="bg-[#292B2F] p-4 rounded-lg max-h-screen overflow-y-auto scrollbar-hide">
          <div className="flex justify-between items-center mb-4 border-b-2 border-[#68BB59]">
            <h2 className="text-lg font-semibold">Completed</h2>
            <span className="text-sm bg-gray-700 px-2 py-1 rounded-full">3</span>
          </div>
          {/* Task Cards */}
          <div className="bg-white text-black p-4 mb-4 rounded-lg shadow-lg">
            <h3 className="font-semibold mb-2">Presentation</h3>
            <span className="text-xs bg-green-200 text-green-600 px-2 py-1 rounded-lg">Planning</span>
            <div className="flex justify-between items-center text-xs text-gray-500 mt-2">
              <span>11 comments</span>
              <span>✔️ Done</span>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons Section at Bottom Right */}
      <div className="flex justify-end space-x-4 p-6">
        <button className="bg-blue-500 px-6 py-2 rounded-lg shadow-md">Schedule Meeting</button>
        <button className="bg-blue-500 px-6 py-2 rounded-lg shadow-md">View Team Members</button>
        <button onClick={handleNewTask} className="bg-blue-500 px-6 py-2 rounded-lg shadow-md">
          New Task
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && <AdminNewTask onClose={handleCloseModal} />}
    </div>
  );
};

export default AdminProjects;
