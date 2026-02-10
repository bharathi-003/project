import { useParams } from "react-router-dom";

export default function BookAppointment() {
  const { id } = useParams();

  return (
    <div>
      <h2>Book Appointment with Doctor #{id}</h2>
      <input type="date" />
      <input type="time" />
      <button>Confirm</button>
    </div>
  );
}
