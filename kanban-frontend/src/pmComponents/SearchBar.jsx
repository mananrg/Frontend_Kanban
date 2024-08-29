import { Icon } from "@iconify/react";
import menuIcon from "@iconify-icons/mdi/menu";

const SearchBar = () => {
  return (
    <div className="p-6 bg-transparent min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-semibold text-white">
            Welcome, Juliana!
          </h1>
          <p className="text-white">Here is your agenda for today</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Hinted search text"
              className="px-4 py-2 rounded-full bg-white border border-gray-300 w-80 shadow"
            />
            <Icon
              icon={menuIcon}
              className="absolute right-3 top-3 text-white"
              width="24"
              height="24"
            />
          </div>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Tasks Card - Single Column */}
        <div className="col-span-1 bg-white bg-opacity-20 backdrop-blur-md rounded-3xl p-6 shadow-md relative">
          <h2 className="text-xl font-semibold mb-4 text-white">Tasks</h2>
          <ul className="text-white">
            <li>Create Wireframe</li>
            <li>Set up a Team Meeting</li>
            <li>Assign deadlines</li>
          </ul>
          <Icon
            icon={menuIcon}
            className="absolute top-4 right-4 text-gray-400"
            width="24"
            height="24"
          />
        </div>

        {/* Two Columns for Other Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 col-span-1">
          {/* Team Directory Card */}
          <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-3xl p-6 shadow-md relative">
            <h2 className="text-xl font-semibold mb-4 text-white">
              Team Directory
            </h2>
            <Icon
              icon={menuIcon}
              className="absolute top-4 right-4 text-gray-400"
              width="24"
              height="24"
            />
          </div>

          {/* Project Directory Card */}
          <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-3xl p-6 shadow-md relative">
            <h2 className="text-xl font-semibold mb-4 text-white">
              Project Directory
            </h2>
            <Icon
              icon={menuIcon}
              className="absolute top-4 right-4 text-gray-400"
              width="24"
              height="24"
            />
          </div>

          {/* Messages Card */}
          <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-3xl p-6 shadow-md relative">
            <h2 className="text-xl font-semibold mb-4 text-white">Messages</h2>
            <Icon
              icon={menuIcon}
              className="absolute top-4 right-4 text-gray-400"
              width="24"
              height="24"
            />
          </div>

          {/* Slack Integration Card */}
          <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-3xl p-6 shadow-md relative">
            <h2 className="text-xl font-semibold mb-4 text-white">Slack</h2>
            <div className="text-gray-700">
              <p>Tasks done</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-green-500">Completed</span>
                <span className="text-white">12/30</span>
              </div>
              <p className="text-sm text-white mt-4">Due date: 20 JUN</p>
            </div>
            <Icon
              icon={menuIcon}
              className="absolute top-4 right-4 text-gray-400"
              width="24"
              height="24"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
