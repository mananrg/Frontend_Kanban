import { useState } from "react";
import { FaEdit } from "react-icons/fa";

const AdminAccount = () => {
  const [user, setUser] = useState({
    username: "Jenny Wilson",
    email: "jenny@gmail.com",
    address: "New York, USA",
    nickname: "Sky Angel",
    dob: "April 28, 1981",
  });

  const [editField, setEditField] = useState(null); // Keeps track of which field is being edited
  const [tempValue, setTempValue] = useState(""); // Stores temporary value for the field being edited
  const [password, setPassword] = useState("********"); // State to display hidden password text
  const [newPassword, setNewPassword] = useState(""); // State to store new password input
  const [editPassword, setEditPassword] = useState(false); // State to track if the password is being edited
  const [passwordError, setPasswordError] = useState(""); // State to store password validation error

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
    return !error; // Return true if no error, else false
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
    validatePassword(e.target.value);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (validatePassword(newPassword)) {
      setPassword("********"); // Reset to hidden password view
      setNewPassword(""); // Clear the new password input
      setEditPassword(false); // Close the password edit field
      console.log("Password updated:", newPassword); // Log new password for backend integration
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
      {/* Return to OPT Portal Button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => (window.location.href = "/opt-portal")} // Replace with actual navigation logic
          className="bg-green-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-green-600 transition-colors text-lg"
        >
          Return to OPT Portal
        </button>
      </div>

      <div className="flex flex-col items-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-32 h-32 rounded-full mb-4 shadow-md"
        />
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
          User Profile
        </h2>
      </div>
      <div className="space-y-4">
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
                className="w-2/3 border-b-2 border-gray-300 focus:border-blue-500 outline-none p-1"
              />
            ) : (
              <span className="w-2/3">{user[field]}</span>
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
        <h3 className="text-xl font-semibold text-gray-800">Password</h3>
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-700 text-sm">{password}</span>
          <button
            onClick={() => setEditPassword(!editPassword)}
            className="text-blue-500 hover:text-blue-700"
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
                className={`w-full border-2 border-black p-2 ${
                  passwordError ? "border-red-500" : "border-black"
                } focus:border-blue-500 outline-none`}
              />
              {passwordError && (
                <p className="text-red-500 text-sm mt-2">{passwordError}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
              disabled={!!passwordError}
            >
              Update Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AdminAccount;
