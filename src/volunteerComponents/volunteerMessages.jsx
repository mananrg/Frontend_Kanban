import { useState } from "react";
import { FiPhone, FiVideo, FiMoreHorizontal, FiSend } from "react-icons/fi";
import { BsFillCameraFill } from "react-icons/bs";
import { AiOutlinePaperClip } from "react-icons/ai";

const VolunteerMessages = () => {
  const [message, setMessage] = useState("");
  const [selectedChat, setSelectedChat] = useState("Rahul");
  const [chats, setChats] = useState({
    Rahul: [
      { sender: "You", text: "Hello!", time: "Today, 8.33pm" },
      {
        sender: "Rahul",
        text: "I am fine and how are you?",
        time: "Today, 8.34pm",
      },
      {
        sender: "You",
        text: "I am doing well, Can we have a meeting tomorrow?",
        time: "Today, 8.36pm",
      },
      {
        sender: "Rahul",
        text: "Yes Sure! 10 am works?",
        time: "Today, 8.58pm",
      },
    ],
  });

  const handleSendMessage = () => {
    if (message.trim()) {
      setChats({
        ...chats,
        [selectedChat]: [
          ...chats[selectedChat],
          { sender: "You", text: message, time: "Today, 9.00pm" },
        ],
      });
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-7xl h-[90vh] bg-white rounded-xl shadow-lg p-6 flex space-x-4">
        {/* Sidebar */}
        <div className="w-1/3 border-r border-gray-200 p-4">
          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 px-4 rounded-full bg-gray-100 text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none"
            />
          </div>

          {/* Groups Section */}
          <div className="mb-6">
            <h2 className="font-bold text-gray-700 text-lg">Groups</h2>
            <div className="space-y-4 mt-4">
              {/* Group Item */}
              <div className="flex justify-between items-center p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition">
                <div>
                  <p className="font-semibold">Front-end Team</p>
                  <p className="text-sm text-gray-500">
                    When can we have the meeting?!
                  </p>
                </div>
                <p className="text-xs text-gray-500">Today, 9.52pm</p>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition">
                <div>
                  <p className="font-semibold">Back-end Team</p>
                  <p className="text-sm text-gray-500">Any updates?</p>
                </div>
                <p className="text-xs text-gray-500">Yesterday, 12.31pm</p>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition">
                <div>
                  <p className="font-semibold">UI/ UX Team</p>
                  <p className="text-sm text-gray-500">
                    Complete till deadline
                  </p>
                </div>
                <p className="text-xs text-gray-500">Wednesday, 9.12am</p>
              </div>
            </div>
          </div>

          {/* People Section */}
          <div>
            <h2 className="font-bold text-gray-700 text-lg">People</h2>
            <div className="space-y-4 mt-4">
              {Object.keys(chats).map((person) => (
                <div
                  key={person}
                  onClick={() => setSelectedChat(person)}
                  className={`flex justify-between items-center p-3 rounded-lg cursor-pointer ${
                    selectedChat === person ? "bg-blue-100" : "bg-gray-100"
                  } hover:bg-gray-200 transition`}
                >
                  <div>
                    <p className="font-semibold">{person}</p>
                    <p className="text-sm text-gray-500">
                      You have to report it...
                    </p>
                  </div>
                  <p className="text-xs text-gray-500">Today, 2.40pm</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chat Section */}
        <div className="w-2/3 p-6 flex flex-col">
          {/* Chat Header */}
          <div className="flex justify-between items-center mb-6 border-b pb-4 border-gray-200">
            <div className="flex items-center space-x-4">
              <img
                src={`https://i.pravatar.cc/150?u=${selectedChat}`}
                alt="avatar"
                className="h-12 w-12 rounded-full"
              />
              <div>
                <h3 className="font-bold text-lg">{selectedChat}</h3>
                <p className="text-sm text-gray-500">
                  Online - Last seen, 2.02pm
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <FiPhone
                className="text-gray-500 hover:text-gray-800 transition cursor-pointer"
                size={24}
              />
              <FiVideo
                className="text-gray-500 hover:text-gray-800 transition cursor-pointer"
                size={24}
              />
              <FiMoreHorizontal
                className="text-gray-500 hover:text-gray-800 transition cursor-pointer"
                size={24}
              />
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 bg-gray-100 p-4 rounded-lg mb-4 overflow-y-auto">
            {chats[selectedChat].map((chat, index) => (
              <div
                key={index}
                className={`flex mb-4 ${
                  chat.sender === "You" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-lg shadow ${
                    chat.sender === "You"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  <p>{chat.text}</p>
                  <span className="text-xs text-gray-400">{chat.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="flex items-center space-x-4">
            <AiOutlinePaperClip
              className="text-gray-500 hover:text-gray-800 transition cursor-pointer"
              size={24}
            />
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              className="w-full p-3 bg-gray-200 rounded-full focus:outline-none"
            />
            <BsFillCameraFill
              className="text-gray-500 hover:text-gray-800 transition cursor-pointer"
              size={24}
            />
            <FiSend
              onClick={handleSendMessage}
              className="text-blue-500 hover:text-blue-700 transition cursor-pointer"
              size={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerMessages;
