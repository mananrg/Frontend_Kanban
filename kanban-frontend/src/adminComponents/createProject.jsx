import { useState } from "react";
import { FaTrash, FaPlus, FaPaperPlane, FaEye, FaPencilAlt } from "react-icons/fa"; 
//I'm adding these icons for add, edit, buttons in the modal 

const CreateProject = ({ onClose }) => {
  const [projectName, setProjectName] = useState("");
  const [requirements, setRequirements] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [priority, setPriority] = useState("High");

  const [showInviteModal, setShowInviteModal] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [selectedRole, setSelectedRole] = useState("Can Edit");
  const [members, setMembers] = useState([]);

  // Mapping roles to icons
  const roleIcons = {
    "Can View": <FaEye className="text-blue-500" />,   // Eye icon for 'Can View'
    "Can Edit": <FaPencilAlt className="text-green-500" /> // Pencil icon for 'Can Edit'
  };

  const handleAddMember = () => {
    if (emailInput) {
      setMembers([...members, { id: members.length + 1, email: emailInput, role: selectedRole }]);
      setEmailInput("");
    }
  };

  const handleRemoveMember = (id) => {
    setMembers(members.filter((member) => member.id !== id));
  };

  const handleCreateProject = () => {
    alert("Project created!");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div
        className="bg-[#EAF4FE] rounded-3xl p-8 w-full max-w-3xl max-h-[80vh] overflow-y-auto shadow-lg"
        style={{ backgroundColor: "#EAF4FE", borderRadius: '20px' }} //  for the rounded modal
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Create Project</h2>
          <button onClick={onClose} className="text-lg font-bold">✖️</button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-left">Project Name</label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="border border-[#006FD6] w-full p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              //className="border border-[#006FD6] w-full p-2 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400" // Rounded-full inputs
              placeholder="Task name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-left">Requirements</label>
            <input
              type="text"
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
              className="border border-[#006FD6] w-full p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              //className="border border-[#006FD6] w-full p-2 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Create the Wireframe by Monday"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-left">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-[#006FD6] w-full p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"

           // className="border border-[#006FD6] w-full p-2 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Add a Description...."
          />
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-left">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="border border-[#006FD6] w-full p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              //className="border border-[#006FD6] w-full p-2 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-left">End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="border border-[#006FD6] w-full p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              //className="border border-[#006FD6] w-full p-2 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-left">Priority</label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="border border-[#006FD6] w-full p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              //className="border border-[#006FD6] w-full p-2 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-left">Team</label>
          <div className="flex space-x-4 items-center">
            <button
              onClick={() => setShowInviteModal(true)}
              className="w-10 h-10 bg-blue-500 rounded-full text-white flex justify-center items-center hover:bg-blue-600 transition"
            >
              <FaPlus />
            </button>
          </div>

          {/* Display Members one by one */}
          <div className="mt-4 space-y-2">
            {members.map((member, index) => (
              <div key={member.id} className="flex items-center justify-between border p-2 rounded-lg bg-white shadow-sm">
                {/* Number and Email */}
                <div className="flex items-center space-x-2">
                  <span className="font-bold">{index + 1}.</span> {/* Let me try adding the numbering */}
                  <span>{member.email}</span>
                </div>

                {/* Role and Remove Button */}
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    {roleIcons[member.role]} {/* Trying to dosplay the icon -> based on role */}
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
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded-full hover:bg-gray-400 transition">
            Cancel
          </button>
          <button onClick={handleCreateProject} className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
            Create Project
          </button>
        </div>

        {/* Invite Team Members Modal */}
        {showInviteModal && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-3xl w-1/2 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Invite Team Members</h3>
                <button onClick={() => setShowInviteModal(false)} className="text-lg font-bold">✖️</button>
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
                <button onClick={handleAddMember} className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
                  <FaPaperPlane />
                </button>
              </div>

              {/* Members List */}
              <div className="mb-4">
                <label className="block text-left font-semibold mb-2">Members List:</label>
                {members.length > 0 ? (
                  members.map((member) => (
                    <div key={member.id} className="flex justify-between items-center mb-2">
                      <div>{member.email}</div>
                      <div className="flex items-center">
                        {roleIcons[member.role]}
                        <span className="ml-2">{member.role}</span>
                        <button
                          onClick={() => handleRemoveMember(member.id)}
                          className="ml-4 text-red-500 hover:text-red-700 transition"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No members added yet.</p>
                )}
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setShowInviteModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded-full hover:bg-gray-400 transition"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateProject;
