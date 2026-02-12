import React from "react";

const DoctorCard = ({ doctor, onBook }) => (
  <div className="card">
    <img src={doctor.photo} alt={doctor.name} style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover" }} />
    <div>
      <h3>{doctor.name}</h3>
      <p>{doctor.specialty} | {doctor.experience} yrs | ₹{doctor.fees}</p>
      <p>Rating: {doctor.rating}</p>
      <button onClick={() => onBook({ doctorName: doctor.name })}>Book</button>
    </div>
  </div>
);

export default DoctorCard;
