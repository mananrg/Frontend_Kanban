import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const VolunteerNewTask = ({ onClose }) => {
  const [taskName, setTaskName] = useState("");
  const [requirements, setRequirements] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [priority, setPriority] = useState("High");

  const handleSubmit = () => {
    // Handle form submission logic
    onClose(); // Close modal after task is created
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-blue-100 rounded-lg p-6 w-[600px]">
        <h2 className="text-center text-xl font-semibold mb-4 text-black">
          Add Task
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-sm text-black">Task Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded text-black placeholder-gray-500"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              placeholder="Task name"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-black">
              Requirements
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded text-black placeholder-gray-500"
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
              placeholder="Create the Wireframe by Monday"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block mb-2 text-sm text-black">Description</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded text-black placeholder-gray-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write a description..."
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block mb-2 text-sm text-black">Start Date</label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded text-black"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-black">End Date</label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded text-black"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block mb-2 text-sm text-black">Priority</label>
            <select
              className="w-full p-2 border border-gray-300 rounded text-black"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm text-black">Team</label>
            <div className="flex items-center">
              <button className="bg-gray-300 p-2 rounded-full mr-2">+</button>
              <img
                src="https://via.placeholder.com/40"
                alt="team member"
                className="w-10 h-10 rounded-full border-2 border-gray-300"
              />
              <img
                src="https://via.placeholder.com/40"
                alt="team member"
                className="w-10 h-10 rounded-full border-2 border-gray-300"
              />
              <img
                src="https://via.placeholder.com/40"
                alt="team member"
                className="w-10 h-10 rounded-full border-2 border-gray-300"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            className="px-4 py-2 mr-4 bg-gray-300 rounded-lg text-black"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-black text-white rounded-lg"
            onClick={handleSubmit}
          >
            Create Task
          </button>
        </div>
      </div>
    </div>
  );
};

// Add PropTypes validation for 'onClose' prop
VolunteerNewTask.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default VolunteerNewTask;
