import { useState } from "react";
import PropTypes from "prop-types";
import { FaTrash, FaPlus, FaEye, FaPencilAlt } from "react-icons/fa";

const PMCreateProject = ({ onClose }) => {
  const [projectName, setProjectName] = useState("");
  const [requirements, setRequirements] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [priority, setPriority] = useState("High");

  const [showInviteModal, setShowInviteModal] = useState(false); // Invite Modal State
  const [emailInput, setEmailInput] = useState("");
  const [selectedRole, setSelectedRole] = useState("Can Edit");
  const [members, setMembers] = useState([]);

  // Mapping roles to icons
  const roleIcons = {
    "Can View": <FaEye className="text-blue-500" />,
    "Can Edit": <FaPencilAlt className="text-green-500" />,
  };

  const handleAddMember = () => {
    if (emailInput) {
      setMembers([
        ...members,
        { id: members.length + 1, email: emailInput, role: selectedRole },
      ]);
      setEmailInput("");
    }
  };

  const handleRemoveMember = (id) => {
    setMembers(members.filter((member) => member.id !== id));
  };

  const handleCreateProject = () => {
    alert("Project successfully created!");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#EAF4FE] rounded-3xl p-8 w-full max-w-3xl max-h-[80vh] overflow-y-auto shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Create New Project</h2>
          <button onClick={onClose} className="text-lg font-bold">
            ✖️
          </button>
        </div>

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
              placeholder="Project Name"
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
              placeholder="Define Requirements"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-left">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-[#006FD6] w-full p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Add a Description..."
          />
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-left">
              Start Date
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="border border-[#006FD6] w-full p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-left">
              End Date
            </label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="border border-[#006FD6] w-full p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
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
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>

        {/* Team Management */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-left">
            Team Members
          </label>
          <div className="flex space-x-4 items-center">
            <button
              onClick={() => setShowInviteModal(true)}
              className="w-10 h-10 bg-blue-500 rounded-full text-white flex justify-center items-center hover:bg-blue-600 transition"
            >
              <FaPlus />
            </button>
          </div>

          {/* Display Members */}
          <div className="mt-4 space-y-2">
            {members.map((member, index) => (
              <div
                key={member.id}
                className="flex items-center justify-between border p-2 rounded-lg bg-white shadow-sm"
              >
                <div className="flex items-center space-x-2">
                  <span className="font-bold">{index + 1}.</span>
                  <span>{member.email}</span>
                </div>

                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    {roleIcons[member.role]}
                    <span className="ml-2">{member.role}</span>
                  </span>
                  <button
                    onClick={() => handleRemoveMember(member.id)}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

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

        {/* Invite Team Members Modal */}
        {showInviteModal && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-3xl w-1/2 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Invite Team Members</h3>
                <button
                  onClick={() => setShowInviteModal(false)}
                  className="text-lg font-bold"
                >
                  ✖️
                </button>
              </div>

              {/* Invite by email */}
              <div className="flex space-x-4 mb-4">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="border border-gray-300 p-2 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Invite by email"
                />
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="border border-gray-300 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="Can Edit">Can Edit</option>
                  <option value="Can View">Can View</option>
                </select>
                <button
                  onClick={handleAddMember}
                  className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

PMCreateProject.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default PMCreateProject;
