import { useState } from "react";
import PropTypes from "prop-types";
import { FaPlus, FaTimes } from "react-icons/fa";

const VolunteerCreateEvent = ({ onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description] = useState("");
  const [participants, setParticipants] = useState(["Meet1", "Meet2", "Meet3"]);
  const [selectedDays, setSelectedDays] = useState([]);
  const daysOfWeek = ["Mon", "Teu", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const handleSave = () => {
    if (title && startDate && endDate) {
      onSave({
        title,
        start: new Date(startDate),
        end: new Date(endDate),
        description,
        participants,
      });
      onClose();
    } else {
      alert("Please fill in all required fields");
    }
  };

  const handleAddParticipant = () => {
    const newParticipant = window.prompt("Enter participant name:");
    if (newParticipant) {
      setParticipants([...participants, newParticipant]);
    }
  };

  const handleRemoveParticipant = (index) => {
    setParticipants(participants.filter((_, i) => i !== index));
  };

  const handleDaySelection = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-3xl p-8 w-full max-w-2xl shadow-lg border border-gray-300">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-6 border-b-2 pb-3 border-black">
          <h2 className="text-3xl font-semibold text-gray-800">
            Add New Event
          </h2>
          <button
            onClick={onClose}
            className="text-xl font-bold text-gray-500 hover:text-gray-700"
          >
            ✖️
          </button>
        </div>

        {/* Meeting Heading */}
        <div className="mb-6">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-4 border-2 border-black rounded-lg focus:outline-none focus:border-blue-500 text-gray-800 placeholder-gray-400"
            placeholder="Meeting heading..."
          />
        </div>

        {/* Smart Suggestions Section */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-black">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium text-gray-600">Smart suggestions</span>
            <span className="text-blue-600 font-semibold">Premium</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="border p-4 rounded-lg shadow-sm hover:shadow-lg transition duration-300 ease-in-out border-black">
              <p className="text-sm text-gray-500">Free slot 1</p>
              <p className="text-gray-800 font-medium">19 January 2024</p>
              <p className="text-green-600 font-semibold">9:00 PM</p>
              <p className="text-red-500 font-semibold">10:00 PM</p>
            </div>
            <div className="border p-4 rounded-lg shadow-sm hover:shadow-lg transition duration-300 ease-in-out border-black">
              <p className="text-sm text-gray-500">Free slot 2</p>
              <p className="text-gray-800 font-medium">20 January 2024</p>
              <p className="text-green-600 font-semibold">9:00 PM</p>
              <p className="text-red-500 font-semibold">10:00 PM</p>
            </div>
          </div>
        </div>

        {/* Date and Time Section */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm mb-2 text-gray-700">
              Start Date
            </label>
            <input
              type="datetime-local"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-lg focus:outline-none focus:border-blue-500 text-gray-800"
            />
          </div>
          <div>
            <label className="block text-sm mb-2 text-gray-700">End Date</label>
            <input
              type="datetime-local"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-lg focus:outline-none focus:border-blue-500 text-gray-800"
            />
          </div>
        </div>

        {/* Add Participants */}
        <div className="mb-6">
          <label className="block text-sm mb-2 text-gray-700">
            Add Participants
          </label>
          <div className="flex items-center space-x-3">
            {participants.map((participant, index) => (
              <div
                key={index}
                className="bg-gray-200 rounded-full px-4 py-2 flex items-center shadow-sm border-black border"
              >
                <span className="text-gray-700">{participant}</span>
                <button
                  onClick={() => handleRemoveParticipant(index)}
                  className="ml-2 text-red-600 hover:text-red-800 transition"
                >
                  <FaTimes />
                </button>
              </div>
            ))}
            <button
              onClick={handleAddParticipant}
              className="px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full transition duration-300 ease-in-out"
            >
              <FaPlus />
            </button>
          </div>
        </div>

        {/* Repeating Section */}
        <div className="mb-6">
          <label className="block text-sm mb-2 text-gray-700">Repeating</label>
          <div className="flex items-center space-x-3">
            {daysOfWeek.map((day, index) => (
              <button
                key={index}
                onClick={() => handleDaySelection(day)}
                className={`w-10 h-10 rounded-full border-2 text-sm font-bold transition ${
                  selectedDays.includes(day)
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-black hover:bg-gray-100"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-3 bg-gray-300 rounded-full hover:bg-gray-400 transition text-gray-700"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition font-semibold"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

VolunteerCreateEvent.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default VolunteerCreateEvent;
