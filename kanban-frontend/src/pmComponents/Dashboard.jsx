import { Icon } from "@iconify/react";
import menuIcon from "@iconify-icons/mdi/menu";
export default function Dashboard() {
  return (
    <div>
      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Tasks Card - Single Column */}
        <div className="col-span-1 bg-white bg-opacity-20 backdrop-blur-md rounded-3xl p-6 shadow-md relative">
          <h2 className="text-xl font-semibold mb-4">Tasks</h2>
          <ul className="text-gray-700">
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
            <h2 className="text-xl font-semibold mb-4">Team Directory</h2>
            <Icon
              icon={menuIcon}
              className="absolute top-4 right-4 text-gray-400"
              width="24"
              height="24"
            />
          </div>

          {/* Project Directory Card */}
          <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-3xl p-6 shadow-md relative">
            <h2 className="text-xl font-semibold mb-4">Project Directory</h2>
            <Icon
              icon={menuIcon}
              className="absolute top-4 right-4 text-gray-400"
              width="24"
              height="24"
            />
          </div>

          {/* Messages Card */}
          <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-3xl p-6 shadow-md relative">
            <h2 className="text-xl font-semibold mb-4">Messages</h2>
            <Icon
              icon={menuIcon}
              className="absolute top-4 right-4 text-gray-400"
              width="24"
              height="24"
            />
          </div>

          {/* Slack Integration Card */}
          <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-3xl p-6 shadow-md relative">
            <h2 className="text-xl font-semibold mb-4">Slack</h2>
            <div className="text-gray-700">
              <p>Tasks done</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-green-500">Completed</span>
                <span className="text-gray-500">12/30</span>
              </div>
              <p className="text-sm text-gray-500 mt-4">Due date: 20 JUN</p>
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
}
