import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./pmComponents/SideBar"; // Common Sidebar component
import ProjectManagerSearchField from "./pmComponents/SearchBar"; // Project Manager SearchField
import AdminSearchField from "./adminComponents/adminSearchBar"; // Admin SearchField
import "./App.css";
import "./index.css";
import { useState, useEffect } from "react"; // Import useState and useEffect
import KanbanBoard from "./adminComponents/kanbanBoard";
import UserList from "./adminComponents/userList";

// Pages
const Home = () => {
  useEffect(() => {
    console.log("Home");
  }, []);

  return <div>Home Page</div>;
};

const Project1 = () => <div>Project 1 Page</div>;
const Project2 = () => <div>Project 2 Page</div>;
const Calendar = () => <div>Calendar Page</div>;
const Messages = () => <div>Messages Page</div>;
const Reports = () => <div>Reports Page</div>;
const People = () => <div>People Page</div>;
const Account = () => <div>Account Page</div>;
const AdminDashboard = () => <div>Admin Dashboard</div>;

// Project Manager Layout
function ProjectManagerLayout() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  return (
    <div className={`content ${isSidebarExpanded ? "ml-64" : "ml-20"}`}>
      <div className="main-content relative">
        <div className="search transition-all duration-300">
          <ProjectManagerSearchField />
        </div>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="projects/project1" element={<Project1 />} />
          <Route path="projects/project2" element={<Project2 />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="messages" element={<Messages />} />
          <Route path="reports" element={<Reports />} />
          <Route path="people" element={<People />} />
          <Route path="account" element={<Account />} />
        </Routes>
      </div>
      <Sidebar onToggle={(expanded) => setIsSidebarExpanded(expanded)} />
    </div>
  );
}

// Admin Layout
function AdminLayout() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  return (
    <div className={`content ${isSidebarExpanded ? "ml-64" : "ml-20"}`}>
      <div className="main-content relative">
        <div className="search transition-all duration-300">
          <AdminSearchField />
        </div>
        <Routes>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="reports" element={<Reports />} />
          <Route path="people" element={<People />} />
          <Route path="account" element={<Account />} />
          <Route path="kanban" element={<KanbanBoard />} />
        </Routes>
      </div>
      <Sidebar onToggle={(expanded) => setIsSidebarExpanded(expanded)} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div id="root">
        <div className="background"></div>
        <Routes>
          <Route path="/pm/*" element={<ProjectManagerLayout />} />
          <Route path="/admin/*" element={<AdminLayout />} />
          {/* <Route path="/" element={<Navigate to="/pm/home" />} /> */}
<Route path= "/" element={<UserList />}     />     
        </Routes>
      </div>
    </Router>
  );
}

export default App;
