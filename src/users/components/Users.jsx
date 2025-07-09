import { useState } from "react";
import "./Users.css";
import data from "../assets/data.json";

export default function Users() {
  const [users, setUsers] = useState(data);
  const [search, setSearch] = useState("");
  const [reset, setReset] = useState(false);

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    const filteredUsers = data.filter((user) => user.email === search);
    setUsers(filteredUsers);
    setReset(true);
    setSearch("");
  }

  function handleReset() {
    setUsers(data);
    setReset(false);
  }

  return (
    <div>
      <form action="submit" onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="search by email"
        />
        <button type="submit">Search</button>
        {reset ? (
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        ) : null}
      </form>
      <div className="users-container">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <img
              src={user.profilePicture}
              alt="profile picture"
              className="profile-picture"
            />
            <li>
              {user.username}
              <span className="verified-label">
                {user.verified ? "✅" : "❌"}
              </span>
            </li>
            <li>{user.email}</li>
            <li>{user.phone}</li>
          </div>
        ))}
      </div>
    </div>
  );
}
