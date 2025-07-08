import React, { useEffect, useState } from 'react';


function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://opulent-lamp-7vw67qw46qrq3wx7w-8000.app.github.dev/api/users/')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="card shadow p-4 mb-4 bg-white rounded">
      <h1 className="display-5 mb-4">Users</h1>
      <ul className="list-group">
        {users.map(user => (
          <li key={user._id} className="list-group-item d-flex justify-content-between align-items-center">
            <span className="fw-bold">{user.username}</span>
            <span className="text-muted">{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
