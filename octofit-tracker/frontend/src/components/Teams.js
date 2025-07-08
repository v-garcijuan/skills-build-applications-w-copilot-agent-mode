import React, { useEffect, useState } from 'react';


function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://opulent-lamp-7vw67qw46qrq3wx7w-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="card shadow p-4 mb-4 bg-white rounded">
      <h1 className="display-5 mb-4 slide-right">Teams</h1>
      <ul className="list-group">
        {teams.map(team => (
          <li key={team._id} className="list-group-item d-flex justify-content-between align-items-center">
            <span className="fw-bold">{team.name}</span>
            <span className="badge bg-primary rounded-pill">Members: {team.members && team.members.length}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Teams;
