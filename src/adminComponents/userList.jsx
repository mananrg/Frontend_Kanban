import { useEffect, useState } from "react";
import axios from "axios";
import linkedinIcon from "@iconify-icons/mdi/linkedin";
import deleteIcon from "@iconify-icons/mdi/delete";
import { Icon } from "@iconify/react";

const UserList = () => {
  const [users, setUsers] = useState([]);

  // Fetch user data from API
  useEffect(() => {
    axios
      .get("https://66e364b0494df9a478e518c2.mockapi.io/api/v1/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the users!", error);
      });
  }, []);

  // Delete user by ID
  const handleDelete = (id) => {
    axios
      .delete(`https://66e364b0494df9a478e518c2.mockapi.io/api/v1/users/${id}`)
      .then(() => {
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((error) => {
        console.error("There was an error deleting the user!", error);
      });
  };

  // Automatic scrolling effect
  useEffect(() => {
    const container = document.querySelector(".scrollable-list");

    const scrollStep = () => {
      if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
        container.scrollTop = 0; 
      } else {
        container.scrollTop += 1; 
      }
    };

    // Let me try controlling the scroll speed 
    const intervalId = setInterval(scrollStep, 50); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen rounded-lg">
      
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">People</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
          Invite Members
        </button>
      </div>

      
      <div className="scrollable-list overflow-y-auto max-h-[80vh] shadow-lg bg-white rounded-lg p-6 custom-scrollbar">
        <table className="min-w-full table-auto text-left">
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="py-3 px-6 text-gray-800 font-medium">
                  {user.name}
                </td>
                <td className="py-3 px-6 text-center">
                  <a
                    href={user.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Icon
                      icon={linkedinIcon}
                      className="text-blue-600 hover:scale-110 transition-transform"
                      style={{ height: "24px", width: "24px" }}
                    />
                  </a>
                </td>
                <td className="py-3 px-6">
                  <div className="flex items-center space-x-2">
                    <Icon
                      icon={deleteIcon}
                      onClick={() => handleDelete(user.id)}
                      className="text-red-600 cursor-pointer hover:text-red-800 transition-colors"
                      style={{ height: "24px", width: "24px" }}
                    />
                    <span className="text-gray-700 font-semibold">Delete</span>
                  </div>
                </td>
                <td className="py-3 px-6 text-gray-600">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
