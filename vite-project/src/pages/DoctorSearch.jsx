import DoctorCard from "../Componenets/DoctorCard";

const doctors = [
  { id: 1, name: "Dr. Kumar", specialization: "Cardiology" },
  { id: 2, name: "Dr. Priya", specialization: "Dermatology" },
];

export default function DoctorSearch() {
  return (
    <div>
      <h2>Find Doctors</h2>
      {doctors.map((d) => (
        <DoctorCard key={d.id} doctor={d} />
      ))}
    </div>
  );
}
