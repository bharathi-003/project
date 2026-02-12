import React from "react";

const Dashboard = ({ userType, appointments, records }) => (
  <div className="dashboard">
    <h2>{userType} Dashboard</h2>

    <h3>Upcoming Appointments</h3>
    {appointments.length === 0 ? <p>No appointments yet.</p> : appointments.map(a => (
      <div key={a.id}>{a.doctorName} - {a.date || "Date not set"}</div>
    ))}

    {userType === "patient" && (
      <>
        <h3>Medical Records</h3>
        {records.map(r => <div key={r.id}>{r.name}</div>)}
      </>
    )}
  </div>
);

export default Dashboard;
