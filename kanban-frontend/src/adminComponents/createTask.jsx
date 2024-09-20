import { useState } from "react";

const CreateTask = ({ onClose }) => {
  const [taskName, setTaskName] = useState("");
  const [requirements, setRequirements] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [priority, setPriority] = useState("High");
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: "User 1", avatar: "https://via.placeholder.com/40" },
    { id: 2, name: "User 2", avatar: "https://via.placeholder.com/40" },
  ]);

  const handleCreateTask = () => {
    alert("Task created!");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-[#E3F2FD] flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-3xl shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">ADD TASK</h2>
          <button onClick={onClose} className="text-lg font-bold">
            ✖️
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium">Task Name</label>
            <input
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              className="border border-blue-300 w-full p-2 rounded"
              placeholder="Task name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Requirements</label>
            <input
              type="text"
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
              className="border border-blue-300 w-full p-2 rounded"
              placeholder="Create the Wireframe by Monday"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-blue-300 w-full p-2 rounded h-24"
            placeholder="Write a Description..."
          />
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium">Start date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="border border-blue-300 w-full p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">End date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="border border-blue-300 w-full p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Priority</label>
            <div className="relative">
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="border border-blue-300 w-full p-2 rounded"
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
              {priority === "High" && (
                <div className="absolute right-5 top-3 w-3 h-3 bg-red-500 rounded-full"></div>
              )}
              {priority === "Medium" && (
                <div className="absolute right-5 top-3 w-3 h-3 bg-yellow-500 rounded-full"></div>
              )}
              {priority === "Low" && (
                <div className="absolute right-5 top-3 w-3 h-3 bg-green-500 rounded-full"></div>
              )}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Team</label>
          <div className="flex space-x-4 items-center">
            <button
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

        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleCreateTask}
            className="px-4 py-2 bg-black text-white rounded"
          >
            Create Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
