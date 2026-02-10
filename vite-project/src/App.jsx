import Login from "./auth/Login";
import Register from "./auth/Register";
import DoctorSearch from "./pages/DoctorSearch";
import DoctorProfile from "./pages/DoctorProfile";
import BookAppointment from "./pages/BookAppointment";
import PatientDashboard from "./pages/PatientDashboard";
import ProtectedRoute from "./Componenets/ProtectedRoute";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/patient"
        element={
          <ProtectedRoute role="patient">
            <PatientDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/doctor"
        element={
          <ProtectedRoute role="doctor">
            <DoctorDashboard />
          </ProtectedRoute>
        }
      />

      <Route path="/doctors" element={<DoctorSearch />} />
      <Route path="/doctors/:id" element={<DoctorProfile />} />
      <Route path="/book/:id" element={<BookAppointment />} />
    </Routes>
  );
}
