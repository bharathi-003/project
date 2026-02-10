import { useParams, Link } from "react-router-dom";

export default function DoctorProfile() {
  const { id } = useParams();

  return (
    <div>
      <h2>Doctor Profile #{id}</h2>
      <p>Experience: 10 years</p>
      <Link to={`/book/${id}`}>Book Appointment</Link>
    </div>
  );
}
