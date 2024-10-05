import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import ScarecrowImage from "./assets/Scarecrow.png"; // Import the image

function PageNotFound() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">404 - Not Found</h1>
      
      <div className="flex flex-col items-center space-y-8">
        {/* Image container */}
        <div className="w-full flex justify-center">
          <img
            className="w-[80%] max-w-xs md:max-w-md lg:max-w-lg"
            src={ScarecrowImage}
            alt="404-Scarecrow"
          />
        </div>

        {/* Content container */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">I have bad news for you</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed or is temporarily unavailable.
          </p>
          <Button />
        </div>
      </div>
    </div>
  );
}

function Button() {
  const navigate = useNavigate(); // Initialize navigate

  const handleClick = () => {
    navigate("/"); // Navigate to home page
  };

  return (
    <button
      onClick={handleClick} // On button click, trigger navigation
      className="bg-blue-500 text-white px-4 py-2 rounded-md"
    >
      Back to homepage
    </button>
  );
}

export default PageNotFound;
