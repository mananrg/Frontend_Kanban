import { useEffect, useState } from "react";
import axios from "axios";
// import "./UserList.css"; // Optional for custom styles
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

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "50px",
          margin: "40px",
        }}
      >
        <h1>User List</h1>
        <button>Invite members</button>
      </div>

      {/* Scrollable container */}
      <div
        style={{ maxHeight: "80vh", overflowY: "auto", margin: "20px 40px" }}
      >
        <table>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  <img
                    src={user.avatar}
                    alt={user.name}
                    style={{
                      width: "40px",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  />
                </td>
                <td>{user.name}</td>
                <td>
                  <a
                    href={user.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-180px"
                    style={{
                      display: "inline-block",
                      width: "180px",
                      textAlign: "center",
                    }}
                  >
                    <Icon
                      icon={linkedinIcon}
                      style={{ color: "blue", height: "40px", width: "40px" }}
                    />
                  </a>
                </td>
                <td>
                  <div style={{ display: "flex" }}>
                    <Icon
                      icon={deleteIcon}
                      onClick={() => handleDelete(user.id)}
                      style={{
                        color: "red",
                        height: "40px",
                        width: "40px",
                        justifyContent: "center",
                        textAlign: "center",
                        cursor: "pointer",
                      }}
                    />
                    <h3>Delete</h3>
                  </div>
                </td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
