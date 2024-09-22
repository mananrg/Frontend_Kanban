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
import "./App.css";
import "./index.css";
import { useState } from "react"; // Import useState

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
            <Route path="account" element={<div>Account Page</div>} />
            <Route path="dashboard" element={<div>Admin Dashboard</div>} />
          </Routes>
        </div>
      </div>
      <AdminSideBar onToggle={(expanded) => setIsSidebarExpanded(expanded)} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div id="root">
        <div className="background"></div>
        <Routes>
          <Route path="/admin/*" element={<AdminLayout />} />
          <Route path="/" element={<Navigate to="/admin/home" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
