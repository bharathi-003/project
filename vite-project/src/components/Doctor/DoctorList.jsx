import React from "react";
import DoctorCard from "./DoctorCard";

const DoctorList = ({ doctors, onBook }) => (
  <div style={{ maxWidth: "600px", margin: "0 auto" }}>
    {doctors.map(d => <DoctorCard key={d.id} doctor={d} onBook={onBook} />)}
  </div>
);

export default DoctorList;
