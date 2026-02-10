import { Link } from "react-router-dom";

export default function DoctorCard({ doctor }) {
  return (
    <div>
      <h3>{doctor.name}</h3>
      <p>{doctor.specialization}</p>
      <Link to={`/doctors/${doctor.id}`}>View</Link>
    </div>
  );
}
