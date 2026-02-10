import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("patient");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login(email, role);
    navigate(role === "patient" ? "/patient" : "/doctor");
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <select onChange={(e) => setRole(e.target.value)}>
        <option value="patient">Patient</option>
        <option value="doctor">Doctor</option>
      </select>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

