import React, { useState } from 'react';
import './WorkerForm.css'; // Import the stylesheet

const Workerregister = () => {
  const [worker, setWorker] = useState({
    name: '',
    Mobile: '',
    type: 'Cook', // default option
    location: 'Sarvodaya Nagar', // default option
    Fee: 0,
  });

  const handleChange = (e) => {
    setWorker({ ...worker, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8000/worker/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(worker),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Worker registered:', data);
        alert('Worker registered successfully!');
      } else {
        alert('Error registering worker: ' + response.statusText);
      }
    } catch (error) {
      console.error('Error registering worker:', error);
      alert('There was an error registering the worker.');
    }
  };

  return (
    <div className="form-container">
      <h2>Register Worker</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={worker.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Mobile:</label>
          <input
            type="text"
            name="Mobile"
            value={worker.Mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Type:</label>
          <select name="type" value={worker.type} onChange={handleChange}>
            <option value="Cook">Cook</option>
            <option value="Maid">Maid</option>
          </select>
        </div>
        <div className="form-group">
          <label>Location:</label>
          <select name="location" value={worker.location} onChange={handleChange}>
            <option value="Sarvodaya Nagar">Sarvodaya Nagar</option>
            <option value="Chanakya Nagar">Chanakya Nagar</option>
            <option value="TownShip">TownShip</option>
            <option value="Harakh">Harakh</option>
            <option value="Profesr Colony">Profesr Colony</option>
          </select>
        </div>
        <div className="form-group">
          <label>Fee:</label>
          <input
            type="number"
            name="Fee"
            value={worker.Fee}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-btn">Register Worker</button>
      </form>
    </div>
  );
};

export default Workerregister;
