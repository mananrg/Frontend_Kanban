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

// Pages
const Home = () => <div>Home Page</div>;
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
  return (
    <div className="content">
      <div className="main-content relative">
        <div className="search">
          <ProjectManagerSearchField />
        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/projects/project1" element={<Project1 />} />
          <Route path="/projects/project2" element={<Project2 />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/people" element={<People />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
      <Sidebar />
    </div>
  );
}

// Admin Layout
function AdminLayout() {
  return (
    <div className="content">
      <div className="main-content relative">
        <div className="search">
          <AdminSearchField />
        </div>
        <Routes>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/reports" element={<Reports />} />
          <Route path="/admin/people" element={<People />} />
          <Route path="/admin/account" element={<Account />} />
        </Routes>
      </div>
      <Sidebar />
    </div>
  );
}

function App() {
  // Example role state; in a real application, this could come from context or props
  //const userRole = "projectManager"; // or "admin"

  return (
    <Router>
      <div id="root">
        <div className="background"></div> {/* Background with blur effect */}
        <Routes>
          <Route path="/pm/*" element={<ProjectManagerLayout />} />
          <Route path="/admin/*" element={<AdminLayout />} />
          <Route path="/" element={<Navigate to="/pm/home" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
