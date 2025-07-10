import { useState } from "react";
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
    <div className="container mt-4">
      <form
        onSubmit={handleSearch}
        className="p-3 rounded mb-4 d-flex align-items-center"
      >
        <div className="flex-grow-1 me-2">
          <input
            type="text"
            value={search}
            onChange={handleChange}
            placeholder="Search by email"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary me-2">
          Search
        </button>
        {reset ? (
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleReset}
          >
            Reset
          </button>
        ) : null}
      </form>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {users.map((user) => (
          <div key={user.id} className="col">
            <div className="card h-100">
              <img
                src={user.profilePicture}
                className="card-img-top img-fluid rounded-circle mx-auto mt-3"
                alt="profile"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title mb-1">
                  {user.username}
                  <span className="ms-2">{user.verified ? "✅" : "❌"}</span>
                </h5>
                <p className="card-text text-muted mb-1">{user.email}</p>

                <p className="card-text text-muted">{user.phone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
