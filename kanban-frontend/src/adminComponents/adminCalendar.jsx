import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css"; // Import react-big-calendar CSS

const localizer = momentLocalizer(moment);

const AdminCalendar = () => {
  const [events, setEvents] = useState([
    {
      title: "Board Meeting",
      start: new Date(),
      end: new Date(moment().add(1, "hours").toDate()),
      allDay: false,
    },
    {
      title: "Team Standup",
      start: new Date(moment().add(1, "days").toDate()),
      end: new Date(moment().add(1, "days").add(1, "hours").toDate()),
      allDay: false,
    },
  ]);

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
    <div className="admin-calendar bg-gray-900 text-white p-6 min-h-screen">
      <h1 className="text-3xl text-center mb-6">Admin Calendar</h1>
      <div className="bg-gray-800 rounded-lg shadow-lg p-4">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          selectable
          style={{ height: 500 }}
          onSelectEvent={handleSelectEvent}
          onSelectSlot={handleSelectSlot}
          eventPropGetter={() => ({
            style: {
              backgroundColor: "gray",
              color: "white",
              borderRadius: "0.5rem",
              padding: "0.5rem",
            },
          })}
          // Override default styles using Tailwind CSS
          components={{
            toolbar: ({ label }) => (
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">{label}</span>
              </div>
            ),
          }}
        />
      </div>
    </div>
  );
};

export default AdminCalendar;
