import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Mock credentials for Admin and PM roles
  const credentials = {
    admin: { username: "admin", password: "admin123" },
    pm: { username: "pm", password: "pm123" },
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate admin credentials
    if (
      username === credentials.admin.username &&
      password === credentials.admin.password
    ) {
      navigate("/admin/home");
    }
    // Validate PM credentials
    else if (
      username === credentials.pm.username &&
      password === credentials.pm.password
    ) {
      navigate("/pm/home");
    }
    // Show error if credentials don't match
    else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-400">
      <div className="w-full max-w-5xl mx-auto flex bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Left Section - Image */}
        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1603793908221-22f0ef9d3d18')`,
          }}
        ></div>

        {/* Right Section - Login Form */}
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
            Welcome to Kanban Board!
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
            Login to your account
          </h2>

          {error && (
            <div className="text-red-500 text-center font-medium mb-4 animate-bounce">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border border-gray-300 w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                placeholder="Enter your username"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 shadow-lg"
            >
              Login
            </button>
          </form>

          {/* Optional Forgot Password and Sign-Up Links */}
          <div className="mt-6 text-center">
            <a href="#" className="text-sm text-blue-500 hover:text-blue-600">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
