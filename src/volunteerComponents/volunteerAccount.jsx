import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const VolunteerAccount = () => {
  const [user, setUser] = useState({
    username: "Jenny Wilson",
    email: "jenny@gmail.com",
    address: "New York, USA",
    nickname: "Sky Angel",
    dob: "April 28, 1981",
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
    // Clear session data if needed
    // Redirect to the login page
    navigate("/login");
  };

  return (
    <div className="max-w-3xl mx-auto bg-gray-50 p-8 shadow-lg rounded-lg">
      {/* Return to OPT Portal Button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => (window.location.href = "/opt-portal")}
          className="bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-200 text-lg"
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
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          User Profile
        </h2>
      </div>

      <div className="space-y-6">
        {Object.keys(user).map((field) => (
          <div key={field} className="flex justify-between items-center">
            <label className="block text-sm font-medium text-gray-700 capitalize">
              {field}:
            </label>
            {editField === field ? (
              <input
                type="text"
                value={tempValue}
                onChange={handleInputChange}
                onBlur={() => handleBlur(field)}
                onKeyPress={(e) => handleKeyPress(e, field)}
                autoFocus
                className="w-2/3 border-b-2 border-gray-300 focus:border-blue-500 outline-none p-2 transition-all duration-200"
              />
            ) : (
              <span className="w-2/3 text-gray-700">{user[field]}</span>
            )}
            <button
              onClick={() => handleEditClick(field)}
              className="text-blue-500 hover:text-blue-700"
            >
              <FaEdit />
            </button>
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
            <FaEdit />
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
            <div className="flex items-center">
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

      {/* Logout Button */}
      <div className="flex justify-end mt-10">
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

export default VolunteerAccount;
