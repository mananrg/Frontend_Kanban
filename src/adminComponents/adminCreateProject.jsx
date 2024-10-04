import { useState } from "react";
import PropTypes from "prop-types";
import {
  FaTrash,
  FaPlus,
  FaPaperPlane,
  FaEye,
  FaPencilAlt,
} from "react-icons/fa";
import emailjs from "emailjs-com";

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
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmZlZmUyOTA5MTkwMDI1YjIwYTM3ZjkiLCJmaXJzdF9uYW1lIjoiSm9obiIsImxhc3RfbmFtZSI6IkRvZSIsImVtYWlsIjoiam9obmRvZUBleGFtcGxlLmNvbSIsInJvbGUiOiJQcm9qZWN0IE1hbmFnZXIiLCJpYXQiOjE3MjgwMDE4NTQsImV4cCI6MTcyODA4ODI1NH0.HXbJT_deEUFRp9u_ySufSakLombbnUzz4bgvNkPeolw"; // Replace with your actual token

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
      sendInviteEmail(emailInput, selectedRole); // Send email after adding member
      setEmailInput("");
    }
  };

  const handleRemoveMember = (id) => {
    setMembers(members.filter((member) => member.id !== id));
  };

  const sendInviteEmail = (email, role) => {
    const templateParams = {
      to_email: email,
      role: role,
      projectName: projectName,
    };

    console.log("Sending Email with parameters:", templateParams); // Log the parameters

    emailjs
      .send(
        "service_mlbjdkr",
        "template_n4ilima",
        templateParams,
        "mO9nL1o9Nwlv9aY6S"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        alert("Invitation sent!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert(`Failed to send invitation: ${error.text}`);
      });
  };

  const handleCreateProject = async () => {
    const projectData = {
      name: projectName,
      // requirements,
      description,
      start_date: new Date(startDate).toISOString(),
      end_date: new Date(endDate).toISOString(),
      priority,
      assigned_users: [],
      tasks: [],
      team_groups: [],
    };

    console.log("Sending project data:", projectData); // Log the data being sent

    try {
      const response = await fetch("http://18.191.65.40:3000/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Use your actual bearer token
        },
        body: JSON.stringify(projectData),
      });

      if (!response.ok) {
        const errorText = await response.text(); // Read the error response
        throw new Error(`Network response was not ok: ${errorText}`);
      }

      const result = await response.json();
      console.log("Project created successfully:", result);
      alert("Project created!");
      window.location.reload();
      onClose();
    } catch (error) {
      console.error("Error creating project:", error);
      alert("Failed to create project.");
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#EAF4FE] rounded-3xl p-8 w-full max-w-3xl max-h-[80vh] overflow-y-auto shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Create Project</h2>
          <button onClick={onClose} className="text-lg font-bold">
            ✖️
          </button>
        </div>

        {/* Form Fields */}
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
              placeholder="Task name"
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
              placeholder="Create the Wireframe by Monday"
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
            placeholder="Add a Description...."
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
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Email Invite Modal */}
        {showInviteModal && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded p-6 w-96">
              <h3 className="text-lg font-semibold mb-4">
                Invite a Team Member
              </h3>
              <input
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="border border-gray-300 w-full p-2 rounded mb-4"
                placeholder="Email address"
              />
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="border border-gray-300 w-full p-2 rounded mb-4"
              >
                <option value="Can View">Can View</option>
                <option value="Can Edit">Can Edit</option>
              </select>
              <div className="flex justify-end">
                <button
                  onClick={handleAddMember}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                  <FaPaperPlane /> Invite
                </button>
                <button
                  onClick={() => setShowInviteModal(false)}
                  className="ml-2 text-gray-500 hover:text-gray-700"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Create Project Button */}
        <div className="flex justify-end">
          <button
            onClick={handleCreateProject}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
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
};

export default CreateProject;
