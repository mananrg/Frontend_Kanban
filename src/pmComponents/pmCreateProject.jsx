import { useState } from "react";
import { FaTrash, FaPlus, FaEye, FaPencilAlt } from "react-icons/fa";
import emailjs from "emailjs-com";

const PMCreateProject = ({ onClose }) => {
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
  const token = "YOUR_BEARER_TOKEN"; // Replace with your actual token

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
      sendInviteEmail(emailInput, selectedRole); // Send invite email
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

    emailjs.send(import.meta.env.VITE_SERVICE_ID,
  import.meta.env.VITE_TEMPLATE_ID,
  templateParams,
  import.meta.env.VITE_PRIVATE_KEY)
      .then((response) => {
        console.log("Email sent successfully:", response);
        alert("Invitation sent!");
      }, (error) => {
        console.error("Error sending email:", error);
        alert("Failed to send invitation.");
      });
  };

  const handleCreateProject = async () => {
    const projectData = {
      name: projectName,
      description,
      start_date: new Date(startDate).toISOString(),
      end_date: new Date(endDate).toISOString(),
      priority,
      assigned_users: [],
      tasks: [],
      team_groups: [],
    };

    console.log('Sending project data:', projectData);

    try {
      const response = await fetch(import.meta.env.VITE_API_URL_PROJECTS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(projectData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Network response was not ok: ${errorText}`);
      }

      const result = await response.json();
      console.log('Project created successfully:', result);
      alert("Project created!");

      // Send notification email after creating the project
      sendProjectCreationEmail(); 

      window.location.reload();
      onClose();
    } catch (error) {
      console.error('Error creating project:', error);
      alert("Failed to create project.");
    }
  };

  const sendProjectCreationEmail = () => {
    const templateParams = {
      project_name: projectName,
      description: description,
      start_date: startDate,
      end_date: endDate,
      priority: priority,
      team_members: members.map(member => member.email).join(", "),
    };

    emailjs.send(import.meta.env.VITE_SERVICE_ID,
  import.meta.env.VITE_TEMPLATE_ID,
  templateParams,
  import.meta.env.VITE_PRIVATE_KEY)
      .then((response) => {
        console.log("Project creation email sent successfully:", response);
      }, (error) => {
        console.error("Error sending project creation email:", error);
      });
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#EAF4FE] rounded-3xl p-8 w-full max-w-3xl max-h-[80vh] overflow-y-auto shadow-lg" style={{ backgroundColor: "#EAF4FE", borderRadius: "20px" }}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Create Project</h2>
          <button onClick={onClose} className="text-lg font-bold">✖️</button>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-left">Project Name</label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="border border-[#006FD6] w-full p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
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
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-left">End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="border border-[#006FD6] w-full p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-left">Priority</label>
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

                <div className="flex items-center space-x-2">
                  {roleIcons[member.role]}
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

        {/* Invite Modal */}
        {showInviteModal && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-1/3">
              <h2 className="text-lg font-semibold mb-4">Invite Team Member</h2>
              <input
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="border border-gray-300 w-full p-2 rounded mb-4"
                placeholder="Enter email"
              />
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="border border-gray-300 w-full p-2 rounded mb-4"
              >
                <option value="Can Edit">Can Edit</option>
                <option value="Can View">Can View</option>
              </select>
              <div className="flex justify-between">
                <button onClick={handleAddMember} className="bg-blue-500 text-white p-2 rounded">
                  Invite
                </button>
                <button onClick={() => setShowInviteModal(false)} className="text-red-500">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Create Button */}
        <div className="flex justify-end mt-6">
          <button
            onClick={handleCreateProject}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Create Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default PMCreateProject;
