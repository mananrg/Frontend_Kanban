import { InlineWidget } from "react-calendly";

const AdminMessages = () => {
  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Calendly Messaging</h1>
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

      {/* Calendly Embed */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Schedule a Meeting</h2>
        <InlineWidget url="https://calendly.com/YOUR_CALENDLY_URL" />
      </div>
    </div>
  );
};

export default AdminMessages;
