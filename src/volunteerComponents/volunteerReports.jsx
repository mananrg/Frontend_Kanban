const VolunteeReports = () => {
  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Status Reports</h1>
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="What are you looking for?"
            className="px-4 py-2 rounded-full bg-gray-800 border-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-white font-medium">First Name</p>
          <div className="text-white cursor-pointer w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
            <i className="fas fa-user"></i>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-3 gap-4">
        {/* Status Reports and Progress */}
        <div className="col-span-2 bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Kanban weekly metrics</h2>
          <p className="text-lg text-gray-400 mb-6">68% Progress</p>
          <div className="h-32 flex items-end">
            {/* Bar Chart */}
            {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day, index) => (
              <div key={index} className="flex-1 text-center">
                <div
                  className={`bg-blue-${index === 3 ? "500" : "700"} h-${
                    index === 3 ? "32" : "20"
                  } mb-2 rounded`}
                ></div>
                <p>{day}</p>
              </div>
            ))}
          </div>
          <p className="text-green-400 mt-4">+67.68</p>
          <p className="text-gray-400 mt-2">
            Lorem Ipsum is simply dummy text of the printing
          </p>
        </div>

        {/* Analytics */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Analytics</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-blue-500 w-4 h-4 rounded-full mr-2"></div>
              <p className="flex-1">34% UI/UX</p>
            </div>
            <div className="flex items-center">
              <div className="bg-green-500 w-4 h-4 rounded-full mr-2"></div>
              <p className="flex-1">23% SE</p>
            </div>
            <div className="flex items-center">
              <div className="bg-yellow-500 w-4 h-4 rounded-full mr-2"></div>
              <p className="flex-1">18% Test</p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Table */}
      <div className="bg-gray-800 p-6 mt-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <p className="text-green-400 mb-4">30 done this month</p>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="text-left">
              <tr>
                <th className="px-4 py-2">Companies</th>
                <th className="px-4 py-2">Budget</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Completion</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {[
                {
                  name: "Chakra Soft UI Version",
                  budget: "$14,000",
                  status: "Working",
                  completion: "60%",
                },
                {
                  name: "Add Progress Track",
                  budget: "$3,000",
                  status: "Canceled",
                  completion: "10%",
                },
                {
                  name: "Fix Platform Errors",
                  budget: "Not set",
                  status: "Done",
                  completion: "100%",
                },
                {
                  name: "Launch our Mobile App",
                  budget: "$32,000",
                  status: "Done",
                  completion: "100%",
                },
                {
                  name: "Add the New Pricing Page",
                  budget: "$400",
                  status: "Working",
                  completion: "25%",
                },
              ].map((project, index) => (
                <tr key={index}>
                  <td className="px-4 py-2">{project.name}</td>
                  <td className="px-4 py-2">{project.budget}</td>
                  <td className="px-4 py-2">{project.status}</td>
                  <td className="px-4 py-2">
                    <div className="relative w-full h-2 bg-gray-700 rounded">
                      <div
                        className="absolute top-0 left-0 h-full bg-blue-500 rounded"
                        style={{ width: project.completion }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VolunteeReports;
