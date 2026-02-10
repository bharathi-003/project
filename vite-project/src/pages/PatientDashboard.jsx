import MedicalRecords from "../records/MedicalRecords";
import Payments from "../payments/Payments";

export default function PatientDashboard() {
  return (
    <div>
      <h2>Patient Dashboard</h2>
      <MedicalRecords />
      <Payments />
    </div>
  );
}
