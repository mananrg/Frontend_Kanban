import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const AdminAccount = () => {
  const [user, setUser] = useState({
    Name: "Jerry Wilson",
    username: "Jerry",
    number: "+1 123-456-7890",
    email: "jerrywilson@gmail.com",
    dob: "24 March 1999",
    location: "Boston, MA, USA",
    title: "Front end Developer, Volunteer",
    linkedin: "LinkedIn Link",
  });

  const [editField, setEditField] = useState(null);
  const [tempValue, setTempValue] = useState("");
  const [password, setPassword] = useState("********");
  const [newPassword, setNewPassword] = useState("");
  const [editPassword, setEditPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate(); // Use navigate for redirecting

  const handleEditClick = (field) => {
    setEditField(field);
    setTempValue(user[field]);
  };

  const handleInputChange = (e) => {
    setTempValue(e.target.value);
  };

  const handleSave = (field) => {
    setUser({ ...user, [field]: tempValue });
    setEditField(null);
  };

  const handleKeyPress = (e, field) => {
    if (e.key === "Enter") {
      handleSave(field);
    }
  };

  const handleBlur = (field) => {
    handleSave(field);
  };

  // Password validation logic
  const validatePassword = (value) => {
    let error = "";
    if (value.length < 8) {
      error = "Password must be at least 8 characters long.";
    } else if (!/[A-Z]/.test(value)) {
      error = "Password must include at least one uppercase letter.";
    } else if (!/[a-z]/.test(value)) {
      error = "Password must include at least one lowercase letter.";
    } else if (!/[0-9]/.test(value)) {
      error = "Password must include at least one digit.";
    } else if (!/[!@#$%^&*]/.test(value)) {
      error = "Password must include at least one special character.";
    }
    setPasswordError(error);
    return !error;
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
    validatePassword(e.target.value);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (validatePassword(newPassword)) {
      setPassword("********");
      setNewPassword("");
      setEditPassword(false);
      console.log("Password updated:", newPassword);
    }
  };

  // Logout Function
  const handleLogout = () => {
    navigate("/login");
  };

  return (
<div className="max-w-3xl mx-auto bg-white p-6 shadow-lg rounded-lg mb-10">
      {/* Return to OPT Portal Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => (window.location.href = "/opt-portal")}
          className="bg-gray-300 text-black font-semibold px-6 py-2 rounded-lg hover:bg-gray-400 transition-all duration-200"
        >
          Return to OPT Portal
        </button>
      </div>

      <div className="flex flex-col items-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-32 h-32 rounded-full mb-4 shadow-md border-2 border-gray-300"
        />
        <button className="mt-2 px-3 py-1 bg-gray-100 border border-gray-300 text-sm text-gray-600 hover:bg-gray-200 rounded-md">
          Upload Photo
        </button>
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          User Profile
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-6 items-start">
        {/* Render fields */}
        {Object.keys(user).map((field) => (
          <div key={field} className="flex justify-between items-start">
            <label className="block text-sm font-medium text-gray-700 capitalize">
              {field === "fullName" ? "Full Name" : field.replace(/([A-Z])/g, ' $1')}:
            </label>
            <div className="flex items-center w-full ">
              {editField === field ? (
                <input
                  type="text"
                  value={tempValue}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur(field)}
                  onKeyPress={(e) => handleKeyPress(e, field)}
                  autoFocus
                  className="border-2 pl-5 focus:border-blue-500 w-full  transition-all duration-200"
                />
              ) : (
                <span className="w-full text-gray-700 flex justify-end">{user[field]}</span>
              )}
              <button
                onClick={() => handleEditClick(field)}
                className="text-blue-500 hover:text-blue-700 ml-2 "
              >
                <FaEdit />
              </button>
            </div>
          </div>
        ))}
      </div>



      {/* Change Password Section */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-800">Password</h3>
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-700 text-sm">
            {showPassword ? newPassword || password : "********"}
          </span>
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="text-blue-500 hover:text-blue-700"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
          <button
            onClick={() => setEditPassword(!editPassword)}
            className="text-blue-500 hover:text-blue-700 ml-4"
          >
            Change password
          </button>
        </div>

        {editPassword && (
          <form onSubmit={handlePasswordSubmit} className="space-y-4 mt-4">
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">
                New Password
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={handlePasswordChange}
                className={`w-full border-2 p-2 rounded-md transition-all duration-200 ${
                  passwordError ? "border-red-500" : "border-gray-300"
                } focus:border-blue-500`}
              />
              {passwordError && (
                <p className="text-red-500 text-sm mt-2">{passwordError}</p>
              )}
            </div>
            <div className="flex items-center border ">
              <button
                type="submit"
                className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-600 transition-all duration-200"
                disabled={!!passwordError}
              >
                Update Password
              </button>
              {newPassword && !passwordError && (
                <p className="ml-4 text-sm text-green-500">
                  Password is strong
                </p>
              )}
            </div>
          </form>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={() => console.log("Save changes clicked")}
          className="bg-green-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-green-600 transition-all duration-200"
        >
          Save Changes
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-red-600 transition-all duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminAccount;
