import { useState } from "react";

const CreateTask = ({ onClose }) => {
  const [projectName, setProjectName] = useState("");
  const [requirements, setRequirements] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [showTeamManagement, setShowTeamManagement] = useState(false); // Track if team management is open
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: "User 1", avatar: "https://via.placeholder.com/40" },
    { id: 2, name: "User 2", avatar: "https://via.placeholder.com/40" },
  ]);

  const handleCreateProject = () => {
    alert("Project created!");
    onClose(); // Close the modal after creating the project
  };

  const handleAddTeamMember = () => {
    setShowTeamManagement(true); // Open the team management view
  };

  const handleBackToProject = () => {
    setShowTeamManagement(false); // Return to project creation view
  };

  const handleAddMember = (member) => {
    setTeamMembers([...teamMembers, member]); // Add new team member
    setShowTeamManagement(false); // Return to project view
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-4xl max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">
            {showTeamManagement ? "Manage Team" : "Create Project"}
          </h2>
          <button onClick={onClose} className="text-lg font-bold">
            ✖️
          </button>
        </div>

        {/* Conditional rendering: Project Form or Team Management */}
        {showTeamManagement ? (
          <>
            {/* Team Management Section */}
            <div className="mb-4">
              <h3 className="text-xl font-medium">Team Members</h3>
              <div className="flex flex-wrap space-x-4 items-center mt-4">
                {teamMembers.map((member) => (
                  <div key={member.id} className="flex items-center space-x-2">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <span>{member.name}</span>
                  </div>
                ))}
              </div>
              {/* Add Member Button */}
              <button
                onClick={() =>
                  handleAddMember({
                    id: teamMembers.length + 1,
                    name: `User ${teamMembers.length + 1}`,
                    avatar: "https://via.placeholder.com/40",
                  })
                }
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add Random Team Member
              </button>
            </div>

            {/* Back to Project Button */}
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleBackToProject}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Back to Project
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Project Form */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium">
                  Project Name
                </label>
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="border border-[#006FD6] w-full p-2 rounded"
                  placeholder="New Project Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Requirements
                </label>
                <input
                  type="text"
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  className="border border-[#006FD6] w-full p-2 rounded"
                  placeholder="UI Design & Programming"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border border-[#006FD6] w-full p-2 rounded"
                placeholder="Write a description..."
              />
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium">Start Date</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="border border-[#006FD6] w-full p-2 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">End Date</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="border border-[#006FD6] w-full p-2 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Priority</label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="border border-[#006FD6] w-full p-2 rounded"
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>

            {/* Team Section */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Team</label>
              <div className="flex space-x-4 items-center">
                <button
                  onClick={handleAddTeamMember} // Open team management on click
                  className="w-10 h-10 bg-blue-500 rounded-full text-white"
                >
                  +
                </button>
                {teamMembers.map((member) => (
                  <img
                    key={member.id}
                    src={member.avatar}
                    alt={member.name}
                    className="w-10 h-10 rounded-full"
                  />
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-4">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateProject}
                className="px-4 py-2 bg-black text-white rounded"
              >
                Create Project
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CreateTask;
