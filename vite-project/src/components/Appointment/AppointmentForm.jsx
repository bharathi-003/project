import React, { useState } from "react";

const AppointmentForm = ({ doctor, onSubmit }) => {
  const [data, setData] = useState({ date: "", time: "", reason: "" });

  const handleChange = e => setData({ ...data, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); onSubmit({ ...data, doctorName: doctor.name }); };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Booking with {doctor.name}</h3>
      <input type="date" name="date" onChange={handleChange} required />
      <input type="time" name="time" onChange={handleChange} required />
      <textarea name="reason" placeholder="Reason" onChange={handleChange} required />
      <button type="submit">Book</button>
    </form>
  );
};

export default AppointmentForm;
