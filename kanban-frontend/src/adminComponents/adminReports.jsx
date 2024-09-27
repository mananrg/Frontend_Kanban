import React, { useEffect, useRef } from "react";
import { SiAdobe, SiJira, SiSlack, SiSpotify, SiWebflow } from "react-icons/si";


const AdminReports = () => {
  // Create a ref for the scrollable container
  const scrollRef = useRef(null);

  // Scroll to the bottom when the component mounts
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  return (
    <div className="bg-[#00000] text-white min-h-screen flex">
      {/* Scrollable Main Content */}
      <div
        ref={scrollRef}
        className="flex-grow p-6 space-y-6 overflow-y-auto h-screen scrollbar-hide"
      >
        {/* Header Section */}
        <Header />

        {/* Status Reports & Analytics Section */}
        <div className="grid grid-cols-3 gap-6">
          {/* Status Reports and Progress */}
          <StatusReports />

          {/* Analytics Section */}
          <Analytics />
        </div>

        {/* Projects Table Section */}
        <ProjectsTable />
      </div>
    </div>
  );
};

/* Header Component */
const Header = () => (
  <div className="flex justify-between items-center">
    <h1 className="text-3xl font-bold">Status Reports</h1>
    <div className="flex items-center space-x-4">
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="px-4 py-2 pr-10 rounded-full bg-[#292B2F] border-none focus:ring-2 focus:ring-blue-500"
        />
        <i className="fas fa-search absolute right-4 top-2.5 text-gray-400"></i>
      </div>
      {/* User Profile */}
      <p className="text-white font-medium">First Name</p>
      <div className="text-white cursor-pointer w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
        <i className="fas fa-user"></i>
      </div>
    </div>
  </div>
);

/* Status Reports Section */
const StatusReports = () => (
  <div className="col-span-2 bg-black p-6 rounded-lg space-y-4">
    <div>
      <h2 className="text-2xl font-bold">Kanban weekly metrics</h2>
      <p className="text-lg text-gray-400">68% Progress</p>
    </div>
    <div className="flex items-center space-x-2">
      <div className="text-3xl font-bold">68%</div>
      <div className="bg-green-500 text-black px-2 py-1 rounded-full text-xs">+67.68</div>
    </div>
    <div className="h-32 flex items-end space-x-2">
      {/* Bar Chart */}
      {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day, index) => (
        <div key={index} className="flex-1 text-center">
          <div
            className={`mx-auto w-6 rounded-t-md ${index === 3 ? "h-24 bg-blue-500" : "h-16 bg-[#3D3D3D]"}`}
          ></div>
          <p>{day}</p>
        </div>
      ))}
    </div>
    <p className="text-gray-400">Lorem Ipsum is simply dummy text of the printing</p>
  </div>
);

/* Analytics Section */
const Analytics = () => (
  <div className="bg-black p-6 rounded-lg shadow-lg">
    <h2 className="text-3xl font-semibold text-white mb-6">Analytics</h2>
    <div className="space-y-6">
      {[
        { label: "UI/UX", value: 34, color: "bg-blue-500" },
        { label: "SE", value: 23, color: "bg-green-500" },
        { label: "Test", value: 18, color: "bg-yellow-500" },
      ].map((item, index) => (
        <div key={index} className="flex items-center space-x-3">
          <div className={`w-5 h-5 rounded-full ${item.color}`}></div>
          <p className="text-lg text-gray-300">
            {item.value}% <span className="font-medium">{item.label}</span>
          </p>
        </div>
      ))}
    </div>
  </div>
);


/* Projects Table Component [#292B2F]*/
const ProjectsTable = () => (
  <div className="bg-black p-6 rounded-lg">
    {/* Header Section */}
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold">Projects</h2>
      <p className="text-green-400">30 done this month</p>
    </div>

    {/* Projects Table */}
    <div className="overflow-x-auto">
      <table className="min-w-full text-left">
        {/* Table Header */}
        <thead className="border-b border-gray-700">
          <tr>
            <th className="px-4 py-2">COMPANIES</th>
            <th className="px-4 py-2">BUDGET</th>
            <th className="px-4 py-2">STATUS</th>
            <th className="px-4 py-2">COMPLETION</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="divide-y divide-gray-700">
          {/* Data Rows with Icons */}
          {[
            {
              name: "Chakra Soft UI Version",
              icon: <SiAdobe className="text-pink-500 mr-2" />,
              budget: "$14,000",
              status: "Working",
              completion: "60%",
            },
            {
              name: "Add Progress Track",
              icon: <SiJira className="text-blue-500 mr-2" />,
              budget: "$3,000",
              status: "Canceled",
              completion: "10%",
            },
            {
              name: "Fix Platform Errors",
              icon: <SiSlack className="text-green-500 mr-2" />,
              budget: "Not set",
              status: "Done",
              completion: "100%",
            },
            {
              name: "Launch our Mobile App",
              icon: <SiSpotify className="text-green-400 mr-2" />,
              budget: "$32,000",
              status: "Done",
              completion: "100%",
            },
            {
              name: "Add the New Pricing Page",
              icon: <SiWebflow className="text-blue-400 mr-2" />,
              budget: "$400",
              status: "Working",
              completion: "25%",
            },
          ].map((project, index) => (
            <tr key={index} className="hover:bg-[#333]">
              {/* Company Cell with Icon */}
              <td className="px-4 py-2 flex items-center underline">
                {project.icon}
                {project.name}
              </td>

              {/* Budget, Status, and Completion Cells */}
              <td className="px-4 py-2">{project.budget}</td>
              <td className="px-4 py-2">{project.status}</td>
              <td className="px-4 py-2">
                {/* Progress Bar */}
                <div className="relative w-full h-2 bg-gray-600 rounded">
                  <div
                    className="absolute top-0 left-0 h-full bg-blue-500 rounded"
                    style={{ width: project.completion }}
                  ></div>
                </div>
                <span className="ml-2">{project.completion}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);


export default AdminReports;
