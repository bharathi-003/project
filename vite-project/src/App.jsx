import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import AuthForm from "./components/Auth/AuthForm";
import DoctorList from "./components/Doctor/DoctorList";
import AppointmentForm from "./components/Appointment/AppointmentForm";
import Dashboard from "./components/Dashboard/Dashboard";
import FileList from "./components/Files/FileList";

import drA from "./assets/doctors/drA.jpg";
import drB from "./assets/doctors/drB.jpg";

function App() {
  const [doctors] = useState([
    { id: 1, name: "Dr. A", specialty: "Cardiologist", experience: 10, fees: 500, rating: 4.5, photo: drA },
    { id: 2, name: "Dr. B", specialty: "Dermatologist", experience: 7, fees: 400, rating: 4.2, photo: drB },
  ]);

  const [appointments, setAppointments] = useState([]);
  const [files] = useState([{ id: 1, name: "Lab Report.pdf" }, { id: 2, name: "Prescription.pdf" }]);

  const handleBooking = (appointment) => {
    setAppointments([...appointments, { id: appointments.length + 1, ...appointment, doctorName: appointment.doctorName || "Dr. A" }]);
    alert("Appointment booked!");
  };

  const handleDownload = (file) => alert(`Downloading ${file.name}`);

  return (
    <Router>
      <nav>
        <Link to="/">Login/Register</Link> |{" "}
        <Link to="/doctors">Doctors</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/files">Files</Link>
      </nav>

      <Routes>
        <Route path="/" element={<AuthForm mode="login" userType="patient" />} />
        <Route path="/doctors" element={<DoctorList doctors={doctors} onBook={handleBooking} />} />
        <Route path="/book/:doctorId" element={<AppointmentForm doctor={doctors[0]} onSubmit={handleBooking} />} />
        <Route path="/dashboard" element={<Dashboard userType="patient" appointments={appointments} records={files} />} />
        <Route path="/files" element={<FileList files={files} onDownload={handleDownload} />} />
      </Routes>
    </Router>
  );
}

export default App;
