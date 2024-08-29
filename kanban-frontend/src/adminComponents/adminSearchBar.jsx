import { Icon } from "@iconify/react";
import menuIcon from "@iconify-icons/mdi/menu";

const AdminSearchBar = () => {
  return (
    <div className="p-6 bg-transparent min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-semibold text-white">Welcome, Admin!</h1>
          <p className="text-lg text-white">Here is your agenda for today</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="px-4 py-2 rounded-full bg-white border border-gray-300 w-80 shadow"
            />
            <Icon
              icon={menuIcon}
              className="absolute right-3 top-3 text-gray-500"
              width="24"
              height="24"
            />
          </div>
          <Icon
            icon={menuIcon}
            className="text-white cursor-pointer"
            width="30"
            height="30"
          />
          <Icon
            icon={menuIcon}
            className="text-white cursor-pointer"
            width="30"
            height="30"
          />
        </div>
      </div>

      {/* Tasks Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">My Tasks</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="flex flex-col items-center bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-4 shadow-md">
            <span className="text-4xl font-bold text-white">2/4</span>
            <p className="text-xl text-white">Priority Tasks</p>
          </div>
          <div className="flex flex-col items-center bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-4 shadow-md">
            <span className="text-4xl font-bold text-white">2/4</span>
            <p className="text-xl text-white">Overdue Tasks</p>
          </div>
          <div className="flex flex-col items-center bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-4 shadow-md">
            <span className="text-4xl font-bold text-white">2/4</span>
            <p className="text-xl text-white">Pending Tasks</p>
          </div>
        </div>
      </div>

      {/* Recent Projects Section */}
      <div>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Recent Projects
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-4 shadow-md">
            <span className="text-lg text-white font-bold">Autodesk</span>
            <span className="text-sm text-white">25 May, 2020</span>
            <span className="text-sm text-white">Raima Hasan</span>
            <span className="text-sm text-white">10 July, 2020</span>
            <span className="text-sm text-white">In Process</span>
          </div>
          <div className="flex justify-between items-center bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-4 shadow-md">
            <span className="text-lg text-white font-bold">Target</span>
            <span className="text-sm text-white">12 May, 2020</span>
            <span className="text-sm text-white">Leo Resim</span>
            <span className="text-sm text-white">28 June, 2020</span>
            <span className="text-sm text-white">In Process</span>
          </div>
          <div className="flex justify-between items-center bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-4 shadow-md">
            <span className="text-lg text-white font-bold">RE/MAX</span>
            <span className="text-sm text-white">21 April, 2020</span>
            <span className="text-sm text-white">Tamim Iqbal</span>
            <span className="text-sm text-white">11 June, 2020</span>
            <span className="text-sm text-white">Open</span>
          </div>
        </div>
      </div>

      {/* Slack Integration Section */}
      <div className="mt-8 flex justify-end">
        <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-6 shadow-md relative w-1/3">
          <h2 className="text-xl font-semibold text-white mb-4">Slack</h2>
          <div className="text-white">
            <p className="text-sm">Reports progress</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-green-400">12/30</span>
              <span className="text-yellow-400">Medium Priority</span>
            </div>
            <p className="text-sm mt-4">Due date: 20 JUN</p>
            <div className="flex mt-4">
              <Icon
                icon={menuIcon}
                className="text-white"
                width="24"
                height="24"
              />
              <Icon
                icon={menuIcon}
                className="text-white ml-2"
                width="24"
                height="24"
              />
              <Icon
                icon={menuIcon}
                className="text-white ml-2"
                width="24"
                height="24"
              />
              <span className="ml-2 text-white">+2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSearchBar;
