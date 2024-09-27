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
    <div className="p-6 pb-10 bg-[#1C1D1E] text-white min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
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
      <div className="grid grid-cols-4 gap-4">
        {/* TODO Column */}
        <div className="bg-[#2B2C2D] p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">TODO</h2>
          <p className="text-sm text-gray-400 mb-4">2 Tasks</p>

          {/* Card 1 */}
          <div className="bg-[#1F2022] p-4 mb-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">UX Adjustments</h3>
            <p className="text-sm text-gray-300 mb-2">
              It just needs to adapt the UI from what you did before.
            </p>
            <span className="text-xs text-blue-400 block mb-2">Research</span>
            <div className="flex justify-between items-center text-gray-400 text-xs">
              <span>3 comments</span>
              <span>Yesterday</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1F2022] p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Moodboards</h3>
            <p className="text-sm text-gray-300 mb-2">Creating UI Designs.</p>
            <span className="text-xs text-blue-400">UI Design</span>
          </div>
        </div>

        {/* In Work Column */}
        <div className="bg-[#2B2C2D] p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">In Work</h2>
          <p className="text-sm text-gray-400 mb-4">3 Tasks</p>

          {/* Card 1 */}
          <div className="bg-[#1F2022] p-4 mb-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Slack Integration</h3>
            <p className="text-sm text-gray-300 mb-2">
              Add a field in the portal to let the user connect their Slack
              account.
            </p>
            <span className="text-xs text-blue-400 block mb-2">
              Development
            </span>
            <div className="flex justify-between items-center text-gray-400 text-xs">
              <span>5 comments</span>
              <span>Tomorrow</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1F2022] p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Copywriting of the App</h3>
            <p className="text-sm text-gray-300 mb-2">
              Composing words to provide people with decision-making clarity.
            </p>
            <span className="text-xs text-blue-400 block mb-2">UX Writing</span>
            <div className="flex justify-between items-center text-gray-400 text-xs">
              <span>2 comments</span>
              <span>Nov 30</span>
            </div>
          </div>
        </div>

        {/* QA Column */}
        <div className="bg-[#2B2C2D] p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">QA</h2>
          <p className="text-sm text-gray-400 mb-4">2 Tasks</p>

          {/* Card 1 */}
          <div className="bg-[#1F2022] p-4 mb-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Dashboard Design</h3>
            <img
              src="https://via.placeholder.com/100"
              alt="Design Preview"
              className="rounded-lg mb-2"
            />
            <span className="text-xs text-blue-400">UI Design</span>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1F2022] p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Design System</h3>
            <p className="text-sm text-gray-300 mb-2">
              Create a consistent look and feel for both web and mobile.
            </p>
            <span className="text-xs text-blue-400">Development</span>
          </div>
        </div>

        {/* Completed Column */}
        <div className="bg-[#2B2C2D] p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Completed</h2>
          <p className="text-sm text-gray-400 mb-4">3 Tasks</p>

          {/* Card 1 */}
          <div className="bg-[#1F2022] p-4 mb-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Presentation</h3>
            <p className="text-sm text-gray-300 mb-2">
              Help businesses clearly define their annual strategy.
            </p>
            <span className="text-xs text-blue-400">Planning</span>
            <div className="flex justify-between items-center text-gray-400 text-xs">
              <span>11 comments</span>
              <span className="text-green-500">✔️ Done</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1F2022] p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Brainstorming</h3>
            <p className="text-sm text-gray-300 mb-2">Completed group session.</p>
            <span className="text-xs text-blue-400">Research</span>
            <div className="flex justify-between items-center text-gray-400 text-xs">
              <span>21 comments</span>
              <span className="text-green-500">✔️ Done</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex justify-between mt-6 space-x-2">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md">
          Schedule Meeting
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md">
          View Team Members
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md"
          onClick={handleNewTask} // Open the modal
        >
          New Task
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && <AdminNewTask onClose={handleCloseModal} />}
    </div>
  );
};

export default AdminProjects;
