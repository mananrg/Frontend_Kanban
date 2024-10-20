import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { PopupWidget } from "react-calendly"; // Import Calendly popup widget
import VolunteerCreateEvent from "./volunteerCreateEvent"; // Import the VolunteerCreateEvent component

const localizer = momentLocalizer(moment);

const VolunteerCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([
    {
      title: "Meeting with the Backend team",
      start: new Date(2024, 7, 12, 7, 0), // August 12, 7:00 AM
      end: new Date(2024, 7, 12, 8, 0),
      allDay: false,
    },
    {
      title: "Chat with Nik Brown",
      start: new Date(2024, 7, 13, 7, 0), // August 13, 7:00 AM
      end: new Date(2024, 7, 13, 8, 0),
      allDay: false,
    },
  ]);

  const [showCreateEvent, setShowCreateEvent] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  const handleCreateEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const handleOpenCalendly = () => {
    setShowCalendly(true);
  };

  const handleSelectEvent = (event) => {
    alert(`Event: ${event.title}`);
  };

  const handleSelectSlot = (slotInfo) => {
    const title = window.prompt("New Event Name");
    if (title) {
      const newEvent = {
        title,
        start: slotInfo.start,
        end: slotInfo.end,
        allDay: slotInfo.action === "doubleClick",
      };
      setEvents([...events, newEvent]);
    }
  };

  return (
    <div className="admin-calendar rounded-lg bg-gray-1000 text-white p-6 min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Calendar</h1>
        <div className="flex space-x-4">
          <button
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            onClick={() => setShowCreateEvent(true)}
          >
            Create Event
          </button>
          <button
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            onClick={handleOpenCalendly}
          >
            Open Calendly
          </button>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="bg-gray-1000 rounded-lg shadow-lg p-4">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          selectable
          style={{ height: 600, backgroundColor: "#1C1D1E", color: "white" }}
          date={currentDate}
          onNavigate={(date) => setCurrentDate(date)}
          onSelectEvent={handleSelectEvent}
          onSelectSlot={handleSelectSlot}
          eventPropGetter={() => ({
            style: {
              backgroundColor: "#AEB7D0",
              color: "Black",
              borderRadius: "0.95rem",
              padding: "0.25rem 0.5rem",
              border: "1px solid #6b7280",
            },
          })}
          components={{
            toolbar: ({ label }) => (
              <div className="flex justify-between items-center bg-gray-1000 mb-4 text-white">
                <span className="text-lg font-semibold">{label}</span>
              </div>
            ),
            event: ({ event }) => (
              <div className="bg-gray-1000 text-sm font-medium">
                {event.title}
              </div>
            ),
            dayHeader: ({ label }) => (
              <div className="bg-gray-1000 text-sm text-center py-2">
                <span className="font-semibold">{label}</span>
              </div>
            ),
            timeGutter: ({ label }) => (
              <div className="bg-gray-1000 text-xs text-right pr-2">
                {label}
              </div>
            ),
          }}
        />
      </div>

      {/* Show CreateEvent Modal */}
      {showCreateEvent && (
        <VolunteerCreateEvent
          onClose={() => setShowCreateEvent(false)}
          onSave={handleCreateEvent}
        />
      )}

      {/* Show Calendly Popup Widget */}
      {showCalendly && (
        <PopupWidget
          url="https://calendly.com/your-calendly-link"
          rootElement={document.getElementById("root")}
          text="Schedule time with me"
          textColor="#ffffff"
          color="#00a2ff"
          onClose={() => setShowCalendly(false)} // Close Calendly popup on complete
        />
      )}
    </div>
  );
};

export default VolunteerCalendar;
