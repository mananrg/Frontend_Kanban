import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AdminSideBar from "./adminComponents/adminSidebar"; // Admin Sidebar component
import AdminSearchField from "./adminComponents/adminSearchBar"; // Admin SearchField (acts as Home)
import AdminProjects from "./adminComponents/adminProjects"; // Admin Projects component
import AdminCalendar from "./adminComponents/adminCalendar";
import AdminReports from "./adminComponents/adminReports";
import AdminMessages from "./adminComponents/adminMessages";
import UserList from "./adminComponents/userList";
import AdminAccount from "./adminComponents/adminAccount";
import PMSideBar from "./pmComponents/pmSideBar";
import PMProject from "./pmComponents/pmProject";
import PMSearchBar from "./pmComponents/pmSearchBar";
import Login from "./login"; // Import the Login component
import "./App.css";
import "./index.css";
import { useState } from "react"; // Import useState
import VolunteerSearchBar from "./volunteerComponents/volunteerSearchBar";
import VolunteerCalendar from "./volunteerComponents/volunteerCalendar";
import VolunteerMessages from "./volunteerComponents/volunteerMessages";
import VolunteerProject from "./volunteerComponents/volunteerProject";
import VolunteeReports from "./volunteerComponents/volunteerReports";
import VolunteerSideBar from "./volunteerComponents/volunteerSideBar";
import VolunteerAccount from "./volunteerComponents/volunteerAccount";

// Admin Layout
function AdminLayout() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  return (
    <div className={`content ${isSidebarExpanded ? "ml-64" : "ml-20"}`}>
      <div className="main-content relative">
        <div className="search transition-all duration-300">
          <Routes>
            <Route path="home" element={<AdminSearchField />} />
            <Route path="projects" element={<AdminProjects />} />
            <Route path="calendar" element={<AdminCalendar />} />
            <Route path="messages" element={<AdminMessages />} />
            <Route path="reports" element={<AdminReports />} />
            <Route path="people" element={<UserList />} />
            <Route path="account" element={<AdminAccount />} />
            <Route path="dashboard" element={<div>Admin Dashboard</div>} />
          </Routes>
        </div>
      </div>
      <AdminSideBar onToggle={(expanded) => setIsSidebarExpanded(expanded)} />
    </div>
  );
}

// PM Layout
function PMLayout() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  return (
    <div className={`content ${isSidebarExpanded ? "ml-64" : "ml-20"}`}>
      <div className="main-content relative">
        <div className="search transition-all duration-300">
          <Routes>
            <Route path="home" element={<PMSearchBar />} />
            <Route path="projects" element={<PMProject />} />
            <Route path="calendar" element={<AdminCalendar />} />
            <Route path="messages" element={<AdminMessages />} />
            <Route path="reports" element={<AdminReports />} />
            <Route path="people" element={<UserList />} />
            <Route path="account" element={<AdminAccount />} />
          </Routes>
        </div>
      </div>
      <PMSideBar onToggle={(expanded) => setIsSidebarExpanded(expanded)} />
    </div>
  );
}

// Volunteer Layout
function VolunteerLayout() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  return (
    <div className={`content ${isSidebarExpanded ? "ml-64" : "ml-20"}`}>
      <div className="main-content relative">
        <div className="search transition-all duration-300">
          <Routes>
            <Route path="home" element={<VolunteerSearchBar />} />
            <Route path="projects" element={<VolunteerProject />} />
            <Route path="calendar" element={<VolunteerCalendar />} />
            <Route path="messages" element={<VolunteerMessages />} />
            <Route path="reports" element={<VolunteeReports />} />
                        <Route path="account" element={<VolunteerAccount />} />

          </Routes>
        </div>
      </div>
      <VolunteerSideBar onToggle={(expanded) => setIsSidebarExpanded(expanded)} />
    </div>
  );
}

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <div id="root">
          <div className="background"></div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/admin/*" element={<AdminLayout />} />
            <Route path="/pm/*" element={<PMLayout />} />
            <Route path="/volunteer/*" element={<VolunteerLayout />} />

            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </Router>
    </DndProvider>
  );
}

export default App;
