import React, { useEffect, useState } from 'react';


function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://opulent-lamp-7vw67qw46qrq3wx7w-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div className="card shadow p-4 mb-4 bg-white rounded">
      <h1 className="display-5 mb-4">Workouts</h1>
      <ul className="list-group">
        {workouts.map(workout => (
          <li key={workout._id} className="list-group-item">
            <span className="fw-bold">{workout.name}</span>: <span className="text-muted">{workout.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Workouts;
