import React from "react";
import "./kanban.css";

const KanbanBoard = () => {
  return (
    <div className="kanban-app">
      <div className="sidebar">
        <ul>
          <li><i className="icon-home"></i></li>
          <li><i className="icon-projects"></i></li>
          <li><i className="icon-calendar"></i></li>
          <li><i className="icon-messages"></i></li>
          <li><i className="icon-people"></i></li>
          <li><i className="icon-reports"></i></li>
          <li className="bottom-section"><i className="icon-help"></i></li>
        </ul>
      </div>

      <div className="content">
        <header>
          <h1>Welcome, Admin!</h1>
          <div className="search-bar">
            <input type="text" placeholder="What are you looking for?" />
          </div>
        </header>

        <div className="task-cards">
          <div className="task-card">
            <div className="circular-progress">2/4</div>
            <h3>Priority Task</h3>
            <p>Complete the pending reviews and refactor code.</p>
          </div>
          <div className="task-card">
            <div className="circular-progress">2/4</div>
            <h3>Overdue Tasks</h3>
            <p>Finalize the design for the new Kanban layout.</p>
          </div>
          <div className="task-card">
            <div className="circular-progress">2/4</div>
            <h3>Pending Tasks</h3>
            <p>Prepare meeting agenda for the frontend team.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;
