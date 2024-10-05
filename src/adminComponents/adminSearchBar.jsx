import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import searchIcon from "@iconify-icons/mdi/magnify";
import CreateProject from "./adminCreateProject";
import ProjectCard from "./adminProjectCard";

const AdminSearchBar = () => {
  const [showCreateProject, setShowCreateProject] = useState(false);
  const [projects, setProjects] = useState([]);
  const token = import.meta.env.VITE_JWT_TOKEN
  const fetchProjects = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL_PROJECTS, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleAddProject = () => {
    setShowCreateProject(true);
  };

  const handleCloseCreateProject = () => {
    setShowCreateProject(false);
  };

  return (
    <div
      className="p-6 bg-[#1C1D1E] h-screen overflow-y-scroll scrollbar-hide pb-6"
      style={{ scrollBehavior: "smooth" }}
    >
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-semibold text-white">Welcome, Admin!</h1>
          <p className="text-lg text-gray-400">Here is your agenda for today</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="px-6 py-3 rounded-full bg-white border border-gray-300 w-80 shadow-md"
            />
            <Icon
              icon={searchIcon}
              className="absolute right-5 top-3 text-gray-500"
              width="24"
              height="24"
            />
          </div>
          <p className="text-white font-medium">Admin</p>

          {/* Replaced menuIcon with a profile picture */}
          <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden border-2 border-white">
            <img
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&q=80&w=200"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Project Cards Section */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <ProjectCard
              key={project._id || index}
              imageUrl={
                project.imageUrl ||
                "https://images.unsplash.com/photo-1580983561371-7f4b242d8ec0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              title={project.name}
              description={project.description}
              avatars={project.assigned_users.map(
                (user) => `${user.first_name} ${user.last_name}`
              )}
            />
          ))
        ) : (
          <p className="text-white">No projects available</p>
        )}

        {/* Add New Project Card */}
        <div className="flex flex-col bg-[#2B2C2D] rounded-lg p-6 shadow-lg border border-[#A1E3D8]">
          <div className="flex justify-center items-center h-full">
            <button
              onClick={handleAddProject}
              className="px-6 py-3 text-white text-lg border border-[#A1E3D8] rounded-full"
            >
              + Add New Project
            </button>
          </div>
        </div>
      </div>

      {/* Recent Projects Section */}
      <div className="overflow-y-auto max-h-96 scrollbar-hide mb-6">
        <h2 className="text-2xl font-semibold text-white mb-4">Recent Tasks</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-5 gap-6 bg-[#2B2C2D] rounded-lg p-4 shadow-md">
            <span className="text-lg text-white font-bold">Project Alpha</span>
            <span className="text-sm text-gray-400">25 May, 2020</span>
            <span className="text-sm text-gray-400">Rahul</span>
            <span className="text-sm text-gray-400">10 July, 2020</span>
            <span className="text-sm text-gray-400">In Process</span>
          </div>
          <div className="grid grid-cols-5 gap-6 bg-[#2B2C2D] rounded-lg p-4 shadow-md">
            <span className="text-lg text-white font-bold">Project Kanban</span>
            <span className="text-sm text-gray-400">12 May, 2020</span>
            <span className="text-sm text-gray-400">Leo Resim</span>
            <span className="text-sm text-gray-400">28 June, 2020</span>
            <span className="text-sm text-gray-400">Completed</span>
          </div>
          <div className="grid grid-cols-5 gap-6 bg-[#2B2C2D] rounded-lg p-4 shadow-md">
            <span className="text-lg text-white font-bold">OPT Portal</span>
            <span className="text-sm text-gray-400">21 April, 2020</span>
            <span className="text-sm text-gray-400">Tamim Iqbal</span>
            <span className="text-sm text-gray-400">11 June, 2020</span>
            <span className="text-sm text-gray-400">Open</span>
          </div>
        </div>
      </div>

      {/* Show CreateProject modal */}
      {showCreateProject && (
        <CreateProject onClose={handleCloseCreateProject} />
      )}

      {/* Empty Footer */}
      <footer className="h-16"></footer>
    </div>
  );
};

export default AdminSearchBar;
