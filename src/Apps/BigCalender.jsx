import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

class BigCalendar extends React.Component {
  handleEventDrop = (info) => {
    // Handle event drop logic here
  };

  handleEventClick = (info) => {
    // Handle event click logic here
  };

  render() {
    const events = [
      { title: 'Event 1', date: '2025-02-22' },
      { title: 'Event 2', date: '2025-02-23' },
      { title: 'Event 3', date: '2025-02-24' },
    ];

    return (
      <div className="card">
        <div className="py-3 px-3">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            editable={true}
            eventDrop={this.handleEventDrop}
            eventClick={this.handleEventClick}
            events={events}
          />
        </div>
      </div>
    );
  }
}

export default BigCalendar;