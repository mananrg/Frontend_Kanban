import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import SearchField from './components/SearchBar';
import './App.css';
import './index.css';

const Home = () => <div>Home Page</div>;
const Project1 = () => <div>Project 1 Page</div>;
const Project2 = () => <div>Project 2 Page</div>;
const Calendar = () => <div>Calendar Page</div>;
const Messages = () => <div>Messages Page</div>;
const People = () => <div>People Page</div>;
const Account = () => <div>Account Page</div>;

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <div className="search">
            <SearchField />
          </div>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/projects/project1" element={<Project1 />} />
            <Route path="/projects/project2" element={<Project2 />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/people" element={<People />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
