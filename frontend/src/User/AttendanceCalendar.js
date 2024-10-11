import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calender.css';  
import Usernav from './Usernav';

const AttendanceCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [attendance, setAttendance] = useState({});
  const [attendanceLog, setAttendanceLog] = useState([]);

  const onDateChange = (date) => {
    setSelectedDate(date);

    const formattedDate = date.toISOString().split('T')[0];
    const isPresent = window.confirm('Is the employee present?');
    
    const status = isPresent ? 'Present' : 'Absent';

    // Update local state
    setAttendance((prevAttendance) => ({
      ...prevAttendance,
      [formattedDate]: status,
    }));

    // Save attendance to the database
    saveAttendance(formattedDate, status);
  };

  // Save attendance to backend using fetch
  const saveAttendance = async (date, status) => {
    try {
      const response = await fetch('https://cook-maid-services.vercel.app/api/attendance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date, status }),
      });

      if (response.ok) {
        console.log('Attendance saved to database.');
      } else {
        console.error('Error saving attendance.');
      }
    } catch (error) {
      console.error('Error saving attendance:', error);
    }
  };

  // Fetch attendance log using fetch
  const fetchAttendanceLog = async () => {
    try {
      const response = await fetch('https://cook-maid-services.vercel.app/api/attendance');
      if (response.ok) {
        const data = await response.json();
        setAttendanceLog(data);
      } else {
        console.error('Error fetching attendance log.');
      }
    } catch (error) {
      console.error('Error fetching attendance log:', error);
    }
  };

  useEffect(() => {
    fetchAttendanceLog(); // Fetch log on component mount
  }, []);

  return (
    <div className='calendar-app'>
      <Usernav />
      <div className="calendar-container">
        <h2>Employee Attendance Calendar</h2>
        <div className="calendar-wrapper">
          <Calendar
            onClickDay={onDateChange}
            value={selectedDate}
            tileClassName={({ date, view }) => {
              const formattedDate = date.toISOString().split('T')[0];
              if (attendance[formattedDate] === 'Present') return 'present';
              if (attendance[formattedDate] === 'Absent') return 'absent';
              return '';
            }}
          />
        </div>
        <div className="attendance-status">
          {selectedDate && (
            <p>
              Selected Date: {selectedDate.toDateString()} - Attendance:{" "}
              {attendance[selectedDate.toISOString().split('T')[0]] || "Not marked yet"}
            </p>
          )}
        </div>
        <button className="log-button" onClick={fetchAttendanceLog}>Show Attendance Log</button>

        {/* Attendance log */}
        <div className="attendance-log">
          <h3>Attendance Log</h3>
          <ul>
            {attendanceLog.map((log, index) => (
              <li key={index}>
                {log.date} - {log.status}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AttendanceCalendar;
