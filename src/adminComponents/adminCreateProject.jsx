import { useState } from "react";
import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa";
import { BsFillCalendarFill } from "react-icons/bs";

const CreateProject = ({ onClose, onCreate }) => {
  const [projectName, setProjectName] = useState("");
  const [requirements, setRequirements] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [members, setMembers] = useState([]);

  // Priority options
  const priorityOptions = [
    { value: "High", color: "text-red-500" },
    { value: "Medium", color: "text-yellow-500" },
    { value: "Low", color: "text-green-500" },
  ];

  const handleAddMember = () => {
    setMembers([
      ...members,
      { id: members.length + 1, avatarUrl: "https://via.placeholder.com/40" },
    ]);
  };

  const handleCreateProject = () => {
    const newProject = {
      id: Date.now(),
      imageUrl: "https://via.placeholder.com/150",
      title: projectName,
      description: description || "No description provided.",
      avatars: members,
    };
    onCreate(newProject);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#EAF4FE] rounded-3xl p-8 w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-lg">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Create Project</h2>
          <button onClick={onClose} className="text-lg font-bold">
            ✖️
          </button>
        </div>

        {/* Project Input Fields */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-left">
              Project Name
            </label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="border border-[#006FD6] w-full p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="New Project Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-left">
              Requirements
            </label>
            <input
              type="text"
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
              className="border border-[#006FD6] w-full p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="UI-Design & Programming"
            />
          </div>
        </div>

        {/* Description Input Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-left">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-[#006FD6] w-full p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Write a Description...."
          />
        </div>

        {/* Attachments Section */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-left">
            Attachments
          </label>
          <input type="checkbox" className="h-5 w-5 text-blue-600" />
        </div>

        {/* Date and Priority Section */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-left">
              Start Date
            </label>
            <div className="relative">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="border border-[#006FD6] w-full p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <BsFillCalendarFill className="absolute top-2 right-2 text-blue-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-left">
              End Date
            </label>
            <div className="relative">
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="border border-[#006FD6] w-full p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <BsFillCalendarFill className="absolute top-2 right-2 text-blue-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-left">
              Priority
            </label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="border border-[#006FD6] w-full p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {priorityOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className={option.color}
                >
                  {option.value}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-left">Team</label>
          <div className="flex items-center space-x-4">
            {members.map((member) => (
              <img
                key={member.id}
                src={member.avatarUrl}
                alt="Avatar"
                className="h-10 w-10 rounded-full"
              />
            ))}
            <button
              onClick={handleAddMember}
              className="w-10 h-10 bg-blue-500 rounded-full text-white flex justify-center items-center hover:bg-blue-600 transition"
            >
              <FaPlus />
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-full hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleCreateProject}
            className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
          >
            Create Project
          </button>
        </div>
      </div>
    </div>
  );
};

CreateProject.propTypes = {
  onClose: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
};

export default CreateProject;
